<template>
  <nuxt-link to="/">About</nuxt-link>
</template>

<script>
import Cookie from "js-cookie";

export default {
  mounted: function() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (!isMobile) this.$router.push({ path: "/error" });

    if (!Cookie.get("user")) this.$router.push({ path: "/" });
  }
};
</script>>