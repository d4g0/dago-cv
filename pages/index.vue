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
};
</script>
