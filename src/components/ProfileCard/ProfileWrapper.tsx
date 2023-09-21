"use client"
import useProfilModal from "@/hooks/useProfileModal"
import { BasicFCProps } from "@/lib/types"

const ProfileWrapper: React.FC<BasicFCProps> = ({ children }) => {
  const profileCard = useProfilModal()

  return (
    profileCard.isOpen && (
      <div className="absolute overflow-hidden h-full inset-0 bg-slate-300/50 z-10">
        Hello
      </div>
    )
  )
}
export default ProfileWrapper