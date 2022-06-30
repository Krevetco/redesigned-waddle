<template>
    <el-button type="primary" :icon="icon" @click="clickEvent">
        <slot />
    </el-button>
</template>

<script setup lang="ts">
    const props = defineProps({
        icon: { type: Object, required: true },
        clickEvent: { type: Function, default: () => {} },
    })
</script>
