import { faBed, faCalendarDays, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

export const Header = () => {
	return (
		<div className="header">
			<div className="headerContainer">
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faBed} />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxis</span>
					</div>
				</div>
				<h1 className="headerTitle"> A life time of discounts? It's Genius</h1>
				<p className="headerDesc">Get rewarded for your travels...... </p>
				<button className="headerBtn">Sign in / Register</button>
				<div className="headerSearch">
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
						<span className="headerSearchText">date to date</span>
					</div>
				</div>
				<div className="headerSearch">
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faBed} className="headerIcon" />
						<span className="headerSearchText">2 adults 2 children 1 room</span>
					</div>
				</div>
			</div>
		</div>
	);
};
