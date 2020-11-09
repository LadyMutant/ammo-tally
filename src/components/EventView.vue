<template>
<div>
    {{ event.eventName }}
    <br>
    {{ event.primaryRso }}
    <br>
    {{ event.secondaryRso }}
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