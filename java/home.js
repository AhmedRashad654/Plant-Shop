////////////start slider ///////////////////
    var slider = document.querySelector( ".slider" );
    var slide = document.querySelectorAll( ".slide" );
    var next = document.getElementById( "next" );
    var prev = document.getElementById( "prev" );

var clientwidth = slide[ 0 ].clientWidth;
    var counter = 0;
    next.onclick = function () {
        if ( counter < slide.length - 1 ) {
            counter++;
            slider.style.transform = `translateX(-${counter * clientwidth}px)`
        }
    }
    prev.onclick = function () {
        if ( counter > 0 ) {
            counter--;
            slider.style.transform = `translateX(-${counter * clientwidth}px)`
        }
    }
    ////////////end slider ///////////////////

    // localStorage.clear()

    ///////////start shopping-card///////////
    var shoppingcart = document.querySelector( ".shopping-cart" );
    var mark = document.getElementById( "mark" );
    var card = document.getElementById( "card" );
    mark.onclick = function () {
        shoppingcart.style.right = "-1000px"
    }
    card.onclick = function () {
        shoppingcart.style.right = "0"
    }
    //////////end card/////////////////////

    //////////start add card to card///////////


    var proplan = document.querySelectorAll( ".proplan" );
    var alladdcard = document.querySelectorAll( ".groupimgicon i" );
    var productshopping = document.querySelector( ".product-shopping" );
    var im = document.querySelectorAll( ".im" );
    var h4 = document.querySelectorAll( ".h4" );
    var p = document.querySelectorAll( ".p" );
    var idd = document.querySelectorAll( ".id" );
    var h6 = document.querySelectorAll( ".h6" );
    var total = document.getElementById( "total" );
    var bef = document.getElementById( "bef" );
    
    var plants = [
        {
            id: 0,
            name: "Birdnest Japanese",
            namelast: "Air purifying",
            salary: 84.90,
            image: "plants-ecommerce-product-featured-img-8-600x900"
        }, {
            id: 1,
            name: "Hoya Obovatum",
            namelast: "Indoor Plants",
            salary: 64.00,
            image: "plants-ecommerce-product-featured-img-5-600x900"
        }, {
            id: 2,
            name: "Monstera Deliciosa",
            namelast: "Air purifying",
            salary: 224.90,
            image: "7"
        }, {
            id: 3,
            name: "Calathea Beauty Star",
            namelast: "Herbs seeds",
            salary: 79.90,
            image: "5"
        }
        , {
            id: 4,
            name: "Bird of Paradise",
            namelast: "Ceramic pots",
            salary: 249.90,
            image: "6"
        }
        , {
            id: 5,
            name: "Zz Plants",
            namelast: "Herbs seeds",
            salary: 124.90,
            image: "9"
        }
      
    ]
    // localStorage.clear()
    for ( var i = 0; i < plants.length; i++ ) {
        idd[ i ].innerHTML = plants[ i ].id
        im[ i ].src = `image/${plants[ i ].image}.jpg`;
        h4[ i ].innerHTML = plants[ i ].name;
        h6[ i ].innerHTML = plants[ i ].namelast
        p[ i ].innerHTML = parseFloat( plants[ i ].salary ).toFixed( 2 );
    }
    // console.log()
var arrprod;
if ( localStorage.getItem( "product" ) ) {
             arrprod = JSON.parse( localStorage.getItem( "product" ) )
        displayproduct()
    } else {
        arrprod = []
        }

        
    var numberofproduct
    var aft = document.getElementById( "aft" );
    if ( localStorage.getItem( "count" ) ) {
        numberofproduct = localStorage.getItem( "count" );
        aft.innerHTML = localStorage.count;
        displayproduct()
    } else {
        numberofproduct = 0;
}

