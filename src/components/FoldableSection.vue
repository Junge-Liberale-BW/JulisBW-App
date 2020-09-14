<template>
  <div class="foldable-section">
    <p :class="heading_style + ' heading-magenta'">{{title}}</p>
    <p v-if="!folded" class="text-content left">{{text}}</p>
    <i v-if="folded" class="la la-lg la-angle-down foldable-i" @click="foldSection" />
    <i v-else class="la la-lg la-angle-up foldable-i" @click="foldSection" />
  </div>
</template>

<script>
export default {
  name: "FoldableSection",

  props: ["title", "text", "heading_style"],

  data() {
    return {
      folded: true,
    };
  },

  methods: {
    foldSection() {
      this.folded = !this.folded;
    },
  },
};
</script>

<style scoped>
p {
  white-space: pre-wrap;
}
</style>
