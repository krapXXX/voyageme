import './ui/SiteInput.css';

export default function SiteInput({
    width,
    height="50px",
    text
}: {
    width?: string;
    height?: string;
    text: string;   
}) {
    return (
        <div className="input-wrapper" style={{ width }}>
            <h4 className="input-label">{text} *</h4>

            <input
                type="text"
                className="input-block"
                placeholder={text}
                style={{ height }}
            />
        </div>
    );
}
