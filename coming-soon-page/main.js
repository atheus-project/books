window.addEventListener('load', () => {
    /* Ali Asian - https://www.youtube.com/watch?v=KIE3th7lWxI */
    const blurDivs = document.querySelectorAll(".blur-load");

    blurDivs.forEach(div => {
        const img = div.querySelector("img");
        const loaded = () => div.classList.add("loaded");
    
        if (img.complete) loaded();
        else img.addEventListener("load", loaded);
    });

    var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'NluYVdbJP6I',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      function onPlayerStateChange(event) {
        console.log("YouTube Player state change");
        if (event.data == YT.PlayerState.PLAYING) {
          document.querySelector(".wrapper").classList.add("hue-rotate");
        } else {
          document.querySelector(".wrapper").classList.remove("hue-rotate");
        }
      }
});