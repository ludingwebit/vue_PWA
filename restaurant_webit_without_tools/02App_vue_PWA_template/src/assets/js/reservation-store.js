let DB_VERSION = "2";
let DB_NAME = "reservation-DB";
/**
 * @desc erstellt und öffnet eine IndexedDB Datenbank | Wird mittels eines Promises auf die einzelnen Callbacks geprüft
 * @param string $msg - the message to be displayed
 * @return bool - success or failure
 */
let openDatabase = function () {
    return new Promise(function (resolve, reject) {

            if (!window.indexedDB) {
                return false;
            }
            let request = window.indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = function (event) {
                reject("Database error: " + event.target.error);
            };
            request.onupgradeneeded = function (event) {
                let db = event.target.result;
                let reservationsStore;
                if (!db.objectStoreNames.contains("reservation-store")) {
                    reservationsStore = db.createObjectStore("reservation-store", {keyPath: "id"});
                } else {
                    reservationsStore = upgradeTransaction.objectStore("reservations");
                }
                if (!reservationsStore.indexNames.contains("idx_status")) {
                    reservationsStore.createIndex("idx_status", "status", {unique: false});
                }
            };
            request.onsuccess = function (event) {
                db = event.target.result;
                console.table(db);
                /*    document.querySelector("#reservation-submit").addEventListener('click', addReservation, false);
                    document.querySelector("#getButton").addEventListener("click", getReservation, false);*/
                resolve(event.target.result);
            };
            return request;
        }
    )
        ;

};
/*let openObjectStore = function (storeName, successCallback, transactionMode) {
    let db = openDatabase();
    if (!db) {
        return false;
    }
    db.onsuccess = function (event) {
        let db = event.target.result;
        let objectStore = db.transaction(storeName, transactionMode).objectStore(storeName);
    };
    return true;
};*/

let openObjectStore = function (db, storeName, transactionMode) {
    return db.transaction(storeName, transactionMode).objectStore(storeName);
};

let addToObjectStore = function (storeName, object) {
    return new Promise(function (resolve, reject) {
        openDatabase().then(function (db) {
            openObjectStore(db, storeName, "readwrite")
                .add(object).onsuccess = resolve;
            uploadToDB(object);
        }).catch(function (errorMessage) {
            reject(errorMessage);
        });
    });
};

let addReservation = function (id, restDate, restTime, restGuest) {
    /*    let resDate = byId('form--reservation-date').value;
        let resTime = byId('form--time').value;
        let resGuests = byId('form--guests').value*/
    let reservationDetails = {
        id: id,
        Datum: restDate,
        Zeit: restTime,
        Anzahl: restGuest
    };
    addToObjectStore("reservation-store", reservationDetails);
    console.log("Hinzufügen von ", restDate, "/", restTime, "/", restGuest);

    /*
        openObjectStore("reservation-store", function (objectStore) {
            objectStore.add(reservationDetails, 1);
            objectStore.onerror = function (event) {
                console.log("[IndexedDB] Error: ", event.target.error.datum);

            }
            objectStore.onsuccess = function (event) {
                console.table("[IndexedDB] ES wurde vollbracht und alle Daten sind in der Datenbank: ", event.target.result);
            }
        }, "readwrite");*/
};




