<template>
    <div class="navbar">
        <div class="content">
            <div class="logo">
                <img src="../assets/Logo.png" alt="">
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.navbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #0002B4;
    position: sticky;
    top: 0;
    left: 0;
}
.content{
    width: -webkit-fill-available;
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}

.logo img{
    height: 65px;
}
</style>