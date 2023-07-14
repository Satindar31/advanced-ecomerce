<template>
    <div>
        <ProductDetails :slug="name" />
    </div>
</template>

<script lang="ts" setup>
const { name } = useRoute().params

</script>

<style scoped></style>