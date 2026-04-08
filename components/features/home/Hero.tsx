"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="p-10 grid md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="h-40 flex items-center justify-center">
          Image
        </CardContent>
      </Card>

      <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
        <h2 className="text-3xl font-bold">Your Name</h2>
        <p>Intro about yourself</p>
        <Button className="mt-4 bg-gold">Hire Me</Button>
      </motion.div>
    </section>
  );
}