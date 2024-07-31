<template>
    <!-- Contact Start -->
    <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-4">
                    <div class="col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="job-item p-4">
                                <div class="row g-4">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid border rounded w-6/12" src="https://img.freepik.com/free-vector/employee-month-time-management_23-2148462391.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722124800&semt=ais_user" alt="" style="width: 80px; height: 80px;">
                                        <div class="text-start ps-4">
                                            <h5 class="mb-3">{{name}} {{ surname }}</h5>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{{vil}}</span>
                                            <span class="text-truncate me-3"><i class="fa-solid fa-user text-primary me-2"></i>{{subject}}</span>
                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>${{ price }}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <a class="btn btn-light btn-square me-3" href=""><i class="far fa-phone text-primary"></i></a>
                                            <a class="btn btn-primary" href="" @click="handleLogout">Chiqish</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-12">
                        <div class="wow fadeInUp" data-wow-delay="0.5s">
                            <h3 class="my-3">O'zim haqimda...</h3>
                            <p>{{msg}}</p>
                            
                        </div>
                    </div>
                    <div class="col-md-12  row flex">
                        <iframe class="col-md-6 h-full" :src="link" title="Otabek Tursunov — Codial&#39;da Back End yo‘nalishi bo‘yicha ustoz | #Codial_ustozlari" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        <div class="wow fadeInUp col-md-6" data-wow-delay="0.5s">
                            <p class="mb-4">Men bilan bog'lanish uchun habaringizni qoldiring!</p>
                            <form>
                                <div class="row g-3">
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Ismingiz">
                                            <label for="name">Ismingiz</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Email">
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="subject" placeholder="Telefon raqamingiz">
                                            <label for="subject">Telefon raqamingiz</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea class="form-control" placeholder="Leave a message here" id="message" style="height: 150px"></textarea>
                                            <label for="message">Habar</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Yuborish</button>
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
<script setup>

const name = localStorage.getItem('name');
const surname = localStorage.getItem('surname');
const subject = localStorage.getItem('subject');
const email = localStorage.getItem('email');
const msg = localStorage.getItem('msg');
const vil = localStorage.getItem('vil')
const price = localStorage.getItem('price');
const link = localStorage.getItem('link');

function handleLogout() {
    localStorage.clear();
    window.location.href = '/';
}

</script>