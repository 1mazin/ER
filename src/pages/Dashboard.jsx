import React from 'react'
import DashboardStatsGrid from '../components/DashboardStats'
import TransactionChart from '../components/TransactionChart'
import RecentOrders from '../components/RecentOrders'
import BuyerProfilePieChart from '../components/PiechartBuyer'


export default function Dashboard() {
	return (
<div className="flex flex-col gap-4">
    <DashboardStatsGrid />
    <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <BuyerProfilePieChart />
    </div>

</div>

	)
}
