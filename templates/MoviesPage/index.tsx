"use client";

import { useState, KeyboardEvent, useRef } from "react";
import React, { forwardRef } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Question from "@/components/Question";

  const MoviesPage = forwardRef<HTMLInputElement>((props, ref) => {
    const promptInput = useRef<HTMLInputElement>(null);
    const [ratings, setRatings] = useState(null);
    const [loading, setLoading] = useState(false);
    const prompt = async () => {
      const prompt = promptInput.current?.value;
      setLoading(true);
      const res = await fetch("/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });
      const data = await res.json();
      setRatings(data.content);
      setLoading(false);
    };
  
    const handlePromptKey = async (e: KeyboardEvent<HTMLInputElement>) => {
      e.stopPropagation();
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        prompt();
      }
    };
  
    console.log(ratings);

  return (
    <Layout>
      <Chat background="/images/bg-3.jpg" typeChat="movies" onAddMessage={() => {}}>
        <Question content="" />
        <MoviesPage />
      </Chat>
    </Layout>
  );
});

export default MoviesPage;