"use client";
import { useState } from "react";
import ArticlePage from "@/components/ArticlePage";
import EditorialPage from "@/components/EditorialPage";

export default function articles() {
  const [layout, setlayout] = useState("article");

  return (
    <main>
      <div className="flex justify-center py-5 px-10">
        <div className="mt-20">
          <button
            onClick={() => setlayout("article")}
            className="py-2 px-18 lg:px-30 2xl:px-40 bg-black/15 hover:bg-gray-500 backdrop-blur-xl backdrop-saturate-180 border border-gray-400/25 border-r-0 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-l-full cursor-pointer"
          >
            articles
          </button>
          <button
            onClick={() => setlayout("editoral")}
            className="py-2 px-18 lg:px-30 2xl:px-40 bg-black/15 hover:bg-gray-500 backdrop-blur-xl backdrop-saturate-180 border border-gray-400/25 border-l-0 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] rounded-r-full cursor-pointer"
          >
            editorial
          </button>
        </div>
      </div>
      {layout === "article" ? <ArticlePage /> : <EditorialPage />}
    </main>
  );
}
