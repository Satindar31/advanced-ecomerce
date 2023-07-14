<template>
    <div class="grid grid-rows-6 p-0 m-0" v-for="product in products">
        <div class="card">
            <NuxtLink class="truncate" :to="product.slug.current"><p>{{ product.name }}</p></NuxtLink>
            <p>₹{{ product.price }}</p>
            <p>{{ product.description }}</p>
        </div>
    </div>
    <slot />
</template>

<script setup lang="ts">
import * as product from '../types/product'
const query = groq`*[_type == "product"]`

const { data: products }: {data: product.Iproduct[]} = await useSanityQuery(query);

</script>

<style scoped>

</style>