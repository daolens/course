import {
  SandpackCodeViewer,
  SandpackLayout,
  SandpackProvider,
  useActiveCode,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { CodeMirrorRef } from "@codesandbox/sandpack-react/components/CodeEditor/CodeMirror";
import prettier from "prettier";
import parserBabel from "prettier/parser-babel";
import { RefObject, useCallback, useEffect, useRef, useState } from "react";

type PrettierProps = {
  codemirrorInstance: RefObject<CodeMirrorRef>;
};
const Prettier = ({ codemirrorInstance }: PrettierProps) => {
  const [prettierCode, setPrettierCode] = useState("");
  const { sandpack } = useSandpack();
  const activeCode = useActiveCode();

  const runPrettier = useCallback(() => {
    if (activeCode.code) {
      try {
        const formatted = prettier.format(activeCode.code, {
          parser: "babel",
          plugins: [parserBabel],
        });

        setPrettierCode(formatted);
      } catch {}
    }
  }, [activeCode.code]);

  useEffect(() => {
    const debounce = setTimeout(runPrettier, 100);
    return () => {
      clearInterval(debounce);
    };
  }, [runPrettier]);

  useEffect(() => {
    if (prettierCode) {
      const cmInstance = codemirrorInstance.current?.getCodemirror();

      if (cmInstance) {
        const trans = cmInstance.state.update({
          selection: cmInstance.state.selection,
          changes: {
            from: 0,
            to: cmInstance.state.doc.length,
            insert: prettierCode,
          },
        });

        cmInstance.update([trans]);
      }

      sandpack.updateFile(prettierCode);

      setPrettierCode("");
    }
  }, [prettierCode]);

  return null;
};

type Props = {
  children: React.ReactNode | string;
};

export default function CodeBlock(props: Props) {
  const codemirrorInstance = useRef<CodeMirrorRef>(null);

  return (
    <>
    <br />
      <div className="flex flex-col rounded-2xl p-0">
        <SandpackProvider
          files={{
            "App.js": props.children as string,
          }}
          template="react"
        >
          <div className="flex rounded-2xl bg-white">
            <SandpackLayout style={{ borderRadius: "6px" }}>
              <div className="flex min-w-[300px] max-w-[340px] md:max-w-[900px]">
                <SandpackCodeViewer ref={codemirrorInstance} />
              </div>
              <Prettier codemirrorInstance={codemirrorInstance} />
            </SandpackLayout>
          </div>
        </SandpackProvider>
      </div>
      <br />
    </>
  );
}
