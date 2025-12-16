import './ui/SiteInput.css';

export default function SiteInput({
    width,
    height = "50px",
    text,
    value,
    onChange
}: {
    width?: string;
    height?: string;
    text: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <div className="input-wrapper" style={{ width }}>
            <h4 className="input-label">{text} *</h4>

            <input
                type="text"
                className="input-block"
                placeholder={text}
                style={{ height }}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}
