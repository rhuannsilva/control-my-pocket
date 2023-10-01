<template>
    <label class="dropdown">

        <div class="dd-button">
            Rhuan Silva
        </div>

        <input type="checkbox" class="dd-input" id="test">

        <ul class="dd-menu">
            <li v-for="option in options" :key="option.id" @click="redirect(option.route)">{{ option.text }}</li>
        </ul>

    </label>
</template>

<script>
export default {
    props: {
        options: {
            type: Object
        }
    },
    data() {
        return {

        }
    },
    methods: {
        redirect(route) {
            this.$router.push(route)
        }
    }
}
</script>

<style>
a {
    text-decoration: none;
    color: #000000;
}

a:hover {
    color: #222222
}

/* Dropdown */

.dropdown {
    display: inline-block;
    position: relative;
}

.dd-button {
    display: inline-block;
    border-radius: 12px;
    padding: 10px 30px 10px 20px;
    background: rgba(255, 255, 255, 0.30);
    color: #fff;
    transition: all 0.5s;
    cursor: pointer;
    white-space: nowrap;
}

.dd-button:hover {
    opacity: 70%;
}


.dd-input {
    display: none;
}

.dd-menu {
    position: absolute;
    transition: all 0.5s;
    padding: 0;
    width: 100%;
    top: 111%;
    right: 0px;
    border-radius: 4px;
    margin: 2px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    list-style-type: none;
}

.dd-input+.dd-menu {
    display: none;
}

.dd-input:checked+.dd-menu {
    display: block;
}

.dd-menu li {
    padding: 10px 20px;
    cursor: pointer;
    white-space: nowrap;
}

.dd-menu li:hover {
    background-color: #f6f6f6;
    border-radius: 4px;
}

.dd-menu li a {
    display: block;
    margin: -10px -20px;
    padding: 10px 20px;
}
</style>