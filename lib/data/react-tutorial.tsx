import CodeBlock from "@/components/common/codeblock";
import SectionHeading from "@/components/tutorials/section-heading";
import TutorialBody from "@/components/tutorials/tutorial-body";
import TutorialParagraph from "@/components/tutorials/tutorial-paragraph";
import { Sandpack } from "@codesandbox/sandpack-react";

export const REACT_TUTORIAL = [
  <>
    <SectionHeading heading="Why use ReactJS?" />
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
  <>
    <SectionHeading heading="Writing markup with JSX " />
    <TutorialBody>
      <TutorialParagraph>
        The markup syntax you’ve seen above is called JSX. It is optional, but
        most React projects use JSX for its convenience. All of the tools we
        recommend for local development support JSX out of the box.
      </TutorialParagraph>

      <TutorialParagraph>
        JSX is stricter than HTML. You have to close tags like{" "}
        <code>{`<br />`}</code>. Your component also can’t return multiple JSX
        tags. You have to wrap them into a shared parent, like a{" "}
        <code>{`<div>...</div>`}</code> or an empty <code>{`<>...</>`}</code>{" "}
        wrapper:
      </TutorialParagraph>
      <CodeBlock>{`function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}`}</CodeBlock>
    </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Adding styles" />
    <TutorialBody>
      <TutorialParagraph>
        In React, you specify a CSS class with `className`. It works the same
        way as the HTML `class` attribute:
      </TutorialParagraph>
      <CodeBlock>{`<img className="avatar" />`}</CodeBlock>
      <TutorialParagraph>
        Then you write the CSS rules for it in a separate CSS file:
      </TutorialParagraph>
      <CodeBlock>{`/* In your CSS */
.avatar {
  border-radius: 50%;
}`}</CodeBlock>
      <TutorialParagraph>
        React does not prescribe how you add CSS files. In the simplest case,
        you’ll add a <code>{`<link>`}</code> tag to your HTML. If you use a
        build tool or a framework, consult its documentation to learn how to add
        a CSS file to your project.
      </TutorialParagraph>
    </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Displaying data" />
    <TutorialBody>
      <TutorialParagraph>
        JSX lets you put markup into JavaScript. Curly braces let you “escape
        back” into JavaScript so that you can embed some variable from your code
        and display it to the user. For example, this will display user.name:
      </TutorialParagraph>
      <CodeBlock>
        {`return (
  <h1>
    {user.name}
  </h1>
);`}
      </CodeBlock>
      <TutorialParagraph>
        You can also “escape into JavaScript” from JSX attributes, but you have
        to use curly braces instead of quotes. For example, `
        {`className="avatar"`}
        passes the {`"avatar"`} string as the CSS class, but `
        {`src={user.imageUrl}`}` reads the JavaScript user.imageUrl variable
        value, and then passes that value as the src attribute:
      </TutorialParagraph>
      <CodeBlock>{`return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);`}</CodeBlock>
      <TutorialParagraph>
        You can put more complex expressions inside the JSX curly braces too,
        for example, string concatenation:
      </TutorialParagraph>
      <div className="w-[330px] md:w-auto">
        <Sandpack
          template="react"
          files={{
            "App.js": `const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
`,
          }}
        />
      </div>
      <TutorialParagraph>
        In the above example, `{`style={{}}`}` is not a special syntax, but a
        regular `{`{}`}` object inside the `{`style={}`}` JSX curly braces. You
        can use the style attribute when your styles depend on JavaScript
        variables.
      </TutorialParagraph>
    </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Conditional rendering" />
    <TutorialBody>
      <TutorialParagraph>
        In React, there is no special syntax for writing conditions. Instead,
        you’ll use the same techniques as you use when writing regular
        JavaScript code. For example, you can use an `if` statement to
        conditionally include JSX:
      </TutorialParagraph>
      <CodeBlock>{`let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);`}</CodeBlock>
      <TutorialParagraph>
        If you prefer more compact code, you can use the conditional ? operator.
        Unlike if, it works inside JSX:
      </TutorialParagraph>
      <CodeBlock>{`<div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )}
</div>`}</CodeBlock>
      <TutorialParagraph>
        When you don’t need the else branch, you can also use a shorter logical
        && syntax:
      </TutorialParagraph>
      <CodeBlock>{`<div>
  {isLoggedIn && <AdminPanel />}
</div>`}</CodeBlock>
      <TutorialParagraph>
        All of these approaches also work for conditionally specifying
        attributes. If you’re unfamiliar with some of this JavaScript syntax,
        you can start by always using if...else.
      </TutorialParagraph>
    </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Rendering lists" />
    <TutorialBody>
      <TutorialParagraph>
        You will rely on JavaScript features like for loop and the array map()
        function to render lists of components.
      </TutorialParagraph>
      <TutorialBody>
        For example, let’s say you have an array of products:
      </TutorialBody>
      <CodeBlock>{`const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];`}</CodeBlock>
      <TutorialParagraph>
        Inside your component, use the map() function to transform an array of
        products into an array of `{`<li>`}` items:
      </TutorialParagraph>
      <CodeBlock>{`const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);`}</CodeBlock>
      <TutorialParagraph>
        Notice how `{`<li>`}` has a key attribute. For each item in a list, you
        should pass a string or a number that uniquely identifies that item
        among its siblings. Usually, a key should be coming from your data, such
        as a database ID. React uses your keys to know what happened if you
        later insert, delete, or reorder the items.
      </TutorialParagraph>
      <div className="w-[330px] md:w-auto">
        <Sandpack
          template="react"
          files={{
            "App.js": `const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
