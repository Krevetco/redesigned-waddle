<template>
    <button class="bg-blue-300 rounded-b py-4 px-8 m-[2px] text-amber-50" @click="clickEvent">
        <el-icon size="small" color="#fff">
            <Apple />
        </el-icon>
        {{ { likes: count } }}
    </button>
</template>

<script setup lang="ts">
    import { Apple } from '@element-plus/icons-vue'
    defineProps({
        count: { type: Number, required: true },
        clickEvent: { type: Function, default: () => ({}) },
    })
</script>
