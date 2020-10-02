<template>
    <div style="text-align: center" class="container row">
        <div class="col-md-4"></div>
        <div class="col-md-2 checked-in-guests">
            Number of Checked In Guests:
            <br>
            <h2><b>{{ guests.length }}</b></h2>
        </div>
        <div class="col-md-6" style="text-align: center">
            <!--<input type="text" class="form-control" v-model="name" ref="name" />
            <button class='ui basic button icon' v-on:click="sendForm()">
                <i class='plus icon'></i>
            </button>-->
            <br/>
            <br/>
            <div class="input-group mb-3">
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Guest's Name" 
                    aria-label="Recipient's Name" 
                    v-model="name">
                <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2" v-on:click="sendForm()">Check In</span>
                </div>
            </div>
        </div>
        <!--<div class="col-md-3">
                Primary RSO: {{ event.primary-rso }}
                <br/>
                Seconary RSO: {{ event.secondary-rso }}
        </div>-->
        <div class="col-md-2"></div>
    </div>
</template>




<script>
export default {
    name: 'add-guest',
    props: ['guests'],
    data() {
        return {
            id:'',
            name: '',
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
    },
    methods: {
        log(message) {
            console.log(message);
        },
        sendForm() {
            if (this.name.length > 0 ) {
                /*const name = this.name;
                const waiver = false;
                const rental = false;
                const rentalUsed = false;
                const target = 0; */
                const guest = {
                    id: 99,
                    name: this.name,
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
                this.$emit('add-guest', guest);
            }
        }
    }
}

</script>
