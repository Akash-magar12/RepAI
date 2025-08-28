const Testimonials = () => {
  const reviews = [
    {
      name: "John D.",
      role: "Fitness Enthusiast",
      feedback:
        "RepAI completely changed the way I work out. The personalized plans are spot on!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sarah K.",
      role: "Gym Trainer",
      feedback:
        "Finally, an AI tool that actually understands fitness goals. My clients love it!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Mike L.",
      role: "Beginner",
      feedback:
        "I was totally lost at the gym, but RepAI gave me confidence and results fast.",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  return (
    <section className=" sm:py-16">
      <div className="max-w-7xl mx-auto  text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-4">&quot;{review.feedback}&quot;</p>
              <h4 className="font-semibold">{review.name}</h4>
              <span className="text-sm text-gray-500">{review.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
