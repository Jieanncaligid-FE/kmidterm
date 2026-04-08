"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FeaturedProjects() {
  return (
    <section className="p-10">
      <h2 className="mb-6">Featured Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <motion.div key={i} whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-4">
                <div className="h-24 bg-gray-300 mb-2" />
                <p>Project Title</p>
                <Button variant="outline">View Project</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
