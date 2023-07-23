import { ArrowDownIcon } from '@heroicons/react/24/solid'
import Tippy from '@tippyjs/react'

const Softronic = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="text-3xl font-semibold flex flex-row items-center space-x-3">
        <span>Softronic Systems Pvt. Ltd</span>
        <Tippy content={'From recent to old'}>
          <ArrowDownIcon className="inline-block h-5 w-5 focus:outline-none" />
        </Tippy>
      </div>

      {/* Section Software Engineer */}
      <div className="flex flex-col ">
        <div className="ml-4">
          <span className="text-xl">Software Engineer </span>
          <span className="italic text-sm text-gray-500">
            September-2017 - September-2019
          </span>
          <div className="flex flex-row flex-wrap w-full gap-x-1">
            <div className="inline-block">
              <span className="font-semibold mr-2">Technologies used:</span>
              <span className="font-light">
                ASP.NET, JQuery, Microsoft SQL Server, Xamarin, SOAP
                Web-services, Team Foundation Server
              </span>
            </div>
          </div>
        </div>

        <ul className="list-disc ml-10 pt-4 w-[800px]">
          <li>
            Developed & deployed a Web application using ASP.NET framework and
            SQL database as backend with JavaScript as a client-side, resulting
            in an estimated 15% decrease in development time.
          </li>
          <li>
            Fully converted the Xamarin android application to Xamarin Forms
            application. Making the application 60% more reachable to platform
            users other than android.
          </li>
          <li>Actively participated in Research and Development tasks</li>
          <li>
            Lead the team of 2 members for the development of Xamarin Mobile
            Application development
          </li>
          <li>
            Spearheaded the development of 2 Xamarin C# mobile applications,
            increasing customer access to products by 35%.
          </li>
          <li>
            Developed Xamarin.Forms application with more generalized code and
            less platform specific functionality which results in 50% faster
            shipping of the application.
          </li>
          <li>
            Developed RestAPI’s as well as Web-services for data fetching
            purposes in collaboration with async technique.
          </li>
          <li>
            Mentored developers to ensure the successful completion & deployment
            of apps across Android platforms within 8 weeks
          </li>
          <li>
            Directed maintenance & optimization activities for 2 existing mobile
            applications, resulting in a 30% decrease in user complaints.
          </li>
          <li>
            Successfully implemented iterations of quality assurance tests to
            ensure high performance and user satisfaction, improving reliability
            by 95%.
          </li>
          <li>Used Javascript for better client side experience</li>
          <li>Actively participated in Knowledge sharing-sessions</li>
        </ul>
      </div>

      {/* Section Junior Engineer */}
      <div className="inline-block">
        <div className="ml-4">
          <span className="text-xl">Junior Software Engineer </span>
          <span className="italic text-sm text-gray-500">
            June-2016 - August-2017
          </span>
          <div className="font-semibold">
            Technologies used:{' '}
            <span className="font-light">
              ASP.NET, JQuery, Microsoft SQL Server
            </span>
          </div>
        </div>

        <ul className="list-disc ml-10 pt-4 w-[800px]">
          <li>
            Member of Xamarin Mobile application team and developed android
            application increasing customer access to the product by 70%.
          </li>
          <li>
            Refactor the code and converted server side code to client side
            making the application 80% faster and more responsive.
          </li>
          <li>
            Took part in Knowledge sharing session and participated in sharing
            the knowledge among the whole team about Xamarin Mobile application
            development
          </li>
          <li>
            Administrated the Team Foundation Server which leads to 100%
            productivity among the whole team.
          </li>
        </ul>
      </div>
      {/* Section Internship */}
      <div className="inline-block">
        <div className="ml-4">
          <span className="text-xl">Internship </span>
          <span className="italic text-sm text-gray-500">
            Feb-2016 - May-2016
          </span>
          <div className="font-semibold">
            Technologies used:{' '}
            <span className="font-light">
              ASP.NET, JQuery, Microsoft SQL Server
            </span>
          </div>
        </div>

        <ul className="list-disc ml-10">
          <li>Engaged in various Research and Development tasks</li>
          <li>Responsible for Front-end design</li>
          <li>Used Javascript for better client side experience</li>
          <li>Actively participated in Knowledge sharing-sessions</li>
        </ul>
      </div>
    </div>
  )
}

export default Softronic
