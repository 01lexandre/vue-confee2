<template>

  <div>
    <header class="page-header row">
      <h2>Confee [Auth]</h2>
    </header>

    <Login />

  </div>

</template>

<script>
import { mapGetters } from '../../../../node_modules/vuex'
import Login from './Forms/Login'

export default{
  name: 'auth',
  components: { Login },
  computed: {
    ...mapGetters(['isLogged'])
  }
}
</script>
