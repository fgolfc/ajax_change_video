function getData() {
    // 1.XMLHttpRequestオブジェクトを生成する
    const request = new XMLHttpRequest(); //-- 1
    // 2. XMLHttpRequestオブジェクトにイベントハンドラを設定して、通信時の処理を設定する
    request.onreadystatechange = function() { //-- 2-1
      if (request.readyState == 4) { //-- 2-2
        if(request.status == 200) { //-- 2-3
          console.log(request.response); //-- 2-4
        }
      }
    }
    // 3. リクエストを送信
    request.open("GET", "data.txt"); //-- 3-1
    request.responseType = "text"; //-- 3-2
    request.send(null); //-- 3-3
  }
  
  window.onload = getData;