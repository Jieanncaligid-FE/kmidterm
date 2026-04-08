"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section className="p-10 space-y-10">

      {/* ABOUT ME */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <Card>
          <CardContent className="h-40 flex items-center justify-center">
            Profile Image
          </CardContent>
        </Card>

        <div>
          <h2 className="text-2xl font-bold">About Me</h2>
          <p>Name</p>
          <p>Short bio about me...</p>
        </div>
      </div>

      {/* SKILLS */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        <ul className="grid grid-cols-2 gap-2">
          <li>• HTML</li>
          <li>• CSS</li>
          <li>• JavaScript</li>
          <li>• React</li>
        </ul>
      </div>

      {/* TEAM */}
      <div>
        <h2 className="text-xl font-semibold mb-3">My Team</h2>

        <div className="grid grid-cols-2 gap-6">
          {[1,2].map(i => (
            <Card key={i}>
              <CardContent className="flex flex-col items-center p-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mb-2" />
                <p>Name</p>
                <p className="text-sm">Role</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </section>
  );
}