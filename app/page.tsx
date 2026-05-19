import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-white">

      <h1 className="text-5xl font-bold">
        Career OS
      </h1>

      <p className="mt-4 text-gray-600 max-w-md">
        Discover where your career can realistically take you next — based on people like you in Asia.
      </p>

      <Link href="/profile">
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-xl">
          Start Your Journey
        </button>
      </Link>

      <div className="mt-10 grid gap-4 md:grid-cols-3 max-w-4xl">

        <div className="border p-4 rounded-xl">
          📍 Career Path Navigator
          <p className="text-sm text-gray-500 mt-2">
            See your likely next career moves
          </p>
        </div>

        <div className="border p-4 rounded-xl">
          🧬 Career Twin AI
          <p className="text-sm text-gray-500 mt-2">
            Learn from people like you
          </p>
        </div>

        <div className="border p-4 rounded-xl">
          🔁 Feedback Loop
          <p className="text-sm text-gray-500 mt-2">
            Improve your career predictions over time
          </p>
        </div>

      </div>

    </div>
  );
}