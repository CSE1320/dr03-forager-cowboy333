import Link from 'next/link';
import NavBar from '../../components/NavBar';

export default function MushroomPage() {
  return (
    <div className="bg-white min-h-screen text-black">
      <div class="flex flex-col items-center text-center bg-[rgb(87,144,118)] justify-start pt-20 mb-10 text-white">
        <h3 class="text-4xl font-bold">Match Results</h3>
      </div>
      <Link href="/comparison" className="flex justify-end pr-10">
        <button>Comparison</button>
      </Link>

      <NavBar />
    </div>
  );
}
