<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <div class="wrapper">
            <span v-if="name">Dein Name lautet <b>{{ name }}</b></span>
            <span v-else><b>Bitte einen Namen eingeben.</b></span>
        </div>
        <ul>
            <li :key="item" v-for="item in names">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            names: ['Paul', 'Hans', 'Lisa'],
        }
    },

    //hier werden properties nach HelloWorld.vue exportiert//
    props: ['msg', 'name'],
    //lange Variante:
    /*props: {
        msg: {
            type: String,
            default: "Keine Message vorhanden",
        },
        name: {
            default: "Kein Name",
        },
    }*/

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
    margin: 40px 0 0;
}
 .wrapper {
     display: flex;
     align-items: center;
     justify-content: center;
 }

ul {
    width: 200px;
}

li {
    text-align: center;
}

a {
    color: #42b983;
}
</style>
