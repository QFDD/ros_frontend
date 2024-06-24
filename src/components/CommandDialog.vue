<template>
    <div v-if="visible" class="dialog-overlay">
      <div class="dialog">
        <h3>输入命令</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="command">指令:</label>
            <select v-model="form.command" id="command" required @change="updateFormFields">
              <option value="create_map">创建地图</option>
              <option value="save_map">保存地图</option>
              <option value="edit_mark">编辑航点</option>
              <option value="save_mark">保存航点</option>
              <option value="upload_map">上传地图</option>
              <option value="load_map">加载地图</option>
              <option value="upload_mark">上传航点</option>
              <option value="load_mark">加载航点</option>
            </select>
          </div>
  
          <div class="form-group">
            <label for="bot_id">机器人ID:</label>
            <input v-model="form.bot_id" type="text" id="bot_id" required>
          </div>
          
          <div v-if="requiresMapId" class="form-group">
            <label for="bot_id">地图ID:</label>
            <input v-model="form.map_id" type="text" id="map_id" required>
          </div>

          <div v-if="requiresMarkId" class="form-group">
            <label for="bot_id">航点ID:</label>
            <input v-model="form.mark_id" type="text" id="mark_id" required>
          </div>

          <div v-if="requiresInfo" class="form-group">
            <label for="bot_id">备注:</label>
            <input v-model="form.info" type="text" id="info" required>
          </div>
          

          <div v-if="requiresParams" class="form-group">
            <label>参数列表:</label>
            <div v-for="(param, index) in form.params" :key="index" class="param-item">
              <input v-model="form.params[index]" type="text" :placeholder="'参数 ' + (index + 1)">
              <button @click.prevent="removeParam(index)">删除</button>
            </div>
            <button @click.prevent="addParam">添加参数</button>
          </div>
  
          <div class="button-group">
            <button type="submit" class="submit-button">提交</button>
            <button @click="closeDialog" type="button" class="cancel-button">取消</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      },
      apiEndpoint: {
        type: String,
        required: true
      }
    },
    emits: ['update:visible'],
    data() {
      return {
        form: {
          command: '',
          bot_id: '',
          map_id:'',
          mark_id:'',
          info:'',
          params: []
          
      },
        apiMap: {
          'create_map': `${this.$apiBaseUrl}/robot/post_cmd`,
          'save_map': `${this.$apiBaseUrl}/robot/post_cmd`,
          'edit_mark': `${this.$apiBaseUrl}/robot/post_cmd`,
          'save_mark': `${this.$apiBaseUrl}/robot/post_cmd`,
          'upload_map': `${this.$apiBaseUrl}/robot/upload_map`,
          'load_map': `${this.$apiBaseUrl}/robot/load_map`,
          'upload_mark': `${this.$apiBaseUrl}/robot/upload_mark`,
          'load_mark': `${this.$apiBaseUrl}/robot/load_mark`
        }
    };
  },
  computed: {
    requiresParams() {
      return ['init_navigation', 'start_navigation', 'start_service'].includes(this.form.command);
    },
    requiresMarkId() {
        return ['edit_mark','save_mark'].includes(this.form.command)
    },
    requiresMapId() {
        return ['save_map', 'edit_mark','upload_map','load_map'].includes(this.form.command)
    },
    requiresInfo() {
        return ['upload_mark', 'load_mark','upload_map','load_map'].includes(this.form.command)
    }
  },
  methods: {
    closeDialog() {
      this.$emit('update:visible', false);
    },
    updateFormFields() {
      this.form.bot_id = '';
      this.form.params = [];
    },
    addParam() {
      this.form.params.push('');
    },
    removeParam(index) {
      this.form.params.splice(index, 1);
    },
    submitForm() {
      const payload = {
        command: this.form.command,
        bot_id: this.form.bot_id,
        map_id: this.form.map_id,
        mark_id: this.form.mark_id,
        params: this.requiresParams ? this.form.params : undefined
      };

      const apiEndpoint = this.apiMap[this.form.command];

      fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.closeDialog();
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }
};
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 90%;
  text-align: center;
}

h3 {
  margin-top: 0;
  font-size: 1.5em;
  margin-bottom: 1em;
}

.form-group {
  margin-bottom: 1em;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
}

input,
select,
textarea {
  width: 100%;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

textarea {
  resize: vertical;
}

.param-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
}

.param-item input {
  flex: 1;
}

.param-item button {
  margin-left: 0.5em;
  padding: 0.5em;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.submit-button {
  background-color: #4caf50;
  color: white;
}

.cancel-button {
  background-color: #f44336;
  color: white;
}
</style>
  