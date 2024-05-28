<template>
    <div id="home-top" class="container mx-auto flex flex-wrap items-center">
        <div class="w-full" style="width: 100%; display: inline-block;">
            <div class="flex flex-wrap items-center w-full">
                <div class="w-full sm:w-1/2 flex flex-col justify-center sm:pr-24">
                    <h1 class="number-font font-bold text-left">MEKWMS WAREHOUSE MANAGEMENT SOLUTIONS</h1>
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
                        src="https://meksmart.com/storage/shares/Hinh Anh/Hình present-35.png"></div>
            </div>
        </div>
        <div class="slick-event w-full slick-big slick-initialized slick-slider slick-dotted">
            <button type="button" class="slick-prev pull-left slick-arrow" style=""><img
                    src="https://meksmart.com/images/web/icon/element-09.svg" class="blue-icon"><img
                    src="https://meksmart.com/images/web/icon/white-hover-prev.svg" class="orange-icon">
            </button>
            <div class="slick-list draggable">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {

    },
}
</script>

<style lang="scss">
@import url(../pages/styles.scss);

.slick-big {
    position: relative;
}

.slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.slick-dotted.slick-slider {
    margin-bottom: 30px;
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
</style>