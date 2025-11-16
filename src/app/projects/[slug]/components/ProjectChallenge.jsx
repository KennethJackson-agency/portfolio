/* React Core Components */
import Fade from "@/lib/component/animation/Fade";
import React from "react";

function ProjectChallenge({ projectChallenge }) {
    return (
        <Fade direction="right">
            <p className="text-base md:text-xl w-full md:w-3/4 text-zinc-800">
                {projectChallenge}
            </p>
        </Fade>
    );
}

export default ProjectChallenge;
