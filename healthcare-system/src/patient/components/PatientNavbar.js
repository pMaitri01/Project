// import React from "react";
// import {
//   FaTachometerAlt,
//   FaUserMd,
//   FaCalendarCheck,
//   FaHistory,
//   FaFileMedical,
//   FaBell,
//   FaUser
// } from "react-icons/fa";
// import userImg from "../images/Logo-1.png"; // ✅ correct import

// export default function PatientNavbar() {
//   const styles = {
//     sidebar: {
//       width: "250px",
//       height: "100vh",
//       background: "#0AA5A5",
//       color: "#fff",
//       padding: "20px",
//       position: "fixed"
//     },
//     logo: {
//       textAlign: "center",
//       marginBottom: "30px"
//     },
//     menuItem: {
//       padding: "12px 15px",
//       margin: "10px 0",
//       display: "flex",
//       alignItems: "center",
//       gap: "10px",
//       borderRadius: "8px",
//       cursor: "pointer"
//     },
//     active: {
//       background: "#F4F0E4",
//       color:"#0AA5A5"
//     },
//     img: {
//       width: "120px",
//       height: "127px",
//       borderRadius: "10%",
//       display: "block",
//       margin: "0 auto 20px",
      
//     }
//   };

//   return (
//     <div style={styles.sidebar}>
//       {/* User Image */}
//       <img src={userImg} alt="profile" style={styles.img} />

//       <div style={{ ...styles.menuItem, ...styles.active }}>
//         <FaTachometerAlt /> Dashboard
//       </div>
//       <div style={styles.menuItem}>
//         <FaUserMd /> Doctor List
//       </div>
//       <div style={styles.menuItem}>
//         <FaCalendarCheck /> Book Appointment
//       </div>
//       <div style={styles.menuItem}>
//         <FaHistory /> Appointment History
//       </div>
//       <div style={styles.menuItem}>
//         <FaFileMedical /> Medical Records
//       </div>
//       <div style={styles.menuItem}>
//         <FaFileMedical /> Prescriptions
//       </div>
//       {/* <div style={styles.menuItem}>
//         <FaBell /> Notifications
//       </div> */}
//       <div style={styles.menuItem}>
//         <FaUser /> Profile
//       </div>
//     </div>
//   );
// }

import React from "react";
import {
  FaTachometerAlt,
  FaUserMd,
  FaCalendarCheck,
  FaHistory,
  FaFileMedical,
  FaUser
} from "react-icons/fa";
import userImg from "../images/Logo-1.png";

export default function PatientNavbar() {
  const styles = {
    sidebar: {
      width: "250px",
      height: "100vh",
      background: "#0AA5A5",
      color: "#fff",
      padding: "20px",
      position: "fixed"
    },
    menuItem: {
      padding: "12px 15px",
      margin: "10px 0",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      borderRadius: "8px",
      cursor: "pointer"
    },
    active: {
      background: "#F4F0E4",
      color: "#0AA5A5"
    },
    img: {
      width: "120px",
      height: "127px",
      borderRadius: "10%",
      display: "block",
      margin: "0 auto 20px"
    }
  };

  return React.createElement(
    "div",
    { style: styles.sidebar },
    React.createElement("img", {
      src: userImg,
      alt: "profile",
      style: styles.img
    }),

    React.createElement(
      "div",
      { style: { ...styles.menuItem, ...styles.active } },
      React.createElement(FaTachometerAlt),
      " Dashboard"
    ),

    React.createElement(
      "div",
      { style: styles.menuItem },
      React.createElement(FaUserMd),
      " Doctor List"
    ),

    React.createElement(
      "div",
      { style: styles.menuItem },
      React.createElement(FaCalendarCheck),
      " Book Appointment"
    ),

    React.createElement(
      "div",
      { style: styles.menuItem },
      React.createElement(FaHistory),
      " Appointment History"
    ),

    React.createElement(
      "div",
      { style: styles.menuItem },
      React.createElement(FaFileMedical),
      " Medical Records"
    ),

    React.createElement(
      "div",
      { style: styles.menuItem },
      React.createElement(FaFileMedical),
      " Prescriptions"
    ),

    React.createElement(
      "div",
      { style: styles.menuItem },
      React.createElement(FaUser),
      " Profile"
    )
  );
}