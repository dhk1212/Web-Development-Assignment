<template>
  <div class="dropDown" :data-value="value" :data-list="departmentList">
    <div class="selector" @click="toggle()">
      <div class="label">
        <span>{{ value }}</span>
      </div>
      <div class="arrow" :class="{ expanded: visible }"></div>
      <div :class="{ hidden : !visible, visible }">
        <ul>
          <li :class="{ current: item === value }" v-for="item in departmentList" @click="select(item)" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      value: 'Select the Department',
      departmentList: ["Fachbereich 1", "Fachbereich 2", "Fachbereich 3", "Fachbereich 4"],
    }
  },
  methods: {
    toggle() {
      this.visible = !this.visible
    },
    select(option) {
      this.value = option
      this.$emit('select', this.value)
    }
  }
}
</script>

<style scoped>

.selector {
  border: 1px solid gainsboro;
  background: #F8F8F8;
  position: relative;
  z-index: 1;
}

.arrow {
  position: absolute;
  right: 10px;
  top: 40%;
  width: 0;
  height: 0;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-top: 10px solid #888;
  transform: rotateZ(0deg) translateY(0px);
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(.59,1.39,.37,1.01);
}

.expanded {
  transform: rotateZ(180deg) translateY(2px);
}

.label {
  display: block;
  padding: 12px;
  font-size: 16px;
  color: #888;
}

ul {
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  border: 1px solid white;
  position: absolute;
  z-index: 1;
  background: white;
}

li {
  padding: 12px;
  color: #666;
}

li:hover {
   color: white;
   background: mediumaquamarine;
 }

.current {
  background: white;
}

.hidden {
  visibility: hidden;
}

.visible {
  visibility: visible;
}

</style>