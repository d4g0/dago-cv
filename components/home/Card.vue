<template>
  <div class="w-full h-full relative z-30 top-0 left-0 pt-20">
    <div
      class="
        max-w-2xl
        mx-auto
        rounded-xl
        overflow-y-hidden
        shadow-xl
        mb-20
        bg-white bg-opacity-75
        dark:bg-surface-dark-elevated dark:bg-opacity-75
        transition-all
        duration-150
        filter
        backdrop-blur-xl
      "
    >
      <!-- banner -->
      <div class="w-full pt-10 px-10 lg:px-12 lg:pt-12 pb-8">
        <div class="w-full flex justify-between items-center">
          <h1 class="text-4xl font-bold filter">Hey, im Dago</h1>
          <img
            src="/img/dago.jpg"
            alt="Dago"
            class="w-20 h-20 rounded-full shadow-md"
          />
        </div>
        <div class="mt-2 sm:mt-0">
          <ul class="relative">
            <li class="-ml-2">
              <a
                href="mailto:tocarralero@gmail.com"
                class="
                  px-2
                  rounded-md
                  text-teal-600
                  dark:text-teal-400
                  transition-colors
                  duration-150
                  hover:bg-teal-100
                  dark:hover:bg-teal-800
                  focus:outline-none
                  focus:ring-2 focus:ring-teal-400
                  dark:focus:ring-teal-600;
                "
                >tocarralero@gmail.com</a
              >
            </li>
            <li class="-ml-2">
              <a
                href="https://github.com/d4g0"
                class="
                  px-2
                  rounded-md
                  text-teal-600
                  dark:text-teal-400
                  transition-colors
                  duration-150
                  hover:bg-teal-100
                  dark:hover:bg-teal-800
                  focus:outline-none
                  focus:ring-2 focus:ring-teal-400
                  dark:focus:ring-teal-600;
                "
                >GitHub</a
              >
            </li>
          </ul>
          <div class="mt-4">
            <ColorModeCtrl />
          </div>
        </div>
      </div>
      <!-- body -->
      <div class="w-full px-10 lg:px-12 pb-10 lg:pb-12">
        <div class="mb-16">
          <p class="font-medium opacity-75">
            I'm a web developer mainly focused on frontend, also I'm a Software
            Engineering student at college.
          </p>
        </div>

        <!-- <WhatDoIDo />
        <WhatTools /> -->
        <WhatHaveIDone />
        <ContactForm />
      </div>
    </div>
  </div>
</template>

<script>
import ColorModeCtrl from "~/components/app/ColorModeCtrl.vue";
import WhatDoIDo from "~/components/app/copy/WhatCanIDo.vue";
import WhatTools from "~/components/app/copy/WhatTools.vue";
import WhatHaveIDone from "~/components/app/copy/WhatHaveIDone.vue";
import ContactForm from "./ContactForm.vue";
export default {
  components: {
    ColorModeCtrl,
    WhatDoIDo,
    WhatTools,
    WhatHaveIDone,
    // ContactForm,
  },
};
</script>

<style>
</style>