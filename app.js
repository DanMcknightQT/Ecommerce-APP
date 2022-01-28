const fireBaseURL = "https://ecommerce-ap-34f87-default-rtdb.firebaseio.com/";
const jsonEXT = ".json";

/* Buttons */
const $addBtn = $('#plus-btn');
const $minusBtn = $('#minus-btn');
const $AddToCartBtn = $('#add-to-cart');

/* quantity add and subtract counter */
let quantity = 0;
let cartQuantity = 0;

(function(){
    

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


                    /* display shoe company */
                    let shoeCompanyBox = `
                        <p>`+shoeData.shoes[0].brand+`</p>
                    `;
                    $('#company').append(shoeCompanyBox);

                    /*display shoe name info */
                    let shoeNameBox = `
                        <p id="name">`+shoeData.shoes[0].name+`</p>
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

                    /* cart window*/
                    let cartThumbnail=`
                    <img class="cart-img-thumbnail" src="/images/image-product-1-thumbnail.jpg" alt="img">
                    `;
                    $('#cart-img').append(cartThumbnail);

                    let itemName=`
                        <p class="cart-item-name-text" id="cart-item-name-text">`+shoeData.shoes[0].name+`</p>
                    `;
                    $('#cart-item-name').append(itemName);

                    let itemPrice=`
                        <p class="cart-price-text" id="cart-price-text">$`+discountPriceCalculated+`</p>
                    `;
                    $('#cart-price').append(itemPrice);

                    
            },
            error:function(error){
                console.log(error);
            }
        })
    
    let mainImageBox =`
        <img class="selected-img" src="/images/image-product-1.jpg" alt="img">
        <button class="last-image" id="last-image" onclick="lastSlideImage()">
            <img class="last-slide-btn" id="last-slide-btn"  src="/images/icon-previous.svg" alt="prev">
        </button>
        <button class="next-image" id="next-image" onclick="nextSlideImage()">
            <img class="next-slide-btn" id="next-slide-btn" src="/images/icon-next.svg" alt="next">
        </button>`;
    $('#main-image').append(mainImageBox);

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
    $AddToCartBtn.click(function(e){
        e.preventDefault();
        cartQuantity+=quantity;
        //function to reset product quantity in shopping buttons after add to cart is clicked
        function qtyReset(){
            quantity=0;
            document.getElementById("prod-quantity").innerHTML=quantity;
        }
        qtyReset();
        document.getElementById("cartQty").innerHTML=cartQuantity; 
    })

})();

/*functions for desktopview gallery and main image production*/
function img1(){   
    let largeImgBox1 =`
        <img class="selected-img" src="/images/image-product-1.jpg" alt="img">
    `;
    $('#main-image').empty();
    $('#main-image').append(largeImgBox1);
    $('#main-image').append(slideBtns);
    currentImgMobile = 0;
}
function img2(){ 
    let largeImgBox2 =`
        <img class="selected-img" src="/images/image-product-2.jpg" alt="img">
    `;
    $('#main-image').empty();
    $('#main-image').append(largeImgBox2);
    $('#main-image').append(slideBtns);
    currentImgMobile = 1;
}
function img3(){
    let largeImgBox3 =`
        <img class="selected-img" src="/images/image-product-3.jpg" alt="img">
     `;
    $('#main-image').empty();
    $('#main-image').append(largeImgBox3);
    $('#main-image').append(slideBtns);
    currentImgMobile = 2;
}
function img4(){
    let largeImgBox4 =`
        <img class="selected-img" src="/images/image-product-4.jpg" alt="img">
    `;
    $('#main-image').empty();
    $('#main-image').append(largeImgBox4);
    $('#main-image').append(slideBtns);
    currentImgMobile = 3;
}


/*functions for mobile view button activated slide show*/
let currentImgMobile = 0;
let mobileImg1 = `
    <img class="selected-img" src="/images/image-product-1.jpg" alt="img">`;
let mobileImg2 = `
    <img class="selected-img" src="/images/image-product-2.jpg" alt="img">`;
let mobileImg3 = `
    <img class="selected-img" src="/images/image-product-3.jpg" alt="img">`;
let mobileImg4 = `
    <img class="selected-img" src="/images/image-product-4.jpg" alt="img">`;
let slideBtns=`
    <button class="last-image" id="last-image" onclick="lastSlideImage()">
        <img class="last-slide-btn" id="last-slide-btn"  src="/images/icon-previous.svg" alt="prev">
    </button>
    <button class="next-image" id="next-image" onclick="nextSlideImage()">
        <img class="next-slide-btn" id="next-slide-btn" src="/images/icon-next.svg" alt="next">
    </button>`;
function lastSlideImage(){
    if(currentImgMobile>0){
        currentImgMobile--;
    }else{
        currentImgMobile = 3;
    }
    displayMobileImg();
}
function nextSlideImage(){
    if(currentImgMobile<3){
        currentImgMobile++;
    } else{
        currentImgMobile = 0;
    }
    displayMobileImg();
}
function displayMobileImg(){
    switch(currentImgMobile){
        case 0:
            $('#main-image').empty();
            $('#main-image').append(mobileImg1);
            $('#main-image').append(slideBtns);
            break;
        case 1:
            $('#main-image').empty();
            $('#main-image').append(mobileImg2);
            $('#main-image').append(slideBtns);
            break;
        case 2:
            $('#main-image').empty();
            $('#main-image').append(mobileImg3);
            $('#main-image').append(slideBtns);
            break;
        case 3:
            $('#main-image').empty();
            $('#main-image').append(mobileImg4);
            $('#main-image').append(slideBtns);
            break;
    }
}

// Functions to open and close navigation bar drop down menu overlay
function openNav() {
    document.getElementById("nav-overlay").style.width = "100%";
} 
function closeNav() {
    document.getElementById("nav-overlay").style.width = "0%";
}

//Functions to open and close cart window
function openCartWindow() {
    let cartWindowelement = document.getElementById('cart-window');
    cartWindowelement.classList.remove('hidden');
    
    console.log(cartQuantity, "cart qty");
    //populating cart window information
    if(cartQuantity==0){     
        let emptyCart = `
            <p class="empty-text">Your cart is empty.</p>
        `;
        $('#cart-empty').empty();
        $('#cart-empty').append(emptyCart);

        let cartElement=document.getElementById("cart-info");
        cartElement.className += " hidden";
        let emptyCartElement=document.getElementById("cart-checkout");
        emptyCartElement.className += " hidden";
    }else{
        
        let price= 125;
        let cartTotal = price*cartQuantity;
        let cartTotalPrice=`
            <p class="cart-total-text" id="cart-total-text">$`+cartTotal+`</p>
        `;
        $('#cart-total').append(cartTotalPrice);
        
    }

} 
function closeCartWindow() {
    let cartWindowelement = document.getElementById('cart-window');
    cartWindowelement.className += (' hidden');
}

//Functions to open and close desktop view lightbox
function openLightBox() {
    document.getElementById("lightBox").style.width = "100%";
}
function closeLightBox() {
    document.getElementById("lightBox").style.width = "0%";
}

