import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Layout from './components/shared/Layout'
import Orders from './pages/Orders'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'

function App() {
    const [orders, setOrders] = useState([
        { id: 1, name: 'Order 1', completed: false, date: '2024-03-15', customer: 'John Doe', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, name: 'Order 2', completed: false, date: '2024-03-14', customer: 'Jane Smith', details: 'Nulla euismod ultrices enim.' },
        { id: 3, name: 'Order 3', completed: false, date: '2024-03-13', customer: 'Bob Johnson', details: 'Praesent lacinia tortor eget mauris varius.' }
      ]);
      const totalProducts = orders.length;

      // Calculate total number of completed orders
      const totalCompletedOrders = orders.filter(order => order.completed).length;
    return (
        <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<Products />} />
                <Route path="/orders" element={<Orders/>} />
                
            </Route>
           
        </Routes>
    </Router>
    )
}

export default App
