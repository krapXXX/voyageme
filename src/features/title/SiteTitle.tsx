import './ui/SiteTitle.css';
import { Link } from "react-router-dom";


export default function SiteTitle({
    subtitle,
    title,
     align = "left",
     to
}: {
    subtitle: string;
    title: string;
     align?: "left" | "center" | "right";
     to?: string;
}) {
    const content = (
        <div className="title-block"
        style ={{  textAlign: align}}
        >
            <h4 className='subtitle'>{subtitle}</h4>
            <h2 className='title'>{title}</h2>
        </div>
    );
    
return to 
    ? <Link to={to} className="site-title-link">{content}</Link> 
    : content;

}
