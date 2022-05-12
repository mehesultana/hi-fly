import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { Header } from '../../components/Header/Header';
import './List.css';

export const List = () => {
	return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="lsTitle">Search</h1>
						<div className="lsItem">
							<label>Destination</label>
							<input type="text" />
						</div>
						<div className="lsItem">
							<label>Check-in Date</label>
						</div>
					</div>
					<div className="listResult"></div>
				</div>
			</div>
		</div>
	);
};
