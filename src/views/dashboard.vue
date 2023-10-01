<template>

    <navbar>
        <buttonDropdown 
            :options="options"
        />
    </navbar>

    <div class="content">
        <div class="numbers">
            <dashNumbers />  
        </div>

        <div class="latest-transaction">
            <dashLatestTransaction />
            <dashGraph />
        </div>
    </div>

    <buttonFloating @activedModal="toggleModal"/>

</template>

<script>

import navbar from "../components/navbar.vue";
import dashNumbers from "../components/dash-numbers.vue";
import dashLatestTransaction from "../components/dash-latest-transaction.vue"
import dashGraph from "../components/dash-graphic.vue"
import buttonDropdown from "../components/button-dropdown.vue"
import buttonFloating from "../components/button-floating.vue";

export default {
    components: {
        navbar,
        dashNumbers,
        dashLatestTransaction,
        dashGraph,
        buttonDropdown,
        buttonFloating
    },
    data() {
        return {
            options:[
                {
                    id: 1,
                    text: 'Conta',
                    route: '/account'
                },
                {
                    id: 2,
                    text: 'Sair',
                    route: '/'
                },
                {
                    id: 3,
                    text: 'Configurações',
                    route: '/settings'
                },
                {
                    id: 4,
                    text: 'Ajuda',
                    route: '/help'
                }
            ],
            activeModal: false
        }
    },
    methods:{
    }

}

</script>

<style scoped>
.content {
    width: 100%;
    max-width: 1280px;
    margin: 20px;
}
.numbers{
    margin-top: 20px;
}
.latest-transaction{
    display: flex;
    flex-direction: row;
    margin: 50px;
    justify-content: space-evenly;;
}
</style>