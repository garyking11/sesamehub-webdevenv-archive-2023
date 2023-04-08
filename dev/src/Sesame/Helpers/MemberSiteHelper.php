<?php
/**
 * Created by PhpStorm.
 * User: gking
 * Date: 6/13/2016
 * Time: 1:58 PM
 */

function get_sitemap()
{
    throw new \RuntimeException("Not Implemented");
}

function get_formatter()
{
    global $site;
    return $site;
}

function get_site_helper()
{
    throw new \RuntimeException("Not Implemented");
}

function get_site()
{
    throw new \RuntimeException("Not Implemented");
}

function is_homepage()
{
    global $request;

    if ('homepage' === $request->attributes->get('_route') || 'index' === $request->attributes->get('_route')) {
        return true;
    }

    return false;
}

function is_blog()
{
    return false;
}

function slug_name($string)
{
    return replace_chars(strtolower(strip_special_chars($string)));
}

function strip_special_chars($string)
{
    # Define special characters that will be stripped from the name
    $special_chars = array('.',',','?','!','$','(',')',':','"',"'",'*','&#39;','&copy;','&reg;','&trade;');
    $processed_string = str_replace($special_chars, '', $string);
    return $processed_string;
}

function replace_chars($string, $replacements=array('&amp;' => 'and','&' => 'and', ' ' => '-','/' => '-'))
{
    return str_replace(array_keys($replacements), array_values($replacements), $string);
}

function sanitize_title_text($string)
{
    $sanitized_text = strip_special_chars($string);
    $sanitized_text = replace_chars($sanitized_text, $replacements=array('&amp;' => 'and', '&' => 'and', '/' => '-', 'Dr ' => 'Dr. '));
    return $sanitized_text;
}

function exists($var)
{
    return (isset($var) && !empty($var));
}

function value_or_default($value, $default='')
{
    return empty($value) ? $default : $value;
}

function format_email($address)
{
    global $site;
    return $site->format_email();
}

function social_media_links($attr=array('class' => 'social-media'))
{
    throw new \RuntimeException("Not Implemented");
}

function page_logos($attr=array('class' => 'logos'))
{
    return '';
}

function office_locations($use_fields=array('name', 'address', 'phone'))
{
    global $site;
    return $site->office_locations();
}

function hit_counter()
{
    return '';
}

function widget($slug, $pages=array())
{
    throw new \RuntimeException("Not Implemented");
}

function navigation($exclusions=array(), $include_sub_nav=true, $attr=array())
{
    global $site;
    return $site->navigation();
}

function welcome_text($exclusions=array(), $include_sub_nav=false, $attr=array())
{
    global $site;
    return $site->welcome_text();
}

function custom_navigation($inclusions=array(), $include_sub_nav=true, $attr=array())
{
    global $site;
    return $site->custom_navigation();
}

function sub_navigation($excludes=array(), $attr=array('id' => 'subnav'), $pre_string='', $post_string='')
{
    global $site;
    return $site->sub_navigation();
}

function text_sub_navigation($breaks=null, $separator=' | ', $attrs=array('class' => 'sub-nav'))
{
    global $site;
    return $site->text_sub_navigation();
}

function text_navigation($breaks='', $exclusions=array(), $separator=' | ', $attr=array('class' => 'text-nav'))
{
    global $site;
    return $site->text_navigation();
}

function callout_navigation($callouts=array(), $attrs=array('class' => 'callouts'), $tag='ul', $item_tag='li')
{
    throw new \RuntimeException("Not Implemented");
}

function sitemap($exclusions=array(), $tag_options=array())
{
    throw new \RuntimeException("Not Implemented");
}