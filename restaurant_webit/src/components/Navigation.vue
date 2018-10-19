<template>
  <div>
    <nav id="top-bar">
      <div class="frame row">
        <!--Menu Button-->
        <!--           <div class="col-sm-1">
                       <button type="button" id="sidebarCollapse">
                           <span class="icon-align-justify"></span>
                       </button>
                   </div>-->
        <div class="col-sm">
          <h2 id="brand-name">Restaurant webit!</h2>
          <!--                <button type="button" id="settings-mobile" class="dropdown-btn">
                              <span class="icon-more-vertical"></span>
                          </button>-->
        </div>
        <div id="settings-mobile" class="material-dropdown">
          <figure></figure>
          <figure class="middle"></figure>
          <p class="cross">x</p>
          <figure></figure>
          <ul class="dropdown">
            <li><a href="#">Einstellungen</a></li>
            <li><a href="#">Aktualisieren</a></li>
          </ul>
        </div>
      </div>
    </nav>
    <nav style="transition: all 0.3s ease 0s;" id="mobile-bottom-bar"
         class="mobile-bottom-bar">
      <div class="sidebar-header">
        <img src="../../static/images/logo.jpg" alt="restaurant webit!"/>
      </div>

      <div>
        <router-link class="footer-link" to="/home"><span class="icon-home"></span><p>Startseite</p></router-link>
        <router-link class="footer-link" to="/reservierung"><span class="icon-credit"></span><p>Reservierung</p></router-link>
        <router-link class="footer-link" to="/anfahrt"><span class="icon-location"></span><p>Anfahrt</p></router-link>
        <router-link class="footer-link" to="/speisekarte"><span class="icon-help"></span><p>Speisekarte</p></router-link>
        <router-link class="footer-link" to="/kontakt"><span class="icon-phone"></span><p>Kontakt</p></router-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'Navigation'
}
</script>
