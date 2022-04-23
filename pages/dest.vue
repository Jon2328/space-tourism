<template lang="pug">
  #dest
    NavBar
    .content-container
      .planet-container
        p.pick-destination-text #[span(style="opacity: 0.25; font-weight: bold;") 01] Pick your destination
        .planet-inner-container(:class="[{ 'chosen-mars': state.selectedPlanet === 'Mars' }, { 'chosen-europa': state.selectedPlanet === 'Europa' }, { 'chosen-titan': state.selectedPlanet === 'Titan' }]")
          img.planet-moon(:src="require('~/assets/image/destination/image-moon.png')")
          img.planet-mars(:src="require('~/assets/image/destination/image-mars.png')")
          img.planet-europa(:src="require('~/assets/image/destination/image-europa.png')")
          img.planet-titan(:src="require('~/assets/image/destination/image-titan.png')")
      .desc-container
        .planet-selector-container
          span.planet-selector(:class="[{chosen: state.selectedPlanet === 'Moon'}]" @click="selectPlanet('Moon')") Moon
          span.planet-selector(:class="[{chosen: state.selectedPlanet === 'Mars'}]" @click="selectPlanet('Mars')") Mars
          span.planet-selector(:class="[{chosen: state.selectedPlanet === 'Europa'}]" @click="selectPlanet('Europa')") Europa
          span.planet-selector(:class="[{chosen: state.selectedPlanet === 'Titan'}]" @click="selectPlanet('Titan')") Titan
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
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({
      selectedPlanet: 'Moon',
    })

    function selectPlanet(planet: string) {
      state.selectedPlanet = planet
    }

    return { state, selectPlanet }
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
    height: calc(100% - 110px)
    padding-top: 5%
    overflow: hidden
    display: flex
    +tablet
      flex-direction: column
      overflow-x: hidden
      overflow-y: auto
    +mobile
      flex-direction: column
      overflow-x: hidden
      overflow-y: auto
      height: calc(100% - 80px)
    .planet-container
      width: 100vw
      position: relative
      height: 100%
      z-index: 2
      .pick-destination-text
        font-family: BarlowCondensed
        font-size: 28px
        line-height: 33px
        text-transform: uppercase
        letter-spacing: 4.7px
        text-align: center
        +tablet
          text-align: left
          margin-left: 35px
        +mobile
          text-align: left
          margin-left: 35px
          font-size: 16px
          line-height: 19px
      .planet-inner-container
        position: absolute
        width: 100vw
        height: 100%
        transition: 1s
        z-index: 9
        &.chosen-mars
          transform: translateX(-100vw)
        &.chosen-europa
          transform: translateX(-200vw)
        &.chosen-titan
          transform: translateX(-300vw)
        .planet-moon
          position: absolute
          top: 50%
          right: 50%
          transform: translateY(-50%)
          +tablet
            top: 25vh
            transform: translate(50%, -50%)
          +mobile
            top: 25vh
            transform: translate(50%, -50%)
            width: 60%
        .planet-mars
          position: absolute
          top: 50%
          right: 50%
          transform: translateY(-50%) translateX(100vw)
          +tablet
            top: 25vh
            transform: translate(calc(100vw + 50%), -50%)
          +mobile
            top: 25vh
            transform: translate(calc(100vw + 50%), -50%)
            width: 60%
        .planet-europa
          position: absolute
          top: 50%
          right: 50%
          transform: translateY(-50%) translateX(200vw)
          +tablet
            top: 25vh
            transform: translate(calc(200vw + 50%), -50%)
          +mobile
            top: 25vh
            transform: translate(calc(200vw + 50%), -50%)
            width: 60%
        .planet-titan
          position: absolute
          top: 50%
          right: 50%
          transform: translateY(-50%) translateX(300vw)
          +tablet
            top: 25vh
            transform: translate(calc(300vw + 50%), -50%)
          +mobile
            top: 25vh
            transform: translate(calc(300vw + 50%), -50%)
            width: 60%
    .desc-container
      width: 60%
      position: relative
      padding-left: 5%
      padding-top: 6%
      padding-right: 5%
      z-index: 3
      +tablet
        width: 90%
        top: 12.5vh
        margin: auto
      +mobile
        width: 90%
        top: calc(500px - 45vh)
        margin: auto
      .planet-selector-container
        display: flex
        +tablet
          justify-content: center
        +mobile
          justify-content: center
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
            cursor: pointer
          +mobile
            font-size: 14px
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
        +tablet
          text-align: center
        +mobile
          text-align: center
          font-size: 56px
          line-height: 64px
      .planet-desc
        color: #D0D6F9
        font-family: Barlow
        font-size: 18px
        line-height: 32px
        +tablet
          text-align: center
        +mobile
          text-align: center
          font-size: 15px
          line-height: 25px
      .separator-line
        background: #383B4B
        height: 1px
        width: 100%
        margin: 50px 0px 25px
      .info-container
        display: flex
        +tablet
          justify-content: space-around
        +mobile
          justify-content: space-around
        .info-group
          display: flex
          flex-direction: column
          &:first-child
            margin-right: 15%
            +tablet
              margin-right: 0px
            +mobile
              margin-right: 0px
          .info-title
            font-family: Barlow Condensed
            font-size: 14px
            line-height: 17px
            letter-spacing: 2.3px
            color: #D0D6F9
            text-transform: uppercase
            margin-bottom: 10px
            +tablet
              text-align: center
            +mobile
              text-align: center
          .info-content
            font-family: Bellefair
            font-size: 28px
            line-height: 32px
            text-transform: uppercase
            +tablet
              text-align: center
            +mobile
              text-align: center



</style>