import './ui/SiteTitle.css';


export default function SiteTitle({
    subtitle,
    title,
     align = "left",
}: {
    subtitle: string;
    title: string;
     align?: "left" | "center" | "right";
}) {
    return (
        <div className="title-block"
        style ={{  textAlign: align}}
        >
            <h4 className='subtitle'>{subtitle}</h4>
            <h2 className='title'>{title}</h2>
        </div>
    );
}
