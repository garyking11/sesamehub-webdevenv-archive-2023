<?php
class contentManager
{

    public function getVars()
    {
        return $this->json;
    }

    protected function isValidJson($string)
    {
        return is_object(json_decode($string));
    }

    protected function getJson()
    {
        $arr = array($_POST);

        if (file_exists($this->jsonFileName)) {
            $json = file_get_contents($this->jsonFileName);
            $arr = ($this->isValidJson($json) && strtolower($json) != 'array' ? json_decode($json, true) : array());
        }

        return $arr;
    }

    public function __construct()
    {

        $this->content_properties = $this->getJson();
        $content_properties = $this->content_properties;

    }

    // Save to redirects-page-data.json
    public function save($data)
    {

        $data = json_decode($data, true);
        $sub = $data['user'];

        $output = array();

        if (!$jsonFile = fopen($_SERVER['DOCUMENT_ROOT'] .'/hub_sites/' . $sub  . '/www/assets/includes/process/redirects/page-data-redirects.json', 'w')) {
            $output['status'] = false;
            $output['msg'] = 'Could not open file.' . $_SERVER['DOCUMENT_ROOT'] .'/hub_sites/' . $sub  . '/www/assets/includes/process/redirects-page-data-redirects.json';

        } else {
            if (count($this->json) < 1) {
                $this->json = $data;
            } else {
                foreach ($data as $d => $dd) {
                    $this->json[$d] = $data[$d];
                }
            }
            $jsonSave = json_encode($this->json);
            if (fwrite($jsonFile, $jsonSave) === false) {
                $output['status'] = false;
                $output['msg'] = "Could not save file.";
            } else {
                $output['status'] = true;
                $output['msg'] = "page-data-redirects.json successfully saved.";

            }
        }
        fclose($jsonFile);
        chmod($_SERVER['DOCUMENT_ROOT'] .'/hub_sites/' . $sub  . '/www/assets/includes/process/redirects/page-data-redirects.json', 0777);
        return $output;
    }


} // end contentManager
