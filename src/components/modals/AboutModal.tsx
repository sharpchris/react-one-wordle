import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source version of the word guessing game we all know and
        love. It was edited by Chris Sharp, Educational Technologist at the UFIT 
        Center for Instructional Technology and Training (CITT) - {' '}
        <a
          href="https://github.com/sharpchris/react-one-wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
