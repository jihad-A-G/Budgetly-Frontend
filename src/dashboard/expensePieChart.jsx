import { Pie } from "react-chartjs-2";
import "chart.js/auto";
const ExpensePieChart = ({ expenses }) => {
  const exp =  expenses.reduce((acc, expense) => {
 if (!acc[expense.Category.category_name]) {
   acc[expense.Category.category_name] = 0;
 }
 acc[expense.Category.category_name] += expense.expense_amount;
 return acc;
}, {});
 
  const data = {
   labels: Object.keys(exp),
  datasets: [
    {
      label: 'expenses amount',
      data: Object.values(exp),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }
  ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          color: "white",
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          color: "white",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <div className="w-[590px] row-span-2 h-fit rounded-lg bg-[#1b2028] p-8 text-white leading-3">
        <div className="flex items-center justify-between mb-10 ">
          <h1 className="text-xl font-semibold">Pie Chart</h1>
        </div>
        <Pie data={data}></Pie>
      </div>
    </>
  );
};

export default ExpensePieChart;
