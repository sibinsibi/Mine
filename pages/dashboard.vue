<template>
  <nuxt-link to="/">About</nuxt-link>
</template>

<script>
import firebase from "firebase";
import { getUserFromCookie } from "../static/getUser";

export default {
  asyncData: async function(context) {
    return new Promise(async (resolve, reject) => {
      var user = {};
      if (process.server) {
        user = await getUserFromCookie(context.req);
      } else {
        if (await firebase.auth().currentUser)
        user = await firebase.auth().currentUser.uid;
      }
      if (!user) {
        reject("login");
      }

      let allData = {};
      resolve(allData);
    })
      .then(allData => {
        return {
          allData: allData
        };
      })
      .catch(err => {
        context.redirect("/");
      });
  },
  mounted: function() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) this.$router.push({ path: "/error" });
  }
};
</script>>