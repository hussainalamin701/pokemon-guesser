import Header from '../components/layout/Header';
import Game from '@/components/game/Game';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col bg-gradient-to-br from-blue-200 via-sky-100 to-yellow-100'>
      <Header />
      <main className='flex-1'>
        <Game />
      </main>
      <Footer />

    </div>
  );
}