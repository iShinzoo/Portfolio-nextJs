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
    image: "/images/projects/TripMock.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iShinzoo/TripDrop",
    previewUrl: "https://github.com/iShinzoo/TripDrop",
  },
  {
    id: 2,
    title: "Chatter Box",
    description: "Chatting application built on Android",
    image: "/images/projects/ChatMock.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iShinzoo/ChattingApp",
    previewUrl: "https://github.com/iShinzoo/ChattingApp/releases/tag/v1.0",
  },
  {
    id: 3,
    title: "Transcribe Genius",
    description: "A Content generation tool from YT videos",
    image: "/images/projects/tgMock.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iShinzoo/TranscribeGenius",
    previewUrl: "https://github.com/iShinzoo/TranscribeGenius/releases/tag/v1.0",
  },
  {
    id: 4,
    title: "News Now",
    description: "App delivering real-time updates from around the world.",
    image: "/images/projects/NewMock.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/iShinzoo/NewsNow_app",
    previewUrl: "https://github.com/iShinzoo/NewsNow_app/releases/tag/V1.0",
  },
  {
    id: 5,
    title: "Song Recommendation",
    description: "Song recommendation system using ML",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/iShinzoo/SongRecommendation",
    previewUrl: "https://github.com/iShinzoo/SongRecommendation",
  },
  {
    id: 6,
    title: "Solidity Smart Contracts",
    description: "From making donations effortless to managing finances, parking, shopping, and securing your data.",
    image: "/images/projects/SmMock.png",
    tag: ["All", "Web3"],
    gitUrl: "https://github.com/iShinzoo/SmartContracts",
    previewUrl: "https://github.com/iShinzoo/SmartContracts",
  },
  {
    id: 7,
    title: "CryDapeSVG",
    description: "Mint Your Own NFTs with Auto-Generated SVG Images",
    image: "/images/projects/CdpMock.png",
    tag: ["All", "Web3"],
    gitUrl: "https://github.com/iShinzoo/CryDapeSVG",
    previewUrl: "https://crydapesvgnfts.vercel.app/",
  },
  {
    id: 8,
    title: "MusicNFT Minting",
    description: "MusicBlock is an ERC-721 compliant NFT smart contract built using Solidity.",
    image: "/images/projects/SmMock.png",
    tag: ["All", "Web3"],
    gitUrl: "https://github.com/iShinzoo/Music-NFT",
    previewUrl: "https://github.com/iShinzoo/Music-NFT",
  },
  {
    id: 9,
    title: "Buy Me Token",
    description: "A decentralized platform where supporters can send you tokens as appreciation.",
    image: "/images/projects/bmtMock.png",
    tag: ["All", "Web3"],
    gitUrl: "https://github.com/iShinzoo/BuyMeToken",
    previewUrl: "https://buy-me-token.vercel.app/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  if (filteredProjects.length === 0) {
    return <div>No projects found for the selected tag.</div>;
  }

  return (
    <section className="min-h-screen text-white py-20 relative overflow-hidden" id="projects">
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
            name="Web3"
            isSelected={tag === "Web3"}
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