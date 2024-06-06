<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $url = 'https://crm.belmar.pro/api/v1/getstatuses';
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

    if ($result === FALSE) {
        echo json_encode(['status' => false, 'error' => 'Failed to fetch data from API']);
    } else {
        echo $result;
    }
}
?>
