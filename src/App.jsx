import { useState } from "react";
import CalulatorBMI from "./components/calculator";
import MyNavbar from "./components/Navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import LoginForm from "./components/loginform";
function App() {
  const [obtMarks, setObtMarks] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const myName = "Ali Haider";
  const companyInfo = {
    name: "P2PClouds",
    address: "Arfa Tower Lahore",
    contact: "info@p2pclouds.net",
  };
  const handleObtMarksChange = (e) => {
    setObtMarks(e.target.value);
  };
  const handleTotalMarksChange = (e) => {
    setTotalMarks(e.target.value);
  };
  const calculatePercentage = (e) => {
    e.preventDefault();
    const percentage = (obtMarks / totalMarks) * 100;
    setPercentage(percentage);
  };




  return (


    <div className="colorful-background">
      <Header myName={myName} />
      <CalulatorBMI />
      <MyNavbar />
      <form onSubmit={calculatePercentage}>
        <input
          type="number"
          name="obtMarks"
          id="obtMarks"
          onChange={handleObtMarksChange}
          placeholder="Enter obt marks"
        />
        <input
          type="number"
          name="totalMarks"
          id="totalMarks"
          onChange={handleTotalMarksChange}
          placeholder="Enter total marks"
        />
        <button type="submit">Submit</button>
        <div>Your percentage is {percentage}%</div>

      </form>
      <Footer companyInfo={companyInfo} />
      <LoginForm />





    </div>

  );
}

export default App;