/**
 * Created by olafurorn on 10/6/15.
 */
function getDriverRiderList() {
    $.ajax({
        type: 'GET',
        url: '/driverrider',
        data: response,
        success: function(data) {
            console.log("Data from /driverrider endpoint: " + data);
        }
    });
}