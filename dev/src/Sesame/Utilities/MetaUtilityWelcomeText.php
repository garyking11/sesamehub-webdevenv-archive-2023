<?php
/**
 * Created by PhpStorm.
 * User: gking
 * Date: 7/1/2016
 * Time: 12:50 PM
 * Gets content from .metadata
 * See WelcomeTextController.php
 */

namespace Sesame\Utilities;

class MetaUtilityWelcomeText
{
    public function getPath($sitename)
    {
        return sprintf(dirname(__FILE__).'/../../../../%s/.hub-welcome-text', $sitename);
    }

    public function exists($sitename)
    {
        return file_exists($this->getPath($sitename));
    }

    public function write($sitename, $contents)
    {
        $contents = $contents;

        file_put_contents($this->getPath($sitename), $contents);
    }

    public function read($sitename)
    {
        return file_get_contents($this->getPath($sitename));
    }

    /**
     * @param $sitename
     * @throws \Exception
     * Currently not functioning
     */
    public function delete($sitename)
    {
        if (!@unlink($this->getPath($sitename))) {
            throw new \Exception("Could not delete hub-welcome-text file.");
        }
    }
}
