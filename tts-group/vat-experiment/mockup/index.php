<?php

// Settings
$config['title']        = 'TTS Group';
$config['background']   = FALSE;
$config['uppercase']    = FALSE;
$config['reverse']      = FALSE;

// Definitions
$image_dir  = getcwd() . '/images';
$cache_dir  = getcwd() . '/cache';
$bg_dir     = getcwd() . '/backgrounds';
$image_path = 'images';
$cache_path = 'cache';
$bg_path    = 'backgrounds';
$thumb_size = 200;

// Set memory limit
ini_set('memory_limit', -1);

// Functions
function get_name($str) {
    return preg_replace('/\.[^.]+$/', '', $str);
}

function get_text($str, $case = FALSE) {
    $str = get_name($str);
    $str = str_replace('_', ' ', $str);
    if ($case) {
        $str = ucwords($str);
    }
    return $str;
}

// Check cache directory exists
if (!is_dir($cache_dir)) {
    mkdir($cache_dir);
}

// Check for current view
$view       = isset($_GET['view']) ? $_GET['view'] : FALSE;
$view_file  = "$image_dir/$view";

// Show current view
if ($view && file_exists($view_file)) {

    $view_name  = get_name($view);
    $view_text  = get_text($view, $config['uppercase']);
    $view_path  = "$image_path/$view";
    $view_css   = "background: url('$bg_path/$view') center top repeat-x; ";

    // Check for background image
    if ($config['background']) {

        $cache_file = "$cache_dir/{$view_name}_background.png";
        $view_css   = "background: url('$cache_path/{$view_name}_background.png'); ";

        // Check cached background image
        if ( !file_exists($cache_file) ||
            filemtime($cache_file) < filemtime($view_file) ) {

            // Regenerate cached background image
            $original = imagecreatefrompng($view_file);
            list($width, $height) = getimagesize($view_file);
            $cropped = imagecreatetruecolor(1, $height);
            imagecopy($cropped, $original, 0, 0, 0, 0, 1, $height);
            imagepng($cropped, $cache_file);

        }

    }

    // Write HTML output

    ?><!DOCTYPE html>

<html lang="en">

<meta charset="utf-8" />

<title><?php echo $config['title']; ?> - <?php echo $view_text; ?></title>

<style>

body { margin: 0; padding: 0; <?php echo $view_css; ?>}
img { display: block; margin: 0 auto; }

</style>

<img src="<?php echo $view_path; ?>" alt="" />

</html><?php

    exit;

}

// Show full list
$images = array();
$modified = array();

// Look for images and add to array
$dir = opendir($image_dir);

while ($view = readdir($dir)) {
    if ($view !== '.' && $view !== '..' && strpos($view, '_') !== 0) {

        // Original file
        $view_name  = get_name($view);
        $view_text  = get_text($view, $config['uppercase']);
        $view_file  = "$image_dir/$view";

        // Cached thumbnail
        $thumb_file = "$cache_dir/{$view_name}_thumbnail.png";
        $thumb_path = "$cache_path/{$view_name}_thumbnail.png";

        if ( !file_exists($thumb_file) ||
            filemtime($thumb_file) < filemtime($view_file) ) {

            // Regenerate cached image
            $original = imagecreatefrompng($view_file);
            list($width, $height) = getimagesize($view_file);

            // Crop
            $cropped = imagecreatetruecolor($width, $width);
            imagecopy($cropped, $original, 0, 0, 0, 0, $width, $width);

            // Resize
            $resized = imagecreatetruecolor($thumb_size, $thumb_size);
            imagecopyresampled($resized, $cropped, 0, 0, 0, 0, $thumb_size, $thumb_size, $width, $width);

            // Update file
            imagepng($resized, $thumb_file);

        }

        // Assemble array of designs
        $images[] = array(
            'text' => $view_text,
            'view' => $view,
            'thumb' => $thumb_path,
        );

        // Assemble array of modified times
        $modified[] = filemtime($view_file);

    }
}

closedir($dir);

// Sort order
if ($config['reverse']) {
    rsort($images);
}
else {
    sort($images);
}

// Write HTML output
$updated = date('j M Y', max($modified));

?><!DOCTYPE html>

<html lang="en">

<meta charset="utf-8" />

<title><?php echo $config['title']; ?></title>

<style>

body {
    color: #333;
    font-family: sans-serif;
    font-size: 14px;
    line-height: 1.5;
    margin: 0 auto;
    width: 960px;
}

a {
    color: #06c;
}

a:focus {
    outline: 1px dotted;
}

h1,
h2,
h3 {
    line-height: 1.25;
    margin: 1em 0 0 0;
}

h1 {
    font-size: 32px;
}

h2 {
    font-size: 24px;
}

p {
    margin: 1em 0;
}

.header {
    text-align: center;
}

.header p {
    color: #999;
}

.view:after {
    clear: both;
    content: "";
    display: block;
}

.view ul {
    padding: 0;
}

.view li {
    display: block;
    float: left;
    margin: 20px;
    text-align: center;
    height: 240px;
    width: 200px;
}

.view a {
    color: inherit;
    text-decoration: none;
}

.view a:focus {
    outline: 0;
}

.view img {
    border: 1px solid #ddd;
    margin-bottom: 0.25em;
    transition: 200ms ease;
}

.view a:hover img {
    box-shadow: 0 0.25em 1em rgba(0, 0, 0, 0.2);
}

.view h3 {
    font-weight: normal;
    margin: 0;
}

.footer {
    clear: both;
    color: #999;
    margin-top: 4em;
    text-align: center;
}

.footer a {
    color: inherit;
    text-decoration: none;
}

</style>
<body>

<div class="header">
    <h1><?php echo $config['title']; ?></h1>
    <p>Updated on <?php echo $updated; ?></p>
</div>

<div class="view">
    <ul><?php

        foreach ($images as $image) {

            $text = $image['text'];
            $view = $image['view'];
            $thumb = $image['thumb'];

            echo "<li><a href=\"index.php?view=$view\"><img src=\"$thumb\" alt=\"$text\" /> $text</a></li>";

        }

    ?></ul>
</div>

<div class="footer">
    <p><a href="http://www.castlegateit.co.uk/">Castlegate IT</a></p>
</div>

</body>

</html>
