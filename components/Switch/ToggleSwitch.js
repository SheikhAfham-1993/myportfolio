import React, { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/lib/functions'
import { useTheme } from 'next-themes'
const ToggleSwitch = () => {
  const [showSun, setShowSun] = useState(true)
  const [showMoon, setShowMoon] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setShowMoon(darkMode)
    setShowSun(!darkMode)
  }, [darkMode])

  return (
    <Switch.Group as="div" className="flex items-center">
      <Switch
        checked={darkMode}
        onChange={() => {
          setTheme(darkMode ? 'light' : 'dark')
          setDarkMode((prevState) => !prevState)
        }}
        className={
          'relative inline-flex flex-shrink-0 h-6 w-13 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 switch-focus ring-2 bg-blue-600 outline-none ring-offset-2 ring-blue-600'
        }
      >
        <SunIcon
          className={classNames(
            'h-5 w-5 inline mr-2 text-yellow-400',
            showSun ? 'block' : 'hidden'
          )}
          aria-hidden="true"
        />
        <span
          aria-hidden="true"
          className={classNames(
            darkMode ? 'translate-x-0' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
        <MoonIcon
          className={classNames(
            'h-5 w-5 inline ml-2 text-yellow-500',
            showMoon ? 'block' : 'hidden'
          )}
          aria-hidden="true"
        />
      </Switch>
    </Switch.Group>
  )
}

export default ToggleSwitch
