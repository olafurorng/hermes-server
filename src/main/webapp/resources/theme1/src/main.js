jQuery(document).ready(function($) {

  $("#rider").on("click", rider);
  $("#driver").on("click", driver);
  $('input[name="rGroup"]').on("click", riderInfo);
  document.querySelector('.selectRider').addEventListener('click', showRiders);

  //Makes max number of keys in textbox
  $('textarea').keydown(function(e) {
    this.value = this.value.substr(0, 1000);
    fjoldi = $(this).val().length;
    $('#eftir').text((1000 - fjoldi) + ' eftir.');
  });
  var form = document.getElementById('form');
  form.addEventListener('submit', senda, false);

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
      showRiders(data);
    }
  });

});



//Get out of rider with clicking outside of div
$(document).mouseup(function(e) {
    var container = $(".riderRegister");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});


function rider(e) {
    $(".riderRegister").show();
}

function driver(e) {

}

//Ride information, run when Ok is clicked
function senda(e) {

    // this er formið, $(this) býr til jQuery hlut af forminu
    var form = $(this);
    // Get input from inputs ID's
    var phoneElement = $('#phone');
    var subjectElement = $('#subject');
    var locationElement = $('#location');
    var destinationElement = $('#destination');
    var phone = phoneElement.val();
    var subject = subjectElement.val();
    var location = locationElement.val();
    var destination = destinationElement.val();
    // Message is empty and everything works
    var valid = true;
    var message = '';
    //Phone
    if (phone === '') {
        $("#errorPhone").text("* Vinsamlegast skráðu símanúmerið þitt, hvernig á annars fólk að geta náð í þig?");
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
        $("#errorPhone").text("* Vinsamlegast hafðu aðeins tölustafi í símanúmerinu þínu, vefsíðan er ekki klárari en það að hún skilur bara tölustafi");
    };
    //Subject
    if (subject === '') {
        $("#errorSubject").text("* Vinsamlegast settu inn titil, það er miklu flottara");
        message += '<li>' + 'You have to fill in Title' + '</li>';
        valid = false;
        subjectElement.addClass('invalid');
    } else {
        $("#errorSubject").text("");
        subjectElement.removeClass('invalid');
    }
    //Location
    if (location === '') {
        $("#errorLocation").text("* Vinsamlegast settu inn upphafsstað, hvernig á fólk annars að vita hvar á að sækja þig/ykkur");
        message += '<li>' + 'You have to fill in Location' + '</li>';
        valid = false;
        locationElement.addClass('invalid');
    } else {
        $("#errorLocation").text("");
        locationElement.removeClass('invalid');
    }
    //Destination
    if (destination === '') {
        $("#errorDestination").text("* Vinsamlegast settu inn áfangastað, hvernig á fólk annars að vita hvert á að skutla þér/ykkur");
        message += '<li>' + 'You have to fill in destination' + '</li>';
        valid = false;
        destinationElement.addClass('invalid');
    } else {
        $("#errorDestination").text("");
        destinationElement.removeClass('invalid');
    }
    //Shows result box with valid or unvalid
    $('div.utkoma p').html(message);
    if (!valid) {
        $('div.utkoma').removeClass('valid');
        $('h5').text("Errors came up!");
        $('div.utkoma').addClass('invalid');
    } else {
        $('div.utkoma').removeClass('invalid');
        $('h5').text("");
        //Return info here -->
        //riderInfo();
        //resets everything
        $(".riderRegister").toggle();
        $('#phone').val('');
        $('#subject').val('');
        $('#location').val('');
        $('#destination').val('');
    }
    $('div.utkoma').show();
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


//Gives final riderInfo
function riderInfo() {
    //If everything is valid send info forward when OK is clicked

    var phone = ($('#phone')).val();
    var subject = ($('#subject')).val();
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
    console.log(subject);
    console.log(firstPrice);
    console.log(secondPrice);
    console.log(selectedVal);
    console.log(location);
    console.log(destination);
}