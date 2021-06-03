// 2. This code loads the IFrame Player API code asynchronously.
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
  // <div id="player"></div> 알아서 id로 찾으니 #넣지 않기
  new YT.Player('player', {
    videoId: 'fHRcVwtlvZ8', // 최초 재생할 유튜브 영상 id
    playerVars: {
      autoplay: true, // 자동 재생 유뮤
      loop: true, // 반복 재생 유무
      playlist: 'fHRcVwtlvZ8', // 반복 재생 할 유튜브 영상 id 목록
      controls: 0
    },
    events: {
      onReady: function (event) { // 영상이 준비가 되면 함수가 실행되어라
        event.target.mute() // 음소거
      }
    }
  });
}

