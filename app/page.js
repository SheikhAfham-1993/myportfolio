import Hobbies from '@/components/aboutme/Hobbies'
import Origins from '@/components/aboutme/Origins'
import DefaultLayout from '@/defaultlayout/DefaultLayout'

const AboutMe = () => {
  return (
    <DefaultLayout>
      <div className="w-full flex-1">
        <div className="flex items-end align-middle justify-start gap-x-2">
          <span className="text-6xl">Hi!</span>
        </div>
        <div className="flex items-end align-middle justify-start gap-x-2">
          <span className="text-5xl">My name is Sheikh Afham Uddin</span>
        </div>
        <div className="flex items-end align-middle justify-start gap-x-2 text-4xl">
          <span>
            I am a Software Developer and love to <code>{`<Code/>`}</code>
          </span>
        </div>
        <div className="flex items-end align-middle justify-start gap-x-2 text-3xl">
          <span>
            Currently living in Germany and working as{' '}
            <span className="italic">FrontEnd Developer</span> @{' '}
            <span className="font-semibold underline">
              <a href="https://www.mara-solutions.com/" target="_blank">
                Mara Solutions GmbH
              </a>
            </span>
          </span>
        </div>
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
