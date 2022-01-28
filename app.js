const fireBaseURL = "https://ecommerce-ap-34f87-default-rtdb.firebaseio.com/";
const jsonEXT = ".json";

(function(){
    // /* this code is only to test scaleability (only keep one uncommented) */
    // let currentshoe= "0"; // let currentshoe= 1; let currentshoe= 2;
    // window.localStorage.setItem('currentshoe', currentshoe);
    
    

    /* Buttons */
    const $addBtn = $('#plus-btn');
    const $minusBtn = $('#minus-btn');
    const $btnImage1 = $('#btn-image1');
    const $btnImage2 = $('#btn-image2');
    const $btnImage3 = $('#btn-image3');
    const $btnImage4 = $('#btn-image4');

    
    /* quantity add and subtract counter */
    let quantity = 0;

    (function(){
        let currentshoe = window.localStorage.getItem('currentshoe');
        //console.log(currentshoe);
        $.ajax({
            type: "GET",
            url: `${fireBaseURL}${jsonEXT}`,
            success:function(data){
                //console.log(data);
                let shoeData = {...data};
                //console.log(shoeData.shoes);
                //console.log(shoeData.shoes[0].brand);

                // iterating through the data 
                //Object.values(shoeData).forEach(shoe=>{
                //     console.log(shoe, shoeData.shoe,"logging one shoe at a time");
                //     Object.values(shoe).forEach(value =>{
                //         if(currentshoe==shoe){
                //             console.log(currentshoe); 
                //             console.log(value.brand, "logging each brand");
                //         }
                //     })   
                // });

                   /* display images in gallery box*/
                    let galleryBox = `
                        <div class="img-gallery1" id="img-gallery1">
                            <button class="btn-image" id="btn-image1">    
                                <img class="image1" src="`+shoeData.shoes[0].image1+`" alt="image1">
                            </button>
                        </div>
                        <div class="img-gallery2" id="img-gallery2">
                            <button class="btn-image" id="btn-image2">
                                <img class="image2"src="`+shoeData.shoes[0].image2+`" alt="image1">
                            </button>    
                        </div>
                        <div class="img-gallery3" id="img-gallery3">
                            <button class="btn-image" id="btn-image3">
                                <img class="image3" id="btn-image3" src="`+shoeData.shoes[0].image3+`" alt="image1">
                            </button>
                            </div>
                        <div class="img-gallery4" id="img-gallery4">
                            <button class="btn-image" id="btn-image4">
                                <img class="image4" id="btn-image4" src="`+shoeData.shoes[0].image4+`" alt="image1">
                            </button>    
                        </div>
                    `;
                    $('#gallery').append(galleryBox);

                    let mainImageBox=`

                    `;

                    /* display shoe company */
                    let shoeCompanyBox = `
                        <p>`+shoeData.shoes[0].brand+`</p>
                    `;
                    $('#company').append(shoeCompanyBox);

                    /*display shoe name info */
                    let shoeNameBox = `
                        <p>`+shoeData.shoes[0].name+`</p>
                    `;
                    $('#shoe-name').append(shoeNameBox);

                    /* display shoe description */
                    let shoeDescriptionBox = `
                        <p>`+shoeData.shoes[0].description+`</p>
                    `;
                    $('#shoe-description').append(shoeDescriptionBox);

                    /*display discount price*/
                    let shoeDiscountBox = `
                        <p class="discount-text" id="discount-text">`+shoeData.shoes[0].discountPercentage+`%</p>
                    `;
                    $('#discount-amount').append(shoeDiscountBox);

                    /*display origional price*/
                    let shoeOriginalPriceBox = `
                        <p class="original-price-text" id="original-price-text">$`+shoeData.shoes[0].origionalPrice+`</p>
                    `;
                    $('#original-amount').append(shoeOriginalPriceBox);

                    /* Calculate and display the discounted price*/
                    let discountPriceCalculated= shoeData.shoes[0].origionalPrice*(shoeData.shoes[0].discountPercentage/100);
                    let discountedPriceBox = `
                        <p class="discounted-price-text" id="discounted-price-text">$`+discountPriceCalculated+`</p>
                    `;
                    $('#discount-price').append(discountedPriceBox);

                    /*display quantity in shopping-btns container*/
                    let quantityMainBox = `
                        <p class="prod-quantity" id="prod-quantity">`+0+`</p>
                    `;
                    $('#quantity-num').append(quantityMainBox);
            },
            error:function(error){
                console.log(error);
            }
        })

    })();

    $addBtn.click(function(e){
        e.preventDefault();

        quantity++;
        console.log(quantity);
        document.getElementById("prod-quantity").innerHTML=quantity;
    })
    $minusBtn.click(function(e){
        e.preventDefault();

        quantity--;
        console.log(quantity);
        document.getElementById("prod-quantity").innerHTML=quantity;
    })

    $btnImage1.click(function(e){

    })
    $btnImage2.click(function(e){

    })
    $btnImage3.click(function(e))

})();

