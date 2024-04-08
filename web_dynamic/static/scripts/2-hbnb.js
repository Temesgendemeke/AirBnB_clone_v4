$(document).ready(function() {
    let checkedAmenities = [];

    function updateCheckedAmenities() {
        $(".amenities h4").text("Amenities: " + checkedAmenities.join(', '));
    }

    $("input[type='checkbox']").change(function() {
        let amenityID = $(this).data("id");
        if ($(this).prop("checked")) {
            checkedAmenities.push(amenityID);
        } else {
            let index = checkedAmenities.indexOf(amenityID);
            if (index !== -1) {
                checkedAmenities.splice(index, 1);
            }
        }
        updateCheckedAmenities();
    });


    $.get('http://0.0.0.0:5001/api/v1/status/', function(data) {
        if (data.status === "OK") {
            $('div#api_status').addClass('available');
        } else {
            $('div#api_status').removeClass('available');
        }
    });
});

