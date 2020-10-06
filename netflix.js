
; (function () {
  function init() {
    function _setSkippedShots() {
      Object.keys(data.detections).filter(e => data.detections[e].hasOwnProperty('categ')).map(res => data.detections[res]).map(e => {
        if (e.categ.tags.filter(r => skipTags.indexOf(r) > -1).length > 0) {

          e.occs.forEach(e => {
            console.log(e)
            shotSkipped.push({
              "shotId": e.id,
              "indexInMs": Number((data.segmentations.detected_shots[e.shs].fs / 25 * 1000).toFixed(0)),
              "durationMs":
                Number((data.segmentations.detected_shots[e.she].fe / 25 * 1000).toFixed(0))
                - Number((data.segmentations.detected_shots[e.shs].fs / 25 * 1000).toFixed(0))
            })
            //remove duplicates
            shotSkipped = shotSkipped.reduce((unique, o) => {
              let twin;
              if (!unique.some(obj => {
                twin = obj;
                if (obj.indexInMs === o.indexInMs) {
                  return true
                }
              }
              )) {
                unique.push(o);
              } else {  // pop out the shorter scene
                if (twin.durationMs > o.durationMs) {
                  unique.push(twin)
                  unique.splice(unique.indexOf(o), 1)
                }
                else {
                  unique.push(o)
                  unique.splice(unique.indexOf(twin), 1)
                }
              }
              return unique;
            }, []);

          })
        }
      })
    }
    function setSkippedShots() {
      let trueModLabels = labels.ModerationLabels.filter(e => e.ModerationLabel.Confidence > 80);
       shotSkipped = shots.Segments.filter(seg => {
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

    }
    let labels = {
      "JobStatus": "SUCCEEDED",
      "VideoMetadata": {
        "Codec": "h264",
        "DurationMillis": 260040,
        "Format": "QuickTime / MOV",
        "FrameRate": 25.0,
        "FrameHeight": 360,
        "FrameWidth": 640
      },
      "ModerationLabels": [
        {
          "Timestamp": 31520,
          "ModerationLabel": {
            "Confidence": 65.7198715209961,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 35040,
          "ModerationLabel": {
            "Confidence": 80.99772644042969,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 35040,
          "ModerationLabel": {
            "Confidence": 80.99772644042969,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 35520,
          "ModerationLabel": {
            "Confidence": 91.32337951660156,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 35520,
          "ModerationLabel": {
            "Confidence": 91.32337951660156,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 36040,
          "ModerationLabel": {
            "Confidence": 79.9326400756836,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 36040,
          "ModerationLabel": {
            "Confidence": 76.2920913696289,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 37520,
          "ModerationLabel": {
            "Confidence": 66.18464660644531,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 67960,
          "ModerationLabel": {
            "Confidence": 67.22721099853516,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 142160,
          "ModerationLabel": {
            "Confidence": 86.88850402832031,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 142160,
          "ModerationLabel": {
            "Confidence": 86.88850402832031,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 142640,
          "ModerationLabel": {
            "Confidence": 78.00850677490234,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 142640,
          "ModerationLabel": {
            "Confidence": 74.80319213867188,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 143640,
          "ModerationLabel": {
            "Confidence": 81.86200714111328,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 143640,
          "ModerationLabel": {
            "Confidence": 78.65669250488281,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 144160,
          "ModerationLabel": {
            "Confidence": 81.88526916503906,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 144160,
          "ModerationLabel": {
            "Confidence": 79.4283676147461,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 149640,
          "ModerationLabel": {
            "Confidence": 79.11434936523438,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 149640,
          "ModerationLabel": {
            "Confidence": 75.47383117675781,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 150160,
          "ModerationLabel": {
            "Confidence": 78.5789566040039,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 150160,
          "ModerationLabel": {
            "Confidence": 74.93815612792969,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 158160,
          "ModerationLabel": {
            "Confidence": 80.28462219238281,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 158160,
          "ModerationLabel": {
            "Confidence": 76.64273834228516,
            "Name": "Weapons",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 158640,
          "ModerationLabel": {
            "Confidence": 80.57672882080078,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 158640,
          "ModerationLabel": {
            "Confidence": 80.57672882080078,
            "Name": "Weapons",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 174960,
          "ModerationLabel": {
            "Confidence": 73.64703369140625,
            "Name": "Hanging",
            "ParentName": "Visually Disturbing"
          }
        },
        {
          "Timestamp": 174960,
          "ModerationLabel": {
            "Confidence": 73.64704895019531,
            "Name": "Visually Disturbing",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 175480,
          "ModerationLabel": {
            "Confidence": 74.67940521240234,
            "Name": "Hanging",
            "ParentName": "Visually Disturbing"
          }
        },
        {
          "Timestamp": 175480,
          "ModerationLabel": {
            "Confidence": 74.67941284179688,
            "Name": "Visually Disturbing",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 176960,
          "ModerationLabel": {
            "Confidence": 65.7704086303711,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 177480,
          "ModerationLabel": {
            "Confidence": 87.5427017211914,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 177480,
          "ModerationLabel": {
            "Confidence": 87.5427017211914,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 177960,
          "ModerationLabel": {
            "Confidence": 95.27345275878906,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 177960,
          "ModerationLabel": {
            "Confidence": 95.27345275878906,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 178480,
          "ModerationLabel": {
            "Confidence": 81.7178955078125,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 178480,
          "ModerationLabel": {
            "Confidence": 78.10021209716797,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 179480,
          "ModerationLabel": {
            "Confidence": 65.53901672363281,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 179680,
          "ModerationLabel": {
            "Confidence": 70.74437713623047,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 179680,
          "ModerationLabel": {
            "Confidence": 70.74437713623047,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 180160,
          "ModerationLabel": {
            "Confidence": 69.48358917236328,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 180160,
          "ModerationLabel": {
            "Confidence": 65.83987426757812,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 182160,
          "ModerationLabel": {
            "Confidence": 74.4488296508789,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 182160,
          "ModerationLabel": {
            "Confidence": 70.78595733642578,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 182680,
          "ModerationLabel": {
            "Confidence": 77.6898422241211,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 182680,
          "ModerationLabel": {
            "Confidence": 77.6898422241211,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 183160,
          "ModerationLabel": {
            "Confidence": 89.259033203125,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 183160,
          "ModerationLabel": {
            "Confidence": 89.259033203125,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 183680,
          "ModerationLabel": {
            "Confidence": 95.34580993652344,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 183680,
          "ModerationLabel": {
            "Confidence": 95.34580993652344,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 184160,
          "ModerationLabel": {
            "Confidence": 81.27562713623047,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 184160,
          "ModerationLabel": {
            "Confidence": 78.4363784790039,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 185680,
          "ModerationLabel": {
            "Confidence": 79.22044372558594,
            "Name": "Explicit Nudity",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 185680,
          "ModerationLabel": {
            "Confidence": 75.30743408203125,
            "Name": "Sexual Activity",
            "ParentName": "Explicit Nudity"
          }
        },
        {
          "Timestamp": 186160,
          "ModerationLabel": {
            "Confidence": 79.5254898071289,
            "Name": "Explicit Nudity",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 186160,
          "ModerationLabel": {
            "Confidence": 75.61231994628906,
            "Name": "Sexual Activity",
            "ParentName": "Explicit Nudity"
          }
        },
        {
          "Timestamp": 193680,
          "ModerationLabel": {
            "Confidence": 67.4162826538086,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 193680,
          "ModerationLabel": {
            "Confidence": 67.4162826538086,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 194160,
          "ModerationLabel": {
            "Confidence": 89.5451431274414,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 194160,
          "ModerationLabel": {
            "Confidence": 89.5451431274414,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 194680,
          "ModerationLabel": {
            "Confidence": 94.59674072265625,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 194680,
          "ModerationLabel": {
            "Confidence": 94.59674072265625,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 195160,
          "ModerationLabel": {
            "Confidence": 79.5341567993164,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 195160,
          "ModerationLabel": {
            "Confidence": 75.89292907714844,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 196680,
          "ModerationLabel": {
            "Confidence": 77.94677734375,
            "Name": "Explicit Nudity",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 196680,
          "ModerationLabel": {
            "Confidence": 74.03373718261719,
            "Name": "Sexual Activity",
            "ParentName": "Explicit Nudity"
          }
        },
        {
          "Timestamp": 197160,
          "ModerationLabel": {
            "Confidence": 74.22391510009766,
            "Name": "Explicit Nudity",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 197160,
          "ModerationLabel": {
            "Confidence": 70.3109359741211,
            "Name": "Sexual Activity",
            "ParentName": "Explicit Nudity"
          }
        },
        {
          "Timestamp": 197680,
          "ModerationLabel": {
            "Confidence": 65.86225891113281,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 199680,
          "ModerationLabel": {
            "Confidence": 66.3491439819336,
            "Name": "Graphic Violence Or Gore",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 199680,
          "ModerationLabel": {
            "Confidence": 70.47393798828125,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 199760,
          "ModerationLabel": {
            "Confidence": 70.44654846191406,
            "Name": "Graphic Violence Or Gore",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 199760,
          "ModerationLabel": {
            "Confidence": 73.75274658203125,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 200240,
          "ModerationLabel": {
            "Confidence": 67.6104736328125,
            "Name": "Graphic Violence Or Gore",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 200240,
          "ModerationLabel": {
            "Confidence": 70.93189239501953,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 205760,
          "ModerationLabel": {
            "Confidence": 65.4026870727539,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 206240,
          "ModerationLabel": {
            "Confidence": 76.12276458740234,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 206240,
          "ModerationLabel": {
            "Confidence": 75.52503204345703,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 210760,
          "ModerationLabel": {
            "Confidence": 77.41925811767578,
            "Name": "Explicit Nudity",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 210760,
          "ModerationLabel": {
            "Confidence": 77.41925811767578,
            "Name": "Graphic Male Nudity",
            "ParentName": "Explicit Nudity"
          }
        },
        {
          "Timestamp": 211240,
          "ModerationLabel": {
            "Confidence": 81.30952453613281,
            "Name": "Explicit Nudity",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 211240,
          "ModerationLabel": {
            "Confidence": 81.30952453613281,
            "Name": "Graphic Male Nudity",
            "ParentName": "Explicit Nudity"
          }
        },
        {
          "Timestamp": 219760,
          "ModerationLabel": {
            "Confidence": 67.29935455322266,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 238840,
          "ModerationLabel": {
            "Confidence": 69.4608154296875,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 239840,
          "ModerationLabel": {
            "Confidence": 68.32730865478516,
            "Name": "Physical Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 239840,
          "ModerationLabel": {
            "Confidence": 72.86248779296875,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 245440,
          "ModerationLabel": {
            "Confidence": 80.26467895507812,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 245440,
          "ModerationLabel": {
            "Confidence": 77.4140625,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 245960,
          "ModerationLabel": {
            "Confidence": 81.45530700683594,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 245960,
          "ModerationLabel": {
            "Confidence": 81.45530700683594,
            "Name": "Weapon Violence",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 249960,
          "ModerationLabel": {
            "Confidence": 76.95515441894531,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 250440,
          "ModerationLabel": {
            "Confidence": 76.0650863647461,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 252960,
          "ModerationLabel": {
            "Confidence": 68.2273941040039,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 254960,
          "ModerationLabel": {
            "Confidence": 82.45831298828125,
            "Name": "Graphic Violence Or Gore",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 254960,
          "ModerationLabel": {
            "Confidence": 82.45831298828125,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 255440,
          "ModerationLabel": {
            "Confidence": 87.10343933105469,
            "Name": "Graphic Violence Or Gore",
            "ParentName": "Violence"
          }
        },
        {
          "Timestamp": 255440,
          "ModerationLabel": {
            "Confidence": 87.10343933105469,
            "Name": "Violence",
            "ParentName": ""
          }
        },
        {
          "Timestamp": 255960,
          "ModerationLabel": {
            "Confidence": 65.32780456542969,
            "Name": "Violence",
            "ParentName": ""
          }
        }
      ],
      "ModerationModelVersion": "3.0"
    }

    let shotSkipped = [];

    let shots = {
      "JobStatus": "SUCCEEDED",
      "VideoMetadata": [
        {
          "Codec": "h264",
          "DurationMillis": 260040,
          "Format": "QuickTime / MOV",
          "FrameRate": 25.0,
          "FrameHeight": 360,
          "FrameWidth": 640
        }
      ],
      "AudioMetadata": [
        {
          "Codec": "aac",
          "DurationMillis": 260087,
          "SampleRate": 44100,
          "NumberOfChannels": 2
        }
      ],
      "Segments": [
        {
          "Type": "SHOT",
          "StartTimestampMillis": 0,
          "EndTimestampMillis": 3320,
          "DurationMillis": 3320,
          "StartTimecodeSMPTE": "00:00:00:00",
          "EndTimecodeSMPTE": "00:00:03:08",
          "DurationSMPTE": "00:00:03:08",
          "ShotSegment": {
            "Index": 0,
            "Confidence": 99.94062805175781
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 3360,
          "EndTimestampMillis": 6720,
          "DurationMillis": 3360,
          "StartTimecodeSMPTE": "00:00:03:09",
          "EndTimecodeSMPTE": "00:00:06:18",
          "DurationSMPTE": "00:00:03:09",
          "ShotSegment": {
            "Index": 1,
            "Confidence": 99.77401733398438
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 6760,
          "EndTimestampMillis": 13720,
          "DurationMillis": 6960,
          "StartTimecodeSMPTE": "00:00:06:19",
          "EndTimecodeSMPTE": "00:00:13:18",
          "DurationSMPTE": "00:00:06:24",
          "ShotSegment": {
            "Index": 2,
            "Confidence": 99.77401733398438
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 13760,
          "EndTimestampMillis": 16760,
          "DurationMillis": 3000,
          "StartTimecodeSMPTE": "00:00:13:19",
          "EndTimecodeSMPTE": "00:00:16:19",
          "DurationSMPTE": "00:00:03:00",
          "ShotSegment": {
            "Index": 3,
            "Confidence": 99.71910095214844
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 16800,
          "EndTimestampMillis": 19000,
          "DurationMillis": 2200,
          "StartTimecodeSMPTE": "00:00:16:20",
          "EndTimecodeSMPTE": "00:00:19:00",
          "DurationSMPTE": "00:00:02:05",
          "ShotSegment": {
            "Index": 4,
            "Confidence": 99.71910095214844
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 19040,
          "EndTimestampMillis": 21680,
          "DurationMillis": 2640,
          "StartTimecodeSMPTE": "00:00:19:01",
          "EndTimecodeSMPTE": "00:00:21:17",
          "DurationSMPTE": "00:00:02:16",
          "ShotSegment": {
            "Index": 5,
            "Confidence": 99.6787109375
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 21720,
          "EndTimestampMillis": 23760,
          "DurationMillis": 2040,
          "StartTimecodeSMPTE": "00:00:21:18",
          "EndTimecodeSMPTE": "00:00:23:19",
          "DurationSMPTE": "00:00:02:01",
          "ShotSegment": {
            "Index": 6,
            "Confidence": 97.62850189208984
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 23800,
          "EndTimestampMillis": 25240,
          "DurationMillis": 1440,
          "StartTimecodeSMPTE": "00:00:23:20",
          "EndTimecodeSMPTE": "00:00:25:06",
          "DurationSMPTE": "00:00:01:11",
          "ShotSegment": {
            "Index": 7,
            "Confidence": 77.3998794555664
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 25280,
          "EndTimestampMillis": 27920,
          "DurationMillis": 2640,
          "StartTimecodeSMPTE": "00:00:25:07",
          "EndTimecodeSMPTE": "00:00:27:23",
          "DurationSMPTE": "00:00:02:16",
          "ShotSegment": {
            "Index": 8,
            "Confidence": 77.3998794555664
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 27960,
          "EndTimestampMillis": 30880,
          "DurationMillis": 2920,
          "StartTimecodeSMPTE": "00:00:27:24",
          "EndTimecodeSMPTE": "00:00:30:22",
          "DurationSMPTE": "00:00:02:23",
          "ShotSegment": {
            "Index": 9,
            "Confidence": 99.22490692138672
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 30920,
          "EndTimestampMillis": 32120,
          "DurationMillis": 1200,
          "StartTimecodeSMPTE": "00:00:30:23",
          "EndTimecodeSMPTE": "00:00:32:03",
          "DurationSMPTE": "00:00:01:05",
          "ShotSegment": {
            "Index": 10,
            "Confidence": 99.22490692138672
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 32160,
          "EndTimestampMillis": 33040,
          "DurationMillis": 880,
          "StartTimecodeSMPTE": "00:00:32:04",
          "EndTimecodeSMPTE": "00:00:33:01",
          "DurationSMPTE": "00:00:00:22",
          "ShotSegment": {
            "Index": 11,
            "Confidence": 99.9315185546875
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 33080,
          "EndTimestampMillis": 34240,
          "DurationMillis": 1160,
          "StartTimecodeSMPTE": "00:00:33:02",
          "EndTimecodeSMPTE": "00:00:34:06",
          "DurationSMPTE": "00:00:01:04",
          "ShotSegment": {
            "Index": 12,
            "Confidence": 99.9315185546875
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 34280,
          "EndTimestampMillis": 36080,
          "DurationMillis": 1800,
          "StartTimecodeSMPTE": "00:00:34:07",
          "EndTimecodeSMPTE": "00:00:36:02",
          "DurationSMPTE": "00:00:01:20",
          "ShotSegment": {
            "Index": 13,
            "Confidence": 99.95317840576172
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 36120,
          "EndTimestampMillis": 38040,
          "DurationMillis": 1920,
          "StartTimecodeSMPTE": "00:00:36:03",
          "EndTimecodeSMPTE": "00:00:38:01",
          "DurationSMPTE": "00:00:01:23",
          "ShotSegment": {
            "Index": 14,
            "Confidence": 99.9244613647461
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 38080,
          "EndTimestampMillis": 41120,
          "DurationMillis": 3040,
          "StartTimecodeSMPTE": "00:00:38:02",
          "EndTimecodeSMPTE": "00:00:41:03",
          "DurationSMPTE": "00:00:03:01",
          "ShotSegment": {
            "Index": 15,
            "Confidence": 87.18497467041016
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 41160,
          "EndTimestampMillis": 44320,
          "DurationMillis": 3160,
          "StartTimecodeSMPTE": "00:00:41:04",
          "EndTimecodeSMPTE": "00:00:44:08",
          "DurationSMPTE": "00:00:03:04",
          "ShotSegment": {
            "Index": 16,
            "Confidence": 87.18497467041016
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 44360,
          "EndTimestampMillis": 46200,
          "DurationMillis": 1840,
          "StartTimecodeSMPTE": "00:00:44:09",
          "EndTimecodeSMPTE": "00:00:46:05",
          "DurationSMPTE": "00:00:01:21",
          "ShotSegment": {
            "Index": 17,
            "Confidence": 99.58686828613281
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 46240,
          "EndTimestampMillis": 47840,
          "DurationMillis": 1600,
          "StartTimecodeSMPTE": "00:00:46:06",
          "EndTimecodeSMPTE": "00:00:47:21",
          "DurationSMPTE": "00:00:01:15",
          "ShotSegment": {
            "Index": 18,
            "Confidence": 99.66532897949219
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 47880,
          "EndTimestampMillis": 49720,
          "DurationMillis": 1840,
          "StartTimecodeSMPTE": "00:00:47:22",
          "EndTimecodeSMPTE": "00:00:49:18",
          "DurationSMPTE": "00:00:01:21",
          "ShotSegment": {
            "Index": 19,
            "Confidence": 97.92266845703125
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 49760,
          "EndTimestampMillis": 50160,
          "DurationMillis": 400,
          "StartTimecodeSMPTE": "00:00:49:19",
          "EndTimecodeSMPTE": "00:00:50:04",
          "DurationSMPTE": "00:00:00:10",
          "ShotSegment": {
            "Index": 20,
            "Confidence": 93.13614654541016
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 50200,
          "EndTimestampMillis": 51440,
          "DurationMillis": 1240,
          "StartTimecodeSMPTE": "00:00:50:05",
          "EndTimecodeSMPTE": "00:00:51:11",
          "DurationSMPTE": "00:00:01:06",
          "ShotSegment": {
            "Index": 21,
            "Confidence": 93.13614654541016
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 51480,
          "EndTimestampMillis": 52880,
          "DurationMillis": 1400,
          "StartTimecodeSMPTE": "00:00:51:12",
          "EndTimecodeSMPTE": "00:00:52:22",
          "DurationSMPTE": "00:00:01:10",
          "ShotSegment": {
            "Index": 22,
            "Confidence": 91.3764877319336
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 52920,
          "EndTimestampMillis": 54880,
          "DurationMillis": 1960,
          "StartTimecodeSMPTE": "00:00:52:23",
          "EndTimecodeSMPTE": "00:00:54:22",
          "DurationSMPTE": "00:00:01:24",
          "ShotSegment": {
            "Index": 23,
            "Confidence": 91.3764877319336
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 54920,
          "EndTimestampMillis": 55680,
          "DurationMillis": 760,
          "StartTimecodeSMPTE": "00:00:54:23",
          "EndTimecodeSMPTE": "00:00:55:17",
          "DurationSMPTE": "00:00:00:19",
          "ShotSegment": {
            "Index": 24,
            "Confidence": 99.20481872558594
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 55720,
          "EndTimestampMillis": 56520,
          "DurationMillis": 800,
          "StartTimecodeSMPTE": "00:00:55:18",
          "EndTimecodeSMPTE": "00:00:56:13",
          "DurationSMPTE": "00:00:00:20",
          "ShotSegment": {
            "Index": 25,
            "Confidence": 87.36678314208984
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 56560,
          "EndTimestampMillis": 57920,
          "DurationMillis": 1360,
          "StartTimecodeSMPTE": "00:00:56:14",
          "EndTimecodeSMPTE": "00:00:57:23",
          "DurationSMPTE": "00:00:01:09",
          "ShotSegment": {
            "Index": 26,
            "Confidence": 87.36678314208984
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 57960,
          "EndTimestampMillis": 59440,
          "DurationMillis": 1480,
          "StartTimecodeSMPTE": "00:00:57:24",
          "EndTimecodeSMPTE": "00:00:59:11",
          "DurationSMPTE": "00:00:01:12",
          "ShotSegment": {
            "Index": 27,
            "Confidence": 99.47234344482422
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 59480,
          "EndTimestampMillis": 60480,
          "DurationMillis": 1000,
          "StartTimecodeSMPTE": "00:00:59:12",
          "EndTimecodeSMPTE": "00:01:00:12",
          "DurationSMPTE": "00:00:01:00",
          "ShotSegment": {
            "Index": 28,
            "Confidence": 99.26687622070312
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 60520,
          "EndTimestampMillis": 61000,
          "DurationMillis": 480,
          "StartTimecodeSMPTE": "00:01:00:13",
          "EndTimecodeSMPTE": "00:01:01:00",
          "DurationSMPTE": "00:00:00:12",
          "ShotSegment": {
            "Index": 29,
            "Confidence": 98.53170776367188
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 61040,
          "EndTimestampMillis": 62680,
          "DurationMillis": 1640,
          "StartTimecodeSMPTE": "00:01:01:01",
          "EndTimecodeSMPTE": "00:01:02:17",
          "DurationSMPTE": "00:00:01:16",
          "ShotSegment": {
            "Index": 30,
            "Confidence": 98.53170776367188
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 62720,
          "EndTimestampMillis": 64000,
          "DurationMillis": 1280,
          "StartTimecodeSMPTE": "00:01:02:18",
          "EndTimecodeSMPTE": "00:01:04:00",
          "DurationSMPTE": "00:00:01:07",
          "ShotSegment": {
            "Index": 31,
            "Confidence": 99.49645233154297
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 64040,
          "EndTimestampMillis": 65200,
          "DurationMillis": 1160,
          "StartTimecodeSMPTE": "00:01:04:01",
          "EndTimecodeSMPTE": "00:01:05:05",
          "DurationSMPTE": "00:00:01:04",
          "ShotSegment": {
            "Index": 32,
            "Confidence": 99.9836196899414
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 65240,
          "EndTimestampMillis": 66600,
          "DurationMillis": 1360,
          "StartTimecodeSMPTE": "00:01:05:06",
          "EndTimecodeSMPTE": "00:01:06:15",
          "DurationSMPTE": "00:00:01:09",
          "ShotSegment": {
            "Index": 33,
            "Confidence": 99.7928237915039
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 66640,
          "EndTimestampMillis": 67720,
          "DurationMillis": 1080,
          "StartTimecodeSMPTE": "00:01:06:16",
          "EndTimecodeSMPTE": "00:01:07:18",
          "DurationSMPTE": "00:00:01:02",
          "ShotSegment": {
            "Index": 34,
            "Confidence": 88.52413940429688
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 67760,
          "EndTimestampMillis": 68560,
          "DurationMillis": 800,
          "StartTimecodeSMPTE": "00:01:07:19",
          "EndTimecodeSMPTE": "00:01:08:14",
          "DurationSMPTE": "00:00:00:20",
          "ShotSegment": {
            "Index": 35,
            "Confidence": 88.52413940429688
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 68600,
          "EndTimestampMillis": 69920,
          "DurationMillis": 1320,
          "StartTimecodeSMPTE": "00:01:08:15",
          "EndTimecodeSMPTE": "00:01:09:23",
          "DurationSMPTE": "00:00:01:08",
          "ShotSegment": {
            "Index": 36,
            "Confidence": 99.94000244140625
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 69960,
          "EndTimestampMillis": 72040,
          "DurationMillis": 2080,
          "StartTimecodeSMPTE": "00:01:09:24",
          "EndTimecodeSMPTE": "00:01:12:01",
          "DurationSMPTE": "00:00:02:02",
          "ShotSegment": {
            "Index": 37,
            "Confidence": 99.94000244140625
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 72080,
          "EndTimestampMillis": 73400,
          "DurationMillis": 1320,
          "StartTimecodeSMPTE": "00:01:12:02",
          "EndTimecodeSMPTE": "00:01:13:10",
          "DurationSMPTE": "00:00:01:08",
          "ShotSegment": {
            "Index": 38,
            "Confidence": 99.97346496582031
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 73440,
          "EndTimestampMillis": 75600,
          "DurationMillis": 2160,
          "StartTimecodeSMPTE": "00:01:13:11",
          "EndTimecodeSMPTE": "00:01:15:15",
          "DurationSMPTE": "00:00:02:04",
          "ShotSegment": {
            "Index": 39,
            "Confidence": 99.95343017578125
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 75640,
          "EndTimestampMillis": 77560,
          "DurationMillis": 1920,
          "StartTimecodeSMPTE": "00:01:15:16",
          "EndTimecodeSMPTE": "00:01:17:14",
          "DurationSMPTE": "00:00:01:23",
          "ShotSegment": {
            "Index": 40,
            "Confidence": 99.9412612915039
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 77600,
          "EndTimestampMillis": 79360,
          "DurationMillis": 1760,
          "StartTimecodeSMPTE": "00:01:17:15",
          "EndTimecodeSMPTE": "00:01:19:09",
          "DurationSMPTE": "00:00:01:19",
          "ShotSegment": {
            "Index": 41,
            "Confidence": 99.82319641113281
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 79400,
          "EndTimestampMillis": 99320,
          "DurationMillis": 19920,
          "StartTimecodeSMPTE": "00:01:19:10",
          "EndTimecodeSMPTE": "00:01:39:08",
          "DurationSMPTE": "00:00:19:23",
          "ShotSegment": {
            "Index": 42,
            "Confidence": 99.82319641113281
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 99360,
          "EndTimestampMillis": 100680,
          "DurationMillis": 1320,
          "StartTimecodeSMPTE": "00:01:39:09",
          "EndTimecodeSMPTE": "00:01:40:17",
          "DurationSMPTE": "00:00:01:08",
          "ShotSegment": {
            "Index": 43,
            "Confidence": 99.84087371826172
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 100720,
          "EndTimestampMillis": 102280,
          "DurationMillis": 1560,
          "StartTimecodeSMPTE": "00:01:40:18",
          "EndTimecodeSMPTE": "00:01:42:07",
          "DurationSMPTE": "00:00:01:14",
          "ShotSegment": {
            "Index": 44,
            "Confidence": 99.92755889892578
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 102320,
          "EndTimestampMillis": 103920,
          "DurationMillis": 1600,
          "StartTimecodeSMPTE": "00:01:42:08",
          "EndTimecodeSMPTE": "00:01:43:23",
          "DurationSMPTE": "00:00:01:15",
          "ShotSegment": {
            "Index": 45,
            "Confidence": 99.92755889892578
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 103960,
          "EndTimestampMillis": 106200,
          "DurationMillis": 2240,
          "StartTimecodeSMPTE": "00:01:43:24",
          "EndTimecodeSMPTE": "00:01:46:05",
          "DurationSMPTE": "00:00:02:06",
          "ShotSegment": {
            "Index": 46,
            "Confidence": 99.95496368408203
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 106240,
          "EndTimestampMillis": 107960,
          "DurationMillis": 1720,
          "StartTimecodeSMPTE": "00:01:46:06",
          "EndTimecodeSMPTE": "00:01:47:24",
          "DurationSMPTE": "00:00:01:18",
          "ShotSegment": {
            "Index": 47,
            "Confidence": 99.84278869628906
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 108000,
          "EndTimestampMillis": 110320,
          "DurationMillis": 2320,
          "StartTimecodeSMPTE": "00:01:48:00",
          "EndTimecodeSMPTE": "00:01:50:08",
          "DurationSMPTE": "00:00:02:08",
          "ShotSegment": {
            "Index": 48,
            "Confidence": 99.84278869628906
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 110360,
          "EndTimestampMillis": 112600,
          "DurationMillis": 2240,
          "StartTimecodeSMPTE": "00:01:50:09",
          "EndTimecodeSMPTE": "00:01:52:15",
          "DurationSMPTE": "00:00:02:06",
          "ShotSegment": {
            "Index": 49,
            "Confidence": 99.55838775634766
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 112640,
          "EndTimestampMillis": 114120,
          "DurationMillis": 1480,
          "StartTimecodeSMPTE": "00:01:52:16",
          "EndTimecodeSMPTE": "00:01:54:03",
          "DurationSMPTE": "00:00:01:12",
          "ShotSegment": {
            "Index": 50,
            "Confidence": 99.55838775634766
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 114160,
          "EndTimestampMillis": 115320,
          "DurationMillis": 1160,
          "StartTimecodeSMPTE": "00:01:54:04",
          "EndTimecodeSMPTE": "00:01:55:08",
          "DurationSMPTE": "00:00:01:04",
          "ShotSegment": {
            "Index": 51,
            "Confidence": 99.86834716796875
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 115360,
          "EndTimestampMillis": 118760,
          "DurationMillis": 3400,
          "StartTimecodeSMPTE": "00:01:55:09",
          "EndTimecodeSMPTE": "00:01:58:19",
          "DurationSMPTE": "00:00:03:10",
          "ShotSegment": {
            "Index": 52,
            "Confidence": 99.8616714477539
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 118800,
          "EndTimestampMillis": 120160,
          "DurationMillis": 1360,
          "StartTimecodeSMPTE": "00:01:58:20",
          "EndTimecodeSMPTE": "00:02:00:04",
          "DurationSMPTE": "00:00:01:09",
          "ShotSegment": {
            "Index": 53,
            "Confidence": 99.8616714477539
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 120200,
          "EndTimestampMillis": 127080,
          "DurationMillis": 6880,
          "StartTimecodeSMPTE": "00:02:00:05",
          "EndTimecodeSMPTE": "00:02:07:02",
          "DurationSMPTE": "00:00:06:22",
          "ShotSegment": {
            "Index": 54,
            "Confidence": 78.20563507080078
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 127120,
          "EndTimestampMillis": 130480,
          "DurationMillis": 3360,
          "StartTimecodeSMPTE": "00:02:07:03",
          "EndTimecodeSMPTE": "00:02:10:12",
          "DurationSMPTE": "00:00:03:09",
          "ShotSegment": {
            "Index": 55,
            "Confidence": 78.20563507080078
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 130520,
          "EndTimestampMillis": 133600,
          "DurationMillis": 3080,
          "StartTimecodeSMPTE": "00:02:10:13",
          "EndTimecodeSMPTE": "00:02:13:15",
          "DurationSMPTE": "00:00:03:02",
          "ShotSegment": {
            "Index": 56,
            "Confidence": 99.75224304199219
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 133640,
          "EndTimestampMillis": 137120,
          "DurationMillis": 3480,
          "StartTimecodeSMPTE": "00:02:13:16",
          "EndTimecodeSMPTE": "00:02:17:03",
          "DurationSMPTE": "00:00:03:12",
          "ShotSegment": {
            "Index": 57,
            "Confidence": 98.07395935058594
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 137160,
          "EndTimestampMillis": 140600,
          "DurationMillis": 3440,
          "StartTimecodeSMPTE": "00:02:17:04",
          "EndTimecodeSMPTE": "00:02:20:15",
          "DurationSMPTE": "00:00:03:11",
          "ShotSegment": {
            "Index": 58,
            "Confidence": 98.07395935058594
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 140640,
          "EndTimestampMillis": 147720,
          "DurationMillis": 7080,
          "StartTimecodeSMPTE": "00:02:20:16",
          "EndTimecodeSMPTE": "00:02:27:18",
          "DurationSMPTE": "00:00:07:02",
          "ShotSegment": {
            "Index": 59,
            "Confidence": 99.45199584960938
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 147760,
          "EndTimestampMillis": 154360,
          "DurationMillis": 6600,
          "StartTimecodeSMPTE": "00:02:27:19",
          "EndTimecodeSMPTE": "00:02:34:09",
          "DurationSMPTE": "00:00:06:15",
          "ShotSegment": {
            "Index": 60,
            "Confidence": 99.56708526611328
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 154400,
          "EndTimestampMillis": 156080,
          "DurationMillis": 1680,
          "StartTimecodeSMPTE": "00:02:34:10",
          "EndTimecodeSMPTE": "00:02:36:02",
          "DurationSMPTE": "00:00:01:17",
          "ShotSegment": {
            "Index": 61,
            "Confidence": 99.87831115722656
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 156120,
          "EndTimestampMillis": 158000,
          "DurationMillis": 1880,
          "StartTimecodeSMPTE": "00:02:36:03",
          "EndTimecodeSMPTE": "00:02:38:00",
          "DurationSMPTE": "00:00:01:22",
          "ShotSegment": {
            "Index": 62,
            "Confidence": 93.8876724243164
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 158040,
          "EndTimestampMillis": 159440,
          "DurationMillis": 1400,
          "StartTimecodeSMPTE": "00:02:38:01",
          "EndTimecodeSMPTE": "00:02:39:11",
          "DurationSMPTE": "00:00:01:10",
          "ShotSegment": {
            "Index": 63,
            "Confidence": 93.8876724243164
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 159480,
          "EndTimestampMillis": 161480,
          "DurationMillis": 2000,
          "StartTimecodeSMPTE": "00:02:39:12",
          "EndTimecodeSMPTE": "00:02:41:12",
          "DurationSMPTE": "00:00:02:00",
          "ShotSegment": {
            "Index": 64,
            "Confidence": 99.8563003540039
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 161520,
          "EndTimestampMillis": 164840,
          "DurationMillis": 3320,
          "StartTimecodeSMPTE": "00:02:41:13",
          "EndTimecodeSMPTE": "00:02:44:21",
          "DurationSMPTE": "00:00:03:08",
          "ShotSegment": {
            "Index": 65,
            "Confidence": 99.8563003540039
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 164880,
          "EndTimestampMillis": 166680,
          "DurationMillis": 1800,
          "StartTimecodeSMPTE": "00:02:44:22",
          "EndTimecodeSMPTE": "00:02:46:17",
          "DurationSMPTE": "00:00:01:20",
          "ShotSegment": {
            "Index": 66,
            "Confidence": 66.59715270996094
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 166720,
          "EndTimestampMillis": 169280,
          "DurationMillis": 2560,
          "StartTimecodeSMPTE": "00:02:46:18",
          "EndTimecodeSMPTE": "00:02:49:07",
          "DurationSMPTE": "00:00:02:14",
          "ShotSegment": {
            "Index": 67,
            "Confidence": 66.59715270996094
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 169320,
          "EndTimestampMillis": 173760,
          "DurationMillis": 4440,
          "StartTimecodeSMPTE": "00:02:49:08",
          "EndTimecodeSMPTE": "00:02:53:19",
          "DurationSMPTE": "00:00:04:11",
          "ShotSegment": {
            "Index": 68,
            "Confidence": 65.94123077392578
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 173800,
          "EndTimestampMillis": 174600,
          "DurationMillis": 800,
          "StartTimecodeSMPTE": "00:02:53:20",
          "EndTimecodeSMPTE": "00:02:54:15",
          "DurationSMPTE": "00:00:00:20",
          "ShotSegment": {
            "Index": 69,
            "Confidence": 65.94123077392578
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 174640,
          "EndTimestampMillis": 175600,
          "DurationMillis": 960,
          "StartTimecodeSMPTE": "00:02:54:16",
          "EndTimecodeSMPTE": "00:02:55:15",
          "DurationSMPTE": "00:00:00:24",
          "ShotSegment": {
            "Index": 70,
            "Confidence": 99.30805969238281
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 175640,
          "EndTimestampMillis": 176480,
          "DurationMillis": 840,
          "StartTimecodeSMPTE": "00:02:55:16",
          "EndTimecodeSMPTE": "00:02:56:12",
          "DurationSMPTE": "00:00:00:21",
          "ShotSegment": {
            "Index": 71,
            "Confidence": 99.1657485961914
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 176520,
          "EndTimestampMillis": 178560,
          "DurationMillis": 2040,
          "StartTimecodeSMPTE": "00:02:56:13",
          "EndTimecodeSMPTE": "00:02:58:14",
          "DurationSMPTE": "00:00:02:01",
          "ShotSegment": {
            "Index": 72,
            "Confidence": 95.1719970703125
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 178600,
          "EndTimestampMillis": 179640,
          "DurationMillis": 1040,
          "StartTimecodeSMPTE": "00:02:58:15",
          "EndTimecodeSMPTE": "00:02:59:16",
          "DurationSMPTE": "00:00:01:01",
          "ShotSegment": {
            "Index": 73,
            "Confidence": 95.1719970703125
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 179680,
          "EndTimestampMillis": 184240,
          "DurationMillis": 4560,
          "StartTimecodeSMPTE": "00:02:59:17",
          "EndTimecodeSMPTE": "00:03:04:06",
          "DurationSMPTE": "00:00:04:14",
          "ShotSegment": {
            "Index": 74,
            "Confidence": 62.37818908691406
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 184280,
          "EndTimestampMillis": 188920,
          "DurationMillis": 4640,
          "StartTimecodeSMPTE": "00:03:04:07",
          "EndTimecodeSMPTE": "00:03:08:23",
          "DurationSMPTE": "00:00:04:16",
          "ShotSegment": {
            "Index": 75,
            "Confidence": 62.37818908691406
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 188960,
          "EndTimestampMillis": 190280,
          "DurationMillis": 1320,
          "StartTimecodeSMPTE": "00:03:08:24",
          "EndTimecodeSMPTE": "00:03:10:07",
          "DurationSMPTE": "00:00:01:08",
          "ShotSegment": {
            "Index": 76,
            "Confidence": 99.01164245605469
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 190320,
          "EndTimestampMillis": 192080,
          "DurationMillis": 1760,
          "StartTimecodeSMPTE": "00:03:10:08",
          "EndTimecodeSMPTE": "00:03:12:02",
          "DurationSMPTE": "00:00:01:19",
          "ShotSegment": {
            "Index": 77,
            "Confidence": 99.23949432373047
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 192120,
          "EndTimestampMillis": 193680,
          "DurationMillis": 1560,
          "StartTimecodeSMPTE": "00:03:12:03",
          "EndTimecodeSMPTE": "00:03:13:17",
          "DurationSMPTE": "00:00:01:14",
          "ShotSegment": {
            "Index": 78,
            "Confidence": 98.37100219726562
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 193720,
          "EndTimestampMillis": 195640,
          "DurationMillis": 1920,
          "StartTimecodeSMPTE": "00:03:13:18",
          "EndTimecodeSMPTE": "00:03:15:16",
          "DurationSMPTE": "00:00:01:23",
          "ShotSegment": {
            "Index": 79,
            "Confidence": 95.0895767211914
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 195680,
          "EndTimestampMillis": 198720,
          "DurationMillis": 3040,
          "StartTimecodeSMPTE": "00:03:15:17",
          "EndTimecodeSMPTE": "00:03:18:18",
          "DurationSMPTE": "00:00:03:01",
          "ShotSegment": {
            "Index": 80,
            "Confidence": 95.0895767211914
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 198760,
          "EndTimestampMillis": 200520,
          "DurationMillis": 1760,
          "StartTimecodeSMPTE": "00:03:18:19",
          "EndTimecodeSMPTE": "00:03:20:13",
          "DurationSMPTE": "00:00:01:19",
          "ShotSegment": {
            "Index": 81,
            "Confidence": 98.9312744140625
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 200560,
          "EndTimestampMillis": 202200,
          "DurationMillis": 1640,
          "StartTimecodeSMPTE": "00:03:20:14",
          "EndTimecodeSMPTE": "00:03:22:05",
          "DurationSMPTE": "00:00:01:16",
          "ShotSegment": {
            "Index": 82,
            "Confidence": 98.53446197509766
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 202240,
          "EndTimestampMillis": 203280,
          "DurationMillis": 1040,
          "StartTimecodeSMPTE": "00:03:22:06",
          "EndTimecodeSMPTE": "00:03:23:07",
          "DurationSMPTE": "00:00:01:01",
          "ShotSegment": {
            "Index": 83,
            "Confidence": 97.34971618652344
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 203320,
          "EndTimestampMillis": 205320,
          "DurationMillis": 2000,
          "StartTimecodeSMPTE": "00:03:23:08",
          "EndTimecodeSMPTE": "00:03:25:08",
          "DurationSMPTE": "00:00:02:00",
          "ShotSegment": {
            "Index": 84,
            "Confidence": 97.34971618652344
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 205360,
          "EndTimestampMillis": 208280,
          "DurationMillis": 2920,
          "StartTimecodeSMPTE": "00:03:25:09",
          "EndTimecodeSMPTE": "00:03:28:07",
          "DurationSMPTE": "00:00:02:23",
          "ShotSegment": {
            "Index": 85,
            "Confidence": 99.12728118896484
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 208320,
          "EndTimestampMillis": 209280,
          "DurationMillis": 960,
          "StartTimecodeSMPTE": "00:03:28:08",
          "EndTimecodeSMPTE": "00:03:29:07",
          "DurationSMPTE": "00:00:00:24",
          "ShotSegment": {
            "Index": 86,
            "Confidence": 97.63678741455078
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 209320,
          "EndTimestampMillis": 209760,
          "DurationMillis": 440,
          "StartTimecodeSMPTE": "00:03:29:08",
          "EndTimecodeSMPTE": "00:03:29:19",
          "DurationSMPTE": "00:00:00:11",
          "ShotSegment": {
            "Index": 87,
            "Confidence": 78.50325775146484
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 209800,
          "EndTimestampMillis": 212280,
          "DurationMillis": 2480,
          "StartTimecodeSMPTE": "00:03:29:20",
          "EndTimecodeSMPTE": "00:03:32:07",
          "DurationSMPTE": "00:00:02:12",
          "ShotSegment": {
            "Index": 88,
            "Confidence": 61.74454116821289
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 212320,
          "EndTimestampMillis": 213920,
          "DurationMillis": 1600,
          "StartTimecodeSMPTE": "00:03:32:08",
          "EndTimecodeSMPTE": "00:03:33:23",
          "DurationSMPTE": "00:00:01:15",
          "ShotSegment": {
            "Index": 89,
            "Confidence": 61.74454116821289
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 213960,
          "EndTimestampMillis": 214880,
          "DurationMillis": 920,
          "StartTimecodeSMPTE": "00:03:33:24",
          "EndTimecodeSMPTE": "00:03:34:22",
          "DurationSMPTE": "00:00:00:23",
          "ShotSegment": {
            "Index": 90,
            "Confidence": 99.91397857666016
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 214920,
          "EndTimestampMillis": 216240,
          "DurationMillis": 1320,
          "StartTimecodeSMPTE": "00:03:34:23",
          "EndTimecodeSMPTE": "00:03:36:06",
          "DurationSMPTE": "00:00:01:08",
          "ShotSegment": {
            "Index": 91,
            "Confidence": 86.6094970703125
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 216280,
          "EndTimestampMillis": 217240,
          "DurationMillis": 960,
          "StartTimecodeSMPTE": "00:03:36:07",
          "EndTimecodeSMPTE": "00:03:37:06",
          "DurationSMPTE": "00:00:00:24",
          "ShotSegment": {
            "Index": 92,
            "Confidence": 86.6094970703125
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 217280,
          "EndTimestampMillis": 218160,
          "DurationMillis": 880,
          "StartTimecodeSMPTE": "00:03:37:07",
          "EndTimecodeSMPTE": "00:03:38:04",
          "DurationSMPTE": "00:00:00:22",
          "ShotSegment": {
            "Index": 93,
            "Confidence": 99.68981170654297
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 218200,
          "EndTimestampMillis": 219320,
          "DurationMillis": 1120,
          "StartTimecodeSMPTE": "00:03:38:05",
          "EndTimecodeSMPTE": "00:03:39:08",
          "DurationSMPTE": "00:00:01:03",
          "ShotSegment": {
            "Index": 94,
            "Confidence": 99.46443176269531
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 219360,
          "EndTimestampMillis": 220440,
          "DurationMillis": 1080,
          "StartTimecodeSMPTE": "00:03:39:09",
          "EndTimecodeSMPTE": "00:03:40:11",
          "DurationSMPTE": "00:00:01:02",
          "ShotSegment": {
            "Index": 95,
            "Confidence": 98.37801361083984
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 220480,
          "EndTimestampMillis": 221560,
          "DurationMillis": 1080,
          "StartTimecodeSMPTE": "00:03:40:12",
          "EndTimecodeSMPTE": "00:03:41:14",
          "DurationSMPTE": "00:00:01:02",
          "ShotSegment": {
            "Index": 96,
            "Confidence": 97.58363342285156
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 221600,
          "EndTimestampMillis": 225600,
          "DurationMillis": 4000,
          "StartTimecodeSMPTE": "00:03:41:15",
          "EndTimecodeSMPTE": "00:03:45:15",
          "DurationSMPTE": "00:00:04:00",
          "ShotSegment": {
            "Index": 97,
            "Confidence": 97.58363342285156
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 225640,
          "EndTimestampMillis": 225920,
          "DurationMillis": 280,
          "StartTimecodeSMPTE": "00:03:45:16",
          "EndTimecodeSMPTE": "00:03:45:23",
          "DurationSMPTE": "00:00:00:07",
          "ShotSegment": {
            "Index": 98,
            "Confidence": 98.19764709472656
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 225960,
          "EndTimestampMillis": 226880,
          "DurationMillis": 920,
          "StartTimecodeSMPTE": "00:03:45:24",
          "EndTimecodeSMPTE": "00:03:46:22",
          "DurationSMPTE": "00:00:00:23",
          "ShotSegment": {
            "Index": 99,
            "Confidence": 99.7316665649414
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 226920,
          "EndTimestampMillis": 228080,
          "DurationMillis": 1160,
          "StartTimecodeSMPTE": "00:03:46:23",
          "EndTimecodeSMPTE": "00:03:48:02",
          "DurationSMPTE": "00:00:01:04",
          "ShotSegment": {
            "Index": 100,
            "Confidence": 99.7316665649414
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 228120,
          "EndTimestampMillis": 229280,
          "DurationMillis": 1160,
          "StartTimecodeSMPTE": "00:03:48:03",
          "EndTimecodeSMPTE": "00:03:49:07",
          "DurationSMPTE": "00:00:01:04",
          "ShotSegment": {
            "Index": 101,
            "Confidence": 94.93608093261719
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 229400,
          "EndTimestampMillis": 229600,
          "DurationMillis": 200,
          "StartTimecodeSMPTE": "00:03:49:10",
          "EndTimecodeSMPTE": "00:03:49:15",
          "DurationSMPTE": "00:00:00:05",
          "ShotSegment": {
            "Index": 102,
            "Confidence": 94.93608093261719
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 229640,
          "EndTimestampMillis": 231880,
          "DurationMillis": 2240,
          "StartTimecodeSMPTE": "00:03:49:16",
          "EndTimecodeSMPTE": "00:03:51:22",
          "DurationSMPTE": "00:00:02:06",
          "ShotSegment": {
            "Index": 103,
            "Confidence": 99.6706314086914
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 231920,
          "EndTimestampMillis": 233080,
          "DurationMillis": 1160,
          "StartTimecodeSMPTE": "00:03:51:23",
          "EndTimecodeSMPTE": "00:03:53:02",
          "DurationSMPTE": "00:00:01:04",
          "ShotSegment": {
            "Index": 104,
            "Confidence": 99.93544006347656
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 233120,
          "EndTimestampMillis": 233920,
          "DurationMillis": 800,
          "StartTimecodeSMPTE": "00:03:53:03",
          "EndTimecodeSMPTE": "00:03:53:23",
          "DurationSMPTE": "00:00:00:20",
          "ShotSegment": {
            "Index": 105,
            "Confidence": 98.96610260009766
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 233960,
          "EndTimestampMillis": 234760,
          "DurationMillis": 800,
          "StartTimecodeSMPTE": "00:03:53:24",
          "EndTimecodeSMPTE": "00:03:54:19",
          "DurationSMPTE": "00:00:00:20",
          "ShotSegment": {
            "Index": 106,
            "Confidence": 98.28833770751953
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 234800,
          "EndTimestampMillis": 235720,
          "DurationMillis": 920,
          "StartTimecodeSMPTE": "00:03:54:20",
          "EndTimecodeSMPTE": "00:03:55:18",
          "DurationSMPTE": "00:00:00:23",
          "ShotSegment": {
            "Index": 107,
            "Confidence": 98.28833770751953
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 235760,
          "EndTimestampMillis": 238120,
          "DurationMillis": 2360,
          "StartTimecodeSMPTE": "00:03:55:19",
          "EndTimecodeSMPTE": "00:03:58:03",
          "DurationSMPTE": "00:00:02:09",
          "ShotSegment": {
            "Index": 108,
            "Confidence": 96.90681457519531
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 238160,
          "EndTimestampMillis": 239640,
          "DurationMillis": 1480,
          "StartTimecodeSMPTE": "00:03:58:04",
          "EndTimecodeSMPTE": "00:03:59:16",
          "DurationSMPTE": "00:00:01:12",
          "ShotSegment": {
            "Index": 109,
            "Confidence": 86.4822998046875
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 239680,
          "EndTimestampMillis": 239920,
          "DurationMillis": 240,
          "StartTimecodeSMPTE": "00:03:59:17",
          "EndTimecodeSMPTE": "00:03:59:23",
          "DurationSMPTE": "00:00:00:06",
          "ShotSegment": {
            "Index": 110,
            "Confidence": 86.4822998046875
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 239960,
          "EndTimestampMillis": 240680,
          "DurationMillis": 720,
          "StartTimecodeSMPTE": "00:03:59:24",
          "EndTimecodeSMPTE": "00:04:00:17",
          "DurationSMPTE": "00:00:00:18",
          "ShotSegment": {
            "Index": 111,
            "Confidence": 88.05513000488281
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 240800,
          "EndTimestampMillis": 242000,
          "DurationMillis": 1200,
          "StartTimecodeSMPTE": "00:04:00:20",
          "EndTimecodeSMPTE": "00:04:02:00",
          "DurationSMPTE": "00:00:01:05",
          "ShotSegment": {
            "Index": 112,
            "Confidence": 88.05513000488281
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 242040,
          "EndTimestampMillis": 243560,
          "DurationMillis": 1520,
          "StartTimecodeSMPTE": "00:04:02:01",
          "EndTimecodeSMPTE": "00:04:03:14",
          "DurationSMPTE": "00:00:01:13",
          "ShotSegment": {
            "Index": 113,
            "Confidence": 96.02069854736328
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 243640,
          "EndTimestampMillis": 244720,
          "DurationMillis": 1080,
          "StartTimecodeSMPTE": "00:04:03:16",
          "EndTimecodeSMPTE": "00:04:04:18",
          "DurationSMPTE": "00:00:01:02",
          "ShotSegment": {
            "Index": 114,
            "Confidence": 95.48706817626953
          }
        },
        {
          "Type": "SHOT",
          "StartTimestampMillis": 244800,
          "EndTimestampMillis": 260000,
          "DurationMillis": 15200,
          "StartTimecodeSMPTE": "00:04:04:20",
          "EndTimecodeSMPTE": "00:04:20:00",
          "DurationSMPTE": "00:00:15:05",
          "ShotSegment": {
            "Index": 115,
            "Confidence": 95.48706817626953
          }
        }
      ],
      "SelectedSegmentTypes": [
        {
          "Type": "SHOT",
          "ModelVersion": "1.0"
        }
      ]
    }


    setSkippedShots();

    document.addEventListener('DOMContentLoaded', function () {


      function skip() {
        const videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
        let playerSessionId, player;
        // interval for checking whether player is loaded by netflix
        let interval = setInterval(() => {
          if (netflix.appContext.state.playerApp.getAPI().videoPlayer.hasVideoSession()) {
            playerSessionId = videoPlayer.getAllPlayerSessionIds()[0];
            player = videoPlayer.getVideoPlayerBySessionId(playerSessionId);
            if (!player.isLoading()) {
              var reqId;
              const video = document.getElementsByTagName("video")[0]
              // interval for checking if player is ready to filter               
              let subInterval = setInterval(() => {
                if (player.isReady()) {
                  reqId = requestAnimationFrame(function play() {
                    shotSkipped.find((el, index, object) => {
                      if (
                        parseInt(video.currentTime * 1000) >= el.startTime &&
                        parseInt(video.currentTime * 1000) <= el.endTime 
                      ) {
                        console.log(
                          `skipped scene! time diffrence is ${(video.currentTime * 1000) - el.startTime}  `
                        );
                        //skipping scene
                       // player.seek(el.endTime);

                        // TEST :  color video for indicate screen
                        video.setAttribute('style', 'background:red')
                        setTimeout(() => {
                          video.setAttribute('style', 'background:none')
                        }, el.durationMs)
                        return true;
                      }


                    });
                    //requesAnimationFrame is calling back to play function 16 times in second                  
                    reqId = requestAnimationFrame(play);
                  });
                  clearInterval(subInterval)
                  // prevent seek into the skipped scene
                  video.onseeking = (event) => {
                    shotSkipped.find((el, index, object) => {
                      if (
                        parseInt(video.currentTime * 1000) > el.startTime &&
                        parseInt(video.currentTime * 1000) < el.endTime 
                      ) {
                        // player.seek(el.endTime);

                        // TEST :  color video for indicate screen
                        video.setAttribute('style', 'background:green')
                        setTimeout(() => {
                          video.setAttribute('style', 'background:none')
                        },  el.indexInMs + el.durationMs - (video.currentTime * 1000))
                        console.log(`nice try seeking to scene :)  time : ${video.currentTime} between ${ el.startTime} to ${ el.endTime} `)
                        return true;
                      }
                    });
                  };
                }
              }, 10);
              /* var stopTracking = function () {
                 if (reqId) {
                   cancelAnimationFrame(reqId);
                 }
               }; */
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

  inject(init)
})()