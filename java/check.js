var productshopping = document.querySelector( ".product-shopping" );
var total = document.getElementById( "total" );
var bef = document.getElementById( "bef" );
////////////////start add///////////////////
var arrprod;
if ( localStorage.getItem( "product" ) ) {
             arrprod = JSON.parse( localStorage.getItem( "product" ) )
        displayproduct()
    } else {
        arrprod = []
}
    var Subtotal;
    if ( localStorage.getItem( "tprice" ) ) {
        Subtotal = parseFloat( localStorage.getItem( "tprice" ) );
        total.innerHTML = ( Subtotal.toFixed( 2 ) ) + "$";
    } else {
        Subtotal = 0;
}
    var numberofproduct
    var aft = document.getElementById( "aft" );
    if ( localStorage.getItem( "count" ) ) {
        numberofproduct = localStorage.getItem( "count" );
        // aft.innerHTML = localStorage.count;
        displayproduct()
    } else {
        numberofproduct = 0;
}
////////////////end add ////////////////
//////////start display ////////////////////
function displayproduct() {
    if (localStorage.getItem("count") != 0) {
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
    } else{
            productshopping.innerHTML ="No Product Yet"
        }
 
}
////////////end display ////////////////////
/////////// start delete /////////////////
  function delproduct( productNumber ) {
        for ( let i = 0; i < arrprod.length; i++ ) {
            if ( arrprod[ i ].noplane === productNumber ) {
      
                var nw = arrprod.splice( i, 1 )[ 0 ];

                localStorage.setItem( "product", JSON.stringify( arrprod ) );
                // localStorage.product = arrprod;
            
                displayproduct();
            
                numberofproduct--;
                // localStorage.setItem( "count", numberofproduct );
                localStorage.count = numberofproduct;
                // aft.innerHTML = localStorage.count;
            
                Subtotal -= nw.price;
                localStorage.tprice = Subtotal;
                //  localStorage.setItem("tprice", Subtotal);
                total.innerHTML = ( parseFloat( localStorage.tprice ).toFixed( 2 ) ) + "$";
                // bef.innerHTML = ( parseFloat( localStorage.tprice ).toFixed( 2 ) ) + "$";
                break;
            }
      }
      displayproduct()
}
    displayproduct()
///////////end delete ///////////////
var inp = document.querySelectorAll( "input" );
var sub = document.querySelector( "input[type='submit']" )
var callthank = document.querySelector( ".collthank" );
var callthankbutt = document.querySelector( ".collthank button" );
sub.onclick = function ( e ) {
    if ( inp[ 0 ].value != "" ||inp[1].value !=""||inp[7].value !="") {
            e.preventDefault();
        console.log( "yes" );
        callthank.style.transform = "scale( 1 )";
        } else {
            e.preventDefault();
            console.log("no")
     }
}
callthankbutt.onclick = function () {
    callthank.style.transform = "scale( 0 )";
    localStorage.clear()
    location.reload()
    location.href = "index.html";
}    

