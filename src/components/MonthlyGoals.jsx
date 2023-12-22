import React from "react";
import BuyerDoughnutChart from "./BuyerDoughnutChart";
import GoalsTable from "./GoalsTable";
import SetGoal from "./SetGoal";
import AnnualExpenditureChart from "./AnnualExpenditureChart";

export default function MonthlyGoals() {
    const [open, setOpen] = React.useState(false);

const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

    return (
        <div>
            <h1>Monthly Goals</h1>
                <button className="set-target">SET TARGET</button>
                <div className="goal-container">   
                    <div className="goal-sub-container">
                        <label className="goal-title">AMOUNT</label>
                        <input type="number" disabled="false" className="goal" />
                    </div>
                    <div className="goal-sub-container">
                        <label className="goal-title">MONTH</label>
                        <select className="goal">
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>November</option>
                            <option>December</option>
                        </select>
                    </div>
                </div>
                <div className="amount-spent-container">
                    <div className="chart-labels">
                        <p className="goal-title">AMOUNT SPENT</p>
                        <p className="goal">50,000</p>
                        <div className="legend"><div className="label"></div>Shopping</div>
                        <div className="legend"><div className="label expenses"></div>Expenses</div>
                    </div>
                    <div className="charts">
                        <BuyerDoughnutChart />
                    </div>
                </div>
                <div className="goals-table">
                    <GoalsTable />
                    <button onClick={handleOpen}>Set Goal</button>
                    <SetGoal open={open} onClose={handleClose}/>
                </div>
                <div className="expenditure-chart"> 
                    <AnnualExpenditureChart />
                </div>
        </div>
    )
}