

async function init(firstTime) {

    console.log('inits...')
    function setSkippedShots(category) {

        let categ = category || ["Explicit Nudity"];
        // now change to index of
        let trueModLabels = labels.filter(e => categ.indexOf(e.ModerationLabel.Name) > -1 || categ.indexOf(e.ModerationLabel.ParentName) > -1)
        shotSkipped = shots.filter(seg => {
            return trueModLabels.find(label => {
                return label.Timestamp > seg.StartTimestampMillis &&
                    label.Timestamp < seg.EndTimestampMillis
            })
        }).map(t => {
            return {
                'startTime': t.StartTimestampMillis,
                'durationInMs': t.DurationMillis,
                'endTime': t.EndTimestampMillis
            }
        })
        console.log(`will skip ${shotSkipped.length} shots`)
    }

    let shotSkipped = [];

    let video;
    let playerSessionId, player;
    let labels = await fetch('http://18.157.136.67/api/generes/getlabels')
    if (labels) {
        console.log(labels)
        setSkippedShots();
    }

    console.log('first is' + firstTime)
    function skip() {
        const videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
        // interval for checking whether player is loaded by netflix
        let interval = setInterval(() => {
            if (netflix.appContext.state.playerApp.getAPI().videoPlayer.hasVideoSession()) {
                playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];
                player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);
                if (!player.isLoading()) {
                    //canceling prev shot filter
                    video = document.getElementsByTagName("video")[0]
                    // interval for checking if player is ready to filter               
                    let subInterval = setInterval(() => {
                        if (player.isReady()) {
                            reqAnim(firstTime);
                            clearInterval(subInterval)
                            // prevent seek into the skipped scene
                            video.onseeking = (event) => {
                                shotSkipped.find((el, index, object) => {
                                    if (
                                        parseInt(video.currentTime * 1000) > el.startTime &&
                                        parseInt(video.currentTime * 1000) < el.endTime
                                    ) {
                                        player.seek(el.endTime);

                                        // TEST :  color video for indicate screen
                                        /*video.setAttribute('style', 'background:green')
                                        setTimeout(() => {
                                          video.setAttribute('style', 'background:none')
                                        },  el.indexInMs + el.durationMs - (video.currentTime * 1000))*/
                                        console.log(`nice try seeking to scene :)  time : ${video.currentTime} between ${el.startTime} to ${el.endTime} shotSkipped length: ${shotSkipped.length} `)
                                        return true;
                                    }
                                });
                            };
                        }
                    }, 10);

                }
            }
            if (player && !player.isLoading()) {
                clearInterval(interval)
            }
        }, 10);
    }
    function createButtons() {

        const minLevel = document.createElement('button');
        minLevel.setAttribute('id', '85');
        minLevel.style.cssText = 'margin: 5px; border: none';
        minLevel.innerText = 'Avoid Only explicit Nudity and Violence'

        const midLevel = document.createElement('button');
        midLevel.setAttribute('id', '75');
        midLevel.style.cssText = 'margin: 5px; border: none';
        midLevel.innerText = 'Avoid explicit Nudity ,Violence ,Suggestive, Visually Disturbing';

        const maxLevel = document.createElement('button');
        maxLevel.setAttribute('id', '65');
        maxLevel.style.cssText = 'margin: 5px; border: none';
        maxLevel.innerText = 'Avoid explicit Nudity ,Violence ,Suggestive,Visually Disturbing,Rude Gestures,Hate Symbols';

        const panelElem = document.createElement('div');
        panelElem.style.cssText = 'position: absolute; z-index: 1000; top: 0; right: 0; font-size: 16px; color: black';
        panelElem.appendChild(minLevel);
        panelElem.appendChild(midLevel);
        panelElem.appendChild(maxLevel);
        const containerElem = document.createElement('div');
        containerElem.id = 'panel-cont';
        containerElem.style.cssText = 'width: 100%; height: 100%; position: absolute; top: 0; right: 0; bottom: 0; left: 0';
        containerElem.appendChild(panelElem);
        document.body.appendChild(containerElem);
        [minLevel, midLevel, maxLevel].forEach(btn => {
            btn.addEventListener('click', function (e) {
                let category = e.target.id;
                if (category == '85') {
                    category = ['Explicit Nudity', 'Violence']
                }
                if (category == '75') {
                    category = ['Explicit Nudity', 'Violence', 'Suggestive', 'Visually Disturbing']
                }
                if (category == '65') {
                    category = ['Explicit Nudity', 'Violence', 'Suggestive', 'Visually Disturbing', 'Rude Gestures', 'Hate Symbols']
                }
                console.log('clicked')
                setSkippedShots(category);
                console.log('after Set skipped shot length :' + shotSkipped.length)
                reqAnim();
                console.log('after reqAnim ')
            })
        })
    }
    function reqAnim(firstTime) {
        if (!firstTime) {
            cancelAnimationFrame(reqId);
        }
        else {
            createButtons()
        }
        var reqId = requestAnimationFrame(function play() {
            console.log(`will skip ${shotSkipped.length} shots`)

            shotSkipped.find((el, index, object) => {
                if (
                    parseInt(video.currentTime * 1000) >= el.startTime &&
                    parseInt(video.currentTime * 1000) <= el.endTime
                ) {
                    console.log(
                        `skipped scene! time diffrence is ${(video.currentTime * 1000) - el.startTime} shotSkipped length: ${shotSkipped.length} `
                    );
                    //skipping scene
                    player.seek(el.endTime);

                    // TEST :  color video for indicate screen
                    /* video.setAttribute('style', 'background:red')
                     setTimeout(() => {
                       video.setAttribute('style', 'background:none')
                     }, el.durationMs)*/
                    return true;
                }


            });
            //requesAnimationFrame is calling back to play function 16 times in second                  
            reqId = requestAnimationFrame(play);
        });
    }
    document.addEventListener('DOMContentLoaded', function () {
        skip();
    });

    //# sourceURL=netflixScript.js

}
function inject(fn) {
    const script = document.createElement('script')
    script.text = `(${fn.toString()})(true);`
    document.documentElement.appendChild(script)
}

inject(init)
