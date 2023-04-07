<template>
    <div class="notification-page">
        <div class="notification-header">
            <h1>通知</h1>
        </div>
        <div class="notification-list">
            <div class="notification-item" v-for="(notification, index) in notifications" :key="index">
                <div class="notification-icon">
                    <!-- <i :class="notification.icon"></i> -->
                    <svg t="1680837255870" class="icon-bell" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1955" width="200" height="200">
                        <path
                            d="M875.52 648.96l-76.8-77.226667V381.44a292.693333 292.693333 0 0 0-248.32-293.546667 287.573333 287.573333 0 0 0-325.12 284.586667v199.253333l-76.8 77.226667A69.973333 69.973333 0 0 0 197.973333 768H341.333333v14.506667A163.84 163.84 0 0 0 512 938.666667a163.84 163.84 0 0 0 170.666667-156.16V768h143.36a69.973333 69.973333 0 0 0 49.493333-119.04zM597.333333 782.506667A80.213333 80.213333 0 0 1 512 853.333333a80.213333 80.213333 0 0 1-85.333333-70.826666V768h170.666666z"
                            p-id="1956"></path>
                    </svg>
                </div>
                <div class="notification-content">
                    <h2>{{ notification.title }}</h2>
                    <p>{{ notification.message }}</p>
                    <div class="notification-actions">
                        <button class="btn btn-agree">同意</button>
                        <button class="btn btn-disagree">拒绝</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            notifications: [
                {
                    title: "接收到一条新合作邀请",
                    message: "你好，我是will DAO负责人，觉得你们最近的xxx项目很不错，想和你们合作",
                    icon: "fas fa-bell"
                },
                {
                    title: "标题2",
                    message: "这是另一条通知消息",
                    icon: "fas fa-envelope"
                },
                {
                    title: "标题3",
                    message: "这是第三条通知消息",
                    icon: "fas fa-comment"
                }
            ]
        };
    }
};
</script>
  
<style scoped lang="less">
.notification-page {
    font-family: Helvetica, Arial, sans-serif;
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.notification-header {
    text-align: center;
    margin-bottom: 2rem;
}

.notification-header h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
}

.notification-list {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.notification-item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fff;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
    transition: transform 0.3s ease-in-out;
    position: relative;
}

.notification-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(255, 255, 255, 0.4);
}

.notification-icon {
    margin-right: 2rem;
    font-size: 2.5rem;
    color: #fff;
}

.notification-content h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.notification-content p {
    font-size: 1.2rem;
    margin: 0;
}

.notification-actions {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
}

.notification-actions button {
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    background: linear-gradient(to bottom, #3c3c3c, #1c1c1c);
    border: none;
    border-radius: 30px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.notification-actions button:hover {
    background: linear-gradient(to bottom, #1c1c1c, #3c3c3c);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.8);
}

.btn-agree {
    background: linear-gradient(to bottom, #4caf50, #388e3c) !important;
}

.btn-disagree {
    background: linear-gradient(to bottom, #f44336, #c62828) !important;
}

.btn {
    position: relative;
    display: inline-block;
    margin-right: 1rem;
    padding: 0.75rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
    background-color: #5bc0de;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    overflow: hidden;
}

.btn:hover {
    background-color: #2d8fd3;
}

.btn::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 50%, transparent 60%);
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
}

.btn:active::before {
    transform: scale(1);
}

.icon-bell {
    width: 40px;
    height: 40px;
    & path {
        fill: rgb(255, 109, 138);
    }
}
</style>
