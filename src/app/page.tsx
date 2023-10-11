import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header/Header";
import Middle from "@/components/Middle";
import SideBar from "@/components/SideBar";
import Bottom from "@/components/Bottom/Bottom";
import Top from "@/components/Top";

const Home = async () => {

  const session = await getServerSession();
// 
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="flex items-center px-3 h-full md:gap-4 sm:gap-2">
      <SideBar />
      <aside className="flex-grow-[6] sm:p-3 h-screen sm:overflow-y-scroll sm:scrollbar">
        <Header />
        <Top />
        <Middle />
        <Bottom />
      </aside>
    </main>
  )
}
export default Home;