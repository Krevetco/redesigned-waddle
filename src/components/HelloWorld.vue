<script setup lang="ts">
    import { useStore } from '@/store'
    import { storeToRefs } from 'pinia'
    import { VerticalAlignTopOutlined, DeleteOutlined } from '@ant-design/icons-vue'

    defineProps<{ title: string; msg: string; likes?: number }>()
    const store = useStore()

    const { count, importData } = storeToRefs(store)
</script>

<template>
    <img alt="Vue logo" src="@/assets/logo.png" class="h-200px mx-auto" />

    <h1>{{ title }}</h1>
    <p>{{ msg }}</p>

    <p>
        <a href="https://wall.black/" target="_blank">Wall Black</a>
        |
        <a href="https://www.instagram.com/WallBlack/" target="_blank">@WallBlack</a>
    </p>

    <p>
        <button-counter :count="count" :click-event="store.increaseCount" />
    </p>
    <p class="mt-4">Get Todos data once and write it in a store</p>
    <div class="my-1 test-buttons-wrapper">
        <button-wrapper :click-event="store.getTodos">
            <template #icon><VerticalAlignTopOutlined /></template>
            getAxios
        </button-wrapper>
        <button-wrapper type="primary" class="ml-4" :click-event="store.deleteTodos">
            <template #icon><DeleteOutlined /></template>
            deleteData
        </button-wrapper>
    </div>
    <p class="test-output">{{ importData }}</p>
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
