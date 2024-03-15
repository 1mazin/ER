import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Orders: 2400
	},
	{
		name: 'Feb',
		Orders: 3000,
	
	},
	{
		name: 'Mar',
	    Orders: 2400,
	},
	{
		name: 'Apr',
		Orders: 5000
	},
	{
		name: 'May',
		Orders: 9000,
	},
	{
		name: 'Jun',
		Orders: 2390,
		
	},
	{
		name: 'July',
		Orders: 4300
	},
	{
		name: 'Aug',
		Orders: 2000,
	},
	{
		name: 'Sep',
		Orders: 700
	},
	{
		name: 'Oct',
		Orders: 9000
	},
	{
		name: 'Nov',
		Orders: 7390,
	},
	{
		name: 'Dec',
		Orders:9040
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Transactions</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Orders" fill="#0ea5e9" />
						
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
