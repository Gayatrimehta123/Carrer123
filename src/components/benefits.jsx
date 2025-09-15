// src/components/BenefitsSection.jsx
import React from "react";

const benefits = [
  {
    id: 1,
    image: "/photo1.webp", // rename & save in public folder
    title: "Health & Wellbeing",
    description:
      "Our holistic approach to supporting Scaliens includes comprehensive health coverage, dental and vision insurance, mental healthcare services, and more. PTO policies and accommodating schedules ensure you’ll get time off when you need to relax and recharge.",
  },
  {
    id: 2,
    image: "/photo2.webp",
    title: "Personal & Career Growth",
    description:
      "Continuously learn and grow through annual learning & development stipend, attending leadership breakfasts, manager training, speaker series, and joining an ERG.",
  },
  {
    id: 3,
    image: "/photo3.webp",
    title: "Building Scale Community",
    description:
      "We welcome guests to our offices, and you can expect to see Scalien families and friends around. Join local happy hours, and accept invites to game nights, book clubs, and many other employee-led community events.",
  },
  {
    id: 4,
    image: "/photo4.webp",
    title: "Parental Support",
    description:
      "Balancing work and family is essential, and Scale understands the importance of having adequate leave policies in place to promote a healthy home and work life.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-black text-white py-16 px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="uppercase text-sm tracking-widest mb-2">Our Benefits</p>
        <h2 className="text-4xl font-bold mb-4">Supporting You To Do Your Best Work</h2>
        <p className="text-lg text-gray-300">
          At Scale, we believe your talent and achievements deserve to be met
          with a supportive community and flexible environment.
        </p>
      </div>
      
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {benefits.map((item) => (
          <div key={item.id}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-72 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
