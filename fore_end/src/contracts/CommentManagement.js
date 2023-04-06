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
			},
			{
				"internalType": "uint256",
				"name": "comment_time",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const CommentManagementAddress = "0x7ffF43925AC140460fE68ECdd2D576014Cc8FC4a";
