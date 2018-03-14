<template>
	<form method="POST" action="http://localhost:8080/login"> 		
	<div id="login">
        <Input id="email" v-model="value1" type="email" icon="email" placeholder="Enter your email" style="width: 300px">        
        <p slot="prepend"  style="width:50px">Email</p>
        </Input>
        <br>
        <Input id="password" v-model="value2" type="password" icon="locked" placeholder="Enter your password" style="width: 300px">
        <p slot="prepend" style="width:50px">Password</p>
        </Input>
        <br>
        <center>
       		<Button type="submit" shape="circle">Submit</Button>
        </center>

	</div>
	</form>
</template>

<script type="text/javascript">
	


</script>

<style>
#login{
	position:absolute;
	top: 30%;
	right: 10%;

}
</style>