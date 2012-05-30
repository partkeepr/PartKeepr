<?php
namespace PartKeepr\REST;

// Class taken over from the Sencha example
class Response {
    public $success, $data, $message, $errors, $tid, $trace;

    public function __construct($params = array()) {
        $this->success  = isset($params["success"]) ? $params["success"] : false;
        $this->message  = isset($params["message"]) ? $params["message"] : '';
        $this->data     = isset($params["data"])    ? $params["data"]    : array();
    }

    public function to_json() {
        return json_encode(array(
            'success'   => $this->success,
            'message'   => $this->message,
            'data'      => $this->data
        ));
    }
}
