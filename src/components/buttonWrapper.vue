<template>
    <a-button type="primary" @click="clickEvent">
        <template #icon><slot name="icon" /></template>
        <slot />
    </a-button>
</template>

<script setup lang="ts">
    defineProps({
        clickEvent: { type: Function, default: () => ({}) },
    })
</script>
