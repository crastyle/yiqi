<template>
    <span class="timer" :value="value">
        {{value}}
    </span>
</template>

<script>
    export default {
        name: 'timer',
        data(){
            return {

            }
        },
        props: {
            value: Number
        }
    }
</script>
<style>
    .timer {
        display: inline-block;
        background: url(../static/icon-timer.png) no-repeat left center;
        background-size: .26rem;
        padding-left: .3rem;
        font-size: .28rem;
        color: #666;
    }
</style>