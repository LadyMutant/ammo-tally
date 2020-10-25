 <template>
  <div id="app">
   <img
    width="300"
    alt="OnPoint Logo"
    src="https://secure.meetupstatic.com/photos/event/c/e/d/9/600_491992953.jpeg"
  />   
    <router-view></router-view>
  </div>
</template> 

<script>

export default {
  name: 'App',
  methods: {},
  data() {
    return {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
