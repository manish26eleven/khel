import { useState, useEffect } from "react";

export default function PopupModal({isNewUser , setIsNewUser}) {
  const [isNew, setIsNew] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const submitForm = () => {
    if (formData.name === "" || formData.phone === "") {
      alert("Please fill all the fields.");
      return;
    }
    if(formData.phone.length !==10){
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    console.log("Form submitted", formData);
    localStorage.setItem("hasSeenPopup", "true");
    setIsNewUser(false);
  };
  const cancelTask = () => {     
    localStorage.setItem("hasSeenPopup", "true");
    setIsNewUser(false);
     }


  // Prevent scroll when modal opens
  useEffect(() => {
    if (isNew) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "auto");
  }, [isNew]);

  return (
    <>
     
       {isNewUser && <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(5px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "white",
              padding: "32px",
              borderRadius: "16px",
              width: "90%",
              maxWidth: "500px",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* CROSS ICON */}
            <div
              onClick={() => cancelTask()}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                fontSize: "22px",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              ✕
            </div>

            <h2 style={{ marginBottom: "20px" }}>Welcome to Crik.ai</h2>
   
            <input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "12px 12px",
                marginBottom: "12px",
                fontSize: "16px",
                borderRadius: "8px",
                border: "1px solid #ccc",
              }}
            />

           <div
  style={{
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "0 12px",
    
    marginBottom: "20px",
  }}
>
  <span style={{ marginRight: "8px", fontSize: "16px", color: "#555" }}>
    +91
  </span>

  <input
    type="tel"
    placeholder="Enter phone number"
    value={formData.phone}
    maxLength={10} // exactly 10 digits
    onChange={(e) => {
      // accept only numbers
      const cleaned = e.target.value.replace(/\D/g, "");
      setFormData({ ...formData, phone: cleaned });
    }}
    style={{
      flex: 1,
      padding: "12px 0",
      border: "none",
      outline: "none",
      fontSize: "16px",
    }}
  />
</div>

            <button
              onClick={() => submitForm()}
              style={{
                width: "100%",
                padding: "14px",
                background: "#2563eb",
                color: "white",
                fontSize: "18px",
                borderRadius: "8px",
                border: "none",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>
        </div> }
      
    </>
  );
}
