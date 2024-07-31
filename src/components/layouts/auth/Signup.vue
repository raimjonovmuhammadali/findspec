<template>
    <!-- Contact Start -->
    <div class="container-xxl py-5">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Ro'yhatdan o'tish</h1>
                <div class="row g-4">
                    <div class="col-md-12">
                        <div class="wow fadeInUp" data-wow-delay="0.5s">
                            <p class="mb-4">Freelance bo'lish uchun ro'yhatdan o'tishingiz mumkun!</p>
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Ismingizni kiriting" v-model="name">
                                            <label for="name" required>Ismingiz</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="surname" placeholder="Familyangiz kiriting" v-model="surname" required>
                                            <label for="surname">Familyangiz</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Emailingizni kiriting" v-model="email" required>
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="password" placeholder="Parol kiriting" v-model="password" required>
                                            <label for="password">Parol yarating</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Qaysi soha bo'yicha ish yuritasiz?" v-model="subject" required>
                                            <label for="subject">Kasbingiz</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="vil" placeholder="Viloyat" v-model="vil" required>
                                            <label for="vil">Viloyatingiz</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="price" placeholder="Qaysi soha bo'yicha ish yuritasiz?" v-model="price" required>
                                            <label for="price">Bir ish uchun narx ($300)</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="linkk" placeholder="O'zingiz haqingizdagi video uchun link kiriting (YouTube)" style="height: 81px" v-model="link" required>
                                            <label for="linkk">O'zingiz haqingizdagi video uchun link kiriting (https://www.youtube.com/embed/VbVTOO-WdZE)</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 150px" v-model="msg" required></textarea>
                                            <label for="message">O'zingiz haqingizda ba'tafsil</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit" @click="handleSubmit">Yuborish</button>
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
            name: '',
            surname: '',
            email: '',
            password: '',
            subject: '',
            msg: '',
            vil: '',
            price: '',
            link: '',
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            localStorage.setItem('name', this.name)
            localStorage.setItem('surname', this.surname)
            localStorage.setItem('email', this.email)
            localStorage.setItem('password', this.password)
            localStorage.setItem('subject', this.subject)
            localStorage.setItem('msg', this.msg)
            localStorage.setItem('vil', this.vil)
            localStorage.setItem('price', this.price)
            localStorage.setItem('link', this.link)
            router.push('/signin')
        }
    },
}
</script>