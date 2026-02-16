import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
import { GithubStats } from "@/components/GithubStats";
import { Ventures } from "@/components/Ventures";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Timeline />
      <Skills />
      <WorkExperience />
      <Projects />
      <GithubStats />
      <Ventures />


    </main>
  );
}
