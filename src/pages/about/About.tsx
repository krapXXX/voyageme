import { useContext } from 'react';
import SiteBlock from '../../features/block/SiteBlock';
import SiteTitle from '../../features/title/SiteTitle';
import './ui/About.css';
import { AppContext } from '../../features/app_context/AppContext';

export default function About() {
const { isSmallScreen } = useContext(AppContext);

    return <>

        <div className="block " style={{ marginTop: "0", paddingTop: "180px" }}>
            <div className="grid4" >
                <h1>About<br /> <strong>VoyageME</strong></h1>
                <div>
                    <h4 style={{ color: "#808080" }}>Our travel agency was created out of a love for travel and people. <strong >Since 2018</strong>,we have been helping travelers discover the world easily, comfortably and without stress.</h4>
                    <h4 style={{ color: "#808080", paddingTop: "15px" }} > We create trips that inspire. <strong >Your vacation is our concern.</strong></h4>
                </div>
            </div>
            <div style={{ paddingTop: "30px" }}>
                <SiteBlock height='350px' backgroundImage='/img/about.png'></SiteBlock>
            </div>
        </div>

        <div className='block'>
            {!isSmallScreen&&
              <  div className="grid4">
                <div className="column-container">
                    <SiteTitle title="Why Started" subtitle="our path" />
                    <div>
                        <h4 style={{ color: "#808080", paddingTop: "60px" }}>Our journey began when we personally faced the frustrations of trip planning —<strong> unclear terms, unreliable agencies, and a lack of real support.</strong></h4>
                        <h4 style={{ color: "#808080", paddingTop: "15px" }}>We decided to create a service that would be<strong> transparent, easy to use, and truly customer-focused.</strong></h4>
                        <h4 style={{ color: "#808080", paddingTop: "15px" }}>From a small office and a few destinations, we’ve grown into a<strong> trusted team with global partners.</strong></h4>
                    </div>
                </div>
                <SiteBlock backgroundImage='/img/path.jpg' height="420px">
                    <div className="block-text-center" >
                        <h3 style={{ color: "#F5F5F2", marginLeft: "40px ", marginRight: "40px" }}>Our mission is to make travel accessible, comfortable, and inspiring. We want everyone to discover the world easily, safely, and with joy.</h3>
                    </div>
                </SiteBlock>

            </div>
            }
            {isSmallScreen &&
            <div>
                    <SiteTitle title="Why Started" subtitle="our path" />
             
             <SiteBlock backgroundImage='/img/path.jpg' height="420px">
                    <div className="block-text-center" >
                        <h3 style={{ color: "#F5F5F2", marginLeft: "40px ", marginRight: "40px" }}>Our mission is to make travel accessible, comfortable, and inspiring. We want everyone to discover the world easily, safely, and with joy.</h3>
                    </div>
                </SiteBlock>
                        <div className="column-container">
                        <h4 style={{ color: "#808080", paddingTop: "15px" }}>Our journey began when we personally faced the frustrations of trip planning —<strong> unclear terms, unreliable agencies, and a lack of real support.</strong></h4>
                        <h4 style={{ color: "#808080", paddingTop: "15px" }}>We decided to create a service that would be<strong> transparent, easy to use, and truly customer-focused.</strong></h4>
                        <h4 style={{ color: "#808080", paddingTop: "15px" }}>From a small office and a few destinations, we’ve grown into a<strong> trusted team with global partners.</strong></h4>
                    </div>
                    </div>
            }
          
        </div>
    </>
}