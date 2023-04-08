<?php
/**
 * Created by PhpStorm.
 * User: gking
 * Date: 6/9/2016
 * Time: 3:30 PM
 */

namespace Sesame\Formatters;

use Sesame\Utilities\MetaUtility;
use Sesame\Utilities\MetaUtilityWelcomeText;

/**
 * Class MemberSiteFormatter
 * @package Sesame\Formatters
 * @see https://github.com/sesacom/sesame_cms/blob/master/lib/formatters/scMemberSiteFormatter.class.php
 */
class MemberSiteFormatter implements \ArrayAccess
{
    private $properties;
    private $slug = 'default';

    public function __construct(array $properties = array())
    {
        $this->properties = $properties;
        $this->updateLayoutClasses();
    }

    public function setPageSlug($slug)
    {
        $this->slug = $slug;
        $this->updateLayoutClasses();
    }

    private function updateLayoutClasses()
    {
        $this->properties['layout_classes'] = sprintf(
            '%s %s %s %s',
            $this->slug,
            $this->properties['sidebar_position'],
            $this->properties['footer_behavior'],
            $this->properties['nav_position']
        );
    }

    /**
     * @param null $exclusions
     * @param null $includeSubNav
     * @param null $attr
     */
    public function navigation($exclusions = null, $includeSubNav = null, $attr = null)
    {
        global $sitename;

        echo '<dev-tools></dev-tools>';

        $meta = new MetaUtility();
        if ($meta->exists($sitename)) {
            include(dirname(__FILE__) . '/../../../../' . $sitename . '/.metadata');
            return;
        }

        include(dirname(__FILE__) . '/../../../resources/.metadata');

    }

    public function welcome_text($exclusions = null, $includeSubNav = null, $attr = null)
    {
        global $sitename;
        echo '<app></app>';


        $metaWel = new MetaUtilityWelcomeText();
        if ($metaWel->exists($sitename)) {
            include(dirname(__FILE__) . '/../../../../' . $sitename . '/.hub-welcome-text');
            return;
        }

        include(dirname(__FILE__) . '/../../../resources/.hub-welcome-text');

    }

    public function custom_navigation($inclusions = null, $includeSubNav = null, $attr = null)
    {
        //<a id="doctor-login" href="">Doctor Login</a>
        return '<ul><li class="patient-login first"><a id="patient-login" class="patient-login" href="">Patient Login</a></li></ul>';
    }


    public function text_sub_navigation($breaks = null, $separator = ' | ', $attrs = array('class' => 'sub-nav'))
    {
        return '
		<p><a href="meet-the-doctor" class="about-us active">About Us</a> 
		 &#124; <a href="meet-the-team" class="about-us">Meet the Team</a>
		 &#124; <a href="life-with-braces" class="ortho-dictionary">Life With Braces</a>
		 &#124; <a href="office-visits" class="office-visits">For New Patients</a>
		 &#124; <a href="office-tour" class="office-tour">About Orthodontics</a>
		 &#124; <a href="before-and-after" class="before-and-after">Before and After</a>
		 &#124; <a href="seattle-office-location" class="seattle-office-location">Seattle Office Location</a>
		 &#124; <a href="meet-the-doctor" class="for-adults">Meet the Doctor</a></p>';
    }

    // FOOTER NAV
    function text_navigation($breaks = '', $exclusions = array(), $separator = ' | ', $attr = array('class' => 'text-nav'))
    {
        return '<p class="text-nav"><a href="home" class="home active">Home</a>
            <a href="meet-the-doctor" class="about-us">About Us</a>
            <a href="meet-the-team" class="about-us">Meet the Team</a>
            <a href="office-visits" class="office-visits">For New Patients</a>
            <a href="office-tour" class="office-tour">About Orthodontics</a>
            <a href="before-and-after" class="before-and-after">Before and After</a>
            <a href="appointment-request" class="appointment-request">Appointment Request</a>
            <a href="seattle-office-location" class="seattle-office-location">Seattle Office Location</a>
            <a href="shoreline-office-location" class="contact-us">Contact Us</a>
            <a href="sitemap">Site Map</a></p>';
    }

    public function sub_navigation()
    {
        return '<ul>

                <li class="office-visits first">
                    <a href="office-visits" class="office-visits">Office Visits</a></li>
                </li>
                
                <li class="financial-information active">
                    <a href="financial-information" class="financial-information active">Financial Information</a></li>
                </li>
                <li class="before-and-after">
                    <a href="before-and-after" class="before-and-after">Before and After </a></li>
                </li>
                <li class="patient-forms">
                    <a href="patient-forms" class="patient-forms">Patient Forms</a></li>
                </li>
                <li class="office-tour last">
                    <a href="office-tour" class="office-tour">Office Tour</a>
                </li>
            
            </ul>';
    }

    public function office_locations($use_fields = array('name', 'address', 'phone'))
    {
        return '<ul><li>Office 1</li></ul>';
    }

    public function office_locations_text($use_fields = array('name', 'address', 'phone'))
    {
        throw new \RuntimeException('not implemented');
    }

    public function widget($slug, $pages = array())
    {
        throw new \RuntimeException('not implemented');
    }

    public function format_email($address)
    {
        throw new \RuntimeException('not implemented');
    }

    public function hit_counter()
    {
        return '';
    }

    public function offsetSet($key, $value)
    {
        $this->properties[$key] = $value;
    }


    /**
     * Implementation of ArrayAccess:offsetGet()
     *
     * @param mixed $key Key to retrieve value of
     * @return mixed      Value of given key
     */
    public function offsetGet($key)
    {
        return $this->properties[$key];
    }


    /**
     * Implementation of ArrayAccess:offsetUnset()
     *
     * @param mixed $key Key to unset
     */
    public function offsetUnset($key)
    {
        unset($this->properties[$key]);
    }


    /**
     * Implementation of ArrayAccess:offsetExists()
     *
     * @param mixed $key Key to check for
     * @return bool       Whether it's set or not
     */
    public function offsetExists($key)
    {
        return isset($this->properties[$key]);
    }


} // end Member Formatter




