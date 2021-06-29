<template>
  <div class="mb-16">
    <div class="">
      <h2 class="text-3xl font-bold">What tools do <br class="sm:hidden"> I use ?</h2>
      <ToolsIconList class="mt-8" />
      <div class="mt-8 font-medium space-y-4">
        <p>
          <span class="opacity-75">
            We are not in 2010 any more, I'm happy to say that cutting edge tech
            is where I live. Mostly use
          </span>
          <a
            href="https://v3.vuejs.org/"
            target="_blank"
            rel="noopener"
            class="link"
            >Vue.js</a
          >
          /
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener"
            class="link"
            >Nuxt.js</a
          >
          <span class="opacity-75">
            to create from single page applications, to server side rendered
            ones, passing by the Jam Stack street too. I really enjoy working
            with those tools, they bring endless possibilities to craft;
            headless content managed systems like
          </span>
          <a
            href="https://www.storyblok.com/?utm_source=elbrujo&utm_medium=twitter&utm_campaign=elbrujolegal-likes-storyblok"
            target="_blank"
            rel="noopener"
            class="link"
          >
            Storyblok
          </a>
          <span class="opacity-75">
            , or custom APIs to consume content, as a fully static approach
            nurtured by these two using Jam Stack environments like
          </span>
          <a href="https://www.netlify.com/" rel="noopener" class="link">
            Netlify
          </a>
          .
        </p>

        <p>
          <span class="opacity-75">I can’t leave out the </span>
          <a
            href="https://tailwindcss.com"
            rel="noopener"
            target="_blank"
            class="link"
          >
            Tailwindcss
          </a>
          <span class="opacity-75">
            framework, they can’t came out with a better name. With such an
            intuitive and flexible design sistem, I can make prototypes in no
            time and easily iterate till the final solution . Busting up
            productivity and maintenance times, and going all the way up in
            performance.
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ToolsIconList from "~/components/icons/ToolsIconList.vue";
export default {
  components: {
    ToolsIconList,
  },
};
</script>

<style>
</style>