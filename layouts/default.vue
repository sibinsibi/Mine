<template>
  <div>
    <nav class="navbar">
      <a href="#" class="logo">
        <img src="~/assets/img/add-photo.png" class="logo1" />
        <img src="~/assets/img/mine.png" class="logo2" />
        <img src="~/assets/img/user.png" class="logo3" />
      </a>
    </nav>

    <nuxt />
  </div>
</template>

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
</style>
