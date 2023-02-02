import React, { createContext, useEffect, useState } from 'react';


export const  AuthContext=createContext()

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(false)
	const [pageLoad, setPageLoad] = useState(true);


	if (user) {
		localStorage.setItem("user",JSON.stringify(user))
	}
	

	useEffect(() => {
		if (localStorage.getItem("user")) {
			let data = JSON.parse(localStorage.getItem("user"));
			setUser(data)
		}
	},[])
	
	const userInfo = { user, setUser, pageLoad, setPageLoad };
	return (
		<AuthContext.Provider value={userInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;