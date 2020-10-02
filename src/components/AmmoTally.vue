<template>
    <div style="text-align:center;">
        <table class="table">
            <thead class="thead-light">
            <tr class="thead-light">
                <th>Customer Name</th>
                <th>Firearm Rental?</th>
                <th>Targets</th>
                <th>9mm ammo bag</th>
                <th>.223 ammo bag</th>
                <th>Grind Hard Ammo</th>
                <th>Frontier 50rd</th>
                <th>Frontier 20rd</th>
                <th>Checked Out</th>
            </tr>
            </thead>
            <tr>
                <td colspan="9" v-show="guests.length === 0">
                    NONE ADDED YET
                </td>
            </tr>
            <tr v-for="guest in guests" v-show="guest.waiver">
                <td><b>{{ guest.name }}</b>
                    <br/>
                    <i>Waiver completed</i>
                    <br>
                    <i v-show="guest.rental">Rental completed</i>
                </td>
                <td>
                    <div class="checkbox">
                        <input type="checkbox" v-model="guest.rentalUsed">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" ref="rental-gun" defaultValue="" placeholder="Rental Gun" v-show="guest.rentalUsed"/>
                    </div>
                </td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" v-on:click="decrement(guest, 'target')">-</button>
                        <button type="button" class="btn btn-primary" >{{ guest.target }}</button>
                        <button type="button" class="btn btn-primary"  v-on:click="increment(guest, 'target')">+</button>
                    </div> 
                </td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary"  v-on:click="decrement(guest, 'ammo1')">-</button>
                        <button type="button" class="btn btn-primary">{{ guest.ammo1 }}</button>
                        <button type="button" class="btn btn-primary"  v-on:click="increment(guest, 'ammo1')">+</button>
                    </div> 
                </td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" v-on:click="decrement(guest, 'ammo2')">-</button>
                        <button type="button" class="btn btn-primary">{{ guest.ammo2 }}</button>
                        <button type="button" class="btn btn-primary"  v-on:click="increment(guest, 'ammo2')">+</button>
                    </div> 
                </td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" v-on:click="decrement(guest, 'ammo3')">-</button>
                        <button type="button" class="btn btn-primary">{{ guest.ammo3 }}</button>
                        <button type="button" class="btn btn-primary" v-on:click="increment(guest, 'ammo3')">+</button>
                    </div>
                </td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" v-on:click="decrement(guest, 'ammo4')">-</button>
                        <button type="button" class="btn btn-primary">{{ guest.ammo4 }}</button>
                        <button type="button" class="btn btn-primary" v-on:click="increment(guest, 'ammo4')">+</button>
                    </div>
                </td>
                <td>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" v-on:click="decrement(guest, 'ammo5')">-</button>
                        <button type="button" class="btn btn-primary">{{ guest.ammo5 }}</button>
                        <button type="button" class="btn btn-primary" v-on:click="increment(guest, 'ammo5')">+</button>
                    </div>
                </td>
                <td>
                    <input type="checkbox" />
                </td>
            </tr>
        
        </table>
    </div>
</template>

<script>
export default {
  name: 'ammo-tally',
  props: ['guests'],
  data () {
    return {
      msg: 'Welcome to OnPoint'
    }
  },
  methods: {
      increment(guest, property) {
          guest[property]++;
      },
      decrement(guest, property) {
        if (guest[property] > 0) {
            guest[property]--;
        }
      }
  }
}

</script>
