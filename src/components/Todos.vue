<template>
    <div>
        <h3>My Todos</h3>
        <ul>
            <li :key="item.id" v-for="item in todos">
                <input type="checkbox" v-if="item.done" checked/>
                <input type="checkbox" v-else/>
                <span v-if="item.done" class="done">{{item.text}}</span>
                <span v-else>{{item.text}}</span>
                <button class="button-del">Löschen</button>
            </li>
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

.button-del {
    float: right;
}

li {
    list-style-type: none;
    margin: 15px;
}

li span {
    margin-left: 10px;
}

.done {
    text-decoration: line-through;
    color: #0a0;
}
</style>