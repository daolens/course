import TutorialBlock from "@/components/tutorials/tutorial-block";
import TutorialHeading from "@/components/tutorials/tutorial-heading";
import Layout from "@/components/tutorials/tutorial-layout";
import useTutorialBlocks from "@/hooks/useTutorialBlocks";
import { DUMMY_TUTORIAL } from "@/lib/data/react-tutorial";
import React from "react";

const ReactTutorial = () => {
  const { activeIndex, hasNext, onNext } = useTutorialBlocks({
    tutorialLength: DUMMY_TUTORIAL.length,
  });

  return (
    <Layout>
      <TutorialHeading heading="React tutorial" />
      {DUMMY_TUTORIAL.map((tutorial, index) => (
        <TutorialBlock
          isVisible={activeIndex >= index}
          isFirst={index === 0}
          key={index}
          onNext={hasNext && activeIndex === index ? onNext : undefined}
        >
          {tutorial}
        </TutorialBlock>
      ))}
    </Layout>
  );
};

export default ReactTutorial;
