<template>
  <div class="flex items-center justify-evenly">
    <NodeIcon/>
    <OctoIcon />
    <Tailwind />
    <NuxtIcon />
    <VueIcon />
  </div>
</template>

<script>
import NodeIcon from "./NodeIcon.vue";
import NuxtIcon from "./NuxtIcon.vue";
import OctoIcon from "./OctoIcon.vue";
import Tailwind from "./Tailwind.vue";
import VueIcon from "./VueIcon.vue";

export default {
  components: {
    OctoIcon,
    Tailwind,
    NuxtIcon,
    VueIcon,
    NodeIcon,
  },
};
</script>

<style>
</style>