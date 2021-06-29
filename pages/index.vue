<template>
  <div class="flex items-center justify-center">
    <Blendy>
    </Blendy>
      <!-- <Card class="opacity-0" /> -->
    <Card class="opacity-100" />
  </div>
</template>

<script>
import Card from "~/components/home/Card.vue";
import Blendy from "~/components/app/Blendy.vue";
export default {
  components: { Card, Blendy },
};
</script>
