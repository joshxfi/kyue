import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ModalButton } from ".";

type Props = {
  isOpen: boolean;
  handleConfirm: {
    text: string;
    fn: () => void;
  }[];
  title: string;
  description: string;
  onClose: () => void;
};

export function Modal({
  isOpen,
  handleConfirm,
  title,
  description,
  onClose,
}: Props) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog static as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{description}</p>
                </div>

                <div className="mt-4 space-x-2">
                  {handleConfirm.map((h) => (
                    <ModalButton key={h.text} type="button" onClick={h.fn}>
                      {h.text}
                    </ModalButton>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
