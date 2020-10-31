import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      eventName: '',
      primaryRso: '',
      secondaryRso: '',
      ammo: [],
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
        const index = payload.index
        const guestIndex = state.guests.indexOf(payload.guest)
        state.guests[guestIndex].ammo[index].quantity++
      },
      decrement (state, payload) {
        const index = payload.index
        const guestIndex = state.guests.indexOf(payload.guest)
        if (state.guests[guestIndex].ammo[index].quantity > 0) {
          state.guests[guestIndex].ammo[index].quantity-- 
        }
      },
      removeGuest (state, payload) {
        state.guests.splice(this.state.guests.indexOf(payload), 1);
      },
      addAmmo(state, ammo) {
        state.ammo.push(ammo);
      },
      removeAmmo(state, ammo) {
        state.ammo.splice(this.state.ammo.indexOf(ammo), 1);
      },
      addGuest (state, name) {
        const ammo = this.state.ammo;
        ammo.forEach((item, index) => {
          item.quantity = 0;
        })

        const guest = {
          name: name,
          waiver: false,
          rental: false,
          rentalUsed: false,
          ammo: ammo,
          checkedOut: false,
          target: 0
        }
        state.guests.push(guest);
      }
    }
  })
  
  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
  });

  export default store