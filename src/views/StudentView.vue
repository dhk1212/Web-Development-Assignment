<template>
  <div class="student">
    <Menu/>
    <h1>All Student</h1>
    <TableForStudent />
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import TableForStudent from '@/components/TableForStudent.vue'

export default {

  components: {
    Menu,
    TableForStudent
  }
}
</script>

<style scoped>
h1 {
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>