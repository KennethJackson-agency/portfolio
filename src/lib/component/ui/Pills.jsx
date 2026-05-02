const variants = {
    black: "bg-[linear-gradient(0deg,#0E0E0E,#1F1F1F)] text-white",
    orange: "bg-[linear-gradient(0deg,#FF7A3A,#FF8C55)] text-white",
};

export default function Pills({ text, variant = "black", className = "" }) {
    const variantClass = variants[variant] ?? variants.black;

    return (
        <div
            className={`text-sm w-max px-5 py-2.5 rounded-full shadow-pills ${variantClass} ${className}`}
        >
            {text}
        </div>
    );
}
