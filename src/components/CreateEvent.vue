<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6" v-if="this.submitted == false">
            <h1>Create Event</h1>
                <input type="text" placeholder="Event Name" v-model="event.eventName"/>
                <br>
                <input type="text" placeholder="Primary RSO" v-model="event.primaryRso"/>
                <input type="text" placeholder="Secondary RSO" v-model="event.secondaryRso"/>
                <br/>
                <br>
                <input type="text" placeholder="Ammo 1" v-model="event.ammo1"/>
                <br>
                <input type="text" placeholder="Ammo 2" v-model="event.ammo2"/>
                <br>
                <input type="text" placeholder="Ammo 3" v-model="event.ammo3"/>
                <br>
                <input type="text" placeholder="Ammo 4" v-model="event.ammo4"/>
                <br>
                <input type="text" placeholder="Ammo 5" v-model="event.ammo5"/>
                <br>
                <br>
            <button class='ui basic button icon' v-on:click="sendForm()">
                Create Event
            </button>
            </div>
            <div class="col-md-12" v-else>
                <h1>{{ event.eventName }}</h1>
                <div class="row">
                    <div class="col-md-2">
                        <h3>Primary RSO: </h3><p>{{ event.primaryRso }}</p>
                    </div>
                    <div class="col-md-2 offset-md-8">
                        <h4>Secondary RSO: </h4><p>{{ event.secondaryRso }}</p>
                    </div>
                </div>
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
            submitted: false
        }
    },
    methods: {
        sendForm() {
            this.submitted = true
        }
    }
}
</script>