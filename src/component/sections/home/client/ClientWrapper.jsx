import Image from "next/image";
import React from "react";

function ClientWrapper({ clients }) {
    return (
        <section className="flex flex-wrap gap-10 justify-center px-5">
            {clients?.map((client, i) =>
                client.fields.logo?.map((logo, j) =>
                    logo?.fields?.file?.url ? (
                        <Image
                            key={`${i}-${j}`}
                            src={`https:${logo.fields.file.url}`}
                            width={300}
                            height={300}
                            alt={logo.fields.title || "Client logo"}
                            className="w-max h-[24px] object-contain"
                            priority
                        />
                    ) : null
                )
            )}
        </section>
    );
}

export default ClientWrapper;
