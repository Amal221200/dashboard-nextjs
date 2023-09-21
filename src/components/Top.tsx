"use client";
import TopCard from "./TopCard";
import { TopContents } from "@/lib/constants"

const Top = () => {
  return (
    <section className="grid md:grid-cols-4 grid-cols-2 gap-4">
      {
        TopContents.map((content, ind) => (
          <TopCard key={ind} content={content}  />
        ))
      }
    </section>
  )
}
export default Top