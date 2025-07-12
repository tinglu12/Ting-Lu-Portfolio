import Info from "@/components/Info";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkEducation from "@/components/Work-Education";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-[45%] min-w-[850px] mx-auto px-10 py-20 gap-10" >
      <Info />
      <WorkEducation />
      <Skills />
      <Projects />
    </div>
  );
}
