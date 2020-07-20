

  $( document ).ready(function() {



  //  $("#allCats").onClick={this.handleChangeData.bind('_', index)}
  // ***************************************
  // multi-purpose event handlers


/* from https://stackoverflow.com/questions/4656843/jquery-get-querystring-from-url */
/** Accepts either a URL or querystring and returns an object associating 
 * each querystring parameter to its value. 
 * Returns an empty object if no querystring parameters found.*/
function getUrlParams(urlOrQueryString) {
  if ((i = urlOrQueryString.indexOf('?')) >= 0) {
    const queryString = urlOrQueryString.substring(i+1);
    if (queryString) {  return _mapUrlParams(queryString);  } 
  }
  return {};
}

const urlParams = getUrlParams(location.search);  
let urlSelector = urlParams["selector"] ||  "" ;
console.log("urlSelector=", urlSelector);


/**Helper function for `getUrlParams()`
 * Builds the querystring parameter to value object map.
 * @param queryString {string} - The full querystring, without the leading '?'.
 */
function _mapUrlParams(queryString) {
  return queryString  
    .split('&') 
    .map(function(keyValueString) { return keyValueString.split('=') })
    .reduce(function(urlParams, [key, value]) {
      if (Number.isInteger(parseInt(value)) && parseInt(value) == value) {
        urlParams[key] = parseInt(value);} 
      else {urlParams[key] = decodeURI(value);  }
      return urlParams;
    }, {});
  }
    




  // init Isotope

  var $grid = $('.grid').isotope({
    
    itemSelector: '.isotopeBlock',
    filter: function() {
      var $this = $(this);
      var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
      var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
      return searchResult && buttonResult;
    },

  });

    // more stuff for Isotope
    var buttonFilter;
    // quick search regex
    var qsRegex;

    
  // once jQuery filter selector is computed (such as "".free" if user clicks Free!, ".c2g" for cloud-to-ground), 
  //     => inform isotope
  // also add class at top level for the relevant sections to be highlighted (if user clicks "Free!", highlight "Free version" links)
  handleFilter = (selector) => {
    // if selector =".free", selectorClassName = "free"
    if (!selector) selector=".initialBlock";
    const selectorClassName = selector.substring(1, selector.length );
    // highlights, example: if the containing <div id="highlights"> has class="free", then items below with class="free" will be highlighted, etc
    $("#highlights").addClass(selectorClassName);
    // set filter 

    buttonFilter = selector;
    console.log("selector=", selector);  
    console.log("selectorClassName=", selectorClassName);
    // set filter for Isotope
    // ************************* REMOVING BECAUSE CAUSE BUG 
    $grid.isotope();
    console.log('$(selector + " .breadcrumbs")=', $(selector + " .breadcrumbs"));
  //  showBread (selector);
  }

 

  showBread = (selector) => { 

    $(selector + " .breadcrumbs").show();
    handleFilter(urlSelector);
   }
   

// removes selections among filter buttons and lists
// cancels highlights
  removeAllSelections = () => {
    $("#highlights").removeClass();
    $(".selected").removeClass("selected");
  }

  // done once, on load
  initialize=()=> {
    $('#loading').addClass('hide')
    $('#gridTiles').removeClass('hide')
    $('#isotopeRoadtripGrid').removeClass('hide')
    removeAllSelections()
    $(".button.discover").addClass("selected");
    // $("#allCats").addClass("selected");
    console.log('className=', $(".button.explore").attr('class'));
    buttonFilter = ".initialBlock";
    // set filter for Isotope

    $grid.isotope();
    $('#isotopeRoadtripGrid').isotope();
  
  }

  initialize();


// NOT USED for the moment - copy-pasted from Isotope code
  // store filter for each group
  // when user makes any changes to filter
  $('.filters').on( 'change', function( event ) {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");

    var $select = $( event.target );
    var buttonFilters = {};
    // get group key
    var filterGroup = $select.attr('value-group');
    // set filter for group
    buttonFilters[ filterGroup ] = event.target.value;
    // combine filters
    buttonFilter = concatValues( buttonFilters );

    console.log("Inside  $('.filters').on( 'change', function( event )   buttonFilters=",  buttonFilters);
    
    // set filter for Isotope REMOVED CAUSE BUG
    // $grid.isotope();
  });

// click on one of the launchpad tiles
  $(".isotopeBlock.launchpad").on( 'click', function( event ) {
    alert("To infinity and beyond!");
  })

   // handle change from login to nologin
  $('#login').on( 'click', function( event ) {
    console.log('log in / out' );
    if ($('#login').html() ==="Log in")
       {
         $('body').removeClass('noLogin');
         $('#login').html('Me');
      }
      else 
      {         
        $('body').addClass('noLogin');
        $('#login').html('Log in');}
      
  });


   // handle changes to the list filters (environment = Cloud to ground, on prem, cloud...)
  $('.display-mode-switch li.activeDemo').on( 'click', function( event ) {
    console.log('inside display-mode-switch' );
    removeAllSelections();
    $target = $( event.target );
    console.log('selector $target=', $target);
    const $activeElement = $target
    $activeElement.addClass("selected")
    // get group key
    const selector = $activeElement.attr('selector');
    handleFilter(selector)
  });


$('.backToAbout').click(function(e) {
// do stuff
var target = $( event.target ) ;
 try {
  handleFilter(".initialBlock");
  $('.breadcrumbs').hide();
  $('#headerMenu').hide();
 }
 catch (e) {
  console.error('Error in .breadAction ' + e.message);

} 
 })

  // click on one of the filter buttons (Discover, Free!, etc)
  // or
  // click on "More..." link at the bottom of a tile
  $( '.product').on( 'click', function( event ) {
    removeAllSelections();
    var $target = $( event.target ).closest("div");
    // handleDisplayModeSwitch($select);
    console.log('$target=', $target);
    $('.display-mode-switch .selected').removeClass('selected')
    $target.addClass('selected')
    // get group key
    const selector = $target.attr('selector');
    handleFilter(selector)

    // set filter (isotope code)
    buttonFilter = selector;
    // launch Isotope filtering
    // $grid.isotope();
    $target.addClass("selected");
    $('#headerMenu').hide();
  });

  $('.button').on( 'click', function( event ) {
    removeAllSelections();
    var $target = $( event.target );
    // handleDisplayModeSwitch($select);
    console.log('$target=', $target);
    $('.display-mode-switch .selected').removeClass('selected')
    $target.addClass('selected')
    // get group key
    const selector = $target.attr('selector');
    handleFilter(selector)

    // set filter (isotope code)
    buttonFilter = selector;
    // launch Isotope filtering
    // $grid.isotope();
    $target.addClass("selected");
    $('#headerMenu').hide();
  });

  $('#myClickableAAAA').click(function(e) {
  // do stuff
   try {
  // do stuff that might fail
   }
   catch (e) {
     console.error('Error in #myClickableAAAA' + e.message)} 
    } )

    $('.letstalk').click(function(e) {
    // do stuff
    var target = $( event.target ) ;
    letsTalkImage = $('#letsTalkImage')
     try {
      letsTalkImage.removeClass("hide");
    // do stuff that might fail
    
     }
     catch (e) {console.error('Error in .letstalk' + e.message);} 
     })
  
     $('#letsTalkImage').click(function(e) {
      // do stuff
      var target = $( event.target ) ;
      letsTalkImage = $('#letsTalkImage')
       try {
        letsTalkImage.addClass("hide");
      // do stuff that might fail
      
       }
       catch (e) {console.error('Error in #letsTalkImage' + e.message);} 
       })


  // when user clicks "More..." link in filters at top of page => show more filters
  $('#seeMoreFilters').on( 'click', function( event ) {
  $("#moreFilters").toggle();
  $("#seeMoreFilters").toggle();
  $("#seeLessFilters").toggle();
  });

  // More... / Less... toggle on and off 
  $('#seeLessFilters').on( 'click', function( event ) {
    $("#moreFilters").toggle();
    $("#seeMoreFilters").toggle();
    $("#seeLessFilters").toggle();
    });

    // useful while building the app. Shows available icons for copy-pasting <span> code
    $('#showAllIcons').on( 'click', function( event ) {
      $("#allIcons").toggle();
      });
    
    





  // copy-pasted from isotope code, for text search
  var $quicksearch = $('.quicksearch').keyup( debounce( function() {
    qsRegex = new RegExp( $quicksearch.val(), 'gi' );
    console.log(qsRegex);
    $grid.isotope();
  }) );
    
  // flatten object by concatting values
  function concatValues( obj ) {
    var value = '';
    for ( var prop in obj ) {
      value += obj[ prop ];
    }
    console.log(value);
    return value;
  }

  // debounce so filtering doesn't happen every millisecond
  function debounce( fn, threshold ) {
    var timeout;
    threshold = threshold || 100;
    return function debounced() {
      clearTimeout( timeout );
      var args = arguments;
      var _this = this;
      function delayed() {
        fn.apply( _this, args );
      }
      timeout = setTimeout( delayed, threshold );
    };
  }

  $('.flexSection').click(function(e) {
    // do stuff
    var target = $( event.target ) ;
    try {
    // do stuff that might fail
    event.stopPropagation()
    }
    catch (e) {console.error('Error in click .flexSection ' + e.message);} 
    })

    $('.hideMenu').click(function(e) {
      // do stuff
      var target = $( event.target ) ;
      try {
        $('#headerMenu').hide();
      }
      catch (e) {console.error('Error in hide headerMenu ' + e.message);} 
      } )

      $('.toggleMenu').click(function(e) {
        // do stuff
        var target = $( event.target ) ;
        try {
          $('#headerMenu').toggle();
          event.stopPropagation();
        }
        catch (e) {console.error('Error in hide headerMenu ' + e.message);} 
        } )

      $('.hideBreadcrumbs').click(function(e) {
        // do stuff
        var target = $( event.target ) ;
        try {
          $('.breadcrumbs').hide()
        }
        catch (e) {console.error('Error in hide Breadcrumbs ' + e.message);} 
        } )

    $('.showBreadcrumbs').click(function(e) {
          // do stuff
          var target = $( event.target ) ;
          try {
            $('.breadcrumbs').show()
          }
          catch (e) {console.error('Error in show Breadcrumbs ' + e.message);} 
          } )
      

  })
