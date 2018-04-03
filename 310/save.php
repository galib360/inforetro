<?php
	define('UPLOAD_DIR', '../images/');
	$img = $_POST[imgBase64];
	list($type, $img) = explode(';', $img);
	list(, $img)      = explode(',', $img);
	$data = base64_decode($img);
	$file = UPLOAD_DIR . uniqid() . '.png';

	file_put_contents($file, $data);
?>