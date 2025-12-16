import SiteButton from '../../features/buttons/SiteButton';
import ButtonTypes from '../../features/buttons/types/ButtonTypes';
import './ui/About.css';

export default function About(){
return<>
  <div className="block " style={{ backgroundImage: 'url("/img/hero.png")', backgroundSize: "cover", width: "100%", height: "900px", marginRight: "0", marginLeft: "0", marginTop: "0" }}>
            <div className="column-container" style={{ width: "50%", marginTop: "280px", position: "absolute", left: "5em", top: "0" }}>
                <h1 style={{ color: "white" }}>Your Next Adventure Starts Here</h1>
                <h4 style={{ marginTop: "30px", color: "#A8A8A8" }}>Dreaming of sun-kissed beaches, historic cities, or mountain escapes? Don't wait — the world is ready for you!</h4>
                <div style={{ marginTop: "30px" }}>
                    <SiteButton buttonType={ButtonTypes.Blur} text="Explore Hot Deals" width={"290px"} />
                </div>
            </div>
        </div>
</>
}