jQuery(document).ready(function($) {
  $("#rider").on("click", rider);
  $("#driver").on("click", driver);
  document.querySelector('.selectRider').addEventListener('click', showRiders);
  //RiderInfo textbox
  textBoxKeycount();
  //RiderInfo price slider
  priceSlider();
  //getDriverRiderList
  $.ajax({
    type: 'GET',
    url: '/driverrider',
    data: String,
    success: function(data) {
      showRiders(data);
    }
  });

});

//Get out of rider with clicking outside of div
$(document).mousedown(function(e) {
    var container = $(".riderRegister");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $(".overlay").hide();
    }
});


function rider(e) {
    $(".riderRegister").hide().fadeIn(600);
    $(".overlay").show();
}

function driver(e) {

}

//Ride information, run when Ok is clicked
function senda(e) {
    // this er formið, $(this) býr til jQuery hlut af forminu
    var form = $(this);
    // Get input from inputs ID's
    var phoneElement = $('#phone');
    var locationElement = $('#location');
    var destinationElement = $('#destination');
    var phone = phoneElement.val();
    var location = locationElement.val();
    var destination = destinationElement.val();
    // Message is empty and everything works
    var valid = true;
    var message = '';
    //Phone
    if (phone === '') {
        $("#errorPhone").text("* Vinsamlegast skráðu símanúmerið þitt");
        message += '<li>' + 'You have to fill in phone number' + '</li>';
        valid = false;
        phoneElement.addClass('invalid');
    }
    //Check if its only numbers
    if (phone.match(/^[0-9]+$/) === null) {
        message += '<li>' + 'You have to use only digits in phonenumber' + '</li>';
        valid = false;
        phoneElement.addClass('invalid');
    } else {
        $("#errorPhone").text("");
        phoneElement.removeClass('invalid');
    }
    if (phone != '' && phone.match(/^[0-9]+$/) === null) {
        $("#errorPhone").text("* Vinsamlegast hafðu aðeins tölustafi í símanúmerinu þínu");
    };
    //Location
    if (location === '') {
        $("#errorLocation").text("* Vinsamlegast settu inn upphafsstað");
        message += '<li>' + 'You have to fill in Location' + '</li>';
        valid = false;
        locationElement.addClass('invalid');
    } else {
        $("#errorLocation").text("");
        locationElement.removeClass('invalid');
    }
    //Destination
    if (destination === '') {
        $("#errorDestination").text("* Vinsamlegast settu inn áfangastað");
        message += '<li>' + 'You have to fill in destination' + '</li>';
        valid = false;
        destinationElement.addClass('invalid');
    } else {
        $("#errorDestination").text("");
        destinationElement.removeClass('invalid');
    }
    //Shows result box with valid or unvalid
    if (valid){
        //Return info here -->
        //riderInfo();
        //resets everything
        $('#form').get(0).reset();
        $(".riderRegister").hide();
      }
    
    
    e.preventDefault();
}

function showRiders(data) {
  console.log(data);
  var userList = document.querySelector('.userList');
  var riders = data.ridersList;
  for (var i = 0; i < riders.length; i++) {
    var container = $('<div class="riderContainer"></div>');
    var userHead = $('<div class="userHead"></div>');
    var userBody = $('<div class="userBody"></div>');
    $('<img src="' + riders[i].rider.profilePictureUrl + '">').appendTo(userHead);
    $('<p class="userName">' + riders[i].rider.name + '</p>').appendTo(userHead);
    $('<p>Frá: ' + riders[i].currentLocation + '</p>').appendTo(userBody);
    $('<p>Til: ' + riders[i].destination + '</p>').appendTo(userBody);
    $('<p>Verðhugmynd: 4000 kr.</p>').appendTo(userBody);
    $('<p>Þarf far fyrir fjóra</p>').appendTo(userBody);
    
    userHead.appendTo(container);
    userBody.appendTo(container);
    container.appendTo(userList);
  }

}
function textBoxKeycount(){
  //Makes max number of keys in textbox
  $('textarea').keydown(function(e) {
    this.value = this.value.substr(0, 256);
    fjoldi = $(this).val().length;
    $('#eftir').text((256 - fjoldi) + ' eftir.');
  });
  var form = document.getElementById('form');
  form.addEventListener('submit', senda, false);
}
//Price slider
function priceSlider(){
$(function() {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 10000,
      values: [1000, 2000],
      step: 100,
      slide: function(event, ui) {
          $("#amount").val(ui.values[0] + "kr" + " - " + ui.values[1] + "kr");
      }
    });
    $("#amount").val($("#slider-range").slider("values", 0) + "kr" +
        " - " + $("#slider-range").slider("values", 1) + "kr");
  });
}

//Gives final riderInfo
function riderInfo() {
    //If everything is valid send info forward when OK is clicked

    var phone = ($('#phone')).val();
    var firstPrice = $("#slider-range").slider("values", 0);
    var secondPrice = $("#slider-range").slider("values", 1);
    var selectedVal = "";
    var selected = $("input[type='radio'][name='rGroup']:checked");
    if (selected.length > 0) {
        selectedVal = selected.val();
    }
    var location = ($('#destination')).val();
    var destination = ($('#destination')).val();

    console.log(phone);
    console.log(firstPrice);
    console.log(secondPrice);
    console.log(selectedVal);
    console.log(location);
    console.log(destination);
}