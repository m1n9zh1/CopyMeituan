<template>
  <div class="page-register">
    <div class="header">
      <header>
        <div class="site-logo" />
        <div class="login">
          已有美团账号？
          <router-link :to="{name: 'login'}">登录</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input @input="testPass" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <div class="pw-strength">
            <div :class="['bar', strengthClass]"></div>
            <div class="letter">
                <span>弱</span>
                <span>中</span>
                <span>强</span>
            </div>
        </div>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="ruleForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import api from '@/api.js'
export default {
  data() {
      var validateUserName = (rule, value, callback) => {
          console.log(value)
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else if (value.length < 4 || value.length > 16) {
          callback(new Error('用户名必须为4-16位的字母数字下划线组成'));
        } else {
          callback();
        }
      };
       var validatePass = (rule, value, callback) => {
          console.log(value)

        if (value === '') {
          callback(new Error('请输入密码'));
        } else if (value.length < 6 || value.length > 16) {
            callback(new Error('密码必须为6-16位的字母数字下划线组成'))
        } else {
          if (this.ruleForm.rePassword !== '') {
            this.$refs.ruleForm.validateField('rePassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
          console.log(value)

        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      ruleForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
       rules: {
          password: [{
              validator: validatePass,
              trigger: 'blur'
          }],
          rePassword: [{
              validator: validatePass2,
              trigger: 'blur'
          }],
          userName: [{
              validator: validateUserName,
              trigger: 'blur'
          }]
        },
        strengthClass : ''
    }

  },
  methods: {
      testPass () {
          var reg = /[a-zA-Z]+[0-9]+_+/g
          let pass = this.ruleForm.password
          if (pass.length > 15 || (pass.length > 6 && pass.match(reg))) {
              this.strengthClass = 'strong'
          }else if (pass.length < 8) {
              this.strengthClass = 'weak'
          }else {
              this.strengthClass = 'normal'
          }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            api.register({
                params: this.ruleForm
            }).then (res => {
                console.log(res)
                if (res.data.status == 'success') {
                    alert(res.data.msg);
                    this.$router.push('login')
                }else{
                    alert(res.data.msg)
                }
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>
<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>