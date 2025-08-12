import './SpotifyCard.css';

interface SpotifyCardProps {
  artistName: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  backgroundColor?: string;
}

export default function SpotifyCard({ 
  artistName, 
  title, 
  subtitle, 
  imageUrl, 
  backgroundColor = 'linear-gradient(135deg, #FFD700 0%, #00BFFF 50%, #9932CC 100%)' 
}: SpotifyCardProps) {
  return (
    <div className="spotify-card" style={{ background: backgroundColor }}>
      <div className="spotify-card-content">
        <div className="artist-image-container">
          <img src={imageUrl} alt={artistName} className="artist-image" />
        </div>
        <div className="card-text">
          <h3 className="card-subtitle">{subtitle}</h3>
          <h1 className="card-title">{title}</h1>
        </div>
        <div className="spotify-branding">
          <div className="spotify-logo">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.062 14.437c-.25.411-.784.537-1.194.287-3.266-1.996-7.38-2.45-12.22-1.341-.489.112-.979-.199-1.091-.688-.112-.488.199-.978.688-1.09 5.26-1.205 9.767-.695 13.467 1.548.411.25.537.783.287 1.194l.063-.09zm1.706-3.797c-.312.505-.979.661-1.484.35-3.738-2.3-9.428-2.968-13.844-1.624-.589.179-1.214-.2-1.393-.789-.179-.589.2-1.214.789-1.393 5.07-1.541 11.369-.835 15.582 1.855.505.312.661.979.35 1.484v.117zm.147-3.95C13.778 6.13 8.004 5.97 4.651 6.794c-.7.172-1.408-.256-1.58-.956-.172-.7.256-1.408.956-1.58C7.81 3.658 14.264 3.848 19.235 7.2c.607.408.77 1.235.362 1.842-.408.607-1.235.77-1.842.362l.16-.714z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
