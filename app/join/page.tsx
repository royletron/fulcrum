'use client'
import PageHolder from "@/components/PageHolder";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Join() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(`/room/${code}`);
  };

  return (
    <PageHolder>
      <h1>Join</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Code"
          value={code}
          onChange={(e: React.FormEvent<HTMLInputElement>) => setCode(e.currentTarget.value)}
        />
        <button type="submit">Join</button>
      </form>
    </PageHolder>
  );
}
