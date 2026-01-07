import SiteButton from "../../features/buttons/SiteButton";
import ButtonTypes from "../../features/buttons/types/ButtonTypes";

export default function Error() {
    return (
        <>
            <div
                className="block"
                style={{
                    backgroundImage: 'url("/img/404.png")',
                    backgroundSize: "cover",
                    width:"100%",
                    height: "100vh",
                    marginRight: "0",
                    marginLeft: "0",
                    marginTop: "0",
                    marginBottom: "0"
                }}
            >
                <div
                    className="column-container"
                    style={{
                        width:"50%",
                        marginTop: "200px",
                        position: "absolute",
                        top: "0",
                        left: "10%"
                    }}
                >
                    <h1 ><strong>Oops!</strong></h1>
                    <h2 style={{ marginTop: "10px" }}>
                        Looks like this page missed the flight.
                    </h2>
                    <div style={{ marginTop: "30px" }}>
                        <SiteButton
                            to="/home"
                            buttonType={ButtonTypes.Black}
                            text="Go to the Main Page"
                            width={"290px"}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
