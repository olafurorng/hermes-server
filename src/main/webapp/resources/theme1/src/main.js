var userData;
$(document).ready(function($) {

  $('input[name="rGroup"]').on("click", riderInfo);
  document.querySelector('.selectRider').addEventListener('click', showDrivers);
  document.querySelector('.selectDriver').addEventListener('click', showRiders);

  //Makes max number of keys in textbox
  $('textarea').keydown(function(e) {
    this.value = this.value.substr(0, 1000);
    fjoldi = $(this).val().length;
    $('#eftir').text((1000 - fjoldi) + ' eftir.');
  });
  var form = document.getElementById('form');
  form.addEventListener('submit', senda, false);

  $("#rider").on("click", rider);
  
  //Price slider
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
    //getDriverRiderList
  $.ajax({
    type: 'GET',
    url: '/driverrider',
    data: String,
    success: function(data) {
      console.log(data);
      userData = data;
      showDrivers();
    }
  });

});

function rider(e) {
    $(".riderRegister").show();
}

//Get out of rider with clicking outside of div
$(document).mouseup(function(e) {
    var container = $(".riderRegister");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});


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
        $(".riderRegister").toggle();
      }
    
    
    e.preventDefault();
}

function showRiders() {
  var userList = document.querySelector('.userList');
  userList.innerHTML = '';
  document.querySelector('.selectDriver').classList.remove('notActiveTab');
  document.querySelector('.selectRider').classList.add('notActiveTab');
  var riders = userData.ridersList;
  for (var i = 0; i < riders.length; i++) {
    var container = $('<div class="postContainer"></div>');
    var userHead = $('<div class="userHead"></div>');
    var userBody = $('<div class="userBody"></div>');
    var starContainer = $('<div class="starContainer"></div>');
    var userInfo = $('<div class="userInfo"></div>');
    for (var j = 0; j < riders[i].rider.starRating; j++) {
      $('<span class="glyphicon glyphicon-star"></span>').appendTo(starContainer);
    }
    $('<img src="' + riders[i].rider.profilePictureUrl + '">').appendTo(userHead);
    $('<p class="userName">' + riders[i].rider.name + '</p>').appendTo(userInfo);
    $(starContainer).appendTo(userInfo);
    $('<p>Frá: ' + riders[i].currentLocation + '</p>').appendTo(userBody);
    $('<p>Til: ' + riders[i].destination + '</p>').appendTo(userBody);
    $('<p>Verðhugmynd: 4000 kr.</p>').appendTo(userBody);
    $('<p>Þarf far fyrir fjóra</p>').appendTo(userBody);
    
    userInfo.appendTo(userHead);    
    userHead.appendTo(container);
    userBody.appendTo(container);
    container.appendTo(userList);
  }

}

function showDrivers() {
  var userList = document.querySelector('.userList');
  var drivers = userData.driversList;
  document.querySelector('.selectDriver').classList.add('notActiveTab');
  document.querySelector('.selectRider').classList.remove('notActiveTab');
  userList.innerHTML = '';
  for (var i = 0; i < drivers.length; i++) {
    var container = $('<div class="postContainer"></div>');
    var userHead = $('<div class="userHead"></div>');
    var userBody = $('<div class="userBody"></div>');
    var starContainer = $('<div class="starContainer"></div>');
    var userInfo = $('<div class="userInfo"></div>');
    for (var j = 0; j < drivers[i].driver.starRating; j++) {
      $('<span class="glyphicon glyphicon-star"></span>').appendTo(starContainer);
    }
    $('<img src="' + drivers[i].driver.profilePictureUrl + '">').appendTo(userHead);
    $('<p class="userName">' + drivers[i].driver.name + '</p>').appendTo(userInfo);
    $(starContainer).appendTo(userInfo);
    $('<p>Byrjar: ' + drivers[i].startDriving + '</p>').appendTo(userBody);
    $('<p>Endar: ' + drivers[i].stopDriving + '</p>').appendTo(userBody);
    
    userInfo.appendTo(userHead);
    userHead.appendTo(container);
    userBody.appendTo(container);
    container.appendTo(userList);
  }
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