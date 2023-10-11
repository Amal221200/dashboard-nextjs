import Header from "@/components/Header";
import Middle from "@/components/Middle";
import SideBar from "@/components/SideBar";
import Bottom from "@/components/Bottom/Bottom";
import Top from "@/components/Top";
import ProfileModal from "@/components/ProfileModal/ProfileModal";
export default function Home() {

  return (
    <>
      <ProfileModal />
      <main className="flex items-center px-3 h-full md:gap-4 sm:gap-2">
        <SideBar />
        <aside className="flex-grow-[6] sm:p-3 h-screen sm:overflow-y-scroll sm:scrollbar">
          <Header />
          <Top />
          <Middle />
          <Bottom />
        </aside>
      </main>
    </>
  )
}