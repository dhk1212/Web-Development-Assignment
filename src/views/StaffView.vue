<template>
  <Menu/>
  <h1>All Staff</h1>
  <TableForStaff />

</template>

<script>
import Menu from '../components/Menu.vue'
import TableForStaff from '../components/TableForStaff.vue'


export default {

  components: {
    Menu,
    TableForStaff
  },
}
</script>

<style scoped>
h1 {
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>