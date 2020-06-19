<template>
  <div class="loginpage">
    <div class="container">
      <div class="box">
        <h2>
          <img src="~/assets/img/logo.png" class="logo" />
        </h2>
        <form action>
          <div class="inputBox">
            <input type="text" v-model="email" required />
            <label for>Email</label>
          </div>
          <div class="inputBox">
            <input type="password" v-model="password" required />
            <label for>Password</label>
          </div>
          <div class="inputBox" v-show="!showLogin">
            <input type="password" v-model="password1" required />
            <label for>Confirm Password</label>
          </div>
          <button type="button" value="Sign in" @click="login" v-show="showLogin">Sign in</button>
          <button type="button" value="Sign up" @click="signup" v-show="!showLogin">Sign up</button>
          <br />
          <img
            src="~/assets/img/add-user.png"
            class="logo1"
            @click="showSignup(true)"
            v-show="showLogin"
          />
          <img
            src="~/assets/img/login-user.png"
            class="logo1"
            @click="showSignup(false)"
            v-show="!showLogin"
          />
          <img src="~/assets/img/google.png" class="logo1" @click="signWithGoogle" />
        </form>
      </div>
    </div>
    <Loader v-show="loader" />
  </div>
</template>

<script>
import Loader from "~/components/Loader.vue";
import firebase from "firebase";

export default {
  layout: "login",
  components: {
    Loader
  },
  data: () => {
    return {
      email: "",
      password: "",
      loader: false,
      showLogin: true,
      password1: ""
    };
  },
  methods: {
    login: function() {
      if (!this.email || !this.password) return;

      this.loader = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.loader = false;
          alert("Email / Password Error");
        })
        .then(user => {
          if (user) this.$router.push({ path: "/dashboard" });
        });
    },
    signWithGoogle: function() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          if (user) this.$router.push({ path: "/dashboard" });
        })
        .catch(function(error) {
          // alert("Something Went Wrong");
        });
    },
    showSignup: function(show) {
      show ? (this.showLogin = false) : (this.showLogin = true);
    },
    signup: function() {
      //Email validation
      var atposition = this.email.indexOf("@");
      var dotposition = this.email.lastIndexOf(".");
      if (
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= this.length
      ) {
        alert("Please enter a valid e-mail address ");
        return false;
      }

      //passsword validation
      if (!this.password || this.password.length < 6 || this.password !== this.password1) {
        alert("Password Mismatch / should contain atleast 6 letters");
        return;
      }

      //signup
      this.loader = true;
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.loader = false;
          console.log(error.message)
          alert("Something went wrong");
        })
        .then(user => {
          if (user) this.$router.push({ path: "/dashboard" });
        });
    }
  }
};
</script>


<style scoped>
.logo {
  width: 35%;
}
.logo1 {
  width: 15%;
  margin: 10% 3%;
}
.fa-user-plus {
  line-height: 3;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  padding: 40px;
  background: rgba(0, 0, 0, 0.4);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 2, 0);
  border-radius: 10px;
}
.box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.box .inputBox {
  position: relative;
}
.box .inputBox input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.box .inputBox label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
  animation: LabelOnLoad 1s forwards 0s ease;
}
@keyframes LabelOnLoad {
  0% {
    transform: rotate(0) translateY(-19px);
    opacity: 0;
  }
  100% {
    transform: rotate(0) translateY(0);
    opacity: 1;
  }
}
.box .inputBox input:focus ~ label,
.box .inputBox input:valid ~ label {
  top: -19px;
  left: 0;
  color: #03a9f4;
  font-size: 12px;
}
button {
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid;
  box-shadow: 0px 0px 3px 0px;
}
.box input[type="submit"]:hover {
  background-color: rgba(3, 169, 244, 0.7);
}
@media (max-width: 720px) {
  .box {
    width: 80%;
  }
}
form {
  text-align: center;
}
.loginpage {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to right top,
    #1db9ff,
    #a2a0ff,
    #fb7ad4,
    #ff677a,
    #f48603
  ) !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;
}
</style>