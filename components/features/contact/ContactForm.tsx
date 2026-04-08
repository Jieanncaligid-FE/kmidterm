"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({});

  return (
    <section className="p-10 max-w-xl mx-auto">
      <h2 className="text-xl mb-4">Contact Form</h2>

      <Input placeholder="Name" className="mb-2" />
      <Input placeholder="Email" className="mb-2" />
      <Textarea placeholder="Message" className="mb-2" />

      <Button className="bg-gold">Submit</Button>
    </section>
  );
}