<template>
    <div class="main-wrapper">
        <div class="left-nav">
            <div class="ul-title">DeComment</div>
            <ul>
                <router-link to="/">
                    <li><svg t="1680422476997" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2731" width="200" height="200">
                            <path
                                d="M851.2 441.6l-320-268.8c-12.8-12.8-32-12.8-38.4 0l-320 268.8C166.4 448 160 460.8 160 467.2L160 832c0 19.2 12.8 32 32 32l640 0c19.2 0 32-12.8 32-32L864 467.2C864 460.8 857.6 448 851.2 441.6zM601.6 806.4 422.4 806.4l0-147.2c0-51.2 38.4-89.6 89.6-89.6s89.6 38.4 89.6 89.6L601.6 806.4z"
                                fill="#8d8d94" p-id="2732"></path>
                        </svg><span>首页</span></li>
                </router-link>
                <router-link to="/notice">
                    <li><svg t="1680422701560" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3797" width="200" height="200">
                            <path
                                d="M512 135.9c10.6 0 20.9 0.9 31.1 2.5 1.6-4 2.6-8.3 2.6-12.8 0-18.6-15.1-33.6-33.6-33.6-18.6 0-33.6 15.1-33.6 33.6 0 4.5 0.9 8.9 2.6 12.8 10-1.6 20.3-2.5 30.9-2.5zM512 796.8H397.3c-1 6.2-1.7 12.4-1.7 18.9 0 64.3 52.1 116.4 116.4 116.4 64.3 0 116.4-52.1 116.4-116.4 0-6.4-0.7-12.7-1.7-18.9H512z"
                                p-id="3798" fill="#8d8d94"></path>
                            <path
                                d="M804.1 688.9c-39.5 0-53.3-31.1-53.3-77.3 0-18.1-3.7-257.8-3.7-257.8 0-113.7-106-211.7-235.1-211.7s-235.1 98-235.1 211.7c0 0-3.7 239.6-3.7 257.8 0 46.2-13.8 77.3-53.3 77.3-37.8 0-57.1 17.3-57.1 49.4 0 27.2 25.7 49.4 57.1 49.4h584.2c31.4 0 57.1-22.2 57.1-49.4 0-32.1-19.3-49.4-57.1-49.4z"
                                fill="#8d8d94" p-id="3799"></path>
                        </svg><span>通知</span></li>
                </router-link>
                <router-link to="/collaborator">
                    <li><svg t="1680422759979" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4883" width="200" height="200">
                            <path
                                d="M127.2 256c0-70.4 57.6-128 128-128s128 57.6 128 128-57.6 128-128 128-128-57.6-128-128z m641.6 128c70.4 0 128-57.6 128-128s-57.6-128-128-128-128 57.6-128 128 56.8 128 128 128z m0 64c-70.4 0-128 57.6-128 128v51.2L512 701.6l-128-74.4V576c0-70.4-57.6-128-128-128s-128 57.6-128 128v288c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32V701.6l110.4 64c0.8 0 0.8 0.8 1.6 0.8 9.6 5.6 21.6 6.4 32 0l112.8-65.6V864c0 17.6 14.4 32 32 32h192c17.6 0 32-14.4 32-32V576c0-70.4-57.6-128-128-128z"
                                p-id="4884" fill="#8d8d94"></path>
                        </svg><span>合作者</span></li>
                </router-link>
                <router-link to="/ranking">
                    <li><svg t="1680455428291" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="14737" width="200" height="200">
                            <path
                                d="M315.597609 894.219711c-62.13867 0-124.393261 0-188.573147 0 0-126.355131 0-252.968887 0-382.249435 63.490354 0 125.046818 0 188.573147 0C315.597609 639.418067 315.597609 765.974062 315.597609 894.219711zM603.685685 893.767018c-60.901509 0-122.853905 0-186.300688 0 0-254.759673 0-508.683912 0-766.051617 62.799822 0 123.42252 0 186.300688 0C603.685685 382.423109 603.685685 637.024689 603.685685 893.767018zM895.189246 894.492526c-62.46245 0-124.032506 0-187.932981 0 0-174.161518 0-348.696784 0-525.524295 61.721953 0 123.860622 0 187.932981 0C895.189246 543.870248 895.189246 718.462275 895.189246 894.492526z"
                                fill="#8d8d94" p-id="14738"></path>
                        </svg><span>排行榜</span></li>
                </router-link>
                <router-link to="/user">
                    <li><svg t="1680422787621" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="5909" width="200" height="200">
                            <path
                                d="M512 82.922667a424.938667 424.938667 0 0 1 196.544 47.872C762.453333 107.573333 821.482667 96 885.333333 96c23.786667 0 39.253333 25.034667 28.618667 46.314667a7024.8 7024.8 0 0 0-56.917333 116.234666A424.853333 424.853333 0 0 1 938.666667 509.589333c0 235.637333-191.029333 426.666667-426.666667 426.666667s-426.666667-191.029333-426.666667-426.666667c0-235.648 191.029333-426.666667 426.666667-426.666666zM330.666667 362.666667a42.666667 42.666667 0 0 0-42.666667 42.666666v64a42.666667 42.666667 0 1 0 85.333333 0v-64a42.666667 42.666667 0 0 0-42.666666-42.666666z m170.666666 0a42.666667 42.666667 0 0 0-42.666666 42.666666v64a42.666667 42.666667 0 1 0 85.333333 0v-64a42.666667 42.666667 0 0 0-42.666667-42.666666z"
                                fill="#8d8d94" p-id="5910"></path>
                        </svg><span>我的</span></li>
                </router-link>
            </ul>
        </div>
        <div class="right-wrapper">
            <div class="home-search-wrapper">
                <div class="search-wrapper">
                    <input type="text" id="search-input" placeholder="用户名、地址、帖子" @keyup.enter="search_post">
                    <button class="search-btn" @click="search_post">搜索</button>
                </div>
                <div class="main-title-right">
                    <div class="publish-div"><svg t="1680451270046" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="13674" width="200" height="200">
                            <path
                                d="M1024 0 384 704 0 576 1024 0ZM1024 0 1024 896 483.414063 732.851565 1024 0ZM384 740.488282 364.578125 734.300781 512 1024 606.945313 805.5 476.078125 768 496.279297 960 384 740.488282Z"
                                fill="#b9b9bd" p-id="13675"></path>
                        </svg>
                        <span>新建栏目</span>
                    </div>
                    <div class="user-box">{{ user_addr_l() }}
                        <div class="user-card">
                            <span>{{ user_addr }}</span>
                            <ul class="col">
                                <a href="#">
                                    <li><svg t="1680436607620" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="7043" width="200" height="200">
                                            <path
                                                d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667a424.778667 424.778667 0 0 1-219.125333-60.501334 2786.56 2786.56 0 0 0-20.053334-11.765333l-104.405333 28.48c-23.893333 6.506667-45.802667-15.413333-39.285333-39.296l28.437333-104.288c-11.008-18.688-18.218667-31.221333-21.802667-37.909333A424.885333 424.885333 0 0 1 85.333333 512C85.333333 276.362667 276.362667 85.333333 512 85.333333z m-102.218667 549.76a32 32 0 1 0-40.917333 49.216A223.178667 223.178667 0 0 0 512 736c52.970667 0 103.189333-18.485333 143.104-51.669333a32 32 0 1 0-40.906667-49.216A159.189333 159.189333 0 0 1 512 672a159.189333 159.189333 0 0 1-102.218667-36.906667z"
                                                fill="#ffc27d" p-id="7044"></path>
                                        </svg><span>我的评论</span></li>
                                </a>
                                <a href="#">
                                    <li><svg t="1680437031918" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                            xmlns="http://www.w3.org/2000/svg" p-id="7548" width="200" height="200">
                                            <path
                                                d="M583.2 895h-176c-36.8 0-66.6-29.8-66.6-66.6V336.3c0-36.8 29.8-66.6 66.6-66.6h367.2c36.8 0 66.6 29.8 66.6 66.6v300.9C841 779.6 725.6 895 583.2 895z"
                                                fill="#2db3ff" p-id="7549"></path>
                                            <path
                                                d="M413.9 254.9c-16.6 0-30-13.4-30-30v-96.7c0-16.6 13.4-30 30-30s30 13.4 30 30v96.7c0 16.6-13.4 30-30 30zM609.5 255.7c-16.6 0-30-13.4-30-30v-96.8c0-16.6 13.4-30 30-30s30 13.4 30 30v96.8c0 16.6-13.5 30-30 30zM458.9 161.8h105.5v60H458.9z"
                                                fill="#2db3ff" p-id="7550"></path>
                                            <path
                                                d="M701.6 161.8h-47.1v60h47.1c20.2 0 36.6 16.4 36.6 36.6v315.5c0 125.6-102.2 227.8-227.8 227.8H322.6c-20.2 0-36.6-16.4-36.6-36.6V258.4c0-20.2 16.4-36.6 36.6-36.6h46.3v-60h-46.3c-53.3 0-96.6 43.3-96.6 96.6v506.7c0 53.3 43.3 96.6 96.6 96.6h187.7c76.9 0 149.2-29.9 203.5-84.3 54.4-54.4 84.3-126.7 84.3-203.5V258.4c0-53.3-43.3-96.6-96.5-96.6z"
                                                fill="#2db3ff" p-id="7551"></path>
                                            <path d="M441.6 306.1m-25.3 0a25.3 25.3 0 1 0 50.6 0 25.3 25.3 0 1 0-50.6 0Z"
                                                fill="#2db3ff" p-id="7552">
                                            </path>
                                            <path d="M581.1 306.1m-25.3 0a25.3 25.3 0 1 0 50.6 0 25.3 25.3 0 1 0-50.6 0Z"
                                                fill="#2db3ff" p-id="7553">
                                            </path>
                                            <path
                                                d="M547.2 371.5c0 20.6-16.8 37.7-37.4 37.3-19.9-0.4-35.9-16.7-35.9-36.7l-0.1-2.7c-0.2-4.1 3.1-7.6 7.2-7.6h59c4 0 7.2 3.2 7.2 7.2v2.5z"
                                                fill="#2db3ff" p-id="7554"></path>
                                            <path
                                                d="M640.1 497.2h-256c-13.3 0-24-10.7-24-24s10.7-24 24-24h256c13.3 0 24 10.7 24 24s-10.7 24-24 24zM640.1 593.1h-256c-13.3 0-24-10.7-24-24s10.7-24 24-24h256c13.3 0 24 10.7 24 24s-10.7 24-24 24zM640.1 689h-256c-13.3 0-24-10.7-24-24s10.7-24 24-24h256c13.3 0 24 10.7 24 24s-10.7 24-24 24z"
                                                fill="#ffffff" p-id="7555" data-spm-anchor-id="a313x.7781069.0.i18"
                                                class="selected"></path>
                                        </svg><span>我的帖子</span></li>
                                </a>
                            </ul>
                            <div class="personal">
                                <a href="#">个人主页</a>
                                <div class="logout-btn"><svg t="1680437583926" class="icon" viewBox="0 0 1042 1024"
                                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9873" width="200"
                                        height="200">
                                        <path
                                            d="M581.632 697.344l126.976 0 0 194.56q0 33.792-10.24 58.88t-27.136 40.96-39.424 23.552-48.128 7.68l-452.608 0q-24.576 0-48.128-9.728t-41.472-27.136-29.184-40.96-11.264-52.224l0-706.56q0-24.576 11.776-47.104t30.208-39.936 40.96-28.16 45.056-10.752l449.536 0q26.624 0 50.176 11.776t41.472 29.696 28.16 40.448 10.24 44.032l0 188.416-126.976 0 1.024-195.584-452.608 0-1.024 713.728 452.608 0 0-195.584zM1021.952 505.856q37.888 30.72 2.048 60.416-20.48 15.36-44.544 37.888t-50.176 46.592-51.712 47.616-47.104 40.96q-23.552 18.432-40.448 18.432t-16.896-24.576q2.048-14.336 0.512-35.84t-1.536-36.864q0-17.408-12.288-21.504t-29.696-4.096l-40.96 0-62.464 0q-34.816 0-73.216-0.512t-73.216-0.512l-62.464 0-41.984 0q-8.192 0-17.92-1.536t-17.408-6.656-12.288-14.336-4.608-23.552q0-19.456-0.512-46.08t0.512-47.104q0-27.648 13.312-37.888t43.008-9.216l33.792 0 59.392 0q32.768 0 70.144 0.512t71.168 0.512l61.44 0 38.912 0q25.6 1.024 43.52-4.096t17.92-22.528q0-14.336 1.024-32.256t1.024-32.256q0-23.552 12.8-29.696t32.256 9.216q19.456 16.384 45.568 38.4t52.736 45.056 52.736 45.568 47.616 39.936z"
                                            p-id="9874" fill="#6f7078"></path>
                                    </svg><a href="#" class="logout-btn" @click="logout">退出</a></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <router-view />
        </div>
    </div>
