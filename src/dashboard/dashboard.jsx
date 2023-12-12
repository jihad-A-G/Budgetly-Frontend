import TransactionCard from "./transactionCard";
import TransactionChart from "./transactionChart.jsx";
import { useLoaderData } from "react-router-dom";
import JincomeLogo from '../assets/JincomeLogo.svg';
import expenseLogo from '../assets/expenseLogo.svg'; 
import balanceLogo from '../assets/balanceLogo.svg';
import socket from "../../socket-io.js";
import ExpensePieChart from "./expensePieChart.jsx";
const Dashboard = () =>{
    const data = useLoaderData();
    return(
        <>

        <main className="w-full h-full grid grid-cols-dashboard px-8 py-10 gap-8 overflow-auto">
    <TransactionCard name={'Incomes'} amount={data.income_amount} logo={JincomeLogo}/>
    <TransactionCard name={'Expenses'} amount={data.expense_amount} logo={expenseLogo}/>
    <TransactionCard name={'Balance'} amount={data.balance} logo={balanceLogo}/>
    <ExpensePieChart expenses={data.expenses}/>
    <TransactionChart balance={data.balance} incomes={data.incomes} expenses={data.expenses}/>
    
</main>
</>
    );
}

export default Dashboard;