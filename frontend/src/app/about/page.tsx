import React from "react";
import { Users, Target, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <Target className="text-green-600" /> Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to build a **production-ready product exploration
            platform** that empowers users to navigate from high-level headings to 
            detailed product pages, powered by live scraping from World of Books.  
          </p>
        </div>
        <Image
          src="/about-us-pic.jpeg"
          alt="Mission illustration"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg"
        />
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <Users className="mx-auto text-green-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in teamwork and creating solutions together for better outcomes.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <Target className="mx-auto text-green-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Always exploring modern technologies to deliver cutting-edge experiences.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition">
              <Heart className="mx-auto text-green-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">
                We’re passionate about making data more accessible and meaningful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { name: "Team Member 1", role: "Full-Stack Developer" },
            { name: "Team Member 2", role: "Backend Engineer" },
            { name: "Team Member 3", role: "Frontend Engineer" },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6"
            >
              <Image
                src="/user-pic.jpeg"
                alt={member.name}
                width={96}
                height={96}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-green-600"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
