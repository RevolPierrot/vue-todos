<template>
    <div>
        <h1>Meine Autoren (Anzahle: )</h1>
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

</style>