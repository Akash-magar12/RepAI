import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const features = [
  {
    title: "Intelligent Workout Plans",
    description:
      "Our AI analyzes your fitness level, goals, and preferences to create tailored workout routines that evolve with your progress.",
    image: "/feat1.webp",
    color: "bg-primary/10",
  },
  {
    title: "Real-Time Progress Tracking",
    description:
      "Monitor your improvements with detailed analytics, performance metrics, and visual progress reports that keep you motivated.",
    image: "/feat2.webp",
    color: "bg-accent/10",
  },
  {
    title: "Equipment Adaptation",
    description:
      "Whether you're at home, in the gym, or traveling, RepAI adapts your workouts to whatever equipment you have available.",
    image: "/feat3.webp",
    color: "bg-primary/10",
  },
  {
    title: "Community Support",
    description:
      "Connect with trainers and fellow fitness enthusiasts. Share achievements, get motivation, and stay accountable together.",
    image: "/feat4.webp",
    color: "bg-accent/10",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Busy schedule? No problem. RepAI creates efficient workouts that fit your time constraints without compromising results.",
    image: "/feat5.webp",
    color: "bg-primary/10",
  },
  {
    title: "Nutrition Guidance",
    description:
      "Complement your workouts with personalized meal plans and nutrition advice tailored to support your fitness goals.",
    image: "/feat6.webp",
    color: "bg-accent/10",
  },
];

const Feature = () => {
  return (
    <section className="sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Why Choose <span className="text-primary">RepAI</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of fitness with AI-powered personalization
            that adapts to your unique needs.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 h-full"
            >
              <CardHeader className="pb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 rounded-md object-cover mb-4"
                />
                <CardTitle className="text-xl font-semibold text-center">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
