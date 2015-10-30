var Main = (function() {

  var userData;
  // Controles what data and input should post
  var riderDriverIsRegistered = false;
  // Controles what form is shown
  var addRiderDriver = true;
  var changeForm = true;

    //Get out of register when clicked outside of container
  $(document).mousedown(function(e) {
      var container = $(".register");
      if (!container.is(e.target) && // if the target of the click isn't the container...
          container.has(e.target).length === 0) // ... nor a descendant of the container
      {
        if(e.target.className.indexOf('addButton') === -1) {
          container.slideUp();
        }
    }
  });

  function showRegisterForm(e) {
      // Limit phonenumber to numbers
      var phoneInput = $('.phoneInput');
      phoneInput.on('keypress', limitToNumbers);
      // Unable to open Register Form when its already open
      $(".register").slideDown();
      // Only create new Form when showRider/showDriver is changed
      if(changeForm){
      // In both forms empty and create header, place, car, clock
      var headerName = $('.headerName');
      $(headerName).empty();
      var place = $('.place');
      $(place).empty();
      var car = $('.car');
      $(car).empty();
      // Clock
      var now = new Date();
      now.setMinutes(now.getMinutes() + 30); // Default is 30 minutes after you decide to post
      var clocks = $('.clocks');
      var selectHours = $('<select class="selectHours"></select>');
      var selectMinutes= $('<select class="selectMinutes"></select>');
      // Second clock
      var selectHoursFrom = $('<select class="selectHoursFrom"></select>');
      var selectMinutesFrom= $('<select class="selectMinutesFrom"></select>');
      $(clocks).empty();
      for (var i = 0; i < 24; i++) {
        $('<option value="' + i +'">' + ('0' + i).slice(-2) + '</option>').appendTo(selectHours);
        $('<option value="' + i +'">' + ('0' + i).slice(-2) + '</option>').appendTo(selectHoursFrom);
        if (i < 12) $('<option value="' + i +'">' + ('0' + 5 * i).slice(-2) + '</option>').appendTo(selectMinutes);
        if (i < 12) $('<option value="' + i +'">' + ('0' + 5 * i).slice(-2) + '</option>').appendTo(selectMinutesFrom);
      }
      $(selectHours).val(now.getHours());
      $(selectMinutes).val(Math.floor(now.getMinutes() / 5));
      $(selectHoursFrom).val(now.getHours());
      $(selectMinutesFrom).val(Math.floor(now.getMinutes() / 5));
      $('<span class="glyphicon glyphicon-time"></span>').appendTo(clocks);
      // When rider is adding his info
      if(addRiderDriver){
      riderDriverIsRegistered = true;
      // Header
      var headName = ('<p>Skrá <span class="ice">ís</span>Far</p>');
      // Location and Destination
      var locationInput = $('<input type="text" name="location" class="form-control locationInput" placeholder="Upphafsstaður">');
      var to = $('<span class="loc_to_des"> til </span>');
      var destinationInput= $('<input type="text" name="destination" class="destinationInput form-control" placeholder="Áfangastaður">');
      var errorLocation= $('<label id="errorLocation"></label>');   
      var errorDestination= $('<label id="errorDestination"></label>');
      $(locationInput).appendTo(place);
      $(to).appendTo(place);
      $(destinationInput).appendTo(place);
      $(errorLocation).appendTo(place);
      $(errorDestination).appendTo(place);
      changeForm =false;
      }
      // When driver is adding his info
      if(!addRiderDriver){
      riderDriverIsRegistered = false;
      // Header
      var headName = ('<p>Skrá <span class="ice">ís</span>Skutlara</p>');
      // Location
      var locationAreaInput= $('<input type="text" name="location" class="locationAreaInput" placeholder="Svæði, t.d. höfuðborgarsvæðið">');
      var errorlocationArea = $('<label id="errorLocationArea"></label>');
      $(locationAreaInput).appendTo(place);
      $(errorlocationArea).appendTo(place);
      // CarDescription
      var carDescription = $('<input type="text" name="carDescription" class="carDescription" placeholder="Lýsing á bíl">');
      var errorCar = $('<label id="errorCar"></label>');
      $(carDescription).appendTo(car);
      $(errorCar).appendTo(car);
      // Second Clock
      $(selectHoursFrom).appendTo(clocks);
      $(selectMinutesFrom).appendTo(clocks);
      $('<span>Til</span>').appendTo(clocks);
      changeForm =false;
      }
      // Happens to both forms
      $(headName).appendTo(headerName);
      $(selectHours).appendTo(clocks);
      $(selectMinutes).appendTo(clocks);
    }
      e.preventDefault();
  }

  //Ride information, run when Ok is clicked
  function postInfo(e) {
      // this er formið, $(this) býr til jQuery hlut af forminu
      var form = $(this);
      // Get input values
      var phoneElement = $('.phoneInput');
      var locationElement = $('.locationInput');
      var destinationElement = $('.destinationInput');
      var locationAreaElement = $('.locationAreaInput');
      var carElement = $('.carDescription');
      var phone = phoneElement.val();
      var location = locationElement.val();
      var destination = destinationElement.val();
      var locationArea = locationAreaElement.val();
      var carDescription = carElement.val();

      // Create timestamp from clocks
      var timestamp = new Date();
      var timestampFrom = new Date();
      timestamp.setHours($('.selectHours').val());
      timestamp.setMinutes($('.selectMinutes').val());
      timestampFrom.setHours($('.selectHoursFrom').val());
      timestampFrom.setMinutes($('.selectMinutesFrom').val());
      // Phonenumber to int
      var phoneNumber=parseInt(phone); 

      var valid = true;
      // Phone
      if (phone === '') {
          $("#errorPhone").text("* Vinsamlegast skráðu símanúmerið þitt");
          valid = false;
          phoneElement.addClass('invalid');
      } else {
          $("#errorPhone").text("");
          phoneElement.removeClass('invalid');   
        }
      // Location
      if (location === '') {
          $("#errorLocation").text("* Vinsamlegast settu inn upphafsstað");
          valid = false;
          locationElement.addClass('invalid');
      } else {
          $("#errorLocation").text("");
          locationElement.removeClass('invalid');
      }
      // Destination
      if (destination === '') {
          $("#errorDestination").text("* Vinsamlegast settu inn áfangastað");
          valid = false;
          destinationElement.addClass('invalid');
      } else {
          $("#errorDestination").text("");
          destinationElement.removeClass('invalid');
      }
      // Location Area
      if (locationArea === '') {
          $("#errorLocationArea").text("* Vinsamlegast settu inn keyrslusvæði");
          valid = false;
          locationAreaElement.addClass('invalid');
      } else {
          $("#errorLocationArea").text("");
          locationAreaElement.removeClass('invalid');
      }
      // Car
      if (carDescription === '') {
          $("#errorCar").text("* Vinsamlegast settu inn lýsingu á bíl");
          valid = false;
          carElement.addClass('invalid');
      } else {
          $("#errorCar").text("");
          carElement.removeClass('invalid');
      }

      // Shows result box with valid or unvalid
      if (valid){
          var accessTokenObj = localStorage.getItem('accessToken');
          var userId;
          if (accessTokenObj) {
            accessTokenObj = JSON.parse(accessTokenObj);
            if (accessTokenObj.timestamp < new Date().getTime()) {
              response.accessToken = '';
              localStorage.removeItem('accessToken');
            } else {
              userId = accessTokenObj.userId;
            }
          }         
          var riderdata= {
            phone_number:phoneNumber,
            price:$("#slider-range").slider("values", 0),
            number_of_people: $("input[type='radio'][name='rGroup']:checked").val(),
            location: location,
            destination: destination,
            message : $('.message').val(),
            user_id: userId,
            pickup_time_timestamp: timestamp.getTime()
          }
          console.log(riderdata);
          //Sends info to registerdriver
          if(riderDriverIsRegistered){
            $.ajax({
              type: 'POST',
              url: '/registerrider',
              data: riderdata,
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
          var driverdata= {
            phone_number:phoneNumber,
            low_price:$("#slider-range").slider("values", 0),
            high_price:$("#slider-range").slider("values", 1),
            number_of_people: $("input[type='radio'][name='rGroup']:checked").val(),
            place: locationArea,
            car_description: carDescription,
            message : $('.message').val(),
            start_time_timestamp: timestampFrom.getTime(),
            end_time_timestamp: timestamp.getTime(),
            user_id: userId
          }  
          console.log(driverdata);
          //Sends info to registerdriver
          if(!riderDriverIsRegistered ){
            $.ajax({
              type: 'POST',
              url: '/registerdriver',
              data: driverdata,
              statusCode: {
                201: function() {
                  console.log("WE GOT 201!");
                }
              },
              success: function(data) {
                  console.log("Skrá ísSkutl tókst");
              }
            }).fail(function() {
              console.log("Skrá ísSkutl mistókst");
            }); 
          }
          // Resets every form, close form and update init
          $('#form').get(0).reset();
          $(".register").stop().slideFadeToggle();
          $(".addContainer").on("click", init);
        }
      e.preventDefault();
  }

  function showRiders() {
    // Reset every form when showRiders/showDrivers is changed
    $('#form').get(0).reset();
    // Hægt að gera betur ----------------------------------
    $("#errorPhone").text("");
    $('.phoneInput').removeClass('invalid');
    // -----------------------------------------------------
    var addContainerText= $('.addContainerText');
    var containerText = $('Skrá Far');
    $(containerText).appendTo(addContainerText);

    addRiderDriver = true;
    changeForm = true;

    var userList = $('.userList');
    userList.empty();
    $('.selectDriver').removeClass('notActiveTab');
    $('.selectDriver').addClass('activeTab');
    $('.selectRider').addClass('notActiveTab');
    var riders = userData.ridersList;
    for (var i = 0; i < riders.length; i++) {
      var container = $('<div class="postContainer"></div>');
      var userHead = $('<div class="userHead"></div>');
      var userBody = $('<div class="userBody"></div>');
      var userInfo = $('<div class="userInfo"></div>');
      $('<a target="_blank" href="http://www.facebook.com/' + riders[i].rider.id + '"><img src="' +
        riders[i].rider.profilePictureUrl + '"></a>').appendTo(userInfo);
      $('<a target="_blank" class="userName" href="http://www.facebook.com/' + riders[i].rider.id + '">' +
        riders[i].rider.name + '</a>').appendTo(userHead);
      $('<p>Frá: ' + riders[i].currentLocation + '</p>').appendTo(userBody);
      $('<p>Til: ' + riders[i].destination + '</p>').appendTo(userBody);
      $('<p>Verðhugmynd: 4000 kr.</p>').appendTo(userBody);
      $('<p>Þarf far fyrir fjóra</p>').appendTo(userBody);
      
      userInfo.appendTo(userBody);
      userHead.appendTo(container);
      userBody.appendTo(container);
      container.appendTo(userList);
    }

  }

  function showDrivers() {
    // Reset every form when showRiders/showDrivers is changed
    $('#form').get(0).reset();
    // Hægt að gera betur ----------------------------------
    $("#errorPhone").text("");
    $('.phoneInput').removeClass('invalid');
    // -----------------------------------------------------

    addRiderDriver=false;
    changeForm = true;


    var userList = $('.userList');
    var drivers = userData.driversList;
    $('.selectDriver').addClass('notActiveTab');
    $('.selectRider').removeClass('notActiveTab');
    $('.selectRider').addClass('activeTab');
    userList.empty();
    for (var i = 0; i < drivers.length; i++) {
      var container = $('<div class="postContainer"></div>');
      var userHead = $('<div class="userHead"></div>');
      var userBody = $('<div class="userBody"></div>');
      var userInfo = $('<div class="userInfo"></div>');
      var driverInfo = $('<div class="driverInfoContainer clearfix"></div>');
      var time = $('<section class="driverInfo"></section>');
      var location = $('<section class="driverInfo"></section>');
      var carDescription = $('<section class="driverInfo"></section>');
      var money = $('<section class="driverInfo"></section>');
      var leftDriverInfo = $('<div></div>');
      var rightDriverInfo = $('<div></div>');
      var people = $('<section class="driverInfo"></section>');
      var phone = $('<section class="driverInfo"></section>');
      var message = $('<article></article>')
      
      for (var j = 0; j < drivers[i].driver.starRating; j++) {
        $('<span class="glyphicon glyphicon-star"></span>').appendTo(starContainer);
      }
      $('<a target="_blank" href="http://www.facebook.com/' + drivers[i].driver.id + '"><img src="' +
        drivers[i].driver.profilePictureUrl + '"></a>').appendTo(userInfo);
      $('<a target="_blank" class="userName" href="http://www.facebook.com/' + drivers[i].driver.id + '">' +
        drivers[i].driver.name + '</a>').appendTo(userHead);

      // Time
      $('<span class="glyphicon glyphicon-time"></span>').appendTo(time);
      $('<p>' + new Date(drivers[i].startDriving).toTimeString().substr(0, 5) +
        '-' + new Date(drivers[i].stopDriving).toTimeString().substr(0, 5) + '</p>').appendTo(time);

      // Location
      $('<span class="glyphicon glyphicon-map-marker"></span>').appendTo(location);
      $('<p>' + drivers[i].place + '</p>').appendTo(location);

      // Car description
      $('<i class="fa fa-car"></i>').appendTo(carDescription);
      $('<p>' + drivers[i].carDescription + '</p>').appendTo(carDescription);

      // Money
      $('<span class="glyphicon glyphicon-usd"></span>').appendTo(money);
      $('<p>' + drivers[i].lowPrice + '-' + drivers[i].highPrice + ' kr.</p>').appendTo(money);

      // People
      $('<div class="passengersContainer"><i class="fa fa-user-times">' + drivers[i].numberOfPeople + '</i></div>').appendTo(people);

      // Phone
      $('<span class="glyphicon glyphicon-phone"></span>').appendTo(phone);
      $('<p>' + (drivers[i].driver.phonenumber || "5812345") + '</p>').appendTo(phone);

      // Message
      $('<p>' + drivers[i].message +'</p>').appendTo(message);

      
      location.appendTo(leftDriverInfo);
      carDescription.appendTo(leftDriverInfo);
      time.appendTo(leftDriverInfo);
      money.appendTo(rightDriverInfo);
      people.appendTo(rightDriverInfo);
      phone.appendTo(rightDriverInfo);
      userInfo.appendTo(userBody);
      leftDriverInfo.appendTo(driverInfo);
      rightDriverInfo.appendTo(driverInfo);
      driverInfo.appendTo(userInfo)
      message.appendTo(userBody);
      userHead.appendTo(container);
      userBody.appendTo(container);
      container.appendTo(userList);

    }
  }

  function textBoxKeycount(){
    // Makes max number of keys in textbox
    $('textarea').keydown(function(e) {
      this.value = this.value.substr(0, 256);
      //fjoldi = $(this).val().length;
      //$('#eftir').text((256 - fjoldi) + ' eftir.');
    });
  }
  // Takmörkum innslátt í reiknireit við tölur og '.'
  function limitToNumbers (e) {
    var c = e.keyCode;

    if (!((48 <= c && c <= 57) || c === 46)) {
      e.preventDefault();
  }
}
  // Price slider
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
  $.fn.slideFadeToggle  = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
  };

  function init() {
    $('.selectRider').on('click', showDrivers);
    $('.selectDriver').on('click', showRiders);
    $('.submitRegister').on('click', postInfo);
    $(".addButton").on("click", showRegisterForm);
    // Max keyCount
    textBoxKeycount();
    // RiderInfo price slider
    priceSlider();
    // getDriverRiderList
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

