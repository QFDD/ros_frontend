<template>
  <div class="container">
    
    <InitRobotDialog v-model:visible="showInitRobotDialog" :api-endpoint="initRobotApiEndpoint" />
    <header class="header">
      <button @click="openInitRobotDialog" class="init-button">初始化机器人</button>
      <div class="header-content">
        <h1 class="main-title">
          <i class="fas fa-robot"></i> 货物分拣机器人
        </h1>
        <p class="subtitle">软工周五上午第9小组</p>
      </div>
    </header>
    <main class="main-content">
      
      <div class="buttons">
        <button class="btn map-mode" @click="enterMapMode">
          <i class="fas fa-map"></i>
          建图模式
        </button>
        <button class="btn work-mode" @click="enterWorkMode">
          <i class="fas fa-robot"></i>
          工作模式
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import InitRobotDialog from './InitRobotDialog.vue';
export default {
  components: {
    InitRobotDialog
  },
  name: 'RobotMainPage',
  data() {
    return {
      showDialog: false,
      showInitRobotDialog: false
    };
  },
  computed: {
    apiEndpoint() {
      return `${this.$apiBaseUrl}/robot/post_cmd`;
    },
    initRobotApiEndpoint() {
      return `${this.$apiBaseUrl}/robot/regiest`;
    }
  },
  methods: {
    enterMapMode() {
      this.$router.push('/build_map');
    },
    enterWorkMode() {
      this.$router.push('/work_mode');
      // Add your navigation or functionality here
    },
    openDialog() {
      this.showDialog = true;
    },
    openInitRobotDialog() {
      this.showInitRobotDialog = true;
    }
  }
}
</script>

<style scoped>
.init-button {
  position: absolute; /* Use absolute positioning */
  top: 20px;
  right: 20px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
}

.init-button:hover {
  background-color: #1976D2;
}

.init-button:active {
  background-color: #0D47A1;
}
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-image: url('@/assets/bg.jpg'); 
  background-repeat: no-repeat;
  background-size: cover; /* 拉伸背景图片以覆盖整个容器 */
  background-position: center;
  margin: 0; /* 确保没有额外的外边距 */
  padding: 0;
  position: relative;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}

.navbar-logo .logo {
  height: 30px;
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

.header {
  height: 50vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  padding: 0;
}

.header-content {
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  
}

.main-title {
  font-size: 3em;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.2em;
  margin-bottom: 20px;
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
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.buttons {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 20px 40px;
  font-size: 1.5em;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn i {
  font-size: 1.2em;
}

.btn.map-mode {
  background-color: #28a745;
}

.btn.work-mode {
  background-color: #d80c1a;
}

.btn:hover {
  opacity: 0.8;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>
