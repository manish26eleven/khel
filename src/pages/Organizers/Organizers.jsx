import { useState } from "react";
import enquiry from '../../assets/enquiry.png';
export default function Organizers() {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydopejpKY-NvDygdmFHcg0LeK4iPnA45yS3KQZzVVb6-szaFKcG862S7SZKOOLrHd0jg/exec";

     const [formData, setFormData] = useState({
        organizationName: "",
        contactPerson: "",
        contact: "",
        eventType: "",
        startDate: "",
        numberOfMatches: "",
        selectServices: "",
        venueLocation: "",
        notes: "",
      });
       const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };
       const handlerequest = async  () => {

    if (formData.organizationName === "" || formData.contactPerson === "" || formData.contact === "" || formData.eventType === "" || formData.startDate === "" || formData.numberOfMatches === "" || formData.selectServices === "" || formData.venueLocation === "" ) {
      alert("Please fill all the required fields.");
      return;
    }
    try {
             console.log(formData);
       const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  console.log(response);  
  

    } catch (error) {
          console.log(error);
    }
   
  }
      const checkdata = () => {
        console.log(formData);
      }
        const inputStyle = {
      width: "100%",
      padding: "16px 18px",
      marginTop: "8px",
      borderRadius: "10px",
      border: "1px solid rgba(0,0,0,0.2)",
      fontSize: "18px",
      outline: "none",
      background: "rgba(255,255,255,0.7)",
    };
  return (
   <>
        <div style={{ width: "100%" , marginTop:"50px" }}>
             <div
               style={{
                 width: "100%",
                 padding: "60px 20px",
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "center",
               }}
             >
               {/* Icon */}
               <div
                 style={{
                   width: "90px",
                   height: "90px",
                   borderRadius: "50%",
                   backgroundColor: "#e0e7ff",
                   display: "flex",
                   justifyContent: "center",
                   alignItems: "center",
                   marginBottom: "20px",
                 }}
               >
                 <img src={enquiry} alt="Enquiry" style={{ width: "50%", height: "50%" }} />
               </div>
       
               {/* Title */}
               <div style={{ fontSize: "48px", fontWeight: "700", textAlign: "center" }}>
                 <span style={{ color: "black" }}>Tournament Organizer  </span>
                 <span
                   style={{
                     background: "linear-gradient(135deg, #2563eb, #7c3aed)",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                   }}
                 >
                   Enquiry
                 </span>
               </div>
       
               {/* Description */}
               <p
                 style={{
                   fontSize: "20px",
                   width: "80%",
                   maxWidth: "800px",
                   textAlign: "center",
                   marginTop: "20px",
                   color: "#4b5563",
                 }}
               >
                 Get in touch with us for any ground-level installation, setup, or demo requests.
                 We are here to help you bring AI-powered cricket technology to your venue.
               </p>
             </div>
               <div
             style={{
               width: "80%",
               margin: "50px auto",
               padding: "40px",
               borderRadius: "16px",
               background: "rgba(255,255,255,0.35)",
               backdropFilter: "blur(10px)",
               boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
               fontFamily: "Roboto Condensed, sans-serif",
             }}
           >
            
       
             {/* Row 1 : Ground Name + Location */}
             <div style={{ display: "flex", gap: "30px", marginBottom: "25px" }}>
               <div style={{ flex: 1 }}>
                 <label style={{ fontSize: "20px", fontWeight: 500 }}>Organization Name *</label>
                 <input
                   type="text"
                   name="organizationName"
                    value={formData.organizationName}
         onChange={handleChange}
                   placeholder="e.g., Melbourne Cricket Association"
                   style={inputStyle}
                 />
               </div>
       
               <div style={{ flex: 1 }}>
                 <label style={{ fontSize: "20px", fontWeight: 500 }}>Contact Person *</label>
                 <input
                   type="text"
                   name="contactPerson"
                    value={formData.contactPerson}
         onChange={handleChange}
                   placeholder="Your full Name"
                   style={inputStyle}
                 />
               </div>
             </div>
       
             {/* Row 2 : Contact Number + Ground Size (Dropdown) */}
             <div style={{ display: "flex", gap: "30px", marginBottom: "25px" }}>
               <div style={{ flex: 1 }}>
                 <label style={{ fontSize: "20px", fontWeight: 500 }}>Contact Number *</label>
                 <input
                   type="tel"
                    name="contact"
                    value={formData.contact}
         onChange={handleChange}
                   placeholder="+91 9876543210"
                   style={inputStyle}
                 />
               </div>
       
               <div style={{ flex: 1 }}>
                 <label style={{ fontSize: "20px", fontWeight: 500 }}> Event Type *</label>
                 <select style={inputStyle}
                 value={formData.eventType}
                  name="eventType"
         onChange={handleChange}>
                   <option value="">Select Event Type</option>
                   <option>League</option>
                   <option>Tournament</option>
                   <option>Corporate Event</option>
                   <option>School/Collge</option>
                 </select>
               </div>
             </div>
       
             {/* Row 3 : Current Facility */}
                <div style={{ display: "flex", gap: "30px", marginBottom: "25px" }}>
               <div style={{ flex: 1 }}>
                 <label style={{ fontSize: "20px", fontWeight: 500 }}>
          Event Start Date *
        </label>
        <input type="date" style={inputStyle} 
         value={formData.startDate}
          name="startDate"
          onFocus={(e) => e.target.showPicker()} 
  onChange={handleChange}/>
               </div>
       
               <div style={{ flex: 1 }}>
                   <label style={{ fontSize: "20px", fontWeight: 500 }}>Number of Matches *</label>
                 <input
                   type="tel"
                    name="numberOfMatches"
                    value={formData.numberOfMatches}
         onChange={handleChange}
                   placeholder="1"
                   style={inputStyle}
                 />
               </div>
             </div>
       
             {/* Row 4 : Preferred Installation Date (opens calendar) */}
              <div style={{ display: "flex", gap: "30px", marginBottom: "25px" }}>
                 <div style={{ flex: 1 }}>
                 <label style={{ fontSize: "20px", fontWeight: 500 }}> Services Required *</label>
                 <select style={inputStyle}
                 value={formData.selectServices}
                  name="selectServices"
         onChange={handleChange}>
                   <option value="">Select Services</option>
                   <option>DRS Only</option>
                   <option>Broadcasting Only</option>
                   <option>Both DRS & BroadCasting</option>
                  
                 </select>
               </div>
               <div style={{ flex: 1 }}>
                 <label style={{ fontSize: "20px", fontWeight: 500 }}>venue Location *</label>
                 <input
                   type="text"
                    name="venueLocation"
                    value={formData.venueLocation}
         onChange={handleChange}
                   placeholder="Ground Name , City, State"
                   style={inputStyle}
                 />
               </div>
       
              
             </div>


       
             {/* Row 5 : Additional Notes */}
             <div style={{ marginBottom: "25px" }}>
               <label style={{ fontSize: "20px", fontWeight: 500 }}>Additional Notes</label>
               <textarea
                 placeholder="Any additional instructions..."
                 name="notes"
                 rows={5}
                  value={formData.notes}
         onChange={handleChange}
                 style={{
                   ...inputStyle,
                   height: "140px",
                   resize: "vertical",
                 }}
               ></textarea>
             </div>
       
             {/* Submit Button */}
             <button
               style={{
                 marginTop: "15px",
                 background: "#2563eb",
                 color: "white",
                 padding: "16px 32px",
                 fontSize: "22px",
                 fontWeight: "600",
                 borderRadius: "10px",
                 border: "none",
                 cursor: "pointer",
               }}
               onClick={() => handlerequest()}
             >
               Submit Request
             </button>
           </div>
           </div>
   </>
  );
}