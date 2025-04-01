import Frame from "@/component/common/Frame";
import React from "react";

function Service() {
    const services = [
        {
            id: "01",
            tag: "project-it",
            service: "Information Technology",
            description:
                "Tech that flexes with your hustle—fast, reliable, always evolving, and always ready to help your business level up with confidence.",
            frameColor: "#2B7FFF",
        },
        {
            id: "02",
            tag: "project-editor",
            service: "Editor",
            description:
                "Engaging visual storytelling that transforms footage into brand-driven narratives that elevate presence, spark connection, and maximize viewer engagement.",
            frameColor: "#F6339A",
        },
        {
            id: "03",
            tag: "project-digmar",
            service: "Digital Marketing",
            description:
                "Craft momentum-building campaigns—from SEO to social media—that connect with the right people and turn them into loyal customers.",
            frameColor: "#00C950",
        },
        {
            id: "04",
            tag: "project-creative",
            service: "Creative",
            description:
                "Impactful, conversion-driven content that combines emotional appeal with sharp messaging—so your brand always feels real, relatable, and unforgettable.",
            frameColor: "#8E51FF",
        },
    ];
    return (
        <section id="service" className="flex flex-col gap-24 bg-zinc-900 text-white px-5 sm:px-10 md:px-20 py-20 sm:p-20">
            <div className="flex flex-col lg:flex-row justify-between gap-5">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-max gap-x-20 gap-20">
                {services.map((service, i) => (
                    <Frame
                        key={i}
                        tag={service.tag}
                        frameContainerStyle="flex flex-col lg:even:mt-20"
                        tagStyle="text-white text-xs font-normal tracking-wide px-1.5 py-1 w-max rounded-tl-sm rounded-tr-sm"
                        frameStyle="border-2 w-max p-3.5"
                        style={{
                            frameColor: service.frameColor || "#ec4899",
                        }}
                    >
                        <div className="flex flex-col justify-between bg-white text-zinc-900 p-6 rounded-2xl w-[250px] sm:w-[300px] h-[350px] sm:h-[400px]">
                            <div className="flex items-end gap-1">
                                <div
                                    className="w-1 h-1 mb-2"
                                    style={{
                                        backgroundColor:
                                            service.frameColor || "#ec4899",
                                    }}
                                ></div>
                                <p
                                    className="font-bold text-4xl"
                                    style={{
                                        color: service.frameColor || "#ec4899",
                                    }}
                                >
                                    {service.id}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="font-semibold text-lg">
                                    {service.service}
                                </p>
                                <p className="text-zinc-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </Frame>
                ))}
            </div>
        </section>
    );
}

export default Service;
