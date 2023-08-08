import Hobbies from '@/components/aboutme/Hobbies'
import Origins from '@/components/aboutme/Origins'
import DefaultLayout from '@/defaultlayout/DefaultLayout'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <DefaultLayout>
      <div className="w-fit flex-1 justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-6 place-items-center border border-gray-300 rounded-xl p-5 bg-gray-300/25 dark:bg-gray-400/25 gap-y-4 lg:gap-y-0">
          <div className="col-span-4">
            <div className="grid grid-cols-1 gap-y-2">
              <div className="text-2xl lg:text-4xl text-black dark:text-gray-200 font-semibold">
                <code>{'<Sheikh Afham Uddin/>'}</code>
              </div>
              <div className="text-lg text-black dark:text-gray-300">
                <code>
                  Full-stack allrounder. Having hands-on experience in
                  Javascript languages i.e. React.js. In addition to this years
                  of experience in XAMARIN Cross-platform application
                  development and ASP.NET web application development
                </code>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex w-full justify-center lg:justify-end">
            <Image
              key={Math.random()}
              className="rounded-full"
              src={'/afham.png'}
              width={200}
              height={200}
              alt="Me"
            />
          </div>
        </div>
        {/*  */}
        <br />
        <div className="flex flex-col space-y-2">
          <Origins />
          <Hobbies />
        </div>
      </div>
    </DefaultLayout>
  )
}
export default AboutMe
