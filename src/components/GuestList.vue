<template>
    <div class="container">
        <table class="table table-light">
            <thead class="thead-light">
            <tr>
                <th>Customer Name</th>
                <th>Waiver Completed</th>
                <th>Rental Agreement</th>
            </tr>
            </thead>
            <tr>
                <td colspan="3" v-show="guests.length === 0">
                    NONE ADDED YET
                </td>
            </tr>
            <tr v-for="guest in guests" v-show="!guest.waiver">
                <td>{{ guest.name }}</td>
                <td>
                    <div class="checkbox">
                        <input type="checkbox" v-model="guest.waiver">
                    </div>
                </td>
                <td>
                    <div class="checkbox">
                        <input type="checkbox" v-model="guest.rental">
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'guest-list',
  props: ['guests'],
  data () {
    return {
      msg: 'Welcome to OnPoint'
    }
  }
}

</script>