<template lang="pug">
  #NavBar
    img.logo(src="~/assets/image/shared/logo.svg")
    .line
    .nav-container-desktop
       NuxtLink(to="/" :class="[{chosen: state.currentNav === 'HOME'}]") #[span 00] HOME
       NuxtLink(to="/dest" :class="[{chosen: state.currentNav === 'DESTINATION'}]") #[span 01] DESTINATION
       NuxtLink(to="/crew" :class="[{chosen: state.currentNav === 'CREW'}]") #[span 02] CREW
       NuxtLink(to="/tech" :class="[{chosen: state.currentNav === 'TECHNOLOGY'}]") #[span 03] TECHNOLOGY
    //- mobile nav
    img.hamburger(src="~/assets/image/shared/icon-hamburger.svg" @click="hamburgerClick")
    .nav-container-mobile(:class="[{active: state.hamburgerOpen}]")
      img.close(src="~/assets/image/shared/icon-close.svg" @click="hamburgerClick")
      NuxtLink(to="/" :class="[{chosen: state.currentNav === 'HOME'}]") #[span 00] HOME
      NuxtLink(to="/dest" :class="[{chosen: state.currentNav === 'DESTINATION'}]") #[span 01] DESTINATION
      NuxtLink(to="/crew" :class="[{chosen: state.currentNav === 'CREW'}]") #[span 02] CREW
      NuxtLink(to="/tech" :class="[{chosen: state.currentNav === 'TECHNOLOGY'}]") #[span 03] TECHNOLOGY
</template>

<script lang="ts">
import { defineComponent, reactive, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()
    const state = reactive({
      currentNav: '',
      hamburgerOpen: false
    })

    function hamburgerClick() {
      state.hamburgerOpen = !state.hamburgerOpen
    }

    if (route.value.path === '/') {
      state.currentNav = 'HOME'
    } else if (route.value.path === '/dest') {
      state.currentNav = 'DESTINATION'
    } else if (route.value.path === '/crew') {
      state.currentNav = 'CREW'
    } else if (route.value.path === '/tech') {
      state.currentNav = 'TECHNOLOGY'
    }
    return { state, hamburgerClick }
  },
})
</script>

<style lang="sass">
@import ~assets/style/_variables
#NavBar
  width: 100vw
  display: flex
  padding-top: 40px
  position: relative
  .logo
    width: 48px
    height: 48px
    margin: auto auto auto 55px
    +mobile
      width: 40px
      height: 40px
      margin: auto auto auto 24px
  .line
    display: none
    +desktop
      display: block
      position: absolute
      background-color: #ffffff
      opacity: 0.2
      height: 1px
      width: calc(100% - 60% - 100px)
      z-index: 2
      top: calc(50% + 20px)
      left: 133px
      transform: translateY(-50%)
  .nav-container-desktop
    margin-left: auto
    background: rgba(255, 255, 255, 0.04)
    backdrop-filter: blur(81.5485px)
    display: flex
    align-items: center
    padding-left: 5%
    width: 60%
    +mobile
      display: none
    a
      margin: 0px 25px
      text-decoration: none
      font-family: BarlowCondensed
      font-size: 16px
      height: 70px
      align-items: center
      display: flex
      padding-bottom: 3px
      &:hover
        padding-bottom: 0px
        border-bottom: 3px solid rgba(255, 255, 255, 0.5)
      &.chosen
        padding-bottom: 0px
        border-bottom: 3px solid white
      span
        font-weight: 700
        margin-right: 5px
        display: none
        +desktop
          display: inline-block
  .hamburger
    display: none
    +mobile
      display: block
      width: 24px
      height: 21px
      margin: auto 24px auto auto
  .nav-container-mobile
    display: none
    transition: 0.5s
    +mobile
      top: 0px
      right: 0vw
      display: flex
      flex-direction: column
      position: fixed
      height: 100vh
      width: 67.5vw
      z-index: 10
      background: rgba(255, 255, 255, 0.04)
      backdrop-filter: blur(81.5485px)
      transform: translateX(67.5vw)
    &.active
      transform: translateX(0vw)
    .close
      width: 19px
      height: 19px
      margin: 33px 26px 65px auto
    a
      margin: 0px 25px 0px 40px
      text-decoration: none
      font-family: BarlowCondensed
      font-size: 16px
      height: 70px
      align-items: center
      display: flex
      padding-bottom: 3px
      span
        font-weight: 700
        margin-right: 5px
        display: inline-block
</style>
