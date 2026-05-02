function Header() {
    return (
        <div className="space-y-6">
            {/* Meta line */}
            <p
                className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500"
                style={{ fontFamily: "var(--font-jetbrains)" }}
            >
                <span className="inline-block w-8 h-px bg-zinc-500" />
                Field Notes · KJ Agency · 2026
            </p>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight">
                <span className="text-primary font-semibold">Notes from </span>
                <em className="italic text-zinc-500">the studio,</em>
                <br />
                <span className="text-primary font-semibold">and </span>
                <em className="italic text-zinc-500">the field.</em>
            </h1>
        </div>
    );
}

export default Header;
