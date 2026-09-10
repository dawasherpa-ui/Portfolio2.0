import { Hero } from "@/components/Hero";
import { FeaturedWorks } from "@/components/FeaturedWorks";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { WorkExperience } from "@/components/WorkExperience";
import { Skills } from "@/components/Skills";
import { Ventures } from "@/components/Ventures";
import { GithubStats } from "@/components/GithubStats";

export default function Home() {
  return (
    <div className="w-full relative block">
      {/* 1. Hero: Kinetic entrance, live project reel & impact metrics */}
      <Hero />

      {/* 2. Flagship Works: Marquee GSAP ScrollTrigger Pinned Showcase */}
      <FeaturedWorks />

      {/* 3. Studio Archive: Filterable catalog & interactive deep-dive modal */}
      <Projects />

      {/* 4. Engineering Journey: Laser-drawn GSAP ScrollTrigger timeline */}
      <Timeline />

      {/* 5. Production Experience: Real-world engineering impact */}
      <WorkExperience />

      {/* 6. Technical Stack: Core radar & Rapid Adaptation superpower */}
      <Skills />

      {/* 7. Audience Ventures: Digital brands & media platforms */}
      <Ventures />

      {/* 8. Open Source: GitHub activity & repositories */}
      <GithubStats />
    </div>
  );
}
