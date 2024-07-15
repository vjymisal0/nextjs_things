console.log("location.js")
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)

    }
    else {
        XMLDocument.innerHTML = "Geolocation is not supported by this browser."
    }
}
function showPosition(position) {
    console.log("position")
}


getLocation()
