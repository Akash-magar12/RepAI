import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What is RepAI ?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            RepAI is an AI-powered fitness coach that creates personalized
            workout plans based on your goals, fitness level, and available
            equipment.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          Do I need gym equipment to use RepAI ?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Not at all! RepAI can design bodyweight-only home workouts or
            advanced gym routines if you have equipment.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is RepAI suitable for beginners ?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Yes! Whether you’re new to fitness or an experienced athlete, RepAI
            adapts to your progress and guides you step by step.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          How does RepAI create my workout plan ?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our AI analyzes your profile, goals, and preferences to generate a
            tailored plan that updates as you improve.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I track my progress ?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Absolutely! You can log workouts, track performance, and monitor
            your progress over time.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is RepAI free to use ?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            RepAI offers a free plan with essential features. For advanced
            tracking and premium coaching, you can upgrade anytime.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Faq;
