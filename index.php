<?php
	require_once('config.php');
	require_once('curl.php');


	class travel{

		public $accessToken;

		public function travel(){

			$response = Http::get('token/apptoken', array('corpid' => CORPID, 'corpsecret' => SECRET, 'appid'=> APPID));
	        $this->accessToken = $response->app_access_token;
		}


		public function add(){

			$dataArr = [];

			$data = $_POST;
			
			$data['id'] = uniqid(16);
			
			$dataJson = file_get_contents('./data.json');
			
			if($dataJson != ''){
			
				$dataArr = json_decode($dataJson, true);	
			
			}
			
			$dataArr[] = $data;
			
			file_put_contents('./data.json', json_encode($dataArr));
			//poc会改成麦当劳uid
			$this->sendMsg($data['uid'], $data['name'].'提交了一份关于差旅的申请，需要您审批。', $data['id']);
			echo  '{code: 0, msg: "提交成功", "data": '.json_encode($data).' time: '.time().'}';

		}

		public function approve(){

			$status = $_GET['status'];
			$id = $_GET['id'];
			
			$dataJson = file_get_contents('./data.json');
			
			$dataArr = json_decode($dataJson, true);

			foreach ($dataArr as $key => $value) {
				
				if($value['id'] == $id){

					$dataArr[$key]['status'] = $status;
					$uid = $value['uid'];

				}
			}
			file_put_contents('./data.json', json_encode($dataArr));
·			$msg = '';
			if($_GET['status'] == 1){
				$msg = '您提交的差旅申请已经审批通过，请点击查看详情。';
			}else{
				$msg = '您提交的差旅申请被拒绝，请点击查看详情。';
			}
			$this->sendMsg($uid, $msg, $id);
			echo '{code: 0, msg: "操作成功", time: '.time().'}';

		}

		public function sendMsg($id, $content, $msgid){
			
			$time = time();

			$msg = array(
				"UserId" => $id,     
			    "MsgType" => "todo",
			    "CreateId" => $id,
			    "Body" => $content,
				"CreateTime" => $time,
				"Title" => "差旅审批",
				"Url" => "http://loc.joywok.com/test/mcdonalds/index.php?method=get&id=".$msgid,
			);

			$header = Http::curl_header($msg, $time, 'asdfqwer');

			$response = Http::post('message/send', $header, $msg, $this->accessToken);

		}

		public function get(){

			$id = $_GET['id'];

			$dataJson = file_get_contents('./data.json');
			
			$dataArr = json_decode($dataJson, true);
			
			foreach ($dataArr as $key => $value) {
				
				if($value['id'] == $id){
					$ret = $value;
				}

			}

			echo json_encode(array(
				'code' => 0,
				'data' => $ret,
				'time' => time() 
			));

		}

	}




	$travel = new travel();

	if($_GET['method'] == 'add'){

		$res = $travel->add();

	}else if($_GET['method'] == 'approve'){

		$res = $travel->approve();

	}else if($_GET['method'] == 'get'){

		$res = $travel->get();

	}

/*
*   http请求类
*/
	Class Http{

	    public static function get($path, $params){
	        
	        $url = APPSAPI_HOST . $path;

	        if (count($params) > 0){
	            $url = $url . "?";
	            $paramstr = http_build_query($params);
	            $url = $url . $paramstr;
	        }
	        
	        $ch = curl_init();
	        curl_setopt($ch, CURLOPT_URL, $url);
	        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	        curl_setopt($ch, CURLOPT_HEADER, 0);
	        $output = curl_exec($ch);
	        curl_close($ch);
	        
	        return json_decode($output);
	    }  

	    public static function post($path, $header,$params, $token){


	    	$url = APPSAPI_HOST . $path . '?app_access_token=' . $token;

	        $ch = curl_init();
	        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		    curl_setopt($ch, CURLOPT_URL, $url);
		    curl_setopt($ch, CURLOPT_POST, 1);
		    curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
		    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	        $output = curl_exec($ch);
	        curl_close($ch);
	        return json_decode($output);
	    } 

	    public static function curl_header($content, $time, $signature){
	        return [
	            'Content-Type: application/json;charset=UTF-8',
	            'Content-Length: ' . strlen(json_encode($content)),
	        ];
	    }  
	    
	}



