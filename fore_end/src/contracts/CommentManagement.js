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
	}
]

export const CommentManagementAddress = "0xF091ad34E7007178d0bCFB385866dbE010016aa7";
