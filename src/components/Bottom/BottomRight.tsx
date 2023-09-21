"use client"
import { AiOutlinePlus } from "react-icons/ai"
import CardWrapper from "../CardWrapper"
import useProfilModal from "@/hooks/useProfileModal"
import { useCallback } from "react"

const BottomRight = () => {
  const profileModal = useProfilModal()

  const handleClick = useCallback(() => {
    profileModal.onOpen()
  }, [profileModal])
  return (
    <CardWrapper additionalClassNames="flex-1 flex justify-center items-center">
      <div className="flex flex-col items-center" onClick={handleClick}>
        <button className="bg-[#eaeaea] p-4 rounded-full">
          <AiOutlinePlus className="text-xl text-gray-500" />
        </button>
        <p>Add Profile</p>
      </div>
    </CardWrapper>
  )
}
export default BottomRight