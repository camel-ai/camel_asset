"use client";

import { Suspense } from "react";
import { Header } from "@/components/header";
import TechStackContent from "@/techstack/techstack";

function HomeContent() {
  return (
    <div className="flex flex-col min-h-screen p-4 sm:p-6 md:p-8 font-[family-name:var(--font-main)] relative bg-background">
      {/* Background image with 20% opacity */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://camel-ai.github.io/camel_asset/techstack.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
          opacity: 0.2
        }}
      ></div>

      
      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10">
        <Header />
        <TechStackContent />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}