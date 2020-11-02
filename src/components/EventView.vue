<template>
<div>
    <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8">
            {{ event.eventName }}
        </div>
        <div class="col-md-2 col-xs-2 col-lg-2 party-link">
            <span>
                <router-link to="/party-mode" class="fa fa-glass-cheers fa-5x"></router-link>
            </span>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6">
            {{ event.primaryRso }}
        </div>
        <div class="col-md-6">
            {{ event.secondaryRso }}
        </div>
    </div>
    <br>
        <add-guest></add-guest>
        <guest-list></guest-list>
        <ammo-tally></ammo-tally>
</div>
    
</template>

<script>

import AddGuest from './AddGuest'
import GuestList from './GuestList'
import AmmoTally from './AmmoTally'

export default {
    name: 'event-view',
    components: {
        AddGuest,
        GuestList,
        AmmoTally
    },
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

<style>

    .party-link {
        border-style: dotted;
        padding: 10px;
    }

</style>