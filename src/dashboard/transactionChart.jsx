import { useState } from "react";
import { Line } from "react-chartjs-2";
const TransactionChart = () =>{
  const [key,setKey] =useState(null);
  setKey('jihad');
    return(
      <>
      <div key={key} className="w-[740px] h-[440px] bg-[#1b2028] p-5 rounded-lg text-white leading-3">
        <Line data={{
          // x-axis label values
          labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
          datasets: [
            {
              label: "# of Calories Lost",
              // y-axis data plotting values
              data: [200, 300, 1300, 520, 2000, 350,150],
              fill: false,
              borderWidth:4,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor:'green',
              responsive:true
            },
          ],
        }}/>
      </div>
      </>  
    );
}

export default TransactionChart;