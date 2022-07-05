<route lang="yaml">
meta:
    public: true
    title: hello
    description: default
</route>

<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import HelloWorld from '@/components/HelloWorld.vue'

    const route = useRoute()
    const likes = ref<number>()

    watch(
        () => route.query.likes,
        (newLikes) => {
            likes.value = newLikes ? +newLikes : 0
        }
    )
</script>

<template>
    <HelloWorld title="About page!" msg="This was created with love in Colombia by @helixsoft" :likes="likes" />

    <p>
        Transitions are not triggered between routes of the same type, therefore changing the current page parameters
        won't cause a route transition:
    </p>

    <router-link :to="{ name: 'index' }"> To Index </router-link>
    <br />
    <router-link :to="{ name: 'about', query: { likes: Math.floor(Math.random() * 100) } }">
        To About with different query parameter
    </router-link>
    <br />
    <router-link :to="{ name: 'profile' }"> To Profile </router-link>
</template>
