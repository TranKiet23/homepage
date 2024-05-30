<template>
    <section id="quan-li" class="relative">
        <div class="w-full relative">
            <div class="container absolute h-full top-0" style="padding: 0px; min-width: 70vw;">
                <div
                    class="bg-gradient-rl py-10 w-full h-full pl-20 pr-10 border-radius-right justify-end flex items-center flex-wrap relative">
                    <div class="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full absolute md:flex hidden z-40 r-18">
                        <div id="tieu-chuan" class="flex flex-wrap items-center my-3 raleway-bold"><a
                                href="http://meksmart.com/en/solutions/mek-wms"
                                class="w-full items-end flex flex-row btn-rounded-top btn-content">
                                <div class="number-font font-bold flex items-center"> <img
                                        src="https://meksmart.com/images/web/icon/to-right-blue.svg" class="icon-blue">
                                    <div>MEKWMS</div>
                                </div>
                            </a> <a href="http://meksmart.com/en/solutions/mek-wms-3pls"
                                class="w-full items-end flex flex-row btn-rounded-center btn-content">
                                <div class="number-font font-bold flex items-center"> <img
                                        src="https://meksmart.com/images/web/icon/to-right-blue.svg" class="icon-blue">
                                    <div>MEKTMS</div>
                                </div>
                            </a> <a href="https://meksmart.com/en/solutions/mek-wms-theo-yeu-cau"
                                class="w-full items-end flex flex-row btn-rounded-bottom btn-content">
                                <div class="number-font font-bold flex items-center"> <img
                                        src="https://meksmart.com/images/web/icon/to-right-blue.svg" class="icon-blue">
                                    <div>MEKSMART CONSULTING, UPGRADE</div>
                                </div>
                            </a></div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto relative lg:z-30">
                <div class=" py-6 w-full pr-10 border-radius-right flex items-center flex-wrap">
                    <div class="lg:w-2/5 md:w-1/2 w-full flex justify-center">
                        <div class="w-full flex flex-col items-center">
                            <h2 class="text-white raleway-bold">
                                <p style="text-align: center;"><span
                                        style="font-size: 24pt; color: rgb(255, 255, 255);"><strong>MEKSMART</strong></span><br><span
                                        style="font-size: 24pt; color: rgb(255, 255, 255);"><strong>TECHNOLOGY AND
                                            SOLUTIONS</strong></span></p>
                            </h2> <img src="https://meksmart.com/images/web/home/icon-blue.png"
                                class="py-4 lg:px-10 sm:px-6 px-4">
                            <div class="w-full px-4 flex justify-center"><img
                                    src="https://meksmart.com/images/web/icon/three-white.png" style="width: 150px;">
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:hidden flex">
                        <div id="tieu-chuan" class="flex flex-wrap items-center my-3 raleway-bold md:w-1/2 w-full"><a
                                href="http://meksmart.com/en/solutions/mek-wms"
                                class="w-full justify-end flex flex-col btn-rounded-top btn-content">
                                <div>MEKWMS</div>
                                <img src="https://meksmart.com/images/web/icon/to-right-blue.svg" class="icon-blue">
                            </a> <a href="http://meksmart.com/en/solutions/mek-wms-3pls"
                                class="w-full justify-end flex flex-col btn-rounded-center btn-content">
                                <div>MEKTMS</div>
                                <img src="https://meksmart.com/images/web/icon/to-right-blue.svg" class="icon-blue">
                            </a> <a href="https://meksmart.com/en/solutions/mek-wms-theo-yeu-cau"
                                class="w-full justify-end flex flex-col btn-rounded-bottom btn-content">
                                <div>MEKSMART CONSULTING, UPGRADE</div>
                                <img src="https://meksmart.com/images/web/icon/to-right-blue.svg" class="icon-blue">
                            </a></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:pb-48 pb-24 bg-quat-bottom relative"></div>
    </section>
</template>

<style lang="scss">
.border-radius-right {
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom-right-radius: 95px;
    border-top-right-radius: 95px;
}

.bg-gradient-rl {
    color: #fff;
    background-image: linear-gradient(270deg, #0521bf, #001491);
}

.btn-content {
    font-family: Raleway-Bold;
    font-size: 18px;
    cursor: pointer;
    color: #fff;

    .icon-blue {
        width: 20px;
        display: block;
        margin-bottom: 4px;
        margin-right: 3px;
    }
}

.btn-rounded-top {
    padding: 30px 40px;
    margin-bottom: 10px;
    background-image: url(https://meksmart.com/images/button-blue-top.png?e02922bd841e787bd14df0310e40a1a6);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
    min-height: 180px;

    &:hover {
        background-image: url(https://meksmart.com/images/button-orange-top.png?9ec5e2560a7bc18a6d0f5d3dc62893fa);
        color: #071699;
    }
}

.btn-rounded-center {
    padding: 30px 40px;
    margin-bottom: 10px;
    background-image: url(https://meksmart.com/images/button-blue-center.png?63ebab5d714d9974a25a57202436e3e6);
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
    min-height: 180px;

    &:hover {
        background-image: url(https://meksmart.com/images/button-orange-center.png?81a0aff0959e66b356bf4a805a36031c);
        color: #071699;
    }
}

.btn-rounded-bottom {
    background-image: url(https://meksmart.com/images/button-blue-bottom.png?5ef29b4c46c1a30715885ecc57ce795c);
    padding: 30px 40px;
    margin-bottom: 10px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
    min-height: 180px;

    &:hover {
        background-image: url(https://meksmart.com/images/button-orange-bottom.png?44e33d2ca2c935a6f010daa2d26717b6);
        color: #071699;
    }
}

.bg-quat-bottom {
    padding: 130px;

    @media (min-width: 1024px) {
        padding: 80px;
    }

    @media (min-width: 1200px) {
        padding: 130px;
    }

    &:before {
        background-image: url(https://meksmart.com/images/element-03.png?90de1658f841244ae7561b1d091b3f03);
        background-position: 6vw -32px;
        background-repeat: no-repeat;
        opacity: .4;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: 50vw;
    }
}

</style>