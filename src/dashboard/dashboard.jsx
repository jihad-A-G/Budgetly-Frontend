import TransactionCard from "./transactionCard";
import TransactionChart from "./transactionChart.jsx";
import { useLoaderData } from "react-router-dom";
import JincomeLogo from '../assets/JincomeLogo.svg';
import expenseLogo from '../assets/expenseLogo.svg'; 
import balanceLogo from '../assets/balanceLogo.svg';
import socket from "../../socket-io.js";
const Dashboard = () =>{
    const data = useLoaderData();

socket.on('confirmUser',(data)=>{
    console.log(data);
   })
    return(
        <>

        <main className="w-full h-full flex flex-wrap px-8 py-10 gap-8">
    <TransactionCard name={'Incomes'} amount={data.income_amount} logo={JincomeLogo}/>
    <TransactionCard name={'Expenses'} amount={data.expense_amount} logo={expenseLogo}/>
    <TransactionCard name={'Balance'} amount={data.balance} logo={balanceLogo}/>
    <TransactionChart balance={data.balance} incomes={data.incomes} expenses={data.expenses}/>
    
</main>
</>
    );
}

export default Dashboard;