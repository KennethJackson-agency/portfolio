import { contentfulApi } from "@/lib/global/contentful/contentful";
import FooterClient from "./FooterClient";

export default async function Footer() {
    const abouts = await contentfulApi.getAbouts();

    return <FooterClient abouts={abouts} />;
}
