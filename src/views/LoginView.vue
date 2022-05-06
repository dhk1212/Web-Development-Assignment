<template>
  <div v-show="registerActive">
    <Menu/>
  </div>
  <div v-show="!registerActive">
    <div class="container">
      <div class="row">
        <div>
          <div class="card login">
            <h1 class="form-control">Staff Login</h1>
            <form class="form-group">
              <input :disabled="count >= 3" v-model="staffLogin" type="username" class="form-control"
                     placeholder="Username" required>
              <input :disabled="count >= 3" v-model="staffPasswordLogin" type="password" class="form-control"
                     placeholder="Password" required>
              <button :disabled="count >= 3" @click="doStaffLogin" class="form-control">Login</button>
            </form>
          </div>
        </div>
      </div>
      <div class="row">
        <div>
          <div class="card login">
            <h1 class="form-control">Admin Login</h1>
            <form class="form-group">
              <input :disabled="count >= 3" v-model="AdminLogin" type="username" class="form-control"
                     placeholder="Username" required>
              <input :disabled="count >= 3" v-model="adminPasswordLogin" type="password" class="form-control"
                     placeholder="Password" required>
              <button :disabled="count >= 3" @click="doAdminLogin" class="form-control">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {
  components: {
    Menu
  },
  data() {
    return {
      staffLogin: "",
      staffPasswordLogin: "",
      AdminLogin: "",
      adminPasswordLogin: "",
      registerActive: false,
      count: 1
    }
  },
  methods: {
    doStaffLogin() {
      if (this.staffLogin === "Staff" && this.staffPasswordLogin === "Staff") {
        this.registerActive = true
        localStorage.isAuthenticatedStaff = true
      } else {
        this.count++
        alert("Username and Password are wrong!")
      }
    },
    doAdminLogin() {
      if (this.AdminLogin === "Admin" && this.adminPasswordLogin === "Admin") {
        this.registerActive = true
        localStorage.isAuthenticatedAdmin = true
      } else {
        this.count++
        alert("Username and Password are wrong!")
      }
    }
  }
}
</script>

<style scoped>
.card {
  padding: 20px;
  width: 300px;
}

.container {
  display: grid;
  align-content: center;
  grid-auto-flow: column;
  height: 90vh;
  grid-column-gap: 15%;
  grid-row-gap: 5%;
  justify-content: center;
}

.row {
  border-style: solid;
  border-color: black;
  border-radius: 10px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-control {
  margin: 10px;
}

button {
  background-color: black;
  border-radius: 10px;
  color: white;
}

button:hover {
  background-color: #1c1c1c;
  cursor: pointer;
}
</style>