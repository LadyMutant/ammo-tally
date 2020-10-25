 <template>
  <div id="app">
   <img
    width="300"
    alt="OnPoint Logo"
    src="https://secure.meetupstatic.com/photos/event/c/e/d/9/600_491992953.jpeg"
  />
  <!--<router-view></router-view>-->    
    <create-event></create-event>
    <br/><br/>
    <add-guest></add-guest>
    <br/>
    <guest-list></guest-list>
    <ammo-tally></ammo-tally>
  </div>
</template> 

<script>
import AddGuest from './components/AddGuest'
import GuestList from './components/GuestList'
import AmmoTally from './components/AmmoTally'
import Event from './components/Event'
import CreateEvent from './components/CreateEvent'

export default {
  name: 'App',
  components: {
    AddGuest,
    GuestList,
    AmmoTally,
    Event,
    CreateEvent
  },
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
