<?php
header("Access-Control-Allow-Origin: *");
$data = file_get_contents("php://input", true);
header('Content-Type: application/json');
$decoded = json_decode($data, true);
$account = $decoded['account'];
$directory = $decoded['directory'];
echo json_encode ( getLocalFiles($account, $directory) );// Turns into json string

/**
 * @param $account
 * @param $directory
 * @return array|false
 */
function getLocalFiles($account, $directory)
{
    try {
        $path = __DIR__ . '/../../' . $account . '/www/assets/' . $directory ;

        $list = [];
        $files = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path, FilesystemIterator::SKIP_DOTS));
        /** @var SplFileObject $file */
        foreach ($files as $file) {
            $fileInfo = [
                'path' => absoluteToRelative($path, $file->getPathname()),
                'filename' => $file->getFilename(),
                'ext' => $file->getExtension(),
            ];

            if (in_array(strtolower($file->getExtension()), ['jpg', 'jpeg', 'png', 'gif', 'webp'])) {
                $size = getimagesize($file->getPathname());
                $fileInfo['width'] = $size[0];
                $fileInfo['height'] = $size[1];
                $fileInfo['mime'] = $size['mime'];
            }

            $list[] = $fileInfo;
        }

        return $list;
    } catch (Exception $e) {
        echo $e->getMessage();
    }

    return false;
}

function absoluteToRelative($root, $path)
{
    $root = realpath($root);
    $path = realpath($path);

    if (substr($path, 0, strlen($root)) !== $root) {
        return $path;
    }

    $relative = substr($path, strlen($root) + 1);
    $relative = ltrim($relative, '/');

    return $relative;
}