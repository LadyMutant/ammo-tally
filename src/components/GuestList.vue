<template>
    <div class="container">
        <table class="table table-light">
            <thead class="thead-light">
            <tr>
                <th>Customer Name</th>
                <th>Rental Agreement</th>
                <th>Waiver Completed</th>
            </tr>
            </thead>
            <tr>
                <td colspan="3" v-show="this.guests.length === 0">
                    NONE ADDED YET
                </td>
            </tr>
            <tr v-for="guest in this.guests" v-show="!guest.waiver">
                <td>{{ guest.name }}</td>
                <td>
                    <div class="checkbox">
                        <input type="checkbox" 
                        v-model="guest.rental"
                        v-on:change="completeRental(guest)">
                    </div>
                </td>
                <td>
                    <div class="checkbox">
                        <input type="checkbox" 
                        v-model="guest.waiver" 
                        v-on:change="completeWaiver(guest)">
                    </div>
                </td>
            </tr>
        </table>
    </div>

    
</template>

<script>
export default {
  name: 'guest-list',
  data () {
    return {
      guests: this.$store.state.guests
    }
  },
  methods: {
      completeRental(guest) {
          this.$store.commit('completeRental', guest)
      },
      completeWaiver(guest) {
          this.$store.commit('completeWaiver', guest)
      }
  }
}

</script>