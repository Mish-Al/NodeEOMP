<template>
    <div>
        <h2>Origins of Scentopia</h2>
        <br>
        <OriginComp/>
        <br>
        <h2>Founders Message</h2>
        <br>
        <FoundersComp/>
        <br>
        <h2>Customer Feedback</h2>
        <TestimonialComp/>
    </div>
    <br/>
</template>

<script>
import OriginComp from '@/components/OriginComp'
import FoundersComp from '@/components/FoundersComp.vue';
import TestimonialComp from '@/components/TestimonialComp'
    export default {
        components: {
            OriginComp,
            FoundersComp,
            TestimonialComp,
        }
    }
</script>

<style scoped>
h2{
    color: #553a1d;
}
</style>