</template>
  
<script>
import isMetaMaskLoggedIn from '@/js/metamask';
import { PostManagementABI, PostManagementAddress } from "../contracts/PostManagement"
import { mapMutations } from "vuex"

export default {
    name: 'HomeView',
    data() {
        return {
            user_addr: localStorage.getItem('userAddress'),
        }
    },
    mounted() {
        const $ = require('jquery');
        window.$ = window.Jquery = $;


        $(() => {
            $(".left-nav ul a").on("click", function () {
                $(this).find("li").css('color', '#fff')
                $(this).find("svg path").css('fill', '#fff')
                $(this).siblings().find("li").css('color', '#8d8d94');
                $(this).siblings().find("svg path").css('fill', '#8d8d94');
            });
        })
    },
    created() {

    },
    methods: {
        ...mapMutations(["set_post_li"]),
        ...mapMutations(["change_post_li_status"]),
        async logout() {
            // 检查 MetaMask 是否已登录
            const isLoggedIn = await isMetaMaskLoggedIn();
            if (isLoggedIn) {
                // 如果已登录，触发自定义事件强制注销 MetaMask
                window.dispatchEvent(new CustomEvent('metamask-logout'));
                // 清除本地存储中的用户信息
                localStorage.removeItem('userAddress');
                localStorage.removeItem('signature');
            }

            // 跳转到登录页面
            this.$router.push({ name: 'login' });
        },
        user_addr_l() {
            let addr = this.user_addr;
            let addr_l = addr.slice(0, 5) + "***" + addr.slice(-5,);
            return addr_l;
        },
        async search_post() {
            // 搜索功能的实现
            this.change_post_li_status();  // 标记当前属于搜索状态
            this.set_post_li([]);
            const web3 = this.$store.state.web3
            this.contractInstance = new web3.eth.Contract(PostManagementABI, PostManagementAddress);
            const post_data = [];
            const post_li_length = await this.contractInstance.methods.TotalPostLength().call();
            for (let i = 0; i < post_li_length; i++) {
                const post_id = await this.contractInstance.methods.getPostId(i).call();
                const post = await this.contractInstance.methods.PostMap(post_id).call();
                let data = JSON.parse(JSON.stringify(post));
                data["c_time"] = new Date(data["c_time"] * 1000).toLocaleString(); // 时间戳转换时间字符串
                post_data.push(data);
            }
            // 按照时间进行排序
            post_data.sort((a, b) => {
                const dateA = new Date(a.c_time);
                const dateB = new Date(b.c_time);
                return dateB - dateA;
            });
            this.set_post_li(this.search_p($("#search-input").val(), post_data));
            this.change_post_li_status();  // 标记当前不属于搜索状态
        },
        search_p(key_word, data) {
            let new_data = [];
            data.forEach(element => {
                if (element["post_name"].indexOf(key_word) != -1 || element["post_owner"].indexOf(key_word) != -1 || element["description"].indexOf(key_word) != -1) {
                    new_data.push(element);
                }
            });
            return new_data;
        }

    },
}
</script>
  
<style scoped>
.main-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
}

@import "../css/search_wrapper.css";
@import "../css/main_left.css";
</style>
  