const fireBaseURL = "https://ecommerce-ap-34f87-default-rtdb.firebaseio.com/";
const jsonEXT = ".json";

/* Buttons */
const $addBtn = $('#plus-btn');
const $minusBtn = $('#minus-btn');

(function(){
    
    /* quantity add and subtract counter */
    let quantity = 0;

    (function(){
        $.ajax({
            type: "GET",
            url: `${fireBaseURL}${jsonEXT}`,
            success:function(data){
                let shoeData = {...data};

                   /* display images in gallery box*/
                    let galleryBox = `
                        <div class="img-gallery1" id="img-gallery1">
                            <button class="btn-image" id="btn-image1" onclick="img1()">    
                                <img class="image1" src="`+shoeData.shoes[0].image1+`" alt="image1">
                            </button>
                        </div>
                        <div class="img-gallery2" id="img-gallery2">
                            <button class="btn-image" id="btn-image2" onclick="img2()">
                                <img class="image2"src="`+shoeData.shoes[0].image2+`" alt="image1">
                            </button>    
                        </div>
                        <div class="img-gallery3" id="img-gallery3">
                            <button class="btn-image" id="btn-image3" onclick="img3()">
                                <img class="image3" id="btn-image3" src="`+shoeData.shoes[0].image3+`" alt="image1">
                            </button>
                            </div>
                        <div class="img-gallery4" id="img-gallery4">
                            <button class="btn-image" id="btn-image4" onclick="img4()">
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
        if(quantity>=1){
            quantity--;
            document.getElementById("prod-quantity").innerHTML=quantity;
        }
    })

})();

/*functions for desktopview gallery and main image production*/
function img1(){   
    let largeImgBox1 =`
        <img class="selected-img" src="/images/image-product-1.jpg" alt="img">
    `;
    $('#main-image').empty();
    $('#main-image').append(largeImgBox1);
}
function img2(){ 
    let largeImgBox2 =`
        <img class="selected-img" src="/images/image-product-2.jpg" alt="img">
    `;
    $('#main-image').empty();
    $('#main-image').append(largeImgBox2);
}
function img3(){
    let largeImgBox3 =`
        <img class="selected-img" src="/images/image-product-3.jpg" alt="img">
     `;
    $('#main-image').empty();
    $('#main-image').append(largeImgBox3);
}
function img4(){
    let largeImgBox4 =`
        <img class="selected-img" src="/images/image-product-4.jpg" alt="img">
    `;
    $('#main-image').empty();
    $('#main-image').append(largeImgBox4);
}

