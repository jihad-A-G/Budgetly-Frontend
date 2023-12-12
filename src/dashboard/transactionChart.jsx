import {Line} from 'react-chartjs-2';
import 'chart.js/auto';
const TransactionChart = ({balance,incomes,expenses}) =>{
  const incomeData = incomes.map(e=>{
    return e.income_amount;
  })
  const expenseData = expenses.map(e=>{
    return e.expense_amount;
  })
  const xAxisData= [...incomes.map(e=>new Date(e.date).getDay()),...expenses.map(e=>new Date(e.date).getDay())].sort();
    const data={labels: xAxisData,
        datasets: [{
          data: incomeData,
          fill: true ,
          borderColor: '#2563eb',
          tension: 0.1
        },
        {
        data:expenseData,
        fill: true ,
        borderColor: '#dc2626',
        tension: 0.1
      }]};
    const options={
        scales: {
            x: {
              grid: {
                display: false,
              },
              ticks:{
                display:true,
                color:'white',
              }
            },
            y: {
              grid: {
                display: false,
              },
              ticks:{
                display:true,
                color:'white',
              }
            }
          },
          plugins:{
            legend:{
              display:false
            }

          },
    };
    return (
    <>
    <div className='w-auto col-span-3 rounded-lg bg-[#1b2028] p-8 text-white leading-3'>
        <div className="flex items-center justify-between mb-10 ">
            <h1 className='text-xl font-semibold'>Chart</h1>
            <div className='text-sm font-normal flex items-start gap-5'>
                <p className=' flex items-center relative'><span className=' before:absolute before:w-3 before:h-3 before:bg-blue-600 before:rounded-full before:top-1 before:left-0 ml-6'>Incomes</span></p>
                <p className=' flex items-center relative'><span className=' before:absolute before:w-3 before:h-3 before:bg-red-600 before:rounded-full before:top-1 before:left-0 ml-6'>Expenses</span></p>
            </div>
        </div>
        <div className="flex items-center justify-between mb-9">
            <div>
              <p className='text-sm font-normal'>Balance</p>
              <h1 className='text-lg font-semibold'>{`$${balance}`}</h1>
            </div>
            <div className="text-xs flex items-center gap-[10px]">
            <div className="flex items-center justify-center w-10 h-6 rounded-full border-1 border-[#E4E4E4]"><span>1h</span></div>
            <div className="flex items-center justify-center w-10 h-6 rounded-full border-1 border-[#E4E4E4]"><span>3h</span></div>
            <div className="flex items-center justify-center w-10 h-6 rounded-full border-1 border-[#E4E4E4]"><span>1d</span></div>
            <div className="flex items-center justify-center w-10 h-6 rounded-full border-1 border-[#E4E4E4]"><span>1w</span></div>
                <div className="flex items-center justify-center w-10 h-6 rounded-full border-1 border-[#E4E4E4]"><span>1m</span></div>
            </div>
        </div>
        <Line data={data} options={options}>

        </Line>

    </div>
    
    </>
    )
};

export default TransactionChart;