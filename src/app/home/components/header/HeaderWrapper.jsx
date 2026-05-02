import React from "react";
import HeroHeadline from "./client/HeroHeadline";
import HeroCard from "./client/HeroCard";

function HeaderWrapper() {
    return (
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start px-5 md:px-10">
            <HeroHeadline />
            <HeroCard />
        </div>
    );
}

export default HeaderWrapper;
