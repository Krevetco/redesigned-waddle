<template>
    <el-button type="primary" :icon="icon" @click="clickEvent">
        <slot />
    </el-button>
</template>

<script setup lang="ts">
    import 'element-plus/theme-chalk/src/message.scss'
    import 'element-plus/es/components/message/style/css'
    import 'element-plus/dist/index.css'
    const props = defineProps({
        icon: { type: Object, required: true },
        clickEvent: { type: Function, default: () => {} },
    })
</script>
