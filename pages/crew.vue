<template lang="pug">
#crew
  NavBar
  .content-container
    .crew-desc
      p.meet-crew-text #[span(style="opacity: 0.25; font-weight: bold;") 02] Meet your crew
      .crew-info-container(v-if="state.selectedCrew === 'Commander'")
        .crew-title Commander
        .crew-name Douglas Hurley
        .crew-bio Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
      .crew-info-container(v-if="state.selectedCrew === 'Specialist'")
        .crew-title Mission Specialist 
        .crew-name MARK SHUTTLEWORTH
        .crew-bio Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
      .crew-info-container(v-if="state.selectedCrew === 'Pilot'")
        .crew-title PILOT
        .crew-name Victor Glover
        .crew-bio Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. 
      .crew-info-container(v-if="state.selectedCrew === 'Engineer'")
        .crew-title Flight Engineer
        .crew-name Anousheh Ansari
        .crew-bio Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. 
      .circle-navigator
        .circle-nav(:class="[{chosen: state.selectedCrew === 'Commander'}]" @click="selectCrew('Commander')")
        .circle-nav(:class="[{chosen: state.selectedCrew === 'Specialist'}]" @click="selectCrew('Specialist')")
        .circle-nav(:class="[{chosen: state.selectedCrew === 'Pilot'}]" @click="selectCrew('Pilot')")
        .circle-nav(:class="[{chosen: state.selectedCrew === 'Engineer'}]" @click="selectCrew('Engineer')")
    .crew-img-container
      img.crew-img(src="~/assets/image/crew/image-douglas-hurley.png" v-if="state.selectedCrew === 'Commander'")
      img.crew-img(src="~/assets/image/crew/image-mark-shuttleworth.png" v-if="state.selectedCrew === 'Specialist'")
      img.crew-img(src="~/assets/image/crew/image-victor-glover.png" v-if="state.selectedCrew === 'Pilot'")
      img.crew-img(src="~/assets/image/crew/image-anousheh-ansari.png" v-if="state.selectedCrew === 'Engineer'")
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({
      selectedCrew: 'Commander',
    })

    function selectCrew(crew: string) {
      state.selectedCrew = crew
    }

    return { state, selectCrew }
  },
})
</script>
<style lang="sass">
@import ~assets/style/_variables
#crew
  background-image: url("~assets/image/crew/background-crew-desktop.jpg")
  background-size: cover
  background-repeat: no-repeat
  width: 100vw
  height: 100vh
  position: relative
  +tablet
    background-image: url("~assets/image/crew/background-crew-tablet.jpg")
  +mobile
    height: 100%
    background-image: url("~assets/image/crew/background-crew-mobile.jpg")
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
      flex-direction: column-reverse
      overflow-x: hidden
      overflow-y: auto
      height: calc(100% - 80px)
      margin-top: 50px
    .crew-desc
      width: 50%
      display: flex
      flex-direction: column
      padding: 0px 2.5% 0px 10%
      +tablet
        width: 100%
        padding: 0px
      +mobile
        width: 100%
        padding: 0px
        flex-direction: column-reverse
      .meet-crew-text
        font-family: BarlowCondensed
        font-size: 28px
        line-height: 33px
        text-transform: uppercase
        letter-spacing: 4.7px
        +tablet
          text-align: left
          margin-left: 35px
          font-size: 20px
          line-height: 24px
        +mobile
          position: absolute
          top: 100px
          width: 100%
          text-align: center
          font-size: 16px
          line-height: 19.2px
      .crew-info-container
        display: flex
        flex-direction: column
        margin-top: 25%
        +tablet
          padding: 0px 20%
          margin-top: 10%
        +mobile
          padding: 0px 5%
          margin-top: 0px
          margin-bottom: 50px
        .crew-title
          font-family: Bellefair
          font-size: 32px
          line-height: 37px
          opacity: 0.5
          text-transform: uppercase
          +tablet
            text-align: center
            font-size: 24px
            line-height: 27px
          +mobile
            text-align: center
            font-size: 24px
            line-height: 27px
        .crew-name
          font-family: Bellefair
          font-size: 56px
          line-height: 64px
          text-transform: uppercase
          margin: 12.5px 0px 22.5px
          +tablet
            text-align: center
            font-size: 40px
            line-height: 45px
          +mobile
            text-align: center
            font-size: 24px
            line-height: 27px
        .crew-bio
          font-family: Barlow
          font-size: 18px
          line-height: 32px
          color: #D0D6F9
          padding-right: 10%
          +tablet
            text-align: center
            padding-right: 0px
            font-size: 16px
            line-height: 28px
          +mobile
            text-align: center
            padding-right: 0px
            font-size: 16px
            line-height: 28px
      .circle-navigator
        display: flex
        position: absolute
        bottom: 7.5%
        +tablet
          position: relative
          margin: 10% auto 0px
        +mobile
          position: relative
          margin: 10% auto
        .circle-nav
          width: 15px
          height: 15px
          background-color: #FFFFFF
          opacity: 0.17
          border-radius: 50%
          margin-right: 24px
          &:hover
            opacity: 0.5
            cursor: pointer
          &.chosen
            opacity: 1
    .crew-img-container
      width: 50%
      position: relative
      display: flex
      justify-content: center
      height: 100%
      +tablet
        width: 100%
      +mobile
        width: 90%
        margin: 0px 5%
        border-bottom: 2px solid #383B4B
        height: 200px
      img
        position: absolute
        bottom: 0px
        height: 100%

</style>