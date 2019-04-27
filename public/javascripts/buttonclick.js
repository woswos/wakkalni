function buttonClick(buttonId) {
  document.getElementById(buttonId).className = "button is-fullwidth is-success is-loading";
}

jQuery(document).ready(function($)
{
  $("[class*=expandable]").click(function()
  {
    var toggleID = $(this).attr('id');

    $('#expandable-box-expanded-'+toggleID).slideToggle( "fast");

  });

});
