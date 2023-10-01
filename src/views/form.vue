<template>

    <navbar></navbar>

    <card>
        <div class="row">
            <button class="back">
                
            </button>
        </div>
        <div class="row">
            <inputComponent :placeholder="'Valor'"
                            :type="'text'">
            </inputComponent>
            <inputComponent :placeholder="'Data vencimento'"
                            :type="'text'"
                            v-mask="'##/##/####'">
            </inputComponent>
        </div>
        <div class="row">
            <inputComponent :placeholder="'Descrição'"
                            :type="'text'">
            </inputComponent>
        </div>
        <div class="row">
            <inputComponent :placeholder="'Categoria'"
                            :type="'text'">
            </inputComponent>
        </div>

        <div class="row">
            <button class="bt-save">
                Salvar
            </button>
        </div>
    </card>
</template>

<script>
import navbar from "../components/navbar.vue";
import card from "../components/card.vue"
import inputComponent from "../components/input-component.vue";

export default {
    components: {
        navbar,
        card,
        inputComponent
    },
}
</script>

<style scoped>
.row{
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    
}
.bt-save{
    background-color: #0002B4;
    color: #fff;
    cursor: pointer;
    width: 25%;
    padding: 10px;
    border: none;
    border-radius: 7px;
    margin: 10px 0 0 0;
    transition: all 0.5s;
    float: right;
}
.back{
    padding: 20px;
    border-radius: 30px;
    border: none;
}
</style>