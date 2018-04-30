
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      var players = [];
      function onYouTubeIframeAPIReady() {
        players.push(
            new YT.Player('player1', {
                height: '360',
                width: '640',
                videoId: 'OfrsCVCL6I4',
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
            })
        );

        players.push(
            new YT.Player('player2', {
                height: '360',
                width: '640',
                videoId: 'mKCLkv6kOvI',
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
            })
        );

        players.push(
            new YT.Player('player3', {
                height: '360',
                width: '640',
                videoId: 'yFTmCrwAJdQ',
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
            })
        );

        
      }


      function onPlayerReady(event) {
        event.target.pauseVideo();
      }

      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
            stopVideoAll(event.target.a.id);
        }
        
      }
      function stopVideoAll(id) {
        players.map(function(player){
            if(id === player.a.id)
                return;
            else
                player.stopVideo(); 
        })
      }


