import CodeBlock from "@/components/common/codeblock";
import SectionHeading from "@/components/tutorials/section-heading";
import TutorialBody from "@/components/tutorials/tutorial-body";
import TutorialParagraph from "@/components/tutorials/tutorial-paragraph";
import { Sandpack } from "@codesandbox/sandpack-react";

export const NODE_TUTORIAL = [
  <>
    <SectionHeading heading="Why use NodeJS?" />
    <p>
      ReactJS is a popular JavaScript library used for building user interfaces.
      It simplifies the process of building complex UIs by breaking them down
      into small, reusable components. Here are some reasons why you should
      consider using ReactJS:
    </p>
    <ol className="flex flex-col gap-2 list-decimal list-inside mt-2">
      <li>
        <b>Simplifies building UI:</b> ReactJS simplifies building UI by
        providing a declarative programming model. Developers can easily create
        reusable UI components and compose them to create complex UIs. React
        also provides a virtual DOM, which improves performance by reducing the
        number of updates to the actual DOM.
      </li>

      <li>
        <b>Adds reusability:</b> ReactJS encourages reusability of components.
        This means that developers can create UI components once and use them
        across different parts of the application. This approach saves time and
        effort and leads to a more consistent and maintainable codebase.
      </li>

      <li>
        <b>Large Community and Ecosystem:</b> ReactJS has a large and vibrant
        community of developers and a vast ecosystem of libraries and tools.
        This means that developers can easily find solutions to common problems
        and share their knowledge and expertise with others.
      </li>

      <li>
        <b>JSX syntax:</b> ReactJS uses JSX syntax, which allows developers to
        write HTML-like code inside JavaScript. This makes it easier to
        understand and visualize the structure of the UI components and reduces
        the likelihood of errors.
      </li>
    </ol>
  </>,
  <>
    <SectionHeading heading="Creating and nesting components " />
    <TutorialBody>
      <TutorialParagraph>
        React apps are made out of components. A component is a piece of the UI
        (user interface) that has its own logic and appearance. A component can
        be as small as a button, or as large as an entire page.
      </TutorialParagraph>
      <TutorialParagraph>
        React components are JavaScript functions that return markup:
      </TutorialParagraph>
      <CodeBlock>
        {`function MyButton() {
  return (
    <button>I'm a button</button>
  );
}`}
      </CodeBlock>
      <TutorialParagraph>
        Now that you’ve declared MyButton, you can nest it into another
        component:
      </TutorialParagraph>
      <CodeBlock>{`export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`}</CodeBlock>
      <TutorialParagraph>
        Notice that <code>{`<MyButton />`}</code> starts with a capital letter.
        That’s how you know it’s a React component. React component names must
        always start with a capital letter, while HTML tags must be lowercase.
      </TutorialParagraph>
      <TutorialParagraph>Have a look at the result:</TutorialParagraph>
      <Sandpack
        template="react"
        files={{
          "App.js": `function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}`,
        }}
      />
    </TutorialBody>
  </>,
];
