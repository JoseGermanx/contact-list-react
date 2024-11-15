import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import AddContact from "./views/AddContact";
import UpdateContact from "./views/UpdateContact";
import Home from "./views/Home";


const Layout = () => {

	return (
		<div>
			<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/add" element={<AddContact />} />
						<Route path="/update/:id" element={<UpdateContact />} />
						<Route path="*" element={<h1>404 Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default Layout;