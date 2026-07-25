import Header from '../components/Header';
import PokemonDisplay from '@/components/PokemonDisplay';
import GuessInput from '@/components/GuessInput';

export default function Home() {
  return (
    <div>
      <Header />
      
      <PokemonDisplay pokemon='charmander'/>
      <GuessInput />

    </div>
  );
}