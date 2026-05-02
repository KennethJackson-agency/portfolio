import { contentfulApi } from "@/lib/global/contentful/contentful";
import FooterClient from "./FooterClient";

export default async function Footer() {
    const socialMedias = await contentfulApi.getSocialMedias();
    return <FooterClient socialMedias={socialMedias} />;
}
