var Longitude = $Longitude;
var Latitude = $Latitude;

if ((Longitude == null || Longitude == 'undefined' || Longitude == 0) && (Latitude == null || Latitude == 'undefined' || Latitude == 0)) {
    return false;
} else {
    return true;
}