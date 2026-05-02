import Image from "next/image";

const BENTO_CONFIG = [
    {
        gridClass: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
        cardClass: "bg-white text-black",
        labelClass: "text-black/40",
        textClass: "text-2xl md:text-3xl font-medium leading-snug",
    },
    {
        gridClass: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
        cardClass: "bg-zinc-900 text-white",
        labelClass: "text-white/40",
        textClass: "text-xl md:text-2xl font-medium",
    },
    {
        gridClass: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
        cardClass: "bg-zinc-900 text-white",
        labelClass: "text-white/40",
        textClass: "text-xl md:text-2xl font-medium",
    },
    {
        gridClass: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
        cardClass: "bg-zinc-900 text-white",
        labelClass: "text-white/40",
        textClass: "text-xl md:text-2xl font-medium",
    },
    {
        gridClass: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
        cardClass: "bg-zinc-900 text-white",
        labelClass: "text-white/40",
        textClass: "text-xl md:text-2xl font-medium",
    },
    {
        gridClass: "lg:col-start-1 lg:col-end-4 lg:row-start-3 lg:row-end-4",
        cardClass: "bg-zinc-900 text-white",
        labelClass: "text-white/40",
        textClass: "text-xl md:text-2xl font-medium",
    },
];

export default function ServiceGridSection({ services = [] }) {
    if (!services.length) return null;

    const displayServices = services.slice(0, 6);

    return (
        <section
            id="services"
            className="bg-primary mx-4 md:mx-8 rounded-3xl px-6 md:px-12 py-12 md:py-20"
        >
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between gap-6 mb-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-white">
                    What we <br />
                    bring to the{" "}
                    <em className="font-normal italic text-zinc-500">
                        table.
                    </em>
                </h2>
                <p className="text-zinc-400 text-sm md:text-base max-w-xs lg:w-[260px] self-start lg:self-end lg:text-right">
                    From tech magic to creative firepower, our services are
                    built to help your brand perform, connect, and grow in a
                    digital-first world.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-3">
                {displayServices.map((service, i) => {
                    const config = BENTO_CONFIG[i] ?? BENTO_CONFIG[1];
                    const icon =
                        service.fields.serviceIcon?.fields?.file?.url;

                    return (
                        <div
                            key={service.sys.id}
                            className={`group ${config.gridClass} ${config.cardClass} rounded-2xl p-6 flex flex-col justify-between min-h-[200px] lg:min-h-[180px] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-2xl cursor-default`}
                        >
                            <div className="flex items-start justify-between">
                                <span
                                    className={`font-mono text-xs uppercase tracking-widest transition-opacity duration-300 group-hover:opacity-100 ${config.labelClass}`}
                                >
                                    {service.fields.category}
                                </span>
                                {icon && (
                                    <Image
                                        src={`https:${icon}`}
                                        width={20}
                                        height={20}
                                        alt=""
                                        className="object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                                    />
                                )}
                            </div>
                            <p className={`${config.textClass} transition-transform duration-300 ease-out group-hover:-translate-y-0.5`}>
                                {service.fields.serviceDescription}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
