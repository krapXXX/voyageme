import { useContext, useEffect, useState } from 'react';
import SiteButton from '../../features/buttons/SiteButton';
import ButtonTypes from '../../features/buttons/types/ButtonTypes';
import { AppContext } from '../../features/app_context/AppContext';
import UserDao from '../../entities/user/api/UserDao';
import SiteTitle from '../../features/title/SiteTitle';
import SiteBlock from '../../features/block/SiteBlock';
import SiteInput from '../../features/input/SiteInput';
import "./ui/Auth.css"
export default function Auth() {

    const { user } = useContext(AppContext);
    return user == null ? <AuthForm /> : <Profile />;
}

function AuthForm() {
    const { setUser, setBusy } = useContext(AppContext);

    const [password, setPassword] = useState<string>("");
    const [isFormValid, setFormValid] = useState<boolean>(false);
    const [remember] = useState(true);
    const [email, setEmail] = useState("");
    useEffect(() => {
        setFormValid(email.length > 2 && password.length > 2)
    }, [email, password]);



    const onAuthClick = () => {
        setBusy(true);

        UserDao
            .authenticate(email, password)
            .then(res => {
                if (res == null) {
                    alert("Вхід відмовлено");
                } else {
                    if (remember) {
                        window.localStorage.setItem(
                            "user-231",
                            JSON.stringify(res)
                        );
                    }
                    setUser(res);
                }
            })
            .finally(() => {
                setBusy(false);
            });
    };


    return <>
    <div className = "bg">

    </div>
 <div className='app-modal' >
     <div  style = {{display:"flex", justifyContent:"center", alignItems:"center",verticalAlign:"center", justifySelf:"center"}}>
    <SiteBlock width="600px" height ="600px">
    <div  className = "column-container"style = {{height:"100%",display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>

<h3> Sign In</h3>
<SiteInput
width ="80%"

  text="Email"
  value={email}
  onChange={setEmail}
/>

<SiteInput
width ="80%"
  text="Password"
  value={password}
  onChange={setPassword}
/>
<div style ={{marginTop:"60px"}}>

     <SiteButton
                        text="Enter"
                        onClick={onAuthClick}
                        buttonType={ButtonTypes.Black }
                    />


</div>
 
</div>
    </SiteBlock>
 </div>
   

    </div>
    </>
}

function Profile() {

    const { user, setUser } = useContext(AppContext);

    const exitAuth = () => {
        window.localStorage.removeItem("user-231");
        setUser(null);
    };
    return <>
    
    <div className = "block" style={{height:"100vh" ,marginTop: "0",paddingTop:"180px" }}>
    <SiteTitle title = "Profile" subtitle = "about you"/>
<div style = {{display: "grid", gridTemplateColumns:"2fr 1fr", gap:"120px"}}>
       <div className = "column-container" style = {{marginTop:"50px"}}>
        <h4 >Name</h4>
        <SiteBlock width = "100%" height = "50px" >  
            <h4 style = {{marginLeft:"20px",marginTop:"13px", color:"#6B6963"}}>{user?.name}</h4>
            </SiteBlock>
            
            <h4 style = {{marginTop:"20px"}}>Email</h4>
        <SiteBlock width = "100%" height = "50px" >  
            <h4 style = {{marginLeft:"20px",marginTop:"13px", color:"#6B6963"}}>{user?.email}</h4>
            </SiteBlock>
            
            <h4 style = {{marginTop:"20px"}}>Phone</h4>
        <SiteBlock width = "100%" height = "50px" >  
            <h4 style = {{marginLeft:"20px",marginTop:"13px", color:"#6B6963"}}>{user?.phone}</h4>
            </SiteBlock>
            
            <h4 style = {{marginTop:"20px"}}>Address</h4>
        <SiteBlock width = "100%" height = "50px" >  
            <h4 style = {{marginLeft:"20px",marginTop:"13px", color:"#6B6963"}}>{user?.address}</h4>
            </SiteBlock>
<div style = {{marginTop:"50px"}}>

     <SiteButton width="50%"
            
                                text="Log Out"
                                buttonType={ButtonTypes.Black}
                                onClick={exitAuth}
                            />
</div>
             
       </div>
       <img
    style={{ width: "289px", height: "289px", borderRadius: "100px" }}
    src={user?.imageUrl}
/>
</div>

    </div>
console.log(user);

    </>
}