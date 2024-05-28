<template>
  <header>
    <!-- <nav>
        <ul>
          <li>
            <nuxt-link>Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/solution">Solution</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/domain">Domain</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About Meksmart</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/resouce">Resouce</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact</nuxt-link>
          </li>
        </ul>
      </nav> -->
    <section class="border-b-05 bg-gradient-tb fixed w-full">
      <section id="header-nav" class="fs-18 flex container mx-auto text-white" style="z-index: 99998">
        <div class="flex justify-between items-end">
          <a href="https://meksmart.com/vi" class="text-xl"><img
              src="https://meksmart.com/storage/shares/IMG_LOGO/Meksmart-04.svg" class="img-logo" /></a>
        </div>

        <div id="menu" class="hiden justify-end lg-w-auto lg:flex lg:items-center w-full header-menu">
          <nav>
            <ul class="lg:flex items-center justify-between pt-4 lg:pt-0">
              <li>
                <nuxt-link class="lg:mx-4 lg:mt-3 mb-0 py-3 px-0 block raleway-bold fs-13 uppercase menu-item"
                  :class="{ active: route == '' }" to="/"><span> Home </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link class="lg:mx-4 lg:mt-3 mb-0 py-3 px-0 block raleway-bold fs-13 uppercase menu-item"
                  :class="{ active: route == 'solution' }" @click="route = 'solution'"
                  to="/solution"><span>Solution</span>
                </nuxt-link>
              </li>
              <!--   <li class="item-list solutions" style="position: unset;">
                <div class="lg:mx-4 lg:mt-3 mb-0 py-3 px-0 flex flex-row raleway-bold fs-13 uppercase menu-item active">
                  <span>
                    Giải Pháp
                  </span>
             <div id="desktop">
                  <ul id="linh-vuc" class="menu-sub lg:absolute w-full">
                    <div class="w-full">
                      <div class="mx-auto bg-f4 px-10">
                        <div class="flex flex-wrap w-full">
                          <div class="lg:w-1/3 w-full text-center sub-item"><a
                              href="http://meksmart.com/vi/solutions/mek-wms"
                              class="lg:mr-6 mb-6 p-6 h-full item-lv flex justify-center">
                              <div class="h-full flex items-center">
                                <div class="mx-3 w-full flex items-center" style="width: 70px; height: 70px;"><img
                                    src="https://meksmart.com/storage/shares/IMG_SOLUTION/icon-11.svg"
                                    style="width: 65px; height: auto;"></div>
                              </div>
                              <div class="w-full flex flex-col pl-3 pr-6"><span
                                  class="number-font mb-3 mt-2 fs-13"><strong>QUẢN LÝ KHO MEKWMS</strong></span>
                                <p class="fs-13 number-font">
                                  Giải pháp quản lý tổng thể hoạt động trong một kho hàng và xử lý các giao dịch liên
                                  kết.
                                </p>
                              </div>
                            </a></div>
                          <div class="lg:w-1/3 w-full text-center sub-item"><a
                              href="http://meksmart.com/vi/solutions/mek-wms-3pls"
                              class="lg:mr-6 mb-6 p-6 h-full item-lv flex justify-center">
                              <div class="h-full flex items-center">
                                <div class="mx-3 w-full flex items-center" style="width: 70px; height: 70px;"><img
                                    src="https://meksmart.com/storage/shares/IMG_SOLUTION/icon-12.svg"
                                    style="width: 65px; height: auto;"></div>
                              </div>
                              <div class="w-full flex flex-col pl-3 pr-6"><span
                                  class="number-font mb-3 mt-2 fs-13"><strong>QUẢN LÝ VẬN TẢI MEKTMS</strong></span>
                                <p class="fs-13 number-font">
                                  Meksmart cung cấp giải pháp quản lý TMS cho hoạt động Logistic của doanh nghiệp.
                                </p>
                              </div>
                            </a></div>
                          <div class="lg:w-1/3 w-full text-center sub-item"><a
                              href="https://meksmart.com/vi/solutions/mek-wms-theo-yeu-cau"
                              class=" mb-6 p-6 h-full item-lv flex justify-center">
                              <div class="h-full flex items-center">
                                <div class="mx-3 w-full flex items-center" style="width: 70px; height: 70px;"><img
                                    src="https://meksmart.com/storage/shares/IMG_SOLUTION/icon-13.svg"
                                    style="width: 65px; height: auto;"></div>
                              </div>
                              <div class="w-full flex flex-col pl-3 pr-6"><span
                                  class="number-font mb-3 mt-2 fs-13"><strong>MEKSMART TƯ VẤN, NÂNG CẤP</strong></span>
                                <p class="fs-13 number-font">
                                  Meksmart đồng hành cùng khách hàng trong quá trình xây dựng, sữa chữa và nâng cấp hệ
                                  thống
                                </p>
                              </div>
                            </a></div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
                <ul id="mobile" class="lg:absolute px-10 lg:pt-10 pb-0">
                  <li><a href="http://meksmart.com/vi/solutions/mek-wms" class="lg:whitespace-no-wrap">

                      QUẢN LÝ KHO MEKWMS</a></li>
                  <li><a href="http://meksmart.com/vi/solutions/mek-wms-3pls" class="lg:whitespace-no-wrap">

                      QUẢN LÝ VẬN TẢI MEKTMS</a></li>
                  <li><a href="https://meksmart.com/vi/solutions/mek-wms-theo-yeu-cau" class="lg:whitespace-no-wrap">

                      MEKSMART TƯ VẤN, NÂNG CẤP</a></li>
                </ul> -->
              <li>
                <nuxt-link class="lg:mx-4 lg:mt-3 mb-0 py-3 px-0 block raleway-bold fs-13 uppercase menu-item"
                  :class="{ active: route == 'domain' }" @click="route = 'domain'" to="/domain"><span> Domain
                  </span></nuxt-link>
              </li>
              <li>
                <nuxt-link class="lg:mx-4 lg:mt-3 mb-0 py-3 px-0 block raleway-bold fs-13 uppercase menu-item"
                  :class="{ active: route == 'about' }" @click="route = 'about'" to="/about"><span> About Meksmart
                  </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link class="lg:mx-4 lg:mt-3 mb-0 py-3 px-0 block raleway-bold fs-13 uppercase menu-item"
                  :class="{ active: route == 'resouce' }" @click="route = 'resouce'" to="/resouce"><span> Resouce
                  </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link class="lg:mx-4 lg:mt-3 mb-0 py-3 px-0 block raleway-bold fs-13 uppercase menu-item"
                  :class="{ active: route == 'contact' }" @click="route = 'contact'" to="/contact"><span> Contact
                  </span></nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <div id="menu-right"
          class="lg:flex hidden lg:flex-row flex-col lg:items-center items-start lg:justify-start justify-center">
          <div id="tu-van"
            class="xl:mr-3 xl:ml-3 xl:mb-0 lg:mb-0 mb-6 btn-outline-white-sm px-15 lg:block inline-block fs-13 uppercase hover:bg-orange-600">
            <a> Consult </a>
          </div>
          <div id="languages" class="flex flex-col languages-list btn-outline-white-sm hover:bg-orange-600">
            <div class="flex w-full text-center items-center fs-13 uppercase h-full realtive">
              <span>EN</span>
              <img src="https://meksmart.com/images/web/icon/arrow-down.svg" alt="icon" class="w-3 ml-2" />
            </div>
            <ul class="lg:absolute">
              <li class="flex items-center">
                <a class="lg:whitespace-no-wrap"> VN</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  </header>
