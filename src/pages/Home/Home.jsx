import PhoneScrollAnimation from "../PhoneScrollAnimation/PhoneScrollanimation";
import "./Home.css";
import { useEffect, useState } from "react";
import cricketfield from '../../assets/cricketfield.jpg';
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowsize";
import PopupModal from "../../components/PopupModal";

const Home = () => {
  const {width} = useWindowSize();
        const isMobile = width <= 1000;
  const [isLogin, setIsLogin] = useState(true);
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

   useEffect(() => {
     const hasSeenPopup = localStorage.getItem("hasSeenPopup");

  if (!hasSeenPopup) {
    setIsNewUser(true);
  }
  
  }, []);

  return (
    <>
     {isNewUser &&<PopupModal isNewUser={isNewUser} setIsNewUser={setIsNewUser} /> }
      <div style={{display:'flex' , flexDirection : isMobile ? 'column' : 'row' ,  alignItems: 'center', /* vertical alignment */
      width:'100%' ,padding: isMobile ? '20px' : '60px' ,  backgroundColor:'rgba(242 , 244 , 254)'}}>
            <div style={{ width: isMobile ? '85%' :  "50%", display: "flex", flex: 1 , flexDirection: "column" }}> <div >
              <span
          style={{
            fontFamily: "Roboto Condensed, sans-serif",
            fontSize: isMobile ? '40px' : "64px",
            fontWeight: 700,
            lineHeight: "1.1",
          }}
        >
          Revolutionize Cricket with     
        </span>
    
        <span
          style={{
            fontFamily: "Roboto Condensed, sans-serif",
            fontSize:  isMobile ? '40px' : "64px",
            fontWeight: 700,
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
         {' '} AI-Powered Technology
        </span>
         
        </div>
         <span style={{fontSize:  isMobile ? '20px' : '25px' , marginTop:'20px'}} >
            Bring professional DRS systems and broadcasting to your local matches. Experience cricket like never before with Crik.ai.
          </span>
          {/* <div style={{ display: "flex", gap: "32px", marginTop: "30px" }}>
          <button style={{fontSize : '20px' , padding: '12px 32px' , color:'white' , backgroundColor:'#2563eb'}}>
            Explore Services 
          </button>
          <button  style={{fontSize : '20px' , padding: '12px 32px' , color:'black' , backgroundColor:' #e2e8f0'}}>
            Learn More
          </button>
          </div> */}
                  </div>
            <div  style={{ width: isMobile ? '100%' : "50%",marginTop: isMobile ? '32px' : '0px' , display: "flex", flexDirection: "column" }} >
              <div style={{ display: "flex", justifyContent: "center" , alignItems: "center" , borderRadius :'30px' , padding:'10px'  }}>
                 <img src={cricketfield} alt="Crik.ai Hero" style={{ width: isMobile ? '95%' : "70%", height: "auto" , borderRadius :'30px' }} />
              </div>
              
            </div>
           
          </div>
           <div style={{  width: "100%", textAlign: "center" , paddingTop:'60px' , marginTop:'48px', justifyContent:'center' , alignItems:'center' , display:'flex' , flexDirection:'column'}} >
               <span style={{fontSize:  isMobile ? '40px' : '72px', fontWeight:'700' ,fontFamily:'Roboto Condensed, sans-serif'}} >
                Why  Choose  Crik.ai?
               </span>
               <span style={{fontSize:'20px' , marginTop:'10px' , fontFamily:'Roboto Condensed, sans-serif'}} >
                Cutting-edge technology for modern cricket enthusiasts
               </span>
               <div
      style={{
        display: "flex",
        flexDirection : isMobile ? "column" : "row",
        justifyContent: "space-between",
        gap: "30px",
        padding: isMobile ? '42px' : "60px",
      }}
    >
      {/* CARD 1 */}
      <div
        style={{
          flex: 1,                    // makes all cards equal width
          borderRadius: "20px",
          border: "1px solid #e2e8f0",
          padding: isMobile ? '16px' : "40px 30px",
          backgroundColor: "white",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: isMobile ? '48px' :  "70px", marginBottom: "20px" }}>📡</div>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            fontFamily: "Roboto Condensed, sans-serif",
            marginBottom: "12px",
          }}
        >
          Smart DRS System
        </h2>
        <p style={{ fontSize: "20px", color: "#555" }}>
          AI-powered decision review system for accurate match insights.
        </p>
      </div>
    
      {/* CARD 2 */}
      <div
        style={{
          flex: 1,
          borderRadius: "20px",
          border: "1px solid #e2e8f0",
          padding: isMobile ? '16px' : "40px 30px",
          backgroundColor: "white",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: isMobile ? '48px' : "70px", marginBottom: "20px" }}>🎥</div>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            fontFamily: "Roboto Condensed, sans-serif",
            marginBottom: "12px",
          }}
        >
          Broadcast Quality
        </h2>
        <p style={{ fontSize: "20px", color: "#555" }}>
          Stream local cricket like professional TV channels.
        </p>
      </div>
    
      {/* CARD 3 */}
      <div
        style={{
          flex: 1,
          borderRadius: "20px",
          border: "1px solid #e2e8f0",
          padding: isMobile ? '16px' : "40px 30px",
          backgroundColor: "white",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.08)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize:  isMobile ? '48px' : "70px", marginBottom: "20px" }}>🤖</div>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "700",
            fontFamily: "Roboto Condensed, sans-serif",
            marginBottom: "12px",
          }}
        >
          AI Analytics
        </h2>
        <p style={{ fontSize: "20px", color: "#555" }}>
          Get smart match stats, player analysis, and auto-highlights.
        </p>
      </div>
    </div>
    
            </div>
            <div
      style={{
        width: "100%",
        padding: "100px 20px",
        background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
        textAlign: "center",
        color: "white",
        borderRadius: "20px",
        marginTop: "120px",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: isMobile ? '40px' : "56px",
          fontWeight: 700,
          fontFamily: "Roboto Condensed, sans-serif",
          marginBottom: "20px",
        }}
      >
        Ready to Get Started?
      </h1>
    
      {/* Description */}
      <p
        style={{
          fontSize:  "22px",
          maxWidth: "800px",
          margin: "auto",
          lineHeight: "1.4",
          opacity: 0.9,
        }}
      >
        Transform your cricket experience with AI-driven analytics, smart DRS, and
        broadcast-ready tools. Start your journey with Crik.ai today.
      </p>
    
      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap:isMobile ? '32px' :  "48px",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        <button
          style={{
            padding:  "20px 48px",
            fontSize: "24px",
            fontWeight: 600,
              width: isMobile ? '85%' : 'auto',
            color: "black",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate('/ground-owners')}
        >
          Ground Owners
        </button>
    
        <button
          style={{
             padding: "20px 48px",
            fontSize: "24px",
            width: isMobile ? '85%' : 'auto',
            fontWeight: 600,
            color: "black",
            backgroundColor: "white",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate('/players')}
        >
          Players
        </button>
    
        <button
          style={{
             padding: "20px 48px",
            fontSize: "24px",
            fontWeight: 600,
            color: "black",
              width: isMobile ? '85%' : 'auto',
            backgroundColor: "white",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => navigate('/organizers')}
        >
          Organizers
        </button>
      </div>
    </div>
         <div style={{ width: "100%", marginTop: isMobile ? '50px' :  "100px", padding: "0 40px" , marginBottom: isMobile ? '40px' :  "70px" }}>
      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: isMobile ? '42px' : "68px",
          fontWeight: 800,
          fontFamily: "Roboto Condensed, sans-serif",
          marginBottom: isMobile ? '12px' :  "20px",
        }}
      >
        What Our Clients Say
      </h1>
    
      {/* Description */}
      <p
        style={{
          textAlign: "center",
          fontSize:isMobile ? '24px' : "28px",
          maxWidth: "900px",
          margin: "0 auto",
          opacity: 0.8,
          marginBottom: "60px",
          lineHeight: "1.5",
        }}
      >
        Thousands of professionals trust Crik.ai for unmatched AI accuracy in cricket
        technology.
      </p>
    
      {/* ROW OF CARDS */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          width: "100%",
          maxWidth: "1800px",
          margin: "0 auto",
          flexWrap: "wrap",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
        }}
      >
        {/* CARD TEMPLATE */}
        {[
          {
            quote:
              "Crik.ai transformed our livestream quality! The AI accuracy is unbelievable.",
            name: "Rohit Sharma",
            role: "Broadcast Technical Head, Elite Sports Network",
          },
          {
            quote:
              "The DRS tracking is spot-on. Our academy uses it daily for deep analysis.",
            name: "Anil Deshmukh",
            role: "Head Coach, Rising Cricket Academy",
          },
          {
            quote:
              "Amazing technology! Automation + analytics saved us endless working hours.",
            name: "Neha Kapoor",
            role: "Event Director, Pro Cricket League",
          },
        ].map((card, index) => (
          <div
            key={index}
            style={{
              flex: "1",
              minWidth:  isMobile ? '200px' : "350px",
              background: "white", // pure white
              height:'auto',
              padding: isMobile ? '30px' : "50px",
              borderRadius: "22px",
              boxShadow: "0 12px 40px rgba(0,0,0,0.15)", // stronger smooth shadow
              border: "1px solid rgba(0,0,0,0.05)",
            }}
          >
            <div
              style={{
                fontSize: isMobile ? '23px' : "26px",
                fontWeight: "700",
                marginBottom: isMobile ? '8px' :  "16px",
              }}
            >
              ✔ Verified Client
            </div>
    
            <p
              style={{
                fontSize: isMobile ? '24px' :  "30px",
                fontStyle: "italic",
                marginBottom: "30px",
                lineHeight: "1.5",
              }}
            >
              "{card.quote}"
            </p>
    
            <h3
              style={{
                fontSize: isMobile ? '22px' :  "28px",
                fontWeight: "700",
                marginBottom: isMobile ? "2px" : "4px",
              }}
            >
              {card.name}
            </h3>
    
            <span style={{ fontSize: isMobile ? '20px' :  "22px", opacity: 0.7 }}>{card.role}</span>
          </div>
        ))}
      </div>
    </div> 
    </>
  );
};

export default Home;
