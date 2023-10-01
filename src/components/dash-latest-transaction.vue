<template>
    <div class="container">
        <div class="card-transaction">
            <div class="card-transaction-details">
                <p>Compra Megazine</p>
                <p>R$ 50,00</p>
            </div>
            <div class="card-transaction-details">
                <p>Compra Mercado Livre</p>
                <p>R$ 190,00</p>
            </div>
            <div class="card-transaction-details">
                <p>Compra Mercado Livre</p>
                <p>R$ 190,00</p>
            </div>
            <div class="divisor"></div>
            <div class="card-transaction-details">
                <p>Total</p>
                <p>R$ 240,00</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    max-width: 380px;
    width: 100%;
}
.card-transaction{
    flex-direction: column;
    padding: 10px 20px;
    width: 100%;
    max-width: 500px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    -webkit-box-shadow: -11px 11px 49px -15px rgba(0,0,0,0.3);
    -moz-box-shadow: -11px 11px 49px -15px rgba(0,0,0,0.3);
    box-shadow: -11px 11px 49px -15px rgba(0,0,0,0.3);
    transition: all 0.5s ease-in-out;
}
.card-transaction:hover{
    transform: scale(1.05);
    cursor: pointer;
}
.card-transaction-details{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.divisor{
    background-color: #00000042;
    height: 1px;
}
</style>