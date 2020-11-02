<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div style="text-align:center;">
                    <table class="table">
                        <thead class="thead-light">
                            <tr class="thead-light">
                                <th>Check Out</th>
                                <th>Delete</th>
                                <th>Customer Name</th>
                                <th>Firearm Rental?</th>
                                <th>Targets</th>
                                <th v-for="(ammo, index) in event.ammo">{{ ammo.name }}</th>
                            </tr>
                        </thead>
                        <tr>
                            <td colspan="9" v-show="this.guests.length === 0">
                                NONE ADDED YET
                            </td>
                        </tr>
                        <tr v-for="(guest) in this.guests" v-show="guest.waiver">
                            <td>
                                <input type="checkbox"/>
                            </td>
                            <td>
                                <!--<span 
                                    class="fas fa-edit fa-2x pull-left"
                                    v-on:click="editName(guest)">
                                </span>-->
                                <span
                                    class="fas fa-trash fa-2x pull-right"
                                    v-on:click="removeGuest(guest)">
                                </span>
                            </td>
                            <td>

                                <div class="input-group mb-3" v-show="newName">
                                    <input 
                                    type="text" 
                                    class="form-control"
                                    ref="edit-name" 
                                    defaultValue="" 
                                    placeholder="Edit Name"
                                    v-model="newName"
                                    maxlength="20"/>
                                    <div class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="fa fa-check"></i>
                                        </span>
                                    </div>
                                    </div>
                                <b>{{ guest.name }}</b>
                                <br/>
                                <i>Waiver completed</i>
                                <br>
                                <i v-show="guest.rental">Rental completed</i>
                            </td>
                            <td>
                                <div class="checkbox">
                                    <input type="checkbox" v-if="guest.rental === true" v-model="guest.rentalUsed">
                                </div>
                                <div class="input-group mb-3">
                                    <input 
                                        type="text" 
                                        class="form-control" 
                                        ref="rental-gun" 
                                        placeholder="Rental Gun" 
                                        v-show="guest.rentalUsed"/>
                                </div>
                            </td>
                            <td>
                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-primary" v-on:click="decrementTarget(guest, 'target')">-</button>
                                    <button type="button" class="btn btn-primary" >{{ guest.target }}</button>
                                    <button type="button" class="btn btn-primary"  v-on:click="incrementTarget(guest, 'target')">+</button>
                                </div> 
                            </td>
                            <td v-for="(ammo, index) in guest.ammo">
                                <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-primary"  v-on:click="decrement(guest, index)">-</button>
                                    <button type="button" class="btn btn-primary">{{ ammo.quantity }}</button>
                                    <button type="button" class="btn btn-primary"  v-on:click="increment(guest, index)">+</button>
                                </div> 
                            </td>
                        </tr>
                    
                    </table>
                    <div class="row">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <button type="button" class="btn btn-light btn-lg">
                                <router-link to="/end-event">End Event</router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ammo-tally',
  data () {
    return {
        event: this.$store.state,
        guests: this.$store.state.guests,
        newName: false
    }
  },
  methods: {
      incrementTarget(guest, index) {
        const payload = { guest: guest, index: index }
        this.$store.commit('incrementTarget', payload)
      },
      decrementTarget(guest, index) {
        const payload = { guest: guest, index: index }
        this.$store.commit('decrementTarget', payload)
      },
      increment(guest, index) {
        const payload = { guest: guest, index: index }
        this.$store.commit('increment', payload)
        this.$forceUpdate()
      },
      decrement(guest, index) {
        const payload = { guest: guest, index: index }
        this.$store.commit('decrement', payload)
        this.$forceUpdate()
      },
      removeGuest(guest) {
        const response = window.confirm('Are you sure you want to delete ' + guest.name + '?')
        if (response === true) {
        this.$store.commit('removeGuest', guest)
        }
      }
  }
}

</script>

<style>
    .checked-out {
        background-color: blue;
    }
</style>
