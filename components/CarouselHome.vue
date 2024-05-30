<template>
    <Swiper ref="swiper" :spaceBetween="30" :centeredSlides="true" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
    }" :pagination="{
        clickable: true,
    }" :modules="modules" :navigation="false" id="home-top"
        class="container mx-auto flex flex-wrap items-center">
        <SwiperSlide>
            <div class="w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-wrap items-center w-full">
                    <div class="w-full sm:w-1/2 flex flex-col justify-center sm:pr-24">
                        <h1 class="number-font font-bold h1-content text-left">SMART TECHNOLOGY<br> FOR LOGISTICS
                            SOLUTION</h1>
                        <div class="flex w-full mt-5 lg:flex-no-wrap flex-wrap">
                            <div class="flex text-center w-full lg:w-1/2 lg:pr-3"><button
                                    class="btn-white-text-blue modal-open lg:mb-0 mb-3 w-full" tabindex="0">Try
                                    Demo</button></div>
                            <div class="flex text-center w-full lg:w-1/2 lg:pl-3"><a
                                    href="https://meksmart.com/en/solutions" class="btn-blue cursor-pointer w-full"
                                    tabindex="0">Read more</a></div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 flex justify-end items-center pl-6 sm:pr-0 pr-6 py-10"><img
                            class="slick-slide-img"
                            src="https://meksmart.com/storage/shares/Hinh%20Anh/H%C3%ACnh%20present-23.png"></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-wrap items-center w-full">
                    <div class="w-full sm:w-1/2 flex flex-col justify-center sm:pr-24">
                        <h1 class="number-font h1-content font-bold text-left">MEKWMS WAREHOUSE MANAGEMENT SOLUTIONS
                        </h1>
                        <div class="flex w-full mt-5 lg:flex-no-wrap flex-wrap">
                            <div class="flex text-center w-full lg:w-1/2 lg:pr-3"><button
                                    class="btn-white-text-blue modal-open lg:mb-0 mb-3 w-full" tabindex="0">Try
                                    Demo</button></div>
                            <div class="flex text-center w-full lg:w-1/2 lg:pl-3"><a
                                    href="https://meksmart.com/en/solutions" class="btn-blue cursor-pointer w-full"
                                    tabindex="0">Read more</a></div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 flex justify-end items-center pl-6 sm:pr-0 pr-6 py-10"><img
                            class="slick-slide-img"
                            src="https://meksmart.com/storage/shares/Hinh Anh/Hình present-35.png"></div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div class="w-full" style="width: 100%; display: inline-block;">
                <div class="flex flex-wrap items-center w-full">
                    <div class="w-full sm:w-1/2 flex flex-col justify-center sm:pr-24">
                        <h1 class="number-font font-bold h1-content text-left">MEKTMS TRANSPORTATION AND DELIVERY
                            MANAGEMENT
                            SOLUTIONS</h1>
                        <div class="flex w-full mt-5 lg:flex-no-wrap flex-wrap">
                            <div class="flex text-center w-full lg:w-1/2 lg:pr-3"><button
                                    class="btn-white-text-blue modal-open lg:mb-0 mb-3 w-full" tabindex="0">Try
                                    Demo</button></div>
                            <div class="flex text-center w-full lg:w-1/2 lg:pl-3"><a
                                    href="https://meksmart.com/en/solutions" class="btn-blue cursor-pointer w-full"
                                    tabindex="0">Read more</a></div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 flex justify-end items-center pl-6 sm:pr-0 pr-6 py-10"><img
                            class="slick-slide-img"
                            src="https://meksmart.com/storage/shares/Hinh%20Anh/H%C3%ACnh%20present-02.png">
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <div class="slick-event w-full slick-big slick-initialized slick-slider slick-dotted">
            <button type="button" class="slick-prev pull-left slick-arrow" @click="goPrev" style=""><img
                    src="https://meksmart.com/images/web/icon/element-09.svg" class="blue-icon"><img
                    src="https://meksmart.com/images/web/icon/white-hover-prev.svg" class="orange-icon">
            </button>
            <button type="button" class="slick-next pull-right slick-arrow" @click="goNext" style=""><img
                    src="https://meksmart.com/images/web/icon/to-right-blue.svg" class="blue-icon"><img
                    src="https://meksmart.com/images/web/icon/white-hover-next.svg" class="orange-icon">
            </button>

        </div>
    </Swiper>

</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';
import { useSwiper } from 'swiper/vue';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const swiper = useSwiper();
        return {
            modules: [Autoplay, Pagination, Navigation, Keyboard],
            swiper
        }
    },
    methods: {
        goPrev() {
            // this.$refs.swiper.slidePrev();
        },
        goNext() {
            // this.$refs.swiper.slideNext();
        },
    }
}
</script>

<style lang="scss">
#home-top {
    min-height: 350px;
}

.bg-gradient-lr {
    background-image: linear-gradient(90deg, #0521bf, #001491);
}

.slick-big {
    position: relative;
}

.slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.slick-dotted.slick-slider {
    margin-bottom: 55px;

}

.slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;



}

.slick-slide-img {
    max-height: 360px;
    -o-object-fit: contain;
    object-fit: contain;
}


.slick-big .slick-prev {
    left: 0;
    bottom: -40px;
    width: 45px;
    top: unset;
    z-index: 11;
}

.slick-next,
.slick-prev {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translateY(-50%);
    cursor: pointer;
    border: none;
}

.slick-next:before,
.slick-prev:before {
    font-family: slick;
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: #fff;
    -webkit-font-smoothing: antialias
}

.slick-big .slick-next {
    left: 50px;
    bottom: -40px;
    width: 45px;
    top: unset;
    z-index: 11;
}

.h1-content {
    font-size: 55px;
    color: #fff;

    @media (min-width: 1200px) {
        font-size: 40px !important;

    }

    @media (min-width: 1536px) {
        font-size: 55px;
    }
}

.number-font {
    font-family: Arial, Helvetica, sans-serif !important;
}

.btn-white-text-blue {
    padding: 10px 25px;
    color: #0521bf;
    background: #fff;
    border-radius: 10px;
    line-height: 20px;
    font-size: 18px;
    font-family: Raleway-Bold;
    text-transform: uppercase;

    &:hover {
        color: #f28021;
    }
}

.btn-blue {
    padding: 10px 25px;
    border: 1px solid #fff;
    background-image: linear-gradient(#0521bf, #001491);
    color: #fff;
    border-radius: 10px;
    font-size: 18px;
    line-height: 20px;
    font-family: Raleway-Bold;
    text-transform: uppercase;

    &:hover {
        background-color: #001491;
        background-image: none;
    }
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 50vh;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}
</style>