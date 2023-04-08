<?php
/**
 * Created by PhpStorm.
 * User: gking
 * Date: 7/1/2016
 * Time: 12:50 PM
 * Gets content from .metadata
 * See NavigationController.php
 */

namespace Sesame\Utilities;


class MetaUtility
{
    public function getPath($sitename)
    {
        return sprintf(dirname(__FILE__).'/../../../../%s/.metadata', $sitename);
    }

    public function exists($sitename)
    {
        return file_exists($this->getPath($sitename));
    }

    public function write($sitename, $contents)
    {
        $contents = '<div class="container row" style="display: none;">
	    	<app>Loading navigation... </app>
    </div>' . $contents;
        file_put_contents($this->getPath($sitename), $contents);
    }

    public function read($sitename)
    {
        return file_get_contents($this->getPath($sitename));
    }

    public function delete($sitename)
    {
        if (!@unlink($this->getPath($sitename))) {
            throw new \Exception("Could not delete metadata file.");
        }
    }
}
