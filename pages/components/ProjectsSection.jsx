"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Trip Drop",
    description: "Community driven delivery service platform",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iShinzoo/TripDrop",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Chatter Box",
    description: "Chatting application built on Android",
    image: "/images/projects/2.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iShinzoo/ChattingApp",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Transcribe Genius",
    description: "A Content generation tool from YT videos",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iShinzoo/TranscribeGenius",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "News Now",
    description: "App delivering real-time updates from around the world.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iShinzoo/NewsNow_app",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Song Recommendation",
    description: "Song recommendation system using ML",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/iShinzoo/SongRecommendation",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Solidity Smart Contracts",
    description: "From making donations effortless to managing finances, parking, shopping, and securing your data.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/iShinzoo/SmartContracts",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "CryDapeSVG",
    description: "Mint Your Own NFTs with Auto-Generated SVG Images",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/iShinzoo/CryDapeSVG",
    previewUrl: "https://crydapesvgnfts.vercel.app/",
  },
  {
    id: 8,
    title: "Doctor App Ui",
    description: "UI for a doctor appointment booking app",
    image: "/images/projects/6.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iShinzoo/DoctorAppUI",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section className="min-h-screen bg-black text-white py-20 relative overflow-hidden" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;