<template>
<body>

    <div class="a">
    </div>

    <div class="b">
        <div class="header">Header</div>

        <div class="login">
        <Card :bordered="false" dis-hover>
        <p slot="title" style="font-size:20px;">Welcome login</p>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" >
            <FormItem  prop="mail" >
                <Input v-model="formValidate.mail" style="width: 300px" placeholder="Enter your email">
                <Icon slot="prepend"  type="email" style="width:20px" /></Input>
            </FormItem>

            <FormItem  prop="password" >
                <Input v-model="formValidate.password" type="password" style="width: 300px" placeholder="Enter your password">
                <Icon slot="prepend"  type="locked" style="width:20px" /></Input>
            </FormItem>

            <FormItem>
                <Button type="primary" :loading="loading" shape="circle" @click="handleSubmit('formValidate')" long>Login</Button>
                <a>reset password</a>
                <span>|</span>
                <a href="http://localhost:8080/#/signup">register</a>
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
axios.defaults.withCredentials=true;  
    export default {
        data () {
            return {
                loading: false,
                formValidate: {
                    mail: '',
                    password: ''

                },
                ruleValidate: {
              
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty',  trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],

                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    ]
                  
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.loading = true;
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.log(this.formValidate);
                        // var params = new URLSearchParams();
                        // params.append('mail', this.formValidate.mail);
                        // params.append('password', this.formValidate.password);
                      //  axios.post('http://localhost:8000/signin',params)
                        var querystring = require('querystring');
                        var that= this;
                        axios.post('http://localhost:8000/signin', querystring.stringify({ 
                                mail:this.formValidate.mail ,
                                password: this.formValidate.password 
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
                            // axios({
                            //   method:'get',
                            //   url:'http://proj-309-sb-6.cs.iastate.edu:8181/hello'
                            // })
                            //   .then(function(response) {
                            //     console.log(response);
                            // });



                        this.$Message.error('Fail!');
                        this.loading = false;

                    }
                 
                })
            }
        }
    }


</script>


<style>

.login{
    float: right;
    position: absolute;
    top: 25%;
    right: 15%;
    text-align:center
}
.a{
    position: fixed;
    width: 60%;
    height: 100%;
    float: left;
    background-image: url(/static/img/4.jpg);
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
    overflow: hidden;
    background-color: white;

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
    color: #80848f;
    font-family: Helvetica Neue;
}

</style>