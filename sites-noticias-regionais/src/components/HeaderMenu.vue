<template>
    
    <a :href="href"><li class="title">{{title}}</li></a>
</template>

<script setup>
    import { defineProps } from 'vue';

    defineProps({
        title: String,
        href: String,
        
    })

</script>

<style scoped>
    .title {
      font-size: 20px; 
      font-weight: bold !important; 
    }

</style>