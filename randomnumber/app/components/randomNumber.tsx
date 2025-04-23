"use client"
import React, { useState } from "react";
import gsap from "gsap";
export default function RandomNumberGame() {
    const [randomNumber, setRandomNumber] = useState<number | null>(null);
    const min = 1;
    const max = 100;
  
    const generateRandomNumber = () => {
      let finalNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  
      gsap.to("#number", {
        duration: 7,
        textContent: finalNumber,
        roundProps: "textContent",
        ease: "power2.out",
      });
  
      setRandomNumber(finalNumber);
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1 id="number" style={{ fontSize: "200px" }}>?</h1>
        <button onClick={generateRandomNumber} style={{ fontSize: "30px", padding: "10px" }} className="font-[family-name:var(--font-geist-mono)] hover:underline">
          Generar Número
        </button>
      </div>
    );
  }