<template lang="pug">
#home
  NavBar
  .content-container
    .text-content
      h1.opener-text1 So, you want to travel to
      h1.opener-text2 Space
      p.opener-text3
        | Let’s face it; if you want to go to space, you might as well genuinely go to 
        | outer space and not hover kind of on the edge of it. Well sit back, and relax 
        | because we’ll give you a truly out of this world experience!
    .btn-container
      NuxtLink(to="/dest") EXPLORE

</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {


    return { }
  },
})
</script>

<style lang="sass">
@import ~assets/style/_variables
#home
  background-image: url("~assets/image/home/background-home-desktop.jpg")
  background-size: cover
  background-repeat: no-repeat
  width: 100vw
  height: 100vh
  position: relative
  +tablet
     background-image: url("~assets/image/home/background-home-tablet.jpg")
  +mobile
     background-image: url("~assets/image/home/background-home-mobile.jpg")
  .content-container
    display: flex
    position: absolute
    bottom: 10%
    width: 100%
    +tablet
      flex-direction: column
      justify-content: center
    +mobile
      flex-direction: column
      justify-content: center
    .text-content
      display: flex
      flex-direction: column
      width: 50%
      padding: 0px 10%
      +tablet
        width: 80%
        margin: auto
        align-items: center
      +mobile
        width: 95%
        margin: auto
        align-items: center
      .opener-text1
        font-family: BarlowCondensed
        font-size: 28px
        color: #D0D6F9
        letter-spacing: 4.725px
        text-transform: uppercase
        font-weight: 400
        +tablet
          font-size: 20px
          line-height: 24px
        +mobile
          font-size: 16px
          line-height: 19px
      .opener-text2
        font-family: Bellefair
        font-size: 150px
        text-transform: uppercase
        font-weight: 400
        margin: 25px 0px 10px 0px
        +mobile
          font-size: 80px
          line-height: 100px
      .opener-text3
        font-family: Barlow
        font-size: 18px
        color: #D0D6F9
        line-height: 32px
        +tablet
          font-size: 16px
          line-height: 28px
          text-align: center
        +mobile
          font-size: 15px
          line-height: 25px
          text-align: center
    .btn-container
      width: 50%
      position: relative
      +tablet
        width: 80%
        margin: auto
        display: flex
        justify-content: center
        margin-top: 10%
      +mobile
        width: 95%
        margin: auto
        display: flex
        justify-content: center
        margin-top: 10%
      a
        position: absolute
        bottom: 45px
        right: 100px
        width: 274px
        height: 274px
        color: black
        background-color: #ffffff
        border-radius: 50%
        font-family: 'Bellefair'
        font-weight: 400
        font-size: 32px
        line-height: 37px
        letter-spacing: 2px
        text-align: center
        line-height: 274px
        text-decoration: none
        &:after
          content: ''
          display: block
          position: absolute
          border-radius: 50%
          background-color: #ffffff
          opacity: 0.1
          width: 375px
          height: 375px
          top: -51px
          left: -51px
          opacity: 0
          transition: 0.25s
        &:hover:after
          opacity: 0.1
        +tablet
          position: static
        +mobile
          position: static
          width: 150px
          height: 150px
          font-size: 20px
          line-height: 150px
</style>
