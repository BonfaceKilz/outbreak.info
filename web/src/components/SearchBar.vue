<template>
  <form class="d-none d-md-block">
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text bg-grey text-sec border-0" id="sb"><i class="fas fa-search"></i></span>
      </div>
      <input id="sBar" type="text" class="form-control border-0 bg-grey text-light" placeholder="Search" aria-label="search" aria-describedby="sb">
      <small id="sBar" class="form-text text-light">Search updated information on COVID-19</small>
    </div>
  </form>
</template>

<script lang="ts">

export default Vue.extend({
  name: "SearchBar",
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {

  },
  methods: {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>