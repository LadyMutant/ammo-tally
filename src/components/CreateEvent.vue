<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
            <h1>Create Event</h1>
                <input type="text" placeholder="Event Name" v-model="event.eventName"/>
                <br>
                <input type="text" placeholder="Primary RSO" v-model="event.primaryRso"/>
                <input type="text" placeholder="Secondary RSO" v-model="event.secondaryRso"/>
                <br/>
                <br>
                
                <table class="table table-striped">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="text" placeholder="Ammo name" v-model="currentAmmo.name"/>
                            </td>
                            <td>
                                <input type="number" placeholder="Ammo price" v-model="currentAmmo.price"/>
                            </td>
                            <td>
                                <button class="btn btn-success" role="button" v-on:click="addAmmo()">+</button>
                            </td>
                        </tr>
                        <tr v-for="product in this.event.ammo" :key="product.name">
                            <td>
                                {{ product.name }}
                            </td>
                            <td>
                                {{ product.price }}
                            </td>
                            <td>
                                <button>
                                    <span class="fa fa-trash" v-on:click="removeAmmo(product)"></span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                
                <br>
                <br>
                <button v-on:click="$router.push('/event-view')">Create Event</button>
            </div>
        </div>

    

    </div>
</template>

<script>
export default {
    name: 'CreateEvent',
    data() {
        return {
            event: this.$store.state,
            ammo: this.$store.state.ammo,
            currentAmmo: {
                name: '',
                price: '',
                quanitity: 0,
            }
        }
    },
    methods: {
        addAmmo() {
            const ammo = { name: this.currentAmmo.name, price: this.currentAmmo.price }
            this.currentAmmo.name = '';
            this.currentAmmo.price = '';
            this.currentAmmo.quantity = 0;
            this.$store.commit('addAmmo', ammo)
        },
        removeAmmo(ammo) {
            this.$store.commit('removeAmmo', ammo)
        }
        
    }
}
</script>