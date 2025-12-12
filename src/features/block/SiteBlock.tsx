import './ui/SiteBlock.css';

export default function SiteBlock({
    width,
    height,
    children,
    backgroundImage
}: {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    backgroundImage?: string;
}) {
    return (
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
}
