

async function init(firstTime) {

    console.log('inits...')
    function setSkippedShots(category) {

        let categ = category || ["Explicit Nudity"]; 
        // now change to index of
        let trueModLabels = labels.filter(e =>  categ.indexOf(e.ModerationLabel.Name) > -1   || categ.indexOf(e.ModerationLabel.ParentName) > -1  )
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

    let shots_1 = {
        "JobStatus": "SUCCEEDED",
        "VideoMetadata": [
            {
                "Codec": "h264",
                "DurationMillis": 2478320,
                "Format": "QuickTime / MOV",
                "FrameRate": 25.0,
                "FrameHeight": 480,
                "FrameWidth": 854
            }
        ],
        "AudioMetadata": [
            {
                "Codec": "aac",
                "DurationMillis": 2478358,
                "SampleRate": 44100,
                "NumberOfChannels": 2
            }
        ],
        "NextToken": "X0L/eLwjRPigwFZUm3tj8a8s+MlUatXCt40zpkiE69zFxPccUZgH6ztz33T+OES2ss19LqOea94W",
        "Segments": [
            {
                "Type": "SHOT",
                "StartTimestampMillis": 0,
                "EndTimestampMillis": 5960,
                "DurationMillis": 5960,
                "StartTimecodeSMPTE": "00:00:00:00",
                "EndTimecodeSMPTE": "00:00:05:24",
                "DurationSMPTE": "00:00:05:24",
                "ShotSegment": {
                    "Index": 0,
                    "Confidence": 98.77125549316406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 6000,
                "EndTimestampMillis": 6960,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:00:06:00",
                "EndTimecodeSMPTE": "00:00:06:24",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 1,
                    "Confidence": 98.77125549316406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 7000,
                "EndTimestampMillis": 9200,
                "DurationMillis": 2200,
                "StartTimecodeSMPTE": "00:00:07:00",
                "EndTimecodeSMPTE": "00:00:09:05",
                "DurationSMPTE": "00:00:02:05",
                "ShotSegment": {
                    "Index": 2,
                    "Confidence": 99.83870697021484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 9240,
                "EndTimestampMillis": 11720,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:00:09:06",
                "EndTimecodeSMPTE": "00:00:11:18",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 3,
                    "Confidence": 99.96073913574219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 11760,
                "EndTimestampMillis": 14160,
                "DurationMillis": 2400,
                "StartTimecodeSMPTE": "00:00:11:19",
                "EndTimecodeSMPTE": "00:00:14:04",
                "DurationSMPTE": "00:00:02:10",
                "ShotSegment": {
                    "Index": 4,
                    "Confidence": 99.95673370361328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 14200,
                "EndTimestampMillis": 15200,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:00:14:05",
                "EndTimecodeSMPTE": "00:00:15:05",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 5,
                    "Confidence": 99.21875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 15240,
                "EndTimestampMillis": 17160,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:00:15:06",
                "EndTimecodeSMPTE": "00:00:17:04",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 6,
                    "Confidence": 87.5214614868164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 17200,
                "EndTimestampMillis": 18800,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:00:17:05",
                "EndTimecodeSMPTE": "00:00:18:20",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 7,
                    "Confidence": 87.5214614868164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 18840,
                "EndTimestampMillis": 19760,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:00:18:21",
                "EndTimecodeSMPTE": "00:00:19:19",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 8,
                    "Confidence": 99.8221206665039
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 19800,
                "EndTimestampMillis": 20520,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:00:19:20",
                "EndTimecodeSMPTE": "00:00:20:13",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 9,
                    "Confidence": 99.8221206665039
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 20560,
                "EndTimestampMillis": 21000,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:00:20:14",
                "EndTimecodeSMPTE": "00:00:21:00",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 10,
                    "Confidence": 88.5428695678711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 21040,
                "EndTimestampMillis": 21560,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:00:21:01",
                "EndTimecodeSMPTE": "00:00:21:14",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 11,
                    "Confidence": 88.5428695678711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 21600,
                "EndTimestampMillis": 22000,
                "DurationMillis": 400,
                "StartTimecodeSMPTE": "00:00:21:15",
                "EndTimecodeSMPTE": "00:00:22:00",
                "DurationSMPTE": "00:00:00:10",
                "ShotSegment": {
                    "Index": 12,
                    "Confidence": 99.45081329345703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 22040,
                "EndTimestampMillis": 22520,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:22:01",
                "EndTimecodeSMPTE": "00:00:22:13",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 13,
                    "Confidence": 99.23397827148438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 22560,
                "EndTimestampMillis": 23320,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:00:22:14",
                "EndTimecodeSMPTE": "00:00:23:08",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 14,
                    "Confidence": 98.65450286865234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 23360,
                "EndTimestampMillis": 25560,
                "DurationMillis": 2200,
                "StartTimecodeSMPTE": "00:00:23:09",
                "EndTimecodeSMPTE": "00:00:25:14",
                "DurationSMPTE": "00:00:02:05",
                "ShotSegment": {
                    "Index": 15,
                    "Confidence": 98.65450286865234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 25600,
                "EndTimestampMillis": 26640,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:00:25:15",
                "EndTimecodeSMPTE": "00:00:26:16",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 16,
                    "Confidence": 99.88272094726562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 26680,
                "EndTimestampMillis": 27160,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:26:17",
                "EndTimecodeSMPTE": "00:00:27:04",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 17,
                    "Confidence": 99.14813995361328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 27200,
                "EndTimestampMillis": 28200,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:00:27:05",
                "EndTimecodeSMPTE": "00:00:28:05",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 18,
                    "Confidence": 54.99152755737305
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 28240,
                "EndTimestampMillis": 28720,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:28:06",
                "EndTimecodeSMPTE": "00:00:28:18",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 19,
                    "Confidence": 54.99152755737305
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 28760,
                "EndTimestampMillis": 29880,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:00:28:19",
                "EndTimecodeSMPTE": "00:00:29:22",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 20,
                    "Confidence": 98.35326385498047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 29920,
                "EndTimestampMillis": 30400,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:29:23",
                "EndTimecodeSMPTE": "00:00:30:10",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 21,
                    "Confidence": 85.33982849121094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 30440,
                "EndTimestampMillis": 31200,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:00:30:11",
                "EndTimecodeSMPTE": "00:00:31:05",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 22,
                    "Confidence": 85.33982849121094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 31240,
                "EndTimestampMillis": 31680,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:00:31:06",
                "EndTimecodeSMPTE": "00:00:31:17",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 23,
                    "Confidence": 99.66417694091797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 31720,
                "EndTimestampMillis": 34200,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:00:31:18",
                "EndTimecodeSMPTE": "00:00:34:05",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 24,
                    "Confidence": 95.95046997070312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 34240,
                "EndTimestampMillis": 36040,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:00:34:06",
                "EndTimecodeSMPTE": "00:00:36:01",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 25,
                    "Confidence": 95.95046997070312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 36080,
                "EndTimestampMillis": 40320,
                "DurationMillis": 4240,
                "StartTimecodeSMPTE": "00:00:36:02",
                "EndTimecodeSMPTE": "00:00:40:08",
                "DurationSMPTE": "00:00:04:06",
                "ShotSegment": {
                    "Index": 26,
                    "Confidence": 74.55790710449219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 40360,
                "EndTimestampMillis": 42840,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:00:40:09",
                "EndTimecodeSMPTE": "00:00:42:21",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 27,
                    "Confidence": 74.55790710449219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 42880,
                "EndTimestampMillis": 43560,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:00:42:22",
                "EndTimecodeSMPTE": "00:00:43:14",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 28,
                    "Confidence": 99.05860900878906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 43600,
                "EndTimestampMillis": 44040,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:00:43:15",
                "EndTimecodeSMPTE": "00:00:44:01",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 29,
                    "Confidence": 98.3393783569336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 44080,
                "EndTimestampMillis": 44520,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:00:44:02",
                "EndTimecodeSMPTE": "00:00:44:13",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 30,
                    "Confidence": 98.3393783569336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 44560,
                "EndTimestampMillis": 45040,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:44:14",
                "EndTimecodeSMPTE": "00:00:45:01",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 31,
                    "Confidence": 99.22725677490234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 45080,
                "EndTimestampMillis": 45560,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:45:02",
                "EndTimecodeSMPTE": "00:00:45:14",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 32,
                    "Confidence": 99.60863494873047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 45600,
                "EndTimestampMillis": 46080,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:45:15",
                "EndTimecodeSMPTE": "00:00:46:02",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 33,
                    "Confidence": 99.58807373046875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 46120,
                "EndTimestampMillis": 46960,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:00:46:03",
                "EndTimecodeSMPTE": "00:00:46:24",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 34,
                    "Confidence": 99.33997344970703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 47000,
                "EndTimestampMillis": 47440,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:00:47:00",
                "EndTimecodeSMPTE": "00:00:47:11",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 35,
                    "Confidence": 99.33997344970703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 47480,
                "EndTimestampMillis": 47960,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:47:12",
                "EndTimecodeSMPTE": "00:00:47:24",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 36,
                    "Confidence": 99.1717758178711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 48000,
                "EndTimestampMillis": 48800,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:00:48:00",
                "EndTimecodeSMPTE": "00:00:48:20",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 37,
                    "Confidence": 99.1717758178711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 48840,
                "EndTimestampMillis": 49360,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:00:48:21",
                "EndTimecodeSMPTE": "00:00:49:09",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 38,
                    "Confidence": 99.1183090209961
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 49400,
                "EndTimestampMillis": 49880,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:49:10",
                "EndTimecodeSMPTE": "00:00:49:22",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 39,
                    "Confidence": 99.1183090209961
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 49920,
                "EndTimestampMillis": 50440,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:00:49:23",
                "EndTimecodeSMPTE": "00:00:50:11",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 40,
                    "Confidence": 99.77200317382812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 50480,
                "EndTimestampMillis": 50960,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:50:12",
                "EndTimecodeSMPTE": "00:00:50:24",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 41,
                    "Confidence": 99.51036071777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 51000,
                "EndTimestampMillis": 51600,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:00:51:00",
                "EndTimecodeSMPTE": "00:00:51:15",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 42,
                    "Confidence": 98.94679260253906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 51640,
                "EndTimestampMillis": 52480,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:00:51:16",
                "EndTimecodeSMPTE": "00:00:52:12",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 43,
                    "Confidence": 98.94679260253906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 52520,
                "EndTimestampMillis": 54280,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:00:52:13",
                "EndTimecodeSMPTE": "00:00:54:07",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 44,
                    "Confidence": 97.00978088378906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 54320,
                "EndTimestampMillis": 54800,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:00:54:08",
                "EndTimecodeSMPTE": "00:00:54:20",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 45,
                    "Confidence": 97.00978088378906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 54840,
                "EndTimestampMillis": 55560,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:00:54:21",
                "EndTimecodeSMPTE": "00:00:55:14",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 46,
                    "Confidence": 94.15977478027344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 55600,
                "EndTimestampMillis": 56240,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:00:55:15",
                "EndTimecodeSMPTE": "00:00:56:06",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 47,
                    "Confidence": 94.15977478027344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 56280,
                "EndTimestampMillis": 57360,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:00:56:07",
                "EndTimecodeSMPTE": "00:00:57:09",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 48,
                    "Confidence": 96.91339111328125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 57400,
                "EndTimestampMillis": 58440,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:00:57:10",
                "EndTimecodeSMPTE": "00:00:58:11",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 49,
                    "Confidence": 99.54727172851562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 58480,
                "EndTimestampMillis": 59320,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:00:58:12",
                "EndTimecodeSMPTE": "00:00:59:08",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 50,
                    "Confidence": 99.84476470947266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 59360,
                "EndTimestampMillis": 60080,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:00:59:09",
                "EndTimecodeSMPTE": "00:01:00:02",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 51,
                    "Confidence": 99.92042541503906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 60120,
                "EndTimestampMillis": 60760,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:01:00:03",
                "EndTimecodeSMPTE": "00:01:00:19",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 52,
                    "Confidence": 99.68675231933594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 60800,
                "EndTimestampMillis": 61240,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:01:00:20",
                "EndTimecodeSMPTE": "00:01:01:06",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 53,
                    "Confidence": 99.08808898925781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 61280,
                "EndTimestampMillis": 62120,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:01:01:07",
                "EndTimecodeSMPTE": "00:01:02:03",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 54,
                    "Confidence": 97.57121276855469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 62160,
                "EndTimestampMillis": 62480,
                "DurationMillis": 320,
                "StartTimecodeSMPTE": "00:01:02:04",
                "EndTimecodeSMPTE": "00:01:02:12",
                "DurationSMPTE": "00:00:00:08",
                "ShotSegment": {
                    "Index": 55,
                    "Confidence": 92.28129577636719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 62520,
                "EndTimestampMillis": 63600,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:01:02:13",
                "EndTimecodeSMPTE": "00:01:03:15",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 56,
                    "Confidence": 92.28129577636719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 63640,
                "EndTimestampMillis": 64320,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:01:03:16",
                "EndTimecodeSMPTE": "00:01:04:08",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 57,
                    "Confidence": 97.2613754272461
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 64360,
                "EndTimestampMillis": 64840,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:01:04:09",
                "EndTimecodeSMPTE": "00:01:04:21",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 58,
                    "Confidence": 97.2613754272461
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 64880,
                "EndTimestampMillis": 65320,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:01:04:22",
                "EndTimecodeSMPTE": "00:01:05:08",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 59,
                    "Confidence": 98.38410186767578
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 65360,
                "EndTimestampMillis": 67000,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:01:05:09",
                "EndTimecodeSMPTE": "00:01:07:00",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 60,
                    "Confidence": 98.88055419921875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 67040,
                "EndTimestampMillis": 68480,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:01:07:01",
                "EndTimecodeSMPTE": "00:01:08:12",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 61,
                    "Confidence": 98.88055419921875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 68520,
                "EndTimestampMillis": 69040,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:01:08:13",
                "EndTimecodeSMPTE": "00:01:09:01",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 62,
                    "Confidence": 99.81742095947266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 69080,
                "EndTimestampMillis": 69440,
                "DurationMillis": 360,
                "StartTimecodeSMPTE": "00:01:09:02",
                "EndTimecodeSMPTE": "00:01:09:11",
                "DurationSMPTE": "00:00:00:09",
                "ShotSegment": {
                    "Index": 63,
                    "Confidence": 96.24469757080078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 69480,
                "EndTimestampMillis": 69920,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:01:09:12",
                "EndTimecodeSMPTE": "00:01:09:23",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 64,
                    "Confidence": 96.24469757080078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 69960,
                "EndTimestampMillis": 70440,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:01:09:24",
                "EndTimecodeSMPTE": "00:01:10:11",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 65,
                    "Confidence": 99.52201080322266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 70480,
                "EndTimestampMillis": 71080,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:01:10:12",
                "EndTimecodeSMPTE": "00:01:11:02",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 66,
                    "Confidence": 99.9063949584961
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 71120,
                "EndTimestampMillis": 71600,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:01:11:03",
                "EndTimecodeSMPTE": "00:01:11:15",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 67,
                    "Confidence": 99.73198699951172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 71640,
                "EndTimestampMillis": 72640,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:01:11:16",
                "EndTimecodeSMPTE": "00:01:12:16",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 68,
                    "Confidence": 99.73198699951172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 72680,
                "EndTimestampMillis": 73280,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:01:12:17",
                "EndTimecodeSMPTE": "00:01:13:07",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 69,
                    "Confidence": 99.8400650024414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 73320,
                "EndTimestampMillis": 73840,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:01:13:08",
                "EndTimecodeSMPTE": "00:01:13:21",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 70,
                    "Confidence": 99.94791412353516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 73880,
                "EndTimestampMillis": 74560,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:01:13:22",
                "EndTimecodeSMPTE": "00:01:14:14",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 71,
                    "Confidence": 99.82003784179688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 74600,
                "EndTimestampMillis": 75320,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:01:14:15",
                "EndTimecodeSMPTE": "00:01:15:08",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 72,
                    "Confidence": 99.71672821044922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 75360,
                "EndTimestampMillis": 76720,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:01:15:09",
                "EndTimecodeSMPTE": "00:01:16:18",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 73,
                    "Confidence": 99.71672821044922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 76760,
                "EndTimestampMillis": 78480,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:01:16:19",
                "EndTimecodeSMPTE": "00:01:18:12",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 74,
                    "Confidence": 99.70555114746094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 78520,
                "EndTimestampMillis": 79520,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:01:18:13",
                "EndTimecodeSMPTE": "00:01:19:13",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 75,
                    "Confidence": 99.45872497558594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 79560,
                "EndTimestampMillis": 80680,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:01:19:14",
                "EndTimecodeSMPTE": "00:01:20:17",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 76,
                    "Confidence": 99.45872497558594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 80720,
                "EndTimestampMillis": 81600,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:01:20:18",
                "EndTimecodeSMPTE": "00:01:21:15",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 77,
                    "Confidence": 99.708251953125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 81640,
                "EndTimestampMillis": 83600,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:01:21:16",
                "EndTimecodeSMPTE": "00:01:23:15",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 78,
                    "Confidence": 99.60757446289062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 83640,
                "EndTimestampMillis": 84640,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:01:23:16",
                "EndTimecodeSMPTE": "00:01:24:16",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 79,
                    "Confidence": 92.70693969726562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 84680,
                "EndTimestampMillis": 85360,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:01:24:17",
                "EndTimecodeSMPTE": "00:01:25:09",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 80,
                    "Confidence": 92.70693969726562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 85400,
                "EndTimestampMillis": 86360,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:01:25:10",
                "EndTimecodeSMPTE": "00:01:26:09",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 81,
                    "Confidence": 99.82510375976562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 86400,
                "EndTimestampMillis": 87000,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:01:26:10",
                "EndTimecodeSMPTE": "00:01:27:00",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 82,
                    "Confidence": 99.86898803710938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 87040,
                "EndTimestampMillis": 88120,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:01:27:01",
                "EndTimecodeSMPTE": "00:01:28:03",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 83,
                    "Confidence": 99.86898803710938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 88160,
                "EndTimestampMillis": 89280,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:01:28:04",
                "EndTimecodeSMPTE": "00:01:29:07",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 84,
                    "Confidence": 99.91605377197266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 89320,
                "EndTimestampMillis": 90640,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:01:29:08",
                "EndTimecodeSMPTE": "00:01:30:16",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 85,
                    "Confidence": 99.00054168701172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 90680,
                "EndTimestampMillis": 91320,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:01:30:17",
                "EndTimecodeSMPTE": "00:01:31:08",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 86,
                    "Confidence": 99.00054168701172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 91360,
                "EndTimestampMillis": 92360,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:01:31:09",
                "EndTimecodeSMPTE": "00:01:32:09",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 87,
                    "Confidence": 99.68350219726562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 92400,
                "EndTimestampMillis": 93360,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:01:32:10",
                "EndTimecodeSMPTE": "00:01:33:09",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 88,
                    "Confidence": 99.68350219726562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 93400,
                "EndTimestampMillis": 94080,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:01:33:10",
                "EndTimecodeSMPTE": "00:01:34:02",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 89,
                    "Confidence": 99.73316955566406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 94120,
                "EndTimestampMillis": 95080,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:01:34:03",
                "EndTimecodeSMPTE": "00:01:35:02",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 90,
                    "Confidence": 99.73316955566406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 95120,
                "EndTimestampMillis": 96000,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:01:35:03",
                "EndTimecodeSMPTE": "00:01:36:00",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 91,
                    "Confidence": 99.93952941894531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 96040,
                "EndTimestampMillis": 96640,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:01:36:01",
                "EndTimecodeSMPTE": "00:01:36:16",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 92,
                    "Confidence": 99.5574722290039
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 96680,
                "EndTimestampMillis": 97160,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:01:36:17",
                "EndTimecodeSMPTE": "00:01:37:04",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 93,
                    "Confidence": 99.5574722290039
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 97200,
                "EndTimestampMillis": 97960,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:01:37:05",
                "EndTimecodeSMPTE": "00:01:37:24",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 94,
                    "Confidence": 99.69447326660156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 98000,
                "EndTimestampMillis": 99120,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:01:38:00",
                "EndTimecodeSMPTE": "00:01:39:03",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 95,
                    "Confidence": 99.91829681396484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 99160,
                "EndTimestampMillis": 100040,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:01:39:04",
                "EndTimecodeSMPTE": "00:01:40:01",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 96,
                    "Confidence": 99.91829681396484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 100080,
                "EndTimestampMillis": 100880,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:01:40:02",
                "EndTimecodeSMPTE": "00:01:40:22",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 97,
                    "Confidence": 99.93460845947266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 100920,
                "EndTimestampMillis": 101960,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:01:40:23",
                "EndTimecodeSMPTE": "00:01:41:24",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 98,
                    "Confidence": 99.5399398803711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 102000,
                "EndTimestampMillis": 102760,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:01:42:00",
                "EndTimecodeSMPTE": "00:01:42:19",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 99,
                    "Confidence": 99.5399398803711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 102800,
                "EndTimestampMillis": 103960,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:01:42:20",
                "EndTimecodeSMPTE": "00:01:43:24",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 100,
                    "Confidence": 99.56344604492188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 104000,
                "EndTimestampMillis": 105000,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:01:44:00",
                "EndTimecodeSMPTE": "00:01:45:00",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 101,
                    "Confidence": 96.46459197998047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 105040,
                "EndTimestampMillis": 105480,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:01:45:01",
                "EndTimecodeSMPTE": "00:01:45:12",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 102,
                    "Confidence": 96.46459197998047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 105520,
                "EndTimestampMillis": 106120,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:01:45:13",
                "EndTimecodeSMPTE": "00:01:46:03",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 103,
                    "Confidence": 85.66152954101562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 106160,
                "EndTimestampMillis": 106920,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:01:46:04",
                "EndTimecodeSMPTE": "00:01:46:23",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 104,
                    "Confidence": 85.66152954101562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 106960,
                "EndTimestampMillis": 107960,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:01:46:24",
                "EndTimecodeSMPTE": "00:01:47:24",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 105,
                    "Confidence": 99.87808227539062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 108000,
                "EndTimestampMillis": 108480,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:01:48:00",
                "EndTimecodeSMPTE": "00:01:48:12",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 106,
                    "Confidence": 99.19278717041016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 108520,
                "EndTimestampMillis": 108960,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:01:48:13",
                "EndTimecodeSMPTE": "00:01:48:24",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 107,
                    "Confidence": 99.19278717041016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 109000,
                "EndTimestampMillis": 109520,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:01:49:00",
                "EndTimecodeSMPTE": "00:01:49:13",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 108,
                    "Confidence": 99.7808837890625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 109560,
                "EndTimestampMillis": 110000,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:01:49:14",
                "EndTimecodeSMPTE": "00:01:50:00",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 109,
                    "Confidence": 98.92545318603516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 110040,
                "EndTimestampMillis": 110680,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:01:50:01",
                "EndTimecodeSMPTE": "00:01:50:17",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 110,
                    "Confidence": 93.81157684326172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 110760,
                "EndTimestampMillis": 111520,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:01:50:19",
                "EndTimecodeSMPTE": "00:01:51:13",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 111,
                    "Confidence": 93.81157684326172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 111560,
                "EndTimestampMillis": 112240,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:01:51:14",
                "EndTimecodeSMPTE": "00:01:52:06",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 112,
                    "Confidence": 99.40237426757812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 112280,
                "EndTimestampMillis": 112920,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:01:52:07",
                "EndTimecodeSMPTE": "00:01:52:23",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 113,
                    "Confidence": 99.96511840820312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 112960,
                "EndTimestampMillis": 113680,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:01:52:24",
                "EndTimecodeSMPTE": "00:01:53:17",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 114,
                    "Confidence": 98.40617370605469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 113720,
                "EndTimestampMillis": 114160,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:01:53:18",
                "EndTimecodeSMPTE": "00:01:54:04",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 115,
                    "Confidence": 90.8093490600586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 114200,
                "EndTimestampMillis": 114280,
                "DurationMillis": 80,
                "StartTimecodeSMPTE": "00:01:54:05",
                "EndTimecodeSMPTE": "00:01:54:07",
                "DurationSMPTE": "00:00:00:02",
                "ShotSegment": {
                    "Index": 116,
                    "Confidence": 90.8093490600586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 114320,
                "EndTimestampMillis": 114960,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:01:54:08",
                "EndTimecodeSMPTE": "00:01:54:24",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 117,
                    "Confidence": 98.50736236572266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 115000,
                "EndTimestampMillis": 115680,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:01:55:00",
                "EndTimecodeSMPTE": "00:01:55:17",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 118,
                    "Confidence": 92.49095916748047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 115720,
                "EndTimestampMillis": 118880,
                "DurationMillis": 3160,
                "StartTimecodeSMPTE": "00:01:55:18",
                "EndTimecodeSMPTE": "00:01:58:22",
                "DurationSMPTE": "00:00:03:04",
                "ShotSegment": {
                    "Index": 119,
                    "Confidence": 92.49095916748047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 118920,
                "EndTimestampMillis": 122360,
                "DurationMillis": 3440,
                "StartTimecodeSMPTE": "00:01:58:23",
                "EndTimecodeSMPTE": "00:02:02:09",
                "DurationSMPTE": "00:00:03:11",
                "ShotSegment": {
                    "Index": 120,
                    "Confidence": 99.36503601074219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 122400,
                "EndTimestampMillis": 123680,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:02:02:10",
                "EndTimecodeSMPTE": "00:02:03:17",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 121,
                    "Confidence": 99.4513931274414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 123720,
                "EndTimestampMillis": 125360,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:02:03:18",
                "EndTimecodeSMPTE": "00:02:05:09",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 122,
                    "Confidence": 99.48967742919922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 125400,
                "EndTimestampMillis": 126920,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:02:05:10",
                "EndTimecodeSMPTE": "00:02:06:23",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 123,
                    "Confidence": 99.40050506591797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 126960,
                "EndTimestampMillis": 127280,
                "DurationMillis": 320,
                "StartTimecodeSMPTE": "00:02:06:24",
                "EndTimecodeSMPTE": "00:02:07:07",
                "DurationSMPTE": "00:00:00:08",
                "ShotSegment": {
                    "Index": 124,
                    "Confidence": 79.44331359863281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 127400,
                "EndTimestampMillis": 128400,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:02:07:10",
                "EndTimecodeSMPTE": "00:02:08:10",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 125,
                    "Confidence": 79.44331359863281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 128480,
                "EndTimestampMillis": 131040,
                "DurationMillis": 2560,
                "StartTimecodeSMPTE": "00:02:08:12",
                "EndTimecodeSMPTE": "00:02:11:01",
                "DurationSMPTE": "00:00:02:14",
                "ShotSegment": {
                    "Index": 126,
                    "Confidence": 69.84764099121094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 131080,
                "EndTimestampMillis": 132200,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:02:11:02",
                "EndTimecodeSMPTE": "00:02:12:05",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 127,
                    "Confidence": 69.84764099121094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 132320,
                "EndTimestampMillis": 135120,
                "DurationMillis": 2800,
                "StartTimecodeSMPTE": "00:02:12:08",
                "EndTimecodeSMPTE": "00:02:15:03",
                "DurationSMPTE": "00:00:02:20",
                "ShotSegment": {
                    "Index": 128,
                    "Confidence": 91.33592987060547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 135160,
                "EndTimestampMillis": 138120,
                "DurationMillis": 2960,
                "StartTimecodeSMPTE": "00:02:15:04",
                "EndTimecodeSMPTE": "00:02:18:03",
                "DurationSMPTE": "00:00:02:24",
                "ShotSegment": {
                    "Index": 129,
                    "Confidence": 99.73180389404297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 138160,
                "EndTimestampMillis": 139920,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:02:18:04",
                "EndTimecodeSMPTE": "00:02:19:23",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 130,
                    "Confidence": 99.8342056274414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 139960,
                "EndTimestampMillis": 141760,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:02:19:24",
                "EndTimecodeSMPTE": "00:02:21:19",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 131,
                    "Confidence": 99.8342056274414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 141800,
                "EndTimestampMillis": 143440,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:02:21:20",
                "EndTimecodeSMPTE": "00:02:23:11",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 132,
                    "Confidence": 99.93170928955078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 143480,
                "EndTimestampMillis": 144560,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:02:23:12",
                "EndTimecodeSMPTE": "00:02:24:14",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 133,
                    "Confidence": 99.93170928955078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 144600,
                "EndTimestampMillis": 146160,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:02:24:15",
                "EndTimecodeSMPTE": "00:02:26:04",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 134,
                    "Confidence": 99.96436309814453
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 146200,
                "EndTimestampMillis": 147960,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:02:26:05",
                "EndTimecodeSMPTE": "00:02:27:24",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 135,
                    "Confidence": 99.97561645507812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 148000,
                "EndTimestampMillis": 150840,
                "DurationMillis": 2840,
                "StartTimecodeSMPTE": "00:02:28:00",
                "EndTimecodeSMPTE": "00:02:30:21",
                "DurationSMPTE": "00:00:02:21",
                "ShotSegment": {
                    "Index": 136,
                    "Confidence": 99.9472427368164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 150880,
                "EndTimestampMillis": 152640,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:02:30:22",
                "EndTimecodeSMPTE": "00:02:32:16",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 137,
                    "Confidence": 99.9472427368164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 152680,
                "EndTimestampMillis": 154200,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:02:32:17",
                "EndTimecodeSMPTE": "00:02:34:05",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 138,
                    "Confidence": 99.96501159667969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 154240,
                "EndTimestampMillis": 155560,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:02:34:06",
                "EndTimecodeSMPTE": "00:02:35:14",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 139,
                    "Confidence": 99.86116790771484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 155600,
                "EndTimestampMillis": 157000,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:02:35:15",
                "EndTimecodeSMPTE": "00:02:37:00",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 140,
                    "Confidence": 99.86116790771484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 157040,
                "EndTimestampMillis": 158600,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:02:37:01",
                "EndTimecodeSMPTE": "00:02:38:15",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 141,
                    "Confidence": 99.81300354003906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 158640,
                "EndTimestampMillis": 160520,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:02:38:16",
                "EndTimecodeSMPTE": "00:02:40:13",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 142,
                    "Confidence": 99.81300354003906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 160560,
                "EndTimestampMillis": 161480,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:02:40:14",
                "EndTimecodeSMPTE": "00:02:41:12",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 143,
                    "Confidence": 99.76046752929688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 161520,
                "EndTimestampMillis": 162440,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:02:41:13",
                "EndTimecodeSMPTE": "00:02:42:11",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 144,
                    "Confidence": 99.46324157714844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 162480,
                "EndTimestampMillis": 163400,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:02:42:12",
                "EndTimecodeSMPTE": "00:02:43:10",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 145,
                    "Confidence": 99.39816284179688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 163440,
                "EndTimestampMillis": 164160,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:02:43:11",
                "EndTimecodeSMPTE": "00:02:44:04",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 146,
                    "Confidence": 99.39816284179688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 164200,
                "EndTimestampMillis": 165320,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:02:44:05",
                "EndTimecodeSMPTE": "00:02:45:08",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 147,
                    "Confidence": 99.58830261230469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 165360,
                "EndTimestampMillis": 166840,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:02:45:09",
                "EndTimecodeSMPTE": "00:02:46:21",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 148,
                    "Confidence": 97.93879699707031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 166880,
                "EndTimestampMillis": 169120,
                "DurationMillis": 2240,
                "StartTimecodeSMPTE": "00:02:46:22",
                "EndTimecodeSMPTE": "00:02:49:03",
                "DurationSMPTE": "00:00:02:06",
                "ShotSegment": {
                    "Index": 149,
                    "Confidence": 97.93879699707031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 169160,
                "EndTimestampMillis": 170200,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:02:49:04",
                "EndTimecodeSMPTE": "00:02:50:05",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 150,
                    "Confidence": 99.95281219482422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 170240,
                "EndTimestampMillis": 171720,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:02:50:06",
                "EndTimecodeSMPTE": "00:02:51:18",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 151,
                    "Confidence": 99.96788024902344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 171760,
                "EndTimestampMillis": 173480,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:02:51:19",
                "EndTimecodeSMPTE": "00:02:53:12",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 152,
                    "Confidence": 99.81608581542969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 173520,
                "EndTimestampMillis": 175240,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:02:53:13",
                "EndTimecodeSMPTE": "00:02:55:06",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 153,
                    "Confidence": 98.16094970703125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 175280,
                "EndTimestampMillis": 176200,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:02:55:07",
                "EndTimecodeSMPTE": "00:02:56:05",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 154,
                    "Confidence": 98.16094970703125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 176240,
                "EndTimestampMillis": 180400,
                "DurationMillis": 4160,
                "StartTimecodeSMPTE": "00:02:56:06",
                "EndTimecodeSMPTE": "00:03:00:10",
                "DurationSMPTE": "00:00:04:04",
                "ShotSegment": {
                    "Index": 155,
                    "Confidence": 99.8817367553711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 180440,
                "EndTimestampMillis": 183280,
                "DurationMillis": 2840,
                "StartTimecodeSMPTE": "00:03:00:11",
                "EndTimecodeSMPTE": "00:03:03:07",
                "DurationSMPTE": "00:00:02:21",
                "ShotSegment": {
                    "Index": 156,
                    "Confidence": 99.88450622558594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 183320,
                "EndTimestampMillis": 185160,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:03:03:08",
                "EndTimecodeSMPTE": "00:03:05:04",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 157,
                    "Confidence": 99.84098052978516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 185200,
                "EndTimestampMillis": 186680,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:03:05:05",
                "EndTimecodeSMPTE": "00:03:06:17",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 158,
                    "Confidence": 99.5716781616211
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 186720,
                "EndTimestampMillis": 188640,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:03:06:18",
                "EndTimecodeSMPTE": "00:03:08:16",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 159,
                    "Confidence": 94.70585632324219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 188680,
                "EndTimestampMillis": 190560,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:03:08:17",
                "EndTimecodeSMPTE": "00:03:10:14",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 160,
                    "Confidence": 83.03925323486328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 190600,
                "EndTimestampMillis": 190640,
                "DurationMillis": 40,
                "StartTimecodeSMPTE": "00:03:10:15",
                "EndTimecodeSMPTE": "00:03:10:16",
                "DurationSMPTE": "00:00:00:01",
                "ShotSegment": {
                    "Index": 161,
                    "Confidence": 59.72062683105469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 190680,
                "EndTimestampMillis": 191720,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:03:10:17",
                "EndTimecodeSMPTE": "00:03:11:18",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 162,
                    "Confidence": 59.72062683105469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 191760,
                "EndTimestampMillis": 196800,
                "DurationMillis": 5040,
                "StartTimecodeSMPTE": "00:03:11:19",
                "EndTimecodeSMPTE": "00:03:16:20",
                "DurationSMPTE": "00:00:05:01",
                "ShotSegment": {
                    "Index": 163,
                    "Confidence": 99.71224975585938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 196840,
                "EndTimestampMillis": 197120,
                "DurationMillis": 280,
                "StartTimecodeSMPTE": "00:03:16:21",
                "EndTimecodeSMPTE": "00:03:17:03",
                "DurationSMPTE": "00:00:00:07",
                "ShotSegment": {
                    "Index": 164,
                    "Confidence": 82.8279037475586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 197160,
                "EndTimestampMillis": 198120,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:03:17:04",
                "EndTimecodeSMPTE": "00:03:18:03",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 165,
                    "Confidence": 82.8279037475586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 198160,
                "EndTimestampMillis": 199520,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:03:18:04",
                "EndTimecodeSMPTE": "00:03:19:13",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 166,
                    "Confidence": 98.9225845336914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 199560,
                "EndTimestampMillis": 200440,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:03:19:14",
                "EndTimecodeSMPTE": "00:03:20:11",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 167,
                    "Confidence": 98.9225845336914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 200480,
                "EndTimestampMillis": 201840,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:03:20:12",
                "EndTimecodeSMPTE": "00:03:21:21",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 168,
                    "Confidence": 99.93643188476562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 201880,
                "EndTimestampMillis": 204920,
                "DurationMillis": 3040,
                "StartTimecodeSMPTE": "00:03:21:22",
                "EndTimecodeSMPTE": "00:03:24:23",
                "DurationSMPTE": "00:00:03:01",
                "ShotSegment": {
                    "Index": 169,
                    "Confidence": 99.91664123535156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 204960,
                "EndTimestampMillis": 207680,
                "DurationMillis": 2720,
                "StartTimecodeSMPTE": "00:03:24:24",
                "EndTimecodeSMPTE": "00:03:27:17",
                "DurationSMPTE": "00:00:02:18",
                "ShotSegment": {
                    "Index": 170,
                    "Confidence": 99.91044616699219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 207720,
                "EndTimestampMillis": 209400,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:03:27:18",
                "EndTimecodeSMPTE": "00:03:29:10",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 171,
                    "Confidence": 99.91044616699219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 209440,
                "EndTimestampMillis": 211520,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:03:29:11",
                "EndTimecodeSMPTE": "00:03:31:13",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 172,
                    "Confidence": 99.91275024414062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 211560,
                "EndTimestampMillis": 213080,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:03:31:14",
                "EndTimecodeSMPTE": "00:03:33:02",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 173,
                    "Confidence": 99.8965835571289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 213120,
                "EndTimestampMillis": 213440,
                "DurationMillis": 320,
                "StartTimecodeSMPTE": "00:03:33:03",
                "EndTimecodeSMPTE": "00:03:33:11",
                "DurationSMPTE": "00:00:00:08",
                "ShotSegment": {
                    "Index": 174,
                    "Confidence": 60.22612380981445
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 213480,
                "EndTimestampMillis": 213880,
                "DurationMillis": 400,
                "StartTimecodeSMPTE": "00:03:33:12",
                "EndTimecodeSMPTE": "00:03:33:22",
                "DurationSMPTE": "00:00:00:10",
                "ShotSegment": {
                    "Index": 175,
                    "Confidence": 60.22612380981445
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 213920,
                "EndTimestampMillis": 214720,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:03:33:23",
                "EndTimecodeSMPTE": "00:03:34:18",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 176,
                    "Confidence": 99.21990203857422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 214760,
                "EndTimestampMillis": 215200,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:03:34:19",
                "EndTimecodeSMPTE": "00:03:35:05",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 177,
                    "Confidence": 87.79611206054688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 215240,
                "EndTimestampMillis": 216400,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:03:35:06",
                "EndTimecodeSMPTE": "00:03:36:10",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 178,
                    "Confidence": 87.79611206054688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 216440,
                "EndTimestampMillis": 219800,
                "DurationMillis": 3360,
                "StartTimecodeSMPTE": "00:03:36:11",
                "EndTimecodeSMPTE": "00:03:39:20",
                "DurationSMPTE": "00:00:03:09",
                "ShotSegment": {
                    "Index": 179,
                    "Confidence": 97.3709487915039
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 219840,
                "EndTimestampMillis": 222080,
                "DurationMillis": 2240,
                "StartTimecodeSMPTE": "00:03:39:21",
                "EndTimecodeSMPTE": "00:03:42:02",
                "DurationSMPTE": "00:00:02:06",
                "ShotSegment": {
                    "Index": 180,
                    "Confidence": 99.86763763427734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 222120,
                "EndTimestampMillis": 226000,
                "DurationMillis": 3880,
                "StartTimecodeSMPTE": "00:03:42:03",
                "EndTimecodeSMPTE": "00:03:46:00",
                "DurationSMPTE": "00:00:03:22",
                "ShotSegment": {
                    "Index": 181,
                    "Confidence": 99.94947814941406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 226040,
                "EndTimestampMillis": 226360,
                "DurationMillis": 320,
                "StartTimecodeSMPTE": "00:03:46:01",
                "EndTimecodeSMPTE": "00:03:46:09",
                "DurationSMPTE": "00:00:00:08",
                "ShotSegment": {
                    "Index": 182,
                    "Confidence": 99.52418518066406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 226400,
                "EndTimestampMillis": 226800,
                "DurationMillis": 400,
                "StartTimecodeSMPTE": "00:03:46:10",
                "EndTimecodeSMPTE": "00:03:46:20",
                "DurationSMPTE": "00:00:00:10",
                "ShotSegment": {
                    "Index": 183,
                    "Confidence": 82.4511489868164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 226840,
                "EndTimestampMillis": 227280,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:03:46:21",
                "EndTimecodeSMPTE": "00:03:47:07",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 184,
                    "Confidence": 82.4511489868164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 227320,
                "EndTimestampMillis": 227760,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:03:47:08",
                "EndTimecodeSMPTE": "00:03:47:19",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 185,
                    "Confidence": 69.34803771972656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 227800,
                "EndTimestampMillis": 228240,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:03:47:20",
                "EndTimecodeSMPTE": "00:03:48:06",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 186,
                    "Confidence": 69.34803771972656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 228280,
                "EndTimestampMillis": 233480,
                "DurationMillis": 5200,
                "StartTimecodeSMPTE": "00:03:48:07",
                "EndTimecodeSMPTE": "00:03:53:12",
                "DurationSMPTE": "00:00:05:05",
                "ShotSegment": {
                    "Index": 187,
                    "Confidence": 98.71974182128906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 233520,
                "EndTimestampMillis": 234240,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:03:53:13",
                "EndTimecodeSMPTE": "00:03:54:06",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 188,
                    "Confidence": 97.83065032958984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 234280,
                "EndTimestampMillis": 234880,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:03:54:07",
                "EndTimecodeSMPTE": "00:03:54:22",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 189,
                    "Confidence": 97.83065032958984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 234920,
                "EndTimestampMillis": 235800,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:03:54:23",
                "EndTimecodeSMPTE": "00:03:55:20",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 190,
                    "Confidence": 96.00550079345703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 235840,
                "EndTimestampMillis": 237320,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:03:55:21",
                "EndTimecodeSMPTE": "00:03:57:08",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 191,
                    "Confidence": 96.00550079345703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 237360,
                "EndTimestampMillis": 239200,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:03:57:09",
                "EndTimecodeSMPTE": "00:03:59:05",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 192,
                    "Confidence": 99.85743713378906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 239240,
                "EndTimestampMillis": 241560,
                "DurationMillis": 2320,
                "StartTimecodeSMPTE": "00:03:59:06",
                "EndTimecodeSMPTE": "00:04:01:14",
                "DurationSMPTE": "00:00:02:08",
                "ShotSegment": {
                    "Index": 193,
                    "Confidence": 99.85743713378906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 241600,
                "EndTimestampMillis": 243520,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:04:01:15",
                "EndTimecodeSMPTE": "00:04:03:13",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 194,
                    "Confidence": 99.96401977539062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 243560,
                "EndTimestampMillis": 244840,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:04:03:14",
                "EndTimecodeSMPTE": "00:04:04:21",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 195,
                    "Confidence": 99.96401977539062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 244880,
                "EndTimestampMillis": 246440,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:04:04:22",
                "EndTimecodeSMPTE": "00:04:06:11",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 196,
                    "Confidence": 99.94459533691406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 246480,
                "EndTimestampMillis": 247680,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:04:06:12",
                "EndTimecodeSMPTE": "00:04:07:17",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 197,
                    "Confidence": 99.94459533691406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 247720,
                "EndTimestampMillis": 250440,
                "DurationMillis": 2720,
                "StartTimecodeSMPTE": "00:04:07:18",
                "EndTimecodeSMPTE": "00:04:10:11",
                "DurationSMPTE": "00:00:02:18",
                "ShotSegment": {
                    "Index": 198,
                    "Confidence": 99.96637725830078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 250480,
                "EndTimestampMillis": 253080,
                "DurationMillis": 2600,
                "StartTimecodeSMPTE": "00:04:10:12",
                "EndTimecodeSMPTE": "00:04:13:02",
                "DurationSMPTE": "00:00:02:15",
                "ShotSegment": {
                    "Index": 199,
                    "Confidence": 99.70098876953125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 253120,
                "EndTimestampMillis": 256200,
                "DurationMillis": 3080,
                "StartTimecodeSMPTE": "00:04:13:03",
                "EndTimecodeSMPTE": "00:04:16:05",
                "DurationSMPTE": "00:00:03:02",
                "ShotSegment": {
                    "Index": 200,
                    "Confidence": 99.70098876953125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 256240,
                "EndTimestampMillis": 259080,
                "DurationMillis": 2840,
                "StartTimecodeSMPTE": "00:04:16:06",
                "EndTimecodeSMPTE": "00:04:19:02",
                "DurationSMPTE": "00:00:02:21",
                "ShotSegment": {
                    "Index": 201,
                    "Confidence": 99.81117248535156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 259120,
                "EndTimestampMillis": 260480,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:04:19:03",
                "EndTimecodeSMPTE": "00:04:20:12",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 202,
                    "Confidence": 99.90690612792969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 260520,
                "EndTimestampMillis": 261640,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:04:20:13",
                "EndTimecodeSMPTE": "00:04:21:16",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 203,
                    "Confidence": 99.31804656982422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 261680,
                "EndTimestampMillis": 263640,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:04:21:17",
                "EndTimecodeSMPTE": "00:04:23:16",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 204,
                    "Confidence": 99.31804656982422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 263680,
                "EndTimestampMillis": 264680,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:04:23:17",
                "EndTimecodeSMPTE": "00:04:24:17",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 205,
                    "Confidence": 99.8795166015625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 264720,
                "EndTimestampMillis": 265680,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:04:24:18",
                "EndTimecodeSMPTE": "00:04:25:17",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 206,
                    "Confidence": 99.8726806640625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 265720,
                "EndTimestampMillis": 266920,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:04:25:18",
                "EndTimecodeSMPTE": "00:04:26:23",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 207,
                    "Confidence": 97.92387390136719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 266960,
                "EndTimestampMillis": 268600,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:04:26:24",
                "EndTimecodeSMPTE": "00:04:28:15",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 208,
                    "Confidence": 97.92387390136719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 268640,
                "EndTimestampMillis": 270880,
                "DurationMillis": 2240,
                "StartTimecodeSMPTE": "00:04:28:16",
                "EndTimecodeSMPTE": "00:04:30:22",
                "DurationSMPTE": "00:00:02:06",
                "ShotSegment": {
                    "Index": 209,
                    "Confidence": 99.49321746826172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 270920,
                "EndTimestampMillis": 273360,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:04:30:23",
                "EndTimecodeSMPTE": "00:04:33:09",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 210,
                    "Confidence": 99.49321746826172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 273400,
                "EndTimestampMillis": 275000,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:04:33:10",
                "EndTimecodeSMPTE": "00:04:35:00",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 211,
                    "Confidence": 99.58160400390625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 275040,
                "EndTimestampMillis": 276600,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:04:35:01",
                "EndTimecodeSMPTE": "00:04:36:15",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 212,
                    "Confidence": 99.58160400390625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 276640,
                "EndTimestampMillis": 277440,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:04:36:16",
                "EndTimecodeSMPTE": "00:04:37:11",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 213,
                    "Confidence": 99.96440887451172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 277480,
                "EndTimestampMillis": 279080,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:04:37:12",
                "EndTimecodeSMPTE": "00:04:39:02",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 214,
                    "Confidence": 99.94641876220703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 279120,
                "EndTimestampMillis": 281120,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:04:39:03",
                "EndTimecodeSMPTE": "00:04:41:03",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 215,
                    "Confidence": 95.20352172851562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 281160,
                "EndTimestampMillis": 282800,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:04:41:04",
                "EndTimecodeSMPTE": "00:04:42:20",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 216,
                    "Confidence": 95.20352172851562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 282840,
                "EndTimestampMillis": 283040,
                "DurationMillis": 200,
                "StartTimecodeSMPTE": "00:04:42:21",
                "EndTimecodeSMPTE": "00:04:43:01",
                "DurationSMPTE": "00:00:00:05",
                "ShotSegment": {
                    "Index": 217,
                    "Confidence": 66.60920715332031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 283080,
                "EndTimestampMillis": 283800,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:04:43:02",
                "EndTimecodeSMPTE": "00:04:43:20",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 218,
                    "Confidence": 50.858741760253906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 283840,
                "EndTimestampMillis": 284320,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:04:43:21",
                "EndTimecodeSMPTE": "00:04:44:08",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 219,
                    "Confidence": 50.858741760253906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 284360,
                "EndTimestampMillis": 284840,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:04:44:09",
                "EndTimecodeSMPTE": "00:04:44:21",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 220,
                    "Confidence": 99.5956039428711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 284880,
                "EndTimestampMillis": 285800,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:04:44:22",
                "EndTimecodeSMPTE": "00:04:45:20",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 221,
                    "Confidence": 99.5956039428711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 285840,
                "EndTimestampMillis": 286800,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:04:45:21",
                "EndTimecodeSMPTE": "00:04:46:20",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 222,
                    "Confidence": 99.87669372558594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 286840,
                "EndTimestampMillis": 287760,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:04:46:21",
                "EndTimecodeSMPTE": "00:04:47:19",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 223,
                    "Confidence": 99.86431121826172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 287800,
                "EndTimestampMillis": 288240,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:04:47:20",
                "EndTimecodeSMPTE": "00:04:48:06",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 224,
                    "Confidence": 75.17559814453125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 288280,
                "EndTimestampMillis": 289040,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:04:48:07",
                "EndTimecodeSMPTE": "00:04:49:01",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 225,
                    "Confidence": 75.17559814453125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 289080,
                "EndTimestampMillis": 290600,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:04:49:02",
                "EndTimecodeSMPTE": "00:04:50:15",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 226,
                    "Confidence": 99.73326873779297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 290640,
                "EndTimestampMillis": 291320,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:04:50:16",
                "EndTimecodeSMPTE": "00:04:51:08",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 227,
                    "Confidence": 99.73326873779297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 291360,
                "EndTimestampMillis": 292360,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:04:51:09",
                "EndTimecodeSMPTE": "00:04:52:09",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 228,
                    "Confidence": 99.98851013183594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 292400,
                "EndTimestampMillis": 293760,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:04:52:10",
                "EndTimecodeSMPTE": "00:04:53:19",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 229,
                    "Confidence": 99.94476318359375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 293800,
                "EndTimestampMillis": 295160,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:04:53:20",
                "EndTimecodeSMPTE": "00:04:55:04",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 230,
                    "Confidence": 99.83808135986328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 295200,
                "EndTimestampMillis": 295760,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:04:55:05",
                "EndTimecodeSMPTE": "00:04:55:19",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 231,
                    "Confidence": 85.25064086914062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 295800,
                "EndTimestampMillis": 296360,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:04:55:20",
                "EndTimecodeSMPTE": "00:04:56:09",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 232,
                    "Confidence": 85.25064086914062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 296400,
                "EndTimestampMillis": 296960,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:04:56:10",
                "EndTimecodeSMPTE": "00:04:56:24",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 233,
                    "Confidence": 90.7400131225586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 297000,
                "EndTimestampMillis": 297760,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:04:57:00",
                "EndTimecodeSMPTE": "00:04:57:19",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 234,
                    "Confidence": 90.7400131225586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 297800,
                "EndTimestampMillis": 299160,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:04:57:20",
                "EndTimecodeSMPTE": "00:04:59:04",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 235,
                    "Confidence": 99.54875183105469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 299200,
                "EndTimestampMillis": 301200,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:04:59:05",
                "EndTimecodeSMPTE": "00:05:01:05",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 236,
                    "Confidence": 99.86153411865234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 301240,
                "EndTimestampMillis": 303120,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:05:01:06",
                "EndTimecodeSMPTE": "00:05:03:03",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 237,
                    "Confidence": 99.9334487915039
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 303160,
                "EndTimestampMillis": 304000,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:05:03:04",
                "EndTimecodeSMPTE": "00:05:04:00",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 238,
                    "Confidence": 99.90907287597656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 304040,
                "EndTimestampMillis": 305120,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:05:04:01",
                "EndTimecodeSMPTE": "00:05:05:03",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 239,
                    "Confidence": 98.73089599609375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 305160,
                "EndTimestampMillis": 306560,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:05:05:04",
                "EndTimecodeSMPTE": "00:05:06:14",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 240,
                    "Confidence": 98.73089599609375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 306600,
                "EndTimestampMillis": 309160,
                "DurationMillis": 2560,
                "StartTimecodeSMPTE": "00:05:06:15",
                "EndTimecodeSMPTE": "00:05:09:04",
                "DurationSMPTE": "00:00:02:14",
                "ShotSegment": {
                    "Index": 241,
                    "Confidence": 99.8616943359375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 309200,
                "EndTimestampMillis": 311120,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:05:09:05",
                "EndTimecodeSMPTE": "00:05:11:03",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 242,
                    "Confidence": 99.95846557617188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 311160,
                "EndTimestampMillis": 312600,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:05:11:04",
                "EndTimecodeSMPTE": "00:05:12:15",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 243,
                    "Confidence": 99.94153594970703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 312640,
                "EndTimestampMillis": 313400,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:05:12:16",
                "EndTimecodeSMPTE": "00:05:13:10",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 244,
                    "Confidence": 99.94153594970703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 313440,
                "EndTimestampMillis": 314400,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:05:13:11",
                "EndTimecodeSMPTE": "00:05:14:10",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 245,
                    "Confidence": 89.04631042480469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 314440,
                "EndTimestampMillis": 315160,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:05:14:11",
                "EndTimecodeSMPTE": "00:05:15:04",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 246,
                    "Confidence": 89.04631042480469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 315200,
                "EndTimestampMillis": 316360,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:05:15:05",
                "EndTimecodeSMPTE": "00:05:16:09",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 247,
                    "Confidence": 98.0949935913086
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 316400,
                "EndTimestampMillis": 317360,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:05:16:10",
                "EndTimecodeSMPTE": "00:05:17:09",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 248,
                    "Confidence": 98.43669128417969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 317400,
                "EndTimestampMillis": 318680,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:05:17:10",
                "EndTimecodeSMPTE": "00:05:18:17",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 249,
                    "Confidence": 99.87834930419922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 318720,
                "EndTimestampMillis": 319920,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:05:18:18",
                "EndTimecodeSMPTE": "00:05:19:23",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 250,
                    "Confidence": 99.75989532470703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 319960,
                "EndTimestampMillis": 321400,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:05:19:24",
                "EndTimecodeSMPTE": "00:05:21:10",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 251,
                    "Confidence": 99.75989532470703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 321440,
                "EndTimestampMillis": 323440,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:05:21:11",
                "EndTimecodeSMPTE": "00:05:23:11",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 252,
                    "Confidence": 96.00137329101562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 323480,
                "EndTimestampMillis": 326000,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:05:23:12",
                "EndTimecodeSMPTE": "00:05:26:00",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 253,
                    "Confidence": 96.00137329101562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 326040,
                "EndTimestampMillis": 327600,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:05:26:01",
                "EndTimecodeSMPTE": "00:05:27:15",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 254,
                    "Confidence": 99.87962341308594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 327640,
                "EndTimestampMillis": 329000,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:05:27:16",
                "EndTimecodeSMPTE": "00:05:29:00",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 255,
                    "Confidence": 99.87962341308594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 329040,
                "EndTimestampMillis": 332080,
                "DurationMillis": 3040,
                "StartTimecodeSMPTE": "00:05:29:01",
                "EndTimecodeSMPTE": "00:05:32:02",
                "DurationSMPTE": "00:00:03:01",
                "ShotSegment": {
                    "Index": 256,
                    "Confidence": 99.72582244873047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 332120,
                "EndTimestampMillis": 334000,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:05:32:03",
                "EndTimecodeSMPTE": "00:05:34:00",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 257,
                    "Confidence": 99.72582244873047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 334040,
                "EndTimestampMillis": 335040,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:05:34:01",
                "EndTimecodeSMPTE": "00:05:35:01",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 258,
                    "Confidence": 99.86782836914062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 335080,
                "EndTimestampMillis": 336040,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:05:35:02",
                "EndTimecodeSMPTE": "00:05:36:01",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 259,
                    "Confidence": 99.66845703125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 336080,
                "EndTimestampMillis": 336680,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:05:36:02",
                "EndTimecodeSMPTE": "00:05:36:17",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 260,
                    "Confidence": 92.09244537353516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 336720,
                "EndTimestampMillis": 337040,
                "DurationMillis": 320,
                "StartTimecodeSMPTE": "00:05:36:18",
                "EndTimecodeSMPTE": "00:05:37:01",
                "DurationSMPTE": "00:00:00:08",
                "ShotSegment": {
                    "Index": 261,
                    "Confidence": 81.1141586303711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 337080,
                "EndTimestampMillis": 337680,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:05:37:02",
                "EndTimecodeSMPTE": "00:05:37:17",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 262,
                    "Confidence": 81.1141586303711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 337720,
                "EndTimestampMillis": 339360,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:05:37:18",
                "EndTimecodeSMPTE": "00:05:39:09",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 263,
                    "Confidence": 99.11589050292969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 339400,
                "EndTimestampMillis": 340280,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:05:39:10",
                "EndTimecodeSMPTE": "00:05:40:07",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 264,
                    "Confidence": 99.95853424072266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 340320,
                "EndTimestampMillis": 342400,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:05:40:08",
                "EndTimecodeSMPTE": "00:05:42:10",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 265,
                    "Confidence": 60.56147003173828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 342440,
                "EndTimestampMillis": 345480,
                "DurationMillis": 3040,
                "StartTimecodeSMPTE": "00:05:42:11",
                "EndTimecodeSMPTE": "00:05:45:12",
                "DurationSMPTE": "00:00:03:01",
                "ShotSegment": {
                    "Index": 266,
                    "Confidence": 60.56147003173828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 345520,
                "EndTimestampMillis": 347200,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:05:45:13",
                "EndTimecodeSMPTE": "00:05:47:05",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 267,
                    "Confidence": 99.78003692626953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 347240,
                "EndTimestampMillis": 348720,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:05:47:06",
                "EndTimecodeSMPTE": "00:05:48:18",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 268,
                    "Confidence": 99.82969665527344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 348760,
                "EndTimestampMillis": 350080,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:05:48:19",
                "EndTimecodeSMPTE": "00:05:50:02",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 269,
                    "Confidence": 99.82969665527344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 350120,
                "EndTimestampMillis": 351200,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:05:50:03",
                "EndTimecodeSMPTE": "00:05:51:05",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 270,
                    "Confidence": 99.80615234375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 351240,
                "EndTimestampMillis": 353200,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:05:51:06",
                "EndTimecodeSMPTE": "00:05:53:05",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 271,
                    "Confidence": 99.25150299072266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 353240,
                "EndTimestampMillis": 354920,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:05:53:06",
                "EndTimecodeSMPTE": "00:05:54:23",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 272,
                    "Confidence": 98.96326446533203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 354960,
                "EndTimestampMillis": 356160,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:05:54:24",
                "EndTimecodeSMPTE": "00:05:56:04",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 273,
                    "Confidence": 98.96326446533203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 356200,
                "EndTimestampMillis": 356880,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:05:56:05",
                "EndTimecodeSMPTE": "00:05:56:22",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 274,
                    "Confidence": 99.58574676513672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 356920,
                "EndTimestampMillis": 357840,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:05:56:23",
                "EndTimecodeSMPTE": "00:05:57:21",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 275,
                    "Confidence": 99.88928985595703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 357880,
                "EndTimestampMillis": 358680,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:05:57:22",
                "EndTimecodeSMPTE": "00:05:58:17",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 276,
                    "Confidence": 99.820556640625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 358720,
                "EndTimestampMillis": 359560,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:05:58:18",
                "EndTimecodeSMPTE": "00:05:59:14",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 277,
                    "Confidence": 99.7752685546875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 359600,
                "EndTimestampMillis": 360400,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:05:59:15",
                "EndTimecodeSMPTE": "00:06:00:10",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 278,
                    "Confidence": 99.7752685546875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 360440,
                "EndTimestampMillis": 361560,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:06:00:11",
                "EndTimecodeSMPTE": "00:06:01:14",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 279,
                    "Confidence": 99.8838882446289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 361600,
                "EndTimestampMillis": 362600,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:06:01:15",
                "EndTimecodeSMPTE": "00:06:02:15",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 280,
                    "Confidence": 99.94766235351562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 362640,
                "EndTimestampMillis": 363400,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:06:02:16",
                "EndTimecodeSMPTE": "00:06:03:10",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 281,
                    "Confidence": 99.94766235351562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 363440,
                "EndTimestampMillis": 364480,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:06:03:11",
                "EndTimecodeSMPTE": "00:06:04:12",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 282,
                    "Confidence": 99.95466613769531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 364520,
                "EndTimestampMillis": 367480,
                "DurationMillis": 2960,
                "StartTimecodeSMPTE": "00:06:04:13",
                "EndTimecodeSMPTE": "00:06:07:12",
                "DurationSMPTE": "00:00:02:24",
                "ShotSegment": {
                    "Index": 283,
                    "Confidence": 99.8310775756836
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 367520,
                "EndTimestampMillis": 369280,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:06:07:13",
                "EndTimecodeSMPTE": "00:06:09:07",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 284,
                    "Confidence": 99.60174560546875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 369320,
                "EndTimestampMillis": 371120,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:06:09:08",
                "EndTimecodeSMPTE": "00:06:11:03",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 285,
                    "Confidence": 99.60174560546875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 371160,
                "EndTimestampMillis": 373600,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:06:11:04",
                "EndTimecodeSMPTE": "00:06:13:15",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 286,
                    "Confidence": 99.4117431640625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 373640,
                "EndTimestampMillis": 374840,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:06:13:16",
                "EndTimecodeSMPTE": "00:06:14:21",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 287,
                    "Confidence": 99.4117431640625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 374880,
                "EndTimestampMillis": 378840,
                "DurationMillis": 3960,
                "StartTimecodeSMPTE": "00:06:14:22",
                "EndTimecodeSMPTE": "00:06:18:21",
                "DurationSMPTE": "00:00:03:24",
                "ShotSegment": {
                    "Index": 288,
                    "Confidence": 99.75634765625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 378880,
                "EndTimestampMillis": 379880,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:06:18:22",
                "EndTimecodeSMPTE": "00:06:19:22",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 289,
                    "Confidence": 99.77703857421875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 379920,
                "EndTimestampMillis": 381600,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:06:19:23",
                "EndTimecodeSMPTE": "00:06:21:15",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 290,
                    "Confidence": 99.63848876953125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 381640,
                "EndTimestampMillis": 382160,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:06:21:16",
                "EndTimecodeSMPTE": "00:06:22:04",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 291,
                    "Confidence": 98.2706298828125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 382200,
                "EndTimestampMillis": 382640,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:06:22:05",
                "EndTimecodeSMPTE": "00:06:22:16",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 292,
                    "Confidence": 98.2706298828125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 382680,
                "EndTimestampMillis": 383320,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:06:22:17",
                "EndTimecodeSMPTE": "00:06:23:08",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 293,
                    "Confidence": 99.37499237060547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 383360,
                "EndTimestampMillis": 383920,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:06:23:09",
                "EndTimecodeSMPTE": "00:06:23:23",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 294,
                    "Confidence": 99.37499237060547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 383960,
                "EndTimestampMillis": 384600,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:06:23:24",
                "EndTimecodeSMPTE": "00:06:24:15",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 295,
                    "Confidence": 99.56437683105469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 384640,
                "EndTimestampMillis": 385480,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:06:24:16",
                "EndTimecodeSMPTE": "00:06:25:12",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 296,
                    "Confidence": 99.71318817138672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 385520,
                "EndTimestampMillis": 386720,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:06:25:13",
                "EndTimecodeSMPTE": "00:06:26:18",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 297,
                    "Confidence": 99.88512420654297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 386760,
                "EndTimestampMillis": 390680,
                "DurationMillis": 3920,
                "StartTimecodeSMPTE": "00:06:26:19",
                "EndTimecodeSMPTE": "00:06:30:17",
                "DurationSMPTE": "00:00:03:23",
                "ShotSegment": {
                    "Index": 298,
                    "Confidence": 99.36431884765625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 390720,
                "EndTimestampMillis": 391760,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:06:30:18",
                "EndTimecodeSMPTE": "00:06:31:19",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 299,
                    "Confidence": 94.08798217773438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 391800,
                "EndTimestampMillis": 392720,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:06:31:20",
                "EndTimecodeSMPTE": "00:06:32:18",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 300,
                    "Confidence": 94.08798217773438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 392760,
                "EndTimestampMillis": 393960,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:06:32:19",
                "EndTimecodeSMPTE": "00:06:33:24",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 301,
                    "Confidence": 98.77655029296875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 394000,
                "EndTimestampMillis": 394640,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:06:34:00",
                "EndTimecodeSMPTE": "00:06:34:16",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 302,
                    "Confidence": 99.79497528076172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 394680,
                "EndTimestampMillis": 396480,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:06:34:17",
                "EndTimecodeSMPTE": "00:06:36:12",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 303,
                    "Confidence": 99.90296936035156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 396520,
                "EndTimestampMillis": 399160,
                "DurationMillis": 2640,
                "StartTimecodeSMPTE": "00:06:36:13",
                "EndTimecodeSMPTE": "00:06:39:04",
                "DurationSMPTE": "00:00:02:16",
                "ShotSegment": {
                    "Index": 304,
                    "Confidence": 99.85263061523438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 399200,
                "EndTimestampMillis": 402560,
                "DurationMillis": 3360,
                "StartTimecodeSMPTE": "00:06:39:05",
                "EndTimecodeSMPTE": "00:06:42:14",
                "DurationSMPTE": "00:00:03:09",
                "ShotSegment": {
                    "Index": 305,
                    "Confidence": 99.61163330078125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 402600,
                "EndTimestampMillis": 403200,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:06:42:15",
                "EndTimecodeSMPTE": "00:06:43:05",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 306,
                    "Confidence": 99.61163330078125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 403240,
                "EndTimestampMillis": 403800,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:06:43:06",
                "EndTimecodeSMPTE": "00:06:43:20",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 307,
                    "Confidence": 85.11927795410156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 403840,
                "EndTimestampMillis": 404560,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:06:43:21",
                "EndTimecodeSMPTE": "00:06:44:14",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 308,
                    "Confidence": 85.11927795410156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 404600,
                "EndTimestampMillis": 405840,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:06:44:15",
                "EndTimecodeSMPTE": "00:06:45:21",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 309,
                    "Confidence": 92.3097915649414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 405880,
                "EndTimestampMillis": 407240,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:06:45:22",
                "EndTimecodeSMPTE": "00:06:47:06",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 310,
                    "Confidence": 92.3097915649414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 407280,
                "EndTimestampMillis": 409640,
                "DurationMillis": 2360,
                "StartTimecodeSMPTE": "00:06:47:07",
                "EndTimecodeSMPTE": "00:06:49:16",
                "DurationSMPTE": "00:00:02:09",
                "ShotSegment": {
                    "Index": 311,
                    "Confidence": 99.71414947509766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 409680,
                "EndTimestampMillis": 410920,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:06:49:17",
                "EndTimecodeSMPTE": "00:06:50:23",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 312,
                    "Confidence": 65.65609741210938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 410960,
                "EndTimestampMillis": 411560,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:06:50:24",
                "EndTimecodeSMPTE": "00:06:51:14",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 313,
                    "Confidence": 65.65609741210938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 411600,
                "EndTimestampMillis": 412720,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:06:51:15",
                "EndTimecodeSMPTE": "00:06:52:18",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 314,
                    "Confidence": 80.40606689453125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 412760,
                "EndTimestampMillis": 416320,
                "DurationMillis": 3560,
                "StartTimecodeSMPTE": "00:06:52:19",
                "EndTimecodeSMPTE": "00:06:56:08",
                "DurationSMPTE": "00:00:03:14",
                "ShotSegment": {
                    "Index": 315,
                    "Confidence": 99.89418029785156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 416360,
                "EndTimestampMillis": 417760,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:06:56:09",
                "EndTimecodeSMPTE": "00:06:57:19",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 316,
                    "Confidence": 99.81275939941406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 417800,
                "EndTimestampMillis": 420080,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:06:57:20",
                "EndTimecodeSMPTE": "00:07:00:02",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 317,
                    "Confidence": 99.81275939941406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 420120,
                "EndTimestampMillis": 422400,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:07:00:03",
                "EndTimecodeSMPTE": "00:07:02:10",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 318,
                    "Confidence": 99.951171875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 422440,
                "EndTimestampMillis": 424560,
                "DurationMillis": 2120,
                "StartTimecodeSMPTE": "00:07:02:11",
                "EndTimecodeSMPTE": "00:07:04:14",
                "DurationSMPTE": "00:00:02:03",
                "ShotSegment": {
                    "Index": 319,
                    "Confidence": 99.94567108154297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 424600,
                "EndTimestampMillis": 426560,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:07:04:15",
                "EndTimecodeSMPTE": "00:07:06:14",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 320,
                    "Confidence": 99.89942932128906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 426600,
                "EndTimestampMillis": 429080,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:07:06:15",
                "EndTimecodeSMPTE": "00:07:09:02",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 321,
                    "Confidence": 99.8681411743164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 429120,
                "EndTimestampMillis": 430760,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:07:09:03",
                "EndTimecodeSMPTE": "00:07:10:19",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 322,
                    "Confidence": 99.8681411743164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 430800,
                "EndTimestampMillis": 431560,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:07:10:20",
                "EndTimecodeSMPTE": "00:07:11:14",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 323,
                    "Confidence": 99.27468872070312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 431600,
                "EndTimestampMillis": 432840,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:07:11:15",
                "EndTimecodeSMPTE": "00:07:12:21",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 324,
                    "Confidence": 99.27468872070312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 432880,
                "EndTimestampMillis": 433600,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:07:12:22",
                "EndTimecodeSMPTE": "00:07:13:15",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 325,
                    "Confidence": 99.90180206298828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 433640,
                "EndTimestampMillis": 435440,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:07:13:16",
                "EndTimecodeSMPTE": "00:07:15:11",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 326,
                    "Confidence": 99.51573944091797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 435480,
                "EndTimestampMillis": 436440,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:07:15:12",
                "EndTimecodeSMPTE": "00:07:16:11",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 327,
                    "Confidence": 98.43412780761719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 436480,
                "EndTimestampMillis": 438120,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:07:16:12",
                "EndTimecodeSMPTE": "00:07:18:03",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 328,
                    "Confidence": 98.43412780761719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 438160,
                "EndTimestampMillis": 438680,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:07:18:04",
                "EndTimecodeSMPTE": "00:07:18:17",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 329,
                    "Confidence": 99.95740509033203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 438720,
                "EndTimestampMillis": 439400,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:07:18:18",
                "EndTimecodeSMPTE": "00:07:19:10",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 330,
                    "Confidence": 98.12947082519531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 439440,
                "EndTimestampMillis": 440560,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:07:19:11",
                "EndTimecodeSMPTE": "00:07:20:14",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 331,
                    "Confidence": 98.12947082519531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 440600,
                "EndTimestampMillis": 441280,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:07:20:15",
                "EndTimecodeSMPTE": "00:07:21:07",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 332,
                    "Confidence": 99.5870132446289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 441320,
                "EndTimestampMillis": 441920,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:07:21:08",
                "EndTimecodeSMPTE": "00:07:21:23",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 333,
                    "Confidence": 99.86471557617188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 441960,
                "EndTimestampMillis": 442760,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:07:21:24",
                "EndTimecodeSMPTE": "00:07:22:19",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 334,
                    "Confidence": 99.86471557617188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 442800,
                "EndTimestampMillis": 443520,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:07:22:20",
                "EndTimecodeSMPTE": "00:07:23:13",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 335,
                    "Confidence": 99.79947662353516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 443560,
                "EndTimestampMillis": 444600,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:07:23:14",
                "EndTimecodeSMPTE": "00:07:24:15",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 336,
                    "Confidence": 99.79947662353516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 444640,
                "EndTimestampMillis": 447520,
                "DurationMillis": 2880,
                "StartTimecodeSMPTE": "00:07:24:16",
                "EndTimecodeSMPTE": "00:07:27:13",
                "DurationSMPTE": "00:00:02:22",
                "ShotSegment": {
                    "Index": 337,
                    "Confidence": 97.79437255859375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 447560,
                "EndTimestampMillis": 451120,
                "DurationMillis": 3560,
                "StartTimecodeSMPTE": "00:07:27:14",
                "EndTimecodeSMPTE": "00:07:31:03",
                "DurationSMPTE": "00:00:03:14",
                "ShotSegment": {
                    "Index": 338,
                    "Confidence": 97.79437255859375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 451160,
                "EndTimestampMillis": 452240,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:07:31:04",
                "EndTimecodeSMPTE": "00:07:32:06",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 339,
                    "Confidence": 99.3629150390625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 452280,
                "EndTimestampMillis": 453360,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:07:32:07",
                "EndTimecodeSMPTE": "00:07:33:09",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 340,
                    "Confidence": 98.65994262695312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 453400,
                "EndTimestampMillis": 454640,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:07:33:10",
                "EndTimecodeSMPTE": "00:07:34:16",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 341,
                    "Confidence": 98.65994262695312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 454680,
                "EndTimestampMillis": 456240,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:07:34:17",
                "EndTimecodeSMPTE": "00:07:36:06",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 342,
                    "Confidence": 56.65486145019531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 456280,
                "EndTimestampMillis": 457480,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:07:36:07",
                "EndTimecodeSMPTE": "00:07:37:12",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 343,
                    "Confidence": 56.65486145019531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 457520,
                "EndTimestampMillis": 457840,
                "DurationMillis": 320,
                "StartTimecodeSMPTE": "00:07:37:13",
                "EndTimecodeSMPTE": "00:07:37:21",
                "DurationSMPTE": "00:00:00:08",
                "ShotSegment": {
                    "Index": 344,
                    "Confidence": 97.91809844970703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 457880,
                "EndTimestampMillis": 458680,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:07:37:22",
                "EndTimecodeSMPTE": "00:07:38:17",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 345,
                    "Confidence": 98.68821716308594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 458720,
                "EndTimestampMillis": 462200,
                "DurationMillis": 3480,
                "StartTimecodeSMPTE": "00:07:38:18",
                "EndTimecodeSMPTE": "00:07:42:05",
                "DurationSMPTE": "00:00:03:12",
                "ShotSegment": {
                    "Index": 346,
                    "Confidence": 97.46214294433594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 462240,
                "EndTimestampMillis": 462800,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:07:42:06",
                "EndTimecodeSMPTE": "00:07:42:20",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 347,
                    "Confidence": 97.46214294433594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 462840,
                "EndTimestampMillis": 463320,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:07:42:21",
                "EndTimecodeSMPTE": "00:07:43:08",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 348,
                    "Confidence": 76.95128631591797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 463360,
                "EndTimestampMillis": 464960,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:07:43:09",
                "EndTimecodeSMPTE": "00:07:44:24",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 349,
                    "Confidence": 76.95128631591797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 465000,
                "EndTimestampMillis": 469440,
                "DurationMillis": 4440,
                "StartTimecodeSMPTE": "00:07:45:00",
                "EndTimecodeSMPTE": "00:07:49:11",
                "DurationSMPTE": "00:00:04:11",
                "ShotSegment": {
                    "Index": 350,
                    "Confidence": 99.4684066772461
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 469480,
                "EndTimestampMillis": 470000,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:07:49:12",
                "EndTimecodeSMPTE": "00:07:50:00",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 351,
                    "Confidence": 98.28129577636719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 470040,
                "EndTimestampMillis": 470960,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:07:50:01",
                "EndTimecodeSMPTE": "00:07:50:24",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 352,
                    "Confidence": 98.28129577636719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 471000,
                "EndTimestampMillis": 471960,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:07:51:00",
                "EndTimecodeSMPTE": "00:07:51:24",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 353,
                    "Confidence": 99.48957061767578
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 472000,
                "EndTimestampMillis": 474160,
                "DurationMillis": 2160,
                "StartTimecodeSMPTE": "00:07:52:00",
                "EndTimecodeSMPTE": "00:07:54:04",
                "DurationSMPTE": "00:00:02:04",
                "ShotSegment": {
                    "Index": 354,
                    "Confidence": 86.66912078857422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 474200,
                "EndTimestampMillis": 475680,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:07:54:05",
                "EndTimecodeSMPTE": "00:07:55:17",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 355,
                    "Confidence": 86.66912078857422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 475720,
                "EndTimestampMillis": 476920,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:07:55:18",
                "EndTimecodeSMPTE": "00:07:56:23",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 356,
                    "Confidence": 99.88531494140625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 476960,
                "EndTimestampMillis": 479240,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:07:56:24",
                "EndTimecodeSMPTE": "00:07:59:06",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 357,
                    "Confidence": 99.88531494140625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 479280,
                "EndTimestampMillis": 480560,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:07:59:07",
                "EndTimecodeSMPTE": "00:08:00:14",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 358,
                    "Confidence": 99.88710021972656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 480600,
                "EndTimestampMillis": 482240,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:08:00:15",
                "EndTimecodeSMPTE": "00:08:02:06",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 359,
                    "Confidence": 99.73860931396484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 482280,
                "EndTimestampMillis": 484000,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:08:02:07",
                "EndTimecodeSMPTE": "00:08:04:00",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 360,
                    "Confidence": 99.73860931396484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 484040,
                "EndTimestampMillis": 484680,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:08:04:01",
                "EndTimecodeSMPTE": "00:08:04:17",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 361,
                    "Confidence": 99.87996673583984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 484720,
                "EndTimestampMillis": 486720,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:08:04:18",
                "EndTimecodeSMPTE": "00:08:06:18",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 362,
                    "Confidence": 99.91056823730469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 486760,
                "EndTimestampMillis": 488080,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:08:06:19",
                "EndTimecodeSMPTE": "00:08:08:02",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 363,
                    "Confidence": 99.9295654296875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 488120,
                "EndTimestampMillis": 488800,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:08:08:03",
                "EndTimecodeSMPTE": "00:08:08:20",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 364,
                    "Confidence": 99.61050415039062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 488840,
                "EndTimestampMillis": 490200,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:08:08:21",
                "EndTimecodeSMPTE": "00:08:10:05",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 365,
                    "Confidence": 99.61050415039062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 490240,
                "EndTimestampMillis": 493280,
                "DurationMillis": 3040,
                "StartTimecodeSMPTE": "00:08:10:06",
                "EndTimecodeSMPTE": "00:08:13:07",
                "DurationSMPTE": "00:00:03:01",
                "ShotSegment": {
                    "Index": 366,
                    "Confidence": 99.77368927001953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 493320,
                "EndTimestampMillis": 495080,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:08:13:08",
                "EndTimecodeSMPTE": "00:08:15:02",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 367,
                    "Confidence": 99.77368927001953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 495120,
                "EndTimestampMillis": 496280,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:08:15:03",
                "EndTimecodeSMPTE": "00:08:16:07",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 368,
                    "Confidence": 99.80978393554688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 496320,
                "EndTimestampMillis": 497320,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:08:16:08",
                "EndTimecodeSMPTE": "00:08:17:08",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 369,
                    "Confidence": 99.94550323486328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 497360,
                "EndTimestampMillis": 499280,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:08:17:09",
                "EndTimecodeSMPTE": "00:08:19:07",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 370,
                    "Confidence": 99.96393585205078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 499320,
                "EndTimestampMillis": 500960,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:08:19:08",
                "EndTimecodeSMPTE": "00:08:20:24",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 371,
                    "Confidence": 99.9703140258789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 501000,
                "EndTimestampMillis": 502360,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:08:21:00",
                "EndTimecodeSMPTE": "00:08:22:09",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 372,
                    "Confidence": 99.8414306640625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 502400,
                "EndTimestampMillis": 503240,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:08:22:10",
                "EndTimecodeSMPTE": "00:08:23:06",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 373,
                    "Confidence": 99.8414306640625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 503280,
                "EndTimestampMillis": 505040,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:08:23:07",
                "EndTimecodeSMPTE": "00:08:25:01",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 374,
                    "Confidence": 99.93538665771484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 505080,
                "EndTimestampMillis": 508200,
                "DurationMillis": 3120,
                "StartTimecodeSMPTE": "00:08:25:02",
                "EndTimecodeSMPTE": "00:08:28:05",
                "DurationSMPTE": "00:00:03:03",
                "ShotSegment": {
                    "Index": 375,
                    "Confidence": 99.901123046875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 508240,
                "EndTimestampMillis": 512880,
                "DurationMillis": 4640,
                "StartTimecodeSMPTE": "00:08:28:06",
                "EndTimecodeSMPTE": "00:08:32:22",
                "DurationSMPTE": "00:00:04:16",
                "ShotSegment": {
                    "Index": 376,
                    "Confidence": 99.901123046875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 512920,
                "EndTimestampMillis": 514280,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:08:32:23",
                "EndTimecodeSMPTE": "00:08:34:07",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 377,
                    "Confidence": 99.93981170654297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 514320,
                "EndTimestampMillis": 515440,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:08:34:08",
                "EndTimecodeSMPTE": "00:08:35:11",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 378,
                    "Confidence": 99.92713928222656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 515480,
                "EndTimestampMillis": 520600,
                "DurationMillis": 5120,
                "StartTimecodeSMPTE": "00:08:35:12",
                "EndTimecodeSMPTE": "00:08:40:15",
                "DurationSMPTE": "00:00:05:03",
                "ShotSegment": {
                    "Index": 379,
                    "Confidence": 99.92713928222656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 520640,
                "EndTimestampMillis": 522080,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:08:40:16",
                "EndTimecodeSMPTE": "00:08:42:02",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 380,
                    "Confidence": 99.95315551757812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 522120,
                "EndTimestampMillis": 523400,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:08:42:03",
                "EndTimecodeSMPTE": "00:08:43:10",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 381,
                    "Confidence": 99.95315551757812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 523440,
                "EndTimestampMillis": 525040,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:08:43:11",
                "EndTimecodeSMPTE": "00:08:45:01",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 382,
                    "Confidence": 99.98062896728516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 525080,
                "EndTimestampMillis": 530000,
                "DurationMillis": 4920,
                "StartTimecodeSMPTE": "00:08:45:02",
                "EndTimecodeSMPTE": "00:08:50:00",
                "DurationSMPTE": "00:00:04:23",
                "ShotSegment": {
                    "Index": 383,
                    "Confidence": 99.98062896728516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 530040,
                "EndTimestampMillis": 531000,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:08:50:01",
                "EndTimecodeSMPTE": "00:08:51:00",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 384,
                    "Confidence": 99.97679901123047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 531040,
                "EndTimestampMillis": 532920,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:08:51:01",
                "EndTimecodeSMPTE": "00:08:52:23",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 385,
                    "Confidence": 99.97679901123047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 532960,
                "EndTimestampMillis": 536600,
                "DurationMillis": 3640,
                "StartTimecodeSMPTE": "00:08:52:24",
                "EndTimecodeSMPTE": "00:08:56:15",
                "DurationSMPTE": "00:00:03:16",
                "ShotSegment": {
                    "Index": 386,
                    "Confidence": 98.78766632080078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 536640,
                "EndTimestampMillis": 537480,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:08:56:16",
                "EndTimecodeSMPTE": "00:08:57:12",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 387,
                    "Confidence": 98.78766632080078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 537520,
                "EndTimestampMillis": 539360,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:08:57:13",
                "EndTimecodeSMPTE": "00:08:59:09",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 388,
                    "Confidence": 99.7337646484375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 539400,
                "EndTimestampMillis": 540960,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:08:59:10",
                "EndTimecodeSMPTE": "00:09:00:24",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 389,
                    "Confidence": 70.2236099243164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 541000,
                "EndTimestampMillis": 542600,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:09:01:00",
                "EndTimecodeSMPTE": "00:09:02:15",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 390,
                    "Confidence": 70.2236099243164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 542640,
                "EndTimestampMillis": 545200,
                "DurationMillis": 2560,
                "StartTimecodeSMPTE": "00:09:02:16",
                "EndTimecodeSMPTE": "00:09:05:05",
                "DurationSMPTE": "00:00:02:14",
                "ShotSegment": {
                    "Index": 391,
                    "Confidence": 99.89921569824219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 545240,
                "EndTimestampMillis": 546120,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:09:05:06",
                "EndTimecodeSMPTE": "00:09:06:03",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 392,
                    "Confidence": 99.90444946289062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 546160,
                "EndTimestampMillis": 549800,
                "DurationMillis": 3640,
                "StartTimecodeSMPTE": "00:09:06:04",
                "EndTimecodeSMPTE": "00:09:09:20",
                "DurationSMPTE": "00:00:03:16",
                "ShotSegment": {
                    "Index": 393,
                    "Confidence": 99.74877166748047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 549840,
                "EndTimestampMillis": 550920,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:09:09:21",
                "EndTimecodeSMPTE": "00:09:10:23",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 394,
                    "Confidence": 79.33514404296875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 550960,
                "EndTimestampMillis": 551720,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:09:10:24",
                "EndTimecodeSMPTE": "00:09:11:18",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 395,
                    "Confidence": 79.33514404296875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 551760,
                "EndTimestampMillis": 553200,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:09:11:19",
                "EndTimecodeSMPTE": "00:09:13:05",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 396,
                    "Confidence": 99.63668060302734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 553240,
                "EndTimestampMillis": 555120,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:09:13:06",
                "EndTimecodeSMPTE": "00:09:15:03",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 397,
                    "Confidence": 99.77569580078125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 555160,
                "EndTimestampMillis": 555960,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:09:15:04",
                "EndTimecodeSMPTE": "00:09:15:24",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 398,
                    "Confidence": 99.46865844726562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 556000,
                "EndTimestampMillis": 556600,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:09:16:00",
                "EndTimecodeSMPTE": "00:09:16:15",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 399,
                    "Confidence": 99.46865844726562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 556640,
                "EndTimestampMillis": 557280,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:09:16:16",
                "EndTimecodeSMPTE": "00:09:17:07",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 400,
                    "Confidence": 99.29190826416016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 557320,
                "EndTimestampMillis": 558000,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:09:17:08",
                "EndTimecodeSMPTE": "00:09:18:00",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 401,
                    "Confidence": 99.29190826416016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 558040,
                "EndTimestampMillis": 558880,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:09:18:01",
                "EndTimecodeSMPTE": "00:09:18:22",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 402,
                    "Confidence": 99.81212615966797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 558920,
                "EndTimestampMillis": 559720,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:09:18:23",
                "EndTimecodeSMPTE": "00:09:19:18",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 403,
                    "Confidence": 99.72093963623047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 559760,
                "EndTimestampMillis": 562200,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:09:19:19",
                "EndTimecodeSMPTE": "00:09:22:05",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 404,
                    "Confidence": 99.72093963623047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 562240,
                "EndTimestampMillis": 563240,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:09:22:06",
                "EndTimecodeSMPTE": "00:09:23:06",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 405,
                    "Confidence": 99.7040023803711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 563280,
                "EndTimestampMillis": 569400,
                "DurationMillis": 6120,
                "StartTimecodeSMPTE": "00:09:23:07",
                "EndTimecodeSMPTE": "00:09:29:10",
                "DurationSMPTE": "00:00:06:03",
                "ShotSegment": {
                    "Index": 406,
                    "Confidence": 99.7040023803711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 569440,
                "EndTimestampMillis": 571480,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:09:29:11",
                "EndTimecodeSMPTE": "00:09:31:12",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 407,
                    "Confidence": 99.96674346923828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 571520,
                "EndTimestampMillis": 574160,
                "DurationMillis": 2640,
                "StartTimecodeSMPTE": "00:09:31:13",
                "EndTimecodeSMPTE": "00:09:34:04",
                "DurationSMPTE": "00:00:02:16",
                "ShotSegment": {
                    "Index": 408,
                    "Confidence": 99.93738555908203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 574200,
                "EndTimestampMillis": 574720,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:09:34:05",
                "EndTimecodeSMPTE": "00:09:34:18",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 409,
                    "Confidence": 98.97956848144531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 574760,
                "EndTimestampMillis": 575600,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:09:34:19",
                "EndTimecodeSMPTE": "00:09:35:15",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 410,
                    "Confidence": 98.97956848144531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 575640,
                "EndTimestampMillis": 576240,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:09:35:16",
                "EndTimecodeSMPTE": "00:09:36:06",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 411,
                    "Confidence": 99.84587097167969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 576280,
                "EndTimestampMillis": 578080,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:09:36:07",
                "EndTimecodeSMPTE": "00:09:38:02",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 412,
                    "Confidence": 99.67384338378906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 578120,
                "EndTimestampMillis": 580000,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:09:38:03",
                "EndTimecodeSMPTE": "00:09:40:00",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 413,
                    "Confidence": 99.67384338378906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 580040,
                "EndTimestampMillis": 583680,
                "DurationMillis": 3640,
                "StartTimecodeSMPTE": "00:09:40:01",
                "EndTimecodeSMPTE": "00:09:43:17",
                "DurationSMPTE": "00:00:03:16",
                "ShotSegment": {
                    "Index": 414,
                    "Confidence": 99.76309204101562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 583720,
                "EndTimestampMillis": 587080,
                "DurationMillis": 3360,
                "StartTimecodeSMPTE": "00:09:43:18",
                "EndTimecodeSMPTE": "00:09:47:02",
                "DurationSMPTE": "00:00:03:09",
                "ShotSegment": {
                    "Index": 415,
                    "Confidence": 99.85697174072266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 587120,
                "EndTimestampMillis": 588920,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:09:47:03",
                "EndTimecodeSMPTE": "00:09:48:23",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 416,
                    "Confidence": 99.85697174072266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 588960,
                "EndTimestampMillis": 591120,
                "DurationMillis": 2160,
                "StartTimecodeSMPTE": "00:09:48:24",
                "EndTimecodeSMPTE": "00:09:51:03",
                "DurationSMPTE": "00:00:02:04",
                "ShotSegment": {
                    "Index": 417,
                    "Confidence": 99.87862396240234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 591160,
                "EndTimestampMillis": 592440,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:09:51:04",
                "EndTimecodeSMPTE": "00:09:52:11",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 418,
                    "Confidence": 99.725830078125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 592480,
                "EndTimestampMillis": 594200,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:09:52:12",
                "EndTimecodeSMPTE": "00:09:54:05",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 419,
                    "Confidence": 99.725830078125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 594240,
                "EndTimestampMillis": 595840,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:09:54:06",
                "EndTimecodeSMPTE": "00:09:55:21",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 420,
                    "Confidence": 99.94061279296875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 595880,
                "EndTimestampMillis": 597640,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:09:55:22",
                "EndTimecodeSMPTE": "00:09:57:16",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 421,
                    "Confidence": 99.64266204833984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 597680,
                "EndTimestampMillis": 600120,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:09:57:17",
                "EndTimecodeSMPTE": "00:10:00:03",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 422,
                    "Confidence": 99.64266204833984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 600160,
                "EndTimestampMillis": 601640,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:10:00:04",
                "EndTimecodeSMPTE": "00:10:01:16",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 423,
                    "Confidence": 99.97161865234375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 601680,
                "EndTimestampMillis": 603160,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:10:01:17",
                "EndTimecodeSMPTE": "00:10:03:04",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 424,
                    "Confidence": 99.90945434570312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 603200,
                "EndTimestampMillis": 604160,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:10:03:05",
                "EndTimecodeSMPTE": "00:10:04:04",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 425,
                    "Confidence": 99.44462585449219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 604200,
                "EndTimestampMillis": 605920,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:10:04:05",
                "EndTimecodeSMPTE": "00:10:05:23",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 426,
                    "Confidence": 99.44462585449219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 605960,
                "EndTimestampMillis": 607240,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:10:05:24",
                "EndTimecodeSMPTE": "00:10:07:06",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 427,
                    "Confidence": 98.00555419921875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 607280,
                "EndTimestampMillis": 609080,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:10:07:07",
                "EndTimecodeSMPTE": "00:10:09:02",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 428,
                    "Confidence": 98.00555419921875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 609120,
                "EndTimestampMillis": 610680,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:10:09:03",
                "EndTimecodeSMPTE": "00:10:10:17",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 429,
                    "Confidence": 99.78060150146484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 610720,
                "EndTimestampMillis": 612320,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:10:10:18",
                "EndTimecodeSMPTE": "00:10:12:08",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 430,
                    "Confidence": 99.78060150146484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 612360,
                "EndTimestampMillis": 614680,
                "DurationMillis": 2320,
                "StartTimecodeSMPTE": "00:10:12:09",
                "EndTimecodeSMPTE": "00:10:14:17",
                "DurationSMPTE": "00:00:02:08",
                "ShotSegment": {
                    "Index": 431,
                    "Confidence": 99.84193420410156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 614720,
                "EndTimestampMillis": 617320,
                "DurationMillis": 2600,
                "StartTimecodeSMPTE": "00:10:14:18",
                "EndTimecodeSMPTE": "00:10:17:08",
                "DurationSMPTE": "00:00:02:15",
                "ShotSegment": {
                    "Index": 432,
                    "Confidence": 99.84193420410156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 617360,
                "EndTimestampMillis": 620240,
                "DurationMillis": 2880,
                "StartTimecodeSMPTE": "00:10:17:09",
                "EndTimecodeSMPTE": "00:10:20:06",
                "DurationSMPTE": "00:00:02:22",
                "ShotSegment": {
                    "Index": 433,
                    "Confidence": 99.86510467529297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 620280,
                "EndTimestampMillis": 623160,
                "DurationMillis": 2880,
                "StartTimecodeSMPTE": "00:10:20:07",
                "EndTimecodeSMPTE": "00:10:23:04",
                "DurationSMPTE": "00:00:02:22",
                "ShotSegment": {
                    "Index": 434,
                    "Confidence": 84.2728042602539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 623200,
                "EndTimestampMillis": 624720,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:10:23:05",
                "EndTimecodeSMPTE": "00:10:24:18",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 435,
                    "Confidence": 84.2728042602539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 624760,
                "EndTimestampMillis": 628720,
                "DurationMillis": 3960,
                "StartTimecodeSMPTE": "00:10:24:19",
                "EndTimecodeSMPTE": "00:10:28:18",
                "DurationSMPTE": "00:00:03:24",
                "ShotSegment": {
                    "Index": 436,
                    "Confidence": 99.7903823852539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 628760,
                "EndTimestampMillis": 629880,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:10:28:19",
                "EndTimecodeSMPTE": "00:10:29:22",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 437,
                    "Confidence": 99.7903823852539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 629920,
                "EndTimestampMillis": 630760,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:10:29:23",
                "EndTimecodeSMPTE": "00:10:30:19",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 438,
                    "Confidence": 99.91122436523438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 630800,
                "EndTimestampMillis": 633680,
                "DurationMillis": 2880,
                "StartTimecodeSMPTE": "00:10:30:20",
                "EndTimecodeSMPTE": "00:10:33:17",
                "DurationSMPTE": "00:00:02:22",
                "ShotSegment": {
                    "Index": 439,
                    "Confidence": 95.77590942382812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 633720,
                "EndTimestampMillis": 635160,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:10:33:18",
                "EndTimecodeSMPTE": "00:10:35:04",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 440,
                    "Confidence": 52.922115325927734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 635200,
                "EndTimestampMillis": 635840,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:10:35:05",
                "EndTimecodeSMPTE": "00:10:35:21",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 441,
                    "Confidence": 52.922115325927734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 635880,
                "EndTimestampMillis": 636480,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:10:35:22",
                "EndTimecodeSMPTE": "00:10:36:12",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 442,
                    "Confidence": 99.0446548461914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 636520,
                "EndTimestampMillis": 637840,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:10:36:13",
                "EndTimecodeSMPTE": "00:10:37:21",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 443,
                    "Confidence": 99.58795928955078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 637880,
                "EndTimestampMillis": 639720,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:10:37:22",
                "EndTimecodeSMPTE": "00:10:39:18",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 444,
                    "Confidence": 99.64434814453125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 639760,
                "EndTimestampMillis": 640480,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:10:39:19",
                "EndTimecodeSMPTE": "00:10:40:12",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 445,
                    "Confidence": 88.47941589355469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 640520,
                "EndTimestampMillis": 641720,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:10:40:13",
                "EndTimecodeSMPTE": "00:10:41:18",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 446,
                    "Confidence": 88.47941589355469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 641760,
                "EndTimestampMillis": 642600,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:10:41:19",
                "EndTimecodeSMPTE": "00:10:42:15",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 447,
                    "Confidence": 92.44657897949219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 642640,
                "EndTimestampMillis": 645400,
                "DurationMillis": 2760,
                "StartTimecodeSMPTE": "00:10:42:16",
                "EndTimecodeSMPTE": "00:10:45:10",
                "DurationSMPTE": "00:00:02:19",
                "ShotSegment": {
                    "Index": 448,
                    "Confidence": 99.66802978515625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 645440,
                "EndTimestampMillis": 646280,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:10:45:11",
                "EndTimecodeSMPTE": "00:10:46:07",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 449,
                    "Confidence": 66.96233367919922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 646320,
                "EndTimestampMillis": 647720,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:10:46:08",
                "EndTimecodeSMPTE": "00:10:47:18",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 450,
                    "Confidence": 66.96233367919922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 647760,
                "EndTimestampMillis": 649440,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:10:47:19",
                "EndTimecodeSMPTE": "00:10:49:11",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 451,
                    "Confidence": 99.83949279785156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 649480,
                "EndTimestampMillis": 650920,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:10:49:12",
                "EndTimecodeSMPTE": "00:10:50:23",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 452,
                    "Confidence": 99.83949279785156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 650960,
                "EndTimestampMillis": 656560,
                "DurationMillis": 5600,
                "StartTimecodeSMPTE": "00:10:50:24",
                "EndTimecodeSMPTE": "00:10:56:14",
                "DurationSMPTE": "00:00:05:15",
                "ShotSegment": {
                    "Index": 453,
                    "Confidence": 99.903076171875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 656600,
                "EndTimestampMillis": 658960,
                "DurationMillis": 2360,
                "StartTimecodeSMPTE": "00:10:56:15",
                "EndTimecodeSMPTE": "00:10:58:24",
                "DurationSMPTE": "00:00:02:09",
                "ShotSegment": {
                    "Index": 454,
                    "Confidence": 99.80364227294922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 659000,
                "EndTimestampMillis": 660360,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:10:59:00",
                "EndTimecodeSMPTE": "00:11:00:09",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 455,
                    "Confidence": 99.80364227294922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 660400,
                "EndTimestampMillis": 662400,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:11:00:10",
                "EndTimecodeSMPTE": "00:11:02:10",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 456,
                    "Confidence": 99.83872985839844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 662440,
                "EndTimestampMillis": 665120,
                "DurationMillis": 2680,
                "StartTimecodeSMPTE": "00:11:02:11",
                "EndTimecodeSMPTE": "00:11:05:03",
                "DurationSMPTE": "00:00:02:17",
                "ShotSegment": {
                    "Index": 457,
                    "Confidence": 99.83872985839844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 665160,
                "EndTimestampMillis": 667640,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:11:05:04",
                "EndTimecodeSMPTE": "00:11:07:16",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 458,
                    "Confidence": 99.60189819335938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 667680,
                "EndTimestampMillis": 672480,
                "DurationMillis": 4800,
                "StartTimecodeSMPTE": "00:11:07:17",
                "EndTimecodeSMPTE": "00:11:12:12",
                "DurationSMPTE": "00:00:04:20",
                "ShotSegment": {
                    "Index": 459,
                    "Confidence": 99.60189819335938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 672520,
                "EndTimestampMillis": 674040,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:11:12:13",
                "EndTimecodeSMPTE": "00:11:14:01",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 460,
                    "Confidence": 99.8427734375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 674080,
                "EndTimestampMillis": 677520,
                "DurationMillis": 3440,
                "StartTimecodeSMPTE": "00:11:14:02",
                "EndTimecodeSMPTE": "00:11:17:13",
                "DurationSMPTE": "00:00:03:11",
                "ShotSegment": {
                    "Index": 461,
                    "Confidence": 99.93648529052734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 677560,
                "EndTimestampMillis": 678560,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:11:17:14",
                "EndTimecodeSMPTE": "00:11:18:14",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 462,
                    "Confidence": 99.88667297363281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 678600,
                "EndTimestampMillis": 679800,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:11:18:15",
                "EndTimecodeSMPTE": "00:11:19:20",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 463,
                    "Confidence": 99.8808822631836
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 679840,
                "EndTimestampMillis": 680840,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:11:19:21",
                "EndTimecodeSMPTE": "00:11:20:21",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 464,
                    "Confidence": 99.3002700805664
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 680880,
                "EndTimestampMillis": 682560,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:11:20:22",
                "EndTimecodeSMPTE": "00:11:22:14",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 465,
                    "Confidence": 99.3002700805664
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 682600,
                "EndTimestampMillis": 684200,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:11:22:15",
                "EndTimecodeSMPTE": "00:11:24:05",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 466,
                    "Confidence": 99.57015228271484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 684240,
                "EndTimestampMillis": 685400,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:11:24:06",
                "EndTimecodeSMPTE": "00:11:25:10",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 467,
                    "Confidence": 99.85893249511719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 685440,
                "EndTimestampMillis": 686560,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:11:25:11",
                "EndTimecodeSMPTE": "00:11:26:14",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 468,
                    "Confidence": 99.85893249511719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 686600,
                "EndTimestampMillis": 688280,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:11:26:15",
                "EndTimecodeSMPTE": "00:11:28:07",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 469,
                    "Confidence": 99.70343017578125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 688320,
                "EndTimestampMillis": 689960,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:11:28:08",
                "EndTimecodeSMPTE": "00:11:29:24",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 470,
                    "Confidence": 99.70343017578125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 690000,
                "EndTimestampMillis": 691360,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:11:30:00",
                "EndTimecodeSMPTE": "00:11:31:09",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 471,
                    "Confidence": 99.86785125732422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 691400,
                "EndTimestampMillis": 693960,
                "DurationMillis": 2560,
                "StartTimecodeSMPTE": "00:11:31:10",
                "EndTimecodeSMPTE": "00:11:33:24",
                "DurationSMPTE": "00:00:02:14",
                "ShotSegment": {
                    "Index": 472,
                    "Confidence": 99.86785125732422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 694000,
                "EndTimestampMillis": 695360,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:11:34:00",
                "EndTimecodeSMPTE": "00:11:35:09",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 473,
                    "Confidence": 99.91433715820312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 695400,
                "EndTimestampMillis": 696760,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:11:35:10",
                "EndTimecodeSMPTE": "00:11:36:19",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 474,
                    "Confidence": 99.85948181152344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 696800,
                "EndTimestampMillis": 698560,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:11:36:20",
                "EndTimecodeSMPTE": "00:11:38:14",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 475,
                    "Confidence": 99.85948181152344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 698600,
                "EndTimestampMillis": 700400,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:11:38:15",
                "EndTimecodeSMPTE": "00:11:40:10",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 476,
                    "Confidence": 99.92051696777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 700440,
                "EndTimestampMillis": 703760,
                "DurationMillis": 3320,
                "StartTimecodeSMPTE": "00:11:40:11",
                "EndTimecodeSMPTE": "00:11:43:19",
                "DurationSMPTE": "00:00:03:08",
                "ShotSegment": {
                    "Index": 477,
                    "Confidence": 99.92051696777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 703800,
                "EndTimestampMillis": 707040,
                "DurationMillis": 3240,
                "StartTimecodeSMPTE": "00:11:43:20",
                "EndTimecodeSMPTE": "00:11:47:01",
                "DurationSMPTE": "00:00:03:06",
                "ShotSegment": {
                    "Index": 478,
                    "Confidence": 87.36846923828125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 707080,
                "EndTimestampMillis": 708760,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:11:47:02",
                "EndTimecodeSMPTE": "00:11:48:19",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 479,
                    "Confidence": 87.36846923828125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 708800,
                "EndTimestampMillis": 709520,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:11:48:20",
                "EndTimecodeSMPTE": "00:11:49:13",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 480,
                    "Confidence": 99.45304107666016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 709560,
                "EndTimestampMillis": 714160,
                "DurationMillis": 4600,
                "StartTimecodeSMPTE": "00:11:49:14",
                "EndTimecodeSMPTE": "00:11:54:04",
                "DurationSMPTE": "00:00:04:15",
                "ShotSegment": {
                    "Index": 481,
                    "Confidence": 99.45304107666016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 714200,
                "EndTimestampMillis": 715320,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:11:54:05",
                "EndTimecodeSMPTE": "00:11:55:08",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 482,
                    "Confidence": 99.96239471435547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 715360,
                "EndTimestampMillis": 717520,
                "DurationMillis": 2160,
                "StartTimecodeSMPTE": "00:11:55:09",
                "EndTimecodeSMPTE": "00:11:57:13",
                "DurationSMPTE": "00:00:02:04",
                "ShotSegment": {
                    "Index": 483,
                    "Confidence": 99.9275131225586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 717560,
                "EndTimestampMillis": 718520,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:11:57:14",
                "EndTimecodeSMPTE": "00:11:58:13",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 484,
                    "Confidence": 56.265968322753906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 718560,
                "EndTimestampMillis": 719000,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:11:58:14",
                "EndTimecodeSMPTE": "00:11:59:00",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 485,
                    "Confidence": 56.265968322753906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 719040,
                "EndTimestampMillis": 720600,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:11:59:01",
                "EndTimecodeSMPTE": "00:12:00:15",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 486,
                    "Confidence": 93.27432250976562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 720640,
                "EndTimestampMillis": 721280,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:12:00:16",
                "EndTimecodeSMPTE": "00:12:01:07",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 487,
                    "Confidence": 99.47608947753906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 721320,
                "EndTimestampMillis": 722680,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:12:01:08",
                "EndTimecodeSMPTE": "00:12:02:17",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 488,
                    "Confidence": 99.91743469238281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 722720,
                "EndTimestampMillis": 724600,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:12:02:18",
                "EndTimecodeSMPTE": "00:12:04:15",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 489,
                    "Confidence": 99.82108306884766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 724640,
                "EndTimestampMillis": 730600,
                "DurationMillis": 5960,
                "StartTimecodeSMPTE": "00:12:04:16",
                "EndTimecodeSMPTE": "00:12:10:15",
                "DurationSMPTE": "00:00:05:24",
                "ShotSegment": {
                    "Index": 490,
                    "Confidence": 99.50861358642578
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 730640,
                "EndTimestampMillis": 731520,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:12:10:16",
                "EndTimecodeSMPTE": "00:12:11:13",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 491,
                    "Confidence": 99.50861358642578
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 731560,
                "EndTimestampMillis": 732200,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:12:11:14",
                "EndTimecodeSMPTE": "00:12:12:05",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 492,
                    "Confidence": 99.57197570800781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 732240,
                "EndTimestampMillis": 732800,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:12:12:06",
                "EndTimecodeSMPTE": "00:12:12:20",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 493,
                    "Confidence": 85.15192413330078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 732840,
                "EndTimestampMillis": 733560,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:12:12:21",
                "EndTimecodeSMPTE": "00:12:13:14",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 494,
                    "Confidence": 85.15192413330078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 733600,
                "EndTimestampMillis": 734480,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:12:13:15",
                "EndTimecodeSMPTE": "00:12:14:12",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 495,
                    "Confidence": 99.86353302001953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 734520,
                "EndTimestampMillis": 735440,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:12:14:13",
                "EndTimecodeSMPTE": "00:12:15:11",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 496,
                    "Confidence": 99.86353302001953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 735480,
                "EndTimestampMillis": 737880,
                "DurationMillis": 2400,
                "StartTimecodeSMPTE": "00:12:15:12",
                "EndTimecodeSMPTE": "00:12:17:22",
                "DurationSMPTE": "00:00:02:10",
                "ShotSegment": {
                    "Index": 497,
                    "Confidence": 99.95085144042969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 737920,
                "EndTimestampMillis": 740360,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:12:17:23",
                "EndTimecodeSMPTE": "00:12:20:09",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 498,
                    "Confidence": 99.6771469116211
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 740400,
                "EndTimestampMillis": 742360,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:12:20:10",
                "EndTimecodeSMPTE": "00:12:22:09",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 499,
                    "Confidence": 99.6771469116211
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 742400,
                "EndTimestampMillis": 745120,
                "DurationMillis": 2720,
                "StartTimecodeSMPTE": "00:12:22:10",
                "EndTimecodeSMPTE": "00:12:25:03",
                "DurationSMPTE": "00:00:02:18",
                "ShotSegment": {
                    "Index": 500,
                    "Confidence": 99.87600708007812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 745160,
                "EndTimestampMillis": 746080,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:12:25:04",
                "EndTimecodeSMPTE": "00:12:26:02",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 501,
                    "Confidence": 99.8165054321289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 746120,
                "EndTimestampMillis": 748000,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:12:26:03",
                "EndTimecodeSMPTE": "00:12:28:00",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 502,
                    "Confidence": 98.4526138305664
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 748040,
                "EndTimestampMillis": 749000,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:12:28:01",
                "EndTimecodeSMPTE": "00:12:29:00",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 503,
                    "Confidence": 98.4526138305664
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 749040,
                "EndTimestampMillis": 750560,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:12:29:01",
                "EndTimecodeSMPTE": "00:12:30:14",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 504,
                    "Confidence": 99.88660430908203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 750600,
                "EndTimestampMillis": 752880,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:12:30:15",
                "EndTimecodeSMPTE": "00:12:32:22",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 505,
                    "Confidence": 99.95419311523438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 752920,
                "EndTimestampMillis": 754000,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:12:32:23",
                "EndTimecodeSMPTE": "00:12:34:00",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 506,
                    "Confidence": 99.94841766357422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 754040,
                "EndTimestampMillis": 755200,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:12:34:01",
                "EndTimecodeSMPTE": "00:12:35:05",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 507,
                    "Confidence": 99.88832092285156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 755240,
                "EndTimestampMillis": 757320,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:12:35:06",
                "EndTimecodeSMPTE": "00:12:37:08",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 508,
                    "Confidence": 99.88832092285156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 757360,
                "EndTimestampMillis": 759200,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:12:37:09",
                "EndTimecodeSMPTE": "00:12:39:05",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 509,
                    "Confidence": 99.84735870361328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 759240,
                "EndTimestampMillis": 762320,
                "DurationMillis": 3080,
                "StartTimecodeSMPTE": "00:12:39:06",
                "EndTimecodeSMPTE": "00:12:42:08",
                "DurationSMPTE": "00:00:03:02",
                "ShotSegment": {
                    "Index": 510,
                    "Confidence": 99.84735870361328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 762360,
                "EndTimestampMillis": 763360,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:12:42:09",
                "EndTimecodeSMPTE": "00:12:43:09",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 511,
                    "Confidence": 99.93901062011719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 763400,
                "EndTimestampMillis": 764440,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:12:43:10",
                "EndTimecodeSMPTE": "00:12:44:11",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 512,
                    "Confidence": 99.89884948730469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 764480,
                "EndTimestampMillis": 766520,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:12:44:12",
                "EndTimecodeSMPTE": "00:12:46:13",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 513,
                    "Confidence": 99.77404022216797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 766560,
                "EndTimestampMillis": 768240,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:12:46:14",
                "EndTimecodeSMPTE": "00:12:48:06",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 514,
                    "Confidence": 99.11824798583984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 768280,
                "EndTimestampMillis": 769880,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:12:48:07",
                "EndTimecodeSMPTE": "00:12:49:22",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 515,
                    "Confidence": 99.11824798583984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 769920,
                "EndTimestampMillis": 771360,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:12:49:23",
                "EndTimecodeSMPTE": "00:12:51:09",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 516,
                    "Confidence": 99.79907989501953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 771400,
                "EndTimestampMillis": 772360,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:12:51:10",
                "EndTimecodeSMPTE": "00:12:52:09",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 517,
                    "Confidence": 99.75810241699219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 772400,
                "EndTimestampMillis": 773680,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:12:52:10",
                "EndTimecodeSMPTE": "00:12:53:17",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 518,
                    "Confidence": 99.75810241699219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 773720,
                "EndTimestampMillis": 776760,
                "DurationMillis": 3040,
                "StartTimecodeSMPTE": "00:12:53:18",
                "EndTimecodeSMPTE": "00:12:56:19",
                "DurationSMPTE": "00:00:03:01",
                "ShotSegment": {
                    "Index": 519,
                    "Confidence": 99.8280029296875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 776800,
                "EndTimestampMillis": 777760,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:12:56:20",
                "EndTimecodeSMPTE": "00:12:57:19",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 520,
                    "Confidence": 61.47648620605469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 777800,
                "EndTimestampMillis": 779400,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:12:57:20",
                "EndTimecodeSMPTE": "00:12:59:10",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 521,
                    "Confidence": 61.47648620605469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 779440,
                "EndTimestampMillis": 781320,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:12:59:11",
                "EndTimecodeSMPTE": "00:13:01:08",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 522,
                    "Confidence": 79.50609588623047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 781360,
                "EndTimestampMillis": 782880,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:13:01:09",
                "EndTimecodeSMPTE": "00:13:02:22",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 523,
                    "Confidence": 79.50609588623047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 782920,
                "EndTimestampMillis": 783800,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:13:02:23",
                "EndTimecodeSMPTE": "00:13:03:20",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 524,
                    "Confidence": 99.18084716796875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 783840,
                "EndTimestampMillis": 784960,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:13:03:21",
                "EndTimecodeSMPTE": "00:13:04:24",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 525,
                    "Confidence": 98.9761734008789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 785000,
                "EndTimestampMillis": 785920,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:13:05:00",
                "EndTimecodeSMPTE": "00:13:05:23",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 526,
                    "Confidence": 98.9761734008789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 785960,
                "EndTimestampMillis": 787080,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:13:05:24",
                "EndTimecodeSMPTE": "00:13:07:02",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 527,
                    "Confidence": 99.42868041992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 787120,
                "EndTimestampMillis": 787840,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:13:07:03",
                "EndTimecodeSMPTE": "00:13:07:21",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 528,
                    "Confidence": 53.40949630737305
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 787880,
                "EndTimestampMillis": 788480,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:13:07:22",
                "EndTimecodeSMPTE": "00:13:08:12",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 529,
                    "Confidence": 53.40949630737305
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 788520,
                "EndTimestampMillis": 789040,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:13:08:13",
                "EndTimecodeSMPTE": "00:13:09:01",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 530,
                    "Confidence": 94.21417236328125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 789080,
                "EndTimestampMillis": 789800,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:13:09:02",
                "EndTimecodeSMPTE": "00:13:09:20",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 531,
                    "Confidence": 94.21417236328125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 789840,
                "EndTimestampMillis": 790720,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:13:09:21",
                "EndTimecodeSMPTE": "00:13:10:18",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 532,
                    "Confidence": 98.02001953125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 790760,
                "EndTimestampMillis": 791600,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:13:10:19",
                "EndTimecodeSMPTE": "00:13:11:15",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 533,
                    "Confidence": 99.83952331542969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 791640,
                "EndTimestampMillis": 792520,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:13:11:16",
                "EndTimecodeSMPTE": "00:13:12:13",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 534,
                    "Confidence": 99.77426147460938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 792560,
                "EndTimestampMillis": 793120,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:13:12:14",
                "EndTimecodeSMPTE": "00:13:13:03",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 535,
                    "Confidence": 87.6838150024414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 793160,
                "EndTimestampMillis": 793760,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:13:13:04",
                "EndTimecodeSMPTE": "00:13:13:19",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 536,
                    "Confidence": 87.6838150024414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 793800,
                "EndTimestampMillis": 795080,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:13:13:20",
                "EndTimecodeSMPTE": "00:13:15:02",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 537,
                    "Confidence": 98.98127746582031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 795120,
                "EndTimestampMillis": 797840,
                "DurationMillis": 2720,
                "StartTimecodeSMPTE": "00:13:15:03",
                "EndTimecodeSMPTE": "00:13:17:21",
                "DurationSMPTE": "00:00:02:18",
                "ShotSegment": {
                    "Index": 538,
                    "Confidence": 99.53645324707031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 797880,
                "EndTimestampMillis": 799400,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:13:17:22",
                "EndTimecodeSMPTE": "00:13:19:10",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 539,
                    "Confidence": 99.53645324707031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 799440,
                "EndTimestampMillis": 801000,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:13:19:11",
                "EndTimecodeSMPTE": "00:13:21:00",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 540,
                    "Confidence": 99.47135162353516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 801040,
                "EndTimestampMillis": 805080,
                "DurationMillis": 4040,
                "StartTimecodeSMPTE": "00:13:21:01",
                "EndTimecodeSMPTE": "00:13:25:02",
                "DurationSMPTE": "00:00:04:01",
                "ShotSegment": {
                    "Index": 541,
                    "Confidence": 99.47135162353516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 805120,
                "EndTimestampMillis": 806280,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:13:25:03",
                "EndTimecodeSMPTE": "00:13:26:07",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 542,
                    "Confidence": 99.92652893066406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 806320,
                "EndTimestampMillis": 808720,
                "DurationMillis": 2400,
                "StartTimecodeSMPTE": "00:13:26:08",
                "EndTimecodeSMPTE": "00:13:28:18",
                "DurationSMPTE": "00:00:02:10",
                "ShotSegment": {
                    "Index": 543,
                    "Confidence": 98.02729797363281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 808760,
                "EndTimestampMillis": 811880,
                "DurationMillis": 3120,
                "StartTimecodeSMPTE": "00:13:28:19",
                "EndTimecodeSMPTE": "00:13:31:22",
                "DurationSMPTE": "00:00:03:03",
                "ShotSegment": {
                    "Index": 544,
                    "Confidence": 98.02729797363281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 811920,
                "EndTimestampMillis": 813280,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:13:31:23",
                "EndTimecodeSMPTE": "00:13:33:07",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 545,
                    "Confidence": 99.96319580078125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 813320,
                "EndTimestampMillis": 816720,
                "DurationMillis": 3400,
                "StartTimecodeSMPTE": "00:13:33:08",
                "EndTimecodeSMPTE": "00:13:36:18",
                "DurationSMPTE": "00:00:03:10",
                "ShotSegment": {
                    "Index": 546,
                    "Confidence": 99.96952819824219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 816760,
                "EndTimestampMillis": 819520,
                "DurationMillis": 2760,
                "StartTimecodeSMPTE": "00:13:36:19",
                "EndTimecodeSMPTE": "00:13:39:13",
                "DurationSMPTE": "00:00:02:19",
                "ShotSegment": {
                    "Index": 547,
                    "Confidence": 99.96688079833984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 819560,
                "EndTimestampMillis": 821720,
                "DurationMillis": 2160,
                "StartTimecodeSMPTE": "00:13:39:14",
                "EndTimecodeSMPTE": "00:13:41:18",
                "DurationSMPTE": "00:00:02:04",
                "ShotSegment": {
                    "Index": 548,
                    "Confidence": 99.96688079833984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 821760,
                "EndTimestampMillis": 823160,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:13:41:19",
                "EndTimecodeSMPTE": "00:13:43:04",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 549,
                    "Confidence": 99.99333190917969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 823200,
                "EndTimestampMillis": 824440,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:13:43:05",
                "EndTimecodeSMPTE": "00:13:44:11",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 550,
                    "Confidence": 99.93637084960938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 824480,
                "EndTimestampMillis": 826840,
                "DurationMillis": 2360,
                "StartTimecodeSMPTE": "00:13:44:12",
                "EndTimecodeSMPTE": "00:13:46:21",
                "DurationSMPTE": "00:00:02:09",
                "ShotSegment": {
                    "Index": 551,
                    "Confidence": 99.93637084960938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 826880,
                "EndTimestampMillis": 828760,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:13:46:22",
                "EndTimecodeSMPTE": "00:13:48:19",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 552,
                    "Confidence": 99.9369888305664
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 828800,
                "EndTimestampMillis": 829720,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:13:48:20",
                "EndTimecodeSMPTE": "00:13:49:18",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 553,
                    "Confidence": 99.9369888305664
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 829760,
                "EndTimestampMillis": 831080,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:13:49:19",
                "EndTimecodeSMPTE": "00:13:51:02",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 554,
                    "Confidence": 99.94690704345703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 831120,
                "EndTimestampMillis": 832920,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:13:51:03",
                "EndTimecodeSMPTE": "00:13:52:23",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 555,
                    "Confidence": 99.76506805419922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 832960,
                "EndTimestampMillis": 835480,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:13:52:24",
                "EndTimecodeSMPTE": "00:13:55:12",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 556,
                    "Confidence": 99.76506805419922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 835520,
                "EndTimestampMillis": 838600,
                "DurationMillis": 3080,
                "StartTimecodeSMPTE": "00:13:55:13",
                "EndTimecodeSMPTE": "00:13:58:15",
                "DurationSMPTE": "00:00:03:02",
                "ShotSegment": {
                    "Index": 557,
                    "Confidence": 73.8033218383789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 838640,
                "EndTimestampMillis": 838720,
                "DurationMillis": 80,
                "StartTimecodeSMPTE": "00:13:58:16",
                "EndTimecodeSMPTE": "00:13:58:18",
                "DurationSMPTE": "00:00:00:02",
                "ShotSegment": {
                    "Index": 558,
                    "Confidence": 73.8033218383789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 838760,
                "EndTimestampMillis": 840200,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:13:58:19",
                "EndTimecodeSMPTE": "00:14:00:05",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 559,
                    "Confidence": 54.398929595947266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 840240,
                "EndTimestampMillis": 841120,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:14:00:06",
                "EndTimecodeSMPTE": "00:14:01:03",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 560,
                    "Confidence": 54.398929595947266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 841160,
                "EndTimestampMillis": 843440,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:14:01:04",
                "EndTimecodeSMPTE": "00:14:03:11",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 561,
                    "Confidence": 99.49752807617188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 843480,
                "EndTimestampMillis": 843840,
                "DurationMillis": 360,
                "StartTimecodeSMPTE": "00:14:03:12",
                "EndTimecodeSMPTE": "00:14:03:21",
                "DurationSMPTE": "00:00:00:09",
                "ShotSegment": {
                    "Index": 562,
                    "Confidence": 99.49752807617188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 843880,
                "EndTimestampMillis": 844800,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:14:03:22",
                "EndTimecodeSMPTE": "00:14:04:20",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 563,
                    "Confidence": 98.94143676757812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 844840,
                "EndTimestampMillis": 845440,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:14:04:21",
                "EndTimecodeSMPTE": "00:14:05:11",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 564,
                    "Confidence": 56.33346176147461
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 845480,
                "EndTimestampMillis": 846160,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:14:05:12",
                "EndTimecodeSMPTE": "00:14:06:04",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 565,
                    "Confidence": 56.33346176147461
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 846200,
                "EndTimestampMillis": 846720,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:14:06:05",
                "EndTimecodeSMPTE": "00:14:06:18",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 566,
                    "Confidence": 68.02658081054688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 846760,
                "EndTimestampMillis": 847480,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:14:06:19",
                "EndTimecodeSMPTE": "00:14:07:12",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 567,
                    "Confidence": 80.79650115966797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 847520,
                "EndTimestampMillis": 848480,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:14:07:13",
                "EndTimecodeSMPTE": "00:14:08:12",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 568,
                    "Confidence": 80.79650115966797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 848520,
                "EndTimestampMillis": 849560,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:14:08:13",
                "EndTimecodeSMPTE": "00:14:09:14",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 569,
                    "Confidence": 98.28519439697266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 849600,
                "EndTimestampMillis": 850800,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:14:09:15",
                "EndTimecodeSMPTE": "00:14:10:20",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 570,
                    "Confidence": 98.28519439697266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 850840,
                "EndTimestampMillis": 852080,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:14:10:21",
                "EndTimecodeSMPTE": "00:14:12:02",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 571,
                    "Confidence": 99.61764526367188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 852120,
                "EndTimestampMillis": 853400,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:14:12:03",
                "EndTimecodeSMPTE": "00:14:13:10",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 572,
                    "Confidence": 99.7403793334961
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 853440,
                "EndTimestampMillis": 854800,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:14:13:11",
                "EndTimecodeSMPTE": "00:14:14:20",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 573,
                    "Confidence": 99.7403793334961
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 854840,
                "EndTimestampMillis": 856520,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:14:14:21",
                "EndTimecodeSMPTE": "00:14:16:13",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 574,
                    "Confidence": 99.92749786376953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 856560,
                "EndTimestampMillis": 858440,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:14:16:14",
                "EndTimecodeSMPTE": "00:14:18:11",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 575,
                    "Confidence": 99.83299255371094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 858480,
                "EndTimestampMillis": 859280,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:14:18:12",
                "EndTimecodeSMPTE": "00:14:19:07",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 576,
                    "Confidence": 99.83299255371094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 859320,
                "EndTimestampMillis": 859960,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:14:19:08",
                "EndTimecodeSMPTE": "00:14:19:24",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 577,
                    "Confidence": 98.06784057617188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 860000,
                "EndTimestampMillis": 860680,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:14:20:00",
                "EndTimecodeSMPTE": "00:14:20:17",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 578,
                    "Confidence": 82.94135284423828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 860720,
                "EndTimestampMillis": 862240,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:14:20:18",
                "EndTimecodeSMPTE": "00:14:22:06",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 579,
                    "Confidence": 82.94135284423828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 862280,
                "EndTimestampMillis": 862840,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:14:22:07",
                "EndTimecodeSMPTE": "00:14:22:21",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 580,
                    "Confidence": 98.17508697509766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 862880,
                "EndTimestampMillis": 863560,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:14:22:22",
                "EndTimecodeSMPTE": "00:14:23:14",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 581,
                    "Confidence": 98.56523132324219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 863600,
                "EndTimestampMillis": 865640,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:14:23:15",
                "EndTimecodeSMPTE": "00:14:25:16",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 582,
                    "Confidence": 98.56523132324219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 865680,
                "EndTimestampMillis": 866440,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:14:25:17",
                "EndTimecodeSMPTE": "00:14:26:11",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 583,
                    "Confidence": 99.71651458740234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 866480,
                "EndTimestampMillis": 867480,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:14:26:12",
                "EndTimecodeSMPTE": "00:14:27:12",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 584,
                    "Confidence": 99.42738342285156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 867520,
                "EndTimestampMillis": 868000,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:14:27:13",
                "EndTimecodeSMPTE": "00:14:28:00",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 585,
                    "Confidence": 98.35767364501953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 868040,
                "EndTimestampMillis": 868840,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:14:28:01",
                "EndTimecodeSMPTE": "00:14:28:21",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 586,
                    "Confidence": 98.35767364501953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 868880,
                "EndTimestampMillis": 870080,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:14:28:22",
                "EndTimecodeSMPTE": "00:14:30:02",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 587,
                    "Confidence": 99.78911590576172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 870120,
                "EndTimestampMillis": 871480,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:14:30:03",
                "EndTimecodeSMPTE": "00:14:31:12",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 588,
                    "Confidence": 99.8853988647461
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 871520,
                "EndTimestampMillis": 872960,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:14:31:13",
                "EndTimecodeSMPTE": "00:14:32:24",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 589,
                    "Confidence": 99.83124542236328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 873000,
                "EndTimestampMillis": 873640,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:14:33:00",
                "EndTimecodeSMPTE": "00:14:33:16",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 590,
                    "Confidence": 97.39965057373047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 873680,
                "EndTimestampMillis": 876920,
                "DurationMillis": 3240,
                "StartTimecodeSMPTE": "00:14:33:17",
                "EndTimecodeSMPTE": "00:14:36:23",
                "DurationSMPTE": "00:00:03:06",
                "ShotSegment": {
                    "Index": 591,
                    "Confidence": 97.39965057373047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 876960,
                "EndTimestampMillis": 879880,
                "DurationMillis": 2920,
                "StartTimecodeSMPTE": "00:14:36:24",
                "EndTimecodeSMPTE": "00:14:39:22",
                "DurationSMPTE": "00:00:02:23",
                "ShotSegment": {
                    "Index": 592,
                    "Confidence": 99.70911407470703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 879920,
                "EndTimestampMillis": 886600,
                "DurationMillis": 6680,
                "StartTimecodeSMPTE": "00:14:39:23",
                "EndTimecodeSMPTE": "00:14:46:15",
                "DurationSMPTE": "00:00:06:17",
                "ShotSegment": {
                    "Index": 593,
                    "Confidence": 99.70911407470703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 886640,
                "EndTimestampMillis": 888560,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:14:46:16",
                "EndTimecodeSMPTE": "00:14:48:14",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 594,
                    "Confidence": 99.859375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 888600,
                "EndTimestampMillis": 891400,
                "DurationMillis": 2800,
                "StartTimecodeSMPTE": "00:14:48:15",
                "EndTimecodeSMPTE": "00:14:51:10",
                "DurationSMPTE": "00:00:02:20",
                "ShotSegment": {
                    "Index": 595,
                    "Confidence": 99.70249938964844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 891440,
                "EndTimestampMillis": 894640,
                "DurationMillis": 3200,
                "StartTimecodeSMPTE": "00:14:51:11",
                "EndTimecodeSMPTE": "00:14:54:16",
                "DurationSMPTE": "00:00:03:05",
                "ShotSegment": {
                    "Index": 596,
                    "Confidence": 99.70249938964844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 894680,
                "EndTimestampMillis": 896240,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:14:54:17",
                "EndTimecodeSMPTE": "00:14:56:06",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 597,
                    "Confidence": 99.91816711425781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 896280,
                "EndTimestampMillis": 897960,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:14:56:07",
                "EndTimecodeSMPTE": "00:14:57:24",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 598,
                    "Confidence": 99.9849853515625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 898000,
                "EndTimestampMillis": 899120,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:14:58:00",
                "EndTimecodeSMPTE": "00:14:59:03",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 599,
                    "Confidence": 99.58534240722656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 899160,
                "EndTimestampMillis": 899960,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:14:59:04",
                "EndTimecodeSMPTE": "00:14:59:24",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 600,
                    "Confidence": 99.57960510253906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 900000,
                "EndTimestampMillis": 901280,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:15:00:00",
                "EndTimecodeSMPTE": "00:15:01:07",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 601,
                    "Confidence": 99.57960510253906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 901320,
                "EndTimestampMillis": 903200,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:15:01:08",
                "EndTimecodeSMPTE": "00:15:03:05",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 602,
                    "Confidence": 99.30528259277344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 903240,
                "EndTimestampMillis": 904680,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:15:03:06",
                "EndTimecodeSMPTE": "00:15:04:17",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 603,
                    "Confidence": 91.41328430175781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 904720,
                "EndTimestampMillis": 906400,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:15:04:18",
                "EndTimecodeSMPTE": "00:15:06:10",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 604,
                    "Confidence": 91.41328430175781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 906440,
                "EndTimestampMillis": 907960,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:15:06:11",
                "EndTimecodeSMPTE": "00:15:07:24",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 605,
                    "Confidence": 99.65900421142578
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 908000,
                "EndTimestampMillis": 910960,
                "DurationMillis": 2960,
                "StartTimecodeSMPTE": "00:15:08:00",
                "EndTimecodeSMPTE": "00:15:10:24",
                "DurationSMPTE": "00:00:02:24",
                "ShotSegment": {
                    "Index": 606,
                    "Confidence": 99.75148010253906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 911000,
                "EndTimestampMillis": 912240,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:15:11:00",
                "EndTimecodeSMPTE": "00:15:12:06",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 607,
                    "Confidence": 99.64958190917969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 912280,
                "EndTimestampMillis": 914120,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:15:12:07",
                "EndTimecodeSMPTE": "00:15:14:03",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 608,
                    "Confidence": 99.39839935302734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 914160,
                "EndTimestampMillis": 915640,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:15:14:04",
                "EndTimecodeSMPTE": "00:15:15:16",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 609,
                    "Confidence": 99.39839935302734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 915680,
                "EndTimestampMillis": 917040,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:15:15:17",
                "EndTimecodeSMPTE": "00:15:17:01",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 610,
                    "Confidence": 99.7899398803711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 917080,
                "EndTimestampMillis": 918640,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:15:17:02",
                "EndTimecodeSMPTE": "00:15:18:16",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 611,
                    "Confidence": 99.7899398803711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 918680,
                "EndTimestampMillis": 920040,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:15:18:17",
                "EndTimecodeSMPTE": "00:15:20:01",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 612,
                    "Confidence": 69.82180786132812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 920080,
                "EndTimestampMillis": 920320,
                "DurationMillis": 240,
                "StartTimecodeSMPTE": "00:15:20:02",
                "EndTimecodeSMPTE": "00:15:20:08",
                "DurationSMPTE": "00:00:00:06",
                "ShotSegment": {
                    "Index": 613,
                    "Confidence": 69.82180786132812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 920360,
                "EndTimestampMillis": 922520,
                "DurationMillis": 2160,
                "StartTimecodeSMPTE": "00:15:20:09",
                "EndTimecodeSMPTE": "00:15:22:13",
                "DurationSMPTE": "00:00:02:04",
                "ShotSegment": {
                    "Index": 614,
                    "Confidence": 98.76355743408203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 922560,
                "EndTimestampMillis": 923760,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:15:22:14",
                "EndTimecodeSMPTE": "00:15:23:19",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 615,
                    "Confidence": 98.76355743408203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 923800,
                "EndTimestampMillis": 925080,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:15:23:20",
                "EndTimecodeSMPTE": "00:15:25:02",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 616,
                    "Confidence": 99.55962371826172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 925120,
                "EndTimestampMillis": 926000,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:15:25:03",
                "EndTimecodeSMPTE": "00:15:26:00",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 617,
                    "Confidence": 99.83781433105469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 926040,
                "EndTimestampMillis": 928520,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:15:26:01",
                "EndTimecodeSMPTE": "00:15:28:13",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 618,
                    "Confidence": 99.83781433105469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 928560,
                "EndTimestampMillis": 929840,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:15:28:14",
                "EndTimecodeSMPTE": "00:15:29:21",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 619,
                    "Confidence": 99.77598571777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 929880,
                "EndTimestampMillis": 931440,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:15:29:22",
                "EndTimecodeSMPTE": "00:15:31:11",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 620,
                    "Confidence": 99.77598571777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 931480,
                "EndTimestampMillis": 933600,
                "DurationMillis": 2120,
                "StartTimecodeSMPTE": "00:15:31:12",
                "EndTimecodeSMPTE": "00:15:33:15",
                "DurationSMPTE": "00:00:02:03",
                "ShotSegment": {
                    "Index": 621,
                    "Confidence": 99.88087463378906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 933640,
                "EndTimestampMillis": 937160,
                "DurationMillis": 3520,
                "StartTimecodeSMPTE": "00:15:33:16",
                "EndTimecodeSMPTE": "00:15:37:04",
                "DurationSMPTE": "00:00:03:13",
                "ShotSegment": {
                    "Index": 622,
                    "Confidence": 99.94518280029297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 937200,
                "EndTimestampMillis": 937680,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:15:37:05",
                "EndTimecodeSMPTE": "00:15:37:17",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 623,
                    "Confidence": 54.15781021118164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 937720,
                "EndTimestampMillis": 938320,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:15:37:18",
                "EndTimecodeSMPTE": "00:15:38:08",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 624,
                    "Confidence": 54.15781021118164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 938360,
                "EndTimestampMillis": 938920,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:15:38:09",
                "EndTimecodeSMPTE": "00:15:38:23",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 625,
                    "Confidence": 94.62135314941406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 938960,
                "EndTimestampMillis": 939560,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:15:38:24",
                "EndTimecodeSMPTE": "00:15:39:14",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 626,
                    "Confidence": 97.87651062011719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 939600,
                "EndTimestampMillis": 940120,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:15:39:15",
                "EndTimecodeSMPTE": "00:15:40:03",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 627,
                    "Confidence": 97.87651062011719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 940160,
                "EndTimestampMillis": 940800,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:15:40:04",
                "EndTimecodeSMPTE": "00:15:40:20",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 628,
                    "Confidence": 98.79193878173828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 940840,
                "EndTimestampMillis": 942240,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:15:40:21",
                "EndTimecodeSMPTE": "00:15:42:06",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 629,
                    "Confidence": 99.03653717041016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 942280,
                "EndTimestampMillis": 942880,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:15:42:07",
                "EndTimecodeSMPTE": "00:15:42:22",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 630,
                    "Confidence": 99.77607727050781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 942920,
                "EndTimestampMillis": 944000,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:15:42:23",
                "EndTimecodeSMPTE": "00:15:44:00",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 631,
                    "Confidence": 99.78182220458984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 944040,
                "EndTimestampMillis": 945400,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:15:44:01",
                "EndTimecodeSMPTE": "00:15:45:10",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 632,
                    "Confidence": 99.75765228271484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 945440,
                "EndTimestampMillis": 948040,
                "DurationMillis": 2600,
                "StartTimecodeSMPTE": "00:15:45:11",
                "EndTimecodeSMPTE": "00:15:48:01",
                "DurationSMPTE": "00:00:02:15",
                "ShotSegment": {
                    "Index": 633,
                    "Confidence": 99.73188781738281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 948080,
                "EndTimestampMillis": 948760,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:15:48:02",
                "EndTimecodeSMPTE": "00:15:48:19",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 634,
                    "Confidence": 99.73188781738281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 948800,
                "EndTimestampMillis": 951240,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:15:48:20",
                "EndTimecodeSMPTE": "00:15:51:06",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 635,
                    "Confidence": 99.92459869384766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 951280,
                "EndTimestampMillis": 953080,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:15:51:07",
                "EndTimecodeSMPTE": "00:15:53:02",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 636,
                    "Confidence": 99.96715545654297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 953120,
                "EndTimestampMillis": 957400,
                "DurationMillis": 4280,
                "StartTimecodeSMPTE": "00:15:53:03",
                "EndTimecodeSMPTE": "00:15:57:10",
                "DurationSMPTE": "00:00:04:07",
                "ShotSegment": {
                    "Index": 637,
                    "Confidence": 99.96715545654297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 957440,
                "EndTimestampMillis": 959760,
                "DurationMillis": 2320,
                "StartTimecodeSMPTE": "00:15:57:11",
                "EndTimecodeSMPTE": "00:15:59:19",
                "DurationSMPTE": "00:00:02:08",
                "ShotSegment": {
                    "Index": 638,
                    "Confidence": 99.98090362548828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 959800,
                "EndTimestampMillis": 962320,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:15:59:20",
                "EndTimecodeSMPTE": "00:16:02:08",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 639,
                    "Confidence": 99.9901351928711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 962360,
                "EndTimestampMillis": 963720,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:16:02:09",
                "EndTimecodeSMPTE": "00:16:03:18",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 640,
                    "Confidence": 99.9901351928711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 963760,
                "EndTimestampMillis": 965160,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:16:03:19",
                "EndTimecodeSMPTE": "00:16:05:04",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 641,
                    "Confidence": 99.88871765136719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 965200,
                "EndTimestampMillis": 965840,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:16:05:05",
                "EndTimecodeSMPTE": "00:16:05:21",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 642,
                    "Confidence": 54.54435729980469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 965880,
                "EndTimestampMillis": 967200,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:16:05:22",
                "EndTimecodeSMPTE": "00:16:07:05",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 643,
                    "Confidence": 54.54435729980469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 967240,
                "EndTimestampMillis": 968440,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:16:07:06",
                "EndTimecodeSMPTE": "00:16:08:11",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 644,
                    "Confidence": 68.10254669189453
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 968480,
                "EndTimestampMillis": 970120,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:16:08:12",
                "EndTimecodeSMPTE": "00:16:10:03",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 645,
                    "Confidence": 99.7700424194336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 970160,
                "EndTimestampMillis": 971640,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:16:10:04",
                "EndTimecodeSMPTE": "00:16:11:16",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 646,
                    "Confidence": 99.92485809326172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 971680,
                "EndTimestampMillis": 972680,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:16:11:17",
                "EndTimecodeSMPTE": "00:16:12:17",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 647,
                    "Confidence": 99.86083221435547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 972720,
                "EndTimestampMillis": 973840,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:16:12:18",
                "EndTimecodeSMPTE": "00:16:13:21",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 648,
                    "Confidence": 99.86083221435547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 973880,
                "EndTimestampMillis": 975040,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:16:13:22",
                "EndTimecodeSMPTE": "00:16:15:01",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 649,
                    "Confidence": 99.81470489501953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 975080,
                "EndTimestampMillis": 976480,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:16:15:02",
                "EndTimecodeSMPTE": "00:16:16:12",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 650,
                    "Confidence": 99.81470489501953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 976520,
                "EndTimestampMillis": 977920,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:16:16:13",
                "EndTimecodeSMPTE": "00:16:17:23",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 651,
                    "Confidence": 99.919921875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 977960,
                "EndTimestampMillis": 983080,
                "DurationMillis": 5120,
                "StartTimecodeSMPTE": "00:16:17:24",
                "EndTimecodeSMPTE": "00:16:23:02",
                "DurationSMPTE": "00:00:05:03",
                "ShotSegment": {
                    "Index": 652,
                    "Confidence": 99.9424819946289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 983120,
                "EndTimestampMillis": 997800,
                "DurationMillis": 14680,
                "StartTimecodeSMPTE": "00:16:23:03",
                "EndTimecodeSMPTE": "00:16:37:20",
                "DurationSMPTE": "00:00:14:17",
                "ShotSegment": {
                    "Index": 653,
                    "Confidence": 99.91824340820312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 997840,
                "EndTimestampMillis": 999040,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:16:37:21",
                "EndTimecodeSMPTE": "00:16:39:01",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 654,
                    "Confidence": 99.91824340820312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 999080,
                "EndTimestampMillis": 1001040,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:16:39:02",
                "EndTimecodeSMPTE": "00:16:41:01",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 655,
                    "Confidence": 99.70401000976562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1001080,
                "EndTimestampMillis": 1004080,
                "DurationMillis": 3000,
                "StartTimecodeSMPTE": "00:16:41:02",
                "EndTimecodeSMPTE": "00:16:44:02",
                "DurationSMPTE": "00:00:03:00",
                "ShotSegment": {
                    "Index": 656,
                    "Confidence": 99.70401000976562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1004120,
                "EndTimestampMillis": 1006000,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:16:44:03",
                "EndTimecodeSMPTE": "00:16:46:00",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 657,
                    "Confidence": 99.89505767822266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1006040,
                "EndTimestampMillis": 1008400,
                "DurationMillis": 2360,
                "StartTimecodeSMPTE": "00:16:46:01",
                "EndTimecodeSMPTE": "00:16:48:10",
                "DurationSMPTE": "00:00:02:09",
                "ShotSegment": {
                    "Index": 658,
                    "Confidence": 99.89505767822266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1008440,
                "EndTimestampMillis": 1009880,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:16:48:11",
                "EndTimecodeSMPTE": "00:16:49:22",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 659,
                    "Confidence": 99.82392883300781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1009920,
                "EndTimestampMillis": 1011520,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:16:49:23",
                "EndTimecodeSMPTE": "00:16:51:13",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 660,
                    "Confidence": 99.6412353515625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1011560,
                "EndTimestampMillis": 1012720,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:16:51:14",
                "EndTimecodeSMPTE": "00:16:52:18",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 661,
                    "Confidence": 99.6412353515625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1012760,
                "EndTimestampMillis": 1016480,
                "DurationMillis": 3720,
                "StartTimecodeSMPTE": "00:16:52:19",
                "EndTimecodeSMPTE": "00:16:56:12",
                "DurationSMPTE": "00:00:03:18",
                "ShotSegment": {
                    "Index": 662,
                    "Confidence": 99.89925384521484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1016520,
                "EndTimestampMillis": 1017320,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:16:56:13",
                "EndTimecodeSMPTE": "00:16:57:08",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 663,
                    "Confidence": 99.89925384521484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1017360,
                "EndTimestampMillis": 1021960,
                "DurationMillis": 4600,
                "StartTimecodeSMPTE": "00:16:57:09",
                "EndTimecodeSMPTE": "00:17:01:24",
                "DurationSMPTE": "00:00:04:15",
                "ShotSegment": {
                    "Index": 664,
                    "Confidence": 99.9827880859375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1022000,
                "EndTimestampMillis": 1025080,
                "DurationMillis": 3080,
                "StartTimecodeSMPTE": "00:17:02:00",
                "EndTimecodeSMPTE": "00:17:05:02",
                "DurationSMPTE": "00:00:03:02",
                "ShotSegment": {
                    "Index": 665,
                    "Confidence": 99.98575592041016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1025120,
                "EndTimestampMillis": 1026360,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:17:05:03",
                "EndTimecodeSMPTE": "00:17:06:09",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 666,
                    "Confidence": 99.91107940673828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1026400,
                "EndTimestampMillis": 1028200,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:17:06:10",
                "EndTimecodeSMPTE": "00:17:08:05",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 667,
                    "Confidence": 99.83068084716797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1028240,
                "EndTimestampMillis": 1034760,
                "DurationMillis": 6520,
                "StartTimecodeSMPTE": "00:17:08:06",
                "EndTimecodeSMPTE": "00:17:14:19",
                "DurationSMPTE": "00:00:06:13",
                "ShotSegment": {
                    "Index": 668,
                    "Confidence": 99.7300033569336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1034800,
                "EndTimestampMillis": 1035560,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:17:14:20",
                "EndTimecodeSMPTE": "00:17:15:14",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 669,
                    "Confidence": 99.7300033569336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1035600,
                "EndTimestampMillis": 1036360,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:17:15:15",
                "EndTimecodeSMPTE": "00:17:16:09",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 670,
                    "Confidence": 99.90340423583984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1036400,
                "EndTimestampMillis": 1037360,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:17:16:10",
                "EndTimecodeSMPTE": "00:17:17:09",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 671,
                    "Confidence": 99.84285736083984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1037400,
                "EndTimestampMillis": 1038520,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:17:17:10",
                "EndTimecodeSMPTE": "00:17:18:13",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 672,
                    "Confidence": 98.53544616699219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1038560,
                "EndTimestampMillis": 1040040,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:17:18:14",
                "EndTimecodeSMPTE": "00:17:20:01",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 673,
                    "Confidence": 98.53544616699219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1040080,
                "EndTimestampMillis": 1042240,
                "DurationMillis": 2160,
                "StartTimecodeSMPTE": "00:17:20:02",
                "EndTimecodeSMPTE": "00:17:22:06",
                "DurationSMPTE": "00:00:02:04",
                "ShotSegment": {
                    "Index": 674,
                    "Confidence": 99.67268371582031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1042280,
                "EndTimestampMillis": 1046760,
                "DurationMillis": 4480,
                "StartTimecodeSMPTE": "00:17:22:07",
                "EndTimecodeSMPTE": "00:17:26:19",
                "DurationSMPTE": "00:00:04:12",
                "ShotSegment": {
                    "Index": 675,
                    "Confidence": 99.88127899169922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1046800,
                "EndTimestampMillis": 1049040,
                "DurationMillis": 2240,
                "StartTimecodeSMPTE": "00:17:26:20",
                "EndTimecodeSMPTE": "00:17:29:01",
                "DurationSMPTE": "00:00:02:06",
                "ShotSegment": {
                    "Index": 676,
                    "Confidence": 99.82241821289062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1049080,
                "EndTimestampMillis": 1056240,
                "DurationMillis": 7160,
                "StartTimecodeSMPTE": "00:17:29:02",
                "EndTimecodeSMPTE": "00:17:36:06",
                "DurationSMPTE": "00:00:07:04",
                "ShotSegment": {
                    "Index": 677,
                    "Confidence": 99.82241821289062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1056280,
                "EndTimestampMillis": 1057000,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:17:36:07",
                "EndTimecodeSMPTE": "00:17:37:00",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 678,
                    "Confidence": 99.85807800292969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1057040,
                "EndTimestampMillis": 1058280,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:17:37:01",
                "EndTimecodeSMPTE": "00:17:38:07",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 679,
                    "Confidence": 99.81855773925781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1058320,
                "EndTimestampMillis": 1059160,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:17:38:08",
                "EndTimecodeSMPTE": "00:17:39:04",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 680,
                    "Confidence": 99.81855773925781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1059200,
                "EndTimestampMillis": 1060520,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:17:39:05",
                "EndTimecodeSMPTE": "00:17:40:13",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 681,
                    "Confidence": 99.9599380493164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1060560,
                "EndTimestampMillis": 1061880,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:17:40:14",
                "EndTimecodeSMPTE": "00:17:41:22",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 682,
                    "Confidence": 99.96044158935547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1061920,
                "EndTimestampMillis": 1063040,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:17:41:23",
                "EndTimecodeSMPTE": "00:17:43:01",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 683,
                    "Confidence": 99.97309875488281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1063080,
                "EndTimestampMillis": 1064560,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:17:43:02",
                "EndTimecodeSMPTE": "00:17:44:14",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 684,
                    "Confidence": 99.83302307128906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1064600,
                "EndTimestampMillis": 1065920,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:17:44:15",
                "EndTimecodeSMPTE": "00:17:45:23",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 685,
                    "Confidence": 99.39773559570312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1065960,
                "EndTimestampMillis": 1068440,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:17:45:24",
                "EndTimecodeSMPTE": "00:17:48:11",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 686,
                    "Confidence": 99.39773559570312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1068480,
                "EndTimestampMillis": 1069640,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:17:48:12",
                "EndTimecodeSMPTE": "00:17:49:16",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 687,
                    "Confidence": 99.9378890991211
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1069680,
                "EndTimestampMillis": 1070680,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:17:49:17",
                "EndTimecodeSMPTE": "00:17:50:17",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 688,
                    "Confidence": 99.83735656738281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1070720,
                "EndTimestampMillis": 1072080,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:17:50:18",
                "EndTimecodeSMPTE": "00:17:52:02",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 689,
                    "Confidence": 99.83735656738281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1072120,
                "EndTimestampMillis": 1073200,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:17:52:03",
                "EndTimecodeSMPTE": "00:17:53:05",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 690,
                    "Confidence": 99.98899841308594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1073240,
                "EndTimestampMillis": 1073920,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:17:53:06",
                "EndTimecodeSMPTE": "00:17:53:23",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 691,
                    "Confidence": 99.83439636230469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1073960,
                "EndTimestampMillis": 1075760,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:17:53:24",
                "EndTimecodeSMPTE": "00:17:55:19",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 692,
                    "Confidence": 99.83439636230469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1075800,
                "EndTimestampMillis": 1078440,
                "DurationMillis": 2640,
                "StartTimecodeSMPTE": "00:17:55:20",
                "EndTimecodeSMPTE": "00:17:58:11",
                "DurationSMPTE": "00:00:02:16",
                "ShotSegment": {
                    "Index": 693,
                    "Confidence": 99.96224975585938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1078480,
                "EndTimestampMillis": 1079360,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:17:58:12",
                "EndTimecodeSMPTE": "00:17:59:09",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 694,
                    "Confidence": 99.82154083251953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1079400,
                "EndTimestampMillis": 1081880,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:17:59:10",
                "EndTimecodeSMPTE": "00:18:01:22",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 695,
                    "Confidence": 99.82154083251953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1081920,
                "EndTimestampMillis": 1082920,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:18:01:23",
                "EndTimecodeSMPTE": "00:18:02:23",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 696,
                    "Confidence": 99.50279998779297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1082960,
                "EndTimestampMillis": 1084520,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:18:02:24",
                "EndTimecodeSMPTE": "00:18:04:13",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 697,
                    "Confidence": 99.50279998779297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1084560,
                "EndTimestampMillis": 1085920,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:18:04:14",
                "EndTimecodeSMPTE": "00:18:05:23",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 698,
                    "Confidence": 99.91146850585938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1085960,
                "EndTimestampMillis": 1087720,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:18:05:24",
                "EndTimecodeSMPTE": "00:18:07:18",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 699,
                    "Confidence": 99.9444351196289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1087760,
                "EndTimestampMillis": 1092040,
                "DurationMillis": 4280,
                "StartTimecodeSMPTE": "00:18:07:19",
                "EndTimecodeSMPTE": "00:18:12:01",
                "DurationSMPTE": "00:00:04:07",
                "ShotSegment": {
                    "Index": 700,
                    "Confidence": 99.78531646728516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1092080,
                "EndTimestampMillis": 1095360,
                "DurationMillis": 3280,
                "StartTimecodeSMPTE": "00:18:12:02",
                "EndTimecodeSMPTE": "00:18:15:09",
                "DurationSMPTE": "00:00:03:07",
                "ShotSegment": {
                    "Index": 701,
                    "Confidence": 87.5335693359375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1095480,
                "EndTimestampMillis": 1096680,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:18:15:12",
                "EndTimecodeSMPTE": "00:18:16:17",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 702,
                    "Confidence": 87.5335693359375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1096720,
                "EndTimestampMillis": 1097760,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:18:16:18",
                "EndTimecodeSMPTE": "00:18:17:19",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 703,
                    "Confidence": 99.44703674316406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1097800,
                "EndTimestampMillis": 1098840,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:18:17:20",
                "EndTimecodeSMPTE": "00:18:18:21",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 704,
                    "Confidence": 99.44703674316406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1098880,
                "EndTimestampMillis": 1100720,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:18:18:22",
                "EndTimecodeSMPTE": "00:18:20:18",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 705,
                    "Confidence": 99.44576263427734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1100760,
                "EndTimestampMillis": 1102600,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:18:20:19",
                "EndTimecodeSMPTE": "00:18:22:15",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 706,
                    "Confidence": 56.465877532958984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1102640,
                "EndTimestampMillis": 1102960,
                "DurationMillis": 320,
                "StartTimecodeSMPTE": "00:18:22:16",
                "EndTimecodeSMPTE": "00:18:22:24",
                "DurationSMPTE": "00:00:00:08",
                "ShotSegment": {
                    "Index": 707,
                    "Confidence": 56.465877532958984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1103000,
                "EndTimestampMillis": 1104760,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:18:23:00",
                "EndTimecodeSMPTE": "00:18:24:19",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 708,
                    "Confidence": 94.63053894042969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1104800,
                "EndTimestampMillis": 1107000,
                "DurationMillis": 2200,
                "StartTimecodeSMPTE": "00:18:24:20",
                "EndTimecodeSMPTE": "00:18:27:00",
                "DurationSMPTE": "00:00:02:05",
                "ShotSegment": {
                    "Index": 709,
                    "Confidence": 99.98223114013672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1107040,
                "EndTimestampMillis": 1108600,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:18:27:01",
                "EndTimecodeSMPTE": "00:18:28:15",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 710,
                    "Confidence": 99.9830093383789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1108640,
                "EndTimestampMillis": 1111680,
                "DurationMillis": 3040,
                "StartTimecodeSMPTE": "00:18:28:16",
                "EndTimecodeSMPTE": "00:18:31:17",
                "DurationSMPTE": "00:00:03:01",
                "ShotSegment": {
                    "Index": 711,
                    "Confidence": 99.98867797851562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1111720,
                "EndTimestampMillis": 1113080,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:18:31:18",
                "EndTimecodeSMPTE": "00:18:33:02",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 712,
                    "Confidence": 99.98148345947266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1113120,
                "EndTimestampMillis": 1114840,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:18:33:03",
                "EndTimecodeSMPTE": "00:18:34:21",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 713,
                    "Confidence": 99.98148345947266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1114880,
                "EndTimestampMillis": 1116240,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:18:34:22",
                "EndTimecodeSMPTE": "00:18:36:06",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 714,
                    "Confidence": 99.79340362548828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1116280,
                "EndTimestampMillis": 1117040,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:18:36:07",
                "EndTimecodeSMPTE": "00:18:37:01",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 715,
                    "Confidence": 99.79340362548828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1117080,
                "EndTimestampMillis": 1118160,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:18:37:02",
                "EndTimecodeSMPTE": "00:18:38:04",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 716,
                    "Confidence": 99.95824432373047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1118200,
                "EndTimestampMillis": 1120480,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:18:38:05",
                "EndTimecodeSMPTE": "00:18:40:12",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 717,
                    "Confidence": 99.96239471435547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1120520,
                "EndTimestampMillis": 1121880,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:18:40:13",
                "EndTimecodeSMPTE": "00:18:41:22",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 718,
                    "Confidence": 99.96239471435547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1121920,
                "EndTimestampMillis": 1123160,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:18:41:23",
                "EndTimecodeSMPTE": "00:18:43:04",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 719,
                    "Confidence": 99.97521209716797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1123200,
                "EndTimestampMillis": 1130560,
                "DurationMillis": 7360,
                "StartTimecodeSMPTE": "00:18:43:05",
                "EndTimecodeSMPTE": "00:18:50:14",
                "DurationSMPTE": "00:00:07:09",
                "ShotSegment": {
                    "Index": 720,
                    "Confidence": 99.97521209716797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1130600,
                "EndTimestampMillis": 1131720,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:18:50:15",
                "EndTimecodeSMPTE": "00:18:51:18",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 721,
                    "Confidence": 99.98601531982422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1131760,
                "EndTimestampMillis": 1136680,
                "DurationMillis": 4920,
                "StartTimecodeSMPTE": "00:18:51:19",
                "EndTimecodeSMPTE": "00:18:56:17",
                "DurationSMPTE": "00:00:04:23",
                "ShotSegment": {
                    "Index": 722,
                    "Confidence": 99.98209381103516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1136720,
                "EndTimestampMillis": 1138040,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:18:56:18",
                "EndTimecodeSMPTE": "00:18:58:01",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 723,
                    "Confidence": 99.93209075927734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1138080,
                "EndTimestampMillis": 1139840,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:18:58:02",
                "EndTimecodeSMPTE": "00:18:59:21",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 724,
                    "Confidence": 99.93209075927734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1139880,
                "EndTimestampMillis": 1141040,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:18:59:22",
                "EndTimecodeSMPTE": "00:19:01:01",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 725,
                    "Confidence": 99.986083984375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1141080,
                "EndTimestampMillis": 1143080,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:19:01:02",
                "EndTimecodeSMPTE": "00:19:03:02",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 726,
                    "Confidence": 99.93712615966797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1143120,
                "EndTimestampMillis": 1148520,
                "DurationMillis": 5400,
                "StartTimecodeSMPTE": "00:19:03:03",
                "EndTimecodeSMPTE": "00:19:08:13",
                "DurationSMPTE": "00:00:05:10",
                "ShotSegment": {
                    "Index": 727,
                    "Confidence": 99.89599609375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1148560,
                "EndTimestampMillis": 1152880,
                "DurationMillis": 4320,
                "StartTimecodeSMPTE": "00:19:08:14",
                "EndTimecodeSMPTE": "00:19:12:22",
                "DurationSMPTE": "00:00:04:08",
                "ShotSegment": {
                    "Index": 728,
                    "Confidence": 99.89599609375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1152920,
                "EndTimestampMillis": 1156560,
                "DurationMillis": 3640,
                "StartTimecodeSMPTE": "00:19:12:23",
                "EndTimecodeSMPTE": "00:19:16:14",
                "DurationSMPTE": "00:00:03:16",
                "ShotSegment": {
                    "Index": 729,
                    "Confidence": 99.86226654052734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1156600,
                "EndTimestampMillis": 1158680,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:19:16:15",
                "EndTimecodeSMPTE": "00:19:18:17",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 730,
                    "Confidence": 99.76426696777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1158720,
                "EndTimestampMillis": 1159520,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:19:18:18",
                "EndTimecodeSMPTE": "00:19:19:13",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 731,
                    "Confidence": 99.76426696777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1159560,
                "EndTimestampMillis": 1161400,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:19:19:14",
                "EndTimecodeSMPTE": "00:19:21:10",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 732,
                    "Confidence": 99.97772979736328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1161440,
                "EndTimestampMillis": 1163440,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:19:21:11",
                "EndTimecodeSMPTE": "00:19:23:11",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 733,
                    "Confidence": 99.83682250976562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1163480,
                "EndTimestampMillis": 1165760,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:19:23:12",
                "EndTimecodeSMPTE": "00:19:25:19",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 734,
                    "Confidence": 99.83682250976562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1165800,
                "EndTimestampMillis": 1167720,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:19:25:20",
                "EndTimecodeSMPTE": "00:19:27:18",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 735,
                    "Confidence": 99.978759765625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1167760,
                "EndTimestampMillis": 1169440,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:19:27:19",
                "EndTimecodeSMPTE": "00:19:29:11",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 736,
                    "Confidence": 99.89529418945312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1169480,
                "EndTimestampMillis": 1173320,
                "DurationMillis": 3840,
                "StartTimecodeSMPTE": "00:19:29:12",
                "EndTimecodeSMPTE": "00:19:33:08",
                "DurationSMPTE": "00:00:03:21",
                "ShotSegment": {
                    "Index": 737,
                    "Confidence": 99.60227966308594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1173360,
                "EndTimestampMillis": 1175320,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:19:33:09",
                "EndTimecodeSMPTE": "00:19:35:08",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 738,
                    "Confidence": 99.60227966308594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1175360,
                "EndTimestampMillis": 1176960,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:19:35:09",
                "EndTimecodeSMPTE": "00:19:36:24",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 739,
                    "Confidence": 99.85549926757812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1177000,
                "EndTimestampMillis": 1182160,
                "DurationMillis": 5160,
                "StartTimecodeSMPTE": "00:19:37:00",
                "EndTimecodeSMPTE": "00:19:42:04",
                "DurationSMPTE": "00:00:05:04",
                "ShotSegment": {
                    "Index": 740,
                    "Confidence": 99.85549926757812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1182200,
                "EndTimestampMillis": 1183920,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:19:42:05",
                "EndTimecodeSMPTE": "00:19:43:23",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 741,
                    "Confidence": 99.98460388183594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1183960,
                "EndTimestampMillis": 1187320,
                "DurationMillis": 3360,
                "StartTimecodeSMPTE": "00:19:43:24",
                "EndTimecodeSMPTE": "00:19:47:08",
                "DurationSMPTE": "00:00:03:09",
                "ShotSegment": {
                    "Index": 742,
                    "Confidence": 99.98460388183594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1187360,
                "EndTimestampMillis": 1190520,
                "DurationMillis": 3160,
                "StartTimecodeSMPTE": "00:19:47:09",
                "EndTimecodeSMPTE": "00:19:50:13",
                "DurationSMPTE": "00:00:03:04",
                "ShotSegment": {
                    "Index": 743,
                    "Confidence": 99.97830200195312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1190560,
                "EndTimestampMillis": 1193240,
                "DurationMillis": 2680,
                "StartTimecodeSMPTE": "00:19:50:14",
                "EndTimecodeSMPTE": "00:19:53:06",
                "DurationSMPTE": "00:00:02:17",
                "ShotSegment": {
                    "Index": 744,
                    "Confidence": 99.97830200195312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1193280,
                "EndTimestampMillis": 1195120,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:19:53:07",
                "EndTimecodeSMPTE": "00:19:55:03",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 745,
                    "Confidence": 99.99362182617188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1195160,
                "EndTimestampMillis": 1199440,
                "DurationMillis": 4280,
                "StartTimecodeSMPTE": "00:19:55:04",
                "EndTimecodeSMPTE": "00:19:59:11",
                "DurationSMPTE": "00:00:04:07",
                "ShotSegment": {
                    "Index": 746,
                    "Confidence": 99.95497131347656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1199480,
                "EndTimestampMillis": 1201040,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:19:59:12",
                "EndTimecodeSMPTE": "00:20:01:01",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 747,
                    "Confidence": 99.9400405883789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1201080,
                "EndTimestampMillis": 1203640,
                "DurationMillis": 2560,
                "StartTimecodeSMPTE": "00:20:01:02",
                "EndTimecodeSMPTE": "00:20:03:16",
                "DurationSMPTE": "00:00:02:14",
                "ShotSegment": {
                    "Index": 748,
                    "Confidence": 99.91218566894531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1203680,
                "EndTimestampMillis": 1206120,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:20:03:17",
                "EndTimecodeSMPTE": "00:20:06:03",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 749,
                    "Confidence": 99.91218566894531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1206160,
                "EndTimestampMillis": 1207840,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:20:06:04",
                "EndTimecodeSMPTE": "00:20:07:21",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 750,
                    "Confidence": 99.32366180419922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1207880,
                "EndTimestampMillis": 1210080,
                "DurationMillis": 2200,
                "StartTimecodeSMPTE": "00:20:07:22",
                "EndTimecodeSMPTE": "00:20:10:02",
                "DurationSMPTE": "00:00:02:05",
                "ShotSegment": {
                    "Index": 751,
                    "Confidence": 99.32366180419922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1210120,
                "EndTimestampMillis": 1211840,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:20:10:03",
                "EndTimecodeSMPTE": "00:20:11:21",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 752,
                    "Confidence": 99.7870101928711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1211880,
                "EndTimestampMillis": 1212960,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:20:11:22",
                "EndTimecodeSMPTE": "00:20:12:24",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 753,
                    "Confidence": 99.94210052490234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1213000,
                "EndTimestampMillis": 1214040,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:20:13:00",
                "EndTimecodeSMPTE": "00:20:14:01",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 754,
                    "Confidence": 99.94210052490234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1214080,
                "EndTimestampMillis": 1216000,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:20:14:02",
                "EndTimecodeSMPTE": "00:20:16:00",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 755,
                    "Confidence": 99.9000015258789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1216040,
                "EndTimestampMillis": 1216880,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:20:16:01",
                "EndTimecodeSMPTE": "00:20:16:22",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 756,
                    "Confidence": 99.7614974975586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1216920,
                "EndTimestampMillis": 1218200,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:20:16:23",
                "EndTimecodeSMPTE": "00:20:18:05",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 757,
                    "Confidence": 99.7614974975586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1218240,
                "EndTimestampMillis": 1219320,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:20:18:06",
                "EndTimecodeSMPTE": "00:20:19:08",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 758,
                    "Confidence": 99.9396743774414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1219360,
                "EndTimestampMillis": 1220560,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:20:19:09",
                "EndTimecodeSMPTE": "00:20:20:14",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 759,
                    "Confidence": 99.43643188476562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1220600,
                "EndTimestampMillis": 1221160,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:20:20:15",
                "EndTimecodeSMPTE": "00:20:21:04",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 760,
                    "Confidence": 77.50431060791016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1221200,
                "EndTimestampMillis": 1221760,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:20:21:05",
                "EndTimecodeSMPTE": "00:20:21:19",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 761,
                    "Confidence": 77.50431060791016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1221800,
                "EndTimestampMillis": 1223160,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:20:21:20",
                "EndTimecodeSMPTE": "00:20:23:04",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 762,
                    "Confidence": 99.48741912841797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1223200,
                "EndTimestampMillis": 1224200,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:20:23:05",
                "EndTimecodeSMPTE": "00:20:24:05",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 763,
                    "Confidence": 99.93977355957031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1224240,
                "EndTimestampMillis": 1225640,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:20:24:06",
                "EndTimecodeSMPTE": "00:20:25:16",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 764,
                    "Confidence": 99.91437530517578
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1225680,
                "EndTimestampMillis": 1227040,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:20:25:17",
                "EndTimecodeSMPTE": "00:20:27:01",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 765,
                    "Confidence": 99.8760986328125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1227080,
                "EndTimestampMillis": 1230920,
                "DurationMillis": 3840,
                "StartTimecodeSMPTE": "00:20:27:02",
                "EndTimecodeSMPTE": "00:20:30:23",
                "DurationSMPTE": "00:00:03:21",
                "ShotSegment": {
                    "Index": 766,
                    "Confidence": 99.7568588256836
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1230960,
                "EndTimestampMillis": 1232600,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:20:30:24",
                "EndTimecodeSMPTE": "00:20:32:15",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 767,
                    "Confidence": 99.7568588256836
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1232640,
                "EndTimestampMillis": 1235840,
                "DurationMillis": 3200,
                "StartTimecodeSMPTE": "00:20:32:16",
                "EndTimecodeSMPTE": "00:20:35:21",
                "DurationSMPTE": "00:00:03:05",
                "ShotSegment": {
                    "Index": 768,
                    "Confidence": 99.79591369628906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1235880,
                "EndTimestampMillis": 1237000,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:20:35:22",
                "EndTimecodeSMPTE": "00:20:37:00",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 769,
                    "Confidence": 99.79591369628906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1237040,
                "EndTimestampMillis": 1240480,
                "DurationMillis": 3440,
                "StartTimecodeSMPTE": "00:20:37:01",
                "EndTimecodeSMPTE": "00:20:40:12",
                "DurationSMPTE": "00:00:03:11",
                "ShotSegment": {
                    "Index": 770,
                    "Confidence": 99.77268981933594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1240520,
                "EndTimestampMillis": 1243400,
                "DurationMillis": 2880,
                "StartTimecodeSMPTE": "00:20:40:13",
                "EndTimecodeSMPTE": "00:20:43:10",
                "DurationSMPTE": "00:00:02:22",
                "ShotSegment": {
                    "Index": 771,
                    "Confidence": 99.77268981933594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1243440,
                "EndTimestampMillis": 1245720,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:20:43:11",
                "EndTimecodeSMPTE": "00:20:45:18",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 772,
                    "Confidence": 99.77503204345703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1245760,
                "EndTimestampMillis": 1247080,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:20:45:19",
                "EndTimecodeSMPTE": "00:20:47:02",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 773,
                    "Confidence": 99.77503204345703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1247120,
                "EndTimestampMillis": 1248840,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:20:47:03",
                "EndTimecodeSMPTE": "00:20:48:21",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 774,
                    "Confidence": 99.88876342773438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1248880,
                "EndTimestampMillis": 1251560,
                "DurationMillis": 2680,
                "StartTimecodeSMPTE": "00:20:48:22",
                "EndTimecodeSMPTE": "00:20:51:14",
                "DurationSMPTE": "00:00:02:17",
                "ShotSegment": {
                    "Index": 775,
                    "Confidence": 99.92353820800781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1251600,
                "EndTimestampMillis": 1252840,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:20:51:15",
                "EndTimecodeSMPTE": "00:20:52:21",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 776,
                    "Confidence": 99.91136932373047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1252880,
                "EndTimestampMillis": 1254720,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:20:52:22",
                "EndTimecodeSMPTE": "00:20:54:18",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 777,
                    "Confidence": 99.91136932373047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1254760,
                "EndTimestampMillis": 1255640,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:20:54:19",
                "EndTimecodeSMPTE": "00:20:55:16",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 778,
                    "Confidence": 99.91436767578125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1255680,
                "EndTimestampMillis": 1262640,
                "DurationMillis": 6960,
                "StartTimecodeSMPTE": "00:20:55:17",
                "EndTimecodeSMPTE": "00:21:02:16",
                "DurationSMPTE": "00:00:06:24",
                "ShotSegment": {
                    "Index": 779,
                    "Confidence": 99.90913391113281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1262680,
                "EndTimestampMillis": 1265880,
                "DurationMillis": 3200,
                "StartTimecodeSMPTE": "00:21:02:17",
                "EndTimecodeSMPTE": "00:21:05:22",
                "DurationSMPTE": "00:00:03:05",
                "ShotSegment": {
                    "Index": 780,
                    "Confidence": 99.90913391113281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1265920,
                "EndTimestampMillis": 1269560,
                "DurationMillis": 3640,
                "StartTimecodeSMPTE": "00:21:05:23",
                "EndTimecodeSMPTE": "00:21:09:14",
                "DurationSMPTE": "00:00:03:16",
                "ShotSegment": {
                    "Index": 781,
                    "Confidence": 99.81005096435547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1269600,
                "EndTimestampMillis": 1271200,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:21:09:15",
                "EndTimecodeSMPTE": "00:21:11:05",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 782,
                    "Confidence": 99.81005096435547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1271240,
                "EndTimestampMillis": 1272080,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:21:11:06",
                "EndTimecodeSMPTE": "00:21:12:02",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 783,
                    "Confidence": 99.9513168334961
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1272120,
                "EndTimestampMillis": 1273480,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:21:12:03",
                "EndTimecodeSMPTE": "00:21:13:12",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 784,
                    "Confidence": 99.794677734375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1273520,
                "EndTimestampMillis": 1275560,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:21:13:13",
                "EndTimecodeSMPTE": "00:21:15:14",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 785,
                    "Confidence": 99.794677734375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1275600,
                "EndTimestampMillis": 1277040,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:21:15:15",
                "EndTimecodeSMPTE": "00:21:17:01",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 786,
                    "Confidence": 99.81915283203125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1277080,
                "EndTimestampMillis": 1280200,
                "DurationMillis": 3120,
                "StartTimecodeSMPTE": "00:21:17:02",
                "EndTimecodeSMPTE": "00:21:20:05",
                "DurationSMPTE": "00:00:03:03",
                "ShotSegment": {
                    "Index": 787,
                    "Confidence": 99.91619110107422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1280240,
                "EndTimestampMillis": 1292480,
                "DurationMillis": 12240,
                "StartTimecodeSMPTE": "00:21:20:06",
                "EndTimecodeSMPTE": "00:21:32:12",
                "DurationSMPTE": "00:00:12:06",
                "ShotSegment": {
                    "Index": 788,
                    "Confidence": 99.93114471435547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1292520,
                "EndTimestampMillis": 1294560,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:21:32:13",
                "EndTimecodeSMPTE": "00:21:34:14",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 789,
                    "Confidence": 99.93114471435547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1294600,
                "EndTimestampMillis": 1296280,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:21:34:15",
                "EndTimecodeSMPTE": "00:21:36:07",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 790,
                    "Confidence": 99.96537017822266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1296320,
                "EndTimestampMillis": 1298280,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:21:36:08",
                "EndTimecodeSMPTE": "00:21:38:07",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 791,
                    "Confidence": 99.96509552001953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1298320,
                "EndTimestampMillis": 1299240,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:21:38:08",
                "EndTimecodeSMPTE": "00:21:39:06",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 792,
                    "Confidence": 99.96509552001953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1299280,
                "EndTimestampMillis": 1300320,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:21:39:07",
                "EndTimecodeSMPTE": "00:21:40:08",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 793,
                    "Confidence": 99.97168731689453
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1300360,
                "EndTimestampMillis": 1301120,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:21:40:09",
                "EndTimecodeSMPTE": "00:21:41:03",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 794,
                    "Confidence": 99.96831512451172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1301160,
                "EndTimestampMillis": 1303160,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:21:41:04",
                "EndTimecodeSMPTE": "00:21:43:04",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 795,
                    "Confidence": 99.96831512451172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1303200,
                "EndTimestampMillis": 1304000,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:21:43:05",
                "EndTimecodeSMPTE": "00:21:44:00",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 796,
                    "Confidence": 99.9391860961914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1304040,
                "EndTimestampMillis": 1306320,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:21:44:01",
                "EndTimecodeSMPTE": "00:21:46:08",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 797,
                    "Confidence": 99.85011291503906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1306360,
                "EndTimestampMillis": 1307760,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:21:46:09",
                "EndTimecodeSMPTE": "00:21:47:19",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 798,
                    "Confidence": 99.85011291503906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1307800,
                "EndTimestampMillis": 1309880,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:21:47:20",
                "EndTimecodeSMPTE": "00:21:49:22",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 799,
                    "Confidence": 99.9274673461914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1309920,
                "EndTimestampMillis": 1312480,
                "DurationMillis": 2560,
                "StartTimecodeSMPTE": "00:21:49:23",
                "EndTimecodeSMPTE": "00:21:52:12",
                "DurationSMPTE": "00:00:02:14",
                "ShotSegment": {
                    "Index": 800,
                    "Confidence": 99.81587982177734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1312520,
                "EndTimestampMillis": 1315000,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:21:52:13",
                "EndTimecodeSMPTE": "00:21:55:00",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 801,
                    "Confidence": 99.81587982177734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1315040,
                "EndTimestampMillis": 1319000,
                "DurationMillis": 3960,
                "StartTimecodeSMPTE": "00:21:55:01",
                "EndTimecodeSMPTE": "00:21:59:00",
                "DurationSMPTE": "00:00:03:24",
                "ShotSegment": {
                    "Index": 802,
                    "Confidence": 99.96057891845703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1319040,
                "EndTimestampMillis": 1321320,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:21:59:01",
                "EndTimecodeSMPTE": "00:22:01:08",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 803,
                    "Confidence": 99.96723937988281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1321360,
                "EndTimestampMillis": 1323240,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:22:01:09",
                "EndTimecodeSMPTE": "00:22:03:06",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 804,
                    "Confidence": 99.96990966796875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1323280,
                "EndTimestampMillis": 1325080,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:22:03:07",
                "EndTimecodeSMPTE": "00:22:05:02",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 805,
                    "Confidence": 99.98343658447266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1325120,
                "EndTimestampMillis": 1326880,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:22:05:03",
                "EndTimecodeSMPTE": "00:22:06:22",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 806,
                    "Confidence": 99.91696166992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1326920,
                "EndTimestampMillis": 1329280,
                "DurationMillis": 2360,
                "StartTimecodeSMPTE": "00:22:06:23",
                "EndTimecodeSMPTE": "00:22:09:07",
                "DurationSMPTE": "00:00:02:09",
                "ShotSegment": {
                    "Index": 807,
                    "Confidence": 99.91696166992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1329320,
                "EndTimestampMillis": 1330520,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:22:09:08",
                "EndTimecodeSMPTE": "00:22:10:13",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 808,
                    "Confidence": 99.99417877197266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1330560,
                "EndTimestampMillis": 1331680,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:22:10:14",
                "EndTimecodeSMPTE": "00:22:11:17",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 809,
                    "Confidence": 99.9398422241211
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1331720,
                "EndTimestampMillis": 1332480,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:22:11:18",
                "EndTimecodeSMPTE": "00:22:12:12",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 810,
                    "Confidence": 99.9398422241211
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1332520,
                "EndTimestampMillis": 1334000,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:22:12:13",
                "EndTimecodeSMPTE": "00:22:14:00",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 811,
                    "Confidence": 99.95911407470703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1334040,
                "EndTimestampMillis": 1335200,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:22:14:01",
                "EndTimecodeSMPTE": "00:22:15:05",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 812,
                    "Confidence": 99.95911407470703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1335240,
                "EndTimestampMillis": 1336840,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:22:15:06",
                "EndTimecodeSMPTE": "00:22:16:21",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 813,
                    "Confidence": 99.97270202636719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1336880,
                "EndTimestampMillis": 1338920,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:22:16:22",
                "EndTimecodeSMPTE": "00:22:18:23",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 814,
                    "Confidence": 99.98433685302734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1338960,
                "EndTimestampMillis": 1341160,
                "DurationMillis": 2200,
                "StartTimecodeSMPTE": "00:22:18:24",
                "EndTimecodeSMPTE": "00:22:21:04",
                "DurationSMPTE": "00:00:02:05",
                "ShotSegment": {
                    "Index": 815,
                    "Confidence": 99.98457336425781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1341200,
                "EndTimestampMillis": 1343320,
                "DurationMillis": 2120,
                "StartTimecodeSMPTE": "00:22:21:05",
                "EndTimecodeSMPTE": "00:22:23:08",
                "DurationSMPTE": "00:00:02:03",
                "ShotSegment": {
                    "Index": 816,
                    "Confidence": 99.98728942871094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1343360,
                "EndTimestampMillis": 1344480,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:22:23:09",
                "EndTimecodeSMPTE": "00:22:24:12",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 817,
                    "Confidence": 99.9749526977539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1344520,
                "EndTimestampMillis": 1346880,
                "DurationMillis": 2360,
                "StartTimecodeSMPTE": "00:22:24:13",
                "EndTimecodeSMPTE": "00:22:26:22",
                "DurationSMPTE": "00:00:02:09",
                "ShotSegment": {
                    "Index": 818,
                    "Confidence": 99.9749526977539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1346920,
                "EndTimestampMillis": 1348520,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:22:26:23",
                "EndTimecodeSMPTE": "00:22:28:13",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 819,
                    "Confidence": 99.97013092041016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1348560,
                "EndTimestampMillis": 1350040,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:22:28:14",
                "EndTimecodeSMPTE": "00:22:30:01",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 820,
                    "Confidence": 99.97013092041016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1350080,
                "EndTimestampMillis": 1351320,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:22:30:02",
                "EndTimecodeSMPTE": "00:22:31:08",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 821,
                    "Confidence": 99.96768951416016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1351360,
                "EndTimestampMillis": 1353400,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:22:31:09",
                "EndTimecodeSMPTE": "00:22:33:10",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 822,
                    "Confidence": 99.96768951416016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1353440,
                "EndTimestampMillis": 1355600,
                "DurationMillis": 2160,
                "StartTimecodeSMPTE": "00:22:33:11",
                "EndTimecodeSMPTE": "00:22:35:15",
                "DurationSMPTE": "00:00:02:04",
                "ShotSegment": {
                    "Index": 823,
                    "Confidence": 99.99635314941406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1355640,
                "EndTimestampMillis": 1357280,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:22:35:16",
                "EndTimecodeSMPTE": "00:22:37:07",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 824,
                    "Confidence": 99.99635314941406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1357320,
                "EndTimestampMillis": 1358120,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:22:37:08",
                "EndTimecodeSMPTE": "00:22:38:03",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 825,
                    "Confidence": 99.94931030273438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1358160,
                "EndTimestampMillis": 1359320,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:22:38:04",
                "EndTimecodeSMPTE": "00:22:39:08",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 826,
                    "Confidence": 99.94931030273438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1359360,
                "EndTimestampMillis": 1360320,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:22:39:09",
                "EndTimecodeSMPTE": "00:22:40:08",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 827,
                    "Confidence": 99.96070861816406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1360360,
                "EndTimestampMillis": 1361800,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:22:40:09",
                "EndTimecodeSMPTE": "00:22:41:20",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 828,
                    "Confidence": 99.96839904785156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1361840,
                "EndTimestampMillis": 1364680,
                "DurationMillis": 2840,
                "StartTimecodeSMPTE": "00:22:41:21",
                "EndTimecodeSMPTE": "00:22:44:17",
                "DurationSMPTE": "00:00:02:21",
                "ShotSegment": {
                    "Index": 829,
                    "Confidence": 99.94233703613281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1364720,
                "EndTimestampMillis": 1365880,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:22:44:18",
                "EndTimecodeSMPTE": "00:22:45:22",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 830,
                    "Confidence": 99.94233703613281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1365920,
                "EndTimestampMillis": 1368400,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:22:45:23",
                "EndTimecodeSMPTE": "00:22:48:10",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 831,
                    "Confidence": 99.97635650634766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1368440,
                "EndTimestampMillis": 1370440,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:22:48:11",
                "EndTimecodeSMPTE": "00:22:50:11",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 832,
                    "Confidence": 99.95018768310547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1370480,
                "EndTimestampMillis": 1372560,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:22:50:12",
                "EndTimecodeSMPTE": "00:22:52:14",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 833,
                    "Confidence": 99.95018768310547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1372600,
                "EndTimestampMillis": 1373880,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:22:52:15",
                "EndTimecodeSMPTE": "00:22:53:22",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 834,
                    "Confidence": 99.96488952636719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1373920,
                "EndTimestampMillis": 1375200,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:22:53:23",
                "EndTimecodeSMPTE": "00:22:55:05",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 835,
                    "Confidence": 99.96488952636719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1375240,
                "EndTimestampMillis": 1380320,
                "DurationMillis": 5080,
                "StartTimecodeSMPTE": "00:22:55:06",
                "EndTimecodeSMPTE": "00:23:00:08",
                "DurationSMPTE": "00:00:05:02",
                "ShotSegment": {
                    "Index": 836,
                    "Confidence": 99.99314880371094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1380360,
                "EndTimestampMillis": 1381680,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:23:00:09",
                "EndTimecodeSMPTE": "00:23:01:17",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 837,
                    "Confidence": 99.97334289550781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1381720,
                "EndTimestampMillis": 1384440,
                "DurationMillis": 2720,
                "StartTimecodeSMPTE": "00:23:01:18",
                "EndTimecodeSMPTE": "00:23:04:11",
                "DurationSMPTE": "00:00:02:18",
                "ShotSegment": {
                    "Index": 838,
                    "Confidence": 99.97334289550781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1384480,
                "EndTimestampMillis": 1385480,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:23:04:12",
                "EndTimecodeSMPTE": "00:23:05:12",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 839,
                    "Confidence": 99.82794952392578
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1385520,
                "EndTimestampMillis": 1390120,
                "DurationMillis": 4600,
                "StartTimecodeSMPTE": "00:23:05:13",
                "EndTimecodeSMPTE": "00:23:10:03",
                "DurationSMPTE": "00:00:04:15",
                "ShotSegment": {
                    "Index": 840,
                    "Confidence": 99.82794952392578
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1390160,
                "EndTimestampMillis": 1393160,
                "DurationMillis": 3000,
                "StartTimecodeSMPTE": "00:23:10:04",
                "EndTimecodeSMPTE": "00:23:13:04",
                "DurationSMPTE": "00:00:03:00",
                "ShotSegment": {
                    "Index": 841,
                    "Confidence": 99.88685607910156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1393200,
                "EndTimestampMillis": 1395320,
                "DurationMillis": 2120,
                "StartTimecodeSMPTE": "00:23:13:05",
                "EndTimecodeSMPTE": "00:23:15:08",
                "DurationSMPTE": "00:00:02:03",
                "ShotSegment": {
                    "Index": 842,
                    "Confidence": 99.89566040039062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1395360,
                "EndTimestampMillis": 1396840,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:23:15:09",
                "EndTimecodeSMPTE": "00:23:16:21",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 843,
                    "Confidence": 99.88225555419922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1396880,
                "EndTimestampMillis": 1397920,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:23:16:22",
                "EndTimecodeSMPTE": "00:23:17:23",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 844,
                    "Confidence": 99.88225555419922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1397960,
                "EndTimestampMillis": 1399160,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:23:17:24",
                "EndTimecodeSMPTE": "00:23:19:04",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 845,
                    "Confidence": 99.94810485839844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1399200,
                "EndTimestampMillis": 1400560,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:23:19:05",
                "EndTimecodeSMPTE": "00:23:20:14",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 846,
                    "Confidence": 99.75001525878906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1400600,
                "EndTimestampMillis": 1402360,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:23:20:15",
                "EndTimecodeSMPTE": "00:23:22:09",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 847,
                    "Confidence": 99.75001525878906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1402400,
                "EndTimestampMillis": 1404000,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:23:22:10",
                "EndTimecodeSMPTE": "00:23:24:00",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 848,
                    "Confidence": 99.96978759765625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1404040,
                "EndTimestampMillis": 1406280,
                "DurationMillis": 2240,
                "StartTimecodeSMPTE": "00:23:24:01",
                "EndTimecodeSMPTE": "00:23:26:07",
                "DurationSMPTE": "00:00:02:06",
                "ShotSegment": {
                    "Index": 849,
                    "Confidence": 99.79359436035156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1406320,
                "EndTimestampMillis": 1407240,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:23:26:08",
                "EndTimecodeSMPTE": "00:23:27:06",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 850,
                    "Confidence": 99.79359436035156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1407280,
                "EndTimestampMillis": 1408400,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:23:27:07",
                "EndTimecodeSMPTE": "00:23:28:10",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 851,
                    "Confidence": 99.94293975830078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1408440,
                "EndTimestampMillis": 1412160,
                "DurationMillis": 3720,
                "StartTimecodeSMPTE": "00:23:28:11",
                "EndTimecodeSMPTE": "00:23:32:04",
                "DurationSMPTE": "00:00:03:18",
                "ShotSegment": {
                    "Index": 852,
                    "Confidence": 99.97361755371094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1412200,
                "EndTimestampMillis": 1414640,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:23:32:05",
                "EndTimecodeSMPTE": "00:23:34:16",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 853,
                    "Confidence": 99.8824691772461
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1414680,
                "EndTimestampMillis": 1417240,
                "DurationMillis": 2560,
                "StartTimecodeSMPTE": "00:23:34:17",
                "EndTimecodeSMPTE": "00:23:37:06",
                "DurationSMPTE": "00:00:02:14",
                "ShotSegment": {
                    "Index": 854,
                    "Confidence": 99.8824691772461
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1417280,
                "EndTimestampMillis": 1421400,
                "DurationMillis": 4120,
                "StartTimecodeSMPTE": "00:23:37:07",
                "EndTimecodeSMPTE": "00:23:41:10",
                "DurationSMPTE": "00:00:04:03",
                "ShotSegment": {
                    "Index": 855,
                    "Confidence": 99.91481018066406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1421440,
                "EndTimestampMillis": 1422880,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:23:41:11",
                "EndTimecodeSMPTE": "00:23:42:22",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 856,
                    "Confidence": 99.89958190917969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1422920,
                "EndTimestampMillis": 1425320,
                "DurationMillis": 2400,
                "StartTimecodeSMPTE": "00:23:42:23",
                "EndTimecodeSMPTE": "00:23:45:08",
                "DurationSMPTE": "00:00:02:10",
                "ShotSegment": {
                    "Index": 857,
                    "Confidence": 99.89958190917969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1425360,
                "EndTimestampMillis": 1429400,
                "DurationMillis": 4040,
                "StartTimecodeSMPTE": "00:23:45:09",
                "EndTimecodeSMPTE": "00:23:49:10",
                "DurationSMPTE": "00:00:04:01",
                "ShotSegment": {
                    "Index": 858,
                    "Confidence": 99.981689453125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1429440,
                "EndTimestampMillis": 1442040,
                "DurationMillis": 12600,
                "StartTimecodeSMPTE": "00:23:49:11",
                "EndTimecodeSMPTE": "00:24:02:01",
                "DurationSMPTE": "00:00:12:15",
                "ShotSegment": {
                    "Index": 859,
                    "Confidence": 99.97372436523438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1442080,
                "EndTimestampMillis": 1444080,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:24:02:02",
                "EndTimecodeSMPTE": "00:24:04:02",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 860,
                    "Confidence": 99.97372436523438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1444120,
                "EndTimestampMillis": 1447720,
                "DurationMillis": 3600,
                "StartTimecodeSMPTE": "00:24:04:03",
                "EndTimecodeSMPTE": "00:24:07:18",
                "DurationSMPTE": "00:00:03:15",
                "ShotSegment": {
                    "Index": 861,
                    "Confidence": 99.9579849243164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1447760,
                "EndTimestampMillis": 1452160,
                "DurationMillis": 4400,
                "StartTimecodeSMPTE": "00:24:07:19",
                "EndTimecodeSMPTE": "00:24:12:04",
                "DurationSMPTE": "00:00:04:10",
                "ShotSegment": {
                    "Index": 862,
                    "Confidence": 99.9579849243164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1452200,
                "EndTimestampMillis": 1456600,
                "DurationMillis": 4400,
                "StartTimecodeSMPTE": "00:24:12:05",
                "EndTimecodeSMPTE": "00:24:16:15",
                "DurationSMPTE": "00:00:04:10",
                "ShotSegment": {
                    "Index": 863,
                    "Confidence": 99.9443588256836
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1456640,
                "EndTimestampMillis": 1458200,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:24:16:16",
                "EndTimecodeSMPTE": "00:24:18:05",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 864,
                    "Confidence": 99.9443588256836
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1458240,
                "EndTimestampMillis": 1462720,
                "DurationMillis": 4480,
                "StartTimecodeSMPTE": "00:24:18:06",
                "EndTimecodeSMPTE": "00:24:22:18",
                "DurationSMPTE": "00:00:04:12",
                "ShotSegment": {
                    "Index": 865,
                    "Confidence": 99.91724395751953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1462760,
                "EndTimestampMillis": 1465280,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:24:22:19",
                "EndTimecodeSMPTE": "00:24:25:07",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 866,
                    "Confidence": 99.86853790283203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1465320,
                "EndTimestampMillis": 1468960,
                "DurationMillis": 3640,
                "StartTimecodeSMPTE": "00:24:25:08",
                "EndTimecodeSMPTE": "00:24:28:24",
                "DurationSMPTE": "00:00:03:16",
                "ShotSegment": {
                    "Index": 867,
                    "Confidence": 99.86853790283203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1469000,
                "EndTimestampMillis": 1470880,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:24:29:00",
                "EndTimecodeSMPTE": "00:24:30:22",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 868,
                    "Confidence": 99.92855834960938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1470920,
                "EndTimestampMillis": 1473880,
                "DurationMillis": 2960,
                "StartTimecodeSMPTE": "00:24:30:23",
                "EndTimecodeSMPTE": "00:24:33:22",
                "DurationSMPTE": "00:00:02:24",
                "ShotSegment": {
                    "Index": 869,
                    "Confidence": 91.98445892333984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1473960,
                "EndTimestampMillis": 1475640,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:24:33:24",
                "EndTimecodeSMPTE": "00:24:35:16",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 870,
                    "Confidence": 89.90225219726562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1475680,
                "EndTimestampMillis": 1476640,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:24:35:17",
                "EndTimecodeSMPTE": "00:24:36:16",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 871,
                    "Confidence": 76.51016235351562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1476680,
                "EndTimestampMillis": 1478600,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:24:36:17",
                "EndTimecodeSMPTE": "00:24:38:15",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 872,
                    "Confidence": 76.51016235351562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1478640,
                "EndTimestampMillis": 1480800,
                "DurationMillis": 2160,
                "StartTimecodeSMPTE": "00:24:38:16",
                "EndTimecodeSMPTE": "00:24:40:20",
                "DurationSMPTE": "00:00:02:04",
                "ShotSegment": {
                    "Index": 873,
                    "Confidence": 76.70203399658203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1480840,
                "EndTimestampMillis": 1482600,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:24:40:21",
                "EndTimecodeSMPTE": "00:24:42:15",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 874,
                    "Confidence": 76.70203399658203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1482680,
                "EndTimestampMillis": 1484000,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:24:42:17",
                "EndTimecodeSMPTE": "00:24:44:00",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 875,
                    "Confidence": 91.35565948486328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1484040,
                "EndTimestampMillis": 1484520,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:24:44:01",
                "EndTimecodeSMPTE": "00:24:44:13",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 876,
                    "Confidence": 99.61309051513672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1484560,
                "EndTimestampMillis": 1486480,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:24:44:14",
                "EndTimecodeSMPTE": "00:24:46:12",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 877,
                    "Confidence": 99.61309051513672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1486520,
                "EndTimestampMillis": 1488240,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:24:46:13",
                "EndTimecodeSMPTE": "00:24:48:06",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 878,
                    "Confidence": 91.35609436035156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1488320,
                "EndTimestampMillis": 1488840,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:24:48:08",
                "EndTimecodeSMPTE": "00:24:48:21",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 879,
                    "Confidence": 91.35609436035156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1488920,
                "EndTimestampMillis": 1492520,
                "DurationMillis": 3600,
                "StartTimecodeSMPTE": "00:24:48:23",
                "EndTimecodeSMPTE": "00:24:52:13",
                "DurationSMPTE": "00:00:03:15",
                "ShotSegment": {
                    "Index": 880,
                    "Confidence": 92.20094299316406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1492560,
                "EndTimestampMillis": 1495320,
                "DurationMillis": 2760,
                "StartTimecodeSMPTE": "00:24:52:14",
                "EndTimecodeSMPTE": "00:24:55:08",
                "DurationSMPTE": "00:00:02:19",
                "ShotSegment": {
                    "Index": 881,
                    "Confidence": 99.86309051513672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1495360,
                "EndTimestampMillis": 1496960,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:24:55:09",
                "EndTimecodeSMPTE": "00:24:56:24",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 882,
                    "Confidence": 99.87139129638672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1497000,
                "EndTimestampMillis": 1499800,
                "DurationMillis": 2800,
                "StartTimecodeSMPTE": "00:24:57:00",
                "EndTimecodeSMPTE": "00:24:59:20",
                "DurationSMPTE": "00:00:02:20",
                "ShotSegment": {
                    "Index": 883,
                    "Confidence": 99.9745101928711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1499840,
                "EndTimestampMillis": 1501240,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:24:59:21",
                "EndTimecodeSMPTE": "00:25:01:06",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 884,
                    "Confidence": 99.91255187988281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1501280,
                "EndTimestampMillis": 1503040,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:25:01:07",
                "EndTimecodeSMPTE": "00:25:03:01",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 885,
                    "Confidence": 99.86442565917969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1503080,
                "EndTimestampMillis": 1504840,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:25:03:02",
                "EndTimecodeSMPTE": "00:25:04:21",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 886,
                    "Confidence": 99.86442565917969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1504880,
                "EndTimestampMillis": 1506800,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:25:04:22",
                "EndTimecodeSMPTE": "00:25:06:20",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 887,
                    "Confidence": 99.93767547607422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1506840,
                "EndTimestampMillis": 1508240,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:25:06:21",
                "EndTimecodeSMPTE": "00:25:08:06",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 888,
                    "Confidence": 99.9150161743164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1508280,
                "EndTimestampMillis": 1509920,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:25:08:07",
                "EndTimecodeSMPTE": "00:25:09:23",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 889,
                    "Confidence": 99.9150161743164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1509960,
                "EndTimestampMillis": 1512000,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:25:09:24",
                "EndTimecodeSMPTE": "00:25:12:00",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 890,
                    "Confidence": 99.93193054199219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1512040,
                "EndTimestampMillis": 1513240,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:25:12:01",
                "EndTimecodeSMPTE": "00:25:13:06",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 891,
                    "Confidence": 99.92213439941406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1513280,
                "EndTimestampMillis": 1514320,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:25:13:07",
                "EndTimecodeSMPTE": "00:25:14:08",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 892,
                    "Confidence": 99.92213439941406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1514360,
                "EndTimestampMillis": 1515920,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:25:14:09",
                "EndTimecodeSMPTE": "00:25:15:23",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 893,
                    "Confidence": 99.94039916992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1515960,
                "EndTimestampMillis": 1517840,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:25:15:24",
                "EndTimecodeSMPTE": "00:25:17:21",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 894,
                    "Confidence": 99.94039916992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1517880,
                "EndTimestampMillis": 1522040,
                "DurationMillis": 4160,
                "StartTimecodeSMPTE": "00:25:17:22",
                "EndTimecodeSMPTE": "00:25:22:01",
                "DurationSMPTE": "00:00:04:04",
                "ShotSegment": {
                    "Index": 895,
                    "Confidence": 99.94561767578125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1522080,
                "EndTimestampMillis": 1523640,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:25:22:02",
                "EndTimecodeSMPTE": "00:25:23:16",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 896,
                    "Confidence": 99.9605484008789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1523680,
                "EndTimestampMillis": 1526040,
                "DurationMillis": 2360,
                "StartTimecodeSMPTE": "00:25:23:17",
                "EndTimecodeSMPTE": "00:25:26:01",
                "DurationSMPTE": "00:00:02:09",
                "ShotSegment": {
                    "Index": 897,
                    "Confidence": 99.9605484008789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1526080,
                "EndTimestampMillis": 1528120,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:25:26:02",
                "EndTimecodeSMPTE": "00:25:28:03",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 898,
                    "Confidence": 99.98613739013672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1528160,
                "EndTimestampMillis": 1530480,
                "DurationMillis": 2320,
                "StartTimecodeSMPTE": "00:25:28:04",
                "EndTimecodeSMPTE": "00:25:30:12",
                "DurationSMPTE": "00:00:02:08",
                "ShotSegment": {
                    "Index": 899,
                    "Confidence": 99.98613739013672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1530520,
                "EndTimestampMillis": 1532680,
                "DurationMillis": 2160,
                "StartTimecodeSMPTE": "00:25:30:13",
                "EndTimecodeSMPTE": "00:25:32:17",
                "DurationSMPTE": "00:00:02:04",
                "ShotSegment": {
                    "Index": 900,
                    "Confidence": 99.9649429321289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1532720,
                "EndTimestampMillis": 1533720,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:25:32:18",
                "EndTimecodeSMPTE": "00:25:33:18",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 901,
                    "Confidence": 99.96444702148438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1533760,
                "EndTimestampMillis": 1534760,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:25:33:19",
                "EndTimecodeSMPTE": "00:25:34:19",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 902,
                    "Confidence": 99.95947265625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1534800,
                "EndTimestampMillis": 1536080,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:25:34:20",
                "EndTimecodeSMPTE": "00:25:36:02",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 903,
                    "Confidence": 99.95947265625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1536120,
                "EndTimestampMillis": 1537840,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:25:36:03",
                "EndTimecodeSMPTE": "00:25:37:21",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 904,
                    "Confidence": 99.92955017089844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1537880,
                "EndTimestampMillis": 1544040,
                "DurationMillis": 6160,
                "StartTimecodeSMPTE": "00:25:37:22",
                "EndTimecodeSMPTE": "00:25:44:01",
                "DurationSMPTE": "00:00:06:04",
                "ShotSegment": {
                    "Index": 905,
                    "Confidence": 99.92955017089844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1544080,
                "EndTimestampMillis": 1546040,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:25:44:02",
                "EndTimecodeSMPTE": "00:25:46:01",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 906,
                    "Confidence": 99.86082458496094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1546080,
                "EndTimestampMillis": 1547880,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:25:46:02",
                "EndTimecodeSMPTE": "00:25:47:22",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 907,
                    "Confidence": 99.86082458496094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1547920,
                "EndTimestampMillis": 1549880,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:25:47:23",
                "EndTimecodeSMPTE": "00:25:49:22",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 908,
                    "Confidence": 99.95378875732422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1549920,
                "EndTimestampMillis": 1552320,
                "DurationMillis": 2400,
                "StartTimecodeSMPTE": "00:25:49:23",
                "EndTimecodeSMPTE": "00:25:52:08",
                "DurationSMPTE": "00:00:02:10",
                "ShotSegment": {
                    "Index": 909,
                    "Confidence": 99.98361206054688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1552360,
                "EndTimestampMillis": 1554840,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:25:52:09",
                "EndTimecodeSMPTE": "00:25:54:21",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 910,
                    "Confidence": 99.94673156738281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1554880,
                "EndTimestampMillis": 1556320,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:25:54:22",
                "EndTimecodeSMPTE": "00:25:56:08",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 911,
                    "Confidence": 99.94673156738281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1556360,
                "EndTimestampMillis": 1558440,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:25:56:09",
                "EndTimecodeSMPTE": "00:25:58:11",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 912,
                    "Confidence": 99.94413757324219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1558480,
                "EndTimestampMillis": 1560000,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:25:58:12",
                "EndTimecodeSMPTE": "00:26:00:00",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 913,
                    "Confidence": 99.94413757324219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1560040,
                "EndTimestampMillis": 1562560,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:26:00:01",
                "EndTimecodeSMPTE": "00:26:02:14",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 914,
                    "Confidence": 99.97567749023438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1562600,
                "EndTimestampMillis": 1565400,
                "DurationMillis": 2800,
                "StartTimecodeSMPTE": "00:26:02:15",
                "EndTimecodeSMPTE": "00:26:05:10",
                "DurationSMPTE": "00:00:02:20",
                "ShotSegment": {
                    "Index": 915,
                    "Confidence": 99.96052551269531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1565440,
                "EndTimestampMillis": 1567360,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:26:05:11",
                "EndTimecodeSMPTE": "00:26:07:09",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 916,
                    "Confidence": 99.93538665771484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1567400,
                "EndTimestampMillis": 1568800,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:26:07:10",
                "EndTimecodeSMPTE": "00:26:08:20",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 917,
                    "Confidence": 99.45724487304688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1568840,
                "EndTimestampMillis": 1572080,
                "DurationMillis": 3240,
                "StartTimecodeSMPTE": "00:26:08:21",
                "EndTimecodeSMPTE": "00:26:12:02",
                "DurationSMPTE": "00:00:03:06",
                "ShotSegment": {
                    "Index": 918,
                    "Confidence": 99.45724487304688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1572120,
                "EndTimestampMillis": 1574640,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:26:12:03",
                "EndTimecodeSMPTE": "00:26:14:16",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 919,
                    "Confidence": 99.64714813232422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1574680,
                "EndTimestampMillis": 1575760,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:26:14:17",
                "EndTimecodeSMPTE": "00:26:15:19",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 920,
                    "Confidence": 99.94266510009766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1575800,
                "EndTimestampMillis": 1577680,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:26:15:20",
                "EndTimecodeSMPTE": "00:26:17:17",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 921,
                    "Confidence": 99.93757629394531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1577720,
                "EndTimestampMillis": 1580760,
                "DurationMillis": 3040,
                "StartTimecodeSMPTE": "00:26:17:18",
                "EndTimecodeSMPTE": "00:26:20:19",
                "DurationSMPTE": "00:00:03:01",
                "ShotSegment": {
                    "Index": 922,
                    "Confidence": 99.93757629394531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1580800,
                "EndTimestampMillis": 1581880,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:26:20:20",
                "EndTimecodeSMPTE": "00:26:21:22",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 923,
                    "Confidence": 99.94647979736328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1581920,
                "EndTimestampMillis": 1584640,
                "DurationMillis": 2720,
                "StartTimecodeSMPTE": "00:26:21:23",
                "EndTimecodeSMPTE": "00:26:24:16",
                "DurationSMPTE": "00:00:02:18",
                "ShotSegment": {
                    "Index": 924,
                    "Confidence": 99.90719604492188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1584680,
                "EndTimestampMillis": 1587920,
                "DurationMillis": 3240,
                "StartTimecodeSMPTE": "00:26:24:17",
                "EndTimecodeSMPTE": "00:26:27:23",
                "DurationSMPTE": "00:00:03:06",
                "ShotSegment": {
                    "Index": 925,
                    "Confidence": 99.79383850097656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1587960,
                "EndTimestampMillis": 1589680,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:26:27:24",
                "EndTimecodeSMPTE": "00:26:29:17",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 926,
                    "Confidence": 99.79383850097656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1589720,
                "EndTimestampMillis": 1591000,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:26:29:18",
                "EndTimecodeSMPTE": "00:26:31:00",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 927,
                    "Confidence": 99.98707580566406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1591040,
                "EndTimestampMillis": 1592840,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:26:31:01",
                "EndTimecodeSMPTE": "00:26:32:21",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 928,
                    "Confidence": 99.98865509033203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1592880,
                "EndTimestampMillis": 1594040,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:26:32:22",
                "EndTimecodeSMPTE": "00:26:34:01",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 929,
                    "Confidence": 99.85820770263672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1594080,
                "EndTimestampMillis": 1596160,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:26:34:02",
                "EndTimecodeSMPTE": "00:26:36:04",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 930,
                    "Confidence": 98.79381561279297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1596200,
                "EndTimestampMillis": 1599120,
                "DurationMillis": 2920,
                "StartTimecodeSMPTE": "00:26:36:05",
                "EndTimecodeSMPTE": "00:26:39:03",
                "DurationSMPTE": "00:00:02:23",
                "ShotSegment": {
                    "Index": 931,
                    "Confidence": 98.79381561279297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1599160,
                "EndTimestampMillis": 1601200,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:26:39:04",
                "EndTimecodeSMPTE": "00:26:41:05",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 932,
                    "Confidence": 97.04006958007812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1601240,
                "EndTimestampMillis": 1603120,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:26:41:06",
                "EndTimecodeSMPTE": "00:26:43:03",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 933,
                    "Confidence": 97.04006958007812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1603160,
                "EndTimestampMillis": 1605040,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:26:43:04",
                "EndTimecodeSMPTE": "00:26:45:01",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 934,
                    "Confidence": 98.5457992553711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1605080,
                "EndTimestampMillis": 1607400,
                "DurationMillis": 2320,
                "StartTimecodeSMPTE": "00:26:45:02",
                "EndTimecodeSMPTE": "00:26:47:10",
                "DurationSMPTE": "00:00:02:08",
                "ShotSegment": {
                    "Index": 935,
                    "Confidence": 99.07498168945312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1607440,
                "EndTimestampMillis": 1610760,
                "DurationMillis": 3320,
                "StartTimecodeSMPTE": "00:26:47:11",
                "EndTimecodeSMPTE": "00:26:50:19",
                "DurationSMPTE": "00:00:03:08",
                "ShotSegment": {
                    "Index": 936,
                    "Confidence": 99.40130615234375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1610800,
                "EndTimestampMillis": 1612640,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:26:50:20",
                "EndTimecodeSMPTE": "00:26:52:16",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 937,
                    "Confidence": 99.95137023925781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1612680,
                "EndTimestampMillis": 1618440,
                "DurationMillis": 5760,
                "StartTimecodeSMPTE": "00:26:52:17",
                "EndTimecodeSMPTE": "00:26:58:11",
                "DurationSMPTE": "00:00:05:19",
                "ShotSegment": {
                    "Index": 938,
                    "Confidence": 99.93740844726562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1618480,
                "EndTimestampMillis": 1620680,
                "DurationMillis": 2200,
                "StartTimecodeSMPTE": "00:26:58:12",
                "EndTimecodeSMPTE": "00:27:00:17",
                "DurationSMPTE": "00:00:02:05",
                "ShotSegment": {
                    "Index": 939,
                    "Confidence": 99.93740844726562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1620720,
                "EndTimestampMillis": 1624400,
                "DurationMillis": 3680,
                "StartTimecodeSMPTE": "00:27:00:18",
                "EndTimecodeSMPTE": "00:27:04:10",
                "DurationSMPTE": "00:00:03:17",
                "ShotSegment": {
                    "Index": 940,
                    "Confidence": 99.91329956054688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1624440,
                "EndTimestampMillis": 1628640,
                "DurationMillis": 4200,
                "StartTimecodeSMPTE": "00:27:04:11",
                "EndTimecodeSMPTE": "00:27:08:16",
                "DurationSMPTE": "00:00:04:05",
                "ShotSegment": {
                    "Index": 941,
                    "Confidence": 99.91329956054688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1628680,
                "EndTimestampMillis": 1635040,
                "DurationMillis": 6360,
                "StartTimecodeSMPTE": "00:27:08:17",
                "EndTimecodeSMPTE": "00:27:15:01",
                "DurationSMPTE": "00:00:06:09",
                "ShotSegment": {
                    "Index": 942,
                    "Confidence": 99.92484283447266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1635080,
                "EndTimestampMillis": 1636640,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:27:15:02",
                "EndTimecodeSMPTE": "00:27:16:16",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 943,
                    "Confidence": 99.95504760742188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1636680,
                "EndTimestampMillis": 1639040,
                "DurationMillis": 2360,
                "StartTimecodeSMPTE": "00:27:16:17",
                "EndTimecodeSMPTE": "00:27:19:01",
                "DurationSMPTE": "00:00:02:09",
                "ShotSegment": {
                    "Index": 944,
                    "Confidence": 99.72991943359375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1639080,
                "EndTimestampMillis": 1644040,
                "DurationMillis": 4960,
                "StartTimecodeSMPTE": "00:27:19:02",
                "EndTimecodeSMPTE": "00:27:24:01",
                "DurationSMPTE": "00:00:04:24",
                "ShotSegment": {
                    "Index": 945,
                    "Confidence": 99.72991943359375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1644080,
                "EndTimestampMillis": 1646080,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:27:24:02",
                "EndTimecodeSMPTE": "00:27:26:02",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 946,
                    "Confidence": 99.93702697753906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1646120,
                "EndTimestampMillis": 1648640,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:27:26:03",
                "EndTimecodeSMPTE": "00:27:28:16",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 947,
                    "Confidence": 99.88777160644531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1648680,
                "EndTimestampMillis": 1650680,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:27:28:17",
                "EndTimecodeSMPTE": "00:27:30:17",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 948,
                    "Confidence": 99.88777160644531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1650720,
                "EndTimestampMillis": 1654520,
                "DurationMillis": 3800,
                "StartTimecodeSMPTE": "00:27:30:18",
                "EndTimecodeSMPTE": "00:27:34:13",
                "DurationSMPTE": "00:00:03:20",
                "ShotSegment": {
                    "Index": 949,
                    "Confidence": 99.90727996826172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1654560,
                "EndTimestampMillis": 1656880,
                "DurationMillis": 2320,
                "StartTimecodeSMPTE": "00:27:34:14",
                "EndTimecodeSMPTE": "00:27:36:22",
                "DurationSMPTE": "00:00:02:08",
                "ShotSegment": {
                    "Index": 950,
                    "Confidence": 99.9307861328125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1656920,
                "EndTimestampMillis": 1664360,
                "DurationMillis": 7440,
                "StartTimecodeSMPTE": "00:27:36:23",
                "EndTimecodeSMPTE": "00:27:44:09",
                "DurationSMPTE": "00:00:07:11",
                "ShotSegment": {
                    "Index": 951,
                    "Confidence": 99.92171478271484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1664400,
                "EndTimestampMillis": 1666560,
                "DurationMillis": 2160,
                "StartTimecodeSMPTE": "00:27:44:10",
                "EndTimecodeSMPTE": "00:27:46:14",
                "DurationSMPTE": "00:00:02:04",
                "ShotSegment": {
                    "Index": 952,
                    "Confidence": 99.73592376708984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1666600,
                "EndTimestampMillis": 1668520,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:27:46:15",
                "EndTimecodeSMPTE": "00:27:48:13",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 953,
                    "Confidence": 98.33805847167969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1668560,
                "EndTimestampMillis": 1670840,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:27:48:14",
                "EndTimecodeSMPTE": "00:27:50:21",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 954,
                    "Confidence": 98.33805847167969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1670880,
                "EndTimestampMillis": 1672040,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:27:50:22",
                "EndTimecodeSMPTE": "00:27:52:01",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 955,
                    "Confidence": 99.91474914550781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1672080,
                "EndTimestampMillis": 1675240,
                "DurationMillis": 3160,
                "StartTimecodeSMPTE": "00:27:52:02",
                "EndTimecodeSMPTE": "00:27:55:06",
                "DurationSMPTE": "00:00:03:04",
                "ShotSegment": {
                    "Index": 956,
                    "Confidence": 99.91474914550781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1675280,
                "EndTimestampMillis": 1678760,
                "DurationMillis": 3480,
                "StartTimecodeSMPTE": "00:27:55:07",
                "EndTimecodeSMPTE": "00:27:58:19",
                "DurationSMPTE": "00:00:03:12",
                "ShotSegment": {
                    "Index": 957,
                    "Confidence": 99.95602416992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1678800,
                "EndTimestampMillis": 1683600,
                "DurationMillis": 4800,
                "StartTimecodeSMPTE": "00:27:58:20",
                "EndTimecodeSMPTE": "00:28:03:15",
                "DurationSMPTE": "00:00:04:20",
                "ShotSegment": {
                    "Index": 958,
                    "Confidence": 99.7507095336914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1683640,
                "EndTimestampMillis": 1685400,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:28:03:16",
                "EndTimecodeSMPTE": "00:28:05:10",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 959,
                    "Confidence": 99.7507095336914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1685440,
                "EndTimestampMillis": 1688680,
                "DurationMillis": 3240,
                "StartTimecodeSMPTE": "00:28:05:11",
                "EndTimecodeSMPTE": "00:28:08:17",
                "DurationSMPTE": "00:00:03:06",
                "ShotSegment": {
                    "Index": 960,
                    "Confidence": 99.95152282714844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1688720,
                "EndTimestampMillis": 1692320,
                "DurationMillis": 3600,
                "StartTimecodeSMPTE": "00:28:08:18",
                "EndTimecodeSMPTE": "00:28:12:08",
                "DurationSMPTE": "00:00:03:15",
                "ShotSegment": {
                    "Index": 961,
                    "Confidence": 99.91637420654297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1692360,
                "EndTimestampMillis": 1693200,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:28:12:09",
                "EndTimecodeSMPTE": "00:28:13:05",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 962,
                    "Confidence": 99.91637420654297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1693240,
                "EndTimestampMillis": 1696640,
                "DurationMillis": 3400,
                "StartTimecodeSMPTE": "00:28:13:06",
                "EndTimecodeSMPTE": "00:28:16:16",
                "DurationSMPTE": "00:00:03:10",
                "ShotSegment": {
                    "Index": 963,
                    "Confidence": 99.97306823730469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1696680,
                "EndTimestampMillis": 1700880,
                "DurationMillis": 4200,
                "StartTimecodeSMPTE": "00:28:16:17",
                "EndTimecodeSMPTE": "00:28:20:22",
                "DurationSMPTE": "00:00:04:05",
                "ShotSegment": {
                    "Index": 964,
                    "Confidence": 89.52099609375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1700960,
                "EndTimestampMillis": 1701840,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:28:20:24",
                "EndTimecodeSMPTE": "00:28:21:21",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 965,
                    "Confidence": 89.52099609375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1701880,
                "EndTimestampMillis": 1703760,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:28:21:22",
                "EndTimecodeSMPTE": "00:28:23:19",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 966,
                    "Confidence": 77.94908905029297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1703800,
                "EndTimestampMillis": 1705480,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:28:23:20",
                "EndTimecodeSMPTE": "00:28:25:12",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 967,
                    "Confidence": 77.94908905029297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1705520,
                "EndTimestampMillis": 1707320,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:28:25:13",
                "EndTimecodeSMPTE": "00:28:27:08",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 968,
                    "Confidence": 87.77180480957031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1707360,
                "EndTimestampMillis": 1708680,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:28:27:09",
                "EndTimecodeSMPTE": "00:28:28:17",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 969,
                    "Confidence": 87.77180480957031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1708720,
                "EndTimestampMillis": 1709960,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:28:28:18",
                "EndTimecodeSMPTE": "00:28:29:24",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 970,
                    "Confidence": 74.76944732666016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1710000,
                "EndTimestampMillis": 1712080,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:28:30:00",
                "EndTimecodeSMPTE": "00:28:32:02",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 971,
                    "Confidence": 74.76944732666016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1712120,
                "EndTimestampMillis": 1713040,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:28:32:03",
                "EndTimecodeSMPTE": "00:28:33:01",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 972,
                    "Confidence": 99.92823028564453
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1713080,
                "EndTimestampMillis": 1714200,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:28:33:02",
                "EndTimecodeSMPTE": "00:28:34:05",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 973,
                    "Confidence": 99.41724395751953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1714240,
                "EndTimestampMillis": 1715880,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:28:34:06",
                "EndTimecodeSMPTE": "00:28:35:22",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 974,
                    "Confidence": 99.41724395751953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1715920,
                "EndTimestampMillis": 1717000,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:28:35:23",
                "EndTimecodeSMPTE": "00:28:37:00",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 975,
                    "Confidence": 99.8569564819336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1717040,
                "EndTimestampMillis": 1717960,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:28:37:01",
                "EndTimecodeSMPTE": "00:28:37:24",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 976,
                    "Confidence": 99.83965301513672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1718000,
                "EndTimestampMillis": 1719040,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:28:38:00",
                "EndTimecodeSMPTE": "00:28:39:01",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 977,
                    "Confidence": 99.83965301513672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1719080,
                "EndTimestampMillis": 1720000,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:28:39:02",
                "EndTimecodeSMPTE": "00:28:40:00",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 978,
                    "Confidence": 99.81002807617188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1720040,
                "EndTimestampMillis": 1720880,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:28:40:01",
                "EndTimecodeSMPTE": "00:28:40:22",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 979,
                    "Confidence": 99.81002807617188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1720920,
                "EndTimestampMillis": 1722880,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:28:40:23",
                "EndTimecodeSMPTE": "00:28:42:22",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 980,
                    "Confidence": 99.90617370605469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1722920,
                "EndTimestampMillis": 1723960,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:28:42:23",
                "EndTimecodeSMPTE": "00:28:43:24",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 981,
                    "Confidence": 99.87632751464844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1724000,
                "EndTimestampMillis": 1725520,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:28:44:00",
                "EndTimecodeSMPTE": "00:28:45:13",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 982,
                    "Confidence": 99.73662567138672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1725560,
                "EndTimestampMillis": 1726880,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:28:45:14",
                "EndTimecodeSMPTE": "00:28:46:22",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 983,
                    "Confidence": 99.73662567138672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1726920,
                "EndTimestampMillis": 1728320,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:28:46:23",
                "EndTimecodeSMPTE": "00:28:48:08",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 984,
                    "Confidence": 99.8448257446289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1728360,
                "EndTimestampMillis": 1729960,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:28:48:09",
                "EndTimecodeSMPTE": "00:28:49:24",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 985,
                    "Confidence": 99.41902923583984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1730000,
                "EndTimestampMillis": 1731880,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:28:50:00",
                "EndTimecodeSMPTE": "00:28:51:22",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 986,
                    "Confidence": 98.5965805053711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1731920,
                "EndTimestampMillis": 1733600,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:28:51:23",
                "EndTimecodeSMPTE": "00:28:53:15",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 987,
                    "Confidence": 98.5965805053711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1733640,
                "EndTimestampMillis": 1735880,
                "DurationMillis": 2240,
                "StartTimecodeSMPTE": "00:28:53:16",
                "EndTimecodeSMPTE": "00:28:55:22",
                "DurationSMPTE": "00:00:02:06",
                "ShotSegment": {
                    "Index": 988,
                    "Confidence": 99.87879943847656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1735920,
                "EndTimestampMillis": 1737680,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:28:55:23",
                "EndTimecodeSMPTE": "00:28:57:17",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 989,
                    "Confidence": 99.92151641845703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1737720,
                "EndTimestampMillis": 1739720,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:28:57:18",
                "EndTimecodeSMPTE": "00:28:59:18",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 990,
                    "Confidence": 99.95281219482422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1739760,
                "EndTimestampMillis": 1741240,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:28:59:19",
                "EndTimecodeSMPTE": "00:29:01:06",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 991,
                    "Confidence": 99.64592742919922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1741280,
                "EndTimestampMillis": 1743720,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:29:01:07",
                "EndTimecodeSMPTE": "00:29:03:18",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 992,
                    "Confidence": 99.64592742919922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1743760,
                "EndTimestampMillis": 1745000,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:29:03:19",
                "EndTimecodeSMPTE": "00:29:05:00",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 993,
                    "Confidence": 99.91101837158203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1745040,
                "EndTimestampMillis": 1746480,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:29:05:01",
                "EndTimecodeSMPTE": "00:29:06:12",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 994,
                    "Confidence": 98.29913330078125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1746520,
                "EndTimestampMillis": 1747600,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:29:06:13",
                "EndTimecodeSMPTE": "00:29:07:15",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 995,
                    "Confidence": 98.29913330078125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1747640,
                "EndTimestampMillis": 1748880,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:29:07:16",
                "EndTimecodeSMPTE": "00:29:08:22",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 996,
                    "Confidence": 99.60057830810547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1748920,
                "EndTimestampMillis": 1749680,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:29:08:23",
                "EndTimecodeSMPTE": "00:29:09:17",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 997,
                    "Confidence": 99.97417449951172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1749720,
                "EndTimestampMillis": 1750560,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:29:09:18",
                "EndTimecodeSMPTE": "00:29:10:14",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 998,
                    "Confidence": 99.78214263916016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1750600,
                "EndTimestampMillis": 1751720,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:29:10:15",
                "EndTimecodeSMPTE": "00:29:11:18",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 999,
                    "Confidence": 99.78214263916016
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
    let shots_2 = {
        "JobStatus": "SUCCEEDED",
        "VideoMetadata": [
            {
                "Codec": "h264",
                "DurationMillis": 2478320,
                "Format": "QuickTime / MOV",
                "FrameRate": 25.0,
                "FrameHeight": 480,
                "FrameWidth": 854
            }
        ],
        "AudioMetadata": [
            {
                "Codec": "aac",
                "DurationMillis": 2478358,
                "SampleRate": 44100,
                "NumberOfChannels": 2
            }
        ],
        "Segments": [
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1751760,
                "EndTimestampMillis": 1766840,
                "DurationMillis": 15080,
                "StartTimecodeSMPTE": "00:29:11:19",
                "EndTimecodeSMPTE": "00:29:26:21",
                "DurationSMPTE": "00:00:15:02",
                "ShotSegment": {
                    "Index": 1000,
                    "Confidence": 99.8858871459961
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1766880,
                "EndTimestampMillis": 1768360,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:29:26:22",
                "EndTimecodeSMPTE": "00:29:28:09",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1001,
                    "Confidence": 99.9873275756836
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1768400,
                "EndTimestampMillis": 1769520,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:29:28:10",
                "EndTimecodeSMPTE": "00:29:29:13",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1002,
                    "Confidence": 99.98729705810547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1769560,
                "EndTimestampMillis": 1770520,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:29:29:14",
                "EndTimecodeSMPTE": "00:29:30:13",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 1003,
                    "Confidence": 99.63641357421875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1770560,
                "EndTimestampMillis": 1773120,
                "DurationMillis": 2560,
                "StartTimecodeSMPTE": "00:29:30:14",
                "EndTimecodeSMPTE": "00:29:33:03",
                "DurationSMPTE": "00:00:02:14",
                "ShotSegment": {
                    "Index": 1004,
                    "Confidence": 99.63641357421875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1773160,
                "EndTimestampMillis": 1774080,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:29:33:04",
                "EndTimecodeSMPTE": "00:29:34:02",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 1005,
                    "Confidence": 97.96976470947266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1774120,
                "EndTimestampMillis": 1775080,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:29:34:03",
                "EndTimecodeSMPTE": "00:29:35:02",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 1006,
                    "Confidence": 97.96976470947266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1775120,
                "EndTimestampMillis": 1777440,
                "DurationMillis": 2320,
                "StartTimecodeSMPTE": "00:29:35:03",
                "EndTimecodeSMPTE": "00:29:37:11",
                "DurationSMPTE": "00:00:02:08",
                "ShotSegment": {
                    "Index": 1007,
                    "Confidence": 99.88770294189453
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1777480,
                "EndTimestampMillis": 1778200,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:29:37:12",
                "EndTimecodeSMPTE": "00:29:38:05",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 1008,
                    "Confidence": 99.88333892822266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1778240,
                "EndTimestampMillis": 1779560,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:29:38:06",
                "EndTimecodeSMPTE": "00:29:39:14",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 1009,
                    "Confidence": 99.88333892822266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1779600,
                "EndTimestampMillis": 1781080,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:29:39:15",
                "EndTimecodeSMPTE": "00:29:41:02",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1010,
                    "Confidence": 99.92920684814453
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1781120,
                "EndTimestampMillis": 1782840,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:29:41:03",
                "EndTimecodeSMPTE": "00:29:42:21",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 1011,
                    "Confidence": 99.82325744628906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1782880,
                "EndTimestampMillis": 1784760,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:29:42:22",
                "EndTimecodeSMPTE": "00:29:44:19",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 1012,
                    "Confidence": 99.82325744628906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1784800,
                "EndTimestampMillis": 1786280,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:29:44:20",
                "EndTimecodeSMPTE": "00:29:46:07",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1013,
                    "Confidence": 99.76661682128906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1786320,
                "EndTimestampMillis": 1789520,
                "DurationMillis": 3200,
                "StartTimecodeSMPTE": "00:29:46:08",
                "EndTimecodeSMPTE": "00:29:49:13",
                "DurationSMPTE": "00:00:03:05",
                "ShotSegment": {
                    "Index": 1014,
                    "Confidence": 99.76661682128906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1789560,
                "EndTimestampMillis": 1790640,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:29:49:14",
                "EndTimecodeSMPTE": "00:29:50:16",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1015,
                    "Confidence": 86.64006805419922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1790680,
                "EndTimestampMillis": 1791560,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:29:50:17",
                "EndTimecodeSMPTE": "00:29:51:14",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1016,
                    "Confidence": 57.75628662109375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1791600,
                "EndTimestampMillis": 1792440,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:29:51:15",
                "EndTimecodeSMPTE": "00:29:52:11",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 1017,
                    "Confidence": 57.75628662109375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1792480,
                "EndTimestampMillis": 1793360,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:29:52:12",
                "EndTimecodeSMPTE": "00:29:53:09",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1018,
                    "Confidence": 58.27583312988281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1793400,
                "EndTimestampMillis": 1794120,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:29:53:10",
                "EndTimecodeSMPTE": "00:29:54:03",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 1019,
                    "Confidence": 77.40687561035156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1794160,
                "EndTimestampMillis": 1795120,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:29:54:04",
                "EndTimecodeSMPTE": "00:29:55:03",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 1020,
                    "Confidence": 99.94547271728516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1795160,
                "EndTimestampMillis": 1796000,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:29:55:04",
                "EndTimecodeSMPTE": "00:29:56:00",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 1021,
                    "Confidence": 99.76992797851562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1796040,
                "EndTimestampMillis": 1797000,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:29:56:01",
                "EndTimecodeSMPTE": "00:29:57:00",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 1022,
                    "Confidence": 97.90254974365234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1797040,
                "EndTimestampMillis": 1798400,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:29:57:01",
                "EndTimecodeSMPTE": "00:29:58:10",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1023,
                    "Confidence": 97.90254974365234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1798440,
                "EndTimestampMillis": 1799240,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:29:58:11",
                "EndTimecodeSMPTE": "00:29:59:06",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 1024,
                    "Confidence": 98.85635375976562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1799280,
                "EndTimestampMillis": 1800160,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:29:59:07",
                "EndTimecodeSMPTE": "00:30:00:04",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1025,
                    "Confidence": 99.19428253173828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1800200,
                "EndTimestampMillis": 1801320,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:30:00:05",
                "EndTimecodeSMPTE": "00:30:01:08",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1026,
                    "Confidence": 99.7568130493164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1801360,
                "EndTimestampMillis": 1802440,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:30:01:09",
                "EndTimecodeSMPTE": "00:30:02:11",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1027,
                    "Confidence": 99.94190216064453
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1802480,
                "EndTimestampMillis": 1804160,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:30:02:12",
                "EndTimecodeSMPTE": "00:30:04:04",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 1028,
                    "Confidence": 99.7626724243164
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1804200,
                "EndTimestampMillis": 1805840,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:30:04:05",
                "EndTimecodeSMPTE": "00:30:05:21",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 1029,
                    "Confidence": 85.33036804199219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1805920,
                "EndTimestampMillis": 1807160,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:30:05:23",
                "EndTimecodeSMPTE": "00:30:07:04",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1030,
                    "Confidence": 74.84268951416016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1807240,
                "EndTimestampMillis": 1809680,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:30:07:06",
                "EndTimecodeSMPTE": "00:30:09:17",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 1031,
                    "Confidence": 74.84268951416016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1809720,
                "EndTimestampMillis": 1811560,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:30:09:18",
                "EndTimecodeSMPTE": "00:30:11:14",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 1032,
                    "Confidence": 99.74052429199219
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1811600,
                "EndTimestampMillis": 1817000,
                "DurationMillis": 5400,
                "StartTimecodeSMPTE": "00:30:11:15",
                "EndTimecodeSMPTE": "00:30:17:00",
                "DurationSMPTE": "00:00:05:10",
                "ShotSegment": {
                    "Index": 1033,
                    "Confidence": 99.8061294555664
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1817040,
                "EndTimestampMillis": 1818520,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:30:17:01",
                "EndTimecodeSMPTE": "00:30:18:13",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1034,
                    "Confidence": 99.76683044433594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1818560,
                "EndTimestampMillis": 1819400,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:30:18:14",
                "EndTimecodeSMPTE": "00:30:19:10",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 1035,
                    "Confidence": 99.76683044433594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1819440,
                "EndTimestampMillis": 1820600,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:30:19:11",
                "EndTimecodeSMPTE": "00:30:20:15",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 1036,
                    "Confidence": 99.85611724853516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1820640,
                "EndTimestampMillis": 1822160,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:30:20:16",
                "EndTimecodeSMPTE": "00:30:22:04",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 1037,
                    "Confidence": 99.85611724853516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1822200,
                "EndTimestampMillis": 1824120,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:30:22:05",
                "EndTimecodeSMPTE": "00:30:24:03",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 1038,
                    "Confidence": 99.93663024902344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1824160,
                "EndTimestampMillis": 1825400,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:30:24:04",
                "EndTimecodeSMPTE": "00:30:25:10",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1039,
                    "Confidence": 99.74217987060547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1825440,
                "EndTimestampMillis": 1826880,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:30:25:11",
                "EndTimecodeSMPTE": "00:30:26:22",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1040,
                    "Confidence": 99.74217987060547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1826920,
                "EndTimestampMillis": 1828440,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:30:26:23",
                "EndTimecodeSMPTE": "00:30:28:11",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 1041,
                    "Confidence": 99.61927795410156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1828480,
                "EndTimestampMillis": 1829320,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:30:28:12",
                "EndTimecodeSMPTE": "00:30:29:08",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 1042,
                    "Confidence": 99.61927795410156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1829360,
                "EndTimestampMillis": 1830200,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:30:29:09",
                "EndTimecodeSMPTE": "00:30:30:05",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 1043,
                    "Confidence": 99.67572021484375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1830240,
                "EndTimestampMillis": 1831040,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:30:30:06",
                "EndTimecodeSMPTE": "00:30:31:01",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 1044,
                    "Confidence": 99.74102783203125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1831080,
                "EndTimestampMillis": 1832520,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:30:31:02",
                "EndTimecodeSMPTE": "00:30:32:13",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1045,
                    "Confidence": 99.74102783203125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1832560,
                "EndTimestampMillis": 1833640,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:30:32:14",
                "EndTimecodeSMPTE": "00:30:33:16",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1046,
                    "Confidence": 99.94491577148438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1833680,
                "EndTimestampMillis": 1834920,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:30:33:17",
                "EndTimecodeSMPTE": "00:30:34:23",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1047,
                    "Confidence": 99.7448501586914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1834960,
                "EndTimestampMillis": 1835640,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:30:34:24",
                "EndTimecodeSMPTE": "00:30:35:16",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 1048,
                    "Confidence": 99.7448501586914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1835680,
                "EndTimestampMillis": 1837360,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:30:35:17",
                "EndTimecodeSMPTE": "00:30:37:09",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 1049,
                    "Confidence": 99.81876373291016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1837400,
                "EndTimestampMillis": 1839160,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:30:37:10",
                "EndTimecodeSMPTE": "00:30:39:04",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 1050,
                    "Confidence": 99.77165985107422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1839200,
                "EndTimestampMillis": 1840600,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:30:39:05",
                "EndTimecodeSMPTE": "00:30:40:15",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1051,
                    "Confidence": 99.77165985107422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1840640,
                "EndTimestampMillis": 1842120,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:30:40:16",
                "EndTimecodeSMPTE": "00:30:42:03",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1052,
                    "Confidence": 99.72762298583984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1842160,
                "EndTimestampMillis": 1843240,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:30:42:04",
                "EndTimecodeSMPTE": "00:30:43:06",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1053,
                    "Confidence": 99.72762298583984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1843280,
                "EndTimestampMillis": 1844720,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:30:43:07",
                "EndTimecodeSMPTE": "00:30:44:18",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1054,
                    "Confidence": 99.91963195800781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1844760,
                "EndTimestampMillis": 1845880,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:30:44:19",
                "EndTimecodeSMPTE": "00:30:45:22",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1055,
                    "Confidence": 99.86209869384766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1845920,
                "EndTimestampMillis": 1846960,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:30:45:23",
                "EndTimecodeSMPTE": "00:30:46:24",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 1056,
                    "Confidence": 99.84919738769531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1847000,
                "EndTimestampMillis": 1848040,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:30:47:00",
                "EndTimecodeSMPTE": "00:30:48:01",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 1057,
                    "Confidence": 99.84856414794922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1848080,
                "EndTimestampMillis": 1849120,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:30:48:02",
                "EndTimecodeSMPTE": "00:30:49:03",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 1058,
                    "Confidence": 99.84856414794922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1849160,
                "EndTimestampMillis": 1850120,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:30:49:04",
                "EndTimecodeSMPTE": "00:30:50:03",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 1059,
                    "Confidence": 99.91631317138672
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1850160,
                "EndTimestampMillis": 1850920,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:30:50:04",
                "EndTimecodeSMPTE": "00:30:50:23",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 1060,
                    "Confidence": 99.82599639892578
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1850960,
                "EndTimestampMillis": 1852200,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:30:50:24",
                "EndTimecodeSMPTE": "00:30:52:05",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1061,
                    "Confidence": 99.58605194091797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1852240,
                "EndTimestampMillis": 1853360,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:30:52:06",
                "EndTimecodeSMPTE": "00:30:53:09",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1062,
                    "Confidence": 99.58605194091797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1853400,
                "EndTimestampMillis": 1854560,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:30:53:10",
                "EndTimecodeSMPTE": "00:30:54:14",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 1063,
                    "Confidence": 99.93830871582031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1854600,
                "EndTimestampMillis": 1855480,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:30:54:15",
                "EndTimecodeSMPTE": "00:30:55:12",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1064,
                    "Confidence": 99.7936782836914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1855520,
                "EndTimestampMillis": 1856400,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:30:55:13",
                "EndTimecodeSMPTE": "00:30:56:10",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1065,
                    "Confidence": 99.7936782836914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1856440,
                "EndTimestampMillis": 1857680,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:30:56:11",
                "EndTimecodeSMPTE": "00:30:57:17",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1066,
                    "Confidence": 99.83806610107422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1857720,
                "EndTimestampMillis": 1859520,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:30:57:18",
                "EndTimecodeSMPTE": "00:30:59:13",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 1067,
                    "Confidence": 99.85681915283203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1859560,
                "EndTimestampMillis": 1860520,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:30:59:14",
                "EndTimecodeSMPTE": "00:31:00:13",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 1068,
                    "Confidence": 99.98319244384766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1860560,
                "EndTimestampMillis": 1861600,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:31:00:14",
                "EndTimecodeSMPTE": "00:31:01:15",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 1069,
                    "Confidence": 99.9095687866211
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1861640,
                "EndTimestampMillis": 1864160,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:31:01:16",
                "EndTimecodeSMPTE": "00:31:04:04",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 1070,
                    "Confidence": 99.87091064453125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1864200,
                "EndTimestampMillis": 1864960,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:31:04:05",
                "EndTimecodeSMPTE": "00:31:04:24",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 1071,
                    "Confidence": 99.58160400390625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1865000,
                "EndTimestampMillis": 1866160,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:31:05:00",
                "EndTimecodeSMPTE": "00:31:06:04",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 1072,
                    "Confidence": 98.92250061035156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1866200,
                "EndTimestampMillis": 1867440,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:31:06:05",
                "EndTimecodeSMPTE": "00:31:07:11",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1073,
                    "Confidence": 98.92250061035156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1867480,
                "EndTimestampMillis": 1868240,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:31:07:12",
                "EndTimecodeSMPTE": "00:31:08:06",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 1074,
                    "Confidence": 99.44940185546875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1868280,
                "EndTimestampMillis": 1869560,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:31:08:07",
                "EndTimecodeSMPTE": "00:31:09:14",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 1075,
                    "Confidence": 99.51539611816406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1869600,
                "EndTimestampMillis": 1870200,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:31:09:15",
                "EndTimecodeSMPTE": "00:31:10:05",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 1076,
                    "Confidence": 99.38571166992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1870240,
                "EndTimestampMillis": 1871040,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:31:10:06",
                "EndTimecodeSMPTE": "00:31:11:01",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 1077,
                    "Confidence": 99.38571166992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1871080,
                "EndTimestampMillis": 1871720,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:31:11:02",
                "EndTimecodeSMPTE": "00:31:11:18",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 1078,
                    "Confidence": 99.81273651123047
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1871760,
                "EndTimestampMillis": 1872760,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:31:11:19",
                "EndTimecodeSMPTE": "00:31:12:19",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 1079,
                    "Confidence": 99.92513275146484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1872800,
                "EndTimestampMillis": 1873720,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:31:12:20",
                "EndTimecodeSMPTE": "00:31:13:18",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 1080,
                    "Confidence": 99.85115051269531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1873760,
                "EndTimestampMillis": 1874560,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:31:13:19",
                "EndTimecodeSMPTE": "00:31:14:14",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 1081,
                    "Confidence": 99.85115051269531
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1874600,
                "EndTimestampMillis": 1875680,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:31:14:15",
                "EndTimecodeSMPTE": "00:31:15:17",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1082,
                    "Confidence": 99.25110626220703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1875720,
                "EndTimestampMillis": 1876160,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:31:15:18",
                "EndTimecodeSMPTE": "00:31:16:04",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 1083,
                    "Confidence": 93.3408432006836
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1876200,
                "EndTimestampMillis": 1877160,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:31:16:05",
                "EndTimecodeSMPTE": "00:31:17:04",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 1084,
                    "Confidence": 93.3408432006836
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1877200,
                "EndTimestampMillis": 1878480,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:31:17:05",
                "EndTimecodeSMPTE": "00:31:18:12",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 1085,
                    "Confidence": 99.7344741821289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1878520,
                "EndTimestampMillis": 1879360,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:31:18:13",
                "EndTimecodeSMPTE": "00:31:19:09",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 1086,
                    "Confidence": 99.46342468261719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1879400,
                "EndTimestampMillis": 1880240,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:31:19:10",
                "EndTimecodeSMPTE": "00:31:20:06",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 1087,
                    "Confidence": 99.46342468261719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1880280,
                "EndTimestampMillis": 1881080,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:31:20:07",
                "EndTimecodeSMPTE": "00:31:21:02",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 1088,
                    "Confidence": 99.58855438232422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1881120,
                "EndTimestampMillis": 1883600,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:31:21:03",
                "EndTimecodeSMPTE": "00:31:23:15",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 1089,
                    "Confidence": 99.58855438232422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1883640,
                "EndTimestampMillis": 1884680,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:31:23:16",
                "EndTimecodeSMPTE": "00:31:24:17",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 1090,
                    "Confidence": 99.83655548095703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1884720,
                "EndTimestampMillis": 1885640,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:31:24:18",
                "EndTimecodeSMPTE": "00:31:25:16",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 1091,
                    "Confidence": 99.83655548095703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1885680,
                "EndTimestampMillis": 1890000,
                "DurationMillis": 4320,
                "StartTimecodeSMPTE": "00:31:25:17",
                "EndTimecodeSMPTE": "00:31:30:00",
                "DurationSMPTE": "00:00:04:08",
                "ShotSegment": {
                    "Index": 1092,
                    "Confidence": 99.83138275146484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1890040,
                "EndTimestampMillis": 1893040,
                "DurationMillis": 3000,
                "StartTimecodeSMPTE": "00:31:30:01",
                "EndTimecodeSMPTE": "00:31:33:01",
                "DurationSMPTE": "00:00:03:00",
                "ShotSegment": {
                    "Index": 1093,
                    "Confidence": 99.83138275146484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1893080,
                "EndTimestampMillis": 1894080,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:31:33:02",
                "EndTimecodeSMPTE": "00:31:34:02",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 1094,
                    "Confidence": 99.89415740966797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1894120,
                "EndTimestampMillis": 1895440,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:31:34:03",
                "EndTimecodeSMPTE": "00:31:35:11",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 1095,
                    "Confidence": 99.8335189819336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1895480,
                "EndTimestampMillis": 1896920,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:31:35:12",
                "EndTimecodeSMPTE": "00:31:36:23",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1096,
                    "Confidence": 99.8335189819336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1896960,
                "EndTimestampMillis": 1898720,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:31:36:24",
                "EndTimecodeSMPTE": "00:31:38:18",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 1097,
                    "Confidence": 99.74620056152344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1898760,
                "EndTimestampMillis": 1901040,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:31:38:19",
                "EndTimecodeSMPTE": "00:31:41:01",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 1098,
                    "Confidence": 99.23250579833984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1901080,
                "EndTimestampMillis": 1903640,
                "DurationMillis": 2560,
                "StartTimecodeSMPTE": "00:31:41:02",
                "EndTimecodeSMPTE": "00:31:43:16",
                "DurationSMPTE": "00:00:02:14",
                "ShotSegment": {
                    "Index": 1099,
                    "Confidence": 99.23250579833984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1903680,
                "EndTimestampMillis": 1905360,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:31:43:17",
                "EndTimecodeSMPTE": "00:31:45:09",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 1100,
                    "Confidence": 99.80500793457031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1905400,
                "EndTimestampMillis": 1907240,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:31:45:10",
                "EndTimecodeSMPTE": "00:31:47:06",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 1101,
                    "Confidence": 98.95991516113281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1907280,
                "EndTimestampMillis": 1908400,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:31:47:07",
                "EndTimecodeSMPTE": "00:31:48:10",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1102,
                    "Confidence": 98.95991516113281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1908440,
                "EndTimestampMillis": 1909960,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:31:48:11",
                "EndTimecodeSMPTE": "00:31:49:24",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 1103,
                    "Confidence": 99.36097717285156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1910000,
                "EndTimestampMillis": 1912400,
                "DurationMillis": 2400,
                "StartTimecodeSMPTE": "00:31:50:00",
                "EndTimecodeSMPTE": "00:31:52:10",
                "DurationSMPTE": "00:00:02:10",
                "ShotSegment": {
                    "Index": 1104,
                    "Confidence": 99.36097717285156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1912440,
                "EndTimestampMillis": 1915680,
                "DurationMillis": 3240,
                "StartTimecodeSMPTE": "00:31:52:11",
                "EndTimecodeSMPTE": "00:31:55:17",
                "DurationSMPTE": "00:00:03:06",
                "ShotSegment": {
                    "Index": 1105,
                    "Confidence": 99.74864196777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1915720,
                "EndTimestampMillis": 1918680,
                "DurationMillis": 2960,
                "StartTimecodeSMPTE": "00:31:55:18",
                "EndTimecodeSMPTE": "00:31:58:17",
                "DurationSMPTE": "00:00:02:24",
                "ShotSegment": {
                    "Index": 1106,
                    "Confidence": 99.8333511352539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1918720,
                "EndTimestampMillis": 1920160,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:31:58:18",
                "EndTimecodeSMPTE": "00:32:00:04",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1107,
                    "Confidence": 99.8367691040039
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1920200,
                "EndTimestampMillis": 1921440,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:32:00:05",
                "EndTimecodeSMPTE": "00:32:01:11",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1108,
                    "Confidence": 99.8367691040039
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1921480,
                "EndTimestampMillis": 1922920,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:32:01:12",
                "EndTimecodeSMPTE": "00:32:02:23",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1109,
                    "Confidence": 99.89714813232422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1922960,
                "EndTimestampMillis": 1924360,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:32:02:24",
                "EndTimecodeSMPTE": "00:32:04:09",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1110,
                    "Confidence": 99.89714813232422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1924400,
                "EndTimestampMillis": 1926440,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:32:04:10",
                "EndTimecodeSMPTE": "00:32:06:11",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 1111,
                    "Confidence": 99.84808349609375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1926480,
                "EndTimestampMillis": 1927960,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:32:06:12",
                "EndTimecodeSMPTE": "00:32:07:24",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1112,
                    "Confidence": 99.84808349609375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1928000,
                "EndTimestampMillis": 1929000,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:32:08:00",
                "EndTimecodeSMPTE": "00:32:09:00",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 1113,
                    "Confidence": 99.85549926757812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1929040,
                "EndTimestampMillis": 1931880,
                "DurationMillis": 2840,
                "StartTimecodeSMPTE": "00:32:09:01",
                "EndTimecodeSMPTE": "00:32:11:22",
                "DurationSMPTE": "00:00:02:21",
                "ShotSegment": {
                    "Index": 1114,
                    "Confidence": 99.9411392211914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1931920,
                "EndTimestampMillis": 1933560,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:32:11:23",
                "EndTimecodeSMPTE": "00:32:13:14",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 1115,
                    "Confidence": 99.93807983398438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1933600,
                "EndTimestampMillis": 1934640,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:32:13:15",
                "EndTimecodeSMPTE": "00:32:14:16",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 1116,
                    "Confidence": 99.93569946289062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1934680,
                "EndTimestampMillis": 1935880,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:32:14:17",
                "EndTimecodeSMPTE": "00:32:15:22",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 1117,
                    "Confidence": 99.57421875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1935920,
                "EndTimestampMillis": 1937840,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:32:15:23",
                "EndTimecodeSMPTE": "00:32:17:21",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 1118,
                    "Confidence": 99.57421875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1937880,
                "EndTimestampMillis": 1940160,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:32:17:22",
                "EndTimecodeSMPTE": "00:32:20:04",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 1119,
                    "Confidence": 99.81849670410156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1940200,
                "EndTimestampMillis": 1941560,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:32:20:05",
                "EndTimecodeSMPTE": "00:32:21:14",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1120,
                    "Confidence": 99.81849670410156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1941600,
                "EndTimestampMillis": 1942800,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:32:21:15",
                "EndTimecodeSMPTE": "00:32:22:20",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 1121,
                    "Confidence": 99.95203399658203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1942840,
                "EndTimestampMillis": 1944200,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:32:22:21",
                "EndTimecodeSMPTE": "00:32:24:05",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1122,
                    "Confidence": 99.95203399658203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1944240,
                "EndTimestampMillis": 1945480,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:32:24:06",
                "EndTimecodeSMPTE": "00:32:25:12",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1123,
                    "Confidence": 99.87693786621094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1945520,
                "EndTimestampMillis": 1949040,
                "DurationMillis": 3520,
                "StartTimecodeSMPTE": "00:32:25:13",
                "EndTimecodeSMPTE": "00:32:29:01",
                "DurationSMPTE": "00:00:03:13",
                "ShotSegment": {
                    "Index": 1124,
                    "Confidence": 99.74333953857422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1949080,
                "EndTimestampMillis": 1951160,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:32:29:02",
                "EndTimecodeSMPTE": "00:32:31:04",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 1125,
                    "Confidence": 99.74333953857422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1951200,
                "EndTimestampMillis": 1952720,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:32:31:05",
                "EndTimecodeSMPTE": "00:32:32:18",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 1126,
                    "Confidence": 99.81023406982422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1952760,
                "EndTimestampMillis": 1954120,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:32:32:19",
                "EndTimecodeSMPTE": "00:32:34:03",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1127,
                    "Confidence": 99.81023406982422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1954160,
                "EndTimestampMillis": 1955480,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:32:34:04",
                "EndTimecodeSMPTE": "00:32:35:12",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 1128,
                    "Confidence": 99.6500015258789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1955520,
                "EndTimestampMillis": 1957520,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:32:35:13",
                "EndTimecodeSMPTE": "00:32:37:13",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 1129,
                    "Confidence": 99.07146453857422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1957560,
                "EndTimestampMillis": 1959120,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:32:37:14",
                "EndTimecodeSMPTE": "00:32:39:03",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 1130,
                    "Confidence": 99.07146453857422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1959160,
                "EndTimestampMillis": 1960280,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:32:39:04",
                "EndTimecodeSMPTE": "00:32:40:07",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1131,
                    "Confidence": 99.69009399414062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1960320,
                "EndTimestampMillis": 1961720,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:32:40:08",
                "EndTimecodeSMPTE": "00:32:41:18",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1132,
                    "Confidence": 99.69009399414062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1961760,
                "EndTimestampMillis": 1962920,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:32:41:19",
                "EndTimecodeSMPTE": "00:32:42:23",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 1133,
                    "Confidence": 99.92985534667969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1962960,
                "EndTimestampMillis": 1965960,
                "DurationMillis": 3000,
                "StartTimecodeSMPTE": "00:32:42:24",
                "EndTimecodeSMPTE": "00:32:45:24",
                "DurationSMPTE": "00:00:03:00",
                "ShotSegment": {
                    "Index": 1134,
                    "Confidence": 99.70069122314453
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1966000,
                "EndTimestampMillis": 1967320,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:32:46:00",
                "EndTimecodeSMPTE": "00:32:47:08",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 1135,
                    "Confidence": 99.65618896484375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1967360,
                "EndTimestampMillis": 1970000,
                "DurationMillis": 2640,
                "StartTimecodeSMPTE": "00:32:47:09",
                "EndTimecodeSMPTE": "00:32:50:00",
                "DurationSMPTE": "00:00:02:16",
                "ShotSegment": {
                    "Index": 1136,
                    "Confidence": 99.58615112304688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1970040,
                "EndTimestampMillis": 1974480,
                "DurationMillis": 4440,
                "StartTimecodeSMPTE": "00:32:50:01",
                "EndTimecodeSMPTE": "00:32:54:12",
                "DurationSMPTE": "00:00:04:11",
                "ShotSegment": {
                    "Index": 1137,
                    "Confidence": 99.58615112304688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1974520,
                "EndTimestampMillis": 1976960,
                "DurationMillis": 2440,
                "StartTimecodeSMPTE": "00:32:54:13",
                "EndTimecodeSMPTE": "00:32:56:24",
                "DurationSMPTE": "00:00:02:11",
                "ShotSegment": {
                    "Index": 1138,
                    "Confidence": 99.94702911376953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1977000,
                "EndTimestampMillis": 1978960,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:32:57:00",
                "EndTimecodeSMPTE": "00:32:58:24",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1139,
                    "Confidence": 99.92051696777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1979000,
                "EndTimestampMillis": 1981640,
                "DurationMillis": 2640,
                "StartTimecodeSMPTE": "00:32:59:00",
                "EndTimecodeSMPTE": "00:33:01:16",
                "DurationSMPTE": "00:00:02:16",
                "ShotSegment": {
                    "Index": 1140,
                    "Confidence": 99.92051696777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1981680,
                "EndTimestampMillis": 1984360,
                "DurationMillis": 2680,
                "StartTimecodeSMPTE": "00:33:01:17",
                "EndTimecodeSMPTE": "00:33:04:09",
                "DurationSMPTE": "00:00:02:17",
                "ShotSegment": {
                    "Index": 1141,
                    "Confidence": 52.0410270690918
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1984400,
                "EndTimestampMillis": 1985160,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:33:04:10",
                "EndTimecodeSMPTE": "00:33:05:04",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 1142,
                    "Confidence": 52.0410270690918
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1985200,
                "EndTimestampMillis": 1986200,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:33:05:05",
                "EndTimecodeSMPTE": "00:33:06:05",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 1143,
                    "Confidence": 96.80523681640625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1986240,
                "EndTimestampMillis": 1987000,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:33:06:06",
                "EndTimecodeSMPTE": "00:33:07:00",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 1144,
                    "Confidence": 92.11663055419922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1987040,
                "EndTimestampMillis": 1987480,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:33:07:01",
                "EndTimecodeSMPTE": "00:33:07:12",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 1145,
                    "Confidence": 92.11663055419922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1987520,
                "EndTimestampMillis": 1988760,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:33:07:13",
                "EndTimecodeSMPTE": "00:33:08:19",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1146,
                    "Confidence": 99.39743041992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1988800,
                "EndTimestampMillis": 1989920,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:33:08:20",
                "EndTimecodeSMPTE": "00:33:09:23",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1147,
                    "Confidence": 75.03309631347656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1990000,
                "EndTimestampMillis": 1990440,
                "DurationMillis": 440,
                "StartTimecodeSMPTE": "00:33:10:00",
                "EndTimecodeSMPTE": "00:33:10:11",
                "DurationSMPTE": "00:00:00:11",
                "ShotSegment": {
                    "Index": 1148,
                    "Confidence": 55.09267044067383
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1990480,
                "EndTimestampMillis": 1992760,
                "DurationMillis": 2280,
                "StartTimecodeSMPTE": "00:33:10:12",
                "EndTimecodeSMPTE": "00:33:12:19",
                "DurationSMPTE": "00:00:02:07",
                "ShotSegment": {
                    "Index": 1149,
                    "Confidence": 55.09267044067383
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1992800,
                "EndTimestampMillis": 1993880,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:33:12:20",
                "EndTimecodeSMPTE": "00:33:13:22",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1150,
                    "Confidence": 99.94513702392578
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1993920,
                "EndTimestampMillis": 1994920,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:33:13:23",
                "EndTimecodeSMPTE": "00:33:14:23",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 1151,
                    "Confidence": 99.7704086303711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1994960,
                "EndTimestampMillis": 1995880,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:33:14:24",
                "EndTimecodeSMPTE": "00:33:15:22",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 1152,
                    "Confidence": 99.7704086303711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1995920,
                "EndTimestampMillis": 1996640,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:33:15:23",
                "EndTimecodeSMPTE": "00:33:16:16",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 1153,
                    "Confidence": 99.78021240234375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1996680,
                "EndTimestampMillis": 1997800,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:33:16:17",
                "EndTimecodeSMPTE": "00:33:17:20",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1154,
                    "Confidence": 99.78047180175781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1997840,
                "EndTimestampMillis": 1998960,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:33:17:21",
                "EndTimecodeSMPTE": "00:33:18:24",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1155,
                    "Confidence": 99.78047180175781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 1999000,
                "EndTimestampMillis": 2000720,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:33:19:00",
                "EndTimecodeSMPTE": "00:33:20:18",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 1156,
                    "Confidence": 99.83848571777344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2000760,
                "EndTimestampMillis": 2002280,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:33:20:19",
                "EndTimecodeSMPTE": "00:33:22:07",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 1157,
                    "Confidence": 99.75131225585938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2002320,
                "EndTimestampMillis": 2003800,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:33:22:08",
                "EndTimecodeSMPTE": "00:33:23:20",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1158,
                    "Confidence": 99.7122802734375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2003840,
                "EndTimestampMillis": 2008240,
                "DurationMillis": 4400,
                "StartTimecodeSMPTE": "00:33:23:21",
                "EndTimecodeSMPTE": "00:33:28:06",
                "DurationSMPTE": "00:00:04:10",
                "ShotSegment": {
                    "Index": 1159,
                    "Confidence": 99.7122802734375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2008280,
                "EndTimestampMillis": 2012680,
                "DurationMillis": 4400,
                "StartTimecodeSMPTE": "00:33:28:07",
                "EndTimecodeSMPTE": "00:33:32:17",
                "DurationSMPTE": "00:00:04:10",
                "ShotSegment": {
                    "Index": 1160,
                    "Confidence": 99.90302276611328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2012720,
                "EndTimestampMillis": 2019040,
                "DurationMillis": 6320,
                "StartTimecodeSMPTE": "00:33:32:18",
                "EndTimecodeSMPTE": "00:33:39:01",
                "DurationSMPTE": "00:00:06:08",
                "ShotSegment": {
                    "Index": 1161,
                    "Confidence": 99.8267822265625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2019080,
                "EndTimestampMillis": 2022080,
                "DurationMillis": 3000,
                "StartTimecodeSMPTE": "00:33:39:02",
                "EndTimecodeSMPTE": "00:33:42:02",
                "DurationSMPTE": "00:00:03:00",
                "ShotSegment": {
                    "Index": 1162,
                    "Confidence": 99.8267822265625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2022120,
                "EndTimestampMillis": 2024960,
                "DurationMillis": 2840,
                "StartTimecodeSMPTE": "00:33:42:03",
                "EndTimecodeSMPTE": "00:33:44:24",
                "DurationSMPTE": "00:00:02:21",
                "ShotSegment": {
                    "Index": 1163,
                    "Confidence": 99.74827575683594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2025000,
                "EndTimestampMillis": 2028280,
                "DurationMillis": 3280,
                "StartTimecodeSMPTE": "00:33:45:00",
                "EndTimecodeSMPTE": "00:33:48:07",
                "DurationSMPTE": "00:00:03:07",
                "ShotSegment": {
                    "Index": 1164,
                    "Confidence": 99.74827575683594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2028320,
                "EndTimestampMillis": 2029720,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:33:48:08",
                "EndTimecodeSMPTE": "00:33:49:18",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1165,
                    "Confidence": 99.77164459228516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2029760,
                "EndTimestampMillis": 2031160,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:33:49:19",
                "EndTimecodeSMPTE": "00:33:51:04",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1166,
                    "Confidence": 99.76223754882812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2031200,
                "EndTimestampMillis": 2034560,
                "DurationMillis": 3360,
                "StartTimecodeSMPTE": "00:33:51:05",
                "EndTimecodeSMPTE": "00:33:54:14",
                "DurationSMPTE": "00:00:03:09",
                "ShotSegment": {
                    "Index": 1167,
                    "Confidence": 99.76223754882812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2034600,
                "EndTimestampMillis": 2035840,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:33:54:15",
                "EndTimecodeSMPTE": "00:33:55:21",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1168,
                    "Confidence": 99.8241195678711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2035880,
                "EndTimestampMillis": 2037160,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:33:55:22",
                "EndTimecodeSMPTE": "00:33:57:04",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 1169,
                    "Confidence": 99.77073669433594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2037200,
                "EndTimestampMillis": 2038320,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:33:57:05",
                "EndTimecodeSMPTE": "00:33:58:08",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1170,
                    "Confidence": 99.77073669433594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2038360,
                "EndTimestampMillis": 2039480,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:33:58:09",
                "EndTimecodeSMPTE": "00:33:59:12",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1171,
                    "Confidence": 99.83515930175781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2039520,
                "EndTimestampMillis": 2040080,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:33:59:13",
                "EndTimecodeSMPTE": "00:34:00:02",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 1172,
                    "Confidence": 99.83515930175781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2040120,
                "EndTimestampMillis": 2041240,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:34:00:03",
                "EndTimecodeSMPTE": "00:34:01:06",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1173,
                    "Confidence": 99.87765502929688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2041280,
                "EndTimestampMillis": 2042280,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:34:01:07",
                "EndTimecodeSMPTE": "00:34:02:07",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 1174,
                    "Confidence": 99.66763305664062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2042320,
                "EndTimestampMillis": 2042880,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:34:02:08",
                "EndTimecodeSMPTE": "00:34:02:22",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 1175,
                    "Confidence": 99.53276824951172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2042920,
                "EndTimestampMillis": 2043720,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:34:02:23",
                "EndTimecodeSMPTE": "00:34:03:18",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 1176,
                    "Confidence": 99.53276824951172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2043760,
                "EndTimestampMillis": 2048240,
                "DurationMillis": 4480,
                "StartTimecodeSMPTE": "00:34:03:19",
                "EndTimecodeSMPTE": "00:34:08:06",
                "DurationSMPTE": "00:00:04:12",
                "ShotSegment": {
                    "Index": 1177,
                    "Confidence": 99.90052795410156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2048280,
                "EndTimestampMillis": 2050120,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:34:08:07",
                "EndTimecodeSMPTE": "00:34:10:03",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 1178,
                    "Confidence": 99.90415954589844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2050160,
                "EndTimestampMillis": 2051520,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:34:10:04",
                "EndTimecodeSMPTE": "00:34:11:13",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1179,
                    "Confidence": 99.78890228271484
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2051560,
                "EndTimestampMillis": 2052640,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:34:11:14",
                "EndTimecodeSMPTE": "00:34:12:16",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1180,
                    "Confidence": 99.21359252929688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2052680,
                "EndTimestampMillis": 2054680,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:34:12:17",
                "EndTimecodeSMPTE": "00:34:14:17",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 1181,
                    "Confidence": 99.21359252929688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2054720,
                "EndTimestampMillis": 2055720,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:34:14:18",
                "EndTimecodeSMPTE": "00:34:15:18",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 1182,
                    "Confidence": 99.85786437988281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2055760,
                "EndTimestampMillis": 2056880,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:34:15:19",
                "EndTimecodeSMPTE": "00:34:16:22",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1183,
                    "Confidence": 99.85786437988281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2056920,
                "EndTimestampMillis": 2058440,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:34:16:23",
                "EndTimecodeSMPTE": "00:34:18:11",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 1184,
                    "Confidence": 99.91909790039062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2058480,
                "EndTimestampMillis": 2062840,
                "DurationMillis": 4360,
                "StartTimecodeSMPTE": "00:34:18:12",
                "EndTimecodeSMPTE": "00:34:22:21",
                "DurationSMPTE": "00:00:04:09",
                "ShotSegment": {
                    "Index": 1185,
                    "Confidence": 99.91909790039062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2062880,
                "EndTimestampMillis": 2065200,
                "DurationMillis": 2320,
                "StartTimecodeSMPTE": "00:34:22:22",
                "EndTimecodeSMPTE": "00:34:25:05",
                "DurationSMPTE": "00:00:02:08",
                "ShotSegment": {
                    "Index": 1186,
                    "Confidence": 99.92253112792969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2065240,
                "EndTimestampMillis": 2068080,
                "DurationMillis": 2840,
                "StartTimecodeSMPTE": "00:34:25:06",
                "EndTimecodeSMPTE": "00:34:28:02",
                "DurationSMPTE": "00:00:02:21",
                "ShotSegment": {
                    "Index": 1187,
                    "Confidence": 99.75563049316406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2068120,
                "EndTimestampMillis": 2070320,
                "DurationMillis": 2200,
                "StartTimecodeSMPTE": "00:34:28:03",
                "EndTimecodeSMPTE": "00:34:30:08",
                "DurationSMPTE": "00:00:02:05",
                "ShotSegment": {
                    "Index": 1188,
                    "Confidence": 99.75563049316406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2070360,
                "EndTimestampMillis": 2074160,
                "DurationMillis": 3800,
                "StartTimecodeSMPTE": "00:34:30:09",
                "EndTimecodeSMPTE": "00:34:34:04",
                "DurationSMPTE": "00:00:03:20",
                "ShotSegment": {
                    "Index": 1189,
                    "Confidence": 99.9622573852539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2074200,
                "EndTimestampMillis": 2075520,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:34:34:05",
                "EndTimecodeSMPTE": "00:34:35:13",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 1190,
                    "Confidence": 99.89946746826172
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2075560,
                "EndTimestampMillis": 2076440,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:34:35:14",
                "EndTimecodeSMPTE": "00:34:36:11",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1191,
                    "Confidence": 99.84927368164062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2076480,
                "EndTimestampMillis": 2077840,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:34:36:12",
                "EndTimecodeSMPTE": "00:34:37:21",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1192,
                    "Confidence": 99.70738220214844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2077880,
                "EndTimestampMillis": 2079120,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:34:37:22",
                "EndTimecodeSMPTE": "00:34:39:03",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1193,
                    "Confidence": 99.54989624023438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2079160,
                "EndTimestampMillis": 2080320,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:34:39:04",
                "EndTimecodeSMPTE": "00:34:40:08",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 1194,
                    "Confidence": 99.54989624023438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2080360,
                "EndTimestampMillis": 2081840,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:34:40:09",
                "EndTimecodeSMPTE": "00:34:41:21",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1195,
                    "Confidence": 99.6434555053711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2081880,
                "EndTimestampMillis": 2085400,
                "DurationMillis": 3520,
                "StartTimecodeSMPTE": "00:34:41:22",
                "EndTimecodeSMPTE": "00:34:45:10",
                "DurationSMPTE": "00:00:03:13",
                "ShotSegment": {
                    "Index": 1196,
                    "Confidence": 99.8967056274414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2085440,
                "EndTimestampMillis": 2087080,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:34:45:11",
                "EndTimecodeSMPTE": "00:34:47:02",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 1197,
                    "Confidence": 99.8967056274414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2087120,
                "EndTimestampMillis": 2089880,
                "DurationMillis": 2760,
                "StartTimecodeSMPTE": "00:34:47:03",
                "EndTimecodeSMPTE": "00:34:49:22",
                "DurationSMPTE": "00:00:02:19",
                "ShotSegment": {
                    "Index": 1198,
                    "Confidence": 99.84427642822266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2089920,
                "EndTimestampMillis": 2091800,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:34:49:23",
                "EndTimecodeSMPTE": "00:34:51:20",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 1199,
                    "Confidence": 99.71822357177734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2091840,
                "EndTimestampMillis": 2094160,
                "DurationMillis": 2320,
                "StartTimecodeSMPTE": "00:34:51:21",
                "EndTimecodeSMPTE": "00:34:54:04",
                "DurationSMPTE": "00:00:02:08",
                "ShotSegment": {
                    "Index": 1200,
                    "Confidence": 99.71822357177734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2094200,
                "EndTimestampMillis": 2096240,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:34:54:05",
                "EndTimecodeSMPTE": "00:34:56:06",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 1201,
                    "Confidence": 99.91121673583984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2096280,
                "EndTimestampMillis": 2097760,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:34:56:07",
                "EndTimecodeSMPTE": "00:34:57:19",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1202,
                    "Confidence": 88.3688735961914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2097800,
                "EndTimestampMillis": 2099160,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:34:57:20",
                "EndTimecodeSMPTE": "00:34:59:04",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1203,
                    "Confidence": 88.3688735961914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2099200,
                "EndTimestampMillis": 2099960,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:34:59:05",
                "EndTimecodeSMPTE": "00:34:59:24",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 1204,
                    "Confidence": 99.6038589477539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2100000,
                "EndTimestampMillis": 2104120,
                "DurationMillis": 4120,
                "StartTimecodeSMPTE": "00:35:00:00",
                "EndTimecodeSMPTE": "00:35:04:03",
                "DurationSMPTE": "00:00:04:03",
                "ShotSegment": {
                    "Index": 1205,
                    "Confidence": 93.03411102294922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2104200,
                "EndTimestampMillis": 2105680,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:35:04:05",
                "EndTimecodeSMPTE": "00:35:05:17",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1206,
                    "Confidence": 93.03411102294922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2105720,
                "EndTimestampMillis": 2106680,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:35:05:18",
                "EndTimecodeSMPTE": "00:35:06:17",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 1207,
                    "Confidence": 97.83895874023438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2106720,
                "EndTimestampMillis": 2108640,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:35:06:18",
                "EndTimecodeSMPTE": "00:35:08:16",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 1208,
                    "Confidence": 98.65811157226562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2108680,
                "EndTimestampMillis": 2110480,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:35:08:17",
                "EndTimecodeSMPTE": "00:35:10:12",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 1209,
                    "Confidence": 99.49223327636719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2110520,
                "EndTimestampMillis": 2110840,
                "DurationMillis": 320,
                "StartTimecodeSMPTE": "00:35:10:13",
                "EndTimecodeSMPTE": "00:35:10:21",
                "DurationSMPTE": "00:00:00:08",
                "ShotSegment": {
                    "Index": 1210,
                    "Confidence": 94.38968658447266
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2110880,
                "EndTimestampMillis": 2112760,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:35:10:22",
                "EndTimecodeSMPTE": "00:35:12:19",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 1211,
                    "Confidence": 87.85846710205078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2112800,
                "EndTimestampMillis": 2113080,
                "DurationMillis": 280,
                "StartTimecodeSMPTE": "00:35:12:20",
                "EndTimecodeSMPTE": "00:35:13:02",
                "DurationSMPTE": "00:00:00:07",
                "ShotSegment": {
                    "Index": 1212,
                    "Confidence": 87.85846710205078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2113120,
                "EndTimestampMillis": 2115360,
                "DurationMillis": 2240,
                "StartTimecodeSMPTE": "00:35:13:03",
                "EndTimecodeSMPTE": "00:35:15:09",
                "DurationSMPTE": "00:00:02:06",
                "ShotSegment": {
                    "Index": 1213,
                    "Confidence": 95.77981567382812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2115400,
                "EndTimestampMillis": 2117200,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:35:15:10",
                "EndTimecodeSMPTE": "00:35:17:05",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 1214,
                    "Confidence": 95.77981567382812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2117240,
                "EndTimestampMillis": 2120160,
                "DurationMillis": 2920,
                "StartTimecodeSMPTE": "00:35:17:06",
                "EndTimecodeSMPTE": "00:35:20:04",
                "DurationSMPTE": "00:00:02:23",
                "ShotSegment": {
                    "Index": 1215,
                    "Confidence": 99.8492431640625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2120200,
                "EndTimestampMillis": 2121960,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:35:20:05",
                "EndTimecodeSMPTE": "00:35:21:24",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 1216,
                    "Confidence": 99.55731964111328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2122000,
                "EndTimestampMillis": 2123720,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:35:22:00",
                "EndTimecodeSMPTE": "00:35:23:18",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 1217,
                    "Confidence": 99.48285675048828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2123760,
                "EndTimestampMillis": 2129880,
                "DurationMillis": 6120,
                "StartTimecodeSMPTE": "00:35:23:19",
                "EndTimecodeSMPTE": "00:35:29:22",
                "DurationSMPTE": "00:00:06:03",
                "ShotSegment": {
                    "Index": 1218,
                    "Confidence": 99.48285675048828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2129920,
                "EndTimestampMillis": 2131280,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:35:29:23",
                "EndTimecodeSMPTE": "00:35:31:07",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1219,
                    "Confidence": 99.96189880371094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2131320,
                "EndTimestampMillis": 2132200,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:35:31:08",
                "EndTimecodeSMPTE": "00:35:32:05",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1220,
                    "Confidence": 99.94445037841797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2132240,
                "EndTimestampMillis": 2133360,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:35:32:06",
                "EndTimecodeSMPTE": "00:35:33:09",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1221,
                    "Confidence": 99.94445037841797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2133400,
                "EndTimestampMillis": 2134800,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:35:33:10",
                "EndTimecodeSMPTE": "00:35:34:20",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1222,
                    "Confidence": 99.94721221923828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2134840,
                "EndTimestampMillis": 2136680,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:35:34:21",
                "EndTimecodeSMPTE": "00:35:36:17",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 1223,
                    "Confidence": 99.97154998779297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2136720,
                "EndTimestampMillis": 2137800,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:35:36:18",
                "EndTimecodeSMPTE": "00:35:37:20",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1224,
                    "Confidence": 99.97154998779297
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2137840,
                "EndTimestampMillis": 2139320,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:35:37:21",
                "EndTimecodeSMPTE": "00:35:39:08",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1225,
                    "Confidence": 99.95380401611328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2139360,
                "EndTimestampMillis": 2141720,
                "DurationMillis": 2360,
                "StartTimecodeSMPTE": "00:35:39:09",
                "EndTimecodeSMPTE": "00:35:41:18",
                "DurationSMPTE": "00:00:02:09",
                "ShotSegment": {
                    "Index": 1226,
                    "Confidence": 99.95380401611328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2141760,
                "EndTimestampMillis": 2143160,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:35:41:19",
                "EndTimecodeSMPTE": "00:35:43:04",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1227,
                    "Confidence": 99.99446105957031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2143200,
                "EndTimestampMillis": 2144600,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:35:43:05",
                "EndTimecodeSMPTE": "00:35:44:15",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1228,
                    "Confidence": 99.93606567382812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2144640,
                "EndTimestampMillis": 2146280,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:35:44:16",
                "EndTimecodeSMPTE": "00:35:46:07",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 1229,
                    "Confidence": 99.93606567382812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2146320,
                "EndTimestampMillis": 2148720,
                "DurationMillis": 2400,
                "StartTimecodeSMPTE": "00:35:46:08",
                "EndTimecodeSMPTE": "00:35:48:18",
                "DurationSMPTE": "00:00:02:10",
                "ShotSegment": {
                    "Index": 1230,
                    "Confidence": 99.97020721435547
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2148760,
                "EndTimestampMillis": 2150040,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:35:48:19",
                "EndTimecodeSMPTE": "00:35:50:01",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 1231,
                    "Confidence": 99.9526138305664
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2150080,
                "EndTimestampMillis": 2151840,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:35:50:02",
                "EndTimecodeSMPTE": "00:35:51:21",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 1232,
                    "Confidence": 99.9526138305664
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2151880,
                "EndTimestampMillis": 2155120,
                "DurationMillis": 3240,
                "StartTimecodeSMPTE": "00:35:51:22",
                "EndTimecodeSMPTE": "00:35:55:03",
                "DurationSMPTE": "00:00:03:06",
                "ShotSegment": {
                    "Index": 1233,
                    "Confidence": 99.9566421508789
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2155160,
                "EndTimestampMillis": 2157960,
                "DurationMillis": 2800,
                "StartTimecodeSMPTE": "00:35:55:04",
                "EndTimecodeSMPTE": "00:35:57:24",
                "DurationSMPTE": "00:00:02:20",
                "ShotSegment": {
                    "Index": 1234,
                    "Confidence": 99.97400665283203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2158000,
                "EndTimestampMillis": 2159720,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:35:58:00",
                "EndTimecodeSMPTE": "00:35:59:18",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 1235,
                    "Confidence": 99.98058319091797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2159760,
                "EndTimestampMillis": 2162600,
                "DurationMillis": 2840,
                "StartTimecodeSMPTE": "00:35:59:19",
                "EndTimecodeSMPTE": "00:36:02:15",
                "DurationSMPTE": "00:00:02:21",
                "ShotSegment": {
                    "Index": 1236,
                    "Confidence": 99.96284484863281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2162640,
                "EndTimestampMillis": 2163560,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:36:02:16",
                "EndTimecodeSMPTE": "00:36:03:14",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 1237,
                    "Confidence": 99.96284484863281
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2163600,
                "EndTimestampMillis": 2164440,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:36:03:15",
                "EndTimecodeSMPTE": "00:36:04:11",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 1238,
                    "Confidence": 99.92987060546875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2164480,
                "EndTimestampMillis": 2165040,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:36:04:12",
                "EndTimecodeSMPTE": "00:36:05:01",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 1239,
                    "Confidence": 99.91040802001953
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2165080,
                "EndTimestampMillis": 2165680,
                "DurationMillis": 600,
                "StartTimecodeSMPTE": "00:36:05:02",
                "EndTimecodeSMPTE": "00:36:05:17",
                "DurationSMPTE": "00:00:00:15",
                "ShotSegment": {
                    "Index": 1240,
                    "Confidence": 99.7500991821289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2165720,
                "EndTimestampMillis": 2166480,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:36:05:18",
                "EndTimecodeSMPTE": "00:36:06:12",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 1241,
                    "Confidence": 99.7500991821289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2166520,
                "EndTimestampMillis": 2168240,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:36:06:13",
                "EndTimecodeSMPTE": "00:36:08:06",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 1242,
                    "Confidence": 99.9717025756836
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2168280,
                "EndTimestampMillis": 2169720,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:36:08:07",
                "EndTimecodeSMPTE": "00:36:09:18",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1243,
                    "Confidence": 99.9690933227539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2169760,
                "EndTimestampMillis": 2171080,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:36:09:19",
                "EndTimecodeSMPTE": "00:36:11:02",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 1244,
                    "Confidence": 99.9690933227539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2171120,
                "EndTimestampMillis": 2173840,
                "DurationMillis": 2720,
                "StartTimecodeSMPTE": "00:36:11:03",
                "EndTimecodeSMPTE": "00:36:13:21",
                "DurationSMPTE": "00:00:02:18",
                "ShotSegment": {
                    "Index": 1245,
                    "Confidence": 99.99224853515625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2173880,
                "EndTimestampMillis": 2175760,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:36:13:22",
                "EndTimecodeSMPTE": "00:36:15:19",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 1246,
                    "Confidence": 99.96849060058594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2175800,
                "EndTimestampMillis": 2177920,
                "DurationMillis": 2120,
                "StartTimecodeSMPTE": "00:36:15:20",
                "EndTimecodeSMPTE": "00:36:17:23",
                "DurationSMPTE": "00:00:02:03",
                "ShotSegment": {
                    "Index": 1247,
                    "Confidence": 99.96849060058594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2177960,
                "EndTimestampMillis": 2179640,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:36:17:24",
                "EndTimecodeSMPTE": "00:36:19:16",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 1248,
                    "Confidence": 99.9573745727539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2179680,
                "EndTimestampMillis": 2181000,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:36:19:17",
                "EndTimecodeSMPTE": "00:36:21:00",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 1249,
                    "Confidence": 99.9573745727539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2181040,
                "EndTimestampMillis": 2182800,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:36:21:01",
                "EndTimecodeSMPTE": "00:36:22:20",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 1250,
                    "Confidence": 99.97455596923828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2182840,
                "EndTimestampMillis": 2185360,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:36:22:21",
                "EndTimecodeSMPTE": "00:36:25:09",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 1251,
                    "Confidence": 99.98260498046875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2185400,
                "EndTimestampMillis": 2187920,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:36:25:10",
                "EndTimecodeSMPTE": "00:36:27:23",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 1252,
                    "Confidence": 99.98458862304688
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2187960,
                "EndTimestampMillis": 2191520,
                "DurationMillis": 3560,
                "StartTimecodeSMPTE": "00:36:27:24",
                "EndTimecodeSMPTE": "00:36:31:13",
                "DurationSMPTE": "00:00:03:14",
                "ShotSegment": {
                    "Index": 1253,
                    "Confidence": 99.96330261230469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2191560,
                "EndTimestampMillis": 2194720,
                "DurationMillis": 3160,
                "StartTimecodeSMPTE": "00:36:31:14",
                "EndTimecodeSMPTE": "00:36:34:18",
                "DurationSMPTE": "00:00:03:04",
                "ShotSegment": {
                    "Index": 1254,
                    "Confidence": 99.95013427734375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2194760,
                "EndTimestampMillis": 2197000,
                "DurationMillis": 2240,
                "StartTimecodeSMPTE": "00:36:34:19",
                "EndTimecodeSMPTE": "00:36:37:00",
                "DurationSMPTE": "00:00:02:06",
                "ShotSegment": {
                    "Index": 1255,
                    "Confidence": 99.95013427734375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2197040,
                "EndTimestampMillis": 2199240,
                "DurationMillis": 2200,
                "StartTimecodeSMPTE": "00:36:37:01",
                "EndTimecodeSMPTE": "00:36:39:06",
                "DurationSMPTE": "00:00:02:05",
                "ShotSegment": {
                    "Index": 1256,
                    "Confidence": 99.98871612548828
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2199280,
                "EndTimestampMillis": 2201400,
                "DurationMillis": 2120,
                "StartTimecodeSMPTE": "00:36:39:07",
                "EndTimecodeSMPTE": "00:36:41:10",
                "DurationSMPTE": "00:00:02:03",
                "ShotSegment": {
                    "Index": 1257,
                    "Confidence": 99.96337890625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2201440,
                "EndTimestampMillis": 2204360,
                "DurationMillis": 2920,
                "StartTimecodeSMPTE": "00:36:41:11",
                "EndTimecodeSMPTE": "00:36:44:09",
                "DurationSMPTE": "00:00:02:23",
                "ShotSegment": {
                    "Index": 1258,
                    "Confidence": 99.96337890625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2204400,
                "EndTimestampMillis": 2205840,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:36:44:10",
                "EndTimecodeSMPTE": "00:36:45:21",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1259,
                    "Confidence": 99.99122619628906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2205880,
                "EndTimestampMillis": 2207920,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:36:45:22",
                "EndTimecodeSMPTE": "00:36:47:23",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 1260,
                    "Confidence": 99.96094512939453
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2207960,
                "EndTimestampMillis": 2209680,
                "DurationMillis": 1720,
                "StartTimecodeSMPTE": "00:36:47:24",
                "EndTimecodeSMPTE": "00:36:49:17",
                "DurationSMPTE": "00:00:01:18",
                "ShotSegment": {
                    "Index": 1261,
                    "Confidence": 99.96094512939453
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2209720,
                "EndTimestampMillis": 2211600,
                "DurationMillis": 1880,
                "StartTimecodeSMPTE": "00:36:49:18",
                "EndTimecodeSMPTE": "00:36:51:15",
                "DurationSMPTE": "00:00:01:22",
                "ShotSegment": {
                    "Index": 1262,
                    "Confidence": 99.92743682861328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2211640,
                "EndTimestampMillis": 2213480,
                "DurationMillis": 1840,
                "StartTimecodeSMPTE": "00:36:51:16",
                "EndTimecodeSMPTE": "00:36:53:12",
                "DurationSMPTE": "00:00:01:21",
                "ShotSegment": {
                    "Index": 1263,
                    "Confidence": 99.92743682861328
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2213520,
                "EndTimestampMillis": 2214920,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:36:53:13",
                "EndTimecodeSMPTE": "00:36:54:23",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1264,
                    "Confidence": 99.9357681274414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2214960,
                "EndTimestampMillis": 2216360,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:36:54:24",
                "EndTimecodeSMPTE": "00:36:56:09",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1265,
                    "Confidence": 99.9194564819336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2216400,
                "EndTimestampMillis": 2218640,
                "DurationMillis": 2240,
                "StartTimecodeSMPTE": "00:36:56:10",
                "EndTimecodeSMPTE": "00:36:58:16",
                "DurationSMPTE": "00:00:02:06",
                "ShotSegment": {
                    "Index": 1266,
                    "Confidence": 99.9194564819336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2218680,
                "EndTimestampMillis": 2220640,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:36:58:17",
                "EndTimecodeSMPTE": "00:37:00:16",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1267,
                    "Confidence": 99.69890594482422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2220680,
                "EndTimestampMillis": 2226640,
                "DurationMillis": 5960,
                "StartTimecodeSMPTE": "00:37:00:17",
                "EndTimecodeSMPTE": "00:37:06:16",
                "DurationSMPTE": "00:00:05:24",
                "ShotSegment": {
                    "Index": 1268,
                    "Confidence": 99.69890594482422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2226680,
                "EndTimestampMillis": 2227760,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:37:06:17",
                "EndTimecodeSMPTE": "00:37:07:19",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1269,
                    "Confidence": 99.90589141845703
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2227800,
                "EndTimestampMillis": 2230720,
                "DurationMillis": 2920,
                "StartTimecodeSMPTE": "00:37:07:20",
                "EndTimecodeSMPTE": "00:37:10:18",
                "DurationSMPTE": "00:00:02:23",
                "ShotSegment": {
                    "Index": 1270,
                    "Confidence": 99.92643737792969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2230760,
                "EndTimestampMillis": 2231920,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:37:10:19",
                "EndTimecodeSMPTE": "00:37:11:23",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 1271,
                    "Confidence": 99.92143249511719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2231960,
                "EndTimestampMillis": 2235680,
                "DurationMillis": 3720,
                "StartTimecodeSMPTE": "00:37:11:24",
                "EndTimecodeSMPTE": "00:37:15:17",
                "DurationSMPTE": "00:00:03:18",
                "ShotSegment": {
                    "Index": 1272,
                    "Confidence": 99.92143249511719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2235720,
                "EndTimestampMillis": 2237800,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:37:15:18",
                "EndTimecodeSMPTE": "00:37:17:20",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 1273,
                    "Confidence": 99.94761657714844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2237840,
                "EndTimestampMillis": 2239960,
                "DurationMillis": 2120,
                "StartTimecodeSMPTE": "00:37:17:21",
                "EndTimecodeSMPTE": "00:37:19:24",
                "DurationSMPTE": "00:00:02:03",
                "ShotSegment": {
                    "Index": 1274,
                    "Confidence": 99.96968841552734
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2240000,
                "EndTimestampMillis": 2242520,
                "DurationMillis": 2520,
                "StartTimecodeSMPTE": "00:37:20:00",
                "EndTimecodeSMPTE": "00:37:22:13",
                "DurationSMPTE": "00:00:02:13",
                "ShotSegment": {
                    "Index": 1275,
                    "Confidence": 99.95884704589844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2242560,
                "EndTimestampMillis": 2245040,
                "DurationMillis": 2480,
                "StartTimecodeSMPTE": "00:37:22:14",
                "EndTimecodeSMPTE": "00:37:25:01",
                "DurationSMPTE": "00:00:02:12",
                "ShotSegment": {
                    "Index": 1276,
                    "Confidence": 99.95884704589844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2245080,
                "EndTimestampMillis": 2246560,
                "DurationMillis": 1480,
                "StartTimecodeSMPTE": "00:37:25:02",
                "EndTimecodeSMPTE": "00:37:26:14",
                "DurationSMPTE": "00:00:01:12",
                "ShotSegment": {
                    "Index": 1277,
                    "Confidence": 99.96392822265625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2246600,
                "EndTimestampMillis": 2248280,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:37:26:15",
                "EndTimecodeSMPTE": "00:37:28:07",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 1278,
                    "Confidence": 99.96662902832031
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2248320,
                "EndTimestampMillis": 2250000,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:37:28:08",
                "EndTimecodeSMPTE": "00:37:30:00",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 1279,
                    "Confidence": 99.97178649902344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2250040,
                "EndTimestampMillis": 2253680,
                "DurationMillis": 3640,
                "StartTimecodeSMPTE": "00:37:30:01",
                "EndTimecodeSMPTE": "00:37:33:17",
                "DurationSMPTE": "00:00:03:16",
                "ShotSegment": {
                    "Index": 1280,
                    "Confidence": 99.98465728759766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2253720,
                "EndTimestampMillis": 2255080,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:37:33:18",
                "EndTimecodeSMPTE": "00:37:35:02",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1281,
                    "Confidence": 99.98304748535156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2255120,
                "EndTimestampMillis": 2257040,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:37:35:03",
                "EndTimecodeSMPTE": "00:37:37:01",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 1282,
                    "Confidence": 99.98304748535156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2257080,
                "EndTimestampMillis": 2258320,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:37:37:02",
                "EndTimecodeSMPTE": "00:37:38:08",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1283,
                    "Confidence": 99.98270416259766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2258360,
                "EndTimestampMillis": 2260040,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:37:38:09",
                "EndTimecodeSMPTE": "00:37:40:01",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 1284,
                    "Confidence": 99.98270416259766
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2260080,
                "EndTimestampMillis": 2262080,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:37:40:02",
                "EndTimecodeSMPTE": "00:37:42:02",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 1285,
                    "Confidence": 99.98253631591797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2262120,
                "EndTimestampMillis": 2264360,
                "DurationMillis": 2240,
                "StartTimecodeSMPTE": "00:37:42:03",
                "EndTimecodeSMPTE": "00:37:44:09",
                "DurationSMPTE": "00:00:02:06",
                "ShotSegment": {
                    "Index": 1286,
                    "Confidence": 99.98253631591797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2264400,
                "EndTimestampMillis": 2267000,
                "DurationMillis": 2600,
                "StartTimecodeSMPTE": "00:37:44:10",
                "EndTimecodeSMPTE": "00:37:47:00",
                "DurationSMPTE": "00:00:02:15",
                "ShotSegment": {
                    "Index": 1287,
                    "Confidence": 99.98673248291016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2267040,
                "EndTimestampMillis": 2268560,
                "DurationMillis": 1520,
                "StartTimecodeSMPTE": "00:37:47:01",
                "EndTimecodeSMPTE": "00:37:48:14",
                "DurationSMPTE": "00:00:01:13",
                "ShotSegment": {
                    "Index": 1288,
                    "Confidence": 99.98673248291016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2268600,
                "EndTimestampMillis": 2270040,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:37:48:15",
                "EndTimecodeSMPTE": "00:37:50:01",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1289,
                    "Confidence": 99.96699523925781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2270080,
                "EndTimestampMillis": 2272720,
                "DurationMillis": 2640,
                "StartTimecodeSMPTE": "00:37:50:02",
                "EndTimecodeSMPTE": "00:37:52:18",
                "DurationSMPTE": "00:00:02:16",
                "ShotSegment": {
                    "Index": 1290,
                    "Confidence": 99.96699523925781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2272760,
                "EndTimestampMillis": 2273560,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:37:52:19",
                "EndTimecodeSMPTE": "00:37:53:14",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 1291,
                    "Confidence": 99.97938537597656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2273600,
                "EndTimestampMillis": 2274280,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:37:53:15",
                "EndTimecodeSMPTE": "00:37:54:07",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 1292,
                    "Confidence": 99.98426055908203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2274320,
                "EndTimestampMillis": 2275280,
                "DurationMillis": 960,
                "StartTimecodeSMPTE": "00:37:54:08",
                "EndTimecodeSMPTE": "00:37:55:07",
                "DurationSMPTE": "00:00:00:24",
                "ShotSegment": {
                    "Index": 1293,
                    "Confidence": 99.9948501586914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2275320,
                "EndTimestampMillis": 2277000,
                "DurationMillis": 1680,
                "StartTimecodeSMPTE": "00:37:55:08",
                "EndTimecodeSMPTE": "00:37:57:00",
                "DurationSMPTE": "00:00:01:17",
                "ShotSegment": {
                    "Index": 1294,
                    "Confidence": 99.98674774169922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2277040,
                "EndTimestampMillis": 2279160,
                "DurationMillis": 2120,
                "StartTimecodeSMPTE": "00:37:57:01",
                "EndTimecodeSMPTE": "00:37:59:04",
                "DurationSMPTE": "00:00:02:03",
                "ShotSegment": {
                    "Index": 1295,
                    "Confidence": 99.9802017211914
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2279200,
                "EndTimestampMillis": 2279960,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:37:59:05",
                "EndTimecodeSMPTE": "00:37:59:24",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 1296,
                    "Confidence": 99.9574203491211
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2280000,
                "EndTimestampMillis": 2281040,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:38:00:00",
                "EndTimecodeSMPTE": "00:38:01:01",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 1297,
                    "Confidence": 99.9574203491211
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2281080,
                "EndTimestampMillis": 2282480,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:38:01:02",
                "EndTimecodeSMPTE": "00:38:02:12",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1298,
                    "Confidence": 99.97413635253906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2282520,
                "EndTimestampMillis": 2283680,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:38:02:13",
                "EndTimecodeSMPTE": "00:38:03:17",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 1299,
                    "Confidence": 99.9749755859375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2283720,
                "EndTimestampMillis": 2285080,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:38:03:18",
                "EndTimecodeSMPTE": "00:38:05:02",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1300,
                    "Confidence": 99.98109436035156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2285120,
                "EndTimestampMillis": 2286240,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:38:05:03",
                "EndTimecodeSMPTE": "00:38:06:06",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1301,
                    "Confidence": 99.98390197753906
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2286280,
                "EndTimestampMillis": 2287400,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:38:06:07",
                "EndTimecodeSMPTE": "00:38:07:10",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1302,
                    "Confidence": 99.98528289794922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2287440,
                "EndTimestampMillis": 2289080,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:38:07:11",
                "EndTimecodeSMPTE": "00:38:09:02",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 1303,
                    "Confidence": 99.9825210571289
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2289120,
                "EndTimestampMillis": 2289920,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:38:09:03",
                "EndTimecodeSMPTE": "00:38:09:23",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 1304,
                    "Confidence": 99.96432495117188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2289960,
                "EndTimestampMillis": 2291240,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:38:09:24",
                "EndTimecodeSMPTE": "00:38:11:06",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 1305,
                    "Confidence": 99.96432495117188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2291280,
                "EndTimestampMillis": 2292440,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:38:11:07",
                "EndTimecodeSMPTE": "00:38:12:11",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 1306,
                    "Confidence": 99.9913330078125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2292480,
                "EndTimestampMillis": 2293320,
                "DurationMillis": 840,
                "StartTimecodeSMPTE": "00:38:12:12",
                "EndTimecodeSMPTE": "00:38:13:08",
                "DurationSMPTE": "00:00:00:21",
                "ShotSegment": {
                    "Index": 1307,
                    "Confidence": 99.98858642578125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2293360,
                "EndTimestampMillis": 2294640,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:38:13:09",
                "EndTimecodeSMPTE": "00:38:14:16",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 1308,
                    "Confidence": 99.98302459716797
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2294680,
                "EndTimestampMillis": 2299520,
                "DurationMillis": 4840,
                "StartTimecodeSMPTE": "00:38:14:17",
                "EndTimecodeSMPTE": "00:38:19:13",
                "DurationSMPTE": "00:00:04:21",
                "ShotSegment": {
                    "Index": 1309,
                    "Confidence": 99.96673583984375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2299560,
                "EndTimestampMillis": 2300880,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:38:19:14",
                "EndTimecodeSMPTE": "00:38:20:22",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 1310,
                    "Confidence": 99.96673583984375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2300920,
                "EndTimestampMillis": 2303640,
                "DurationMillis": 2720,
                "StartTimecodeSMPTE": "00:38:20:23",
                "EndTimecodeSMPTE": "00:38:23:16",
                "DurationSMPTE": "00:00:02:18",
                "ShotSegment": {
                    "Index": 1311,
                    "Confidence": 99.9672622680664
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2303680,
                "EndTimestampMillis": 2305600,
                "DurationMillis": 1920,
                "StartTimecodeSMPTE": "00:38:23:17",
                "EndTimecodeSMPTE": "00:38:25:15",
                "DurationSMPTE": "00:00:01:23",
                "ShotSegment": {
                    "Index": 1312,
                    "Confidence": 99.95449829101562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2305640,
                "EndTimestampMillis": 2306880,
                "DurationMillis": 1240,
                "StartTimecodeSMPTE": "00:38:25:16",
                "EndTimecodeSMPTE": "00:38:26:22",
                "DurationSMPTE": "00:00:01:06",
                "ShotSegment": {
                    "Index": 1313,
                    "Confidence": 99.95449829101562
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2306920,
                "EndTimestampMillis": 2308080,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:38:26:23",
                "EndTimecodeSMPTE": "00:38:28:02",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 1314,
                    "Confidence": 99.9600830078125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2308120,
                "EndTimestampMillis": 2309920,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:38:28:03",
                "EndTimecodeSMPTE": "00:38:29:23",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 1315,
                    "Confidence": 99.9744644165039
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2309960,
                "EndTimestampMillis": 2311600,
                "DurationMillis": 1640,
                "StartTimecodeSMPTE": "00:38:29:24",
                "EndTimecodeSMPTE": "00:38:31:15",
                "DurationSMPTE": "00:00:01:16",
                "ShotSegment": {
                    "Index": 1316,
                    "Confidence": 99.34285736083984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2311640,
                "EndTimestampMillis": 2313240,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:38:31:16",
                "EndTimecodeSMPTE": "00:38:33:06",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 1317,
                    "Confidence": 99.34285736083984
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2313280,
                "EndTimestampMillis": 2315960,
                "DurationMillis": 2680,
                "StartTimecodeSMPTE": "00:38:33:07",
                "EndTimecodeSMPTE": "00:38:35:24",
                "DurationSMPTE": "00:00:02:17",
                "ShotSegment": {
                    "Index": 1318,
                    "Confidence": 99.86658477783203
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2316000,
                "EndTimestampMillis": 2317760,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:38:36:00",
                "EndTimecodeSMPTE": "00:38:37:19",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 1319,
                    "Confidence": 99.97982788085938
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2317800,
                "EndTimestampMillis": 2319120,
                "DurationMillis": 1320,
                "StartTimecodeSMPTE": "00:38:37:20",
                "EndTimecodeSMPTE": "00:38:39:03",
                "DurationSMPTE": "00:00:01:08",
                "ShotSegment": {
                    "Index": 1320,
                    "Confidence": 99.97067260742188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2319160,
                "EndTimestampMillis": 2323200,
                "DurationMillis": 4040,
                "StartTimecodeSMPTE": "00:38:39:04",
                "EndTimecodeSMPTE": "00:38:43:05",
                "DurationSMPTE": "00:00:04:01",
                "ShotSegment": {
                    "Index": 1321,
                    "Confidence": 99.97067260742188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2323240,
                "EndTimestampMillis": 2326840,
                "DurationMillis": 3600,
                "StartTimecodeSMPTE": "00:38:43:06",
                "EndTimecodeSMPTE": "00:38:46:21",
                "DurationSMPTE": "00:00:03:15",
                "ShotSegment": {
                    "Index": 1322,
                    "Confidence": 99.98116302490234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2326880,
                "EndTimestampMillis": 2328040,
                "DurationMillis": 1160,
                "StartTimecodeSMPTE": "00:38:46:22",
                "EndTimecodeSMPTE": "00:38:48:01",
                "DurationSMPTE": "00:00:01:04",
                "ShotSegment": {
                    "Index": 1323,
                    "Confidence": 99.970458984375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2328080,
                "EndTimestampMillis": 2329120,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:38:48:02",
                "EndTimecodeSMPTE": "00:38:49:03",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 1324,
                    "Confidence": 99.970458984375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2329160,
                "EndTimestampMillis": 2330920,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:38:49:04",
                "EndTimecodeSMPTE": "00:38:50:23",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 1325,
                    "Confidence": 99.99441528320312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2330960,
                "EndTimestampMillis": 2331960,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:38:50:24",
                "EndTimecodeSMPTE": "00:38:51:24",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 1326,
                    "Confidence": 99.99136352539062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2332000,
                "EndTimestampMillis": 2335000,
                "DurationMillis": 3000,
                "StartTimecodeSMPTE": "00:38:52:00",
                "EndTimecodeSMPTE": "00:38:55:00",
                "DurationSMPTE": "00:00:03:00",
                "ShotSegment": {
                    "Index": 1327,
                    "Confidence": 99.98336791992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2335040,
                "EndTimestampMillis": 2337120,
                "DurationMillis": 2080,
                "StartTimecodeSMPTE": "00:38:55:01",
                "EndTimecodeSMPTE": "00:38:57:03",
                "DurationSMPTE": "00:00:02:02",
                "ShotSegment": {
                    "Index": 1328,
                    "Confidence": 99.98336791992188
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2337160,
                "EndTimestampMillis": 2338600,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:38:57:04",
                "EndTimecodeSMPTE": "00:38:58:15",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1329,
                    "Confidence": 99.95071411132812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2338640,
                "EndTimestampMillis": 2339920,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:38:58:16",
                "EndTimecodeSMPTE": "00:38:59:23",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 1330,
                    "Confidence": 99.95071411132812
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2339960,
                "EndTimestampMillis": 2340880,
                "DurationMillis": 920,
                "StartTimecodeSMPTE": "00:38:59:24",
                "EndTimecodeSMPTE": "00:39:00:22",
                "DurationSMPTE": "00:00:00:23",
                "ShotSegment": {
                    "Index": 1331,
                    "Confidence": 99.96211242675781
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2340920,
                "EndTimestampMillis": 2344280,
                "DurationMillis": 3360,
                "StartTimecodeSMPTE": "00:39:00:23",
                "EndTimecodeSMPTE": "00:39:04:07",
                "DurationSMPTE": "00:00:03:09",
                "ShotSegment": {
                    "Index": 1332,
                    "Confidence": 99.9787368774414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2344320,
                "EndTimestampMillis": 2346080,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:39:04:08",
                "EndTimecodeSMPTE": "00:39:06:02",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 1333,
                    "Confidence": 99.95465087890625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2346120,
                "EndTimestampMillis": 2347680,
                "DurationMillis": 1560,
                "StartTimecodeSMPTE": "00:39:06:03",
                "EndTimecodeSMPTE": "00:39:07:17",
                "DurationSMPTE": "00:00:01:14",
                "ShotSegment": {
                    "Index": 1334,
                    "Confidence": 99.95465087890625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2347720,
                "EndTimestampMillis": 2349320,
                "DurationMillis": 1600,
                "StartTimecodeSMPTE": "00:39:07:18",
                "EndTimecodeSMPTE": "00:39:09:08",
                "DurationSMPTE": "00:00:01:15",
                "ShotSegment": {
                    "Index": 1335,
                    "Confidence": 99.9700698852539
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2349360,
                "EndTimestampMillis": 2351120,
                "DurationMillis": 1760,
                "StartTimecodeSMPTE": "00:39:09:09",
                "EndTimecodeSMPTE": "00:39:11:03",
                "DurationSMPTE": "00:00:01:19",
                "ShotSegment": {
                    "Index": 1336,
                    "Confidence": 99.97174835205078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2351160,
                "EndTimestampMillis": 2356880,
                "DurationMillis": 5720,
                "StartTimecodeSMPTE": "00:39:11:04",
                "EndTimecodeSMPTE": "00:39:16:22",
                "DurationSMPTE": "00:00:05:18",
                "ShotSegment": {
                    "Index": 1337,
                    "Confidence": 99.96112060546875
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2356920,
                "EndTimestampMillis": 2360440,
                "DurationMillis": 3520,
                "StartTimecodeSMPTE": "00:39:16:23",
                "EndTimecodeSMPTE": "00:39:20:11",
                "DurationSMPTE": "00:00:03:13",
                "ShotSegment": {
                    "Index": 1338,
                    "Confidence": 99.8812255859375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2360480,
                "EndTimestampMillis": 2362680,
                "DurationMillis": 2200,
                "StartTimecodeSMPTE": "00:39:20:12",
                "EndTimecodeSMPTE": "00:39:22:17",
                "DurationSMPTE": "00:00:02:05",
                "ShotSegment": {
                    "Index": 1339,
                    "Confidence": 99.8812255859375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2362720,
                "EndTimestampMillis": 2363080,
                "DurationMillis": 360,
                "StartTimecodeSMPTE": "00:39:22:18",
                "EndTimecodeSMPTE": "00:39:23:02",
                "DurationSMPTE": "00:00:00:09",
                "ShotSegment": {
                    "Index": 1340,
                    "Confidence": 99.92864227294922
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2363120,
                "EndTimestampMillis": 2364160,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:39:23:03",
                "EndTimecodeSMPTE": "00:39:24:04",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 1341,
                    "Confidence": 99.6103515625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2364200,
                "EndTimestampMillis": 2364560,
                "DurationMillis": 360,
                "StartTimecodeSMPTE": "00:39:24:05",
                "EndTimecodeSMPTE": "00:39:24:14",
                "DurationSMPTE": "00:00:00:09",
                "ShotSegment": {
                    "Index": 1342,
                    "Confidence": 99.6103515625
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2364600,
                "EndTimestampMillis": 2365480,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:39:24:15",
                "EndTimecodeSMPTE": "00:39:25:12",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1343,
                    "Confidence": 96.864990234375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2365520,
                "EndTimestampMillis": 2365760,
                "DurationMillis": 240,
                "StartTimecodeSMPTE": "00:39:25:13",
                "EndTimecodeSMPTE": "00:39:25:19",
                "DurationSMPTE": "00:00:00:06",
                "ShotSegment": {
                    "Index": 1344,
                    "Confidence": 96.864990234375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2365800,
                "EndTimestampMillis": 2366920,
                "DurationMillis": 1120,
                "StartTimecodeSMPTE": "00:39:25:20",
                "EndTimecodeSMPTE": "00:39:26:23",
                "DurationSMPTE": "00:00:01:03",
                "ShotSegment": {
                    "Index": 1345,
                    "Confidence": 99.47470092773438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2366960,
                "EndTimestampMillis": 2367240,
                "DurationMillis": 280,
                "StartTimecodeSMPTE": "00:39:26:24",
                "EndTimecodeSMPTE": "00:39:27:06",
                "DurationSMPTE": "00:00:00:07",
                "ShotSegment": {
                    "Index": 1346,
                    "Confidence": 99.04410552978516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2367280,
                "EndTimestampMillis": 2367760,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:39:27:07",
                "EndTimecodeSMPTE": "00:39:27:19",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 1347,
                    "Confidence": 99.04410552978516
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2367800,
                "EndTimestampMillis": 2368080,
                "DurationMillis": 280,
                "StartTimecodeSMPTE": "00:39:27:20",
                "EndTimecodeSMPTE": "00:39:28:02",
                "DurationSMPTE": "00:00:00:07",
                "ShotSegment": {
                    "Index": 1348,
                    "Confidence": 97.72181701660156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2368120,
                "EndTimestampMillis": 2368520,
                "DurationMillis": 400,
                "StartTimecodeSMPTE": "00:39:28:03",
                "EndTimecodeSMPTE": "00:39:28:13",
                "DurationSMPTE": "00:00:00:10",
                "ShotSegment": {
                    "Index": 1349,
                    "Confidence": 97.72181701660156
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2368560,
                "EndTimestampMillis": 2378440,
                "DurationMillis": 9880,
                "StartTimecodeSMPTE": "00:39:28:14",
                "EndTimecodeSMPTE": "00:39:38:11",
                "DurationSMPTE": "00:00:09:22",
                "ShotSegment": {
                    "Index": 1350,
                    "Confidence": 79.63560485839844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2378480,
                "EndTimestampMillis": 2378520,
                "DurationMillis": 40,
                "StartTimecodeSMPTE": "00:39:38:12",
                "EndTimecodeSMPTE": "00:39:38:13",
                "DurationSMPTE": "00:00:00:01",
                "ShotSegment": {
                    "Index": 1351,
                    "Confidence": 79.63560485839844
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2378600,
                "EndTimestampMillis": 2379680,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:39:38:15",
                "EndTimecodeSMPTE": "00:39:39:17",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1352,
                    "Confidence": 86.6415023803711
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2379720,
                "EndTimestampMillis": 2382480,
                "DurationMillis": 2760,
                "StartTimecodeSMPTE": "00:39:39:18",
                "EndTimecodeSMPTE": "00:39:42:12",
                "DurationSMPTE": "00:00:02:19",
                "ShotSegment": {
                    "Index": 1353,
                    "Confidence": 99.59587097167969
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2382520,
                "EndTimestampMillis": 2383400,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:39:42:13",
                "EndTimecodeSMPTE": "00:39:43:10",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1354,
                    "Confidence": 99.85438537597656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2383440,
                "EndTimestampMillis": 2384120,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:39:43:11",
                "EndTimecodeSMPTE": "00:39:44:03",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 1355,
                    "Confidence": 99.86343383789062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2384160,
                "EndTimestampMillis": 2384720,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:39:44:04",
                "EndTimecodeSMPTE": "00:39:44:18",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 1356,
                    "Confidence": 99.86343383789062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2384760,
                "EndTimestampMillis": 2385560,
                "DurationMillis": 800,
                "StartTimecodeSMPTE": "00:39:44:19",
                "EndTimecodeSMPTE": "00:39:45:14",
                "DurationSMPTE": "00:00:00:20",
                "ShotSegment": {
                    "Index": 1357,
                    "Confidence": 99.71380615234375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2385600,
                "EndTimestampMillis": 2386160,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:39:45:15",
                "EndTimecodeSMPTE": "00:39:46:04",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 1358,
                    "Confidence": 99.71380615234375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2386200,
                "EndTimestampMillis": 2386840,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:39:46:05",
                "EndTimecodeSMPTE": "00:39:46:21",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 1359,
                    "Confidence": 99.88621520996094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2386880,
                "EndTimestampMillis": 2387360,
                "DurationMillis": 480,
                "StartTimecodeSMPTE": "00:39:46:22",
                "EndTimecodeSMPTE": "00:39:47:09",
                "DurationSMPTE": "00:00:00:12",
                "ShotSegment": {
                    "Index": 1360,
                    "Confidence": 99.94890594482422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2387400,
                "EndTimestampMillis": 2388280,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:39:47:10",
                "EndTimecodeSMPTE": "00:39:48:07",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1361,
                    "Confidence": 99.95712280273438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2388320,
                "EndTimestampMillis": 2388880,
                "DurationMillis": 560,
                "StartTimecodeSMPTE": "00:39:48:08",
                "EndTimecodeSMPTE": "00:39:48:22",
                "DurationSMPTE": "00:00:00:14",
                "ShotSegment": {
                    "Index": 1362,
                    "Confidence": 99.95712280273438
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2388920,
                "EndTimestampMillis": 2389440,
                "DurationMillis": 520,
                "StartTimecodeSMPTE": "00:39:48:23",
                "EndTimecodeSMPTE": "00:39:49:11",
                "DurationSMPTE": "00:00:00:13",
                "ShotSegment": {
                    "Index": 1363,
                    "Confidence": 99.95744323730469
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2389480,
                "EndTimestampMillis": 2390160,
                "DurationMillis": 680,
                "StartTimecodeSMPTE": "00:39:49:12",
                "EndTimecodeSMPTE": "00:39:50:04",
                "DurationSMPTE": "00:00:00:17",
                "ShotSegment": {
                    "Index": 1364,
                    "Confidence": 99.92225646972656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2390200,
                "EndTimestampMillis": 2390920,
                "DurationMillis": 720,
                "StartTimecodeSMPTE": "00:39:50:05",
                "EndTimecodeSMPTE": "00:39:50:23",
                "DurationSMPTE": "00:00:00:18",
                "ShotSegment": {
                    "Index": 1365,
                    "Confidence": 99.8825912475586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2390960,
                "EndTimestampMillis": 2392000,
                "DurationMillis": 1040,
                "StartTimecodeSMPTE": "00:39:50:24",
                "EndTimecodeSMPTE": "00:39:52:00",
                "DurationSMPTE": "00:00:01:01",
                "ShotSegment": {
                    "Index": 1366,
                    "Confidence": 99.8825912475586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2392040,
                "EndTimestampMillis": 2393840,
                "DurationMillis": 1800,
                "StartTimecodeSMPTE": "00:39:52:01",
                "EndTimecodeSMPTE": "00:39:53:21",
                "DurationSMPTE": "00:00:01:20",
                "ShotSegment": {
                    "Index": 1367,
                    "Confidence": 99.92323303222656
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2393880,
                "EndTimestampMillis": 2396600,
                "DurationMillis": 2720,
                "StartTimecodeSMPTE": "00:39:53:22",
                "EndTimecodeSMPTE": "00:39:56:15",
                "DurationSMPTE": "00:00:02:18",
                "ShotSegment": {
                    "Index": 1368,
                    "Confidence": 99.93521118164062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2396640,
                "EndTimestampMillis": 2397720,
                "DurationMillis": 1080,
                "StartTimecodeSMPTE": "00:39:56:16",
                "EndTimecodeSMPTE": "00:39:57:18",
                "DurationSMPTE": "00:00:01:02",
                "ShotSegment": {
                    "Index": 1369,
                    "Confidence": 99.93521118164062
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2397760,
                "EndTimestampMillis": 2398520,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:39:57:19",
                "EndTimecodeSMPTE": "00:39:58:13",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 1370,
                    "Confidence": 99.94493103027344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2398560,
                "EndTimestampMillis": 2399440,
                "DurationMillis": 880,
                "StartTimecodeSMPTE": "00:39:58:14",
                "EndTimecodeSMPTE": "00:39:59:11",
                "DurationSMPTE": "00:00:00:22",
                "ShotSegment": {
                    "Index": 1371,
                    "Confidence": 99.94493103027344
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2399480,
                "EndTimestampMillis": 2400240,
                "DurationMillis": 760,
                "StartTimecodeSMPTE": "00:39:59:12",
                "EndTimecodeSMPTE": "00:40:00:06",
                "DurationSMPTE": "00:00:00:19",
                "ShotSegment": {
                    "Index": 1372,
                    "Confidence": 99.9301986694336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2400280,
                "EndTimestampMillis": 2401280,
                "DurationMillis": 1000,
                "StartTimecodeSMPTE": "00:40:00:07",
                "EndTimecodeSMPTE": "00:40:01:07",
                "DurationSMPTE": "00:00:01:00",
                "ShotSegment": {
                    "Index": 1373,
                    "Confidence": 99.68949890136719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2401320,
                "EndTimestampMillis": 2402680,
                "DurationMillis": 1360,
                "StartTimecodeSMPTE": "00:40:01:08",
                "EndTimecodeSMPTE": "00:40:02:17",
                "DurationSMPTE": "00:00:01:09",
                "ShotSegment": {
                    "Index": 1374,
                    "Confidence": 99.68949890136719
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2402720,
                "EndTimestampMillis": 2404000,
                "DurationMillis": 1280,
                "StartTimecodeSMPTE": "00:40:02:18",
                "EndTimecodeSMPTE": "00:40:04:00",
                "DurationSMPTE": "00:00:01:07",
                "ShotSegment": {
                    "Index": 1375,
                    "Confidence": 99.91901397705078
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2404040,
                "EndTimestampMillis": 2405240,
                "DurationMillis": 1200,
                "StartTimecodeSMPTE": "00:40:04:01",
                "EndTimecodeSMPTE": "00:40:05:06",
                "DurationSMPTE": "00:00:01:05",
                "ShotSegment": {
                    "Index": 1376,
                    "Confidence": 99.9354019165039
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2405280,
                "EndTimestampMillis": 2406680,
                "DurationMillis": 1400,
                "StartTimecodeSMPTE": "00:40:05:07",
                "EndTimecodeSMPTE": "00:40:06:17",
                "DurationSMPTE": "00:00:01:10",
                "ShotSegment": {
                    "Index": 1377,
                    "Confidence": 98.0599365234375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2406720,
                "EndTimestampMillis": 2407360,
                "DurationMillis": 640,
                "StartTimecodeSMPTE": "00:40:06:18",
                "EndTimecodeSMPTE": "00:40:07:09",
                "DurationSMPTE": "00:00:00:16",
                "ShotSegment": {
                    "Index": 1378,
                    "Confidence": 98.0599365234375
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2407400,
                "EndTimestampMillis": 2411800,
                "DurationMillis": 4400,
                "StartTimecodeSMPTE": "00:40:07:10",
                "EndTimecodeSMPTE": "00:40:11:20",
                "DurationSMPTE": "00:00:04:10",
                "ShotSegment": {
                    "Index": 1379,
                    "Confidence": 52.79413986206055
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2411840,
                "EndTimestampMillis": 2413280,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:40:11:21",
                "EndTimecodeSMPTE": "00:40:13:07",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1380,
                    "Confidence": 52.79413986206055
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2413320,
                "EndTimestampMillis": 2414760,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:40:13:08",
                "EndTimecodeSMPTE": "00:40:14:19",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1381,
                    "Confidence": 56.61842346191406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2414800,
                "EndTimestampMillis": 2417720,
                "DurationMillis": 2920,
                "StartTimecodeSMPTE": "00:40:14:20",
                "EndTimecodeSMPTE": "00:40:17:18",
                "DurationSMPTE": "00:00:02:23",
                "ShotSegment": {
                    "Index": 1382,
                    "Confidence": 56.61842346191406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2417760,
                "EndTimestampMillis": 2419200,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:40:17:19",
                "EndTimecodeSMPTE": "00:40:19:05",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1383,
                    "Confidence": 62.96554946899414
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2419240,
                "EndTimestampMillis": 2420680,
                "DurationMillis": 1440,
                "StartTimecodeSMPTE": "00:40:19:06",
                "EndTimecodeSMPTE": "00:40:20:17",
                "DurationSMPTE": "00:00:01:11",
                "ShotSegment": {
                    "Index": 1384,
                    "Confidence": 59.90672302246094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2420720,
                "EndTimestampMillis": 2436960,
                "DurationMillis": 16240,
                "StartTimecodeSMPTE": "00:40:20:18",
                "EndTimecodeSMPTE": "00:40:36:24",
                "DurationSMPTE": "00:00:16:06",
                "ShotSegment": {
                    "Index": 1385,
                    "Confidence": 59.90672302246094
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2437000,
                "EndTimestampMillis": 2439960,
                "DurationMillis": 2960,
                "StartTimecodeSMPTE": "00:40:37:00",
                "EndTimecodeSMPTE": "00:40:39:24",
                "DurationSMPTE": "00:00:02:24",
                "ShotSegment": {
                    "Index": 1386,
                    "Confidence": 82.98219299316406
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2440000,
                "EndTimestampMillis": 2446000,
                "DurationMillis": 6000,
                "StartTimecodeSMPTE": "00:40:40:00",
                "EndTimecodeSMPTE": "00:40:46:00",
                "DurationSMPTE": "00:00:06:00",
                "ShotSegment": {
                    "Index": 1387,
                    "Confidence": 64.4441146850586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2446040,
                "EndTimestampMillis": 2448000,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:40:46:01",
                "EndTimecodeSMPTE": "00:40:48:00",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1388,
                    "Confidence": 64.4441146850586
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2448040,
                "EndTimestampMillis": 2450000,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:40:48:01",
                "EndTimecodeSMPTE": "00:40:50:00",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1389,
                    "Confidence": 78.66287231445312
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2450040,
                "EndTimestampMillis": 2452040,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:40:50:01",
                "EndTimecodeSMPTE": "00:40:52:01",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 1390,
                    "Confidence": 50.88542556762695
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2452080,
                "EndTimestampMillis": 2454040,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:40:52:02",
                "EndTimecodeSMPTE": "00:40:54:01",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1391,
                    "Confidence": 50.88542556762695
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2454120,
                "EndTimestampMillis": 2456080,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:40:54:03",
                "EndTimecodeSMPTE": "00:40:56:02",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1392,
                    "Confidence": 64.20352935791016
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2456120,
                "EndTimestampMillis": 2458080,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:40:56:03",
                "EndTimecodeSMPTE": "00:40:58:02",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1393,
                    "Confidence": 85.09495544433594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2458120,
                "EndTimestampMillis": 2460120,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:40:58:03",
                "EndTimecodeSMPTE": "00:41:00:03",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 1394,
                    "Confidence": 85.09495544433594
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2460160,
                "EndTimestampMillis": 2462120,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:41:00:04",
                "EndTimecodeSMPTE": "00:41:02:03",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1395,
                    "Confidence": 57.2882194519043
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2462160,
                "EndTimestampMillis": 2464160,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:41:02:04",
                "EndTimecodeSMPTE": "00:41:04:04",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 1396,
                    "Confidence": 57.2882194519043
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2464200,
                "EndTimestampMillis": 2466160,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:41:04:05",
                "EndTimecodeSMPTE": "00:41:06:04",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1397,
                    "Confidence": 66.1626205444336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2466200,
                "EndTimestampMillis": 2468240,
                "DurationMillis": 2040,
                "StartTimecodeSMPTE": "00:41:06:05",
                "EndTimecodeSMPTE": "00:41:08:06",
                "DurationSMPTE": "00:00:02:01",
                "ShotSegment": {
                    "Index": 1398,
                    "Confidence": 66.1626205444336
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2468280,
                "EndTimestampMillis": 2470240,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:41:08:07",
                "EndTimecodeSMPTE": "00:41:10:06",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1399,
                    "Confidence": 90.61833953857422
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2470280,
                "EndTimestampMillis": 2472240,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:41:10:07",
                "EndTimecodeSMPTE": "00:41:12:06",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1400,
                    "Confidence": 95.837158203125
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2472280,
                "EndTimestampMillis": 2474240,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:41:12:07",
                "EndTimecodeSMPTE": "00:41:14:06",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1401,
                    "Confidence": 61.789669036865234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2474280,
                "EndTimestampMillis": 2476280,
                "DurationMillis": 2000,
                "StartTimecodeSMPTE": "00:41:14:07",
                "EndTimecodeSMPTE": "00:41:16:07",
                "DurationSMPTE": "00:00:02:00",
                "ShotSegment": {
                    "Index": 1402,
                    "Confidence": 61.789669036865234
                }
            },
            {
                "Type": "SHOT",
                "StartTimestampMillis": 2476320,
                "EndTimestampMillis": 2478280,
                "DurationMillis": 1960,
                "StartTimecodeSMPTE": "00:41:16:08",
                "EndTimecodeSMPTE": "00:41:18:07",
                "DurationSMPTE": "00:00:01:24",
                "ShotSegment": {
                    "Index": 1403,
                    "Confidence": 73.39681243896484
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

    let shots = shots_1.Segments.concat(shots_2.Segments);

    let video;
    let playerSessionId, player;
    let labels = await fetch('http://18.157.136.67/api/generes/getlabels')    
    if(labels){
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
        [minLevel,midLevel,maxLevel].forEach(btn=>{
            btn.addEventListener('click',function(e){
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
                console.log('after Set skipped shot length :'+shotSkipped.length)
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
