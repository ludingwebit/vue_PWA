<template>
  <div id="content">
    <!-- Content-->
    <div class="container">
      <div id="connectionStatus"></div>
      <!-- ToDo: Methode implementieren, die auch mit der embed-Version funktioniert-->
      <div class="container-fluid" id="map-container">
        <div class="row">
          <h2>Anfahrtskarte</h2>
          <div class="col-md-12">
            <iframe id="embed-map"
                    width="600"
                    height="450"
                    frameborder="0" style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvQNb0hkcnBkfpVL1--9Pyd48MwjXAG18&q=webit!"
                    allowfullscreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
