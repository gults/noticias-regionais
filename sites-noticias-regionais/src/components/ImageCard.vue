<template>
    <img  :src="src" class="img-1" />
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
       src:String,
        
       
    })

</script>
   
<style scoped>
   
</style>