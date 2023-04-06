const isMetaMaskLoggedIn = async () => {
    if (window.ethereum) {
        // 检查本地存储中是否存在已登录用户的地址和签名
        const userAddress = localStorage.getItem('userAddress');
        const signature = localStorage.getItem('signature');

        // 如果用户地址和签名都存在，则视为已登录
        return !!(userAddress && signature);
    } else {
        return false;
    }
};


// // 监听 `metamask-logout` 事件
// window.addEventListener('metamask-logout', () => {
//     if (window.ethereum) {
//         // 将 `window.ethereum.selectedAddress` 设置为 `null`
//         window.ethereum.selectedAddress = null;
//     }
// });

export default isMetaMaskLoggedIn;
