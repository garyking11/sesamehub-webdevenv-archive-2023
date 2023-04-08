<?php
require_once(dirname(__FILE__).'/../vendor/autoload.php');

use Sesame\Application;
use Symfony\Component\HttpFoundation\Request;

$application = new Application();
$application->initialize();

$request = Request::createFromGlobals();
$response = $application->handle($request);
$response->send();
