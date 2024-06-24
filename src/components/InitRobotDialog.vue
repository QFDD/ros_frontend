<template>
  <div v-if="visible" class="dialog-overlay">
    <div class="dialog">
      <h3>初始化机器人</h3>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="id">ID:</label>
          <input v-model="form.id" type="text" id="id" required>
        </div>
        <div class="form-group">
          <label for="mod">Mod:</label>
          <input v-model="form.mod" type="text" id="mod" required>
        </div>
        <div class="form-group">
          <label for="stat">Stat:</label>
          <input v-model="form.stat" type="text" id="stat" required>
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
        id: '',
        mod: '',
        stat: ''
      }
    };
  },
  methods: {
    closeDialog() {
      this.$emit('update:visible', false);
    },
    submitForm() {
      const payload = {
        id: this.form.id,
        mod: this.form.mod,
        stat: this.form.stat
      };

      fetch(this.apiEndpoint, {
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

.button-group {
  display: flex;
  justify-content: space-between;
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
