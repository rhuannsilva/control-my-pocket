<template>

    <navbar></navbar>
    
    <card>
        <div class="name-date">
            <input class="ip-name standard" type="text" placeholder="Nome" v-model="user.name">
            <input v-mask="'##/##/####'" class="ip-date standard" v-model="user.birthDate" type="text"
                placeholder="Data Nascimento">
        </div>
        <div class="email-telephone">
            <input class="ip-email standard" type="text" placeholder="Email" v-model="user.email">
            <input v-mask="'(##) #####-####'" class="ip-tel standard" v-model="user.telephone" type="text"
                placeholder="Telefone">
        </div>
        <select class="gender standard" name="" id="" v-model="user.gender">
            <option value=""></option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
        </select>
        <div class="passwd">
            <input class="ip-passwd standard" v-model="user.passwd" v-on:keyup="validatePasswd()"
                type="password" placeholder="Digite sua senha">
            <input class="ip-passwd standard" v-model="confirmPassword" type="password" placeholder="Confirme sua senha">
        </div>

        <transition name="fade">
            <div class="alert-error" :class="{ 'alert-show': showAlert }" v-if="showAlert">
                {{ this.errorMessage }}
            </div>
        </transition>

        <button class="bt-newuser" @click="create">Cadastrar</button>
    </card>
</template>

<script>

import navbar from "../components/navbar.vue";
import card from "../components/card.vue";
import inputComponent from "../components/input-component.vue";

export default {
    components: {
        navbar,
        card,
        inputComponent
    },
    data: function () {
        return {
            user: {
                name: "",
                birthDate: "",
                email: "",
                telephone: "",
                gender: "",
                passwd: ""
            },
            confirmPassword: '',
            errorMessage: '',
            showAlert: false,
        }
    },
    methods: { 
        create() {
            this.$router.push('/dashboard');
        },
        validatePasswd(){
            console.log(this.userRegister.passwd);
        },
        createNewUser() {
            const vm = this;

            if(this.userRegister.passwd != this.confirmPassword){
                this.errorMessage = 'Senhas não coincidem, por favor verifique!'
                this.showAlert = true;

                setTimeout(() => {
                    vm.showAlert = false;
                }, 5000); // Tempo em milissegundos antes de esconder o alert

                return;
            }

            if(this.userRegister.email === ''){
                this.errorMessage = 'Email Obrigatorio'
                this.showAlert = true;

                setTimeout(() => {
                    vm.showAlert = false;
                }, 5000); // Tempo em milissegundos antes de esconder o alert

                return;
            }


            axios.post("api/register", vm.userRegister)
                .then(async function (response) {
                    window.location.href = "/dashboard"
                })
                .catch(function (error) {
                    console.log('nao deu certo')
                })
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

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

}

.header {
    background-color: #03045E;
    height: 30px;
    width: 100%;
}

.card-login input {
    background-color: #EAF4F4;
    border: none;
    padding: 20px 10px;
    border-radius: 10px;
    width: 70%;
}

.bt-login {
    background-color: #03045E;
    color: #fff;
    cursor: pointer;
    width: 25%;
    padding: 10px;
    border: none;
    border-radius: 10px;
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

/* Create new user */

.card-register {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 700px;
    width: 95%;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 20%);
    gap: 20px;
    padding: 40px 0;
}

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

}

.header {
    background-color: #03045E;
    height: 30px;
    width: 100%;
}

.standard {
    background-color: #EAF4F4;
    border: none;
    padding: 20px 10px;
    border-radius: 10px;
}

.name-date {
    width: 100%;
    display: flex;
    gap: 15px;
    justify-content: center;
}

.email-telephone {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 15px;
    justify-content: center;
}

.passwd {
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 100%;
}

.alert-error {
    border-radius: 9px;
    background-color: red;
    color: #Fff;
    padding: 5px;
    width: 70%;
    transition: all 0.5s;
}

.ip-name {
    width: 50%;
}

.ip-date {
    width: 25%;
}

.ip-email {
    width: 45%;
}

.ip-tel {
    width: 30%;
}

.gender {
    width: 77%;
}

.ip-passwd {
    width: 37%;
}

.bt-newuser {
    background-color: #03045E;
    color: #fff;
    cursor: pointer;
    width: 25%;
    padding: 15px;
    border: none;
    border-radius: 10px;
    margin: 15px 0 0 0;
    transition: all 0.5s;
}

.card-register button:hover {
    opacity: 50%;
}

@media only screen and (max-width: 480px) {

    .card-register,
    .card-login input {
        width: 90%;
    }
}
</style>
