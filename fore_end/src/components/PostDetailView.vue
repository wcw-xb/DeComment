<template>
    <div class="wrapper-wrapper">
        <h2 class="post-detail">栏目详情</h2>
        <div class="post-title-wrapper">
            <div class="post-title">
                <h3>{{ post_info.post_name }}</h3>
                <p class="post-id">@ {{ postId }}</p>
                <p class="post-desp">{{ post_info.description }}</p>
            </div>
            <div class="point-wrapper" ref="starWrapper" @click="showtools = !showtools">
                <svg t="1680700154918" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="3928" width="200" height="200">
                    <path
                        d="M341.333333 512a85.333333 85.333333 0 1 1-170.666666 0 85.333333 85.333333 0 0 1 170.666666 0z m256 0a85.333333 85.333333 0 1 1-170.666666 0 85.333333 85.333333 0 0 1 170.666666 0z m170.666667 85.333333a85.333333 85.333333 0 1 0 0-170.666666 85.333333 85.333333 0 0 0 0 170.666666z"
                        fill="#ffffff" p-id="3929"></path>
                </svg>
                <div class="star-wrapper" v-show="showtools">
                    <div class="s-tools">
                        <svg t="1680750337549" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2788" width="200" height="200">
                            <path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#ffffff"
                                p-id="2789"></path>
                            <path
                                d="M809.889039 214.109426c-164.252925-164.278507-431.528224-164.278507-595.778078 0-164.280554 164.250878-164.280554 431.527201 0 595.781148 164.250878 164.276461 431.526177 164.276461 595.778078 0C974.16857 645.636626 974.16857 378.360304 809.889039 214.109426M767.13326 767.130701c-140.681066 140.712789-369.617176 140.683113-510.281869 0-140.694369-140.67902-140.694369-369.585453 0-510.279822 140.664693-140.664693 369.601826-140.694369 510.281869 0C907.812279 397.516596 907.812279 626.481358 767.13326 767.130701"
                                fill="#ffffff" p-id="2790"></path>
                            <path
                                d="M602.493525 338.736864c-32.254611 0-63.968917 16.619516-90.523713 47.111994-26.464745-30.491455-58.211796-47.111994-90.465384-47.111994-75.30715 0-136.547933 66.088184-136.547933 147.31823 0 38.565341 24.124444 89.705068 55.092759 117.8992 28.496008 35.20685 144.231939 140.649344 172.305321 140.649344 26.764574 0 139.576919-100.787474 170.33955-139.365094 32.132838-29.330002 56.360635-80.55978 56.360635-119.18345C739.056807 404.825049 677.801698 338.736864 602.493525 338.736864M644.593366 563.495838l-3.310396 3.013637-2.805906 3.491521c-23.599488 29.627784-93.117794 91.060949-126.208447 112.990401-33.985022-22.557762-106.159832-87.301322-128.297015-114.603131l-2.685155-3.311419-3.163039-2.892887c-21.005406-19.094894-36.640502-55.959499-36.640502-76.128865 0-50.065256 35.894512-90.792842 80.021521-90.792842 15.33629 0 32.31294 9.801227 47.829332 27.643594l42.636053 49.097208 42.663682-49.067532c15.516392-17.841344 32.522718-27.67327 47.860031-27.67327 44.128033 0 80.051197 40.726563 80.051197 90.792842C682.544723 506.314511 666.940326 543.117718 644.593366 563.495838"
                                fill="#ffffff" p-id="2791"></path>
                        </svg>
                        <span>关注栏目</span>
                    </div>
                    <div class="s-tools">
                        <svg t="1680750337549" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2788" width="200" height="200">
                            <path d="M872.802928 755.99406 872.864326 755.99406 872.864326 755.624646Z" fill="#ffffff"
                                p-id="2789"></path>
                            <path
                                d="M809.889039 214.109426c-164.252925-164.278507-431.528224-164.278507-595.778078 0-164.280554 164.250878-164.280554 431.527201 0 595.781148 164.250878 164.276461 431.526177 164.276461 595.778078 0C974.16857 645.636626 974.16857 378.360304 809.889039 214.109426M767.13326 767.130701c-140.681066 140.712789-369.617176 140.683113-510.281869 0-140.694369-140.67902-140.694369-369.585453 0-510.279822 140.664693-140.664693 369.601826-140.694369 510.281869 0C907.812279 397.516596 907.812279 626.481358 767.13326 767.130701"
                                fill="#ffffff" p-id="2790"></path>
                            <path
                                d="M602.493525 338.736864c-32.254611 0-63.968917 16.619516-90.523713 47.111994-26.464745-30.491455-58.211796-47.111994-90.465384-47.111994-75.30715 0-136.547933 66.088184-136.547933 147.31823 0 38.565341 24.124444 89.705068 55.092759 117.8992 28.496008 35.20685 144.231939 140.649344 172.305321 140.649344 26.764574 0 139.576919-100.787474 170.33955-139.365094 32.132838-29.330002 56.360635-80.55978 56.360635-119.18345C739.056807 404.825049 677.801698 338.736864 602.493525 338.736864M644.593366 563.495838l-3.310396 3.013637-2.805906 3.491521c-23.599488 29.627784-93.117794 91.060949-126.208447 112.990401-33.985022-22.557762-106.159832-87.301322-128.297015-114.603131l-2.685155-3.311419-3.163039-2.892887c-21.005406-19.094894-36.640502-55.959499-36.640502-76.128865 0-50.065256 35.894512-90.792842 80.021521-90.792842 15.33629 0 32.31294 9.801227 47.829332 27.643594l42.636053 49.097208 42.663682-49.067532c15.516392-17.841344 32.522718-27.67327 47.860031-27.67327 44.128033 0 80.051197 40.726563 80.051197 90.792842C682.544723 506.314511 666.940326 543.117718 644.593366 563.495838"
                                fill="#ffffff" p-id="2791"></path>
                        </svg>
                        <span>发起合作邀请</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="post-tip">
            <div class="review">
                <span class="r-num">1.2w</span>
                <span>评论</span>
            </div>
            <div class="review">
                <span class="r-num">1.2w</span>
                <span>b</span>
            </div>
        </div>
        <div class="s-icon">
            <svg t="1680754957038" class="review-icon" viewBox="0 0 1058 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="2764" width="200" height="200" @click="toggleCommentBox">
                <path
                    d="M330.744242 885.372121l194.779798-129.861818 16.665859-11.106263h383.844848c36.486465 0 66.19798-29.659798 66.19798-66.146262v-529.19596c0-36.434747-29.711515-66.107475-66.19798-66.107475H132.305455c-36.486465 0-66.146263 29.659798-66.146263 66.107475v529.19596c0 36.486465 29.659798 66.146263 66.146263 66.146262h198.438787v140.968081m-66.146262 123.578182V810.550303H132.305455c-73.024646 0-132.305455-59.216162-132.305455-132.292525v-529.19596C0 76.024242 59.267879 16.808081 132.305455 16.808081h793.742222c73.076364 0 132.357172 59.216162 132.357171 132.240808v529.195959c0 73.076364-59.267879 132.292525-132.357171 132.292526h-363.830303L264.59798 1008.950303z m0 0"
                    p-id="2765" fill="#8b98a5"></path>
            </svg>
        </div>
        <div class="all-comment">
            <!-- 评论 -->
            <ul>
                <li v-for="comment in all_comments">
                    {{ comment.commentator }}
                    {{ comment.comment_text }}
                </li>
            </ul>
        </div>
    </div>
    <div class="comment-box-overlay" v-show="showCommentBox" @click="toggleCommentBox">
        <div class="comment-box" @click.stop>
            <div class="comment">
                <svg t="1680756370007" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="3809" width="200" height="200">
                    <path
                        d="M222.208 631.296l-36.352 61.952s-18.432 122.368 22.528 145.408c40.448 23.04 139.776-53.248 139.776-53.248l35.328-59.392-162.304-91.648 1.024-3.072z m360.448-243.712l-162.304-92.16 23.552-39.936 162.304 91.648L629.76 307.2c19.456-32.768 7.68-74.752-25.6-94.208l-40.448-23.04c-33.792-18.944-76.8-7.68-96.256 25.088l-222.72 377.344 162.304 91.648 191.488-324.608-15.872 28.16zM796.16 746.496H465.92c-25.088 0-46.08 20.48-46.08 46.08 0 25.088 20.48 46.08 46.08 46.08h330.24c25.088 0 46.08-20.48 46.08-46.08s-20.48-46.08-46.08-46.08z"
                        fill="#1d9bf0" p-id="3810"></path>
                </svg>
                <div class="review">
                    <div class="false draftjs-styles_2">
                        <div style="max-height: 720px; min-height: 96px;">
                            <div class="DraftEditor-root">
                                <div class="edit-input">
                                    发布你的回复
                                </div>
                                <div>
                                    <div class="public-DraftEditor-content" contenteditable="true"
                                        data-testid="tweetTextarea_0" role="textbox" spellcheck="true" tabindex="0"
                                        no-focustrapview-refocus="true"
                                        style="outline: none; user-select: text; white-space: pre-wrap; overflow-wrap: break-word;">
                                        <!-- <div data-contents="true">
                                            <div class="" data-block="true" data-editor="e0kiv" data-offset-key="fp49k-0-0">
                                                <div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr">
                                                    <span class="edit_text"><br data-text="true"></span>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="submit" @click="clickSubmit">提交</button>
        </div>
    </div>
