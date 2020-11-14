<template>
    <div>
        <h1>Meine Movies (Anzahl: )</h1>
        <div class="wrapper">
            <table class="table">
                <tr>
                    <th>ID</th>
                    <th>Author ID</th>
                    <th>Title</th>
                    <th>Price</th>
                </tr>
                <Movie :key="item.id" v-for="item in movies" :movie="item"/>
            </table>
        </div>
    </div>
</template>

<script>
import myMovies from "@/data/movies.json";
import Movie from "@/components/Movie";

export default {
    name: "Movies",
    components: {Movie},
    data () {
        return {
            movies: myMovies.data
        }
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    justify-content: center;

</style>