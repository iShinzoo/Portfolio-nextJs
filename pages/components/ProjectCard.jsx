import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div
      className="rounded-xl overflow-hidden shadow-lg bg-[#181818]"
      style={{ height: "360px" }} // Fixed height set to 44px
    >
      {/* Image Container */}
      <div
        className="relative pt-[56.25%]" // 16:9 aspect ratio
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay with Links */}
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
          </Link>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-6">
        <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;