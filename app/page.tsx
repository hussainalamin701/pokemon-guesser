import Header from '../components/layout/Header';
import PokemonDisplay from '@/components/game/PokemonDisplay';
import GuessInput from '@/components/game/GuessInput';

export default function Home() {
  return (
    <div>
      <Header />
      
      <PokemonDisplay pokemon='charmander'/>
      <GuessInput />

    </div>
  );
}