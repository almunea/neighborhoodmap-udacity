
// google map coffee shops locations
var camel_step    = {lat: 24.769295, lng: 46.691028};
var elixir_bunn   = {lat: 24.734221, lng: 46.611273};
var five_Elephant = {lat: 24.817011, lng: 46.644384};
var The_roasting_house = {lat: 24.743633, lng: 46.674519};
var twelve_cups      = {lat: 24.765394, lng: 46.671204};

var base = [];
var FoursquareUrl = [];
var FoursquareRating = [];

$.ajax({
  url: 'https://api.foursquare.com/v2/venues/explore?ll=24.694324,46.684559&radius=100000&section=coffee&client_id=IR3HFMBHFS5PDY3NRVAOEIXFZRTXG1WXJ5QYX4LFYLDROP3C&client_secret=BBUWQFLOCBF1SW2AJVPCEVANLPKBP33GQV0OLWMGDM0IRSYX&v=20170501',
  dataType: "json",
  success: function (data) {
    base = data.response.groups[0].items;

    for (var i=0; i< base.length; i++){
      FoursquareRating[i]= base[i].venue.rating;
      FoursquareUrl[i]= base[i].venue.url;
    }
},
  error: function (errorMessage) {
      window.alert("Foursquare API is unavailable.");
  }
});
