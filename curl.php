<?php

	class mcdonalds_curl{

		public function mcdonalds_curl($url, $header, $content){
			$this->url = $url;
			$this->header = $header;
			$this->content = $content;
			$this->init();
		}

		public function init(){
			$this->ch = curl_init(); 
			curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, true);
		    curl_setopt($this->ch, CURLOPT_URL, $this->url);
		    curl_setopt($this->ch, CURLOPT_HTTPHEADER, $this->header);
		    curl_setopt($this->ch, CURLOPT_POST, 1);
		    curl_setopt($this->ch, CURLOPT_POSTFIELDS, json_encode($this->content));
		    curl_setopt($this->ch, CURLOPT_RETURNTRANSFER, 1);
		}

		public function curl_close($ch){
			curl_close($this->ch);
		}

	}
 ?>