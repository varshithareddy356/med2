
import { Routing } from "./Routing";

import "./Hotelsdetails.css"
import { FaMapMarkerAlt } from "react-icons/fa";

export function Hoteldetailed(){



    const Hotelsdata = 
    [
      {
          "id": 1,
          "slcp_ClinicianType": "Nurses",
          "slcp_Speciality": "Cardiology",
          "slcp_PatientLoad": "15",
          "slcp_FacilityType": null,
          "slcp_Remote": null,
          "slcp_AgreementTerms": null,
          "slcp_Address": {
              "id": 1,
              "slcp_Street": "AN nagar",
              "slcp_City": "Hyderabad",
              "slcp_Zip": "500003",
              "slcp_State": "TS",
              "slcp_LandMark": null
          },
          "slcp_Duration": null,
          "slcp_Shifts": {
              "id": 1,
              "slcp_Shift": "9-5",
              "slcp_Hours": "8",
              "slcp_DaysofWeek": "Monday"
          },
          "slcp_ScopeofPractice": [],
          "slcp_Qualification": [],
          "slcp_Experience": [
              {
                  "id": 1,
                  "slcp_Years": "5",
                  "slcp_Months": "2"
              }
          ],
          "slcp_SupportStaff": [],
          "slcp_Compensation": null,
          "slcp_Credentialing": [],
          "slcp_AdditionalRequirement": []
      }
  ]
    return(
        <>
        
        <Routing style={{height:"40px"}}/>
      <hr/>
        <br/>
        <div style={{margin:"10px"}} >
              
                
        
     
      <select   style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"220px",height:"40px"}}>
        <option>Select a Facility Type</option>
        <option>Physicians</option>
        <option>Nurses</option>
        <option>Physician Assistants (PAs)</option>
        <option>Dentists</option>
        <option>Pharmacists</option>
        <option>Psychologists</option>
        <option>Occupational Therapists</option>
        <option>Physical Therapists</option>
        <option>Speech-Language Pathologists</option>
        <option>Optometrists</option>
        <option>Ophthalmologists</option>
        <option>Chiropractors</option>
        <option>Podiatrists</option>
      </select>

             

<select    style={{border:"1px solid grey", textAlign:"left", padding:"5px",width:"220px",height:"40px",margin:"10px"}} >
  <option>Select a Speciality</option>
  <option>Anesthesiology</option>
  <option>Cardiology</option>
  <option>Dermatology</option>
  <option>Emergency Medicine</option>
  <option>Endocrinology</option>
  <option>Gastroenterology</option>
  <option>General Surgery</option>
  <option>Hematology</option>
  <option>Infectious Disease</option>
  <option>Internal Medicine</option>
  <option>Nephrology</option>
  <option>Neurology</option>
  <option>Obstetrics and Gynecology</option>
<option>Ophthalmology</option>
<option>Orthopedic Surgery</option>
<option>Otolaryngology (ENT)</option>
<option>Pediatrics</option>
<option>Plastic Surgery</option>
<option>Psychiatry</option>
<option>Pulmonology</option>
<option>Radiology</option>
<option>Rheumatology</option>
<option>Urology</option>
<option>Vascular Surgery</option>
<option>Allergy and Immunology</option>
<option>Physical Medicine and Rehabilitation</option>
<option>Critical Care Medicine</option>
<option>Pain Medicine</option>
<option>Sports Medicine</option>
<option>Nuclear Medicine</option>
<option>Medical Genetics</option>
<option>Pathology</option>
<option>Forensic Medicine</option>
<option>Neonatology</option>
<option>Geriatrics</option>
<option>Infectious Disease</option>
<option>Medical Oncology</option>
<option>Pediatric Surgery</option>
<option>Sleep Medicine</option>
<option>Transplant Surgery</option>
<option>Nephrology</option>
<option>Colorectal Surgery</option>
<option>Gynecologic Oncology</option>
<option>Interventional Radiology</option>
<option>Reproductive Endocrinology and Infertility</option>
<option>Palliative Medicine</option>
<option>Clinical Neurophysiology</option>
<option>Hospice and Palliative Medicine</option>
<option>Pediatric Hematology-Oncology</option>
<option>Addiction Medicine</option>
</select>
<input type="text" placeholder="enter your city" style={{width:"220px",height:"33px",textIndent:"40px",fontSize:"17px"}}/>
               <FaMapMarkerAlt style={{fontSize:"25px",position:"absolute",right:"710px",bottom:"455px"}}/>
             
               

                <input type="date" style={{width:"140px", height:"35px", fontSize: "17px",margin:"10px"}}/>
                <input type="date" style={{width:"140px", height:"35px", fontSize: "17px",margin:"10px"}}/>
 
<button style={{width:"150px",height:"41px",backgroundColor:"red",color:"white",margin:"10px",border:"none",borderRadius:"25px"}}>Search</button> 

              </div>
              <hr/>
              
            
              <div className='hotels-display-container' >
  <div className='hotels-container' style={{ width: '70%', marginRight: '20px' }}>
    {
      Hotelsdata.map((item, index) => (
        <div className="hotels-info" key={index} style={{ borderBottom: '1px solid #ccc', marginBottom: '20px', paddingBottom: '20px' }}>
          <div>
            <img src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bnVyc2V8ZW58MHx8MHx8fDA%3D" className="image" alt="photo"  />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p>ClinicianType: <b style={{ color: 'darkblue' }}>{item.slcp_ClinicianType}</b></p>
            <p><b style={{ color: 'green' }}>{item.slcp_Speciality}</b></p>
            <p>Patientload: <b style={{ color: 'purple' }}>{item.slcp_PatientLoad}</b></p>
            <p>
              Address: {item.slcp_Address && (
                <>
                  <span style={{ color: 'brown' }}>{item.slcp_Address.slcp_Street}</span> <span style={{ marginLeft: "8px", color: 'gray' }}>{item.slcp_Address.slcp_City}, {item.slcp_Address.slcp_State} {item.slcp_Address.slcp_Zip}</span>
                </>
              )}
            </p>
            <p>
              Shifts: {item.slcp_Shifts && (
                <span style={{ margin: "5px", color: 'green' }}>Timings: {item.slcp_Shifts.slcp_Shift}</span>
              )}
              <span style={{ marginLeft: "45px", color: 'blue' }}>Hours: {item.slcp_Shifts && item.slcp_Shifts.slcp_Hours}</span>
              <span style={{ marginLeft: "45px", color: 'gray' }}>Day: {item.slcp_Shifts && item.slcp_Shifts.slcp_DaysofWeek}</span>
            </p>
            <p>
              Experience: {item.slcp_Experience && (
                <span style={{ color: 'darkgreen' }}> {item.slcp_Experience[0].slcp_Years} years {item.slcp_Experience[0].slcp_Months} months</span>
              )}
            </p>
          </div>
        </div>
      ))
    }
  </div>
  <div className='map'>
    <img src="https://www.wired.com/wp-content/uploads/2016/11/GoogleMapTA.jpg" alt='not' height="600px" style={{ width: '100%' }} />
  </div>
</div>

</>
    )
}