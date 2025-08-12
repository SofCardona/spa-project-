
import '../KodigoMusic.css';
import SpotifyCard from '../components/SpotifyCard';

export default function Home() {
  return (
    <div style={{ 
      padding: '40px', 
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '30px',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <SpotifyCard
        artistName="Taylor Swift"
        title="Taylor Swift"
        subtitle="GLOBAL TOP ARTIST"
        imageUrl="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face"
        backgroundColor="linear-gradient(135deg, #FFD700 0%, #00BFFF 50%, #9932CC 100%)"
      />
      
      <SpotifyCard
        artistName="Bad Bunny"
        title="Bad Bunny"
        subtitle="TOP LATIN ARTIST"
        imageUrl="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face"
        backgroundColor="linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%)"
      />
      
      <SpotifyCard
        artistName="Drake"
        title="Drake"
        subtitle="TOP HIP-HOP ARTIST"
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
        backgroundColor="linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)"
      />
    </div>
  );
}
