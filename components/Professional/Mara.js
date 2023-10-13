import { ArrowDownIcon } from '@heroicons/react/24/solid'
import Tippy from '@tippyjs/react'
const Mara = () => {
  return (
    <div className="flex flex-col gap-y-4 max-w-4xl justify-center w-full px-5 sm:px-14">
      <div className="text-3xl font-semibold flex flex-row items-center space-x-3">
        <code>Mara Solutions</code>
      </div>

      {/* React and Next js Developer */}
      <div className="flex flex-col">
        <div>
          <code className="text-2xl text-gray-700">Front-End Engineer</code>
          <code className="italic text-lg text-gray-600 ml-2 font-normal">
            (July-2022 - Present)
          </code>
          <div className="flex flex-row flex-wrap w-full gap-x-1 pt-3">
            <div className="inline-block">
              <code className="font-semibold mr-2 text-lg">
                Technologies used:
              </code>
              <code className="text-lg">
                React.js, Next.js, AWS Amplify, Cypress, Storybook, Github,
                Sentry
              </code>
            </div>
          </div>
        </div>

        <ul className="list-disc ml-10 pt-4 space-y-2">
          <li>
            <code className="text-lg leading-normal">
              Successfully developed an AI-powered web application using Next.js
              and TailwindCSS facilitating automated reply generation for
              reviews, significantly enhancing user engagement and satisfaction
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Accomplished the intricate task of migrating the entire
              application to the latest version of the Next.js framework.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Expertly utilized advanced features of TailwindCSS in designing a
              responsive and intuitive user interface for the web application.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Managed multiple GitHub repositories corresponding to different
              branches, ensuring seamless and error-free deployment in the
              production environment.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Efficiently transitioned the project from JavaScript to
              TypeScript, enhancing code management and readability.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Adopted Axios for effective execution of CRUD operations.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Implemented JWT (JSON Web Tokens) for secure transmission of
              information.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Returned to and optimized the existing codebase through
              comprehensive refactoring and integration of modern libraries
              (including react-select, reactable, SWR).
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Devised various components for diverse scenarios, thereby
              enhancing code readability and maintainability.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Integrated Storybook framework for systematic documentation of
              components.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Deployed Cypress automation tests to verify system accuracy when
              deploying via AWS Amplify
            </code>
          </li>
        </ul>
      </div>

      {/* Section Working Student */}
      <div className="inline-block">
        <div className="ml-4">
          <code className="text-2xl">Working Student</code>
          <code className="italic text-lg text-gray-600 ml-2 font-normal">
            (Feb-2021 - June-2022)
          </code>
          <div className="pt-3">
            <code className="font-semibold mr-2 text-lg">
              Technologies used:
            </code>
            <code className="text-lg">
              R-Shiny, PostgresSQL, JavaScript, R-Shiny tests, Github, Visual
              Studio Code
            </code>
          </div>
        </div>

        <ul className="list-disc ml-10 space-y-2">
          <li>
            <code className="text-lg leading-normal">
              Developed R-shiny dashboard{' '}
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Written sql queries on PostgresSQL for fetching data and
              displaying them on R-Shiny dashboard
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Researched and applied new libraries for better performance and
              exquisite client-side experience (successfull in decreasing
              response time by 30%)
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Converted server-side code to JavaScript in R-Shiny for reduced
              server-side calls
            </code>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Mara
