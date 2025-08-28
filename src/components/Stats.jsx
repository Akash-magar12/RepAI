import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  return (
    <section className="sm:py-20 py-15">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">

          {/* Active Users */}
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold text-primary">
              <CountUp end={inView1 ? 50000 : 0} duration={2} separator=",">
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              +
            </div>
            <div className="text-lg text-muted-foreground">Active Users</div>
            <div ref={ref1} /> {/* Intersection Observer target */}
          </div>

          {/* Workouts Completed */}
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold text-primary">
              <CountUp end={inView2 ? 100000 : 0} duration={2.5} separator=",">
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              +
            </div>
            <div className="text-lg text-muted-foreground">Workouts Completed</div>
            <div ref={ref2} />
          </div>

          {/* Success Rate */}
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold text-primary">
              <CountUp end={inView3 ? 95 : 0} duration={2}>
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
              %
            </div>
            <div className="text-lg text-muted-foreground">Success Rate</div>
            <div ref={ref3} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
