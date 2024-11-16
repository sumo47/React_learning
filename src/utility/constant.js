const API_KEY = "AIzaSyAyyoL5IsOPAou0bkSi7lyQDn1oRFFNe5g";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  API_KEY;

export const SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;
export const LIVECHAT_COUNT = 250

// live chat >>>> infinite scroll >>>> pagination