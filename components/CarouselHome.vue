<template>
    <div id="home-top" class="container mx-auto flex flex-wrap items-center">
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