import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: "/",
				element:<Home/>
			},
			{
				path: "/home",
				element:<Home/>
			},
			{
				path: "/login",
				element:<LogIn/>
			},
			{
				path: "/register",
				element:<Register/>
			},
		]
		
	}
])

export default routes;