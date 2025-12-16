import ButtonTypes from "./types/ButtonTypes";
import "./ui/SiteButton.css";

export default function SiteButton(
    { buttonType,text,width="206px",icon }: { buttonType: ButtonTypes, text:string, width?:string, icon?:React.ReactNode }
)
{
const extraClass =
buttonType === ButtonTypes.Black ? " button-black " :
buttonType === ButtonTypes.White ? " button-white " :
buttonType === ButtonTypes.Blur ? " button-blur " : "";

return <div className={"site-button " + extraClass} style={{width}}>
        {text}{icon && <span className="button-icon">{icon}</span>}
    </div>;
}

