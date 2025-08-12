// src/services/spotifyApi.ts

const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token';
const SCOPES = [
  'user-read-private',
  'user-read-email',
  // Agrega más scopes según lo que necesites
];

export function getSpotifyAuthUrl() {
  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: RESPONSE_TYPE,
    scope: SCOPES.join(' '),
    show_dialog: 'true',
  });
  console.log(params.toString());
  return `${AUTH_ENDPOINT}?${params.toString()}`;
}

export function getTokenFromUrl() {
  const hash = window.location.hash.substring(1);
  const params = new URLSearchParams(hash);
  return params.get('access_token');
}

export async function fetchSpotify(endpoint: string, token: string) {
  const res = await fetch(`https://api.spotify.com/v1/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Spotify API error');
  return res.json();

}

export async function getArtists(query: string, token: string) {
  const data = await fetchSpotify(`search?q=${encodeURIComponent(query)}&type=artist&limit=10`, token);
  return data.artists.items; // Returns just the list of artists
}
