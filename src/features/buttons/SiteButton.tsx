import { Link } from "react-router-dom";
import ButtonTypes from "./types/ButtonTypes";
import "./ui/SiteButton.css";

export default function SiteButton({
    buttonType,
    text,
    width = "206px",
    icon,
    to,
    onClick
}: {
    buttonType: ButtonTypes;
    text: string;
    width?: string;
    icon?: React.ReactNode;
    to?: string;
    onClick?: () => void;
}) {

    const extraClass =
        buttonType === ButtonTypes.Black ? " button-black " :
        buttonType === ButtonTypes.White ? " button-white " :
        buttonType === ButtonTypes.Blur ? " button-blur " : "";

    // Smooth scroll handler
    function handleScroll(e: React.MouseEvent) {
        if (!to || !to.startsWith("#")) return;

        e.preventDefault();

        const id = to.substring(1);
        const el = document.getElementById(id);

        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }

    const content = (
        <div
            className={"site-button " + extraClass}
            style={{ width }}
            onClick={onClick}
        >
            {text}
            {icon && <span className="button-icon">{icon}</span>}
        </div>
    );

    // CASE 1: same-page scroll anchor
    if (to && to.startsWith("#")) {
        return (
            <a href={to} onClick={handleScroll} >
                {content}
            </a>
        );
    }

    // CASE 2: navigation to another route
    if (to) {
        return (
            <Link to={to} >
                {content}
            </Link>
        );
    }

    // CASE 3: normal button (no navigation)
    return content; // <-- THIS WAS MISSING
}
