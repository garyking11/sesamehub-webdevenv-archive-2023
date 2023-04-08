<?php
//Custom template level 301 redirects for query string URI's
$redirect = array(
"/DentalTopics/AboutTeeth/tabid/80/Default.aspx"=>"/pediatric-dentistry",
"/DentalTopics/BrushingandFlossing/tabid/82/Default.aspx"=>"/preventive-care",
"/DentalTopics/DentalCaries/tabid/81/Default.aspx"=>"/pediatric-dentistry",
"/DentalTopics/FirstVisit/tabid/66/Default.aspx"=>"/office-visits",
"/FunZone/Games/tabid/74/Default.aspx"=>"/home",
"/FunZone/PatientoftheMonth/tabid/75/Default.aspx"=>"/blog",
"/Home/tabid/36/Default.aspx"=>"/home",
"/LinkClick.aspx?link=55"=>"/home",
"/LinkClick.aspx?link=56"=>"/home",
"/NewPatientForms/tabid/83/Default.aspx"=>"/home",
"/OfficeInformation/AbouttheDoctors/tabid/58/Default.aspx"=>"/meet-dr-brie-hills",
"/OfficeInformation/AbouttheDoctors/tabid/58/Default.aspx#dr1"=>"/meet-dr-robert-henry",
"/OfficeInformation/AbouttheDoctors/tabid/58/Default.aspx#dr2"=>"/meet-dr-brie-hills",
"/OfficeInformation/ContactUs/tabid/61/Default.aspx"=>"/office-location",
"/OfficeInformation/ContactUs/tabid/61/Default.aspx#map"=>"/office-location",
"/OfficeInformation/OfficePolicies/tabid/78/Default.aspx"=>"/our-mission-and-goals",
"/OfficeInformation/OfficePolicies/tabid/78/Default.aspx#open"=>"/our-mission-and-goals",
"/OfficeInformation/OfficeTour/tabid/62/Default.aspx"=>"/office-tour",
"/OfficeInformation/OurMissionandGoals/tabid/59/Default.aspx"=>"/our-mission-and-goals",
"/OfficeInformation/RequestanAppointment/tabid/84/Default.aspx"=>"/appointment-request",
"/OfficeInformation/Technology/tabid/79/Default.aspx"=>"/home",
"/Portals/_default/Skins/Allkidsjungle/#"=>"/office-location",
"/Services/Prevention/tabid/70/Default.aspx"=>"/preventive-care",
"/Services/Prevention/tabid/70/Default.aspx#sea"=>"/preventive-care",
"/Services/Sedation/tabid/72/Default.aspx"=>"/sedation-dentistry",
"/Services/Treatment/tabid/71/Default.aspx"=>"/pediatric-dentistry",
"/Services/Treatment/tabid/71/Default.aspx#tooth"=>"/pediatric-dentistry",
"/TheAllKidsDentalDifference/tabid/63/Default.aspx"=>"/what-sets-us-apart"
);
if(array_key_exists($_SERVER['REQUEST_URI'], $redirect)){
    Header( "HTTP/1.1 301 Moved Permanently" );
    Header( "Location: ".$redirect[$_SERVER['REQUEST_URI']]);
    exit;
} 

?>