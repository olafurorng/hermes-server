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
      // In both forms empty and create place, car, clock
      var place = $('.place');
      $(place).empty();
      var locationIcon = $('<span class="glyphicon glyphicon-map-marker"></span>');
      $(locationIcon).appendTo(place);
      var car = $('.car');
      $(car).empty();
      // Clock
      var now = new Date();
      now.setMinutes(now.getMinutes() + 30); // Default is 30 minutes after you decide to post
      var clocks = $('.clocks');
      var selectHours = $('<select class="selectHours"></select>');
      var selectMinutes= $('<select class="selectMinutes"></select>');
      // Second clock
      var selectHoursTo = $('<select class="selectHoursTo"></select>');
      var selectMinutesTo= $('<select class="selectMinutesTo"></select>');
      $(clocks).empty();
      for (var i = 0; i < 24; i++) {
        $('<option value="' + i +'">' + ('0' + i).slice(-2) + '</option>').appendTo(selectHours);
        $('<option value="' + i +'">' + ('0' + i).slice(-2) + '</option>').appendTo(selectHoursTo);
        if (i < 12) $('<option value="' + i +'">' + ('0' + 5 * i).slice(-2) + '</option>').appendTo(selectMinutes);
        if (i < 12) $('<option value="' + i +'">' + ('0' + 5 * i).slice(-2) + '</option>').appendTo(selectMinutesTo);
      }
      $(selectHours).val(now.getHours());
      $(selectMinutes).val(Math.floor(now.getMinutes() / 5)*5);
      $(selectHoursTo).val(now.getHours());
      $(selectMinutesTo).val(Math.floor(now.getMinutes() / 5)*5);
      $('<span class="glyphicon glyphicon-time"></span>').appendTo(clocks);
      // Happens to both forms
      $(selectHours).appendTo(clocks);
      $(selectMinutes).appendTo(clocks);
      // When rider is adding his info
      if(addRiderDriver){
        riderDriverIsRegistered = true;
        // Location and Destination
        var locationInput = $('<input type="text" name="location" class="form-control locationInput" maxlength="20" placeholder="Upphafsstaður">');
        var destinationInput= $('<input type="text" name="destination" class="form-control destinationInput" maxlength="20" placeholder="Áfangastaður">');
        var errorLocation= $('<label id="errorLocation"></label>');   
        var errorDestination= $('<label id="errorDestination"></label>');
        $(car).hide();
        $(locationInput).appendTo(place);
        $(errorLocation).appendTo(place);
        var secondLocationIcon = $('<span class="glyphicon glyphicon-map-marker"></span>');
        $(secondLocationIcon).appendTo(place);
        $(destinationInput).appendTo(place);
        $(errorDestination).appendTo(place);
        changeForm =false;
      }
      // When driver is adding his info
      if(!addRiderDriver){
        riderDriverIsRegistered = false;
        // Location
        var locationAreaInput= $('<input type="text" name="location" class="form-control locationAreaInput" maxlength="20" placeholder="Svæði, t.d. höfuðborgarsvæðið">');
        var errorlocationArea = $('<label id="errorLocationArea"></label>');
        $(locationAreaInput).appendTo(place);
        $(errorlocationArea).appendTo(place);
        // CarDescription
        var carLogo = $('<i class="fa fa-car"></i>');
        var carDescription = $('<input type="text" name="carDescription" class="form-control carDescription" maxlength="20" placeholder="Lýsing á bíl">');
        var errorCar = $('<label id="errorCar"></label>');
        $(car).show();
        $(carLogo).appendTo(car);
        $(carDescription).appendTo(car);
        $(errorCar).appendTo(car);
        // Second Clock
        $('<span class="clockBetween">Til</span>').appendTo(clocks);
        $(selectHoursTo).appendTo(clocks);
        $(selectMinutesTo).appendTo(clocks);
        changeForm =false;
      }
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
      var timestampTo = new Date();
      timestamp.setHours($('.selectHours').val());
      timestamp.setMinutes($('.selectMinutes').val() * 5);
      timestampTo.setHours($('.selectHoursTo').val());
      timestampTo.setMinutes($('.selectMinutesTo').val() * 5);
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
          var data = {
            phone_number: phoneNumber,
            price: $("#slider-range").slider("values", 0),
            low_price: $("#slider-range").slider("values", 0),
            high_price:$("#slider-range").slider("values", 1),
            number_of_people: $("input[type='radio'][name='rGroup']:checked").val(),
            place: locationArea,
            location: location,
            destination: destination,
            message : $('.message').val(),
            car_description: carDescription,
            user_id: userId,
            pickup_time_timestamp: timestamp.getTime(),
            start_time_timestamp: timestamp.getTime(),
            end_time_timestamp: timestampTo.getTime()
          }
          console.log(data);
          //Sends info to registerdriver
          var url = riderDriverIsRegistered ? '/registerrider' : '/registerdriver';
          $.ajax({
            type: 'POST',
            url: url,
            data: data,
            statusCode: {
              201: function() {
                console.log("WE GOT 201!");
              }
            },
            success: function(data) {
                console.log("Skrá ísFar tókst");
                getData();
            }
          }).fail(function() {
            console.log("Skrá ísFar mistókst");
          });
          // Resets every form, close form
          $('#form').get(0).reset();
          $(".register").slideUp();
        }
      e.preventDefault();
  }

  function showList(type) {
    // Reset every form when showRiders/showDrivers is changed
    $('#form').get(0).reset();
    // Hægt að gera betur ----------------------------------
    $("#errorPhone").text("");
    $('.phoneInput').removeClass('invalid');
    // -----------------------------------------------------

    addRiderDriver = type === 'driver';
    changeForm = true;
    var data = (type === 'driver') ? userData.driversList : userData.ridersList;
    var userList = $('.userList');
    var drivers = userData.driversList;
    userList.empty();
    for (var i = data.length - 1; i >= 0; i--) {
      var container = $('<div class="postContainer"></div>');
      var userHead = $('<div class="userHead"></div>');
      var userBody = $('<div class="userBody"></div>');
      var userInfo = $('<div class="userInfo"></div>');
      var driverInfo = $('<div class="driverInfoContainer clearfix"></div>');
      var time = $('<section class="driverInfo"></section>');
      var location = $('<section class="driverInfo"></section>');
      var topRight = $('<section class="driverInfo"></section>');
      var money = $('<section class="driverInfo"></section>');
      var leftUserInfo = $('<div></div>');
      var rightUserInfo = $('<div></div>');
      var people = $('<section class="driverInfo"></section>');
      var phone = $('<section class="driverInfo"></section>');
      var message = $('<article></article>');
      var timeText = (type === 'rider') ? new Date(data[i].pickUpDate).toTimeString().substr(0, 5): 
        new Date(data[i].startDriving).toTimeString().substr(0, 5) +
        '-' + new Date(data[i].stopDriving).toTimeString().substr(0, 5);
      var locationText = (type === 'rider') ? data[i].currentLocation + '&rarr;' + data[i].destination : data[i].place;
      var moneyText = (type === 'rider') ? data[i].price : data[i].lowPrice + '-' + data[i].highPrice;
      
      $('<a target="_blank" class="imgContainer" href="http://www.facebook.com/' + data[i].user.id + 
        '" style="background-image: url(' + data[i].user.profilePictureUrl + ')"></a>').appendTo(userInfo);
      $('<a target="_blank" class="userName" href="http://www.facebook.com/' + data[i].user.id + '">' +
        data[i].user.name + '</a>').appendTo(userHead);

      // Time
      $('<span class="glyphicon glyphicon-time"></span>').appendTo(time);
      $('<p>' + timeText + '</p>').appendTo(time);

      // Location
      $('<span class="glyphicon glyphicon-map-marker"></span>').appendTo(location);
      $('<p>' + locationText + '</p>').appendTo(location);

      // Top right
      if (type === 'driver') {
        $('<i class="fa fa-car"></i>').appendTo(topRight);
        $('<p>' + data[i].carDescription + '</p>').appendTo(topRight);
      } else {
        // $('<span class="glyphicon glyphicon-map-marker"></span>').appendTo(topRight);
         // $('<p></p>').appendTo(topRight);
      }

      // Money
      $('<span class="glyphicon glyphicon-usd"></span>').appendTo(money);
      $('<p>' + moneyText + ' kr.</p>').appendTo(money);

      // People
      $('<div class="passengersContainer"><i class="fa fa-user-times">' + data[i].numberOfPeople + '</i></div>').appendTo(people);

      // Phone
      $('<span class="glyphicon glyphicon-phone"></span>').appendTo(phone);
      $('<p>' + (data[i].phoneNumber || "5812345") + '</p>').appendTo(phone);

      // Message
      $('<p>' + data[i].message +'</p>').appendTo(message);

      
      location.appendTo(leftUserInfo);
      topRight.appendTo(rightUserInfo);
      time.appendTo(leftUserInfo);
      money.appendTo(leftUserInfo);
      people.appendTo(rightUserInfo);
      phone.appendTo(rightUserInfo);
      userInfo.appendTo(userBody);
      leftUserInfo.appendTo(driverInfo);
      rightUserInfo.appendTo(driverInfo);
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

  function getData() {
    $.ajax({
      type: 'GET',
      url: '/driverrider',
      success: function(data) {
        console.log('success');
        console.log(data);
        userData = data;
        showList('driver');
      }
    }).fail(function() {
      console.log('fail');
      var userList = $('.userList');
      $('.pickContainer').hide();
      $('<section class="wrong"><h3>Úps. Þetta er vandræðalegt.</h3><p>Eitthvað fór úrskeiðis</p>' +
        '<p>Vinsamlegast reyndu aftur</p></section>').appendTo(userList);
    });
  }

  function init() {
    $('.selectType').on('click', function() {
      $('.selectType').addClass('notActiveTab');
      $('.selectType').removeClass('activeTab');
      $(this).removeClass('notActiveTab');
      $(this).addClass('activeTab');
      showList(this.dataset.type); 
    });
    $('.submitRegister').on('click', postInfo);
    $(".addButton").on("click", showRegisterForm);
    // Max keyCount
    textBoxKeycount();
    // RiderInfo price slider
    priceSlider();
    // getDriverRiderList
    getData();
  }
  return {
    init: init
  };
})();

$(document).ready(function() {
  Main.init();
});

