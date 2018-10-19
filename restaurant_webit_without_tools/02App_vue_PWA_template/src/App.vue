<template>
  <div id="app">
    <Navigation></Navigation>
      <div>Was wird hier passieren?</div>
    <router-view/>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>
