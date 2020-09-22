<template>
  <div class="socials-wrapper">
    <div class="socials">
      <i @click="openWebsite('https://www.instagram.com/julis_bw')" class="lab la-instagram"></i>
      <i @click="openWebsite('https://www.facebook.com/julisbw')" class="lab la-facebook-f"></i>
      <i @click="openWebsite('https://www.twitter.com/julisbw') " class="lab la-twitter"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "SocialIcons",
  methods: {
    openWebsite(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style scoped>
.socials-wrapper {
  width: 100vw;
  position: relative;
  margin: 20px auto;
}
.socials {
  margin-top: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
}
i {
  font-size: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
.la-instagram {
  color: #e5007d;
}
.la-facebook-f {
  font-size: 3.5rem;
}
.la-twitter {
  color: #009ee3;
}
</style>