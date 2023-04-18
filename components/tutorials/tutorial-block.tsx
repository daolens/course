import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import classNames from "classnames";

type TutorialBlockProps = {
  isVisible: boolean;
  onNext?: () => void;
  isFirst: boolean;
  children: React.ReactNode;
};

const TutorialBlock = ({
  isVisible,
  onNext,
  children,
  isFirst,
}: TutorialBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (containerRef.current && isVisible && !isFirst) {
      const yOffset = 0;
      const y =
        containerRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [isVisible, isFirst]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          key="modal"
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
          transition={{ opacity: { duration: 0.3 } }}
          className={classNames(
            "flex flex-col gap-4 items-center justify-center overflow-hidden",
            !isFirst ? "min-h-screen" : "min-h-[calc(100vh-28px)]"
          )}
        >
          <div>{children}</div>
          <div className="flex gap-2 items-start w-full">
            {onNext && (
              <button
                type="button"
                onClick={onNext}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Next
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TutorialBlock;
