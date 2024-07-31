<template lang="">
    <navbar/>
    <Mess/>
    <Footer/>
    <Totop/>
</template>
<script setup>
import {Totop} from '../../components/shared/'
import {navbar, Footer, Mess} from '../../components/layouts/'
import router from '@/router'

if (!localStorage.getItem('loggin')) {
    router.push('/signin')
}
</script>