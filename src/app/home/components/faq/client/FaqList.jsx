"use client";

import { useState } from "react";
import FaqItem from "./FaqItem";

export default function FaqList({ faqs }) {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:items-start">
            {faqs.map((faq) => (
                <FaqItem
                    key={faq.sys.id}
                    faq={faq}
                    isOpen={openId === faq.sys.id}
                    onToggle={() => toggle(faq.sys.id)}
                />
            ))}
        </div>
    );
}
