import React from 'react'

// src/components/Misson Section/main.jsx
export default function MissionSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16 mt-0">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        {/* Section Title */}
        <p className="text-sm uppercase tracking-widest text-center text-gray-400 mb-2">
          Why
        </p>
        <h2 className="text-4xl md:text-5xl text-center font-bold mb-10">Our Mission</h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Text */}
          <div>
            <p className="text-xl leading-relaxed mb-4">
              The age of AI is here. Generative AI has the potential to unseat
              incumbents, catapult new leaders, or solidify existing moats.
            </p>
            <p className="text-gray-300">
              Every industry, from the private sector to public sector is
              rethinking their strategies to incorporate AI. Despite this
              explosion in interest, there is no blueprint for organizations to
              go from inception to deployment for their AI initiatives.
            </p>
          </div>

          {/* Right Text */}
          <div>
            <p className="text-gray-300 mb-4">
              Our products for image annotation, semantic segmentation, 3D point
              cloud annotation, and LIDAR and RADAR annotation are used by
              industry leaders and provide world-class accuracy.
            </p>
            <p className="text-gray-300">
              Our proprietary{" "}
              <span className="underline text-blue-400">Data Engine</span> powers
              the most advanced LLMs, generative models, and computer vision
              models with high-quality data. We then apply our experience
              partnering with leading AI companies building these models to help
              more organizations customize and{" "}
              <span className="underline text-blue-400">Apply AI</span> in their
              organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}