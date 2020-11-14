<template>
    <div>
        <h1>Meine Autoren (Anzahl: )</h1>
        <div class="wrapper">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <th>Vorname</th>
                    <th>Nachname</th>
                </tr>
                <!-- hier authors per v-for mittles Author Komponente mit props: "author" ausgeben -->
                <Author :key="item.id" v-for="item in authors" :author="item"/>
            </table>
        </div>
    </div>
</template>

<script>
import myAuthors from "@/data/authors.json"
import Author from "@/components/Author";
export default {
    name: "Authors",
    components: {Author},
    data () {
        return {
            authors: myAuthors.data
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;
}

</style>