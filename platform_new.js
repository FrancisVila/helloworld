
$(function () {


 //  $("#allCats").onClick={this.handleChangeData.bind('_', index)}
// ***************************************
// multi-purpose event handlers

// init Isotope
var $grid = $('#grid').isotope({
  itemSelector: '.productLink',
   filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var buttonResult = buttonFilter ? $this.is( buttonFilter ) : true;
    return searchResult && buttonResult;
  },

});

handleDisplayModeSwitch = ($target) => {
  removeAllSelections();
 
  // get group key
  const selector = $target.attr('selector');
  // if selector =".free", selectorClassName = "free"
  const selectorClassName = selector.substring(1, selector.length );
  // highlights, example: if the containing <div id="highlights"> has class="free", then items below with class="free" will be highlighted, etc
  $("#highlights").addClass(selectorClassName);
  // set filter 
  $('.display-mode-switch .selected').removeClass('selected')
  $target.addClass('selected')
  buttonFilter = selector;
  console.log("selector=", selector);  
  console.log("selectorClassName=", selectorClassName);
  // set filter for Isotope
  $grid.isotope();
}

removeAllSelections = () => {
  $("#highlights").removeClass();
  $(".selected").removeClass("selected");
}
initialize=()=> {
  removeAllSelections()

  // handleDisplayModeSwitch($("#allCats"));

   $(".button.discover").addClass("selected");
  // $("#allCats").addClass("selected");
  console.log('className=', $(".button.explore").attr('class'));

  buttonFilter = ".about";
  // set filter for Isotope
  $grid.isotope();

}





var buttonFilters = {};
var buttonFilter;
// quick search regex
var qsRegex;



// store filter for each group
$('.filters').on( 'change', function( event ) {
  var $select = $( event.target );
  // get group key
  var filterGroup = $select.attr('value-group');
  // set filter for group
  buttonFilters[ filterGroup ] = event.target.value;
  // combine filters
  buttonFilter = concatValues( buttonFilters );
  console.log(buttonFilter);
  // set filter for Isotope
  $grid.isotope();
});


$(".color-shape.launchpad").on( 'click', function( event ) {
  alert("To infinity and beyond!");
})

// never enter here????
$('.display-mode-switch').on( 'click', function( event ) {
  handleDisplayModeSwitch($( event.target ));
  /*   var $select = $( event.target );
  // get group key
  var selector = $select.attr('selector');
  // set filter 
  $('.display-mode-switch .selected').removeClass('selected')
  $select.addClass('selected')
  buttonFilter = selector;
  console.log(selector);
  // set filter for Isotope
  $grid.isotope(); */

});

handleSelector=(event)=>{
  removeAllSelections();
  var $select = $( event.target );
  handleDisplayModeSwitch($select);
  // get group key
  var selector = $select.attr('selector');
  // set filter 

  buttonFilter = selector;
  console.log(selector);
  // set filter for Isotope
  $grid.isotope();
  $select.addClass("selected")
}

$('.button').on( 'click', function( event ) {
  removeAllSelections();
  var $select = $( event.target );
  handleDisplayModeSwitch($select);
  // get group key
  var selector = $select.attr('selector');

  // set filter 

  buttonFilter = selector;
  console.log(selector);
  // set filter for Isotope
  $grid.isotope();
  $select.addClass("selected")
});

$('#seeMoreFilters').on( 'click', function( event ) {
$("#moreFilters").toggle();
$("#seeMoreFilters").toggle();
$("#seeLessFilters").toggle();
});

$('#seeLessFilters').on( 'click', function( event ) {
  $("#moreFilters").toggle();
  $("#seeMoreFilters").toggle();
  $("#seeLessFilters").toggle();
  });

  $('#showAllIcons').on( 'click', function( event ) {
    $("#allIcons").toggle();

    });
  
  

$('.product').on( 'click', function( event ) {
  handleSelector(event);
});


// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

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

})
