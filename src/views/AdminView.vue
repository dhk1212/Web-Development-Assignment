<template>
  <div class="admin">
    <h1>Manage Data</h1>
    <h2>Add, Update and Delete student and staff data</h2>
    <div class="container">
      <button @click="goToStudentPage">MANAGE STUDENTS</button>
      <button @click="goToStaffPage">MANAGE STAFF</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    goToStudentPage() {
      this.$router.replace({ path: '/student' })
    },
    goToStaffPage() {
      this.$router.replace({ path: '/staff' })
    }
  }
}
</script>

<style scoped>
h1 {
  padding: 30px;
  text-align: center;
}

h2 {
  padding: 30px;
  text-align: center;
}

.container {
  display: grid;
  align-content: center;
  grid-auto-flow: column;
  height: 60vh;
  grid-column-gap: 15%;
  grid-row-gap: 5%;
  justify-content: center;
}

button {
  width: 200px;
  height: 200px;
}
</style>