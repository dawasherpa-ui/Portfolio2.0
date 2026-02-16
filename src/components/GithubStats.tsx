"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, ExternalLink, Loader2, BookMarked, FolderGit2 } from "lucide-react";
import Link from "next/link";
import { PROFILE } from "@/lib/data";

interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  name: string;
  created_at: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  homepage: string;
}

export function GithubStats() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extract username from PROFILE or default
  const githubUrl = PROFILE.socials.find((s) => s.name === "GitHub")?.url;
  const username = githubUrl ? githubUrl.split("/").pop() : "dawa";

  useEffect(() => {
    async function fetchData() {
      if (!username) return;
      try {
        setLoading(true);
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        
        if (!userRes.ok) {
             throw new Error("Failed to fetch GitHub profile");
        }
        
        const userData = await userRes.json();
        setUser(userData);

        // Fetch repos - sort by stars to show best work
        const reposRes = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=100&type=owner`
        );
        
        if (reposRes.ok) {
            const reposData: GithubRepo[] = await reposRes.json();
            // Sort by stars descending, take top 6
            const topRepos = reposData
                .filter(repo => !repo.description?.includes("Config")) // Optional: filter out config repos
                .sort((a, b) => b.stargazers_count - a.stargazers_count)
                .slice(0, 6);
            setRepos(topRepos);
        }
        
      } catch (err) {
        console.error("GitHub fetch error:", err);
        setError("Could not load GitHub data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username]);

  if (loading) {
     return null; 
  }

  if (error || !user) return null;

  return (
    <section id="github" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */ }
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-4">
            <Github className="w-4 h-4" />
            <span>Open Source</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Github Activity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my open source contributions and projects directly from GitHub.
          </p>
        </motion.div>

        {/* Profile Stats Card */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-16"
        >
            <div className="bg-secondary/30 border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                 <div className="flex flex-col items-center text-center md:text-left md:items-start gap-4">
                    <div className="relative">
                        <img 
                            src={user.avatar_url} 
                            alt={user.name} 
                            className="w-24 h-24 rounded-full border-4 border-background shadow-xl"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full border-2 border-background">
                            HIRE
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold font-serif">{user.name || user.login}</h3>
                        <p className="text-muted-foreground">@{user.login}</p>
                    </div>
                    <p className="text-sm md:text-base max-w-md text-foreground/80 leading-relaxed">
                        {user.bio}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-2">
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-primary" />
                            <span className="font-bold">{user.followers}</span>
                            <span className="text-muted-foreground text-sm">Followers</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FolderGit2 className="w-5 h-5 text-primary" />
                            <span className="font-bold">{user.public_repos}</span>
                            <span className="text-muted-foreground text-sm">Repos</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <span>Joined {new Date(user.created_at).getFullYear()}</span>
                        </div>
                    </div>
                 </div>

                 {/* Contribution Graph Image - using ghchart as it's the easiest way to embed */}
                 <div className="flex-1 w-full flex justify-center items-center bg-background rounded-xl p-4 border border-border shadow-sm overflow-hidden">
                    <img 
                        src={`https://ghchart.rshah.org/${username}`} 
                        alt="Github Contributions" 
                        className="w-full h-auto max-w-full opacity-80 hover:opacity-100 transition-opacity"
                    />
                 </div>
            </div>
        </motion.div>

        {/* Top Repos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                 <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <BookMarked className="w-6 h-6" />
                 </div>
                 <div className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" /> {repo.forks_count}
                    </span>
                 </div>
              </div>

              <h4 className="text-lg font-bold font-serif mb-2 group-hover:text-primary transition-colors">
                {repo.name}
              </h4>
              
              <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-grow">
                {repo.description || "No description available."}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
                 <div className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                   <span className="w-2 h-2 rounded-full bg-primary" />
                   {repo.language || "Code"}
                 </div>
                 <span className="text-xs text-muted-foreground">
                    {new Date(repo.updated_at).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
                 </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
            <Link 
                href={githubUrl || `https://github.com/${username}`} 
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium"
            >
                <Github className="w-5 h-5" />
                View GitHub Profile
            </Link>
        </div>
      </div>
    </section>
  );
}
