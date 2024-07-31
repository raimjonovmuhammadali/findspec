<template>
    <!-- Contact Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Kirish</h1>
            <div class="row g-4">
                <div class="col-md-12">
                    <div class="wow fadeInUp" data-wow-delay="0.5s">
                        <p class="mb-4">Profilingizga kirish uchun iltimos maydonlarni to'ldiring!</p>
                        <form>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="email"
                                            placeholder="Emailingizni kiriting" v-model="email">
                                        <label for="email">Email</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="password" class="form-control" id="password"
                                            placeholder="Parol kiriting" v-model="password">
                                        <label for="password">Parolni kiriting</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit"
                                        @click="handleSubmit">Kirish</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact End -->
</template>
<script>
import router from '@/router';
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            // localStorage.setItem('email', this.email)
            // localStorage.setItem('password', this.password)
            const emaili = localStorage.getItem('email');
            const paroli = localStorage.getItem('password');
            if (emaili === this.email && paroli === this.password) {
                alert('Kirish uchun rahmat!')
                localStorage.setItem('loggin', true)
                router.push('/profile')
            } else {
                alert('Email yoki parol xato!')
            }
        }
    },
}
</script>