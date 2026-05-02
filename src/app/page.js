import Home from "./home/Home";
import { generateHomeMetadata } from "@/lib/seo/seo";

export async function generateMetadata() {
    const metadata = generateHomeMetadata();
    return metadata;
}

export default function Page() {
    return (
        <div>
            <Home />
        </div>
    );
}
