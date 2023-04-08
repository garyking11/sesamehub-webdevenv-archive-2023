<?php

	class Redirect301Data {
	  
	/**
	* Create redirect directories and files
	*/
	
	public function create_redirect_directory()
	{
	
	$local_process_directory = dirname(__FILE__) . '/process';
	$local_301 = dirname(__FILE__) . '/301.php';
	$local_301_rename = dirname(__FILE__) . '/301-bak.php';
	$local_301_master = $_SERVER['DOCUMENT_ROOT'] . '/hub_sites/srwd/www/assets/includes/301.php';
	$local_redirect_directory = dirname(__FILE__) . '/process/redirects';
	$copy_redirect_master = $_SERVER['DOCUMENT_ROOT'] . '/hub_sites/srwd/www/assets/includes/redirects';
	
	// /assets/includes/process/ does not exist
	if ( !is_dir( $local_process_directory ) ) {
		//create it
		@mkdir( $local_process_directory, 0777, true );
	
	}
	
	// /assets/includes/process/redirects/ does not exist
	if (!is_dir($local_redirect_directory)) {
		
		// create it
		@mkdir($local_redirect_directory, 0777, true);
		
		// fill it with files
		$files = glob( $copy_redirect_master . "/*.*" );
	
		foreach( $files as $file){
			$files_to_copy = str_replace( $copy_redirect_master, $local_redirect_directory, $file );
			copy( $file, $files_to_copy );
		}
	
	} // end $local_redirect_directory check
	
	// redirects/ exists
	/*if ( is_dir( $local_redirect_directory ) ) {
		// 301.php exists
		if ( file_exists( $local_301 ) ){
			// 301-bak exists
			if ( !file_exists( $local_301_rename ) ) {
				// rename 301.php
				rename( $local_301, $local_301_rename );
				// copy correct file to directory
				copy ( $local_301_master, $local_301 );
			}
	
		} else {
			// 301-bak.php does not exist
			// copy ( $local_301_master, $local_301 );
		}
	}*/
	
	} // end create process directory
	
} // end RedirectData

$red_data = new Redirect301Data();
echo $red_data->create_redirect_directory();