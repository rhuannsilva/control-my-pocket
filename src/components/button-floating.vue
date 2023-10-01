<template>
    <transition name="slide-fade">
        <div v-if="showOptions" class="options">
            <button v-for="option in options" :key="option.id">
                <img :src='option.image' class="icon" alt="">    
            </button>
        </div>
    </transition>

    <div class="content">
        <button class="floating-button" @click="toggleOptions">
            <img src="/icon_add.svg" alt="">
        </button>
    </div>
    
</template>
  
<script>
export default {
    name: "FloatingButton",
    components:{
    },  
    data() {
        return {
            showOptions: false,
            options: [
                {
                    id: 1,
                    name: 'receita',
                    route: '/create-expense',
                    image: '/seta-crescer.png'
                }
            ]
        };
    },
    methods: {
        toggleOptions() {
            this.showOptions = !this.showOptions;
        }
    }
};
</script>
  
<style scoped>
.floating-button {
    background-color: rgb(0, 0, 255);
    border-radius: 50%;
    height: 60px;
    width: 60px;
    border: none;
    position: absolute;
    bottom: 100px;
    right: 100px;
    cursor: pointer;
    transition: all 0.4s;
}
.floating-button:hover{
    background-color: rgba(0, 0, 255, 0.494);
    transition: all 0.4s;
    box-shadow: -11px 11px 49px -15px rgba(0,0,0,0.3)
}
.floating-button img{
    width: 25px;
}

.options {
    position: absolute;
    bottom: 180px;
    right: 108px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 4px;
}
.options button{
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
}
.icon{
    width: 18px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

</style>