<template>
    <!-- Jobs Start -->
    <div class="container-xxl py-5" id="jobssection">
            <div class="container">
                <div v-if="path.path != '/categorys/1' && path.path != '/categorys/2'">
                    <h3 class="text-left mb-5 wow fadeInUp" data-wow-delay="0.1s" v-if="path.path == '/jobs' ? title = 'kasblar' : title = 'tillar'">Istalgan {{ title }} bo'yicha mutahasislarni toping!</h3>
                </div>
                <h3 class="text-left mb-5 wow fadeInUp" data-wow-delay="0.1s" v-if="path.path == '/categorys/1' || path.path == '/categorys/2'">Mutahasislarni online toping!</h3>
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="job-item p-4 mb-4" v-for="item in filteredFreelancers" :key="item.id">
                                <div class="row g-4">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid border rounded" src="https://img.freepik.com/free-vector/employee-month-time-management_23-2148462391.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722124800&semt=ais_user" alt="" style="width: 80px; height: 80px;">
                                        <div class="text-start ps-4">
                                            <h5 class="mb-3">{{item.name}} {{ item.surname }}</h5>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{{item.viloyat}}</span>
                                            <span class="text-truncate me-3"><i class="fa-solid fa-user text-primary me-2"></i>{{item.subject}}</span>
                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>${{item.price}}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <a class="btn btn-light btn-square me-3" :href="'/spec/'+item.id"><i class="fa-solid fa-phone text-primary"></i></a>
                                            <a class="btn btn-primary" :href="'/spec/'+item.id">Bog'lanish</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Jobs End -->
</template>
<script setup>
import {computed, ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {FREELANCERS} from '../../constants/index'
const title = ref('');
const path = useRoute();
const filteredFreelancers = computed(() => {
    if(path.path == '/jobs'){
        return FREELANCERS.filter(item => item.jobid === 'kasb');
    }else if(path.path == '/lang'){
        return FREELANCERS.filter(item => item.jobid === 'til');
    }else if(path.path == '/categorys/1'){
         return FREELANCERS.filter(item => item.tur === 'dev');
    }
    else if(path.path == '/categorys/2'){
         return FREELANCERS.filter(item => item.tur === 'teacher');
    }
});
</script>