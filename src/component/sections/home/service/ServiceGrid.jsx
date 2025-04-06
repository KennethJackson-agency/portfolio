"use client";

import HoverServiceItem from "./HoverServiceItem";


export default function ServiceGrid({ services }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-zinc-600 divide-x divide-y divide-zinc-600 w-full text-left text-white max-w-5xl mx-auto">
            {services.map((service) => (
                <HoverServiceItem
                    key={service.sys.id}
                    tag={service.fields.tag}
                    icon={service.fields.icon}
                    title={service.fields.serviceName}
                    description={service.fields.serviceDescription}
                />
            ))}
        </div>
    );
}
