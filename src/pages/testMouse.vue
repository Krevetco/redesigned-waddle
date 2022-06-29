<route lang="yaml">
meta:
    public: true
</route>

<script setup lang="ts">
    import { useMouse } from '@vueuse/core'

    const mouse = useMouse()
</script>

<template>
    <HelloWorld title="Page for test Libraries" msg="This was created with love in Colombia by @helixsoft" />
    <h1>Page for test Libraries</h1>
    <p>This page correspond to the "/home" URL generated from this file name and location</p>

    <router-link :to="{ name: 'profile' }"> To Profile </router-link>
    <br />
    <router-link :to="{ name: 'index' }"> To Index </router-link>
    <br />
    <router-link :to="{ name: 'about' }"> To Index </router-link>

    <div>Current mouse position (using VueUse): {{ mouse.x }} : {{ mouse.y }}</div>
</template>
