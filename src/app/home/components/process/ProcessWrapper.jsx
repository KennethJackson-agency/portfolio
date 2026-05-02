import ProcessList from "./client/ProcessList";

export default function ProcessWrapper({ processes = [] }) {
    if (!processes.length) return null;

    return (
        <section id="process" className="px-5 md:px-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-primary mb-10">
                How we{" "}
                <em className="font-normal italic text-zinc-400">work.</em>
            </h2>
            <ProcessList processes={processes} />
        </section>
    );
}
