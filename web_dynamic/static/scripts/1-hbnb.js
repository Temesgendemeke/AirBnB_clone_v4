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
});
