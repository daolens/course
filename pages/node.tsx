import TutorialBlock from "@/components/tutorials/tutorial-block";
import TutorialHeading from "@/components/tutorials/tutorial-heading";
import Layout from "@/components/tutorials/tutorial-layout";
import useTutorialBlocks from "@/hooks/useTutorialBlocks";
import { NODE_TUTORIAL } from "@/lib/data/node-tutorial";
import React from "react";

const ReactTutorial = () => {
  const { activeIndex, hasNext, onNext } = useTutorialBlocks({
    tutorialLength: NODE_TUTORIAL.length,
  });

  return (
    <Layout>
      <TutorialHeading heading="Node tutorial" />
      {NODE_TUTORIAL.map((tutorial, index) => (
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
