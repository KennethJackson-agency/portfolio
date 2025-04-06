import { getAbouts } from "@/lib/contentful";
import AboutWrapper from "./AboutWrapper";

export const revalidate = 3600;

export default async function About() {
    const abouts = await getAbouts();
    return <AboutWrapper abouts={abouts ?? []} />;
}
