import Hobbies from '@/components/aboutme/Hobbies'
import Origins from '@/components/aboutme/Origins'
import DefaultLayout from '@/defaultlayout/DefaultLayout'

const AboutMe = () => {
  return (
    <DefaultLayout>
      <div className="bg-slate-300 w-full flex-1">
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
