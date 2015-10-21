var Main = (function() {

  var userData;
    //Get out of rider with clicking outside of div
  $(document).mousedown(function(e) {
      var container = $(".riderRegister");

      if (!container.is(e.target) && // if the target of the click isn't the container...
          container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.hide();
          $(".overlay").hide();
      }
  });

  function rider(e) {
      $(".riderRegister").hide().fadeIn(600);
      $(".overlay").show();
      var now = new Date();
      now.setMinutes(now.getMinutes() + 30); // Default is 30 minutes after you decide to post
      var clocks = $('.clocks');
      var selectHours = $('<select class="selectHours"></select>');
      var selectMinutes= $('<select class="selectMinutes"></select>');
      for (var i = 0; i < 24; i++) {
        $('<option value="' + i +'">' + ('0' + i).slice(-2) + '</option>').appendTo(selectHours);
        if (i < 12) $('<option value="' + i +'">' + ('0' + 5 * i).slice(-2) + '</option>').appendTo(selectMinutes);
      }
      $(selectHours).val(now.getHours());
      $(selectMinutes).val(Math.floor(now.getMinutes() / 5));
      $(selectHours).appendTo(clocks);
      $(selectMinutes).appendTo(clocks);
      e.preventDefault();
  }

  //Ride information, run when Ok is clicked
  function postInfo(e) {
      // this er formið, $(this) býr til jQuery hlut af forminu
      var form = $(this);
      // Get input from inputs ID's
      var phoneElement = $('.riderInput');
      var locationElement = $('.locationInput');
      var destinationElement = $('.destinationInput');
      var phone = phoneElement.val();
      var location = locationElement.val();
      var destination = destinationElement.val();
      // Message is empty and everything works
      var valid = true;
      var timestamp = new Date();
      timestamp.setHours($('.selectHours').val());
      timestamp.setMinutes($('.selectMinutes').val());
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
      if (phone !== '' && phone.match(/^[0-9]+$/) === null) {
          $("#errorPhone").text("* Vinsamlegast hafðu aðeins tölustafi í símanúmerinu þínu");
      }
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

          var data= {
            phone_number:344, // parseInt(($('.riderInput')).val()); 
            price:$("#slider-range").slider("values", 0),
            number_of_people: $("input[type='radio'][name='rGroup']:checked").val(),
            location: ($('.locationInput')).val(),
            destination: ($('.destinationInput')).val(),
            message : document.getElementById('message').value,
            pickup_time_timestamp: timestamp.getTime()
          }
          $.ajax({
            type: 'POST',
            url: '/registerrider',
            data: data,
            statusCode: {
              201: function() {
                console.log("WE GOT 201!");
              }
            },
            success: function(data) {
                console.log("Skrá ísFar tókst");
            }
          }).fail(function() {
            console.log("Skrá ísFar mistókst");
          });

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
      $('<a target="_blank" href="http://www.facebook.com/' + riders[i].rider.id + '"><img src="' +
        riders[i].rider.profilePictureUrl + '"></a>').appendTo(userHead);
      $('<a target="_blank" class="userName" href="http://www.facebook.com/' + riders[i].rider.id + '">' +
        riders[i].rider.name + '</a>').appendTo(userInfo);
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
    $('.selectDriver').addClass('notActiveTab');
    $('.selectRider').removeClass('notActiveTab');
    userList.innerHTML = '';
    for (var i = 0; i < drivers.length; i++) {
      var container = $('<div class="postContainer"></div>');
      var userHead = $('<div class="userHead"></div>');
      var userBody = $('<div class="userBody"></div>');
      var starContainer = $('<div class="starContainer"></div>');
      var userInfo = $('<div class="userInfo"></div>');
      var driverInfo = $('<div class="driverInfoContainer clearfix"></div>');
      var time = $('<section class="driverInfo col-md-2"></section>');
      var location = $('<section class="driverInfo col-md-4"></section>');
      var money = $('<section class="driverInfo col-md-3"></section>');
      var people = $('<section class="driverInfo col-md-3"></section>');
      var message = $('<article></article>')
      
      for (var j = 0; j < drivers[i].driver.starRating; j++) {
        $('<span class="glyphicon glyphicon-star"></span>').appendTo(starContainer);
      }
      $('<a target="_blank" href="http://www.facebook.com/' + drivers[i].driver.id + '"><img src="' +
        drivers[i].driver.profilePictureUrl + '"></a>').appendTo(userHead);
      $('<a target="_blank" class="userName" href="http://www.facebook.com/' + drivers[i].driver.id + '">' +
        drivers[i].driver.name + '</a>').appendTo(userInfo);
      $(starContainer).appendTo(userInfo);

      // Time
      $('<span class="glyphicon glyphicon-time"></span>').appendTo(time);
      $('<p>' + new Date(drivers[i].startDriving).toTimeString().substr(0, 5) + '</p>').appendTo(time);
      $('<p>til</p>').appendTo(time);
      $('<p>' + new Date(drivers[i].stopDriving).toTimeString().substr(0, 5) + '</p>').appendTo(time);

      // Location
      $('<span class="glyphicon glyphicon-map-marker"></span>').appendTo(location);
      $('<p>' + drivers[i].place + '</p>').appendTo(location);
      $('<p>' + drivers[i].carDescription + '</p>').appendTo(location);

      // Money
      $('<span class="glyphicon glyphicon-usd"></span>').appendTo(money);
      $('<p>' + drivers[i].lowPrice + ' kr.</p>').appendTo(money);
      $('<p>til</p>').appendTo(money);
      $('<p>' + drivers[i].highPrice + ' kr.</p>').appendTo(money);

      // People
      $('<h4>Farþegafjöldi</h4>').appendTo(people);
      $('<div><span class="glyphicon glyphicon-user"></span><span class="glyphicon glyphicon-user"></span></div>').appendTo(people);

      // Message
      $('<h3>Skilaboð</h3>').appendTo(message);
      $('<p>' + drivers[i].message +'</p>').appendTo(message);

      
      time.appendTo(driverInfo);
      location.appendTo(driverInfo);
      money.appendTo(driverInfo);
      people.appendTo(driverInfo);
      driverInfo.appendTo(userBody);
      message.appendTo(userBody);
      userInfo.appendTo(userHead);
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
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = (today.getMinutes() < 10) ? '0' + today.getMinutes() : today.getMinutes();
    $('.timeFrom').html(h + ":" + m);
    $('.timeTo').html(h +":" + m);
  }

  function init() {
    $('.selectRider').on('click', showDrivers);
    $('.selectDriver').on('click', showRiders);
    $('.submitRider').on('click', postInfo); 
    startTime();
    //RiderInfo textbox
    textBoxKeycount();
    //RiderInfo price slider
    priceSlider();

    $("#rider").on("click", rider);
    //getDriverRiderList
    $.ajax({
      type: 'GET',
      url: '/driverrider',
      success: function(data) {
        console.log(data);
        userData = data;
        showDrivers();
      }
    }).fail(function() {
      var userList = $('.userList');
      $('.pickContainer').hide();
      $('<section class="wrong"><h3>Úps. Þetta er vandræðalegt.</h3><p>Eitthvað fór úrskeiðis</p>' +
        '<p>Vinsamlegast reyndu aftur</p></section>').appendTo(userList);
    });
  }
  return {
    init: init
  };
})();

$(document).ready(function() {
  Main.init();
});

