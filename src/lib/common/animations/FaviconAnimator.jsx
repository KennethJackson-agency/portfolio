"use client";

import { useEffect } from "react";

export default function FaviconAnimator() {
    useEffect(() => {
        let angle = 0;
        let scale = 1;
        let direction = 1;

        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext("2d");

        const image = new Image();
        image.src = "/logo.png"; // make sure this PNG exists in /public

        const updateFavicon = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 🔁 scale + rotate
            scale += direction * 0.005;
            if (scale > 1.05 || scale < 0.85) direction *= -1;

            ctx.save();
            ctx.translate(32, 32); // center
            ctx.scale(scale, scale);
            ctx.rotate(angle);
            ctx.translate(-32, -32);
            ctx.drawImage(image, 0, 0, 64, 64);
            ctx.restore();

            const favicon = document.getElementById("favicon-animated") || document.createElement("link");
            favicon.id = "favicon-animated";
            favicon.rel = "icon";
            favicon.href = canvas.toDataURL("image/png");
            document.head.appendChild(favicon);

            angle += 0.02;
            requestAnimationFrame(updateFavicon);
        };
    }, []);

    return null;
}
