import Hobbies from '@/components/aboutme/Hobbies'
import Origins from '@/components/aboutme/Origins'
import DefaultLayout from '@/defaultlayout/DefaultLayout'
import Image from 'next/image'
const AboutMe = () => {
  return (
    <DefaultLayout>
      <div className="w-full flex-1">
        <div className="flex items-end align-middle justify-start gap-x-2">
          <span className="text-9xl">Hi!</span>
        </div>
        <div className="flex items-end align-middle justify-start gap-x-2">
          <span className="text-7xl">My name is Sheikh Afham Uddin</span>
        </div>
        <div className="flex items-end align-middle justify-start gap-x-2 text-6xl">
          <span>
            I am a Software Developer and love to <code>{`<Code/>`}</code>
          </span>
        </div>
        <div className="flex items-end align-middle justify-start gap-x-2 text-4xl">
          <span>
            Currently living in Germany and working as{' '}
            <span className="italic">FrontEnd Developer</span> @ <br />
          </span>
        </div>
        <div className="flex items-center align-middle justify-center gap-x-2 text-4xl">
          <Image src="/logo.png" alt="My Logo" width="150" height="150"></Image>
          <span className="font-semibold">
            <a href="https://www.mara-solutions.com/" target="_blank">
              Mara Solutions GmbH
            </a>
          </span>
        </div>
        <div className="flex items-end align-middle justify-start gap-x-2">
          <span className="text-xl">Sheikh</span>
          <span className="text-3xl">Afham</span>
          <span className="text-xl">Uddin</span>
        </div>
        <div className="flex flex-col space-y-2">
          <Origins />
          <Hobbies />
        </div>
      </div>
    </DefaultLayout>
  )
}
export default AboutMe
