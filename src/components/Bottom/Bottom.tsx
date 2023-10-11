"use client";
import BottomLeft from "./BottomLeft"
import BottomRight from "./BottomRight"


const Bottom = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-2 h-[50vh]">
      <BottomLeft />
      <BottomRight />
    </div>
  )
}
export default Bottom