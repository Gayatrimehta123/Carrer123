export default function ValuesSection() {
  const values = [
    {
      icon: "/png1.png",
      title: "Earn Customer Love",
      description:
        "We are passionate about our customers and devoted to their success. We know that customer trust and confidence is earned, not given, with every interaction, every delivery, and every time we solve a customer problem.",
    },
    {
      icon: "/png2.png",
      title: "Intellectual Rigor, Open Mind",
      description:
        "We think in clear verifiable hypotheses and continuously obtain data that validates or refutes them. We ask questions and challenge assumptions to get consistently to the truth.",
    },
    {
      icon: "/png3.png",
      title: "Ambition Shapes Reality",
      description:
        "We are extremely ambitious in what we can accomplish. We set high standards, expecting to fail in the short-term but knowing that failure guides us to learn and ultimately succeed.",
    },
    {
      icon: "/png4.png",
      title: "Team Flow",
      description:
        "We are energized by each other's success and actively invest in others with care, candor, and focus. Ideas flow openly between us because we treat each other with trust and respect.",
    },
     {
      icon: "/png5.png",
      title: "Ownership Is The Job",
      description:
        "We think like owners. We embody expansive ownership and are big believers in our ability to drive outcomes and enact change.",
     },

      {
      icon: "/png6.png",
      title: "Run Through Walls",
      description:
        "We are undaunted by barriers and race towards overcoming them. We step outside of our comfort zone, test our ideas, and do the hard work to get to the right solution to a hard problem.",
     },

      {
      icon: "/png7.png",
      title: "Why Not Faster?",
      description:
        "We move with agility and intent, and swiftly make two-way door decisions that allow us to learn faster, adapt quickly, and ultimately do more.",
     },

     {
      icon: "/png8.png",
      title: "Results Speak Loudest",
      description:
        "We define goals with intent and evaluate our outcomes with objectivity. At the end of the day, we measure ourselves by our results.",
     },
      
     {
      icon: "/png9.png",
      title: "Contributors Are Cornerstone",
      description:
        "Our users are the foundation of our success. We honor the talent, passion, and dedication of every contributor, recognizing that collaboration and individual impact drive us forward.",
     },
      {
      icon: "/png10.png",
      title: "Quality is Fractal",
      description:
       " Excellence manifests at every level of a system. From the smallest details to the broadest strategies, we believe that quality compounds and scales with precision, care, and intentionality.",
     },


  ];

  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
        {values.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left space-y-4"
          >
            {/* Logo/Icon */}
            <img
              src={value.icon}
              alt={value.title}
              className="w-10 h-10"
            />

            {/* Title */}
            <h3 className="text-xl font-semibold">{value.title}</h3>

            {/* Description */}
            <p className="text-gray-300">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
