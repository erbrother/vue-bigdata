<template>
  <div class="signup">
    <el-dialog
      title="注册"
      :visible.sync="signupVal"
      size="small"
      @close="close"
    >
      <el-form :model="signupForm" :rules="signupRules" ref="signupForm" label-width="75px" class="ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="signupForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="signupForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="comfirmPass">
          <el-input type="password" v-model="signupForm.comfirmPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('signupForm')">提交</el-button>
          <el-button @click="resetForm('signupForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    props: {
      signup: {
        type: Boolean,
        default: false
      }
    },
    data() {
      var checkUserName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'))
        }
        value = parseInt(value)
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            value = value + ''
            if (value.length > 11) {
              callback(new Error('用户名长度必须小于12位'))
            } else {
              callback()
            }
          }
        }, 500)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      var comfirmPass = (rule, value, callback) => {
        if (value !== this.signupForm.pass) {
          callback(new Error('两次输入密码不一致'))
        } else {
          callback()
        }
      }
      return {
        signupVal: false,
        signupForm: {
          username: '',
          pass: '',
          comfirmPass: ''
        },
        signupRules: {
          username: [
            {validator: checkUserName, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          comfirmPass: [
            {validator: comfirmPass, trigger: 'blur'}
          ]
        }
      }
    },
    watch: {
      signup(val) {
        this.signupVal = val
      }
    },
    methods: {
      signupChange() {
        this.signupVal = false
      },
      close() {
        this.$emit('close')
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.signupForm)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>
<style lang="stylus"></style>