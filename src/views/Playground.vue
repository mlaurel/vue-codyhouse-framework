<template>
  <div id="playground">
    <PageTitle msg="Vue CodyHouse Playground"/>
    <DataTable class="margin-top--lg"></DataTable>
  </div>
</template>

<script>
import PageTitle from "../components/PageTitle.vue";
import DataTable from "../components/DataTable.vue";

export default {
  name: "app",
  components: {
    PageTitle,
    DataTable
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
