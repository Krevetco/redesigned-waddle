<route lang="yaml">
meta:
    public: true
</route>

<script setup lang="ts">
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    import HelloWorld from '@/components/HelloWorld.vue'
    import { useAuth } from '@/auth'

    // Composition API example
    const auth = useAuth()
</script>

<template>
    <HelloWorld title="Hi developer!" msg="This is the index page!" />

    <p>Click on the links to test the route transitions:</p>
    <router-link :to="{ name: 'about' }"> To About </router-link>
    <br />
    <router-link :to="{ name: 'home' }"> To Home </router-link>
    <br />
    <router-link :to="{ name: 'login' }"> To Login </router-link>
    <br />
    <router-link :to="{ name: 'testMouse' }"> To Test </router-link>

    <p class="mb-0 mt-4px">[Default Layout]</p>
    <p>
        <span v-if="auth.isAuthenticated">
            <b class="me-2">{{ auth.user.email }}</b>
            <button @click="auth.logout">Logout</button>
        </span>
        <b v-else>Not Authenticated</b>
    </p>
</template>
