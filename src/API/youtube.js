import youtubeConstants from "../constants/youtube";

export function getPopularVideo(limit) {
  const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
  const url = new URL(youtubeConstants.baseURL);
  url.searchParams.append("key", youtubeApiKey);
  url.searchParams.append("channelId", youtubeConstants.channelId);
  url.searchParams.append("part", "snippet,id");
  url.searchParams.append("order", "rating");
  url.searchParams.append("maxResults", `${limit}`);
  debugger;
  return fetch(url);
}
