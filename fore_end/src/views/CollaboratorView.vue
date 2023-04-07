<template>
    <div class="partners">
        <h2 class="partners-title">合作者</h2>
        <div class="partners-list">
            <div v-for="partner in partnersSorted" :key="partner.id" class="partners-item">
                <div class="partner-name">{{ partner.name }}</div>
                <div class="partner-weight">
                    <div class="partner-weight-bar" :style="{ width: partner.weight + '%' }"></div>
                </div>
                <div class="partner-time">{{ formatDate(partner.time) }}</div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'PartnersList',
    data() {
        return {
            partners: [
                { id: 'abc123def456ghi7', name: '合作者1', weight: 80, time: 1649395200000 },
                { id: 'jkl890mno123pqr4', name: '合作者2', weight: 60, time: 1649721600000 },
                { id: 'stu567vwx890yza1', name: '合作者3', weight: 90, time: 1650057600000 },
                { id: 'bcd234efg567hij8', name: '合作者4', weight: 70, time: 1650393600000 },
                { id: 'klm901nop234qrs5', name: '合作者5', weight: 50, time: 1650729600000 },
            ],
        };
    },
    computed: {
        partnersSorted() {
            return this.partners.sort((a, b) => b.weight - a.weight || b.time - a.time);
        },
    },
    methods: {
        formatDate(timestamp) {
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = ('0' + (date.getMonth() + 1)).slice(-2);
            const day = ('0' + date.getDate()).slice(-2);
            const hour = ('0' + date.getHours()).slice(-2);
            const minute = ('0' + date.getMinutes()).slice(-2);
            return `${year}-${month}-${day} ${hour}:${minute}`;
        },
    },
};
</script>
  
<style>
.partners {
    background-color: #000;
    padding: 20px;
}

.partners-title {
    color: #fff;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
}

.partners-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.partners-item {
    width: 200px;
    margin: 10px;
    background-color: rgba(37, 40, 44);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;
}

.partners-item:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.partner-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #fff;
}
.partner-time
{
    color: #fff;
}

.partner-weight {
    height: 10px;
    background-color: #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

.partner-weight-bar {
    height: 8px;
    position: relative;
    background-color: #ff007f;
    border-radius: 4px;
    overflow: hidden;
}

.partner-weight-bar::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 8px;
    background-color: #ff007f;
    border-radius: 4px;
    transition: width 0.5s ease-in-out;
    width: calc(var(--weight) * 1%);
}

.partner-weight-bar::after {
    content: attr(data-weight);
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff007f;
    padding: 5px;
    font-size: 12px;
    color: #fff;
    border-radius: 5px;
    opacity: 1;
}

.partner-weight-bar::after:hover {
    opacity: 0;
}

.partners-item:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
}
</style>