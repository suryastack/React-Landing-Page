import React from "react";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Footer from "./components/footer/Footer";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww",
      intro:
        "The banking website is fast, secure, and easy to navigate. Transferring money and checking account details is completely hassle-free.",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwcHJvZmVzc2lvbmFsJTIwc2luZ2xlJTIwaW1hZ2UlMjBwb3RyYWl0fGVufDB8fDB8fHww",
      intro:
        "Safe, reliable, and incredibly easy to use. Managing my finances online has never been this convenient.",
      tag: "Comfortable",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "Excellent user experience with a clean interface. Bill payments, account management, and transaction history are smooth and reliable every time.",
      tag: "Convenient",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661515449711-ace459054f78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:
        "I love the simple design and quick login process. Customer support is responsive, making online banking convenient and stress-free.",
      tag: "Reliable",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661695427582-c234b651e192?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      intro:
        "Outstanding customer support and a clean interface make this my favorite online banking platform.",
      tag: "Reassured",
    },
    {
      img: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      intro:
        "The website is fast and intuitive. Every transaction is completed smoothly without any technical issues.",
      tag: "Excellent",
    },
  ];
  const footerLinks = {
  Products: [
    "Savings Account",
    "Current Account",
    "Fixed Deposits",
    "Loans",
    "Credit Cards",
  ],
  Company: [
    "About Us",
    "Careers",
    "News & Media",
    "Investor Relations",
    "Contact Us",
  ],
  Support: [
    "Help Center",
    "FAQs",
    "Security",
    "Terms & Conditions",
    "Privacy Policy",
  ],
  };
  
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
      <Section3 />
      <Footer footerLinks={footerLinks}/>
    </div>
  );
};

export default App;
