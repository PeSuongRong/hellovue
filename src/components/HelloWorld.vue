<template>
  <div class="hello">
    <h1 class="m-3 text-center">{{ msg = "Hello word" }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>