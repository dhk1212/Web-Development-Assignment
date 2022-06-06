<template>
  <button class="btn-add" @click="showModal = true">ADD STAFF</button>

  <table>
    <div class="filter">
      <p class="filterOpt">Filter:</p>
      <DropDownSemester class="dropDown" @select="semester = $event"/>
      <drop-down class="dropDown" @select="department = $event"/>
    </div>
    <thead class="tableHead">
    <tr class="tableItem">Staff ID</tr>
    <tr class="tableItem">Staff Name</tr>
    <tr class="tableItem">Date of Birth</tr>
    <tr class="tableItem">Gender</tr>
    <tr class="tableItem">Staff Department</tr>
    <tr class="tableItem">Staff Email</tr>
    <tr class="tableItem">Joining Date</tr>
    <tr class="tableItem">Actions</tr>
    </thead>

    <tbody class="tableContent" v-for="(item, index) in filterSemester" :key="item">
    <tr class="tableRow">
      <td class="item" v-show="!item.editMode">{{ item.ID }}</td>
      <input class="item" type="text" v-bind:placeholder="item.ID" v-show="item.editMode" v-model="item.ID">

      <td class="item" v-show="!item.editMode">{{ item.name }}</td>
      <input class="item" type="text" v-bind:placeholder="item.name" v-show="item.editMode"
             v-model="item.name">

      <td class="item" v-show="!item.editMode">{{ item.DOB }}</td>
      <input class="item" type="date" name="DOB" v-bind:placeholder="item.DOB" v-show="item.editMode" v-model="item.DOB"
             min="1900-01-01" max="2022-12-31">

      <td class="item" v-show="!item.editMode">{{ item.gender }}</td>
      <input type="radio" v-show="item.editMode" v-model="item.gender" value="Female">
      <label for="Female" v-show="item.editMode">F</label>
      <input type="radio" v-show="item.editMode" v-model="item.gender" value="Male">
      <label for="Male" v-show="item.editMode">M</label>

      <td class="item" v-show="!item.editMode">{{ item.department }}</td>
      <dropDown v-bind:placeholder="item.department" v-show="item.editMode" class="item"
                @select="item.department = $event"/>

      <td class="item" v-show="!item.editMode">{{ item.email }}</td>
      <input class="item" type="email" v-bind:placeholder="item.email" v-show="item.editMode"
             v-model="item.email">

      <td class="item" v-show="!item.editMode">{{ item.DOJ }}</td>
      <input class="item" type="date" name="DOJ" v-bind:placeholder="item.DOJ" v-show="item.editMode" v-model="item.DOJ"
             min="2015-01-01" max="2015-12-31">


      <td class="item">
        <button v-show="item.editMode" @click="editComplete(item)">SAVE</button>
        <button v-show="!item.editMode" @click="edit(item)">EDIT</button>
        <button @click="deleteItem(index)">DELETE</button>
      </td>
    </tr>
    </tbody>
  </table>

  <div class="overlay" v-if="showModal" @click="showModal = false"></div>
  <div class="modal" v-if="showModal">
    <button class="close" @click="showModal = false">CANCEL</button>
    <div>
      <p>Staff ID</p>
      <input type="text" v-model="ID">
    </div>
    <div>
      <p>Name</p>
      <input type="text" v-model="name">
    </div>
    <div>
      <p>Date of Birth</p>
      <div>
        <input type="date" name="DOB" v-model="DOB" min="1900-01-01" max="2022-12-31">
      </div>
    </div>
    <div>
      <p>Gender</p>
      <input type="radio" id="Female" value="Female" v-model="gender">
      <label for="Female">F</label>
      <input type="radio" id="Male" value="Male" v-model="gender">
      <label for="Male">M</label>
    </div>
    <div>
      <p>Department</p>
      <drop-down @select="this.department = $event"/>
    </div>
    <div>
      <p>Email</p>
      <input type="email" v-model="email">
    </div>
    <div>
      <p>Date of Joining</p>
      <div>
        <input type="date" name="DOJ" v-model="DOJ" min="2015-01-01" max="2015-12-31">
      </div>
    </div>
    <ul v-if="errors.length">
      <li v-for="error in errors" :key="error">
        {{ error }}
      </li>
    </ul>
    <button class="confirm" @click="add">OK</button>
  </div>
</template>

<script>
import DropDown from "@/components/DropDownDepartment.vue"
import DropDownSemester from "@/components/DropDownSemester";
import * as dayjs from "dayjs";

