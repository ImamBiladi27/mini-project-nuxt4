<!-- <template>
    <div>
        <h1>Payment Page</h1>
        <Payment/>
    </div>
</template>

<script setup>
import Payment from '~/components/Payment.vue';

</script> -->
<template>
    <div>
        <Payment :amount="100000" :amount2="200000"/>
    </div>
</template>