<template>
    <div class="post-wrapper">
        <h2>推荐</h2>
        <br>
        <div class="loading" v-if="$store.state.post_li_status">
            <span>加载中...</span>
        </div>
        <div v-else class="l-wrapper">
            <div v-for="post in $store.state.post_li" :key="post.c_time">
                <RouterLink :to="'/post/' + post.post_id" class="post">
                    <div class="img">
                        <svg t="1680449324761" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="11118" data-spm-anchor-id="a313x.7781069.0.i26"
                            width="200" height="200">
                            <path
                                d="M512 32a480 480 0 1 0 0 960 480 480 0 0 0 0-960z m-3.072 168.192a144.64 144.64 0 1 1 0 289.28 144.64 144.64 0 0 1 0-289.28zM256 774.144c-1.472-148.224 70.976-240.256 161.792-276.416l93.248 155.584 98.24-152c87.616 38.4 157.248 129.344 158.656 272.96-161.088 63.872-330.88 68.48-511.936-0.128z"
                                fill="#ffffff" p-id="11119"></path>
                        </svg>
                    </div>
                    <div class="post-info">
                        <div class="u-title">
                            <span class="u-name">{{ post.post_name }}</span>
                            &nbsp;
                            <span class="u-addr">{{ post.post_addr }}</span>
                            &nbsp;
                            <span class="u-create">{{ post.c_time }}</span>
                        </div>
                        <div class="u-disp">{{ post.description }}</div>
                        <div class="u-tools">
                            <div class="review-wrapper">
                                <svg t="1680450171476" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="12548" width="200" height="200">
                                    <path
                                        d="M853.333333 768c35.413333 0 64-20.650667 64-55.978667V170.581333A63.978667 63.978667 0 0 0 853.333333 106.666667H170.666667C135.253333 106.666667 106.666667 135.253333 106.666667 170.581333v541.44C106.666667 747.285333 135.338667 768 170.666667 768h201.173333l110.016 117.44a42.752 42.752 0 0 0 60.586667 0.042667L651.904 768H853.333333z m-219.029333-42.666667h-6.250667l-115.797333 129.962667c-0.106667 0.106667-116.010667-129.962667-116.010667-129.962667H170.666667c-11.776 0-21.333333-1.621333-21.333334-13.312V170.581333A21.205333 21.205333 0 0 1 170.666667 149.333333h682.666666c11.776 0 21.333333 9.536 21.333334 21.248v541.44c0 11.754667-9.472 13.312-21.333334 13.312H634.304zM341.333333 490.666667a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m170.666667 0a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z m170.666667 0a42.666667 42.666667 0 1 0 0-85.333334 42.666667 42.666667 0 0 0 0 85.333334z"
                                        fill="#ffffff" p-id="12549"></path>
                                </svg>
                                <span class="review">0</span>
                            </div>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
import Web3 from 'web3';
import { mapMutations, mapState } from "vuex"
import { PostManagementABI, PostManagementAddress } from "../contracts/PostManagement"

export default {
    name: "homeContentLeft",
    async mounted() {
        this.initContract();
    },
    data() {
        return {
            post_li: [],
            userAddress: ""
        }

    },
    async created() {
        await this.getpost_li();
        this.setUserAddr(localStorage.getItem('userAddress'));

    },
    computed: {
        ...mapState(["user_addr"])
    },
    methods: {
        ...mapMutations(["set_post_li"]),
        ...mapMutations(["setUserAddr"]),
        ...mapMutations(["set_web"]),
        ...mapMutations(["change_post_li_status"]),
        async getpost_li() {
            if (!this.contractInstance) {
                this.initContract();
            }
            this.change_post_li_status();  // 标记当前属于搜索状态
            const post_data = await this.get_post_data();
            this.post_li = post_data;
            this.set_post_li(post_data);
            this.change_post_li_status();  // 标记当前属于搜索完成状态
            console.log(this.$store.state.post_li);
        },
        async get_post_data() {
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
            return post_data;
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
}
</script>

<style>
@import "../css/lodding.css";
@import "../css/home_content_left.css";
</style>