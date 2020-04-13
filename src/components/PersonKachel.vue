<template>
  <div :class="colorScheme">
    <div class="person-box">
      <img :src="getImage" class="person-img" />
      <div class="person-text">
        <p class="position">{{ person.position }}</p>
        <div class="wrapper">
          <p class="name">
            {{person.firstname}}
            <br />
            {{person.lastname}}
          </p>
          <i v-if="folded && foldable" class="la la-lg la-angle-down" @click="foldSection" />
          <i v-else-if="foldable" class="la la-lg la-angle-up" @click="foldSection" />
        </div>
      </div>
    </div>
    <div v-if="!folded && foldable" class="person-info">
      Aufgaben:
      <br />
      <ul>
        <li v-for="item in person.tasks" v-bind:key="item">{{item}}</li>
      </ul>
      <div class="socials">
        <div v-if="person.email !== null">
          <a :href="'mailto:' + person.email + '@julis-bw.de'">
            <i class="la la-lg la-envelope" />
          </a>
        </div>
        <div v-if="person.facebook !== null">
          <a :href="'https://www.facebook.com/' + person.facebook">
            <i class="la la-lg la-facebook" />
          </a>
        </div>
        <div v-if="person.twitter !== null">
          <a :href="'https://www.twitter.com/' + person.twitter">
            <i class="la la-lg la-twitter" />
          </a>
        </div>
        <div v-if="person.instagram !== null">
          <a :href="'https://www.instagram.com/' + person.instagram">
            <i class="la la-lg la-instagram" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonKachel",
  props: ["id", "person", "position", "color", "foldable", "folded"],
  computed: {
    getImage() {
      return this.$store.state.personBilder[this.position];
    },
    colorScheme() {
      if (this.color === "magenta") {
        return "color-scheme-magenta";
      } else if (this.color === "blue") {
        return "color-scheme-blue";
      } else {
        return "color-scheme-yellow";
      }
    }
  },
  methods: {
    foldSection() {
      if (this.folded) {
        this.$emit("childUnfold", this.id);
      } else {
        this.$emit("childUnfold", undefined);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.color-scheme-magenta {
  .person-box {
    color: #e5007d;
  }
  .person-info {
    background-color: #e5007d;
    color: white;
    .socials {
      i {
        color: white;
      }
    }
  }
}

.color-scheme-blue {
  .person-box {
    color: #009ee3;
  }
  .person-info {
    background-color: #009ee3;
    color: white;
    .socials {
      i {
        color: white;
      }
    }
  }
}

.color-scheme-yellow {
  .person-box {
    color: #ffed00;
    .name {
      color: #e5007d;
    }
  }
  .person-info {
    background-color: #ffed00;
    color: #e5007d;
    .socials {
      i {
        color: #e5007d;
      }
    }
  }
}

.person-box {
  border-style: solid;
  display: grid;
  grid-template-columns: 7rem auto;
  i {
    color: black;
  }
}

.person-text {
  padding: 0.5rem;
  .position {
    font-size: 0.9rem;
    line-height: 0.9rem;
    font-weight: 800;
    color: black;
    margin-top: 0rem;
    margin-bottom: 0.5rem;
  }
  .name {
    font-size: 1.4rem;
    line-height: 1.4rem;
    font-weight: 900;
    text-transform: uppercase;
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
  .wrapper {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center !important;
    justify-content: space-between;
    i {
      font-size: 2.2rem;
    }
  }
}

.person-info {
  font-weight: bold;
  font-size: 0.7rem;
  line-height: 0.8rem !important;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  ul {
    list-style-position: inside;
    padding-left: 0.2rem !important;
  }
  li {
    padding-left: 0rem;
  }
  .socials {
    display: flex;
    align-items: center !important;
    justify-content: space-around;
    i {
      font-size: 1.5rem;
    }
  }
}

img {
  width: 7rem;
  height: auto;
}
</style>