</template>
  
<script>
import Web3 from 'web3';
import { PostManagementABI, PostManagementAddress } from "../contracts/PostManagement"
import { CommentManagementABI, CommentManagementAddress } from "../contracts/CommentManagement"
import { mapMutations, mapState } from "vuex"
export default {
    name: "PostDetailView",
    data() {
        return {
            post_info: [],
            showtools: false,
            showCommentBox: false,
            all_comments: []
        }
    },
    computed: {
        postId() {
            return this.$route.params.id;
        },
    },
    async mounted() {
        this.initContract();
        document.addEventListener('click', this.handleClickOutside);
        this.post_info = await this.get_post_info();
        this.all_comments = await this.get_all_comments();
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        async get_all_comments() {
            const web3 = new Web3(window.ethereum);
            let contractInstance_comment = new web3.eth.Contract(CommentManagementABI, CommentManagementAddress);
            let size = await contractInstance_comment.methods.get_comment_length(this.postId).call();
            let c_data = [];
            for(let i = 0; i < size; i ++) {
                let _comment = await contractInstance_comment.methods.TotalComments(this.postId, i).call()
                c_data.push(JSON.parse(JSON.stringify(_comment)));
            }
            console.log(c_data);
            return c_data;
        },
        ...mapMutations(["set_post_li"]),
        ...mapMutations(["set_web"]),
        ...mapState(["user_addr"]),
        async get_post_info() {
            if (!this.contractInstance) {
                this.initContract();
            }
            const post = this.contractInstance.methods.PostMap(this.$route.params.id).call();
            return post;
        },
        handleClickOutside(event) {
            if (this.$refs.starWrapper && !this.$refs.starWrapper.contains(event.target)) {
                this.showtools = false;
            }
        },
        toggleCommentBox() {
            this.showCommentBox = !this.showCommentBox;
        },
        clickSubmit() {
            // 发布评论
            const web3 = new Web3(window.ethereum);
            let contractInstance_comment = new web3.eth.Contract(CommentManagementABI, CommentManagementAddress);
            console.log("评论", this.postId, $(".public-DraftEditor-content").html(), localStorage.getItem('userAddress'));
            contractInstance_comment.methods.post_comment(this.postId, $(".public-DraftEditor-content").html()).send({ from: localStorage.getItem('userAddress') })
                .then(recepit => {
                    console.log(recepit);
                })
        },
        initContract() {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                this.set_web(web3);
                this.userAddress = (web3.eth.getAccounts())[0];
                // 创建合约实例
                this.contractInstance = new web3.eth.Contract(PostManagementABI, PostManagementAddress);

            } else {
                console.error('请安装 MetaMask 插件');
            }

        },
    },
};
</script>

<style scoped>
@import "../css/postdetail.css";
</style>
  