<template>
    <div class="my-component">
        <div class="my-component-header">
            <img :src="avatar" alt="Your Avatar" class="my-component-avatar">
            <h3 class="my-component-name">{{ name }}</h3>
        </div>
        <nav class="my-component-nav">
            <ul class="my-component-nav-list">
                <li><router-link to="/my-section" class="my-component-nav-link">我的栏目</router-link></li>
                <li><router-link to="/my-following" class="my-component-nav-link">我的关注</router-link></li>
                <li><router-link to="/my-partners" class="my-component-nav-link">我的合作者</router-link></li>
                <li><router-link to="/my-partners" class="my-component-nav-link">我的评论</router-link></li>
            </ul>
        </nav>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            avatar: 'your-avatar.png',
            name: 'Your Name'
        };
    }
};
</script>
  
<style scoped>
.my-component {
    background-color: #000;
    padding: 20px;
}

.my-component-header {
    display: flex;
    align-items: center;
    color: #fff;
}

.my-component-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
}

.my-component-name {
    margin: 0;
}

.my-component-nav {
    margin-top: 20px;
}

.my-component-nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.my-component-nav-link {
    color: #fff;
    margin-right: 20px;
}
</style>
  