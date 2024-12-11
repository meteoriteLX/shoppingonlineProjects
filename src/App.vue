//<script>
//export default{
 // setup() {
 //   const message = 'this is message'
 //   const logMessage = () => {
  //    console.log(message)
  //  }
   // return {
  //    message,
   //   logMessage
  //  }
 // }
//}
//</script>

//以上的简单写法：
<script setup>
const message = 'this is message'
const logMessage = () => {
  console.log(message)
}
</script setup>

<template>  
  <div>
    {{ message }}
    <button @click="logMessage"> log </button>
  </div>
</template>