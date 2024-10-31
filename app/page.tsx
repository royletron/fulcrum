import PageHolder from "@/components/PageHolder";
import Link from "next/link";

import { redirect } from 'next/navigation'

export default function Home() {

  async function host() {
    'use server'
    // Mutate data
    const joinCode = Math.random().toString(36).substring(2, 8);
    redirect(`/room/${joinCode}`)
  }

  return (
    <PageHolder>
      <h1 className="text-4xl font-bold text-center sm:text-left">
        Welcome to <a href="https://nextjs.org">Fulcrum</a>
      </h1>
      <div className="flex items-center justify-center gap-4 w-full">
        <Link className="button" href="/join">
          Join Game
        </Link>
        <a className="button" onClick={host}>
          Host Game
        </a>
      </div>
    </PageHolder>
  );
}
