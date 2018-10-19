<template>
  <div id="content" class="container">
    <!--ToDo: 1. Artikel per JSON fetchen (Datum, Head, Content); 2. Formular Footer > Neue Artikel schreiben 3. IndexedDB einbinden-->
    <!-- Content-->
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2 id="news">Neuigkeiten</h2>

          <p>
            Hier gibt es alles Neuigkeiten zu unserer Lokalität
          </p>
          <hr>
          <div class="news row">
            <div class="loader" hidden>Loading...</div>
          </div>

        </div>
      </div>
    </div>
    <form id="test" action="#" method="post">
      <div class="row responsive-label">
        <div class="col-md-3">
          <label for="name">Titel</label>
        </div>

        <div class="col-md-9">
          <input class="form-control" type="text" name="title" id="title"/>
        </div>
      </div>
      <div class="row responsive-label">
        <div class="col-md-3">
          <label for="creatDate">Datum</label>
        </div>
        <div class="col-md-9">
          <input id="today" type="date" name="creatDate" disabled>
        </div>
      </div>
      <div class="row responsive-label">
        <div class="col-md-3">
          <label for="select">Kategorie</label>
        </div>
        <div class="col-md-9">
          <select name="category" class="form-control">
            <option value="aktuelles">Neuigkeiten</option>
            <option value="veranstaltung">Veranstaltung</option>
          </select>
        </div>
      </div>
      <div class="row responsive-label">
        <div class="col-md-3">
          <label for="description">Beschreibung</label>
        </div>
        <div class="col-md-9">
          <textarea class="form-control" name="description" cols="30"></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 responsive-label">
          <input type="submit" value="Send" class="tertiary"/>
        </div>
      </div>
    </form>
    <button id="notify" type="button" onclick="notifyMe()" class="primary">Trigger notification</button>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style scoped>

</style>
