<template>
    <div v-for="product in productD" class="grid grid-cols-2">
        <div class="w-1/2">
Image will go here
        </div>
        <div class="flex flex-col justify-start items-start">
            <p class="text-xl leading-5">{{ product.value[0].name }}</p>
            <!-- <p class="font-bold border-b leading-3">₹{{ product.price }}</p>
            <p>{{ product.description }}</p>
            <NuxtLink></NuxtLink> -->
        </div>
    </div>
</template>

<script setup lang="ts">
import { Iproduct } from 'types/product';

const prodctSlug = defineProps(['slug'])
const query = groq`*[slug.current=="${prodctSlug.slug}"]`
let { data: productD }: {data: any} = await useSanityQuery(query) // TODO make types
console.log(productD.value[0].name)
</script>

<style scoped>

</style>