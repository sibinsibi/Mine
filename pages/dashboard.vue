<template>
              <nuxt-link to="/">About </nuxt-link>

</template>

<script>

import Cookie from "js-cookie";


export default {
    mounted: function () {
    if (!Cookie.get("user")) this.$router.push({ path: "/" });
  },
}
</script>>