`,
          }}
        />
      </div>
    </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Responding to events " />
    <TutorialBody>
      <TutorialParagraph>
        You can respond to events by declaring event handler functions inside
        your components:
      </TutorialParagraph>
      <CodeBlock>{`function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}`}</CodeBlock>
      <TutorialParagraph>
        Notice how `{`onClick={handleClick}`}` has no parentheses at the end! Do
        not call the event handler function: you only need to pass it down.
        React will call your event handler when the user clicks the button.
      </TutorialParagraph>
    </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Updating the screen" />
    <TutorialBody>
      <TutorialParagraph>
        Often, you’ll want your component to “remember” some information and
        display it. For example, maybe you want to count the number of times a
        button is clicked. To do this, add state to your component.
      </TutorialParagraph>
      <TutorialParagraph>
        First, import{" "}
        <a
          className="hover:underline text-indigo-600"
          href="https://react.dev/reference/react/useState"
          target="_blank"
          rel="noreferrer"
        >
          useState
        </a>{" "}
        from React:
      </TutorialParagraph>
      <CodeBlock>{`import { useState } from 'react';`}</CodeBlock>
      <TutorialParagraph>
        Now you can declare a state variable inside your component:
      </TutorialParagraph>
      <CodeBlock>{`function MyButton() {
  const [count, setCount] = useState(0);
  // ...`}</CodeBlock>
      <TutorialParagraph>
        You’ll get two things from `useState`: the current state (`count`), and
        the function that lets you update it (`setCount`). You can give them any
        names, but the convention is to write `[something, setSomething]`.
      </TutorialParagraph>
      <TutorialParagraph>
        The first time the button is displayed, `count` will be 0 because you
        passed 0 to `useState()`. When you want to change state, call
        `setCount()` and pass the new value to it. Clicking this button will
        increment the counter:
      </TutorialParagraph>
      <CodeBlock>
        {`function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}`}
      </CodeBlock>
      <TutorialParagraph>
        React will call your component function again. This time, `count` will
        be 1. Then it will be 2. And so on.
      </TutorialParagraph>
      <TutorialParagraph>
        If you render the same component multiple times, each will get its own
        state. Click each button separately:
      </TutorialParagraph>

      <div className="w-[330px] md:w-auto">
        <Sandpack
          template="react"
          files={{
            "App.js": `import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
`,
          }}
        />
      </div>
      <TutorialParagraph>
        Notice how each button “remembers” its own `count` state and doesn’t
        affect other buttons.
      </TutorialParagraph>
    </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Start a New React Project" />
    <TutorialBody>
      <TutorialParagraph>
        If you want to build a new app or a new website fully with React, we
        recommend picking one of the React-powered frameworks popular in the
        community. Frameworks provide features that most apps and sites
        eventually need, including routing, data fetching, and generating HTML.
      </TutorialParagraph>
      <TutorialParagraph>
        We will show you how to start a new project with <b>NextJS</b>.
      </TutorialParagraph>
      <TutorialParagraph>
        Next.js is a full-stack React framework. It’s versatile and lets you
        create React apps of any size—from a mostly static blog to a complex
        dynamic application. To create a new Next.js project, run in your
        terminal:
      </TutorialParagraph>
      <CodeBlock>{`npx create-next-app@latest`}</CodeBlock>
      <TutorialParagraph>
        Note: Ensure node is installed in your system before running this. Click{" "}
        <a
          href="https://nodejs.org/en/download"
          target="_blank"
          className="hover:underline text-indigo-600"
        >
          here
        </a>{" "}
        to isntall node.
      </TutorialParagraph>
      <TutorialParagraph>
        After running the commend it will ask you to enter project name. Enter
        whatever name you want to give.
      </TutorialParagraph>
      <TutorialParagraph>
        Then it will ask whether to use TypeScript or not, if you are
        comfortable using it select `yes` else you can select `No`.
      </TutorialParagraph>
      <TutorialParagraph>
        Select `Yes` for ESLint. It will help you point out any errors in your
        project.
      </TutorialParagraph>
      <TutorialParagraph>
        Next promt it will ask whether to use TailwindCSS or not. Again
        depending on your familiarity with it you can select `Yes` or `No`.
      </TutorialParagraph>
      <TutorialParagraph>Select `No` for `src/` directory.</TutorialParagraph>
      <TutorialParagraph>
        Select `No` for experimental `app/` directory.
      </TutorialParagraph>
      <TutorialParagraph>
        Simply press enter for `What import alias would you like configured?`
        prompt.
      </TutorialParagraph>
      <TutorialParagraph>
        Now you will see dependencies will start installing for your project. It
        will create a new folder with whatever project name you had passed in
        the first step. Navigate to that folder and run the following command.
      </TutorialParagraph>
      <CodeBlock>{"npm run dev"}</CodeBlock>
      <TutorialParagraph>
        Open{" "}
        <a
          href="http://localhost:3000/"
          target="_blank"
          className="hover:underline text-indigo-600"
        >
          http://localhost:3000
        </a>{" "}
        on your browser and you will see your application running! You can make
        changes to `/pages/index.tsx` and upon saving they will reflect in your
        browser.
      </TutorialParagraph>
    </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Next Steps" />
    <TutorialParagraph>
      By now, you know the basics of how to write React code!
    </TutorialParagraph>
    <TutorialParagraph>
      Check out our Discord channel,{" "}
      <a
        href="https://discord.gg/RQ6pzuKE"
        target="_blank"
        className="hover:underline text-indigo-600"
      >
        Coding Corner
      </a>{" "}
      where we build weekly fullstack projects.
    </TutorialParagraph>
  </>,
];
