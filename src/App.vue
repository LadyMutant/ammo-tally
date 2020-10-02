<template>
  <div id="app">
   <img
    width="300"
    alt="OnPoint Logo"
    src="https://secure.meetupstatic.com/photos/event/c/e/d/9/600_491992953.jpeg"
  />
    <create-event></create-event>
    <br/><br/>
    <add-guest v-on:add-guest="addGuest" v-bind:guests="guests"></add-guest>
    <br/>
    <guest-list v-bind:guests="guests"></guest-list>
    <ammo-tally v-bind:guests="guests"></ammo-tally>
  </div>
</template>

<script>
import AddGuest from './components/AddGuest'
import GuestList from './components/GuestList'
import AmmoTally from './components/AmmoTally'
import Event from './components/Event'
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'App',
  components: {
    AddGuest,
    GuestList,
    AmmoTally,
    Event,
    Datepicker
  },
  methods: {
    log(message) {
        console.log(message);
    },
    addGuest(name) {
      this.guests.push(name);
    }
  },
  data() {
    return {
      guests: [/*{
        id: 1,
        name: "AJ Lambert",
        waiver: false,
        rental: false,
        rentalused: false,
        target: 1,
        ammo1: 1,
        ammo2: 2,
        ammo3: 3,
        ammo4: 4,
        ammo5: 5,
        checkedOut: false
      },
      {
        id: 2,
        name: "Gemma Dominey",
        waiver: false,
        rental: false,
        rentalused: false,
        target: 1,
        ammo1: 1,
        ammo2: 2,
        ammo3: 3,
        ammo4: 4,
        ammo5: 5,
        checkedOut: false
      },
      {
        id: 3,
        name: "Aaron Kimball",
        waiver: false,
        rental: false,
        rentalused: false,
        target: 1,
        ammo1: 1,
        ammo2: 2,
        ammo3: 3,
        ammo4: 4,
        ammo5: 5,
        checkedOut: false
      },
      {
        id: 4,
        name: "Ben Bergamini",
        waiver: false,
        rental: false,
        rentalused: false,
        target: 1,
        ammo1: 1,
        ammo2: 2,
        ammo3: 3,
        ammo4: 4,
        ammo5: 5,
        checkedOut: false
      },
      {
        id: 5,
        name: "Houck Reed",
        waiver: false,
        rental: false,
        rentalused: false,
        target: 1,
        ammo1: 1,
        ammo2: 2,
        ammo3: 3,
        ammo4: 4,
        ammo5: 5,
        checkedOut: false
      },
      {
        id: 6,
        name: "Rich Dubeau",
        waiver: false,
        rental: false,
        rentalused: false,
        target: 1,
        ammo1: 1,
        ammo2: 2,
        ammo3: 3,
        ammo4: 4,
        ammo5: 5,
        checkedOut: false
      },
      {
        id: 7,
        name: "Tony Fortner",
        waiver: false,
        rental: false,
        rentalused: false,
        target: 1,
        ammo1: 1,
        ammo2: 2,
        ammo3: 3,
        ammo4: 4,
        ammo5: 5,
        checkedOut: false
      },
      {
        id: 8,
        name: "Larry Wegman",
        waiver: false,
        rental: false,
        rentalused: false,
        target: 1,
        ammo1: 1,
        ammo2: 2,
        ammo3: 3,
        ammo4: 4,
        ammo5: 5,
        checkedOut: false
      },
      {
        id: 9,
        name: "Deen Alexander",
        waiver: false,
        rental: false,
        rentalused: false,
        target: 1,
        ammo1: 1,
        ammo2: 2,
        ammo3: 3,
        ammo4: 4,
        ammo5: 5,
        checkedOut: false
      },
      {
        id: 10,
        name: 'Keegan Duhon',
        waiver: true,
        rental: false,
        rentalused: false,
        target: 1,
        ammo1: 1,
        ammo2: 2,
        ammo3: 3,
        ammo4: 4,
        ammo5: 5,
        checkedOut: false
      }*/]
    }
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
