<template>
    <div class="stories">
        <VueSlickCarousel  v-bind="settings" >
                <div class="story" v-for="(item, index) in stories" :key="index">
                    <img :src="item.userImg" alt="" class="story__profile">
                    <h4 class="story__username">{{item.author}}</h4>
                </div>                                   
        </VueSlickCarousel>        
    </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
    name : "Stories",
    components: {VueSlickCarousel},
    data(){
        return{
            settings :{
            "dots": false,
            "centerMode": true,
            "focusOnSelect": true,
            "infinite": true,
            "speed": 500,
            "slidesToShow": 7,
            "slidesToScroll": 4,
            "touchThreshold": 5,
            "responsive": [
                {
                "breakpoint": 1024,
                "settings": {
                    "slidesToShow": 6,
                    "slidesToScroll": 3,
                    "infinite": true,
                }
                },
                {
                "breakpoint": 760,
                "settings": {
                    "slidesToShow": 5,
                    "slidesToScroll": 2,
                    "initialSlide": 2
                }
                },
                {
                "breakpoint": 620,
                "settings": {
                    "slidesToShow": 3,
                    "slidesToScroll": 1
                }
                },
                {
                "breakpoint": 400,
                "settings": {
                    "slidesToShow": 3,
                    "slidesToScroll": 1
                }
                }
            ]
            }
        }
    },
    props : {
        stories:{
            type: Array,
            default: () => {[]}
        }
    }

}
</script>

<style lang="scss">

.stories{
    padding: 16px 0;
    background: white;
    border-radius: 4px;
    border: 1px solid #ebebeb;

}
.story{
    display: flex !important;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    pointer-events: none;
    &__profile{
    width: 64px !important;
    height: 64px;
    border: 2px solid red;
    padding: 1px;
    border-radius: 50%;
    }
    &__username{
    color: #8e8e8e;
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    max-width: 60px;
    overflow: hidden;
    }
}

@media (max-width: 400px){
    .story__profile {
    width: 68px !important;
    height: 68px;
    }
    .slick-prev:before, .slick-next:before {
    font-size: 18px;
    }
}
</style>