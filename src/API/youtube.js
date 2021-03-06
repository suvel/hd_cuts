import youtubeConstants from "../constants/youtube";

export function getPopularVideo(limit) {
  // const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  // const url = new URL(youtubeConstants.baseURL);
  // url.searchParams.append("key", youtubeApiKey);
  // url.searchParams.append("channelId", youtubeConstants.channelId);
  // url.searchParams.append("part", "snippet,id");
  // url.searchParams.append("order", "rating");
  // url.searchParams.append("maxResults", `${limit}`);
  // return fetch(url);
}

export function getPopularVideo_Mockup(limit) {
  return {
    "kind": "youtube#searchListResponse",
    "etag": "3xB6tzF9idPMZsl-oEfMeoFwroM",
    "nextPageToken": "CAoQAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 26,
        "resultsPerPage": 10
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "COc-o743oiWneG4R4wBf6fXnFG0",
            "id": {
                "kind": "youtube#video",
                "videoId": "LFxZCxBaWIg"
            },
            "snippet": {
                "publishedAt": "2020-04-09T05:33:58Z",
                "channelId": "UCqIreWow8Sgq9A2Qp_bRyZA",
                "title": "SOLO meets Kaatru Veliyidai | Rahman | Bejoy Nambiar",
                "description": "Facebook: https://m.facebook.com/harshav889 Twitter: https://twitter.com/harsha_HDcuts Instagram: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/LFxZCxBaWIg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/LFxZCxBaWIg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/LFxZCxBaWIg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HD cuts",
                "liveBroadcastContent": "none",
                "publishTime": "2020-04-09T05:33:58Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "yvlhtc2RL75G7g2ZABTgNunSTvg",
            "id": {
                "kind": "youtube#video",
                "videoId": "1B6xahrjucM"
            },
            "snippet": {
                "publishedAt": "2017-10-21T04:04:03Z",
                "channelId": "UCqIreWow8Sgq9A2Qp_bRyZA",
                "title": "Life of Arjun Reddy | Vijay Devarkonda | Shalini Pandey | Sandeep Reddy",
                "description": "Life of arjun Reddy with mayakkam enna theme.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/1B6xahrjucM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/1B6xahrjucM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/1B6xahrjucM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HD cuts",
                "liveBroadcastContent": "none",
                "publishTime": "2017-10-21T04:04:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "b6T4wjvaxZNuRdIGQmdRmdODj-4",
            "id": {
                "kind": "youtube#video",
                "videoId": "k-k3Duhz8Bk"
            },
            "snippet": {
                "publishedAt": "2017-07-16T09:28:31Z",
                "channelId": "UCqIreWow8Sgq9A2Qp_bRyZA",
                "title": "Anbe Sivam with jigarthanda track | kamal hasan | Santhosh narayanan",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/k-k3Duhz8Bk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/k-k3Duhz8Bk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/k-k3Duhz8Bk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HD cuts",
                "liveBroadcastContent": "none",
                "publishTime": "2017-07-16T09:28:31Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Kd5-RXeDf4gf3QV-XnKm3Bh_3wM",
            "id": {
                "kind": "youtube#video",
                "videoId": "EIrd8vd8Zzw"
            },
            "snippet": {
                "publishedAt": "2021-07-24T07:53:20Z",
                "channelId": "UCqIreWow8Sgq9A2Qp_bRyZA",
                "title": "Tribute to dancing rose | Sarpatta Parambarai | PA Ranjith | Shabeer | Santhosh narayanan",
                "description": "Audio credits: https://www.youtube.com/watch?v=CzUslqxBwz0 Facebook: https://m.facebook.com/harshav889 Twitter: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/EIrd8vd8Zzw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/EIrd8vd8Zzw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/EIrd8vd8Zzw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HD cuts",
                "liveBroadcastContent": "none",
                "publishTime": "2021-07-24T07:53:20Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "-kSrcajTWX3braY_ORUqK_sBLbA",
            "id": {
                "kind": "youtube#video",
                "videoId": "8I5NKLmbRkw"
            },
            "snippet": {
                "publishedAt": "2019-09-27T12:09:19Z",
                "channelId": "UCqIreWow8Sgq9A2Qp_bRyZA",
                "title": "Tribute to Pariyerum Perumal | Mari Selvaraj | PA Ranjith | Santhosh Narayanan",
                "description": "Celebrating 1 year of pariyerum perumal Audio credits:https://www.youtube.com/watch?v=N9w393HOkMI Facebook: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/8I5NKLmbRkw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/8I5NKLmbRkw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/8I5NKLmbRkw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HD cuts",
                "liveBroadcastContent": "none",
                "publishTime": "2019-09-27T12:09:19Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "z1rcygqLX8KMyds76R1eoqnjk9w",
            "id": {
                "kind": "youtube#video",
                "videoId": "JNHZaoTedsg"
            },
            "snippet": {
                "publishedAt": "2018-08-26T12:48:23Z",
                "channelId": "UCqIreWow8Sgq9A2Qp_bRyZA",
                "title": "96 - ARR | Vijay sethupathi | Trisha | Naane varugiren | Rahman | Prem kumar",
                "description": "When 96 meets Rahman audio credits : https://www.youtube.com/watch?v=AhyORM6li7E Facebook: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/JNHZaoTedsg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/JNHZaoTedsg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/JNHZaoTedsg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HD cuts",
                "liveBroadcastContent": "none",
                "publishTime": "2018-08-26T12:48:23Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "OTiyrrOm2EhA2lfBvOzkHuechNc",
            "id": {
                "kind": "youtube#video",
                "videoId": "P7viaAKUIV4"
            },
            "snippet": {
                "publishedAt": "2018-08-06T12:33:33Z",
                "channelId": "UCqIreWow8Sgq9A2Qp_bRyZA",
                "title": "Mahesh Babu tribute video | Santhosh Narayanan | DSP | Keeravani | Maharshi",
                "description": "A special video to mahesh babu for his birthday. Maharshi first look Audio rights : https://www.youtube.com/watch?v=rc2ft794XNI ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/P7viaAKUIV4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/P7viaAKUIV4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/P7viaAKUIV4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HD cuts",
                "liveBroadcastContent": "none",
                "publishTime": "2018-08-06T12:33:33Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Q0IguNHsNS5_6pfN1dFigJyrOuw",
            "id": {
                "kind": "youtube#video",
                "videoId": "hom9XBJgfWU"
            },
            "snippet": {
                "publishedAt": "2017-12-29T03:30:56Z",
                "channelId": "UCqIreWow8Sgq9A2Qp_bRyZA",
                "title": "Aruvi - Snehithane cover | Alaipayuthey | Aditi Balan | Sooraj Santhosh | Masala Coffee",
                "description": "Aruvi with Snehithanae cover Audio credits: https://www.youtube.com/watch?v=AB2ACJ22fhY.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/hom9XBJgfWU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/hom9XBJgfWU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/hom9XBJgfWU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HD cuts",
                "liveBroadcastContent": "none",
                "publishTime": "2017-12-29T03:30:56Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "mu00Tp1RLk4Ffus_QP61T1jwc9U",
            "id": {
                "kind": "youtube#video",
                "videoId": "wgCcvzufIFQ"
            },
            "snippet": {
                "publishedAt": "2018-07-17T13:38:21Z",
                "channelId": "UCqIreWow8Sgq9A2Qp_bRyZA",
                "title": "Believer - Dhoni | Imagine Dragons | Dan Reynolds",
                "description": "When believer meets Dhoni Audio credits: https://www.youtube.com/watch?v=7wtfhZwyrcc Facebook: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/wgCcvzufIFQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/wgCcvzufIFQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/wgCcvzufIFQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HD cuts",
                "liveBroadcastContent": "none",
                "publishTime": "2018-07-17T13:38:21Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "-UcwtZ8RExH5ktmPiTv5vYuoT_E",
            "id": {
                "kind": "youtube#video",
                "videoId": "T0sd3rbdv6s"
            },
            "snippet": {
                "publishedAt": "2017-09-27T07:52:16Z",
                "channelId": "UCqIreWow8Sgq9A2Qp_bRyZA",
                "title": "BAAHUBALI - MERSAL | Vijay | Prabhas | A.R.Rahman",
                "description": "Revenge of Mahendra Baahubali with Mersal theme official mersal teaser : https://www.youtube.com/watch?v=gQDo5QuZTaw ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/T0sd3rbdv6s/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/T0sd3rbdv6s/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/T0sd3rbdv6s/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "HD cuts",
                "liveBroadcastContent": "none",
                "publishTime": "2017-09-27T07:52:16Z"
            }
        }
    ]
}
}
