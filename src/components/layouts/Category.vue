<template>
     <!-- Category Start -->
     <div class="container-xxl py-5">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s" v-if="path.path == '/categorys' ? title = 'Qanday mutahasis kerak?' : title = 'Mashhur ketegoriyalar'">
                    {{ title }}
                </h1>
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" v-for="item in CATEGORYS" :key="item.id">
                        <a class="cat-item rounded p-4" :href="/categorys/+item.id">
                            <i :class="item.icon"></i>
                            <h6 class="mb-3">{{ item.title }}</h6>
                            <p class="mb-0">{{item.count}} ta mutaxasis</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Category End -->
</template>
<script setup>

import {CATEGORYS} from "../../constants/index";
import {ref} from 'vue';
import { useRoute, useRouter } from 'vue-router';
const title = ref('');
const path = useRoute();

</script>