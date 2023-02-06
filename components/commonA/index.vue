<script>
/**
 * @desc this is a common component
 * @auth demon3443002624@outlook.com
 * @date 20230203 周五
 */

export default {
  name: "CommonComponentA",
  components: {},
  data() {
    return {
      id: "",
      title: "title in componentA",
    };
  },
  props: [""],
  //   inject: [""],
  //   provide() {
  //     return {};
  //   },
  computed: {
    idInject() {
      return this.id || "common-component-a";
    },
  },
  watch: {},
  methods: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdated() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
};
</script>
<template>
  <view :id="idInject">
    <div>{{ title }}</div>
  </view>
</template>

<style lang='less' scoped>
</style>