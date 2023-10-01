<template>

    <navbar></navbar>

    <div class="card-login">
        <img src="/images/Logo.svg" alt="">

        <inputComponent :placeholder="'Usuário ou Email'"
                        :type="'text'"
                        v-model="userRequestLogin.email">
        </inputComponent>

        <inputComponent :placeholder="'Digite sua senha'"
                        :type="'password'"
                        v-model="userRequestLogin.password">
        </inputComponent>

        <transition name="fade">
            <div class="alert-error" :class="{ 'alert-show': showAlert }" v-if="showAlert">
                {{ this.errorMessage }}
            </div>
        </transition>

        <button class="bt-login" @click="login">Entrar</button>
        
        <div class="new-login">
            <label>Não tem login? <router-link to="/register">Cadastre-se</router-link></label>
        </div>
    </div>  
    
</template>

<script>

import inputComponent from "../components/input-component.vue";
import navbar from '../components/navbar.vue';

export default {
    components: {
        inputComponent,
        navbar
    },
    data: function () {
        return {
            userRequestLogin: {
                email: "",
                password: "",
            },
            confirmPassword: '',
            errorMessage: '',
            showAlert: false
        }
    },
    methods: {
        validatePasswd() {
            console.log(this.userRequestRegister.passwd);
        },
        login() {
            this.$router.push('/dashboard');
        },
        createNewUser() {
            const vm = this;

            if (this.userRequestRegister.passwd != this.confirmPassword) {
                this.errorMessage = 'Senhas não coincidem, por favor verifique!'
                this.showAlert = true;

                setTimeout(() => {
                    vm.showAlert = false;
                }, 5000); // Tempo em milissegundos antes de esconder o alert

                return;
            }

            if (this.userRequestRegister.email === '') {
                this.errorMessage = 'Email Obrigatorio'
                this.showAlert = true;

                setTimeout(() => {
                    vm.showAlert = false;
                }, 5000); // Tempo em milissegundos antes de esconder o alert

                return;
            }
        },
    },
    created() {
    },
    mounted() {

    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.alert-show {
    display: block;
}


.card-login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 500px;
    width: 95%;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 20%);
    gap: 20px;
    padding: 40px 0;
}

.card-login input {
    background-color: #EAF4F4;
    border: none;
    padding: 20px 10px;
    border-radius: 10px;
    width: 70%;
}

.bt-login {
    background-color: #0002B4;
    color: #fff;
    cursor: pointer;
    width: 25%;
    padding: 10px;
    border: none;
    border-radius: 7px;
    margin: 30px 0 0 0;
    transition: all 0.5s;
}

.card-login button:hover {
    opacity: 50%;
}

.new-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0 0 0;
}

.img-newlogin {
    background-color: #D9D9D9;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 60px;
    margin: 5px 0 0 0;
    transition: all 0.5s;
    cursor: pointer;

}

.img-newlogin:hover {
    opacity: 50%;
    transition: all 0.5s;
}

.alert-error {
    border-radius: 9px;
    background-color: red;
    color: #Fff;
    padding: 5px;
    width: 70%;
    transition: all 0.5s;
}

@media only screen and (max-width: 480px) {

    .card-register,
    .card-login input {
        width: 90%;
    }
}
</style>