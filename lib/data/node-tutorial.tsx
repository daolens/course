import CodeBlock from "@/components/common/codeblock";
import SectionHeading from "@/components/tutorials/section-heading";
import H3 from "@/components/tutorials/section-sub-heading";
import TutorialBody from "@/components/tutorials/tutorial-body";
import Img from "@/components/tutorials/tutorial-image";
import TutorialParagraph from "@/components/tutorials/tutorial-paragraph";
import { Sandpack } from "@codesandbox/sandpack-react";
import Image from "next/image";

export const NODE_TUTORIAL = [
  //   <>
  //     <SectionHeading heading="Why use NodeJS?" />
  //     <p>
  //       ReactJS is a popular JavaScript library used for building user interfaces.
  //       It simplifies the process of building complex UIs by breaking them down
  //       into small, reusable components. Here are some reasons why you should
  //       consider using ReactJS:
  //     </p>
  //     <ol className="flex flex-col gap-2 list-decimal list-inside mt-2">
  //       <li>
  //         <b>Simplifies building UI:</b> ReactJS simplifies building UI by
  //         providing a declarative programming model. Developers can easily create
  //         reusable UI components and compose them to create complex UIs. React
  //         also provides a virtual DOM, which improves performance by reducing the
  //         number of updates to the actual DOM.
  //       </li>

  //       <li>
  //         <b>Adds reusability:</b> ReactJS encourages reusability of components.
  //         This means that developers can create UI components once and use them
  //         across different parts of the application. This approach saves time and
  //         effort and leads to a more consistent and maintainable codebase.
  //       </li>

  //       <li>
  //         <b>Large Community and Ecosystem:</b> ReactJS has a large and vibrant
  //         community of developers and a vast ecosystem of libraries and tools.
  //         This means that developers can easily find solutions to common problems
  //         and share their knowledge and expertise with others.
  //       </li>

  //       <li>
  //         <b>JSX syntax:</b> ReactJS uses JSX syntax, which allows developers to
  //         write HTML-like code inside JavaScript. This makes it easier to
  //         understand and visualize the structure of the UI components and reduces
  //         the likelihood of errors.
  //       </li>
  //     </ol>
  //   </>,
  //   <>
  //     <SectionHeading heading="Creating and nesting components " />
  //     <TutorialBody>
  //       <TutorialParagraph>
  //         React apps are made out of components. A component is a piece of the UI
  //         (user interface) that has its own logic and appearance. A component can
  //         be as small as a button, or as large as an entire page.
  //       </TutorialParagraph>
  //       <TutorialParagraph>
  //         React components are JavaScript functions that return markup:
  //       </TutorialParagraph>
  //       <CodeBlock>
  //         {`function MyButton() {
  //   return (
  //     <button>I'm a button</button>
  //   );
  // }`}
  //       </CodeBlock>
  //       <TutorialParagraph>
  //         Now that you’ve declared MyButton, you can nest it into another
  //         component:
  //       </TutorialParagraph>
  //       <CodeBlock>{`export default function MyApp() {
  //   return (
  //     <div>
  //       <h1>Welcome to my app</h1>
  //       <MyButton />
  //     </div>
  //   );
  // }`}</CodeBlock>
  //       <TutorialParagraph>
  //         Notice that <code>{`<MyButton />`}</code> starts with a capital letter.
  //         That’s how you know it’s a React component. React component names must
  //         always start with a capital letter, while HTML tags must be lowercase.
  //       </TutorialParagraph>
  //       <TutorialParagraph>Have a look at the result:</TutorialParagraph>
  //       <Sandpack
  //         template="react"
  //         files={{
  //           "App.js": `function MyButton() {
  //   return (
  //     <button>
  //       I'm a button
  //     </button>
  //   );
  // }

  // export default function MyApp() {
  //   return (
  //     <div>
  //       <h1>Welcome to my app</h1>
  //       <MyButton />
  //     </div>
  //   );
  // }`,
  //         }}
  //       />
  //     </TutorialBody>
  //   </>,
  <>
    <SectionHeading heading="Getting Started With Node.js " />
    <TutorialBody>
      <TutorialParagraph>
        Learn how to download, setup, and run Node.js on your computer.
      </TutorialParagraph>
      <br/><br/><Img src="/images/node.png" alt="node" width="full" /> <br/><br/>

      <TutorialParagraph>
        Summary of the use-cases of Node.js In this tutorial, I will be walking
        you through the steps needed to start building apps with Node.js. I
        assume that you already know the basics of JavaScript, but if you need a
        refresher, sites like the MDN documentation and W3Schools are great
        places to review your knowledge.
      </TutorialParagraph>
      <TutorialParagraph>
        What is Node.js? Released in 2009, Node.js has revolutionized the way
        servers are programmed by developers. Before the creation of Node.js,
        servers were programmed using languages like PHP or Ruby. Now you can
        use JavaScript, a programming language meant to be used in the frontend,
        to write server code. Thanks to Node.js, developing full-stack
        applications has become much easier for developers. According to
        the official Node.js website, “Node.js® is a JavaScript runtime built
        on Chrome’s V8 JavaScript engine.”
      </TutorialParagraph>
      <TutorialParagraph>
        A JavaScript runtime is an environment where your JavaScript code is
        executed. It provides utility libraries and other tools that can be used
        when your code is ready to execute. A JavaScript *engine*, on the other
        hand, acts as a translator between the client and the user’s CPU. Since
        CPUs cannot natively execute JavaScript, it is the JavaScript engine’s
        job to compile your JS code into machine code, which can then be
        executed by the CPU. Now, let’s take a look at how you can download this
        JavaScript runtime on your own computer.
      </TutorialParagraph>
      <H3 heading="Step 1: Download Node.js" />
      <Img src="/images/img1.png" alt="node" width="full" />
      <TutorialParagraph>
        <a
          href="https://nodejs.org/en/download"
          target="_blank"
          className="hover:underline text-indigo-600"
        >
          Node.js downloads page
        </a>{" "} 
        First, before you install Node.js, you need to make sure you have admin
        privileges to your system (make sure you can download and open programs
        on your computer). Then, you can go over to the 
        <a href="https://nodejs.org/en/download/"
        target="_blank"
        className="hover:underline text-indigo-600">
          official Node.js downloads page 
        </a>{" "} 
         and download the installer suitable for your operating system. When you
        head over there, you will see two different versions of Node: LTS (Long
        Term Support) and Current. LTS is the most stable and tested version,
        while Current includes new features that are under active development. I
        would recommend installing LTS because it is usually the most bug-free
        and suitable for production. Since I am on Windows, I downloaded the
        Windows installer, but if you are on macOS, the setup should be pretty
        similar.
        <br/> <br/><br/> <Img src="/images/img2.png" alt="node" width="full" /> <br/> <br/><br/>

        <H3 heading="Step 2: Run the Installer" />

        You should see a welcome screen that looks similar to this when you open the installer:

        <br/> <br/><br/> <Img src="/images/img4.png" alt="node" width="full" /> <br/> <br/><br/>

        The default options are suitable for most developers, but if you need to change something, make sure you know what you are doing.

        After clicking Next, this screen should show up:

        <br/>  <br/><br/> <Img src="/images/img5.png" alt="node" width="full" /> <br/> <br/><br/>

        This screen should be asking you if you want to install Python and Visual Studio Build tools. If you know that you will be working with C or C++ modules, go ahead and check the box, otherwise, you should leave it unchecked.
        The next screen should install Node onto your computer:
        <br/> <br/> <br/> <Img src="/images/img6.png" alt="node" width="full" /> <br/> <br/><br/>

        <H3 heading="Step 3: Verify the Installation" />

        Next, to make sure that Node.js is properly installed, we need to make sure your computer recognizes Node. We can do this by running the node command in the terminal.

        If you are on Windows, you can run the terminal by searching "cmd" in the start menu:

        <br/> <br/> <br/> <Img src="/images/img7.png" alt="node" width="full" /> <br/> <br/><br/>

        Open the terminal on Windows

        On macOS, typing “terminal” into Spotlight Search should bring up the terminal.
        <br/> <br/> <br/> <Img src="/images/img8.png" alt="node" width="full" /> <br/> <br/><br/>
        Verify that Node.js and NPM are installed on your computer

        After the terminal has opened, verify the installation of Node.js by typing “node -v”. This command should print out the version of Node installed on your computer. In my case, I have Node version 14.15.1 installed. Subsequently, verify npm is installed by running “npm -v” in the terminal. NPM is a package manager that comes with Node.js, which you can learn more about         <a
        href="https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/"
        target="_blank"
        className="hover:underline text-indigo-600"
      >
       here
      </a>{". "}

        If any of these commands yield an error to be displayed, make sure you close other programs that might be affecting the installation and re-download Node.js.


      </TutorialParagraph>
      
    </TutorialBody>
  </>,
];
