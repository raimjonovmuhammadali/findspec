<template>
    <!-- Contact Start -->
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-4">
                <div class="col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="job-item p-4 my-3">
                        <div class="row g-4">
                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                <div class="text-start ps-4">
                                    <h5 class="mb-3">Muhammadali Raimjonov</h5>
                                    <span class="text-truncate me-3"><i
                                            class="fa fa-message text-primary me-2"></i>Assalom alaykum. Menda ish bor
                                        yordam bera olasmi</span>
                                </div>
                            </div>
                            <div
                                class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div class="d-flex mb-3">
                                    <a class="btn btn-light btn-square me-3" href=""><i
                                            class="fa fa-phone text-primary"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="job-item p-4 my-3">
                        <div class="row g-4">
                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                <div class="text-start ps-4">
                                    <h5 class="mb-3">Sherzod Aliyev</h5>
                                    <span class="text-truncate me-3"><i
                                            class="fa fa-message text-primary me-2"></i>Salom, veb sayt yaratish kerak edi</span>
                                </div>
                            </div>
                            <div
                                class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div class="d-flex mb-3">
                                    <a class="btn btn-light btn-square me-3" href=""><i
                                            class="fa fa-phone text-primary"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="job-item p-4 my-3">
                        <div class="row g-4">
                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                <div class="text-start ps-4">
                                    <h5 class="mb-3">Ismoil Hasanov</h5>
                                    <span class="text-truncate me-3"><i
                                            class="fa fa-message text-primary me-2"></i>Yarim tayyor loyiha bor shuni xatolarini tuzatish kerak</span>
                                </div>
                            </div>
                            <div
                                class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                <div class="d-flex mb-3">
                                    <a class="btn btn-light btn-square me-3" href=""><i
                                            class="fa fa-phone text-primary"></i></a>
                                </div>
                            </div>
                        </div>
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