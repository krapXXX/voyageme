import { useContext, useEffect, useState } from 'react';
import SiteBlock from '../../features/block/SiteBlock';
import SiteTitle from '../../features/title/SiteTitle';
import './ui/About.css';
import { AppContext } from '../../features/app_context/AppContext';
import type { TeamPageSection } from '../../entities/team/model/Team';
import TeamDao from '../../entities/section/api/TeamDao';

function TeamCard({ item }: { item: TeamPageSection }) {
    return (
        <SiteBlock width="289px" height="488px" backgroundImage={item.imageUrl}>

            <div style={{ position: "absolute", bottom: "24px", left: "20px" }}>
                <h3 style={{ color: "#F5F5F2" }}>{item.name}</h3>
                <h4 style={{ color: "#F5F5F2" }}>{item.position}</h4>
            </div>
        </SiteBlock>
    );
}

export default function About() {
    const { isSmallScreen } = useContext(AppContext);
    const [teamItems, setTeamItems] = useState<TeamPageSection[]>([]);

    useEffect(() => {
        TeamDao.getTeam()
            .then(setTeamItems)
            .catch(console.error);
    }, []);
    return <>
        <div className="block " style={{ marginTop: "0", paddingTop: "180px" }}>
            <div className="grid4" >
                <h1>About<br /> <strong>VoyageME</strong></h1>
                <div className="column-container" style={{ display: "flex", justifyContent: "space-between" }}>
                    <h4 style={{ color: "#808080" }}>Our travel agency was created out of a love for travel and people. <strong >Since 2018</strong>,we have been helping travelers discover the world easily, comfortably and without stress.</h4>
                    <h4 style={{ color: "#808080" }} > We create trips that inspire. <strong ><br />Your vacation is our concern.</strong></h4>
                </div>
            </div>
            <div style={{ paddingTop: "30px" }}>
                <SiteBlock height='350px' backgroundImage='/img/about.png'></SiteBlock>
            </div>
        </div>

        <div className='block'>
            {!isSmallScreen &&
                <div className="grid4">
                    <div className="column-container" style={{ display: "flex", justifyContent: "space-between" }}>
                        <SiteTitle title="Why Started" subtitle="our path" />
                        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                            <h4 style={{ color: "#808080" }}>Our journey began when we personally faced the frustrations of trip planning —<strong> unclear terms, unreliable agencies, and a lack of real support.</strong></h4>
                            <h4 style={{ color: "#808080" }}>We decided to create a service that would be<strong> transparent, easy to use, and truly customer-focused.</strong></h4>
                            <h4 style={{ color: "#808080" }}>From a small office and a few destinations, we’ve grown into a<strong> trusted team with global partners.</strong></h4>
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

        <div className="block">
            <SiteTitle align="center" title="Our Achivements" subtitle="OUR APPROACH" />
            <div className="gridnum" >

                <div style={{ marginTop: "50px" }}>
                    <h4 style={{ color: "#808080", marginBottom: "40px" }}>
                        Over <strong>10,000</strong> satisfied tourists
                    </h4>
                    <img src="/img/01 (1).png" />
                </div>

                <div style={{ marginTop: "50px" }}>
                    <h4 style={{ color: "#808080", marginBottom: "40px" }}>
                        Official partnerships with <strong>leading</strong> tour operators, ensuring <strong>quality</strong> and <strong>reliability.</strong>
                    </h4>
                    <img src="/img/02 (1).png" />
                </div>

                <div style={{ marginTop: "50px" }}>
                    <h4 style={{ color: "#808080", marginBottom: "40px" }}>
                        <strong>94%</strong> positive feedback — we’re proud to see our clients return for their next adventures.
                    </h4>
                    <img src="/img/03 (1).png" />
                </div>

            </div>
        </div>

        <div className="block" >
            <div style={{ width: "60%" }}>
                <SiteTitle title="Who Takes Care Of Every Detail Of Your Trip" subtitle="OUR TEAM" />
            </div>
            {!isSmallScreen &&
                <div className="gridteam">
                    {teamItems.map((item) => (
                        <TeamCard item={item} />
                    ))}
                </div>
            }
            { isSmallScreen &&
                <div className="mobile-scroll" style={{ gridAutoColumns: "auto" }}>
                    {teamItems.map((item) => (
                        <div className="mobile-slide" >
                            <TeamCard item={item} />
                        </div>
                    ))}
                </div>
            }
            <h4 style={{ color: "#808080", justifySelf:"flex-end", marginTop: "30px", width: "55%" }}>Our managers are constantly training, attending exhibitions and inspecting hotels so that you receive only proven tours.</h4>

        </div>
  </>
  }