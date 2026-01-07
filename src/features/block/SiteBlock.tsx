import { Link } from "react-router-dom";
import "./ui/SiteBlock.css";

export default function SiteBlock({
    width,
    height,
    children,
    to,
    backgroundImage
}: {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    to?: string;
    backgroundImage?: string;
}) {

    function handleScroll(e: React.MouseEvent) {
        if (!to || !to.startsWith("#")) return;

        e.preventDefault();

        const id = to.substring(1);
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }

    // This is the actual block content
    const content = (
        <div
            className="site-block"
            style={{
                width,
                height,
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: backgroundImage ? "cover" : undefined,
                backgroundPosition: backgroundImage ? "center" : undefined,
                backgroundRepeat: backgroundImage ? "no-repeat" : undefined
            }}
        >
            {children}
        </div>
    );

    // CASE 1: smooth scroll anchor
    if (to && to.startsWith("#")) {
        return (
            <a href={to} onClick={handleScroll}>
                {content}
            </a>
        );
    }

    // CASE 2: route navigation
    if (to) {
        return (
            <Link to={to}>
                {content}
            </Link>
        );
    }

    // CASE 3: normal block
    return content;
}
