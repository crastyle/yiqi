<template>
    <div class="integerPage">
        <div class="header-bg">
            <div class="account">
                <p class="txt">现有益启币</p>
                <p>
                    <span class="price">2488</span>
                </p>
                <a href="javascript:;" class="button-empty">充值</a>
            </div>
        </div>
        <div class="server-item">
            <div class="item">
                <i class="icon integer1"></i> 兑换商品
            </div>
            <div class="item">
                <i class="icon integer2"></i> 参与公益活动
            </div>
            <div class="item">
                <i class="icon integer3"></i> 购买公益券
            </div>
        </div>
        <div class="goverment">
            <div class="title">
                最近合作机构
                <a href="javascript:;">（68）更多</a>
            </div>
            <ul class="list">
                <li>
                    <div class="logo">
                        <img :src="$preStatic + '/icon-b-1.png'" alt="">
                    </div>
                    <div class="name">掌上生活</div>
                    <a href="javascript:;" class="button-clear">兑换规则</a>
                </li>
                <li>
                    <div class="logo">
                        <img :src="$preStatic + '/icon-b-1.png'" alt="">
                    </div>
                    <div class="name">掌上生活</div>
                    <a href="javascript:;" class="button-clear">兑换规则</a>
                </li>
                <li>
                    <div class="logo">
                        <img :src="$preStatic + '/icon-b-1.png'" alt="">
                    </div>
                    <div class="name">掌上生活</div>
                    <a href="javascript:;" class="button-clear">兑换规则</a>
                </li>
                <li>
                    <div class="logo">
                        <img :src="$preStatic + '/icon-b-1.png'" alt="">
                    </div>
                    <div class="name">掌上生活</div>
                    <a href="javascript:;" class="button-clear">兑换规则</a>
                </li>
                <li>
                    <div class="logo">
                        <img :src="$preStatic + '/icon-b-1.png'" alt="">
                    </div>
                    <div class="name">掌上生活</div>
                    <a href="javascript:;" class="button-clear">兑换规则</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @import './integer.scss';
</style>
<script src="./integer">
</script>