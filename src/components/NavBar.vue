<template>
<nav class="navbar">
    <div class="navbar-logo">   
      <ul class="navbar-links">
        <li>
          <img src="@/assets/robot.png" alt="Logo" class="logo"/>
        </li>
        <li><a href="/">货物分拣机器人</a></li></ul>
    </div>
    <ul class="navbar-links">
      <li><a href="#">项目简介</a></li>
      <li><a href="#">小组信息</a></li>
      <li><a href="#">Github</a></li>
    </ul>
  </nav>
</template>
<script>
export default{
    name: 'NavBar',
    methods:{
      toHome(){
        this.$router.push("/")
      }
    }
};
</script>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

.navbar-logo .logo {
  height: 25px;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar-links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.explore-button {
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.explore-button:hover {
  background-color: #0056b3;
}</style>