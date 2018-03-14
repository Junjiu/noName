<template>
	<form method="POST" action="http://localhost:8080/register"> 		
	<div id="content">

		<Input id="name" v-model="value2" type="text" placeholder="Enter your nickname" style="width: 300px">
        <Icon slot="prepend"  type="person" style="width:20px" />
        </Input>
        <br>
        <Input id="email" v-model="value1" type="email" placeholder="Enter your email" style="width: 300px">        
        <Icon slot="prepend"  type="email" style="width:20px" />
        </Input>
        <br>
        <Input id="password" v-model="value3" type="password" placeholder="Enter your password" style="width: 300px">
        <Icon slot="prepend"  type="locked" style="width:20px"/>
        </Input>
        <br>
        <Input id="password-confirm" v-model="value3" type="password" placeholder="Confirm your password" style="width: 300px">
        <Icon slot="prepend"  type="locked" style="width:20px"/>
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
#content{
	position:absolute;
	top: 30%;
	right: 10%;

}
</style>