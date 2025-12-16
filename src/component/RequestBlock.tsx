import { useState } from "react";
import SiteBlock from "../features/block/SiteBlock";
import SiteInput from "../features/input/SiteInput";
import SiteButton from "../features/buttons/SiteButton";
import ButtonTypes from "../features/buttons/types/ButtonTypes";
import "../app/ui/App.css"
import"./ui/RequestBlock.css"


export default function RequestBlock() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");

    function handleSubmit() {
        if (name.length < 3) {
            setError("Name must be at least 3 characters.");
            return;
        }
        if (!/^\d{12}$/.test(phone)) {
            setError("Phone number must contain exactly 12 digits.");
            return;
        }

        setError("");
        alert("Form submitted!");
    }

    return (
        <div className="block" id="book-section">
            <div className="grid3">

                {/* LEFT SIDE — IMAGE + FORM */}
                <SiteBlock height="650px" backgroundImage="/img/request.png">
                    <div className="gradient request-block">
                        <div className="col-container" style={{ width: "60%" }}>
                            
                            <h3 style={{ color: "#F5F5F2" }}>
                                Let Us Do The Planning – You Do The Packing!
                            </h3>

                            <h4 style={{ color: "#F5F5F2", marginTop: "20px" }}>
                                Submit a request and get your perfect vacation, effortlessly.
                            </h4>

                            <div>
                                <SiteInput text="Name" value={name} onChange={setName} />
                                <SiteInput text="Phone Number" value={phone} onChange={setPhone} />
                            </div>

                            {error && (
                                <h4 style={{ color: "#6B6963", marginTop: "20px", fontSize:"16px" }}>
                                    {error}
                                </h4>
                            )}

                            <div style={{ marginTop: "50px" }}>
                                <SiteButton
                                    buttonType={ButtonTypes.Blur}
                                    text="Leave a Request"
                                    width="100%"
                                    onClick={handleSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </SiteBlock>

                {/* RIGHT SIDE — LOCATION + SOCIALS */}
                <div className="request-location">
                    <h3>Our Location</h3>

                    <h4 style={{ paddingTop: "20px" }}>
                        <img src="/img/location.png" className="icon" style={{ marginRight: "10px" }} />
                        17A Horizon Street, Office 304, Kyiv, 01001, Ukraine
                    </h4>

                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="/img/Figmap.png"
                            style={{ paddingTop: "30px", width: "100%", cursor: "pointer" }}
                        />
                    </a>

                    <div className="socials row-container">
                        <h3>Social Media</h3>

                        <div className="row-container">
                            <img src="/img/Facebook.png" className="icon" style={{ marginRight: "30px" }} />
                            <img src="/img/Instagram.png" className="icon" style={{ marginRight: "30px" }} />
                            <img src="/img/Linkedin.png" className="icon" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
