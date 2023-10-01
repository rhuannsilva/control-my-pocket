<template>
    <div class="container">
        <div class="dash-valores">
            <div class="card-dash">
                <p>Saldo Atual</p>
                <p>R$ 1800,00</p>
            </div>
        </div>
        <div class="dash-valores">
            <div class="card-dash">
                <p>Despesas</p>
                <p>R$ 1800,00</p>
            </div>
        </div>
        <div class="dash-valores">
            <div class="card-dash">
                <p>Previsto</p>
                <p>R$ 1800,00</p>
            </div>
        </div>
        <div class="dash-valores">
            <div class="card-dash">
                <p>Ultima Transaçao</p>
                <p>R$ 1800,00</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 50px;
}
.dash-valores{
    padding: 10px;
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    -webkit-box-shadow: -11px 11px 49px -15px rgba(0,0,0,0.3);
    -moz-box-shadow: -11px 11px 49px -15px rgba(0,0,0,0.3);
    box-shadow: -11px 11px 49px -15px rgba(0,0,0,0.3);
    transition: all 0.5s ease-in-out;
}
.dash-valores:hover{
    transform: scale(1.05);
}

</style>