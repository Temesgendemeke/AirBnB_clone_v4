$(document).ready(function() {

    let checkedAmenities = [];

    function updateCheckedAmenities() {

        $(".amenities h4").text(checkedAmenities);
    }

    $("input[type='checkbox']").change(function() {
        let amenityID = $(this).data("data-id"); 
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

    $.ajax({
        url:'http://0.0.0.0:5001/api/v1/status/',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            if (data.status === "OK")
            {
                $('div#api_status').addClass('available')
            }
            else{
                $('div#api_status').removeClass('available')
            }
        },
      });

      $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        dataType: 'json',
        success: (data)=>{


        }
      })
});


