<template>
    <div>
        <h3>My Todos</h3>
        <ul>
            <li :key="item.id" v-for="item in todos">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
//nachdem axios via npm installiert wurde (npm install axios), kann es später als funktion verwendet werden
import axios from "axios";

const apiURL = "http://videostore.loc/api/todos";

export default {
    name: "Todos",
    data() {
        return {
            todos: [],
        }
    },
    created() {
        this.getTodos()
    },
    methods: {
        getTodos()
        {
            axios.get(apiURL)
            .then(resp => {
                console.info(resp.data.result);
                this.todos = resp.data.result;
            })
            .catch(err => console.error(err));
        }
    }
}
</script>

<style scoped>
ul {
    width: 50%;
    text-align: justify;
    margin: auto;
}

li {
    list-style-type: none;
}
</style>