export const RelationShipManagementABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "post_managment_addr",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "postid",
				"type": "bytes32"
			}
		],
		"name": "invite_cooperation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "post_managment_addr",
				"type": "address"
			},
			{
				"internalType": "bytes32",
				"name": "postid",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_status",
				"type": "uint256"
			}
		],
		"name": "set_invitation_status",
		"outputs": [],
		"stateMutability": "nonpayable",
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
		"name": "invitions",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const RelationShipManagementAddress = "0x880F4169196571d5a67952A49F3cbA764F684af8";