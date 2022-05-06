<template>
  <header>
    <nav>
      <div class="branding">
        <ul class="navigation">
          <li><router-link class="link" to="/">Home</router-link></li>
          <li><router-link class="link" to="/student">Students</router-link></li>
          <li><router-link class="link" to="/staff">Staff</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>

</script>

<style scoped>
header {
  background-color: black;
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  color: white;
}

ul,
.link {
  font-weight: 500;
  color: white;
  list-style: none;
  text-decoration: none;
}

li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}

.link {
  font-size: 14px;
  transition: .5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;

}
.link:hover {
  color: aquamarine;
  border-color: aquamarine;
}

.branding {
  display: flex;
  align-items: center;
}

.navigation {
  display: flex;
  justify-content: flex-start;
}

</style>