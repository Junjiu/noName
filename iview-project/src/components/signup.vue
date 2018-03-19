<template>

<body>
<div class="a"></div>

<div class="b">
    <div class="header">Header</div>
    <div class="register">
    <Card :bordered="false" dis-hover>
    <p slot="title" style="font-size:20px;">Welcome sign up</p>
    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
        <FormItem  prop="name">
            <Input v-model="formCustom.name" icon="person" style="width: 300px" placeholder="Enter your name">
            <p slot="prepend"  style="width:50px">Name</p></Input>
        </FormItem>
        
        <FormItem  prop="mail">
            <Input v-model="formCustom.mail" icon="email" style="width: 300px" placeholder="Enter your email">
            <p slot="prepend"  style="width:50px">Email</p></Input>
        </FormItem>

        <FormItem  prop="passwd">
            <Input v-model="formCustom.passwd" type="password" icon="locked" style="width: 300px" placeholder="Enter your password">
            <p slot="prepend"  style="width:50px">Password</p></Input>
        </FormItem>

        <FormItem  prop="passwdCheck">
            <Input v-model="formCustom.passwdCheck" type="password" icon="locked" style="width: 300px" placeholder="Confirm your password">
            <p slot="prepend"  style="width:50px">Confirm</p></Input>
        </FormItem>

        <FormItem>
            <Button type="primary" :loading="loading" shape="circle" @click="handleSubmit('formCustom')" long>Sign up</Button>
        </FormItem>
    </Form>
    </Card>
    </div>
    <div class="footer">2018-2018 © noName</div>
</div>
</body>
</template>


<script>
import axios from 'axios'
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };

            
            return {
                loading: false,
                formCustom: {
                    name: '',
                    mail: '',
                    passwd: '',
                    passwdCheck: ''
                },
                ruleCustom: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    passwd: [
                        { required:true,  message: 'The password cannot be empty', validator: validatePass, trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.loading = true;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log(this.formCustom);
                        var querystring = require('querystring');
                        var that= this;
                        axios.post('http://localhost:8000/signin', querystring.stringify({ 
                                name: this.formCustom.name,
                                mail: this.formCustom.mail,
                                passwd: this.formCustom.passwd
                                }))
                            .then(function(response) {
                            console.log(response);
                            that.$Message.success('Success!');
                            that.loading = false;
                            })
                            .catch(function(error) {
                            that.$Message.error('Fail!');
                            console.log(error);
                            that.loading = false;
                            });       

                        
                    } 
                    else {
                        this.$Message.error('Fail!');
                        this.loading = false;
                    }
                })
            }
        }
    }
</script>


<style>
.register{
    float: right;
    position:absolute;
    top: 20%;
    right: 15%;
    text-align:center
}

.a{
    position: fixed;
    width: 60%;
    height: 100%;
    float: left;
    background-image: url(/static/img/6.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: left;
    background-size: cover;
    overflow: hidden;
    display: block;
}

.b{
    position: relative;
    float: right;
    width: 500px;
    height: 700px;
    display: block;
    display: block;
    background-color: white;
    overflow: hidden;
}
.header{
    text-align: center;
    height: 50px;
    overflow: hidden;
}

.footer{
    position: absolute;
    text-align: center;
    width: 100%;
    height: 50px;
    bottom: 0px;
    overflow: hidden;
}


</style>