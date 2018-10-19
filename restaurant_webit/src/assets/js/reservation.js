
$(document).ready(function () {
    //Holt sich die einzelnen Einträge aus der IndexedDB und stellt sie dar

    //Wenn eine Verbindung besteht, lade die Datein aus der Server Datenbank und danach aus der IndexedDB
    if (window.navigator.onLine === true) {

    } else {
    }

    populateReservations();
    $("#reservation-form").submit(function (event) {
        event.preventDefault();
        let restDate = $("#form--reservation-date").val();
        let restTime = $("#form--time").val();
        let restGuest = $("#form--guests").val();
        let id = Date.now().toString().substring(3, 11);

        if (!restDate || !restTime || !restGuest) {
            return false;
        }
        addReservation(id, restDate, restTime, restGuest);
        ProgressiveKITT.addMessage('[Service Worker] Ihre Reservierung wurder vermerkt, sobald sie bestätigt wurde, werden Sie informiert. Vielen Dank!',
            {hideAfter: 7000});
        return false;
    });
});

let populateReservations = function (indexName, indexValue) {
    return new Promise(function (resolve) {
        openDatabase().then(function (db) {
            let objectStore = openObjectStore(db, "reservation-store");
            let cursor;
            let s = "";

            if (indexName && indexValue) {
                cursor = objectStore.index(indexName).openCursor(indexValue);
            } else {
                cursor = objectStore.openCursor();
            }
            cursor.onsuccess = function (event) {
                console.log("Cursor geöffnet");
                let cursor = event.target.result;
                if (cursor) {
                    s += "<h2>ID " + cursor.key + "</h2><p>";
                    for (let field in cursor.value) {
                        s += field + "=" + cursor.value[field] + "<br/>";
                    }
                    s += "</p>";
                    cursor.continue();
                }
                document.querySelector("#status").innerHTML = s;
            };
            resolve(event.target.result);

        });

    });
};


function uploadToDB(object) {
    let xhr;
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 8 and older
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open("POST", "server-side/syncDB.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(object);

}