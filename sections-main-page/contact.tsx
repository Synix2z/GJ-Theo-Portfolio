"use client";

import { useState } from "react";

import Title from "@/components/title";
import Separator from "@/components/separator";
import Button from "@/components/button";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-[#8B6FE0] bg-[#161B2E] px-4 py-3 font-body text-body text-white outline-none transition-colors focus:border-accent-text";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!res.ok) throw new Error();
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section>
      <Title text="Contact" id="contact-title" />

      <div className="my-20 px-8 sm:px-16 md:px-24 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <p className="font-body text-body text-white">
            Une question, une offre, ou une opportunité ? N&apos;hésite pas à me
            contacter via le formulaire ci-dessous ou à l&apos;adresse mail
            suivante :{" "}
            <a href="mailto:tgou58@gmail.com" className="text-accent-text underline">
              tgou58@gmail.com
            </a>
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6 rounded-xl bg-[#111624] p-6 sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="flex flex-col gap-2 font-body text-body text-white">
                Votre nom :
                <input name="name" type="text" required maxLength={100} className={inputClass} />
              </label>
              <label className="flex flex-col gap-2 font-body text-body text-white">
                Votre email :
                <input name="email" type="email" required maxLength={200} className={inputClass} />
              </label>
            </div>

            <label className="flex flex-col gap-2 font-body text-body text-white">
              Objet :
              <input name="subject" type="text" required maxLength={150} className={inputClass} />
            </label>

            <label className="flex flex-col gap-2 font-body text-body text-white">
              Votre message :
              <textarea
                name="message"
                required
                rows={7}
                maxLength={3000}
                className={`${inputClass} resize-y`}
              />
            </label>

            {/* Honeypot anti-spam : invisible pour les humains */}
            <input
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <Button type="submit" fullWidth disabled={status === "loading"}>
              {status === "loading" ? "Envoi en cours..." : "Envoyer"}
            </Button>

            <p role="status" className="min-h-6 text-center font-body text-body">
              {status === "success" && (
                <span className="text-green-400">Message envoyé, merci !</span>
              )}
              {status === "error" && (
                <span className="text-red-400">
                  Une erreur est survenue, réessaie ou écris-moi directement par mail.
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}