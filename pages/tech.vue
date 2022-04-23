<template lang="pug">
#tech
  NavBar
  .content-container
    .tech-desc
      p.space-launch-text #[span(style="opacity: 0.25; font-weight: bold;") 03] SPACE LAUNCH 101
      .tech-info-container
        .step-container
          p.step(:class="[{chosen: state.selectedTech === 'Vehicle'}]" @click="selectTech('Vehicle')") 1
          p.step(:class="[{chosen: state.selectedTech === 'SpacePort'}]" @click="selectTech('SpacePort')") 2
          p.step(:class="[{chosen: state.selectedTech === 'Capsule'}]" @click="selectTech('Capsule')") 3
        .tech-content-container(v-if="state.selectedTech === 'Vehicle'")
          .terminology THE TERMINOLOGY…
          .tech-name LAUNCH VEHICLE
          .tech-bio A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
        .tech-content-container(v-if="state.selectedTech === 'SpacePort'")
          .terminology THE TERMINOLOGY…
          .tech-name SPACEPORT
          .tech-bio A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
        .tech-content-container(v-if="state.selectedTech === 'Capsule'")
          .terminology THE TERMINOLOGY…
          .tech-name SPACE CAPSULE
          .tech-bio A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
    .tech-img-container
      img.tech-img.desktop(src="~/assets/image/technology/image-launch-vehicle-portrait.jpg" v-if="state.selectedTech === 'Vehicle'")
      img.tech-img.desktop(src="~/assets/image/technology/image-spaceport-portrait.jpg" v-if="state.selectedTech === 'SpacePort'")
      img.tech-img.desktop(src="~/assets/image/technology/image-space-capsule-portrait.jpg" v-if="state.selectedTech === 'Capsule'")
      img.tech-img.non-desktop(src="~/assets/image/technology/image-launch-vehicle-landscape.jpg" v-if="state.selectedTech === 'Vehicle'")
      img.tech-img.non-desktop(src="~/assets/image/technology/image-spaceport-landscape.jpg" v-if="state.selectedTech === 'SpacePort'")
      img.tech-img.non-desktop(src="~/assets/image/technology/image-space-capsule-landscape.jpg" v-if="state.selectedTech === 'Capsule'")
</template>
<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({
      selectedTech: 'Vehicle',
    })

    function selectTech(tech: string) {
      state.selectedTech = tech
    }

    return { state, selectTech }
  },
})
</script>
<style lang="sass">
@import ~assets/style/_variables
#tech
  background-image: url("~assets/image/technology/background-technology-desktop.jpg")
  background-size: cover
  background-repeat: no-repeat
  width: 100vw
  height: 100vh
  position: relative
  overflow-x: hidden
  +tablet
    background-image: url("~assets/image/technology/background-technology-tablet.jpg")
  +mobile
    height: 100%
    background-image: url("~assets/image/technology/background-technology-mobile.jpg")
  .content-container
    width: 100%
    height: calc(100% - 110px)
    padding-top: 5%
    overflow: hidden
    display: flex
    +tablet
      flex-direction: column-reverse
      overflow-x: hidden
      overflow-y: auto
      justify-content: start
    +mobile
      flex-direction: column-reverse
      overflow-x: hidden
      overflow-y: auto
      height: calc(100% - 80px)
      margin-top: 50px
    .tech-desc
      width: 60%
      display: flex
      flex-direction: column
      padding: 0px 1% 0px 10%
      +tablet
        width: 100%
        padding: 0px
      +mobile
        width: 100%
        padding: 0px
        flex-direction: column-reverse
      .space-launch-text
        font-family: BarlowCondensed
        font-size: 28px
        line-height: 33px
        text-transform: uppercase
        letter-spacing: 4.7px
        +tablet
          position: absolute
          top: 150px
          left: 35px
          width: 100%
          text-align: left
          font-size: 20px
          line-height: 24px
        +mobile
          position: absolute
          top: 100px
          width: 100%
          text-align: center
          font-size: 16px
          line-height: 19.2px
      .tech-info-container
        display: flex
        margin-top: 15%
        +tablet
          flex-direction: column
          margin-top: 75px
        +mobile
          flex-direction: column
        .step-container
          display: flex
          flex-direction: column
          width: 80px
          margin-right: 80px
          +tablet
            flex-direction: row
            width: 100%
            justify-content: center
            margin-right: 0px
          +mobile
            flex-direction: row
            width: 100%
            justify-content: center
            margin-right: 0px
          .step
            background-color: transparent
            border: 1px solid rgba(255, 255, 255, 0.5)
            color: #ffffff
            border-radius: 50%
            width: 80px
            height: 80px
            font-family: Bellefair
            font-size: 32px
            line-height: 80px
            letter-spacing: 2px
            text-align: center
            vertical-align: center
            margin-bottom: 40px
            +tablet
              margin-right: 20px
            +mobile
              margin-right: 20px
              width: 40px
              height: 40px
              line-height: 40px
              font-size: 16px
            &:hover
              border: 1px solid rgba(255, 255, 255, 1)
            &.chosen
              background-color: #FFFFFF
              color: #000000
              border: 1px solid #FFFFFF

        .tech-content-container
          display: flex
          flex-direction: column
          +tablet
            padding: 0px 20%
          +mobile
            padding: 0px 10%
            margin-bottom: 50px
          .terminology
            font-family: Barlow Condensed
            font-size: 16px
            line-height: 19px
            letter-spacing: 2.7px
            color: #D0D6F9
            +tablet
              text-align: center
              margin-top: 10px
            +mobile
              text-align: center
              margin-top: 10px
              font-size: 14px
              line-height: 16px
          .tech-name
            font-family: Bellefair  
            font-size: 56px
            line-height: 64px
            margin: 10px 0px 20px
            +tablet
              text-align: center
              font-size: 40px
              line-height: 45px
              margin: 20px 0px
            +mobile
              text-align: center
              font-size: 24px
              line-height: 27.5px
          .tech-bio
            font-family: Barlow
            font-size: 18px
            line-height: 32px
            color: #D0D6F9
            +tablet
              text-align: center
              font-size: 16px
              line-height: 28px
            +mobile
              text-align: center
              font-size: 15px
              line-height: 25px
    .tech-img-container
      width: 40%
      position: relative
      display: flex
      justify-content: center
      height: 100%
      +tablet
        width: 100%
        height: 28%
        margin-top: 110px
      +mobile
        width: 100%
        height: 23vh
        margin-top: 0px
      .tech-img
        position: absolute
        right: 0px
        top: 50%
        transform: translateY(-50%)
        object-fit: cover
        +tablet
          top: 50%
          width: 100%
        +mobile
          top: 50%
          width: 100%

</style>