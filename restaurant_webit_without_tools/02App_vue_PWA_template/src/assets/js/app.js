'use_strict'
console.log("GELADEN UND ENTSICHERT");
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(function (registration) {
        console.log("Service Worker wurde registriert mit dem Scope:", registration.scope);
    }).catch(function (err) {
        console.log("Service Worker Registrierung fehlgeschlagen:", err);
    });
}
//Wenn der Service Worker eine Änderung erfährt, wird ein Button getriggert, der den neuen installiert
/*
function showRefreshUI(registration) {
    // TODO: Display a toast or refresh UI.

    // This demo creates and injects a button.
            var button = document.createElement('button');
            button.style.bottom = '-40%';
            button.setAttribute('class', 'primary');
            button.textContent = 'Tshis site has updated. Please click to see changes.';

    button.addEventListener('click', function () {
        if (!registration.waiting) {
            // Just to ensure registration.waiting is available before
            // calling postMessage()
            return;
        }

        button.disabled = true;

        registration.waiting.postMessage('skipWaiting');
    });

    document.body.appendChild(button);
};
function onNewServiceWorker(registration, callback) {
    if (registration.waiting) {
        // SW is waiting to activate. Can occur if multiple clients open and
        // one of the clients is refreshed.
        return callback();
    }

    function listenInstalledStateChange() {
        registration.installing.addEventListener('statechange', function (event) {
            if (event.target.state === 'installed') {
                // A new service worker is available, inform the user
                Notification.requestPermission().then(function (permission) {
                    if (permission === "granted") {
                        console.log("Die Notification würde ankommen!");                     registration.showNotification("It's a trap!", notificationOptions);
                    } else {
                        console.log("Hat nicht funktioniert finde eine Lösung");
                    }
                });
                callback();
            }
        });
    };

    if (registration.installing) {
        return listenInstalledStateChange();
    }

    // We are currently controlled so a new SW may be found...
    // Add a listener in case a new SW is found,
    registration.addEventListener('updatefound', listenInstalledStateChange);
}
window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js')
        .then(function (registration) {
            // Track updates to the Service Worker.
            if (!navigator.serviceWorker.controller) {
                // The window client isn't currently controlled so it's a new service
                // worker that will activate immediately
                return;
            }

            // When the user asks to refresh the UI, we'll need to reload the window
            var preventDevToolsReloadLoop;
            navigator.serviceWorker.addEventListener('controllerchange', function (event) {
                // Ensure refresh is only called once.
                // This works around a bug in "force update on reload".
                if (preventDevToolsReloadLoop) return;
                preventDevToolsReloadLoop = true;
                console.log('Controller loaded');
                window.location.reload();
            });

            onNewServiceWorker(registration, function () {
                showRefreshUI(registration);
            });
        });
});
*/
// Sorgt dafür, dass das Reservierungsdatum immer das tägliche anzeigt
Date.prototype.toDateInputValue = (function () {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
});
function byId(pId) {
    return document.getElementById(pId);
}
function responsiveSidebar() {
    let myWidth = window.innerWidth;
    let setMob = document.getElementById('settings-mobile');
    let setDesk = document.getElementById('settings-desktop');
    let diss = document.getElementById('dismiss');
    let sidebar = document.getElementById('sidebar');
    let mobilebottombar = document.getElementById('mobile-bottom-bar');
    if (myWidth >= 900) {
        console.log("Size: ", myWidth);
        $("#sidebar").addClass('active');
        sidebar.style.transition = "unset";
        document.getElementById('content').style.paddingLeft = "250px";
        document.getElementById('brand-name').style.paddingLeft = "250px";
        diss.style.display = 'none';
        Object.assign(setDesk.style, {display: "flex", position: "relative"});
        Object.assign(setMob.style, {display: "none"})
        Object.assign(mobilebottombar.style, {display: "none",})
    } else if (window.matchMedia("(orientation: portrait)").matches) {
        Object.assign(sidebar.style, {transition: "all 0.3s"});
        $("#sidebar").removeClass('active');
        document.getElementById('content').style.padding = "60px 0 60px 0";
        diss.style.display = '-webkit-inline-box';
        Object.assign(setMob.style, {display: "inline-block", float: "right", margin: "0px 10px 0px 0px"})
        Object.assign(setDesk.style, {display: "none", position: "absolute"});
        document.getElementById('brand-name').style.paddingLeft = "20px";
        Object.assign(mobilebottombar.style, {display: "flex",})
    } else if (window.matchMedia("(orientation: landscape)").matches) {
        Object.assign(sidebar.style, {transition: "all 0.3s"});
        $("#sidebar").removeClass('active');
        document.getElementById('content').style.padding = "60px 0 60px 0";
        diss.style.display = '-webkit-inline-box';
        Object.assign(setMob.style, {display: "inline-block", float: "right", margin: "0px 10px 0px 0px"})
        Object.assign(setDesk.style, {display: "none", position: "absolute"});
        document.getElementById('brand-name').style.paddingLeft = "20px";
        Object.assign(mobilebottombar.style, {display: "flex",})
    }
}

function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have alredy been granted
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        var notification = new Notification("Hi there!");
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied' || Notification.permission === "default") {
        Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                var notification = new Notification("Hi there!");
            }
        });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
}

