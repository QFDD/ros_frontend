<template>
    <div class="container">
      <div class="button-container">
        <p class="description-text">点击下面的按钮选择工作模式</p>
        <button @click="openDialog" class="styled-button">
          <i class="fas fa-map-marked-alt"></i> 开始工作
        </button>
        <WorkCmd v-model:visible="showDialog" :api-endpoint="apiEndpoint"/>
      </div>
    </div>
  </template>
  
  <script>
  import WorkCmd from './WorkCmd.vue';
  
  export default {
    components: {
        WorkCmd, 
    },
    data() {
      return {
        showDialog: false
      };
    },
    methods: {
      openDialog() {
        this.showDialog = true;
      }
    },
    computed: {
    apiEndpoint() {
      return `${this.$apiBaseUrl}/robot/post_cmd`;
    }
  },
  };
  </script>
  
  <style scoped>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  .container {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-image: url('@/assets/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .button-container {
    text-align: center;
    background: rgba(255, 255, 255, 0.8); /* 半透明背景 */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .description-text {
    font-size: 1.2em;
    margin-bottom: 20px;
    color: #333;
  }
  
  .styled-button {
    background: linear-gradient(135deg, #4caf50, #81c784);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 15px 30px;
    font-size: 1.5em;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .styled-button i {
    margin-right: 10px;
  }
  
  .styled-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  .styled-button:active {
    transform: translateY(0);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  </style>
  