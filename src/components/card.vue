<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    width: 100%;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 20%);
    gap: 20px;
    padding: 40px 20px;
}
</style>