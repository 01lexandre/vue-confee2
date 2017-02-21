<template>
    <ul class="nav navbar-nav">
        <router-link :to="{ name: 'dashboard.main' }" tag="li" exact>
            <a>Home</a>
        </router-link>
        <li>
            <a href="#">Contact</a>
        </li>
    </ul>
</template>

<script>
    export default{

    }
</script>
