<?php

$albums = file_get_contents('albums_data.json');
header('content-type: application/json');
echo $albums;

// $json_string = json_encode($albums);
// file_put_contents('albums_data.json', $json_string);
