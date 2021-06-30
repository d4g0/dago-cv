<template>
  <div class="">
    <Blendy> </Blendy>
    <!-- <Card class="opacity-0" /> -->
    <Card class="opacity-100" />
    <footer class="pb-8 relative z-10">
      <p class="px-10 text-xs opacity-50 font-medium text-center">
        The GitHub, Tailwind, Nuxt, and Vue icon assets are used here just as
        reference.
      </p>
    </footer>
  </div>
</template>

<script>
import Card from "~/components/home/Card.vue";
import Blendy from "~/components/app/Blendy.vue";
export default {
  components: { Card, Blendy },
  head() {
    return {
      title: "Dago | Vue Frontend Developer",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Web Development Services",
        },
        { hid: "og:title", property: "og:title", content: "Dago Web Services" },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "Dago | Vue Frontend Developer",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Web Development Services",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://dago-cv.netlify.app/img/dago-web-development-services.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://dago-cv.netlify.app/img/dago-web-development-services.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Dago Web Development Services'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://dago-cv.netlify.app/img/dago-web-development-services.jpg'
      }
      ],
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
      ],
    };
  },
};
</script>
