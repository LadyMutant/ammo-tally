<template>
    <div class="container">
        <router-link to="/create-event">Create Event</router-link>
        <br>
        <br>
        <div class="row">
            <div class="col-md-12">
                <h2>{{ event.eventName }}</h2>
                <h5>
                    <!--{{ this.$store.getters.simpleDate() }}-->
                    
                    {{ event.primaryRso }}</h5>
                <h5>{{ event.secondaryRso }}</h5>
                <table class="table">
                    <thead class="thead-dark">
                        <th>Customer Name</th>
                        <th>Targets</th>
                        <th v-for="(ammo, index) in event.ammo">{{ ammo.name }}</th>
                        <th>Total Spent</th>
                    </thead>
                    <tbody>
                        <tr v-for="guest in event.guests">
                            <td>
                                {{guest.name}}
                            </td>
                            <td>
                                {{ guest.target }}
                            </td>
                            <td v-for="(ammo, index) in guest.ammo">
                                {{ ammo.quantity }}
                            </td>
                            <td>
                                <h4>
                                $ {{ totalSpent(guest) }}
                                </h4>
                            </td>
                        </tr>
                    </tbody>
                </table>  

            </div>
            
        </div>
        <div class="row">
            <div class="col-md-12">
                <h1>Total Spent: $ {{ eventTotal() }}</h1>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'end-event',
    data() {
        return {
            event: this.$store.state
        }
    },
    methods: {
        totalSpent(guest) {
            var targetPrice = 1.50;
            var targetTotal = targetPrice * guest.target;
            var total = targetTotal;
            guest.ammo.forEach((ammo, index) => {
                var price = parseInt(ammo.price);
                var amount = price * ammo.quantity;
                total += amount;
            })
            return total;
        },
        eventTotal() {
            var eTotal= 0;
            this.event.guests.forEach((guest)=> {
                eTotal += this.totalSpent(guest);
            })
            return eTotal;
        }
    }
}
</script>