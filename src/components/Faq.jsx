import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  const faqs = [
    {
      q: "What is RepAI?",
      a: "RepAI is an AI-powered fitness coach that creates personalized workout plans based on your goals, fitness level, and available equipment.",
    },
    {
      q: "Do I need gym equipment to use RepAI?",
      a: "Not at all! RepAI can design bodyweight-only home workouts or advanced gym routines if you have equipment.",
    },
    {
      q: "Is RepAI suitable for beginners?",
      a: "Yes! Whether you’re new to fitness or an experienced athlete, RepAI adapts to your progress and guides you step by step.",
    },
    {
      q: "How does RepAI create my workout plan?",
      a: "Our AI analyzes your profile, goals, and preferences to generate a tailored plan that updates as you improve.",
    },
    {
      q: "Can I track my progress?",
      a: "Absolutely! You can log workouts, track performance, and monitor your progress over time.",
    },
    {
      q: "Is RepAI free to use?",
      a: "RepAI offers a free plan with essential features. For advanced tracking and premium coaching, you can upgrade anytime.",
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full"
      >
        {faqs.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="cursor-pointer text-lg font-medium">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-gray-700">
              <p>{item.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Faq;
