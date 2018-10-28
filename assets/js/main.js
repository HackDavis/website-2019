// set typed
var typed = new Typed('#typed', {
  strings: ['// code for social good', 'February 9 - 10, 2019', '750+ hackers', '24 hours', '$8k prizes', '100 projects demoed'],
  typeSpeed: 25,
  backSpeed: 8,
  backDelay: 1500,
  startDelay: 1000,
  fadeOut: false,
  loop: true,
  shuffle: false,
  cursorChar: '_'
});

// faq toggle
const items = document.querySelectorAll('.accordion a');

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// set progress bar
$(document).ready(function(){
  // init progress indicator
  $('#progressBar').addClass('flat');

  $(document).on('scroll', function(){
      maxAttr = $('#progressBar').attr('max');
      valueAttr = $('#progressBar').attr('value');
      percentage = (valueAttr/maxAttr) * 100;  
  });

  // for the lulz
  console.image('https://i.imgflip.com/2l6ai3.jpg');
  console.log('Apply at LINK_TO_APPLY')

  var getMax = function(){
    return $(document).height() - $(window).height();
  }
  
  var getValue = function(){
    return $(window).scrollTop();
  }
  
  if('max' in document.createElement('progress')){
    // Browser supports progress element
    var progressBar = $('progress');
    
    // Set the Max attr for the first time
    progressBar.attr({ max: getMax() });

    $(document).on('scroll', function(){
      // On scroll only Value attr needs to be calculated
      progressBar.attr({ value: getValue() });
    });

    $(window).resize(function(){
      // On resize, both Max/Value attr needs to be calculated
      progressBar.attr({ max: getMax(), value: getValue() });
    });   
  } else {
    var progressBar = $('.progress-bar'), 
      max = getMax(), 
      value, width;
    
    var getWidth = function(){
      // Calculate width in percentage
      value = getValue();            
      width = (value/max) * 100;
      width = width + '%';
      return width;
    }
    
    var setWidth = function(){
      progressBar.css({ width: getWidth() });
    }
    
    $(document).on('scroll', setWidth);
    $(window).on('resize', function(){
      // Need to reset the Max attr
      max = getMax();
      setWidth();
    });
  }
});