// Opção 1:
//var $j = jQuery.noConflict();
//
//$j(document).ready(function(){
//    alert("Atalho $j -- jQuery sem conflitos!");
//});

// Opção 2:
jQuery(document).ready(function(){
    alert("jQuery(document).ready(); -- jQuery sem conflitos nem atalhos");
});