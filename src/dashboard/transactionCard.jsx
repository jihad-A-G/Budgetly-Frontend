import incomeLogo from '../assets/incomeLogo.svg';
import expenseLogo from '../assets/expenseLogo.svg'; 
import balanceLogo from '../assets/balanceLogo.svg';
import arrow from '../assets/arrow.svg'
import { Link } from 'react-router-dom';
const TransactionCard = () =>{
    return (
        <>
         <div className="w-[258px] h-[178px] p-5 flex flex-col rounded-lg bg-[#1b2028] text-white font-semibold leading-3">
            <div className="flex items-center gap-5 mb-5">
                <div className="rounded-lg w-11 h-11 bg-dashboardLogoBackground flex items-center justify-center"><img src={incomeLogo} alt="incomes"/></div>
                
                <h1 className="text-base ">Incomes</h1>
            </div>
            <h1 className='text-xl mb-4'>$12,039</h1>
            <div className="flex items-center justify-between text-sm font-normal">
            <p className='text-green-500'>+0.25%</p>
            <Link className='text-[#3A6FF8]' to={''}>See transactions <img className='inline' src={arrow} alt="" /></Link>
            </div>
        </div>

        <div className="w-[258px] h-[178px] p-5 flex flex-col rounded-lg bg-[#1b2028] text-white font-semibold leading-3">
            <div className="flex items-center gap-5 mb-5">
                <div className="rounded-lg w-11 h-11 bg-dashboardLogoBackground flex items-center justify-center"><img src={expenseLogo} alt="incomes"/></div>
                
                <h1 className="text-base ">Expenses</h1>
            </div>
            <h1 className='text-xl mb-4'>$10,495</h1>
            <div className="flex items-center justify-between text-sm font-normal">
            <p className='text-green-500'>+0.25%</p>
            <Link className='text-[#3A6FF8]' to={''}>See transactions <img className='inline' src={arrow} alt="" /></Link>
            </div>
        </div>


       <div className="w-[258px] h-[178px] p-5 flex flex-col rounded-lg bg-[#1b2028] text-white font-semibold leading-3">
            <div className="flex items-center gap-5 mb-5">
                <div className="rounded-lg w-11 h-11 bg-dashboardLogoBackground flex items-center justify-center"><img src={balanceLogo} alt="incomes"/></div>
                
                <h1 className="text-base ">Balance</h1>
            </div>
            <h1 className='text-xl mb-4'>$12,039</h1>
            <div className="flex items-center justify-between text-sm font-normal">
            <p className='text-green-500'>+0.25%</p>
            </div>
        </div>
        </>
    );
}

export default TransactionCard;