<script setup lang="ts"></script>

<template>
    <div class="flex items-center justify-center flex-col h-1/2">
        <h1 class="pt-100">Login Page</h1>
        <p v-if="$route.query.redirectTo" style="color: brown">
            You need to be Authenticated in order to see this page
        </p>
        <a-button type="primary" @click="$auth.login">Login with Auth Plugin</a-button>

        <br /><br />
        <router-link :to="{ name: 'index' }"> To Index </router-link>
    </div>
</template>
