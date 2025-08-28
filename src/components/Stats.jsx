const Stats = () => {
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold text-primary">
              50K+
            </div>
            <div className="text-lg text-muted-foreground">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold text-accent">
              1M+
            </div>
            <div className="text-lg text-muted-foreground">
              Workouts Completed
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold text-primary">
              95%
            </div>
            <div className="text-lg text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
