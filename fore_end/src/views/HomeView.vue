<template>
    <div class="home">
        <div class="home-content-left">
            <homeContentLeft />
        </div>
        <div class="home-content-right">
            <homeContentRight />
        </div>
    </div>
</template>
  
<script>
import homeContentLeft from '../components/home_content_left.vue'
import homeContentRight from '../components/home_content_right.vue'

export default {
    name: 'HomeView',
    components: {
        homeContentLeft,
        homeContentRight
    }
}
</script>
  
<style scoped>
.home {
    display: flex;
    flex-direction: row;
}

.home>div:first-child {
    flex: 9;
    height: 100%;
    box-sizing: border-box;
}

.home>div:last-child {
    flex: 5;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
}</style>