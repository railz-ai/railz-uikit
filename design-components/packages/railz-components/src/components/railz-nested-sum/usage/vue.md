```vue
<template>
  <railz-nested :sumList.prop=sumList></railz-nested>
</template>

<script>
export default {
  name: 'Example',
  data() {
    return {
      sumList: [{first: 12, second: 10}, {first: 40, second: 50}, {first: 2, second: 3}, {first: null, second: 3}]
    }
  }
}
</script>
```

