import { Smartphone } from "lucide-react";
import { Button } from "./ui/button";

function CallToAction() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-balance">
          Ready to Transform Your Fitness?
        </h2>
        <p className="text-xl text-muted-foreground text-pretty">
          Join thousands of users who have already achieved their fitness goals
          with RepAI's intelligent coaching.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            <Smartphone className="w-5 h-5 mr-2" />
            Get Started Free
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
