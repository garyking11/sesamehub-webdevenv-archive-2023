<?php

/*
HELPER FUNCTIONS
//echo office_locations(array('name', 'address', 'phone', 'email'))
//echo social_media_links()

Check if current page is Homepage. Great for adding slideshow, etc.
<?php if (is_homepage()): ?>
  <div id="slideshow"></div>
<?php endif ?>

Subnav:
<?php echo sub_navigation($breaks='', $exclusions=array(), $separator=' | ', $attr=array('class' => 'text-nav'))) ?>

Text Subnav - sub navigation formatted with paragraph tag:
<?php echo text_sub_navigation() ?>

Prints page image
<?php echo $page['image'] ?>
Add cntact us widget. <?php echo $site->widget('contact-us-form', 'home') ?>
*/

/* start image placement*/
if (!function_exists('place_image')) {

    function place_image($file='', $alt='', $class='', $title='', $path = null)
    {
        global $sitename;

        $filename = $_SERVER['REQUEST_URI'];
        $filename = substr($filename, strpos($filename, '/', 1));

        if (null === $path) {
            $path = dirname(__FILE__).'/../../../../' . $sitename;
        }

        if ($filename == '/forms/appointment-request/success' || $filename == '/forms/appointment-request/error' ||
            $filename == '/forms/refer-a-friend/success' || $filename == '/forms/refer-a-friend/error' ||
            $filename == '/forms/refer-a-patient/success' || $filename == 'forms/refer-a-patient/error' ||
            $filename == '/forms/post-appointment-survey/success' || $filename == '/forms/post-appointment-survey/error')
        { $filename = '/what-sets-us-apart';} // default image

        if (is_blog()) { $filename = '/blog';}
        $file = $alt = substr($filename, 1);
        $alt = str_replace('-', ' ', $alt);

        /*if (file_exists("/assets/uploads/images/$file"))
        {
          print_image_tag($file, $alt, $class, $title);
        }

        else
        {*/
        # look for missing extensions
        $extensions = array('.jpg', '.gif', '.png');

        foreach($extensions as $ext)
        {
            $try_file = $file.$ext;

            //$path = __FILE__;
            //$path = substr($path, 0, strlen($path)-10);
            $path = rtrim($path, '/');
            $thefile = "$path/www/assets/uploads/images/$try_file";

            if(file_exists($thefile))
            {
                //list($w, $h) = getimagesize("$path/assets/uploads/images/$try_file");
                $img_tag = "<img src=\"/assets/uploads/images/$try_file\""; // width=\"$w\" height=\"$h\"
                if($class){$img_tag .= " class=\"$class\"";}
                if($alt){$img_tag .= " alt=\"$alt\"";}
                if($title){$img_tag .= " alt=\"$title\"";}
                $img_tag .= " />";

                print $img_tag;

                break;
            }


        }
        /*}*/
    }

}


if (!function_exists('generate_stylesheets')) {

    function generate_stylesheets($path) {

        generate_css_from_less($path);
        generate_ie_css($path);

    }

}


if (!function_exists('generate_css_from_less')) {

    function generate_css_from_less($path) {

        $cssPath 	= rtrim($path, '/').'/assets/css/local.css';
        $lessPath 	= rtrim($path, '/').'/assets/css/local.less';
        // If css has been modified independent of .less file then return false
        if (file_exists($cssPath) && filemtime($lessPath) < filemtime($cssPath)) return false;

        $lessFile = @file_get_contents($lessPath);

        if (!$lessFile) return false;

        if (!class_exists('lessc')) {
            include dirname(__FILE__).'/less_compiler.php';
        }

        $less = new lessc();
        $less->setImportDir($path.'/assets/css');

        $css = $less->compile($lessFile);

        return file_put_contents($cssPath, $css);

    }
}


/**
 * Local IE CSS Automated Generator
 * Creates a local-ie.css file if one does not already exist.  Bases this
 * file off of your local.css file.
 *
 *
 */
if (!function_exists('generate_ie_css')) {

    function generate_ie_css($path) {

        $cssPath    = rtrim($path, '/').'/assets/css/local.css';
        $iePath     = rtrim($path, '/').'/assets/css/local-ie.css';

        if (file_exists($iePath) && filemtime($cssPath) < filemtime($iePath)) return false;

        $local_css = file_get_contents($cssPath);

        $parsed = preg_replace(
            array(
                '!/\*.*?\*/!s',
                '/\@media(.*){/',
                '/\}([^{]+)?\}/'
            ),
            array(
                '', '', '}'
            ), $local_css);

        return file_put_contents($iePath, $parsed);

    }

}

/**
 * Takes an array and creates false variables that can be used
 * by the text editor.
 *
 *
 * @param string $string
 * @param array $data
 * @param string $pre
 * @param string $suf
 * @return string
 */

if (!function_exists('prepText')) {

    function prepText ($string, array $data = array(), $pre = '{{', $suf = '}}') {

        $values = array_values($data);
        $keys   = array_keys($data);

        foreach ($keys as &$key) {
            $key = $pre.strtoupper($key).$suf;
        }

        return str_replace($keys, $values, $string);

    }
}


if (!function_exists('phone')) {

    function phone($number) {
        $link = str_replace(array('(',')','.','-', ' '), '', $number);
        return "<a href=\"tel:{$link}\">{$number}</a>";
    }

}

function public_path($path, $absolute = false)
{
    global $request;
    global $sitename;

    $root = '/' . $sitename;

    if ($absolute) {
        $source = $request->getScheme() . '://' . $request->getHost() . $root;
    } else {
        $source = $root;
    }

    if (substr($path, 0, 1) != '/') {
        $path = '/'.$path;
    }

    return $source.$path;
}