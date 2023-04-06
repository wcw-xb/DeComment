// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

library Util {
    function generateRandomId(
        address addr,
        string calldata _name
    ) internal view returns (bytes32) {
        bytes32 hash = keccak256(
            abi.encodePacked(block.timestamp, addr, _name)
        );
        return hash;
    }
}

contract PostManagement {
    struct PostInfo {
        string post_name; // 帖子名称
        string post_addr; // 帖子地址
        string post_offical_website; // 项目官网
        address post_owner; // 帖子发起人
        string description; // 帖子描述
        uint c_time; // 创建时间
        bytes32 post_id; // 帖子id
    }
    mapping(bytes32 => PostInfo) public PostMap;
    bytes32[] public TotalPost;
    mapping(address => bytes32) public AllPostOwner;

    function TotalPostLength() external view returns (uint) {
        return TotalPost.length;
    }

    function getPostId(uint index) external view returns (bytes32) {
        // 根据索引获取postid
        require(index < TotalPost.length, "Invalid index");
        return TotalPost[index];
    }

    function CreatePost(
        string calldata _name,
        string calldata addr,
        string calldata website,
        string memory description
    ) external {
        // 发起帖子
        string memory desp = bytes(description).length != 0
            ? description
            : "This post has no description yet.";

        bytes32 post_id = Util.generateRandomId(msg.sender, _name);
        PostInfo memory post = PostInfo(
            _name,
            addr,
            website,
            msg.sender,
            desp,
            block.timestamp,
            post_id
        );
        TotalPost.push(post_id);
        PostMap[post_id] = post;
        AllPostOwner[msg.sender] = post_id;
    }

    function getPostIdByOwner(address owner) public view returns (bytes32) {
        return AllPostOwner[owner];
    }

    function UpdataPost(
        bytes32 post_id,
        string calldata _name,
        string calldata addr,
        string calldata website,
        string calldata desp,
        address owner
    ) external {
        // 修改帖子信息
        require(msg.sender == PostMap[post_id].post_owner, "permission denied");
        // 无需转让
        PostMap[post_id].post_name = _name;
        PostMap[post_id].post_addr = addr;
        PostMap[post_id].post_offical_website = website;
        PostMap[post_id].description = desp;
        if (owner != address(0)) {
            // 需要转让
            PostMap[post_id].post_owner = owner;
            delete AllPostOwner[msg.sender];
            AllPostOwner[owner] = post_id;
        }
    }
}

contract CommentManagement {
    struct Comment {
        address commentator; // 评论人
        string comment_text; // 评论内容
    }

    mapping(bytes32 => Comment[]) TotalComments; // 所有评论[bytes32对应帖子的id]

    function post_comment(bytes32 post_id, string calldata text) external {
        // 发布评论
        TotalComments[post_id].push(Comment(msg.sender, text));
    }
}

contract RelationshipManagment {
    struct cooperate {
        bytes32 post_id;
        uint status; // 邀请状态
    }
    mapping(bytes32 => bytes32[]) public invitions;
    mapping(bytes32 => cooperate[]) inviter_map; // 邀请者列表
    mapping(bytes32 => cooperate[]) invitee_map; // 被邀请者列表

    function invite_cooperation(
        address post_managment_addr,
        bytes32 postid
    ) external {
        // 邀请合作
        bytes32 inviter_postid = PostManagement(post_managment_addr)
            .getPostIdByOwner(msg.sender);
        inviter_map[postid].push(cooperate(inviter_postid, 0));
        invitee_map[inviter_postid].push(cooperate(postid, 0));
    }

    function set_invitation_status(
        address post_managment_addr,
        bytes32 postid,
        uint _status
    ) external {
        if (_status == 1 || _status == 2) {
            bytes32 self_postid = PostManagement(post_managment_addr)
                .getPostIdByOwner(msg.sender);
            for (uint i = 0; i < inviter_map[self_postid].length; i++) {
                if (inviter_map[self_postid][i].post_id == postid) {
                    inviter_map[self_postid][i].status = _status;
                }
            }
        }
    }
}
