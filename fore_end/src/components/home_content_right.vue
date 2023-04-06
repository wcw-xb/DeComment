<template>
    <div class="wrapper">
        <h2>排行榜</h2>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>权重</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in ranking_data" :key="post.name">
                    <td>{{ post.name }}</td>
                    <td>{{ post.value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "homeContentRight",
    data() {
        return {
            ranking_data: [
                { name: "Will DAO", value: 100 },
                { name: "Wendy DAO", value: 100 },
                { name: "LiLLian DAO", value: 100 },
            ]
        }
    }
}
</script>

<style>
@import "../css/home_content_right.css";
</style>