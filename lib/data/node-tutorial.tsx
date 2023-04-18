import CodeBlock from "@/components/common/codeblock";
import SectionHeading from "@/components/tutorials/section-heading";
import H3 from "@/components/tutorials/section-sub-heading";
import TutorialBody from "@/components/tutorials/tutorial-body";
import Img from "@/components/tutorials/tutorial-image";
import TutorialParagraph from "@/components/tutorials/tutorial-paragraph";
import { Sandpack } from "@codesandbox/sandpack-react";
import Image from "next/image";
import vid1 from "../../public/videos/vid1.mov";

export const NODE_TUTORIAL = [
  <>
    <SectionHeading heading="Getting Started With Node.js " />
    <TutorialBody>
      <TutorialParagraph>
        Learn how to download, setup, and run Node.js on your computer.
      </TutorialParagraph>
      <br />
      <br />
      <Img src="/images/node.png" alt="node" width="full" /> <br />
      <br />
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
        applications has become much easier for developers. According to the
        official Node.js website, “Node.js® is a JavaScript runtime built on
        Chrome’s V8 JavaScript engine.”
      </TutorialParagraph>
      <TutorialParagraph>
        A JavaScript runtime is an environment where your JavaScript code is
        executed. It provides utility libraries and other tools that can be used
        when your code is ready to execute. A JavaScript engine, on the other
        hand, acts as a translator between the client and the user’s CPU. Since
        CPUs cannot natively execute JavaScript, it is the JavaScript engine’s
        job to compile your JS code into machine code, which can then be
        executed by the CPU. Now, let’s take a look at how you can download this
        JavaScript runtime on your own computer.
      </TutorialParagraph>
      <H3 heading="Step 1: Download Node.js" />
      <Img src="/images/img1.png" alt="node" width="full" />
      <TutorialParagraph>
      {" "}<a
          href="https://nodejs.org/en/download"
          target="_blank"
          className="hover:underline text-indigo-600"
        >
          Node.js downloads page
        </a>{" "}
        First, before you install Node.js, you need to make sure you have admin
        privileges to your system (make sure you can download and open programs
        on your computer). Then, you can go over to the
        {" "}<a
          href="https://nodejs.org/en/download/"
          target="_blank"
          className="hover:underline text-indigo-600"
        >
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
        <br /> <br />
        <br /> <Img
          src="/images/img2.png"
          alt="node"
          width="full"
        /> <br /> <br />
        <br />
      </TutorialParagraph>
      <H3 heading="Step 2: Run the Installer" />
      <TutorialParagraph>
        You should see a welcome screen that looks similar to this when you open
        the installer:
        <br /> <br />
        <br /> <Img
          src="/images/img4.png"
          alt="node"
          width="full"
        /> <br /> <br />
        <br />
        The default options are suitable for most developers, but if you need to
        change something, make sure you know what you are doing. After clicking
        Next, this screen should show up:
        <br /> <br />
        <br /> <Img
          src="/images/img5.png"
          alt="node"
          width="full"
        /> <br /> <br />
        <br />
        This screen should be asking you if you want to install Python and
        Visual Studio Build tools. If you know that you will be working with C
        or C++ modules, go ahead and check the box, otherwise, you should leave
        it unchecked. The next screen should install Node onto your computer:
        <br /> <br /> <br />{" "}
        <Img src="/images/img6.png" alt="node" width="full" /> <br /> <br />
        <br />
      </TutorialParagraph>
      <H3 heading="Step 3: Verify the Installation" />
      <TutorialParagraph>
        Next, to make sure that Node.js is properly installed, we need to make
        sure your computer recognizes Node. We can do this by running the node
        command in the terminal. If you are on Windows, you can run the terminal
        by searching `cmd` in the start menu:
        <br /> <br /> <br />{" "}
        <Img src="/images/img7.png" alt="node" width="full" /> <br /> <br />
        <br />
        Open the terminal on Windows On macOS, typing “terminal” into Spotlight
        Search should bring up the terminal.
        <br /> <br /> <br />{" "}
        <Img src="/images/img8.png" alt="node" width="full" /> <br /> <br />
        <br />
        Verify that Node.js and NPM are installed on your computer After the
        terminal has opened, verify the installation of Node.js by typing “node
        -v”. This command should print out the version of Node installed on your
        computer. In my case, I have Node version 14.15.1 installed.
        Subsequently, verify npm is installed by running “npm -v” in the
        terminal. NPM is a package manager that comes with Node.js, which you
        can learn more about
        {" "}<a
          href="https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/"
          target="_blank"
          className="hover:underline text-indigo-600"
        >
          here
        </a>
        {". "}
        If any of these commands yield an error to be displayed, make sure you
        close other programs that might be affecting the installation and
        re-download Node.js.
      </TutorialParagraph>
    </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Features of Node.js " />
    <TutorialBody>
      <H3 heading="What is Node.js?" />
      <TutorialParagraph>
        Node.js is an open-source, cross-platform JavaScript runtime environment
        that executes JavaScript code outside of a web browser. Let’s take a
        look at what each of these words mean.
      </TutorialParagraph>
      <ol className="flex flex-col gap-2 list-decimal list-inside mt-2">
        <li>
          Open-source: Node.js has a healthy community of collaborators who work
          on keeping Node.js feature-rich and up-to-date.
        </li>
        <li>
          Cross-platform: Node.js applications can be run on Windows, macOS, or
          Linux.
        </li>
        <li>
          Runtime environment: Node.js is built on Google Chrome’s V8 engine and
          provides everything you need to run JavaScript outside the browser.
        </li>
      </ol>



      <H3 heading="One-man army" />
      <TutorialParagraph>
      A Node.js app runs in a single process. While this certainly has its pros and cons, the asynchronous nature of Node.js allows it to handle multiple requests to a server without the hassle of managing threads.
      </TutorialParagraph>
      <H3 heading="So many packages" />
      <TutorialParagraph>
      Node.js has over 1,000,000 open-source packages hosted on npm. This has helped Node.js grow drastically. It is often easier to use a package rather than writing code from scratch. Code reusability has enhanced greatly with the use of packages.
      </TutorialParagraph>
      <H3 heading="Under the hood" />
      <TutorialParagraph>
      Node.js has over 1,000,000 open-source packages hosted on npm. This has helped Node.js grow drastically. It is often easier to use a package rather than writing code from scratch. Code reusability has enhanced greatly with the use of packages.
      </TutorialParagraph>
      
    </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Blocking and Non-blocking" />
    <TutorialBody>
      <H3 heading="Single-threaded applications" />
      <TutorialParagraph>
      For simple programs, such as beginner-level tasks, we often don’t need more than one thread. However, if we were doing something complex, like running the web server that is hosting this very website, we would be dealing with thousands of concurrent users wanting to access our site. Let’s see how that might look if we were working with a single thread.
      </TutorialParagraph>
      <video src={require('../../public/videos/vid2.mov')} className="w-full" controls>
      </video>

      Single-threaded applications often get bogged down due to long processes that take time to execute. These processes can cause a block as the application needs to wait for a process to complete before moving ahead.

      <H3 heading="Multi-threaded applications" />
      <TutorialParagraph>
      We want multiple users to be able to access our website simultaneously. One way would be to have multiple threads, where each thread can serve a single user. Great! Problem solved? Not exactly. Let’s look at the problem again.      </TutorialParagraph>
      <video src={require('../../public/videos/vid3.mov')} className="w-full" controls>
      </video>
      Each thread is serving a single user. Whether the user is reading the course or perhaps not generating any requests to the server, our idle thread is still assigned to the user.
      <H3 heading="Problem solved?" />
      <TutorialParagraph>
      We can serve more users now. However, as we dive deeper into back-end development, we will come across multiple ways of doing the same thing. Efficiency is essential if we want our services to scale well. In our example, we can simply add more computing resources as we need them. While this may seem like a simple solution, it comes at the cost of getting more hardware or computational resources. Let’s see if we can do something more efficient.
      </TutorialParagraph>
      <H3 heading="Asynchronous processing" />
      <TutorialParagraph>
      This is where Node.js shines. You do not need to wait for the file to be read; instead, you can just ask the OS to work on it and call you back when it’s done reading. Conveniently, asynchronous processes use this very paradigm. Let’s see how that works.      

      <video src={require('../../public/videos/vid4.mov')} className="w-full" controls>
      </video>
      </TutorialParagraph>

      <H3 heading="The beauty of Node.js" /> 
      <TutorialParagraph>
      Node.js applications run on a single thread and are still able to keep up with multi-threaded applications. This is because Node.js takes full advantage of asynchronous computing. It allows a single server to handle multiple clients at once. Processes, such as fetching data from storage or making new connections, can all be performed asynchronously, ensuring that the application does not get blocked. Furthermore, Node.js processes code sequentially. Without asynchronous operations, the entire program would halt until a file is read or a setTimeout() is called.
      </TutorialParagraph>

      </TutorialBody>
  </>,
  <>
      <SectionHeading heading="Input" />
      <TutorialBody>
        <H3 heading="Command line input" />
        <TutorialParagraph>
        Let’s start with the most basic form of input, the command line input. Depending on how much you have used a terminal before, you may or may not be familiar with passing input to a program using the terminal. Let’s see how we do that first.
        Suppose we have a simple program called app.js. This program prints out whatever you pass to it. You can pass it arguments by simply writing them after the program’s name in the terminal. Try it out with the command node app.js Hello. Hit the RUN button to get started.

        <CodeBlock>
          {`
          console.log('Hey there,' , process.argv[2]); 
          //  process.argv.forEach((val, index) => {
          //   console.log(\`\${index}: \${val}\`);
          // });
          
          `}
        </CodeBlock>

        In this simple example, it is just one line of code. You might remember the console.log from the Hello World in the first lesson. The console is a very versatile module that we will explore more in a later section. The process module and, specifically, process.argv is what we want to focus on right now. You might be wondering why we have a 2 in square brackets after argv. This is because all of our command-line arguments are passed to the argv property.

      <ol className="flex flex-col gap-2 list-decimal list-inside mt-2" >
        <li>The first argument, 0, is the process.execPath, which is the path of the node executable.</li>
        <li>The second argument, 1, is the path of the JavaScript file that is being run.</li>
        <li>The next argument(s) are the command-line arguments, if any have been passed. In our case, this will be a simple Hello.</li>
      </ol>

      Try uncommenting the code on line 2 to line 4 to get an idea about the indices used.
      <H3 heading="Console input" />

      In Node.js, we often don’t need to use console input in our programs since we are usually working with programs that have an easy-to-use front-end. However, sometimes we do need to use the console for input. For that, we have the readline module. Let’s see how that works. Hit the RUN button to get started.

      <CodeBlock>
          {`         
          const readline = require('readline');

          const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
          
          let query = 'What is your name?\n'
          
          rl.question(query, (answer) => {
            console.log(\`Hello \${answer}!\`);
            
            rl.close();
          });
          `}
        </CodeBlock>

        Let’s break down the code and see what is happening:

        <ol className="flex flex-col gap-2 list-decimal list-inside mt-2" >
        <li>On line 1, we are importing the readline module so that we can use it in our code.</li>
        <li>The readline module needs an interface to work. This interface can be a file, or in our case, the console. We want to get input from the console and output some information on the console. In Node.js, the process object has two properties that can help us: the stdin for input and stdout for output. We use the createInterface method to create a new readline.Interface instance and save that as rl on line 3.</li>
        <li>We define our query on line 8. This is what will be displayed on the console.</li>        
        <li>The readline.Interface has a method, which is aptly named question. This allows us to ask the user a question from the console. The question method takes a query string that we have defined before and a callback function. The callback function is passed the input as the first parameter.</li>
        <li>Our callback function is a simple console.log() with a ${`answer`} in backticks. The ${`answer`} with backticks get replaced with whatever is passed as the answer. This is done on line 11.</li>
        <li>A very important method, rl.close(), is called on line 13. This method informs the interface that we are done with our console I/O and Node.js can proceed further.</li>
      </ol>

        </TutorialParagraph>
        It may seem like a plethora of information has been presented to you, but things will start to make more sense as we move ahead with the course. We will discuss most of the technical terms discussed above in the coming lessons.
        </TutorialBody>
  </>,
  <>
          <SectionHeading heading="Console " />
          <TutorialBody>
            <H3 heading="Debugging made easy" />
            <TutorialParagraph>
            In this lesson, we shall look at a few different functionalities that this module provides.
            The console module that Node.js provides is similar to the JavaScript console that most browsers provide. In case you had not noticed, we were not importing the console module before using console.log. The reason we were not importing anything is that there is a global console instance that is configured to write to process.stdout and process.stderr. Let’s look at some of the options that the global console provides.
                
            <CodeBlock>
              {`
              
              console.log('Hello World');

              console.warn('This is a warning!');
              
              console.error('This is an error');
              
              console.error(new Error('This is a different error'));
              
              `}
            </CodeBlock>
    
            You can notice that both the console.warn and console.error have their output in a red box. Educative’s code widget uses that to represent an error. Furthermore, we have two console.errors: one on line 5 and another on line 7. We pass the second console.error, an Error object with a string instead of just a string, which is why we get a trace as well.

            Error objects capture a stack trace, which points to where the Error was instantiated in the code.
            These console methods can help track down bugs and problems with code.
            </TutorialParagraph>
            <H3 heading="console.trace()" />
            <TutorialParagraph>

            

            The console.trace is used to print a stack trace. As we’ve seen above, a stack trace is a very useful debugging tool. It shows us the call stack when an exception is thrown or when we call console.trace. This allows us to trace back to where the problem originated from within the code. Let’s see it in action.

            <CodeBlock>
              {`
              
              var smallFunction = function (){
                console.trace('Let us look at the trace');
              }
              
              var bigFunction = function () {
                smallFunction()
              }
              
              bigFunction()
              
              `}
            </CodeBlock>

            <Img src="/images/img10.png" alt="node" width="full" />

            Looking at the example above we can see that:
            <ol className="flex flex-col gap-2 list-decimal list-inside mt-2" >
            <li>The function where the console.trace function was called is named smallFunction.</li>
            <li>The function is located in a file at /usrcode/index.js.</li>
            <li>The function was called on column 11 of line 2.</li>
          </ol>


            <H3 heading="More methods" />
            As Node.js improves over time, new features get added to it. While it may not be possible to keep track of them all, we will discuss a few more methods for console below.
            <CodeBlock>
              {`
              console.time('For loop time');
              for (let i = 0; i < 100; i++) {
                // processing
              }
              console.timeEnd('For loop time');
              
              console.table([{ "Fruit": "Apple", "Quantity": 5 }, { "Fruit": "Mango", "Quantity": 7 }]);
              `}
            </CodeBlock>

            <ol className="flex flex-col gap-2 list-decimal list-inside mt-2" >
            <li>The console.time in line 1 starts a timer with a name that we pass to it as a string.</li>
            <li>The console.timeEnd in line 5 stops the timer with the name we pass to it. It prints the time elapsed since the timer was started.</li>
            <li>The console.table outputs tabular data in a table-like format on the console.</li>
          </ol>

          <H3 heading="The Console class" />

          Previously, we were using the global console for printing to the console. What if we wanted to output to a file? For that, we use the Console class. This allows us to make a simple logger. Let’s take a look at the code.

          <CodeBlock>
              {`
              
              const fs = require('fs');
const { Console } = require('console');

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');

const logger = new Console({ stdout: output, stderr: errorOutput });

const number = 5;
logger.log('number:', number);
// In stdout.log: number 5
const code = 9
logger.error('error code:', code);
              
              `}
            </CodeBlock>
    
            </TutorialParagraph>
            </TutorialBody>
  </>,
  <>
    <SectionHeading heading="Node.JS Modules & Exports " />
    <TutorialBody>
      <H3 heading="What is a module?" />
      <TutorialParagraph>
      A module in NodeJS is a simple or complex JavaScript file which can be used throughout your web app. In short, each module is just a file with JavaScript code in it.

      There are three types of modules:
      </TutorialParagraph>

      <H3 heading="Core Modules:" />
      <TutorialParagraph>
      These type of modules include bare minimum functionalities in Node.JS. Common examples can be:

      http : to build a simple HTTP server
      paths : to deal with file paths
      fs : work with simple file input/output operations
      </TutorialParagraph>

      <H3 heading="Local Modules" />
      <TutorialParagraph>
      These are the modules built by you: the programmer.

It’s good practice to write modules as it promotes cleanliness of your code and make your code modular(you can reuse your module in other projects without a lot of additional effort)
      </TutorialParagraph>

      <H3 heading="Third Party Modules" />
      <TutorialParagraph>
      These types of modules are built by the programming community. They mostly include complex code so that the programmer can add functionality to his app without writing it himself. This way, he saves time as well.
      </TutorialParagraph>
      
      <H3 heading="How can I use these modules?" />
      <TutorialParagraph>
      When using modules, you simply use the function require()
      
      <CodeBlock>
        {`
        const myModule = require("moduleName") 
        `}
      </CodeBlock>

      Example:
      Lets use fs (file system module) to read a simple text file as an example:
      Open notepad, write any piece of text on it and then save it anywhere. Let’s name it “demofile.txt”. Open your code editor and write this piece of code and save it as the same directory as your .txt file:


      
      <CodeBlock>
        {`
        const fs = require("fs")
        fs.readFile("demofile.txt" , {encoding : 'utf-8'} , function(err,data) {
        if(err) console.log(err)
        console.log(data)
        })
        `}
      </CodeBlock>
      now save it as “fsExample.js” and run it on your command line:
      <CodeBlock>
        {`
        node fsExample
        `}
      </CodeBlock>

      As a result, you’ll see the contents of your text file printed out
Details of the readFile method:
The first parameter is the name of the text file you wish to read
Second parameter is your options : here, encoding method is ‘utf-8’ so that text can be printed out. If you don’t specify the options, it will print out buffer values, which are unreadable to humans.
Third parameter is the callback function.
What are callback functions? Learn about them here . 
First we check whether there are errors(maybe error in reading file or etc.) and then print them out if they are present, otherwise the contents of the file are printed out if everything’s okay.

      </TutorialParagraph>
      
      <H3 heading="Using Third Party Modules" />
      <TutorialParagraph>
      First install a module through npm
Lets install express as an example
<CodeBlock>
        {`
        npm i express
        `}
      </CodeBlock>

      Then require() like so:

      <CodeBlock>
        {`
        const express = require('express')
        `}
      </CodeBlock>
      <H3 heading="Using local modules" />
      <TutorialParagraph>
      To use your own modules(local modules) , you have to ‘export’ it first. You can export strings, functions , variables etc.
      Syntax is as follows:

            <CodeBlock>
        {`
        module.exports = <Object to be exported> 
        `}
      </CodeBlock>
      The most simple example
      Create a module called ‘message.js’ and another called ‘app.js’.
      <br/>
      message.js:
      <CodeBlock>
        {`
        module.exports = "Hello World"        
        `}
      </CodeBlock>
      <br/>
      app.js:
      <CodeBlock>
        {`
        const message = require('./message.js')
console.log(message)
        `}
      </CodeBlock>

      Run the code app.js on the command line. As a result, “Hello World” will be printed out.
To export a function, the code is similar:
<br/>
message.js
<CodeBlock>
        {`
        module.exports = function() {
          console.log("Hello World")
          }
        `}
      </CodeBlock>

      <br/>
      app.js
      <CodeBlock>
        {`
        const message = require("./message.js")
        message();
        `}
      </CodeBlock>


      </TutorialParagraph>

      </TutorialParagraph>


      <H3 heading="Exports object" />
      <TutorialParagraph>
      exports is an object. Thus , you can add properties to it.
module.exports
<br/>
message.js:
<CodeBlock>
        {`
        module.exports.sayHello = function() {
          console.log('Hello')
          }
          module.exports.sayCustomMessage = function(message) {
          console.log(message)
          }
          module.exports.myVariable = 4
          module.exports = {
          firstName: 'Hussain' 
          lastName: 'Arif'
          }
        `}
      </CodeBlock>

      <br/>
      app.js:
      <CodeBlock>
        {`
        const message = require('./message.js')
        message.sayHello()
        message.sayCustomMessage('Goodbye!');
        console.log(message.myVariable)
        console.log(message.firstName + ' ' + message.lastName)
        `}
      </CodeBlock>

      The require method can be used to import:

      <CodeBlock>
        {`
        const filesystem = require('fs') // core module
        const express = require('express') // npm module
        const server = require('./boot/server.js') // server.js file with a relative path down the tree
        const server = require('../boot/server.js') // server.js file with a relative path up the tree
        const server = require('/var/www/app/boot/server.js') // server.js file with an absolute path
        const server = require('./boot/server') // file if there's the server.js file
        const routes = require('../routes') // index.js inside routes folder if there's no routes.js file
        const databaseConfigs = require('./configs/database.json') // JSON file
        `}
      </CodeBlock>

      Note: To require a third party/NPM module do not include “.” or “..” in your parameters.The modules will already be present in the “node_modules” directory located in your project
      </TutorialParagraph>

      </TutorialBody>
  </>,
    <>
    <SectionHeading heading="package.json " />
    <TutorialBody>
      <H3 heading="What is package.json?" />
      <TutorialParagraph>
      Every published package has a package.json file. This file makes it easy for others to manage and install the package. It gives information to npm that allows it to identify the package as well as handle the package’s dependencies. Node.js is only aware of two fields: name and version. However, other fields, such as dependencies, and main are vital for a package to be used.
      Let’s take a look at the content in the package.json of jsonwebtoken, a popular Node.js package that is used for authentication.   
      <CodeBlock>
        {`
{
  "name": "jsonwebtoken",
  "version": "8.5.1",
  "description": "JSON Web Token implementation (symmetric and asymmetric)",
  "main": "index.js",
  "nyc": {
    "check-coverage": true,
    "lines": 95,
    "statements": 95,
    "functions": 100,
    "branches": 95,
    "exclude": [
      "./test/**"
    ],
    "reporter": [
      "json",
      "lcov",
      "text-summary"
    ]
  },
  "scripts": {
    "lint": "eslint .",
    "coverage": "nyc mocha --use_strict",
    "test": "npm run lint && npm run coverage && cost-of-modules"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/auth0/node-jsonwebtoken"
  },
  "keywords": [
    "jwt"
  ],
  "author": "auth0",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/auth0/node-jsonwebtoken/issues"
  },
  "dependencies": {
    "jws": "^3.2.2",
    "lodash.includes": "^4.3.0",
    "lodash.isboolean": "^3.0.3",
    "lodash.isinteger": "^4.0.4",
    "lodash.isnumber": "^3.0.3",
    "lodash.isplainobject": "^4.0.6",
    "lodash.isstring": "^4.0.1",
    "lodash.once": "^4.0.0",
    "ms": "^2.1.1",
    "semver": "^5.6.0"
  },
  "devDependencies": {
    "atob": "^2.1.2",
    "chai": "^4.1.2",
    "conventional-changelog": "~1.1.0",
    "cost-of-modules": "^1.0.1",
    "eslint": "^4.19.1",
    "mocha": "^5.2.0",
    "nsp": "^2.6.2",
    "nyc": "^11.9.0",
    "sinon": "^6.0.0"
  },
  "engines": {
    "npm": ">=1.4.28",
    "node": ">=4"
  },
  "files": [
    "lib",
    "decode.js",
    "sign.js",
    "verify.js"
  ]
}
        
        `}
      </CodeBlock>

      <br />

      There are several different descriptors in the package.json file, let’s take a look at some of the common ones.

      <br /><br /><Img src="/images/img11.png" alt="node" width="full" /> <br /><br />

      Other fields such as -— author, contributors, and homepage – are used to give credit and links for additional references.

      </TutorialParagraph>

      <H3 heading="Package dependencies" />
      <TutorialParagraph>
      Dependencies can be added to the package.json file automatically, using the CLI.
      To add dependencies to the package.json file from the command line, you can install them in the root directory of the package. This is the command:
      <CodeBlock>
        {`
npm install <package-name>
        `}
      </CodeBlock>

      For devDependencies we use the --save-dev flag. This is the command:

      <CodeBlock>
        {`
npm install <package-name> --save-dev
        `}
      </CodeBlock>

      We can also edit the package.json file manually to add dependencies using a text editor.
      </TutorialParagraph>

      <H3 heading="Installing dependencies" />
      <TutorialParagraph>
      While working on a Node.js project, we often install a number of packages and dependencies. Another benefit of the package.json file is that it allows us to install all the dependencies with just a single line. The package.json is located in the root directory of projects and contains all the dependencies of the project. So, to install the dependencies for a project, all you have to do is go to the root directory of the project and use the following command:

      <CodeBlock>
        {`
npm install
        `}
      </CodeBlock>

      This command is very useful when installing projects from websites such as GitHub.
      </TutorialParagraph>

      <H3 heading="package-lock.json" />
      <TutorialParagraph>
      You might have noticed the ^ before the version numbers in the dependencies above. This caret is added to show the minimum version that is needed for this package to run. This means that we need jws version 3.2.2 for this package to run. This is on line 39. However, if there was an update to jws and a newer version, 3.2.3, was released, the next time someone installs the jsonwebtoken package, they will install the latest version of jws. Usually, updating to a newer version does not cause issues as long as the major version is the same. However, sometimes, a newer version of a dependency can prevent packages from working as expected. This is where the package-lock.json comes in.

The package-lock.json is automatically generated when either the node_modules tree or package.json is modified by npm. It describes the exact tree that was generated. This allows us to ensure a consistent install with compatible dependencies across devices.

      </TutorialParagraph>
      </TutorialBody>
</>,
    <>
    <SectionHeading heading=" Sample Project " />
    <TutorialBody>
      <H3 heading="Getting started" />
      <TutorialParagraph>
      As I reach the end of my time as a student at Flatiron School, I can’t help but feel excited about all the doors my newfound coding skills can open. One of those doors is learning new languages and runtimes. Unfortunately, I’ve let my anticipation get the best of me by putting together this tutorial. Today, we will create a RESTful book list API (i.e. endpoints that will create a book, get/read a list of all books, get a particular book, delete a book, and update a book). I created a GitHub repo          
      {" "} <a
          href="https://github.com/siegelverse/bookListApi"
          target="_blank"
          className="hover:underline text-indigo-600"
        >
          here
        </a>{" "} 
        for anyone who wants to follow along or build off of what we’ll make today.

      </TutorialParagraph>

      <H3 heading="First Steps" />
      <TutorialParagraph>
      I presume that you already have your environment set up (i.e Node.js and MongoDB is installed).
If you’re not sure, run npm -v and mongo --version in your terminal. These commands will show you the version of NPM and MongoDB you have installed.
You likely have Node already installed on your machine, if not, follow this link to install it.
Once you have finished installing, let’s begin our journey with the following basic steps.
Open your terminal and follow along:
<ol className="flex flex-col gap-2 list-decimal list-inside mt-2">
        <li>
        Create a Folder name bookListApi — mkdir bookListApi
        </li>
        <li>
        Navigate to the root of your newly created folder — cd bookListApi
        </li>
        <li>
        Create a package.json file — npm init
        </li>
      </ol>


Package.json is a file that gives the necessary information to npm which allows it to identify the project as well as handle the project&apos;s dependencies.
npm init will prompt you to enter some information such as the app name, description, version, author, and keyword.
You should have something like this:
<Img src="/images/img12.png" alt="node" width="half" /> <br />

Type yes and hit enter to complete the creation of our package.json. Having completed these steps, your folder structure should look like this:

<Img src="/images/img13.png" alt="node" width="half" /> <br />
Create a file called server.js — touch server.js. With this, we will be writing the protocols to create our server.
Create a folder called api — mkdir api
Inside the api folder, create an additional three folders called models, routes, and controllers by running mkdir api/controllers api/models api/routes
<Img src="/images/img14.png" alt="node" width="half" /> <br />
Create bookListController.js in the api/controller folder, bookListRoutes.js in the routes folder, and bookListModel in the model folder —
touch api/controllers/bookListController.js api/models/bookListModel.js api/routes/bookListRoutes.js
Our folder structure should look like this now:
<Img src="/images/img15.png" alt="node" width="half" /> <br />

      </TutorialParagraph>

      <H3 heading="Server setup" />
      <TutorialParagraph>
      We’ll need a little help getting our server up and running. Let’s install Express and Nodemon! Express will be used to create the server, and Nodemon will help us keep track of changes to our application by watching for changed files and automatically restarting the server. <br/>


      <CodeBlock>
        {`
npm install -g nodemon
npm install express
        `}
      </CodeBlock>

      After you finish installing, your package.json file will be modified to have the two newly installed packages. Open the package.json file and add this task to the script:<br/>
      “start”: “nodemon server.js”

      <Img src="/images/img16.png" alt="node" width="half" /> <br />

      Open the server.js file and copy/paste the code below into it:

      <CodeBlock>
        {`
const express = require('express'),
app = express(),
port = process.env.PORT || 3000;
app.listen(port);
console.log('book list RESTful API server started on: ' + port);
        `}
      </CodeBlock>

      <Img src="/images/img17.png" alt="node" width="half" /> <br />


      In your terminal, run npm start. This will start the server and you should see the following: <br/>
      book list RESTful API server started on: 3000 <br/>


      </TutorialParagraph>

      <H3 heading="Setting up the schema" />
      <TutorialParagraph>
      First, let’s install mongoose —
      <CodeBlock>
        {`
npm install mongoose
        `}
      </CodeBlock>
      Why Mongoose?<br />
      MongoDB is a NoSQL database that stores data in JSON format and is ready to deal with large volumes of data. It uses a JavaScript-based structure, and it is very easy to persist and read it’s data from a Node.js application.<br />
      After installation, open the bookListModel.js file in your api/models folder and punch in the following code.<br />


      <CodeBlock>
        {`
'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BookSchema = new Schema({
  name: {
    type: String,
    required: 'Enter book name'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});
module.exports = mongoose.model('Books', BookSchema);
        `}
      </CodeBlock>

      Sweet! We required the mongoose in our file and then we created a model of our data structure.<br />
      As you can see, the table will contain a name as a string, and the date it was created. It also contains a status which we have defined as pending — a default value for every book created.
      <br />

      </TutorialParagraph>
      <H3 heading="Setting up the routes" />
      <TutorialParagraph>


      Routing determines how an application responds to a client request for a specific endpoint. Each of our routes has different route handler functions, which are executed when the route is matched. Below we have defined two basic routes(‘/books’, and ‘/books/bookId’) with different methods. <br />
      ‘/books’ has two methods GET and POST. While ‘/books/bookId’ has GET, PUT, and DELETE.<br />
      As you can see, we required the controller so each of the route methods can call its respective handler function. <br />

      Let&apos;s jump back to our code and get this started! Open the bookListRoutes.js file in the routes folder and copy/paste the code snippet below

      <CodeBlock>
        {`
'use strict';
module.exports = (app) => {
  const bookList = require('../controllers/bookListController');
  // bookList Routes
  app.route('/books')
    .get(bookList.list_all_books)
    .post(bookList.create_a_book);
  app.route('/books/:bookId')
    .get(bookList.read_a_book)
    .put(bookList.update_a_book)
    .delete(bookList.delete_a_book);
};
        `}
      </CodeBlock>



      </TutorialParagraph>

      <H3 heading="Setting up the controller" />
      <TutorialParagraph>
      In the bookListController.js controller, we will be writing five different functions: list_all_books, create_a_book, read_a_book, update_a_book, and delete_a_book. Each of these functions uses different mongoose methods such as find, findById, findOneAndUpdate, save, and remove.
      <CodeBlock>
        {`
'use strict';
const mongoose = require('mongoose'),
  Book = mongoose.model('Books');
exports.list_all_books = (req, res) => {
  Book.find({}, (err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
};
exports.create_a_book = (req, res) => {
  let new_book = new Book(req.body);
  new_book.save((err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
};
exports.read_a_book = (req, res) => {
  Book.findById(req.params.bookId, (err, book) => {
    if (err)
      res.send(err);
    res.json(book);
  });
};
exports.update_a_book = (req, res) => {
 Book.findOneAndUpdate({_id: req.params.bookId}, req.body, {new: true}, (err, task) => {
    if (err)
      res.send(err);
    res.json(book);
  });
};
exports.delete_a_book = (req, res) => {
  Book.remove({
    _id: req.params.bookId
  }, (err, book) => {
    if (err)
      res.send(err);
    res.json({ message: 'Book successfully deleted' });
  });
};
        `}
      </CodeBlock>
    
      </TutorialParagraph>

      <H3 heading="Putting everything together" />
      <TutorialParagraph>
      Homestretch! In this section, we will be connecting our controllers, database, created models, and the created routes. <br/>
      We just have a couple of steps we need to knock out before we can put everything together!<br/>
      <ol className="flex flex-col gap-2 list-decimal list-inside mt-2">
        <li>
        Connect our database by adding a URL to the mongoose instance connection
        </li>
        <li>
        Load the created model — book
        </li>
        <li>
        Register our created routes to the server
        </li>
      </ol>
      <CodeBlock>
        {`
const express = require('express')
app = express()
port = process.env.PORT || 3000
mongoose = require('mongoose')
const uri = 'mongodb://localhost/Bookdb';
Book = require('./api/models/bookListModel') //created model loading here
// mongoose instance connection url connection
mongoose.connect(uri, {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true
 }).then(res=>{
  console.log("DB Connected!")
 }).catch(err => {
  console.log(Error, err.message);
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
const routes = require('./api/routes/bookListRoutes'); //importing route
routes(app); //register the route
app.get('*', (req, res)=>{
res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port);
console.log('book list RESTful API server started on: ' + port);
        `}
      </CodeBlock>

      Open your terminal and run mongod<br/>
      This will start your MongoDB server. The Node server can connect to the MongoDB instance. Once your MongoDB server is running, restart your Node server by running: rs on your Nodemon running terminal.
    
      </TutorialParagraph>


      <H3 heading="Testing via Postman" />
      <TutorialParagraph>
      Now that everything is now connected, let’s test each of the routes and the respective methods.<br/>
      Open Postman and type:<br/>
      http://localhost:3000/books in the enter request URL section and hit enter. 
      <Img src="/images/img18.png" alt="node" width="half" /> <br />
      
      You should get back an empty array since there is nothing in the database yet.<br />
      On the same address, change the method to POST, click body, and select “x-www-form-urlencoded”. Then, enter name as the key and a book name of your choice as a value, and hit send.<br />

      <Img src="/images/img19.png" alt="node" width="half" /> <br />





      Voila! You just made a quick and simple RESTful API with Node.js and MongoDB! This was a learning experience for me as I’ve never used Node or MongoDB before. Hopefully, this can lead us all down a path of continued learning. If you have any questions, feel free to reach me on LinkedIn. I’d love to hear if this helped anyone. Happy Coding!
     
      </TutorialParagraph>

      </TutorialBody>
</>,
];
