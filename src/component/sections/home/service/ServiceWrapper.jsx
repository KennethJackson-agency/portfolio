import React from "react";
import ServiceGrid from "./ServiceGrid";

async function ServiceWrapper({ services }) {
    return (
        <section
            id="service"
            className="flex flex-col gap-14 bg-zinc-900 text-white px-5 sm:px-10 md:px-20 py-20 sm:p-20"
        >
            <div className="flex flex-col lg:flex-row justify-between gap-5 w-full max-w-[90rem] mx-auto">
                <div className="flex flex-col gap-0 md:gap-5 font-medium text-2xl md:text-4xl">
                    <p>What We</p>
                    <p>Bring to the Table</p>
                </div>
                <div className="w-full md:w-[375px] font-normal">
                    From tech magic to creative firepower, our services are
                    built to help your brand perform, connect, and grow in a
                    digital-first world.
                </div>
            </div>

            <ServiceGrid services={services} />
        </section>
    );
}

export default ServiceWrapper;
