const fireBaseURL = "https://ecommerce-ap-34f87-default-rtdb.firebaseio.com/";
const jsonEXT = ".json";

(function(){
    $.ajax({
        type: "GET",
        url: `${fireBaseURL}${jsonEXT}`,
        success:function(data){
            // console.log(data);
            let shoeData = {...data};
            console.log(shoeData.shoes);
            console.log(shoeData.shoes[0].brand);


            /* display images in gallery box*/
            let galleryBox = `
            <div class="img-gallery1" id="img-gallery">
                <img class="image1" id="image1" src="`+shoeData.shoes[0].image1+`" alt="image1">
            </div>
            <div class="img-gallery2" id="img-gallery">
                <img class="image2" id="image2" class="" src="`+shoeData.shoes[0].image2+`" alt="image1">
            </div>
            <div class="img-gallery3" id="img-gallery">
                <img class="image3" id="image3" src="`+shoeData.shoes[0].image3+`" alt="image1">
            </div>
            <div class="img-gallery4" id="img-gallery">
                <img class="image4" id="image3" src="`+shoeData.shoes[0].image4+`" alt="image1">
            </div>
            `;
            $('#gallery').append(galleryBox);

            /* display shoe company */
            let shoeCompanyBox = `
                <p>`+shoeData.shoes[0].brand+`</p>
            `;
            $('#company').append(shoeCompanyBox);

            /*display shoe name info */
            let shoeNameBox = `
                <p class="price-text">`+shoeData.shoes[0].name+`</p>
            `;
            $('#shoe-name').append(shoeNameBox);

            /* display shoe description */
            let shoeDescriptionBox = `
                <p class="price-text">`+shoeData.shoes[0].description+`</p>
            `;
            $('#shoe-description').append(shoeDescriptionBox);

            /*display discount price*/
            let shoeDiscountBox = `
                <p class="price-text">`+shoeData.shoes[0].discountPercentage+`%</p>
            `;
            $('#discount-amount').append(shoeDiscountBox);

            /*display origional price*/
            let shoeOriginalPriceBox = `
                <p class="price-text">$`+shoeData.shoes[0].origionalPrice+`</p>
            `;
            $('#original-amount').append(shoeOriginalPriceBox);



        },
        error:function(error){
            console.log(error);
        }
    })

})();

