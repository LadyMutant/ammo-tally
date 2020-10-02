<template>
    <div class="container">
        <h1>Create Event</h1>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                Needs to have a date, Primary RSO, Secondary RSO, the 5 types of popular ammo that will be used (to populate the table)
                <br/>
                <input type="text" placeholder="Event Name" v-model="EventName"/>
                <input type="text" placeholder="Primary RSO" v-model="primaryRso"/>
                <input type="text" placeholder="Secondary RSO" v-model="secondaryRso"/>
                <br/>
                <br>
                <input type="text" placeholder="Ammo 1"/>
                <br>
                <input type="text" placeholder="Ammo 2"/>
                <br>
                <input type="text" placeholder="Ammo 3"/>
                <br>
                <input type="text" placeholder="Ammo 4"/>
                <br>
                <input type="text" placeholder="Ammo 5"/>
                <br>
                <br>
            <button class='ui basic button icon' v-on:click="sendForm()">
                Create Event
            </button>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'create-event',
    data() {
        return {
            EventName: '',
            primaryRso: '',
            secondaryRso: '',
            ammo1: '',
            ammo2: '',
            ammo3: '',
            ammo4: '',
            ammo5: '',
            guests: [],
        }
    },
    methods: {
        log(message) {
            console.log(message);
        },

        sendForm() {
            if (this.EventName.length > 0 ) {
                console.log(guests);
                /*const name = this.name;
                const waiver = false;
                const rental = false;
                const rentalUsed = false;
                const target = 0; */
                const event = {
                    EventName: this.EventName,
                    primaryRso: this.primaryRso,
                    secondaryRso: this.secondaryRso,
                    ammo1: this.ammo1,
                    ammo2: this.ammo2,
                    ammo3: this.ammo3,
                    ammo4: this.ammo4,
                    ammo5: this.ammo5,
                    guests: this.guests
                }
                this.$emit('create-event', event);
            }
        }
    }
}
</script>