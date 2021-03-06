import store from '../vuex'

const isAuthRoute = route => route.path.indexOf('/auth') !== -1
const isLogged = () => store.getters.isLogged

export default (to, from, next) => {
  console.log(`
------( @@)-------
---ooO--(_)--Ooo--`)
  if (!isAuthRoute(to) && !isLogged()) {
    next('/auth')
    console.log(`
'´´´´´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
´´´´´´´1¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
´´´´´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
´´´´´o¶¶¶¶¶¶¶$´´´´´´´ø¶¶¶¶¶¶
´´´´´¶¶¶¶¶¶´´´´´´´´´´´´´ø¶¶¶¶ 
´´´´¶¶¶¶¶¶´´´´´´´´´´´´´´´o¶¶¶
´´´¶¶¶¶¶¶¢´´´´´´´´´´´´´´´´$¶¶´
´´´¶¶¶¶¶ø´ø¶$¶¶¶ø´´´´´´´´´1¶¶1
´´o¶¶¶¶¶´1o¶¶¶¶¶´´´1¶¶ø¢o$´¶¶¶
´´¶¶¶¶¶´´´´´7o71´´´¶¶øø$1´¶¶¶ø ESTOU VENDO ESSA MALDADE NO SEU CORAÇÃO! つ ◕_◕ ༽つ
´$¶¶¶¶¶o´´´´´´´´´´´¶´¢¶¶¶o¶¶¶ø
7¶¶¶¶¶1´´´´´´´´´´´´$´´´´´7¶¶¶ø
ø¶¶¶¶¶7´´´´´´´´´1´´¶´´´´´¶¶¶¶ø
¶¶¶¶¶¶¶¶´´´´´´¢¶¶¶¶7´´´´¶¶¶¶¶¶
¶¶¶¶¶¶¶¶¶1´´¶¶¶¶¶ø¶¶ø´o¶¶¶¶¶¶¶
¶¶¶¶¶¶¶¶¶¶$¶¶´´7117¶¶¶¶¶¶¶¶¶¶¶
¶¶¶¶¶¶¶o¶¶¶¶´´´´´´´´¶¶¶¶¶¶¶¶¶¶
¶¶¶¶¶¶¶7´¶¶¶¶¶oo7$¶¶¶¶¶¶¶¶¶¶¶¶
¶¶¶¶¶¶¶7´´¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
¶¶¶¶¶¶¶´´´´´ø¶¶¶¶¶¶¶´´¶¶¶¶¶¶¶¶
¶¶¶¶¶¶o´´´´´´´´´´´´´´´¶¶¶¶¶¶¶`)
    console.log('Ele diz: Ei voce naoo esta logado!')
  } else {
    next()
  }
}
