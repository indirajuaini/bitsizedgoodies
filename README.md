bitsizedgoodies is a simple popup plugin. It will pop up any DIV container you have, automatically centerering the pop 
up on your screen.  The plugin adds a close (x) button for when you wish to close the popup.

The idea was to create a simple plugin with frequently-used, standard UI features packaged in one plugin that I can use in my day-to-day development.  Nothing too complicated.  For now, only the popup feature is active. 

Hopefully I'll be able to update it from time to time.  Feel free to improve upon it.


Requirements:

This plugin requires at least JQuery 1.7. Works with Jquery 3.0.

Instructions:

1.  Embed JQuery library and the plugin script into your document.
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="bitsizedgoodies.js"></script>
2.  Link CSS to your html file. 
    <link rel="stylesheet" type="text/css" href="css/bitsizedgoodies.css" />
3.  Design your DIV and initially hide it with CSS display:none.
4.  Activate it on click event.


DIV sample:
<a href="#" id="pop-me">Pop my DIV</a>
<div id="my-div">hello</div>

Style DIV with CSS:
#my-div{padding:30px;background:#ccc;display:none;width:400px}

Script:
<script>
$(document).ready(function() {
  $('#pop-me').click(function() {
    $('#my-div').goodies_popme();
  });
});
</script>


Download and try running the sample script.  I hope this simple effort will be of benefit to you.  Thanks!

