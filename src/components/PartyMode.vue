<template>
<div>
    <div class="row">
        <div class="col-md-2">
            <h3>Primary RSO: {{ event.primaryRso }}</h3>
            <h3>Secondary RSO: {{ event.secondaryRso }}</h3>
        </div>
        <div class="col-md-8">
        </div>
        <div class="col-md-2 col-xs-2 col-lg-2 party-link">
            <span>
                <router-link to="/event-view" class="fa fa-list fa-5x"></router-link>
            </span>
        </div>
    </div>
    <div class="container" v-for="(guest, index) in this.guests">
        <h1>{{ guest.name }}</h1>
        <div class="row">
            <div class="col-md-3">
                <div class="party-ammo">
                    <h3>Targets</h3>
                    <h1>{{ guest.target }}</h1>
                    <i 
                        class="fa fa-minus fa-3x"
                        style="float: left;"
                        v-on:click="decrementTarget(guest, 'target')">
                    </i>
                    <i 
                        class="fa fa-plus fa-3x"
                        style="float: right;"
                        v-on:click="incrementTarget(guest, 'target')">
                    </i>
                    <br>
                    <br>
                </div>
            </div>
            <div class="col-md-3" v-for="(ammo, index) in guest.ammo">
                <div class="party-ammo">
                    <h3>{{ ammo.name }}</h3>
                    <h1>{{ ammo.quantity }}</h1>
                    <i 
                        class="fa fa-minus fa-3x"
                        style="float: left;"
                        v-on:click="decrement(guest, index)">
                    </i>
                    <i 
                        class="fa fa-plus fa-3x"
                        style="float: right;"
                        v-on:click="increment(guest, index)">
                    </i>
                    <br>
                    <br>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <button type="button" class="btn btn-light btn-lg">
                <router-link to="/end-event">End Event</router-link>
            </button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'party-mode',
  data () {
    return {
        event: this.$store.state,
        guests: this.$store.state.guests,
        newName: false
    }
  },
  methods: {
      incrementTarget(guest, index) {
        const payload = { guest: guest, index: index }
        this.$store.commit('incrementTarget', payload)
      },
      decrementTarget(guest, index) {
        const payload = { guest: guest, index: index }
        this.$store.commit('decrementTarget', payload)
      },
      increment(guest, index) {
        const payload = { guest: guest, index: index }
        this.$store.commit('increment', payload)
        this.$forceUpdate()
      },
      decrement(guest, index) {
        const payload = { guest: guest, index: index }
        this.$store.commit('decrement', payload)
        this.$forceUpdate()
      }
  }
}

</script>

<style>
    .party-link {
        border-style: dotted;
        padding: 10px;
    }
    .party-ammo {
        border-style: solid;
        padding: 10px;
        margin: 10px;
    }
</style>
