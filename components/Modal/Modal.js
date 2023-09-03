import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { classNames } from '@/lib/functions'
import Contact from '../contact/Contact'

const Modal = ({ showModal, onClose }) => {
  function closeModal() {
    onClose()
  }

  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className={classNames('relative z-50')}
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={classNames('fixed inset-0 bg-black bg-opacity-50')}
            />
          </Transition.Child>

          <div className={classNames('fixed inset-0')}>
            <div
              className={`flex min-h-full items-center justify-center p-4 text-center`}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={`w-full lg:w-2/3 px-6 py-4 transform rounded-2xl bg-gray-200  text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-700 pb-5"
                  >
                    <div className="flex flex-row">
                      <code className="flex-none">Get in touch</code>
                      <div className="flex-1 flex justify-end">
                        <XCircleIcon
                          onClick={closeModal}
                          className="h-7 w-7 cursor-pointer"
                        />
                      </div>
                    </div>
                  </Dialog.Title>

                  <Contact />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
