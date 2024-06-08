import { useState } from "react"

const useModal = () => {
  
  const [open, setOpen] = useState<boolean>(false)

  const handleOpenModal = () => {
    setOpen(true)
  }

  const handleCloseModal = () => {
    setOpen(!true)
  }

  return {
    open,
    handleOpenModal,
    handleCloseModal
  }

}

export default useModal