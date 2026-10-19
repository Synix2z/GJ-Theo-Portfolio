"use client";

import Title from "@/components/title";
import Separator from "@/components/separator";
import Button from "@/components/button";

export default function Home() {
  return (
    <main>

      {/* Test */}
      <Title text="À Propos" id="about" />
      <Title text="Expérience" id="experience" />
      <Separator />
      <Button onClick={() => console.log("Button clicked!")}>
        Cliquez ici
      </Button>
      
    </main>
  );
}
