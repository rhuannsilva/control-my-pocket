<template>
    
    <input :value="modelValue" 
            v-bind="$attrs" 
            @input="$emit('update:modelValue', $event.target.value)" />

</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: String
    }
}
</script>

<style scoped>
input {
    background-color: #EAF4F4;
    border: none;
    padding: 20px 10px;
    border-radius: 10px;
    width: 100%;
}
</style>