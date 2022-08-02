let number = 0;
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  return new Promise(function(resolve) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function() {
      if (request.readyState == 4) {
        if(request.status == 200) {
          const res = request.response;
          resolve(res);
        }
      }
    }
    request.open("GET", "ajax.json");
    request.responseType = "json"
    request.send(null);
  })
}

async function changeVideo() {
  let data = []; //--4
  if(data.length < 1) {
    data = await getData() //--3
  }
  button.addEventListener('click', e => {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", request.response[number].url);
    number == 2 ? number = 0 : number++
  })
}

window.onload = changeVideo;