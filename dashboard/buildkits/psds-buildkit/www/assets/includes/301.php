<?php $redirect = array(

);

if(array_key_exists($_SERVER['REQUEST_URI'], $redirect)){ Header( "HTTP/1.1 301 Moved Permanently" ); Header( "Location: ".$redirect[$_SERVER['REQUEST_URI']]); exit; }

?>