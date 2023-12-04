import TransactionCard from "./transactionCard";
import TransactionChart from "./transactionChart.jsx";
const Dashboard = () =>{
    return(
        <>
        <main className="w-full h-full flex flex-wrap px-8 py-10 gap-8">
    <TransactionCard/>
    <TransactionChart/>
    
</main></>
    );
}

export default Dashboard;