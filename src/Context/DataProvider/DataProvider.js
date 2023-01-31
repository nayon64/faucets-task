import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const DataContext=createContext()

const DataProvider = ({ children }) => {
	const [currencies, setCurrencies] = useState([]);
	const [currency, setCurrency] = useState({});
	
	useEffect(() => {
		axios.get("http://localhost:5000/currency").then(res => {
			const data = res?.data;
			setCurrency(data[0]);
			setCurrencies(data);
		})
	}, [])

	const value = { currencies,currency, setCurrency };
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;