<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
      <div>
          <h3>{{ message }}</h3>
          Message:<input type="text" v-model="message" />
      </div>
    <HelloWorld name="Juniper"/>
      <Test/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name: 'Home',
  components: {HelloWorld},
    data () {
      return {
          message: "Standart Wert",
      }
    }
}
</script>
