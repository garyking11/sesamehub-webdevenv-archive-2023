<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$accountname = $decoded = json_decode($data, true);
$src = realpath(dirname(__FILE__) . '/../../' . $accountname);
$dst = dirname(__FILE__) . '/../../archives/' . $accountname;
echo 'THIS IS A TEST';
function backup_buildkit($src, $dst, $prefix)
{
    $zip = new ZipArchive();
    $ret = $zip->open($dst . '.zip', ZipArchive::CREATE | ZipArchive::OVERWRITE);

    if ($ret !== TRUE) {
        printf('Failed with code %d', $ret);
    } else {
        $srcIterator = new RecursiveDirectoryIterator($src);
        $files = new RecursiveIteratorIterator($srcIterator);
        foreach ($files as $file) {
            if (!$file->isFile()) {
                continue;
            }

            $zip->addFile($file, $prefix . '/' . substr($file->getPathname(), strlen($src . '/')));
        }
        $zip->close();
    }
}

backup_buildkit($src, $dst, $accountname);




