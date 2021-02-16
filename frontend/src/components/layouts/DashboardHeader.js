import React, { useContext } from 'react';
import UserContext from './../../context/UserContext';

function DashboardHeader() {

	const user = useContext(UserContext);
	console.log(user.firstName)

	return (
		<>
		<div class="justify-content-between card bg-info text-center shadow">
			<div class="py-5">
				<h1 class="display-4 text-light">Hello, {user.firstName}!</h1>
				<p class="lead text-light">This is your Dashboard</p>
			</div>
		</div>
		</>
	);
}

export default DashboardHeader;