<template>
  <div>
    <router-link to="/Photo">
      <v-touch
        class="img-box"
        :style="{backgroundImage:`url(${$store.state.photo[idx].src})`}"
        @swipeleft="next()"
        @swiperight="prev()"
      ></v-touch>
    </router-link>
  </div>
</template>

<script>
import Vue from "vue";
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });
export default {
  data() {
    return {
      idx: this.$route.query.index
    };
  },
  methods: {
    next() {
      this.idx++;
      if (this.idx >= this.$store.state.photo.length) {
        this.idx = 0;
      }
    },
    prev() {
      this.idx--;
      if (this.idx < 0) {
        this.idx = this.$store.state.photo.length - 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.img-box {
  position: absolute;
  left: 0;
  top: 1rem;
  bottom: 1rem;
  right: 0;
  background: #000 center center no-repeat;
  background-size: contain;
}
</style>