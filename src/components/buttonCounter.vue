<template>
    <a-button @click="clickEvent">
        <template #icon><LikeOutlined /> </template>

        Likes : {{ count }}
    </a-button>
</template>

<script setup lang="ts">
    import { LikeOutlined } from '@ant-design/icons-vue'
    defineProps({
        count: { type: Number, required: true },
        clickEvent: { type: Function, default: () => ({}) },
    })
</script>
