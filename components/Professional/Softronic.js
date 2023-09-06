import { ArrowDownIcon } from '@heroicons/react/24/solid'
import Tippy from '@tippyjs/react'

const Softronic = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-3xl font-semibold flex flex-row items-center space-x-3">
        <code>Softronic Systems Pvt. Ltd</code>
      </div>

      {/* Section Software Engineer */}
      <div className="flex flex-col ">
        <div>
          <code className="text-2xl text-gray-700">Software Engineer </code>
          <code className="italic text-lg text-gray-600 ml-2 font-normal">
            (September-2017 - September-2019)
          </code>
          <div className="flex flex-row flex-wrap w-full gap-x-1">
            <div className="inline-block">
              <code className="text-lg font-semibold mr-2">
                Technologies used:
              </code>
              <code className="font-light text-lg">
                ASP.NET, JQuery, Microsoft SQL Server, Xamarin, SOAP
                Web-services, Team Foundation Server
              </code>
            </div>
          </div>
        </div>

        <ul className="list-disc ml-10 pt-4">
          <li>
            <code className="text-lg leading-normal">
              Developed & deployed a Web application using ASP.NET framework and
              SQL database as backend with JavaScript as a client-side,
              resulting in an estimated 15% decrease in development time.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Fully converted the Xamarin android application to Xamarin Forms
              application. Making the application 60% more reachable to platform
              users other than android.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Actively participated in Research and Development tasks
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Lead the team of 2 members for the development of Xamarin Mobile
              Application development
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Spearheaded the development of 2 Xamarin C# mobile applications,
              increasing customer access to products by 35%.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Developed Xamarin.Forms application with more generalized code and
              less platform specific functionality which results in 50% faster
              shipping of the application.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Developed RestAPI’s as well as Web-services for data fetching
              purposes in collaboration with async technique.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Mentored developers to ensure the successful completion &
              deployment of apps across Android platforms within 8 weeks
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Directed maintenance & optimization activities for 2 existing
              mobile applications, resulting in a 30% decrease in user
              complaints.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Successfully implemented iterations of quality assurance tests to
              ensure high performance and user satisfaction, improving
              reliability by 95%.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Used Javascript for better client side experience
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Actively participated in Knowledge sharing-sessions
            </code>
          </li>
        </ul>
      </div>

      {/* Section Junior Engineer */}
      <div className="inline-block">
        <div className="ml-4">
          <code className="text-xl">Junior Software Engineer </code>
          <code className="italic text-lg text-gray-600 ml-2 font-normal">
            (June-2016 - August-2017)
          </code>
          <div className="font-semibold">
            <code className="text-lg font-semibold mr-2">
              Technologies used:
            </code>
            <code className="font-light text-lg ">
              ASP.NET, JQuery, Microsoft SQL Server
            </code>
          </div>
        </div>

        <ul className="list-disc ml-10 pt-4">
          <li>
            <code className="text-lg leading-normal">
              Member of Xamarin Mobile application team and developed android
              application increasing customer access to the product by 70%.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Refactor the code and converted server side code to client side
              making the application 80% faster and more responsive.
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Took part in Knowledge sharing session and participated in sharing
              the knowledge among the whole team about Xamarin Mobile
              application development
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Administrated the Team Foundation Server which leads to 100%
              productivity among the whole team.
            </code>
          </li>
        </ul>
      </div>
      {/* Section Internship */}
      <div className="inline-block">
        <div className="ml-4">
          <code className="text-xl">Internship </code>
          <code className="italic text-lg text-gray-600 ml-2 font-normal">
            (Feb-2016 - May-2016)
          </code>
          <div className="font-semibold">
            <code className="text-lg font-semibold mr-2">
              Technologies used:
            </code>
            <code className="font-light text-lg">
              ASP.NET, JQuery, Microsoft SQL Server
            </code>
          </div>
        </div>

        <ul className="list-disc ml-10">
          <li>
            <code className="text-lg leading-normal">
              Engaged in various Research and Development tasks{' '}
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Responsible for Front-end design{' '}
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Used Javascript for better client side experience{' '}
            </code>
          </li>
          <li>
            <code className="text-lg leading-normal">
              Actively participated in Knowledge sharing-sessions{' '}
            </code>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Softronic
