<template>
  <div>
    详情页面
    {{detailData}}
  </div>
</template>
<script>
import { mapState,mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["detailData"])
  },
  
  methods: {
    ...mapActions(['detail'])
  },
  created() {
    this.detail(this.$route.query.item);
  },
  mounted() {}
};
</script>
<style scoped lang="">
</style>