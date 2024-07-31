<template>
    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="/" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
            <h1 class="m-0 text-primary">FindSpec</h1>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="/" class="nav-item nav-link active">Bosh sahifa</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Mutaxasislar</a>
                    <div class="dropdown-menu rounded-0 m-0">
                        <a href="/jobs" class="dropdown-item">Kasblar</a>
                        <a href="/lang" class="dropdown-item">Tillar</a>
                    </div>
                </div>
                <a href="/categorys" class="nav-item nav-link">Kategoriyalar</a>
                <a href="/signup" class="nav-item nav-link" v-if="!loggin">Freelance bo'lish</a>
                <a href="/messages" class="nav-item nav-link" v-if="email && loggin">Habarlar</a>
            </div>
            <a href="/signin" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" v-if="!loggin && email">Kirish</a>
            <a href="/signup" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" v-if="!email">Ro'yhatdan o'tish</a>
            <a href="/profile" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" v-if="loggin && path.path != '/profile'">Profil</a>
            <a href="/profile" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" v-if="loggin && path.path == '/profile'" @click="handleLogout">Chiqish</a>
        </div>
    </nav>
    <!-- Navbar End -->
</template>
<script setup>
import {ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';
const title = ref('');
const path = useRoute();
const email = localStorage.getItem('email');
const password = localStorage.getItem('password')
const loggin = localStorage.getItem('loggin')

function handleLogout() {
    localStorage.clear();
    window.location.href = '/';
}
</script>