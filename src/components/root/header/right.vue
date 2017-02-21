<script>
import { mapGetters } from '../../../../node_modules/vuex'
export default{
  data () {
    return {
      isOpenUser: false
    }
  },
  computed: {
    ...mapGetters(['isLogged', 'currentUser'])
  },
  methods: {
    toggleUserMenu () {
      this.isOpenUser = !this.isOpenUser
    }
  }
}
</script>

<template>
    <ul class="nav navbar-nav navbar-right">
      <router-link to="/auth" tag="li" v-if="!isLogged">
        <a>Entrar</a>
      </router-link>
      <li class="dropdown" :class="{ open: isOpenUser }" v-if="isLogged">
        <a href="javascript:;"
           @click="toggleUserMenu"
           class="dropdown-toggle">
          <img :src="currentUser.photo" class="img-responsive img-circle"
               style="height:20px;float: left;margin: 0px 10px;"> {{ currentUser.name }}
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="#">Action</a></li>
          <li><a href="#">Another action</a></li>
          <li><a href="#">Something else here</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">One more separated link</a></li>
        </ul>
      </li>
    </ul>
</template>

