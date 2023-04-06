export const CommentManagementABI = [
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "post_id",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "text",
				"type": "string"
			}
		],
		"name": "post_comment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "post_id",
				"type": "bytes32"
			}
		],
		"name": "get_comment_length",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "TotalComments",
		"outputs": [
			{
				"internalType": "address",
				"name": "commentator",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "comment_text",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const CommentManagementAddress = "0xCDA49DD346D96b7Bb71F70a91C62264Fa92a58ac";
