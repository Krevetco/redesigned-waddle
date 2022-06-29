<script setup lang="ts">
    import { useStore } from '@/store'
    import { storeToRefs } from 'pinia'
    import { Delete, Edit, Share } from '@element-plus/icons-vue'

    const props = defineProps<{ title: string; msg: string; likes?: number }>()
    const store = useStore()
    console.log(store)

    const { count, importData } = storeToRefs(store)
</script>

<template>
    <img alt="Vue logo" src="@/assets/logo.png" class="h-200 mx-auto" />

    <h1>{{ title }}</h1>
    <p>{{ msg }}</p>

    <p>
        <a href="https://helixsoft.com.co" target="_blank">Helix Software</a>
        |
        <a href="https://www.instagram.com/helixsoft/" target="_blank">@helixsoft</a>
    </p>

    <p>
        <button-counter :count="count" :click-event="store.increaseCount" />
    </p>
    <el-button-group class="mt-4">
        <button-wrapper :icon="Edit" :click-event="store.getTodos">getAxios</button-wrapper>
        <button-wrapper type="primary" :icon="Share" />
        <button-wrapper type="primary" :icon="Delete" :click-event="store.deleteTodos">deleteData</button-wrapper>
    </el-button-group>
    <p>{{ importData }}</p>
</template>

<style scoped>
    a {
        color: #42b983;
    }

    label {
        margin: 0 0.5em;
        font-weight: bold;
    }

    code {
        background-color: #eee;
        padding: 2px 4px;
        border-radius: 4px;
        color: #304455;
    }
</style>
