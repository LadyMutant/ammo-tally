import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      eventName: '',
      primaryRso: '',
      secondaryRso: '',
      ammo1: '',
      ammo2: '',
      ammo3: '',
      ammo4: '',
      ammo5: '',
      date: '',
      guests: []
    },
    mutations: {
      initializeStore(state) {
        if(localStorage.getItem('store')) {
          this.replaceState(
            Object.assign(state, JSON.parse(localStorage.getItem('store')))
          )
        }
      },
      increment (state, payload) {
        const idx = state.guests.indexOf(payload.guest)
        state.guests[idx][payload.property]++
      },
      decrement (state, payload) {
        const idx = state.guests.indexOf(payload.guest)
        if (state.guests[idx][payload.property] > 0) {
          state.guests[idx][payload.property]-- 
        }
      },
      removeGuest (state, payload) {
        state.guests.splice(this.state.guests.indexOf(payload.guest), 1);
  
        log(guests);
      },
      addGuest (state, name) {
        const guest = {
          name: name,
          waiver: false,
          rental: false,
          rentalUsed: false,
          target: 0,
          ammo1: 0,
          ammo2: 0,
          ammo3: 0,
          ammo4: 0,
          ammo5: 0,
          checkedOut: false
        }
        state.guests.push(guest);
      }
    }
  })
  
  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
  });

  export default store