import { ProgressCircle } from "@tremor/react";

type ProgressBarColor =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | undefined;

type ProgressCardProps = {
  progress: number;
  color: ProgressBarColor;
};

export const ProgressCircleHero:React.FC<ProgressCardProps> = ({color, progress}) => (
  <ProgressCircle value={progress} className={`mx-auto ${color}`} radius={40} strokeWidth={8} showAnimation={true} color={color}/>
)