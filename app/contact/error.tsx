"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <main>
      <h1>An error has ocurred!!!</h1>
      <p>{error.message}</p>
    </main>
  );
}
