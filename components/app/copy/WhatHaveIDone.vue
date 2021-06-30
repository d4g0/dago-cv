<template>
  <div class="mb-16">
    <h2 class="text-3xl font-bold">What have I done ?</h2>
    <p class="mt-8 font-medium space-y-4">
      <span class="opacity-75">
        I seriously started to study and develop the web when Corona hit us
        hard, back early 2020. Since that time I have been making a ton of
      </span>
      <a
        href="https://github.com/d4g0?tab=repositories"
        rel="noopenre"
        target="_blank"
        class="link"
      >
        side projects
      </a>
      <span class="opacity-75"> . I wrote an </span>
      <a
        href="https://dev.to/d4g0/making-focus-visible-happen-where-do-you-live-pho"
        rel="noopener"
        target="_blank"
        class="link"
      >
        article
      </a>
      <span class="opacity-75"> , shipped a site for a Florida based </span>
      <a
        href="https://audreyshomedaycare.com/"
        rel="noopener"
        target="_blank"
        class="link"
      >
        Day Care
      </a>
      <span class="opacity-75"> , and another one for an electronic </span>
      <a
        href="https://railab.tech/"
        rel="noopener"
        target="_blank"
        class="link"
      >
        Repair Shop
      </a>
      <span class="opacity-75">
        in Havana, this one was really fun, since i ended up learning how to
        manage a VPS with
      </span>
      <a href="https://nginx.org/" rel="noopener" target="_blank" class="link">
        Nginx
      </a>
      <span class="opacity-75">,</span>
      <a
        href="https://pm2.keymetrics.io/"
        rel="noopener"
        target="_blank"
        class="link"
      >
        PM2
      </a>
      <span class="opacity-75"> and </span>
      <a
        href="https://letsencrypt.org/"
        rel="noopener"
        target="_blank"
        class="link"
      >
        Let's Encript
      </a>
      <span class="opacity-75"> with </span>
      <a
        href="https://github.com/acmesh-official/acme.sh"
        rel="noopener"
        target="_blank"
        class="link"
      >
        acme.sh
      </a>
      <span class="opacity-75"> and a bunch of cool things. Plus some </span>
      <a
        href="https://github.com/d4g0/railab-api"
        rel="noopener"
        target="_blank"
        class="link"
      >
        APIs
      </a>
      <span class="opacity-75"> here and there. </span>
    </p>
    <!-- railab -->
    <div>
      <h3 class="mt-16 text-xl font-bold">Railab.tech</h3>
      <div
        class="
          mt-8
          w-full
          mx-auto
          shadow-xl
          rounded-md
          hover:shadow-2xl
          transition-all
          duration-300
          overflow-hidden
          relative
        "
      >
        <a href="https://railab.tech">
          <img
            v-if="!isDark"
            src="/img/railab-website-preview.png"
            alt="Railab.tech website preview"
            class=""
          />
          <img
            v-if="isDark"
            src="/img/railab-website-preview-dark.png"
            alt="Railab.tech website preview"
            class="
            "
          />
        </a>
      </div>
      <div class="flex items-center justify-center mt-4">
        <figcaption class="text-sm opacity-80 font-medium">
          <a href="https://railab.tech" class="link"> railab.tech </a>
          preview
        </figcaption>
      </div>

      <div>
        <h4 class="mt-16 font-bold">Page Speed Insights</h4>
        <div
          class="
            mt-8
            w-full
            mx-auto
            shadow-xl
            rounded-md
            hover:shadow-2xl
            transition-all
            duration-300
            overflow-hidden
            relative
          "
        >
          <a
            href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Frailab.tech%2F"
          >
            <img
              src="/img/railab.tech-page-speed-insigths-2.png"
              alt="railab.tech performance metrics in page speed insights"
              class=""
          /></a>
        </div>
        <div class="flex items-center justify-center mt-4">
          <figcaption class="text-sm opacity-80 font-medium">
            Perfromance
            <a
              href="https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Frailab.tech%2F"
              class="link"
            >
              metrics
            </a>
            by Google Page Speed Insights
          </figcaption>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isDark() {
      return this.$colorMode.value == "dark";
    },
  },
};
</script>

<style>
</style>