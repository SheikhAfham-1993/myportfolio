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
              Developed Front-end application that allows user to enter reviews
              and AI tool will auto-generate response similar to human,
              increasing the productivity to 60%.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Developed the enhanced version (v2.0), for better client-side
              experience. Enhancing the user experience level and further
              increase in productivity to 80%.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Developed components for code readibilty and clean project
              architecture. Increasing development productivity to 80%.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Integrated Cypress test tool for E2E testing. For detecting early
              errors and therefore error free features to production build.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Integrated TailwindCSS for designing the application and further
              enhanced user experience by utilizing different media queries for
              different sizes.
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
