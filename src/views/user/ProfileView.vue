<template lang="">
    <navbar/>
    <info/>
    <Footer/>
    <Totop/>
</template>
<script setup>
import {Totop} from '../../components/shared/'
import {navbar, Footer, Info} from '../../components/layouts/'
import router from '@/router'

if (!localStorage.getItem('loggin')) {
    router.push('/signin')
}
</script>