import SiteButton from '../../features/buttons/SiteButton'
import ButtonTypes from '../../features/buttons/types/ButtonTypes'
import './ui/Home.css'

export default function Home() {
    return <>
        <div className="hero-section"></div>
        <div className="text-container" style={{ width: "50%", marginTop: "280px" ,position:"absolute", left:"5em",top:"0"}}>
            <h1 style={{ color: "white" }}>Your Next Adventure Starts Here</h1>
            <h4 style={{ marginTop: "30px" }}>Dreaming of sun-kissed beaches, historic cities, or mountain escapes? Don't wait — the world is ready for you!</h4>
            <div style={{ marginTop: "30px" }}>
            <SiteButton  buttonType={ButtonTypes.Blur} text="Explore Hot Deals" padding="16px 70px" />
</div>
        </div>

    </>
}