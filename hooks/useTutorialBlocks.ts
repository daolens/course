import { useState } from "react";

type useTutorialBlocksOptions = {
  tutorialLength: number;
};

const useTutorialBlocks = ({ tutorialLength }: useTutorialBlocksOptions) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasNext = activeIndex < tutorialLength - 1;
  const hasPrev = activeIndex > 0;

  const onNext = () => {
    if (hasNext) setActiveIndex((prev) => prev + 1);
  };

  const onBack = () => {
    if (hasPrev) setActiveIndex((prev) => prev - 1);
  };

  return {
    activeIndex,
    hasNext,
    hasPrev,
    onNext,
    onBack,
  };
};

export default useTutorialBlocks;
