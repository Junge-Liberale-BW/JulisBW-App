<template>
  <div>
    <LAK :name="name" />
  </div>
</template>

<script>
import LAK from "../components/LAK";

export default {
  name: "Verband",
  components: { LAK },
  data() {
    return {
      name: this.$route.params.id
    };
  }
};
</script>

<style scoped>
</style>
