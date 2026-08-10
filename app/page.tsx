import Header from '../components/layout/Header';
import Game from '@/components/game/Game';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-200 via-sky-100 to-yellow-100'>
      <Header />
      <Game />
      <Footer />

    </div>
  );
}