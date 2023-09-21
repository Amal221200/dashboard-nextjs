import Header from "@/components/Header";
import Middle from "@/components/Middle";
import SideBar from "@/components/SideBar";
import Bottom from "@/components/Bottom/Bottom";
import Top from "@/components/Top";
import ProfileForm from "@/components/ProfileCard/ProfileForm";

export default function Home() {

  return (
    <>
      <ProfileForm />
      <main className="flex md:p-10 px-2 py-4 md:gap-5 gap-3 ">
        <SideBar />
        <div className="flex-grow-[4]">
          <Header />
          <Top />
          <Middle />
          <Bottom />
        </div>
      </main>
    </>
  )
}