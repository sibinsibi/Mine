<template>
  <div>
    <nav class="navbar">
      <a href="#" class="logo">
        <img src="~/assets/img/add-photo.png" class="logo1" />
        <img src="~/assets/img/mine.png" class="logo2" />
        <img src="~/assets/img/user.png" class="logo3" @click="gotoProfile" />
      </a>
    </nav>
    <div id="circularMenu" class="circular-menu">
      <a
        class="floating-btn"
        onclick="document.getElementById('circularMenu').classList.toggle('active');"
      >
        <i class="fa fa-plus"></i>
      </a>

      <menu class="items-wrapper">
        <a href="#" class="menu-item fa fa-facebook"></a>
        <a href="#" class="menu-item fa fa-twitter"></a>
        <a href="#" class="menu-item fa fa-google-plus"></a>
        <i href class="menu-item fa fa-power-off" @click="logout"></i>
      </menu>
    </div>

    <nuxt />
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import Cookies from "js-cookie";

export default {
  mounted: function() {
    this.setupFirebase();
  },
  created: function() {
    this.userEmail = this.$store.state.userEmail;
  },
  methods: {
    setupFirebase: async function() {
      await firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          await firebase
            .auth()
            .currentUser.getIdToken(true)
            .then(async token => {
              Cookies.set("access_token", token);
              Cookies.set("uid", firebase.auth().currentUser.uid);
            });
        } else {
          this.logout();
        }
      });
    },
    logout: async function() {
      await firebase
        .auth()
        .signOut()
        .then(async () => {
          Cookies.remove("access_token");
          Cookies.remove("uid");
          this.$router.push({ path: "/" });
        });
    },
    gotoProfile: function() {
      this.$router.push({ path: "/profile" });
    }
  }
};
</script>


<style scoped>
.logo1 {
  width: 10%;
}
.logo2 {
  width: 20%;
}
.logo3 {
  float: right;
  width: 10%;
}
.navbar {
  font-size: 18px;
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
}

.main-nav {
  list-style-type: none;
  display: none;
}

.main-nav li {
  text-align: center;
  margin: 15px auto;
}

@media screen and (max-width: 768px) {
  .logo3 {
    margin-top: 5px;
  }
}

@media screen and (min-width: 768px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 100px;
    align-items: center;
  }

  #chkToggle:checked + ul.main-nav {
    display: flex;
  }

  .main-nav {
    display: flex;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }

  .main-nav li {
    margin: 0;
  }

  .nav-links {
    margin-left: 40px;
  }

  .logo1 {
    margin-top: 0;
    width: 8%;
  }

  .logo2 {
    width: 10%;
  }

  .logo3 {
    width: 7%;
  }

  .navbar-toggle {
    display: none;
  }

  .logo:hover,
  .nav-links:hover {
    color: rgba(255, 255, 255, 1);
  }
}
.circular-menu {
  position: fixed;
  bottom: 1em;
  right: 1em;
}

.circular-menu .floating-btn {
  display: block;
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
  box-shadow: 0 2px 5px 0 hsla(0, 0%, 0%, 0.26);
  color: hsl(0, 0%, 100%);
  text-align: center;
  line-height: 3.9;
  cursor: pointer;
  outline: 0;
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
}

.circular-menu.active .floating-btn {
  box-shadow: inset 0 0 3px hsla(0, 0%, 0%, 0.3);
}

.circular-menu .floating-btn:active {
  box-shadow: 0 4px 8px 0 hsla(0, 0%, 0%, 0.4);
}

.circular-menu .floating-btn i {
  font-size: 1.3em;
  transition: transform 0.2s;
}

.circular-menu.active .floating-btn i {
  transform: rotate(-45deg);
}

.circular-menu:after {
  display: block;
  content: " ";
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -2;
  transition: all 0.3s ease;
}

.circular-menu.active:after {
  transform: scale3d(5.5, 5.5, 1);
  transition-timing-function: cubic-bezier(0.68, 1.55, 0.265, 1);
}

.circular-menu .items-wrapper {
  padding: 0;
  margin: 0;
}

.circular-menu .menu-item {
  position: absolute;
  top: 0.2em;
  right: 0.2em;
  z-index: -1;
  display: block;
  text-decoration: none;
  color: hsl(0, 0%, 100%);
  font-size: 1em;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  text-align: center;
  line-height: 3;
  transition: transform 0.3s ease, background 0.2s ease;
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
}

.circular-menu .menu-item:hover {
  background-color: hsla(0, 0%, 0%, 0.3);
}

.circular-menu.active .menu-item {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.circular-menu.active .menu-item:nth-child(1) {
  transform: translate3d(1em, -7em, 0);
}

.circular-menu.active .menu-item:nth-child(2) {
  transform: translate3d(-3.5em, -6.3em, 0);
}

.circular-menu.active .menu-item:nth-child(3) {
  transform: translate3d(-6.5em, -3.2em, 0);
}

.circular-menu.active .menu-item:nth-child(4) {
  transform: translate3d(-7em, 1em, 0);
}

/**
 * The other theme for this menu
 */

.circular-menu.circular-menu-left {
  right: auto;
  left: 1em;
}

.circular-menu.circular-menu-left .floating-btn {
  background-color: hsl(217, 89%, 61%);
}

.circular-menu.circular-menu-left:after {
  background-color: hsl(217, 89%, 61%);
}

.circular-menu.circular-menu-left.active .floating-btn i {
  transform: rotate(90deg);
}

.circular-menu.circular-menu-left.active .menu-item:nth-child(1) {
  transform: translate3d(-1em, -7em, 0);
}

.circular-menu.circular-menu-left.active .menu-item:nth-child(2) {
  transform: translate3d(3.5em, -6.3em, 0);
}

.circular-menu.circular-menu-left.active .menu-item:nth-child(3) {
  transform: translate3d(6.5em, -3.2em, 0);
}

.circular-menu.circular-menu-left.active .menu-item:nth-child(4) {
  transform: translate3d(7em, 1em, 0);
}
</style>
