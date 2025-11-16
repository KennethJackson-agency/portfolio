"use client";

/* Next.js Core */
import Image from "next/image";

export default function ClientLogo({ clients }) {
    if (!clients?.length) return null;

    return (
        <>
            {clients.map((client, i) =>
                client?.fields?.logo?.map((logo, j) => {
                    const file = logo?.fields?.file;
                    const url = file?.url;

                    if (!url) return null;

                    return (
                        <Image
                            key={`${i}-${j}`}
                            src={`https:${url}`}
                            width={200}
                            height={80}
                            alt={logo.fields.title || "Client logo"}
                            className="w-max h-[32px] object-contain"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={`https:${url}?w=20&h=20&fit=thumb&fm=jpg`}
                        />
                    );
                })
            )}
        </>
    );
}
