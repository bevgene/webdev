/**
 * Created by bruter on 20/03/14.
 */

jQuery(function($) {
    $("#search-product-section").hide();
    $("#inputSearchSlider").slider({}).on('slide', function(e) {
        document.getElementById('inputSearchSliderCurrMinPrice').value = e.value[0];
        document.getElementById('inputSearchSliderCurrMaxPrice').value = e.value[1];
    });

    document.getElementById('')

    //Closure part:
    //Compile for HTML from the template:

    var source = $.trim($('#featured-products-template').html());
    var compiledTemplate = Handlebars.compile(source);
    var appHeadingContainer = $("#app-heading");


    function showItems(dataUrl) {
        var data;
        console.log('dataUrl=', dataUrl);
        //load data json and create new list:
        $.getJSON(dataUrl, function(data) {

            //set current heading:
//            headingContainer.text(data.heading);

            //vanish previous content, i.e. set content '', empty string and append compiled template
            var html = compiledTemplate(data);
            $('ul#items-list').append(html);
        }).fail(function(jqXHR, textStatus) {
            //error message:
            var message = 'Error occurred: ';
            message += 'Status code: ' + jqXHR.status;
            if (textStatus === 'parsererror') {
                //badly formatted json:
                message += ' Requested JSON parse had failed.';
            } else if (textStatus === 'abort') {
                // network problems:
                message += ' Ajax request was aborted.';
            }
            // alert div styled by Bootstrap CSS classes:
            var errorAlert = '<div class="alert alert-warning alert-dismissable col-xs-12">' +
                message + '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button> '
                '</div>';

            // add div with error message after app-heading HTML element
            $('#app-heading').after(errorAlert);
        });
    }



    // show featured products list on-load:
    showItems("assets/data/featured-products.json");

    // action on Submit button click event:
    $('#get-data-btn').on('click', function(e) {
        // prevent from button to submit forms:
        e.preventDefault();
        // hide the featured product carousel with a sliding motion:
        $('#featured-product-carousel').slideUp('slow', function() {
            $("#search-product-section").show();
            showItems("assets/data/search-results.json");
        });

    });

});
