import './ui/SiteBlock.css';

export default function SiteBlock({ width, height, children }: { width?: string, height?: string, children?: React.ReactNode; }) {
    return <div className={"site-block "} style={{ width: width, height: height }}>
        {children}
    </div>;
}