</template>

<script setup>
import { ref } from "vue";

let route = ref("");
let languages = ref("VN");
const handleNavigateTo = (currentPage = "") => {
  route = currentPage;
  return navigateTo({ path: `/${route}` });
};
</script>

<style lang="scss">
.container {
  @media (min-width: 1536px) {
    max-width: 1250px;
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1050px;
    }

    @media (min-width: 1024px) {

      .container,
      .layout {
        max-width: 950px;
      }
    }
  }
}

.languages-list ul li:last-child {
    border-bottom: 2px solid #f28021;
}
.languages-list {
  position: relative;
  &:hover ul {
    visibility: visible;
    opacity: 1;
    z-index: 1;
    transform: translateY(0);
    transition-delay: 0s, 0s, .3s;
  }

  ul>li>a {
    .active {
      color: orange;
    }
  }

  ul {
    position: absolute;
    width: 100%;
    height: 26px;
    color: #000;
    visibility: hidden;
    opacity: 0;
    top: 103%;
    right: 0;
    left: unset;
    padding-top: 3px;
    transform: translateY(-2em);
    z-index: -1;
    transition: all .3s ease-in-out 0s, visibility 0s linear .3s, z-index 0s linear .01s;

    li {
      background: #f4f4f4;
      border-radius: 10px;
      height: 25px;
      width: 100%;
      padding-top: .5rem;
      padding-left: 15px;
      padding-bottom: .5rem;
      border-bottom: 1px solid;
      &:hover {
          color: orange;
        }

      a {
        font-size: 13px;
        line-height: 24px;
        
      }
    }

  }
}

.languages-list .img-logo {
  height: 30px;

  @media (min-width: 1024px) {
    max-height: 90px;
    padding-bottom: 10px;
    padding-top: 10px;
    height: 42px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
}

.btn-outline-white-sm {
  height: 25px;
  padding: 0 18px;
  border: 1px solid #fff;

  border-radius: 230px;
}


#menu {
  @media (max-width: 1023px) {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
    z-index: 9999;
    position: absolute;
    top: 56px;
    background-image: linear-gradient(#0521bf, #001491);
    left: 0;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 19px;
    max-height: 90vh;
    overflow: auto;
  }

  .item-list {
    position: relative;
  }

  .menu-item {
    padding-bottom: 26px;
    padding-top: 16px;
  }

  li {
    cursor: pointer;
  }

  .active {
    color: #f28021 !important;
    position: relative;
    z-index: 1;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
      border-bottom: 2px solid #f28021;
    }
  }

  .icon-active {
    display: none;
  }


}
</style>