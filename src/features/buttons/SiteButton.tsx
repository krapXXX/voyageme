import ButtonTypes from "./types/ButtonTypes";
import "./ui/SiteButton.css";

export default function SiteButton(
    { buttonType,text,padding,icon }: { buttonType: ButtonTypes, text:string, padding?:string, icon?:React.ReactNode }
)
{
const extraClass =
buttonType === ButtonTypes.Black ? " button-black " :
buttonType === ButtonTypes.White ? " button-white " :
buttonType === ButtonTypes.Blur ? " button-blur " : "";

return <div className={"site-button " + extraClass} style={{padding: padding ? padding : "16px 30px"}}>
        {text}{icon && <span className="button-icon">{icon}</span>}
    </div>;
}

