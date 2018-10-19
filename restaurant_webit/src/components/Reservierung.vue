<template>
  <div id="content" class="container">
    <!--ToDo: Push Benachrichtigung Tal Ater als Beispiel nehmen-->
    <div class="container" id="reservation-widget-container">
      <div class="row">
        <h3 id="reservation-widget-label" style="text-align: center;" class="col-md-12">Jetzt eine Reservierung
          durchführen!</h3>
        <div class="col-md-12" id="reservation-widget">
          <form method="get" id="reservation-form">
            <div class="input-group ">
              <label for="form--reservation-date">Reservierung Datum:</label>
              <input onload="byId('form--reservation-date').value = new Date().toDateInputValue();" class="form-control" type="date" id="form--reservation-date"
                     name="form--reservation-date"
                     value="">
            </div>
            <div class="input-group ">
              <label for="form--time">Zeit:</label>
              <input class="form-control" type="time" id="form--time" name="form--time"
                     min="11:00" max="22:00" required/>
              <span class="hours">&Ouml;ffnungszeit von 11:00AM to 22:00PM</span>

            </div>
            <div class="input-group ">
              <label for="form--guests">G&auml;ste:</label>
              <input class="form-control" type="number" value="2" min="1" max="10" id="form--guests"
                     name="form--guests">
            </div>
            <div class="btn-group">
              <button id="reservation-submit" class="btn btn-default btn-lg">Check Availability</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- ToDo: Speisekarte noch implementieren-->
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="text-align: center;">
          <div id="status"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reservierung'
}
</script>
<style scoped>

</style>
