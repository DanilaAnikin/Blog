<script setup>

const props = defineProps(['allPosts'])

</script>
<template>

    <span v-for="post in allPosts" class="max-w-full w-2/3 mx-auto flex justify-between mb-3">
        <span>{{ post.date }} {{ post.time }}</span>
        <span>{{ post.text }}</span>
    </span>

</template>