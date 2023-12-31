///////////////start shopping cart////////////
    var shoppingcart = document.querySelector( ".shopping-cart" );
    var mark = document.getElementById( "mark" );
    var card = document.getElementById( "card" );
    mark.onclick = function () {
        shoppingcart.style.right = "-1000px"
    }
    card.onclick = function () {
        shoppingcart.style.right = "0"
}
   
    ///////////////end shopping cart/////////////
    ///////////////start add card//////////////
    var proplan = document.querySelectorAll( ".proplan" );
    var alladdcard = document.querySelectorAll( ".groupimgicon i" );
    var productshopping = document.querySelector( ".product-shopping" );
    var bef = document.getElementById( "bef" );
    var im = document.querySelectorAll( ".im" );
    var h4 = document.querySelectorAll( ".h4" );
    var p = document.querySelectorAll( ".p" );
    var idd = document.querySelectorAll( ".id" );
    var h6 = document.querySelectorAll( ".h6" );
    // localStorage.clear()

    var plants = [
        {
            id: 0,
            name: "Birdnest Japanese",
            namelast: "Air purifying",
            salary: 84.90,
            image: "plants-ecommerce-product-featured-img-8-600x900"
        }, {
            id: 1,
            name: "Hoya Obovatuma",
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
        }, {
            id: 6,
            name: "Calathea Rufibarba",
            namelast: "Herbs seeds",
            salary: 109.90,
            image: "10"
        }, {
            id: 7,
            name: "Dracaena Lisa",
            namelast: "Air purifying",
            salary: 114.90,
            image: "11"
        }, {
            id: 8,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "12"
        }
        , {
            id: 9,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "13"
        }
         , {
            id: 10,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "14"
        }
          , {
            id: 11,
            name: "Pachira Braid",
            namelast: "Ceramic pots",
            salary: 74.90,
            image: "15"
        }
           , {
            id: 12,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "16"
        }
            , {
            id: 13,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "17"
        }
             , {
            id: 14,
            name: "Straight Blade Scissor",
            namelast: "Plant accessories",
            salary: 24.90,
            image: "18"
        }
              , {
            id: 15,
            name: "Single Prong Weeder",
            namelast: "Plant accessories",
            salary: 11.90,
            image: "19"
        }
               , {
            id: 16,
            name: "Sansevieria Laurentii",
            namelast: "Indoor Plants",
            salary: 79.90,
            image: "20"
        }
                , {
            id: 17,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "21"
        }
                      , {
            id: 18,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "22"
        }
                            , {
            id: 19,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "23"
        }
                                  , {
            id: 20,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "24"
        }
                                        , {
            id: 21,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "25"
        }
                                              , {
            id: 22,
            name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "26"
        }
        , {
            id: 23,
             name: "Euphorbia Ingens",
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "27"
        }
        , {
            id: 24,
            name: "Euphorbia Ingens",                                          
            namelast: "Ceramic pots",
            salary: 104.90,
            image: "28"
        }
    ]
    for ( var i = 0; i < plants.length; i++ ) {
        idd[ i ].innerHTML = plants[ i ].id
        im[ i ].src = `image/${plants[ i ].image}.jpg`;
        h4[ i ].innerHTML = plants[ i ].name;
        h6[ i ].innerHTML = plants[ i ].namelast
        p[ i ].innerHTML = parseFloat( plants[ i ].salary ).toFixed( 2 );
}
    var arrprod;
    if ( localStorage.getItem( "product" ) ) {
        arrprod = JSON.parse( localStorage.getItem( "product" ) )
        displayproduct()
    } else {
        arrprod = [];
    }
    var numberofproduct;
    if ( localStorage.getItem( "count" ) ) {
        numberofproduct = localStorage.count;
        aft.innerHTML = localStorage.count;
    } else {
        numberofproduct = 0;
    }
    var Subtotal;
    if ( localStorage.getItem( "tprice" ) ) {
        Subtotal = parseFloat( localStorage.getItem( "tprice" ) );
        bef.innerHTML = ( Subtotal.toFixed( 2 ) ) + "$";
        total.innerHTML = ( Subtotal.toFixed( 2 ) ) + "$";

    } else {
        Subtotal = 0;
}

    alladdcard.forEach( ( element ) => {
        element.addEventListener( "click", function () {
            var elementlast = element.parentElement.parentElement
            const idplane = elementlast.querySelector( '.id' ).innerText
            const planname = elementlast.querySelector( 'h4' ).innerText
            const planprice = elementlast.querySelector( 'p' ).innerText
            const planimage = elementlast.querySelector( 'img' ).src;
            var objectprod = {
                noplane: idplane,
                name: planname,
                price: planprice,
                image: planimage
            }
            numberofproduct++;
            localStorage.setItem( "count", numberofproduct )
            aft.innerHTML = localStorage.count
            arrprod.push( objectprod );
            localStorage.setItem( "product", JSON.stringify( arrprod ) );
            Subtotal += parseFloat( planprice )
            localStorage.setItem( "tprice", Subtotal );
            bef.innerHTML = ( parseFloat( localStorage.tprice ).toFixed( 2 ) ) + "$";
             total.innerHTML = ( parseFloat( localStorage.tprice ).toFixed( 2 ) ) + "$";
            displayproduct()
        } )
    } )
    //////////////end add card////////////
    ///////////////start display/////////
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
                 <i class="fa-regular fa-circle-xmark clo" onclick ='delproduct("${e.noplane}")'></i> 
            </div>
        `
        
        } )
    }


    ////////////end display //////////////
   
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
//////////end view icon/////////////////
 ///////////start delete /////////////
    function delproduct( productNumber ) {
        for ( let i = 0; i < arrprod.length; i++ ) {
            if ( arrprod[ i ].noplane === productNumber ) {
                var nw = arrprod.splice( i, 1 )[ 0 ];
                localStorage.setItem( "product", JSON.stringify( arrprod ) );
                displayproduct();
                numberofproduct--;
                localStorage.count = numberofproduct;
                aft.innerHTML = localStorage.count;
            
                Subtotal -= nw.price;
                localStorage.tprice = Subtotal;
                total.innerHTML = ( parseFloat( localStorage.tprice ).toFixed( 2 ) ) + "$";
                bef.innerHTML = ( parseFloat( localStorage.tprice ).toFixed( 2 ) ) + "$";
                break;
            }
        }
    }
    //////////end delete ////////////////
//////////start slider plant/////////////
let countnum1;
var allgroup = document.querySelector( ".allgroup" );
var group = document.querySelectorAll(".proplangroup");
let ui = document.querySelectorAll( ".ui" );
clientWidthhere = group[ 0 ].clientWidth
ui.forEach( ( element, index ) => {
    element.onclick = function (e) {
        countnum1 = index
        allgroup.style.transform = `translateX(-${countnum1 * ( clientWidthhere + 50 )}px)`; 
        console.log( "play" );
    };
   
});
//////////end slider plant///////////////
/////////start search/////////
var groupbuttonicotwoinput = document.querySelector( ".groupbutton .icotwo input" );
var butui = document.querySelector( ".icoone" );
var proplangroups = document.querySelectorAll( ".proplangroup" );
groupbuttonicotwoinput.onkeyup = function () {
    for ( let i = 0; i < plants.length; i++ ){
    proplan[i].style.display = "none";
    }
    allgroup.style.display = "block";
    for ( let i = 0; i < proplangroups.length; i++ ){
        proplangroups[i].style.marginRight = "20px";
    }
    butui.style.display = "none";
    for ( let i = 0; i < plants.length; i++ ){
        if ( plants[ i ].name.toLowerCase().includes( this.value.toLowerCase() ) ) {
            proplan[ i ].style.display = "block";
        } 
    }
    if ( this.value == "" ) {
        allgroup.style.display = "flex";
         butui.style.display = "block";
    }
     if ( this.value == "" ) {
         for ( let i = 0; i < proplangroups.length; i++ ){
        proplangroups[i].style.marginRight = "0";
    }
    }
}

///////end search//////////