<template>
  <div>
    formItem
    <p id="myname">
      myname1
      <span>span1</span>
    </p>

    <win>
      <template slot="head">头部</template>
      asfds
      <template slot="foot">foot222</template>
    </win>

    <k-form :model="ruleForm" :rules="rules" ref="loginForm2">
      <k-form-item label="用户名" prop="name">
        <k-input v-model="ruleForm.name"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="pwd">
        <k-input v-model="ruleForm.pwd" type="password"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="submitForm2()">登录</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script>
import KForm from './Form';
import KFormItem from './FormItem';
import KInput from './Input';
import Win from './Win';

export default {
  name: 'index',
  components: { KForm, KFormItem, KInput, Win },
  data() {
    return {
      ruleForm: {
        name: '',
        pwd: ''
      },
      rules: {
        name: [{ required: true, message: '请输入名称' }, { min: 6, max: 10, message: '请输入6~10位的用户位' }],
        pwd: [{ required: true, message: '请输入密码' }]
      }
    };
  },
  methods: {
    say() {
      console.log('I from child');
    },
    submitForm2() {
      // 调用子组件中的方法
      this.$refs.loginForm2.validate(valid => {
        if (valid) {
          alert('提交登录！');
        } else {
          console.log('校验失败');
          return false;
        }
      });
    }
  },
  mounted() {
    console.log(this.$children);
    // 调用子组件中的方法
    this.$refs.loginForm2.hello();
    console.log(this.$el.querySelector('#myname').textContent);
  }
};
</script>

<style lang="scss" scoped>
</style>