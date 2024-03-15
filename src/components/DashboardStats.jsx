import React from 'react'
import {  IoPeople, IoCart } from 'react-icons/io5'
import {productsData} from '../data/ProductItem'
import { orders} from '../data/ordersItem'
export default function DashboardStatsGrid() {
	let noOfProducts = productsData.length
	let noOfOrders = orders.length
	return (
		<div className="flex gap-4">
		
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Products</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{noOfProducts}</strong>
						
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoCart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Orders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">{noOfOrders}</strong>
					
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
