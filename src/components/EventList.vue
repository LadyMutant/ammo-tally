<template>
    <div>
        <router-link to="/create-event">Create Event</router-link>
        <router-link to="/event-view">View Event</router-link>
    </div>
</template>

<script>
export default {
    name: 'event-list',
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