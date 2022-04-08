<template lang="pug">
  #dest
    NavBar
    .content-container
      .planet-container
        p.pick-destination-text #[span(style="opacity: 0.25; font-weight: bold;") 01] Pick your destination
        img.planet(:src="planetImg")
      .desc-container
        .planet-selector-container
          span.planet-selector(:class="[{chosen: state.selectedPlanet === 'Moon'}]") Moon
          span.planet-selector(:class="[{chosen: state.selectedPlanet === 'Mars'}]") Mars
          span.planet-selector(:class="[{chosen: state.selectedPlanet === 'Europa'}]") Europa
          span.planet-selector(:class="[{chosen: state.selectedPlanet === 'Titan'}]") Titan
        h2.planet-name-text {{ state.selectedPlanet }}
        p.planet-desc(v-if="state.selectedPlanet === 'Moon'") See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        p.planet-desc(v-if="state.selectedPlanet === 'Mars'") Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
        p.planet-desc(v-if="state.selectedPlanet === 'Europa'") The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
        p.planet-desc(v-if="state.selectedPlanet === 'Titan'") The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
        .separator-line
        .info-container(v-if="state.selectedPlanet === 'Moon'")
          .info-group
            p.info-title AVG. DISTANCE
            p.info-content 384,400 km
          .info-group
            p.info-title Est. travel time
            p.info-content 3 days
        .info-container(v-if="state.selectedPlanet === 'Mars'")
          .info-group
            p.info-title AVG. DISTANCE
            p.info-content 225 MIL. km
          .info-group
            p.info-title Est. travel time
            p.info-content 9 months
        .info-container(v-if="state.selectedPlanet === 'Europa'")
          .info-group
            p.info-title AVG. DISTANCE
            p.info-content 628 MIL. km
          .info-group
            p.info-title Est. travel time
            p.info-content 3 years
        .info-container(v-if="state.selectedPlanet === 'Titan'")
          .info-group
            p.info-title AVG. DISTANCE
            p.info-content 1.6 BIL. km
          .info-group
            p.info-title Est. travel time
            p.info-content 7 years
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({
      selectedPlanet: 'Moon',
    })

    const planetImg = computed(() => {
      return state.selectedPlanet === 'Mars'? require('~/assets/image/destination/image-mars.png') :
      state.selectedPlanet === 'Europa'? require('~/assets/image/destination/image-europa.png') :
      state.selectedPlanet === 'Titan'? require('~/assets/image/destination/image-titan.png') :
      require('~/assets/image/destination/image-moon.png')
    })

    return { state, planetImg }
  },
})
</script>
<style lang="sass">
@import ~assets/style/_variables
#dest
  background-image: url("~assets/image/destination/background-destination-desktop.jpg")
  background-size: cover
  background-repeat: no-repeat
  width: 100vw
  height: 100vh
  position: relative
  +tablet
     background-image: url("~assets/image/destination/background-destination-tablet.jpg")
  +mobile
     background-image: url("~assets/image/destination/background-destination-mobile.jpg")
  .content-container
    width: 100%
    height: calc(90% - 110px)
    margin-top: 5%
    display: flex
    +mobile
      height: calc(90% - 80px)
    .planet-container
      width: 50%
      position: relative
      height: 100%
      .pick-destination-text
        font-family: BarlowCondensed
        font-size: 28px
        line-height: 33px
        text-transform: uppercase
        letter-spacing: 4.7px
        text-align: center
      .planet
        position: absolute
        top: 50%
        right: 0px
        transform: translateY(-50%)
    .desc-container
      width: 50%
      position: relative
      padding-left: 10%
      padding-top: 6%
      padding-right: 10%
      .planet-selector-container
        display: flex
        .planet-selector
          font-family: BarlowCondensed
          font-size: 16px
          line-height: 35px
          letter-spacing: 2.7px
          margin-right: 35px
          text-transform: uppercase
          padding-bottom: 3px
          color: #D0D6F9
          &:hover
            padding-bottom: 0px
            border-bottom: 3px solid rgba(255, 255, 255, 0.5)
          &.chosen
            padding-bottom: 0px
            border-bottom: 3px solid white
      .planet-name-text
        font-family: Bellefair
        font-weight: 400
        font-size: 100px
        line-height: 115px
        text-transform: uppercase
        padding: 35px 0px
      .planet-desc
        color: #D0D6F9
        font-family: Barlow
        font-size: 18px
        line-height: 32px
      .separator-line
        background: #383B4B
        height: 1px
        width: 100%
        margin: 50px 0px 25px
      .info-container
        display: flex
        .info-group
          display: flex
          flex-direction: column
          &:first-child
            margin-right: 15%
          .info-title
            font-family: Barlow Condensed
            font-size: 14px
            line-height: 17px
            letter-spacing: 2.3px
            color: #D0D6F9
            text-transform: uppercase
          .info-content
            font-family: Bellefair
            font-size: 28px
            line-height: 32px
            text-transform: uppercase



</style>