
let id;
let options;

function success(pos) {
  const crd = pos.coords;
  console.log(`lat:${crd.latitude} lon:crd.longitude`)
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