var Subtotal;
    if ( localStorage.getItem( "tprice" ) ) {
        Subtotal = parseFloat( localStorage.getItem( "tprice" ) );
        total.innerHTML = ( Subtotal.toFixed( 2 ) ) + "$";
        bef.innerHTML = ( Subtotal.toFixed( 2 ) ) + "$";
    } else {
        Subtotal = 0;
}
    alladdcard.forEach( ( element ) => {
        element.addEventListener( "click", function () {
            var elementlast = element.parentElement.parentElement
            console.log()
            const idplane = elementlast.querySelector( '.id' ).innerText
            const planname = elementlast.querySelector( 'h4' ).innerText
            const planprice = elementlast.querySelector( 'p' ).innerText
            const planimage = elementlast.querySelector( 'img' ).src;
            numberofproduct++;
            localStorage.setItem( "count", numberofproduct )
            aft.innerHTML = localStorage.count;

            Subtotal += parseFloat( planprice );
            localStorage.setItem( "tprice", Subtotal );
            total.innerHTML = ( parseFloat( localStorage.tprice ).toFixed( 2 ) ) + "$";
            bef.innerHTML = ( parseFloat( localStorage.tprice ).toFixed( 2 ) ) + "$";
        
            var objectprod = {
                // noplane: idplane,
                id:idplane,
                name: planname,
                price: planprice,
                image: planimage
            }
            arrprod.push( objectprod );
            localStorage.setItem( "product", JSON.stringify( arrprod ) );
            displayproduct();
        } )
    } )
    /////function display product
    function displayproduct() {
        productshopping.innerHTML = '';
        arrprod.forEach( ( e ) => {
            productshopping.innerHTML += `
        
            <div class="rty">
                 <div class="one">
                                        <img src="${e.image}" alt="">
                                        <div class="context">
                                            <h5>${e.name}</h5>
                                            <p>${e.price}</p>
                                        </div>
                 </div>
                <i class="fa-regular fa-circle-xmark clo" onclick ='delproduct("${e.id}")'></i> 
            </div>
        `
        
        } )
}
    //////////end add card to card //////////////////
    ////////////start delete product////////////////
    function delproduct( productNumber ) {
        for ( let i = 0; i < arrprod.length; i++ ) {
            if ( arrprod[ i ].id === productNumber ) {
      
                var nw = arrprod.splice( i, 1 )[ 0 ];

                localStorage.setItem( "product", JSON.stringify( arrprod ) );
                // localStorage.product = arrprod;
            
                displayproduct();
            
                numberofproduct--;
                // localStorage.setItem( "count", numberofproduct );
                localStorage.count = numberofproduct;
                aft.innerHTML = localStorage.count;
            
                Subtotal -= nw.price;
                localStorage.tprice = Subtotal;
                //  localStorage.setItem("tprice", Subtotal);
                total.innerHTML = ( parseFloat( localStorage.tprice ).toFixed( 2 ) ) + "$";
                bef.innerHTML = ( parseFloat( localStorage.tprice ).toFixed( 2 ) ) + "$";
                break;
            }
        }
    }

    ///////////end delete product/////////////////
    //////////start view icon //////////////////
    var alladdcardsmall = document.querySelectorAll( ".sub small" );
    proplan.forEach( ( one ) => {
        one.onmouseover = function () {
            var last = one.querySelectorAll( ".groupimgicon i" );
            last[ 0 ].style.opacity = 1;
        }
        one.onmouseout = function () {
            var last = one.querySelectorAll( ".groupimgicon i" );
            last[ 0 ].style.opacity = 0;
        }
    } )
    alladdcard.forEach( ( two ) => {
        two.onmouseover = function () {
            var fir = two.nextElementSibling;
            var las = fir.querySelectorAll( "small" )[ 0 ]
            las.style.opacity = 1
        }
        two.onmouseout = function () {
            var fir = two.nextElementSibling;
            var las = fir.querySelectorAll( "small" )[ 0 ]
            las.style.opacity = 0
        }
    } )
var imgicon = document.querySelectorAll( ".groupimgicon i" );
imgicon.forEach( ( e ) => {
    e.onclick = function () {
        e.style.transform = "scale(1.3)";
        // e.style.boxShadow = "0 5px 15px rgb(0 0 0 / 33%)";
        setTimeout( function () {
            e.style.transform = "scale(1)";
            // e.style.boxShadow = "0";   
        },400)
    }
})
//  animation: iconimg 0.5s infinite;
//const box = section.getBoundingClientRect();
var context = document.querySelector( ".container-slider .text" );
window.onload = function () {
    context.style.top = "50%";
}
var proplangroup = document.querySelector( ".proplangroup" );
var inn = document.querySelector( ".innerText" );
var gift = document.querySelector( ".giftCard" );
// var getboun = gift.getBoundingClientRect().top
// var getblus = getboun;
// var text2 = document.querySelector( ".text2" );
// var textbou = text2.getBoundingClientRect().top; 
// let ty = textbou 
// window.onscroll= function() {
//   let scrollY = window.scrollY;
//     if ( scrollY >= getboun) {
//         inn.style.top = "50%";
//     }
//         if ( scrollY >= ty) {
//         text2.style.marginTop = "10%";
//   }
// };
// console.log( textbou );
// console.log( getboun );
//////////////boundtext2////////////



//////////end view icon/////////////////