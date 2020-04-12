<template>
  <div class="themenSeite">
    <div class="container themen-content">
      <div v-for="item in fixed_content" v-bind:key="item.ueberschrift" class="themen-wrapper">
        <p class="themen-title-cyan">{{item.title}}</p>
        <p class="themen-p">{{item.text}}</p>
      </div>
      <div v-for="item in foldable_content" v-bind:key="item.ueberschrift" class="themen-wrapper">
        <FoldableSection :title="item.title" :text="item.text"/>
      </div>
    </div>
  </div>
</template>

<script>
  import FoldableSection from '../components/FoldableSection'
  export default {
    name: "ThemenSeite",
    components: { FoldableSection },
    props: ["thema", "fixed_content", "foldable_content"]
  };
</script>

<style scoped>

</style>
