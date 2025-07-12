import Info from "@/components/Info";
import Skills from "@/components/Skills";
import WorkEducation from "@/components/Work-Education";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-[50%] mx-auto px-10 py-20">
      <Info />
      <WorkEducation />
      <Skills />

    </div>
  );
}
