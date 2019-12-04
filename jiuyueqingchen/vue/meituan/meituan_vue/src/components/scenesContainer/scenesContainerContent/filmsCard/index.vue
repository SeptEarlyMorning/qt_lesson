<template>
        <a href="#" class="filmsCard">
          <img :src="computedImgUrl" alt width="100%" />
        </a>
</template>

<script>
export default {
  name: "filmsCard",
  props: ["data"],
  computed: {
    computedImgUrl() {
      const imgUrl = this.data.img
        .replace(/\/w\.h/g, "")
        .replace(/(?<=\.(jpg|png|jpeg))[\s\S]*$/g, "@214w_297h_1e_1c");
      return imgUrl;
    }
  }
};
</script>

<style>
.filmsCard {
    /* width: 214px; */
    /* font-size: 0 */
}
</style>