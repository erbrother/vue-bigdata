<template>
  <div class="signin">
    <el-dialog
      title="登录"
      :visible.sync="signinVal"
      size="small"
      @close="close"
    >
      <el-form :model="signinForm" :rules="signinRules" ref="signinForm" label-width="75px" class="ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="signinForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="signinForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('signinForm')">提交</el-button>
          <el-button @click="resetForm('signinForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    props: {
      signin: {
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
      return {
        signinVal: false,
        signinForm: {
          username: '',
          pass: ''
        },
        signinRules: {
          username: [
            {validator: checkUserName, trigger: 'blur'}
          ],
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ]
        }
      }
    },
    watch: {
      signin(val) {
        this.signinVal = val
      }
    },
    methods: {
      signinChange() {
        this.signinVal = false
      },
      close() {
        this.$emit('close')
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.signinForm)
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