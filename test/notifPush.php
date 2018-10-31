<?php

#API access key from Google API's Console
    define( 'API_ACCESS_KEY', 'AAAARc2_zXs:APA91bGSxMOBSuQyo_U5qNN9pl_UdOVNQIeFqQYYD_t5V7cT0O0Ytva33sIVF8SHr5TUP6rK15SuTFyUHm2XTop1MAE6KHBrxzbhnEv47xJkEYdDPneNUhvi70aLPNpCwgzzcggxV3hx' );
    $registrationIds1 = 'dbV4iaUVbjQ:APA91bF5Lo11t3d2BUWQtaF_guR05v_u6iZsk63e1f9-3DMEoRax6b3dPEyfVkqY5q0NkFmG_eedA4x11fb2EXxC0uuc4Z4rkRj_U_DN3mkn04dEAbvBOkj4mW1SWuQiOlmcOqtGyii1';
    $registrationIds2 = 'cUXdrqE38HI:APA91bHON7q_kbDFxO808bP-zmkjaP_4U0oQzwrga-o5gP_qzpqJp-RIcBzZnJFX0glSuITAXvzlZ-ke2CDMs5m6NnyCOgSSeelBDhK89k5Y6zlqgJ4YwO53p5OyMeCEiBJoLvxvu_d9';

    // TOKEN ANDROID 250 
    // UID   APPLE  
#prep the bundle
     $msg = array
          (
		'body' 	=> 'Body2  Of Notification',
		'title'	=> 'Title2 Of Notification',
             	'icon'	=> 'myicon',/*Default Icon*/
              	'sound' => 'mySound'/*Default sound*/
          );
	$fields = array
			(
                'registration_ids' => array($registrationIds1,$registrationIds2),
				//'to'		=> $registrationIds1,
				'notification'	=> $msg
			);
	
	
	$headers = array
			(
				'Authorization: key=' . API_ACCESS_KEY,
				'Content-Type: application/json'
			);
#Send Reponse To FireBase Server	
		$ch = curl_init();
		curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
		curl_setopt( $ch,CURLOPT_POST, true );
		curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
		curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
		curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
		curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
		$result = curl_exec($ch );
		curl_close( $ch );
#Echo Result Of FireBase Server
echo $result;
