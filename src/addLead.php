<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $data['box_id'] = 28;
    $data['offer_id'] = 5;
    $data['countryCode'] = 'GB';
    $data['language'] = 'en';
    $data['password'] = 'qwerty12';
    $data['ip'] = $_SERVER['REMOTE_ADDR'];
    $data['landingUrl'] = $_SERVER['HTTP_HOST'];

    $url = 'https://crm.belmar.pro/api/v1/addlead';
    $options = [
        'http' => [
            'header'  => "Content-Type: application/json\r\n" .
                         "token: ba67df6a-a17c-476f-8e95-bcdb75ed3958\r\n",
            'method'  => 'POST',
            'content' => json_encode($data),
        ],
    ];

    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);

    echo $result;
}
?>