export default {
  components: {
    DropDown,
    DropDownSemester
  },
  data() {
    return {
      showModal: false,
      editMode: false,
      ID: '',
      name: '',
      DOB: '',
      gender: '',
      department: '',
      email: '',
      DOJ: '',
      semester: '',
      errors: [],
      itemList: [
        {
          ID: "FOO",
          name: "Dahye Kim",
          DOB: "2002-12-2",
          gender: "Female",
          department: "Fachbereich 1",
          email: "dahye@student.htw-berlin.de",
          DOJ: "2015-04-06"
        }
      ]
    }
  },
  methods: {
    add(e) {
      this.errors = []
      if (!this.isValid) {
        e.preventDefault();
      }
      if (this.isValid) {
        this.errors = []
      }
      if (!this.isIDValid) {
        this.errors.push("Please enter your ID")
      }

      if (!this.isNameValid) {
        this.errors.push("Please enter your name")
      }

      if (!this.isEmailValid) {
        this.errors.push("Please enter your email")
      }

      if (!this.isDepartmentValid) {
        this.errors.push("Please select the department")
      }

      if (!this.isDOBValid) {
        this.errors.push("DOB invalid")
      }

      if (this.errors.length > 0) {
        return;
      }

      const inputID = this.ID;
      const inputName = this.name
      const inputEmail = this.email
      const inputDOB = this.DOB
      const inputGender = this.gender
      const inputDOJ = this.DOJ
      this.itemList.push({
        ID: inputID,
        name: inputName,
        DOB: inputDOB,
        gender: inputGender,
        department: this.department,
        email: inputEmail,
        DOJ: inputDOJ
      })
      this.editMode = false
      this.clearAll()
      this.showModal = false
    },
    clearID() {
      this.ID = ''
    },
    clearName() {
      this.name = ''
    },
    clearEmail() {
      this.email = ''
    },
    clearDepartment() {
      this.department = ''
    },
    clearDOB() {
      this.DOB = ''
    },
    clearGender() {
      this.gender = ''
    },
    clearDOJ() {
      this.DOJ = ''
    },
    clearAll() {
      this.clearID()
      this.clearName()
      this.clearEmail()
      this.clearDepartment()
      this.clearDOB()
      this.clearGender()
      this.clearDOJ()
    },
    deleteItem(index) {
      this.itemList.splice(index, 1)
    },
    edit(item) {
      item.editMode = true
    },
    editComplete(item) {
      const oldest = dayjs("31-12-1963")
      const newest = dayjs("01-01-2016")
      if (dayjs(item.DOB).isBefore(oldest) || dayjs(item.DOB).isAfter(newest)) {
        window.alert("DOB invalid")
        return
      }
      item.editMode = false
    }
  },
  computed: {
    isValid() {
      return this.isIDValid && this.isNameValid && this.isEmailValid && this.isDepartmentValid && this.isDOBValid
    },
    isIDValid() {
      return this.ID !== ''
    },
    isNameValid() {
      return this.name !== ''
    },
    isEmailValid() {
      return this.email !== ''
    },
    isDepartmentValid() {
      return this.department !== ''
    },
    isDOBValid() {
      return this.DOB > "31-12-1963" && this.DOB < "01-01-2016"
    },
    filterSemester() {
      return this.itemList
          .filter((staff) => {
            if (!this.semester || this.semester === "All semester") {
              return staff
            }
            if (this.semester === "Summer" && dayjs(staff.DOJ).month() > 2 && dayjs(staff.DOJ).month() < 8) {
              return staff
            }
            if (this.semester === "Winter" && dayjs(staff.DOJ).month() < 2 && dayjs(staff.DOJ).month() > 8) {
              return staff
            }
          })
          .filter((staff) => {
            if (!this.department || this.department === "All department") {
              return staff
            }
            if (!this.department) {
              return staff
            }
            if (this.department === staff.department) {
              return staff
            }
          })
    }
  }
}
</script>

<style scoped>

.filterOpt {
  align-self: center;
}

.dropDown {
  margin: 5px;
}

.filter {
  display: flex;
}

table {
  table-layout: fixed;
  width: 80%;
  position: relative;
  left: 80px;
  top: 2px
}

.tableHead {
  display: flex;
  width: 100%;
  background: #000;
  padding: 15px;
}

.tableItem {
  text-transform: uppercase;
  color: white;
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
}

.modal {
  position: absolute;
  left: 0;
  right: 0;
  top: 30%;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  z-index: 9999;
  padding: 20px 30px;
  background-color: #fff;
}

.overlay {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
}


.item {
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
}

.tableRow {
  display: flex;
  width: 100%;
  padding: 15px;
}

.tableRow:nth-of-type(odd) {
  background: white;
}

label {
  align-self: center;
}

input {
  align-self: center;
}

button {
  padding: 8px;
  margin: 10px 4px;
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  position: relative;
}

button:hover {
  border-radius: 15px;
  opacity: 0.5;
}

.btn-add {
  margin-left: 30px;
}
</style>