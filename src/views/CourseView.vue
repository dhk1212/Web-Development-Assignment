<template>
  <h1>Course Overview</h1>
  <div class="container">
    <div id="media-list">
      <li v-on:click="toggleDetails(item)"
          v-for="item in List"
          :key="item">
        <h2>{{ item.course }}</h2>
        <div v-show="item.visible">
          <p v-for="student in item.student" :key="student">{{ student }}</p>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      List: [
        {
          course: "Mathematics",
          student: ["Student A"],
        },
        {
          course: "Programming",
          student: ["Student A", "Student B"]
        },
        {
          course: "Software Engineering",
          student: ["Student A", "Student B"]
        },
        {
          course: "Mathematics",
          student: ["Student A", "Student B"]
        },
        {
          course: "Mathematics",
          student: ["Student A", "Student B"]
        },
      ]
    }
  },
  methods: {
    toggleDetails(item) {
      item.visible = !item.visible
    }
  }
}
</script>

<style scoped>

.container {
  max-width: 80%;
  margin: auto;
  min-height: initial;
  position: relative;
}

.container > div {
  padding-bottom: 30px;
}

h2 {
  cursor: pointer;
  display: inline;
}


ul {
  list-style-type: none;
  padding-left: 0;
  border-radius: 5px;
}

li {
  list-style-type:none;
  border: #eaeaea solid 1px;
  margin: 10px 0;
  padding: 15px;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  -moz-box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
}

h1 {
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>