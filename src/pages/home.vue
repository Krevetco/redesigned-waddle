<route lang="yaml">
meta:
    layout: main
    transition: slide-fade
</route>

<script setup lang="ts">
    import { useStore } from '@/store'
    import { storeToRefs } from 'pinia'

    const store = useStore()
    const { importData } = storeToRefs(store)

    async function testOpenAPI() {
        store.getTodos()
    }
</script>

<template>
    <h1>Home Page</h1>
    <p>This page correspond to the "/home" URL generated from this file name and location</p>

    <router-link :to="{ name: 'profile' }"> To Profile </router-link>
    <br />
    <router-link :to="{ name: 'index' }"> To Index </router-link>

    <div>
        <a-button type="primary" @click="testOpenAPI()">Test OpenAPI</a-button>
        <h5>Result:</h5>
        <pre>
            {{ importData }}
        </pre>
    </div>
</template>
