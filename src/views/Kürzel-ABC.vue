<template>
  <div>
    <Header />
    <div class="text-page">
      <h1 class="heading-cyan">
        SUCHE:
      </h1>
      <div class="search-wrapper center">
        <input
          v-model="search"
          class="search"
          type="text"
          placeholder="Suche nach Abkürzung..."
        >
      </div>

      <div class="list-wrapper">
        <table class="list-table">
          <div
            v-for="(item, i) in filteredList"
            :key="i"
          >
            <tr
              v-if="search=='' && (i==0 || (i>0 && item.abbr.toUpperCase()[0] !== filteredList[i-1].abbr.toUpperCase()[0]))"
              class="text-magenta letter"
            >
              <td>{{ item.abbr.toUpperCase()[0] }}</td>
            </tr>
            <tr>
              <td class="abbr">
                {{ item.abbr }}
              </td>
              <td class="explanation">
                {{ item.explanation }}
              </td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "KRzelABC",
  components: { Header },
  data: function () {
    return {
      search: "",
    };
  },
  computed: {
    kuerzelList() {
      return this.$store.getters.kuerzel.kuerzel;
    },
    filteredList() {
      let v = this.kuerzelList.filter((e) =>
        (e.abbr + " " + e.explanation)
          .toLowerCase()
          .includes(this.search.toLowerCase())
      );
      v.sort((e1, e2) =>
        e1.abbr.toLowerCase() > e2.abbr.toLowerCase() ? 1 : -1
      );
      return v;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: black;
  font-size: 1.5rem;
}
.list-wrapper {
  margin-top: 1rem;
}
.list-table {
  tr {
    line-height: 1rem;
  }
  .letter {
    td {
      padding-top: 0.75rem;
      vertical-align: bottom;
    }
  }
}

.abbr {
  width: 4rem;
}
</style>