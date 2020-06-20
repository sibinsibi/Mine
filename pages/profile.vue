<template>
  <div class="insta-main">
    <div class="insta-wrapper">
      <div class="insta-details">
        <div class="insta-dp">
          <img src="~/assets/img/person.png" class="logo3" />
        </div>
        <div class="insta-name">
          <h2>
            Earl Loyola
            <span>Front End Web Developer</span>
          </h2>
        </div>
        <div class="insta-followers-wrap">
          <div class="insta-follow">
            <h2>
              150
              <span>Followers</span>
            </h2>
          </div>
          <div class="insta-follow">
            <h2>
              1000
              <span>Following</span>
            </h2>
          </div>
        </div>
        <div class="insta-button">
          <i class="fa fa-chevron-circle-left" aria-hidden="true" @click="gotoDashboard"></i>
        </div>
        <!-- <div class="insta-bio">
          <p>Lorem Ipsum Sit Amet. Lorem Ipsum Sit Amet. Lorem Ipsum Sit Amet. Lorem Ipsum Sit Amet. Lorem Ipsum Sit Amet.</p>
        </div>-->
      </div>
    </div>
  </div>
</template>>

<script>
import Cookie from "js-cookie";
import firebase from "firebase";
import admin from '~/plugins/index.js'

export default {
  asyncData (){
      if(process.server){
          
      }else{
          console.log('lclient')
      }
  },
  mounted: function() {
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (!isMobile) this.$router.push({ path: "/error" });
    if (!Cookie.get("user")) this.$router.push({ path: "/" });

      var user = firebase.auth().currentUser;
      if (user) {
        console.log(user);
      } else {
        // No user is signed in.
      }
    
  },
  methods: {
    gotoDashboard: function() {
      this.$router.push({ path: "/dashboard" });
    }
  }
};
</script>>

<style scoped>
.example {
  display: -ms-grid;
  display: grid;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(white),
    to(black)
  );
  background: -o-linear-gradient(top, white, black);
  background: linear-gradient(to bottom, white, black);
}
.logo3 {
  width: 35%;
}

.insta-main {
  display: block;
  padding: 20px 15px;
  position: relative;
}

.insta-wrapper {
  max-width: 320px;
  margin: 0 auto;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  border-radius: 40px;
  font-size: 0;
}

.insta-banner canvas {
  display: block;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: repeat;
  border-radius: 40px 40px 0 0;
}

.insta-dp {
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-transition: 0.3s all ease-in;
  -o-transition: 0.3s all ease-in;
  transition: 0.3s all ease-in;
}

.insta-dp canvas {
  display: block;
  width: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: repeat;
  border-radius: 50%;
  border: 1px solid #000;
}

.insta-name {
  display: block;
  text-align: center;
  z-index: 5;
  position: relative;
  margin-top: 55px;
}

.insta-name h2 {
  font-size: 20px;
  letter-spacing: 0.5px;
  line-height: 1;
  color: #2d303a;
  margin: 0;
}

.insta-name h2 span {
  display: block;
  font-size: 13px;
  line-height: 1;
  letter-spacing: 0.5px;
  margin-top: 5px;
  font-weight: 400;
}

.insta-followers-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 5;
  position: relative;
}

.insta-follow {
  width: 50%;
  text-align: center;
  display: block;
  margin: 20px 0;
}

.insta-follow h2 {
  color: #3372b5;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.5px;
  margin: 0;
}

.insta-follow h2 span {
  color: #666;
  font-size: 13px;
  display: block;
  margin-top: 5px;
  font-weight: 300;
}
.insta-button {
  display: block;
  z-index: 5;
  position: relative;
  margin-bottom: 20px;
}

.insta-button i {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 50px auto;
  font-size: 35px;
  font-weight: 600;
  -webkit-transition: 0.3s all ease-in;
  -o-transition: 0.3s all ease-in;
  transition: 0.3s all ease-in;
  color: #7e6bc2;
}

.insta-bio p {
  font-size: 14px;
  line-height: 20px;
  color: #666;
  text-align: left;
  display: block;
}

.insta-details {
  display: block;
  padding: 10px 30px;
  position: relative;
}

/* hovers */

.insta-dp:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}

.insta-button a:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  background: #fbfb00;
}
</style>