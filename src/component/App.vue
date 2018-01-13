<template>
    <div>
        公共头部s
        <router-view></router-view>
        <div class="block">
            <span class="demonstration">区分颜色</span>
            <el-rate v-model="value2" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
        </div>
        <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
        </div>
        <el-time-select v-model="value3" :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30'
            }" placeholder="选择时间">
        </el-time-select>
        公共底部
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pickerOptions1: {
                    shortcuts: [{
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date());
                        }
                    }, {
                        text: '昨天',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit('pick', date);
                        }
                    }, {
                        text: '一周前',
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', date);
                        }
                    }]
                },
                value1: '1979',
                value2: 2,
                value3: '00:00'
            };
        }
    }
</script>

<style scoped>
    .block {
        width: 150px;
        height: 150px;
        background: yellowgreen;
    }
</style>