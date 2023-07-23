import { ArrowDownIcon } from '@heroicons/react/24/solid'
import Tippy from '@tippyjs/react'
const Mara = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-3xl font-semibold flex flex-row items-center space-x-3">
        <span>Mara Solutions</span>
        <Tippy content={'From recent to old'}>
          <ArrowDownIcon className="inline-block h-5 w-5 focus:outline-none" />
        </Tippy>
      </div>

      {/* React and Next js Developer */}
      <div className="flex flex-col ">
        <div className="ml-4">
          <span className="text-2xl">React and Next Developer</span>
          <span className="italic text-sm text-gray-600 ml-2">
            July-2022 - Present
          </span>
          <div className="flex flex-row flex-wrap w-full gap-x-1 pt-3">
            <div className="inline-block">
              <span className="font-semibold mr-2">Technologies used:</span>
              <span className="font-light">
                React.js, Next.js, AWS Amplify, Cypress, Github, Sentry
              </span>
            </div>
          </div>
        </div>

        <ul className="list-disc ml-10 pt-4 w-[800px]">
          <li>
            Developed Front-end application that allows user to enter reviews
            and AI tool will auto-generate response similar to human, increasing
            the productivity to 60%.
          </li>
          <li>
            Developed the enhanced version (v2.0), for better client-side
            experience. Enhancing the user experience level and further increase
            in productivity to 80%.
          </li>
          <li>
            Developed components for code readibilty and clean project
            architecture. Increasing development productivity to 80%.
          </li>
          <li>
            Integrated Cypress test tool for E2E testing. For detecting early
            errors and therefore error free features to production build.
          </li>
          <li>
            Integrated TailwindCSS for designing the application and further
            enhanced user experience by utilizing different media queries for
            different sizes.
          </li>
        </ul>
      </div>

      {/* Section Working Student */}
      <div className="inline-block">
        <div className="ml-4">
          <span className="text-2xl">Working Student</span>
          <span className="italic text-sm text-gray-600 ml-2">
            Feb-2021 - June-2022
          </span>
          <div className="font-semibold pt-3">
            Technologies used:{' '}
            <span className="font-light">
              R-Shiny, PostgresSQL, JavaScript, R-Shiny tests, Docker, Github,
              Visual Studio Code
            </span>
          </div>
        </div>

        <ul className="list-disc ml-10">
          <li>Developed R-shiny dashboard</li>
          <li>
            Written sql queries on PostgresSQL for fetching data and displaying
            them on R-Shiny dashboard
          </li>
          <li>
            Researched and applied new libraries for better performance and
            exquisite client-side experience (successfull in decreasing response
            time by 30%)
          </li>
          <li>
            Converted server-side code to JavaScript in R-Shiny for reduced
            server-side calls
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Mara
