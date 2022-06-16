<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Railz Component</h2>
    <railz-component first="Sade" last="Adu"></railz-component>
    <h2>Railz Nested</h2>
    <railz-nested :sumList.prop="sumList"></railz-nested>
    <h3>Railz Nested Sum</h3>
    <railz-nested-sum :first.prop="12" :second.prop="10"></railz-nested-sum>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      sumList: [
        { first: 12, second: 10 },
        { first: 40, second: 50 },
        { first: 2, second: 3 },
        { first: null, second: 3 },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
