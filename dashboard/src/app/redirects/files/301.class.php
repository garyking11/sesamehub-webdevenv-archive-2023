<?php

    class Redirects
    {
        public function get_page_data_redirects()
        {
            $json = file_get_contents(dirname(__FILE__) . '/redirect-data.json');
            $redirectsData = json_decode($json, true);

            $redirects = array();

            foreach ($redirectsData as $red  => $value) {
                $redirects[$red] = $value;
            }

            return $redirects;
        }
    } // end Redirects

    $redirected = new Redirects();
?>