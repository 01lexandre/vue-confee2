<!--suppress JSAnnotator -->
<script>
import { mapActions } from '../../../../../node_modules/vuex'
import { isEmpty } from 'lodash'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['attempLogin']),
    doLogin () {
      const user = this.user
      this.attempLogin({ ...user })
        .then(() => {
          this.$router.push('/')
        })
    }
  },
  computed: {
    isValid () {
      const user = this.user
      return !isEmpty(user.email) && !isEmpty(user.password)
    }
  }
}
</script>

<template>

<div class="row">
  <div class="col-sm-6">

    <div class="form-group">
      <label>E-mail</label>
      <input type="email" class="form-control" v-model="user.email">
    </div>

    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="user.password">
    </div>

    <button type="submit" @click="doLogin" class="btn btn-default" :disabled="!isValid">Entrar</button>

  </div>
</div>

</template>
