
; (function () {
  function init() {
    document.addEventListener('DOMContentLoaded', function () {

      function skip() {
        const videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
        let playerSessionId, player;

        let interval = setInterval(() => {
          if (netflix.appContext.state.playerApp.getAPI().videoPlayer.hasVideoSession()) {
            playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];
            player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);
            if (!player.isLoading()) {
              document.getElementsByTagName("video")[0].ontimeupdate = function (event) {
                // mock data for skipping
                const movieIndex = [
                  { indexInMs: 0, durationMs: 3000 },
                  { indexInMs: 5530, durationMs: 3450 },
                  { indexInMs: 12031, durationMs: 3322 },
                  { indexInMs: 18022, durationMs: 2000 },
                  { indexInMs: 22122, durationMs: 3000 }
                ];
                movieIndex.find((el, index, object) => {
                  if (
                    parseInt(event.currentTarget.currentTime * 1000) - el.indexInMs < 1000 &&
                    parseInt(event.currentTarget.currentTime * 1000) - el.indexInMs > 0
                  ) {
                    console.log(
                      "timeupdated to" + player.getCurrentTime() + el.durationMs + " !"
                    );
                    //skipping
                    player.seek(player.getCurrentTime() + el.durationMs);
                    // delete from object for performance 
                    object.splice(index, 1);
                    return true;
                  }
                });
              };
            }
          }
          if (player && !player.isLoading()) {
            clearInterval(interval)
          }
        }, 10);
      }
      skip();
    });
    //# sourceURL=netflixScript.js

  }

  function inject(fn) {

    const script = document.createElement('script')
    script.text = `(${fn.toString()})();`
    document.documentElement.appendChild(script)
  }
  let data;

  fetch('/sample/sample.json')
    .then(res => {
      data = res
      console.log(data)
    })
    .catch(err => console.log(err))

  inject(init)
})()