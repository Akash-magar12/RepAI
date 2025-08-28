import { Badge, Brain } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
   <section className="relative overflow-hidden  py-20 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Brain className="w-4 h-4 mr-2" />
                  AI-Powered Fitness
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                  Your Personal AI
                  <span className="text-primary"> Fitness Coach</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                  RepAI creates personalized workout plans based on your goals, fitness level, and available equipment.
                  Get stronger, faster, smarter.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Start Your Journey
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/hero.png"
                alt="People working out with RepAI app interface"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
