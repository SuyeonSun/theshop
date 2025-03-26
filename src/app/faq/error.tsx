"use client";

export default function Error({ error }) {
  return (
    <main>
      <h1>Something went wrong!</h1>
      <p>{error.message || "Failed to load FAQs."}</p>
    </main>
  );
}
