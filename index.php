<?php

require_once('API.class.php');

/**
 * Here I'm creating a new Portfolio object and then
 * calling the "fakeIt" function of that particular Portfolio instance.
 * 
 */
    $api = new API();
    //$api->fakeDatabaseValues();
    $api->identifyRequest($_GET);
    $api->performRequest();
    $api->returnRequest('JSON');
    