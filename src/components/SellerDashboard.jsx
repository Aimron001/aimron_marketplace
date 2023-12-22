import React from 'react';
import DashboardSalesStats from './DashboardSalesStats'
import DashboardOrdersStats from './DashboardOrdersStats'
import DashboardExpensesStats from './DashboardExpensesStats'
import RecentOrdersTable from './RecentOrdersTable';
import UpdatesCard from './UpdatesCard';

export default function SellerDashboard(){
    return (
        <div className="seller-dashboard-container">
            <div className='dashboard-quick-stats'>
                <DashboardSalesStats />
                <DashboardOrdersStats />
                <DashboardExpensesStats />
            </div>
            <div className='recent-orders'>
                <h1>Recent Orders</h1>
                <RecentOrdersTable />
            </div>
                <h1>Updates</h1>
            <div className='updates'>
                <UpdatesCard />
                <UpdatesCard />
                <UpdatesCard />
            </div>
        </div>
        
    )
}