import './ui/SiteTitle.css';


export default function SiteTitle({
    subtitle,
    title,
}: {
    subtitle: string;
    title: string;
}) {
    return (
        <div className="title-block">
            <h4 className='subtitle'>{subtitle}</h4>
            <h2 className='title'>{title}</h2>
        </div>
    );
}
