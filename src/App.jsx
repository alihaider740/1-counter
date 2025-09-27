import { useState } from "react";
function App() {
  const [obtMarks, setObtMarks] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);

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
    <div>
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
    </div>
  );
}

export default App;