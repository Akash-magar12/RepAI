import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Stats = () => {
  return (
    <section className="sm:py-20 py-15">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Active Users */}
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold text-primary">
              <CountUp end={50000} duration={2} separator=",">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </div>
            <div className="text-lg text-muted-foreground">Active Users</div>
          </div>

          {/* Workouts Completed */}
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold text-primary">
              <CountUp end={100000} duration={2.5} separator=",">
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </div>
            <div className="text-lg text-muted-foreground">
              Workouts Completed
            </div>
          </div>

          {/* Success Rate */}
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold text-primary">
              <CountUp end={95} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </div>
            <div className="text-lg text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
