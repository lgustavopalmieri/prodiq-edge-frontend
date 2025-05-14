import { BarChart, Clock, Orbit, ShieldCheck } from "lucide-react";
import * as React from "react";
import MetricsCard from "./MetricsCard";

interface IMetricsProps {}

function getMetricCardColor(currentState: string) {
  switch (currentState) {
    case "excellent":
      return "emerald";
    case "good":
      return "sky";
    case "poor":
      return "amber";
    case "bad":
      return "rose";
    default:
      return "zinc";
  }
}

const Metrics: React.FunctionComponent<IMetricsProps> = (props) => {
  const metric = {
    oee: {
      value: 77.2,
      goal: 80,
      currentState: "excellent",
    },
    performance: {
      value: 77.2,
      goal: 80,
      currentState: "good",
    },
    quality: {
      value: 77.2,
      goal: 80,
      currentState: "poor",
    },
    availability: {
      value: 77.2,
      goal: 80,
      currentState: "bad",
    },
  };

  return (
    <div className="w-1/3 p-4 flex flex-col gap-4">
      <MetricsCard
        icon={Orbit}
        label={"OEE"}
        value={"77.2"}
        color={getMetricCardColor(metric.oee.currentState)}
        goal={metric.oee.goal}
      />
      <MetricsCard
        icon={BarChart}
        label={"PERFORMANCE"}
        value={"85.1"}
        color={getMetricCardColor(metric.performance.currentState)}
        goal={metric.performance.goal}
      />
      <MetricsCard
        icon={ShieldCheck}
        label={"QUALITY"}
        value={"77.2"}
        color={getMetricCardColor(metric.quality.currentState)}
        goal={metric.quality.goal}
      />
      <MetricsCard
        icon={Clock}
        label={"AVAILABILITY"}
        value={"77.2"}
        color={getMetricCardColor(metric.availability.currentState)}
        goal={metric.availability.goal}
      />
    </div>
  );
};

export default Metrics;
