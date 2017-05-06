<template>
    <div class="integerRecordPage">
        <div class="ion-tab">
            <mt-navbar v-model="selected">
                <mt-tab-item id="1">选项一</mt-tab-item>
                <mt-tab-item id="2">选项二</mt-tab-item>
                <mt-tab-item id="3">选项三</mt-tab-item>
            </mt-navbar>
        </div>
    
    
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
    
            <mt-tab-container-item id="1">
                <div class="container-title">
                    本月
                    <span>（28次）</span>
                </div>
                <ul class="list">
                    <li v-for="i in 5">
                        <div class="name">
                            公益名称
                            <span>-45</span>
                        </div>
                        <div class="info">
                            2017-02-12 14:45 订单号：456876543235
                            <span>RMB:100</span>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <div class="container-title">
                    本月
                    <span>（28次）</span>
                </div>
                <ul class="list">
                    <li v-for="i in 5">
                        <div class="name">
                            公益名称{{i}}
                            <span>-45</span>
                        </div>
                        <div class="info">
                            2017-02-12 14:45 订单号：456876543235
                            <span>RMB:{{i* 100 - 12 * 2}}</span>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <div class="container-title">
                    本月
                    <span>（28次）</span>
                </div>
                <ul class="list">
                    <li v-for="i in 5">
                        <div class="name">
                            公益名称{{i}}
                            <span>-45</span>
                        </div>
                        <div class="info">
                            2017-02-12 14:45 订单号：456876543235
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<style scoped lang="scss">
    @import './integerRecord.scss';
</style>

<script src="./integerRecord">
    
</script>