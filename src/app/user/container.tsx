"use client";

import NavBar from "./navbar";
import { useState, useEffect } from "react";
import { Sidebar } from "./sidebar";
import BackgroundHeader from "./welcome/background/background-header";
import SortContainer from "./welcome/sort/sort-container";
import AboutUs from "./welcome/about-us";
import HolmesStatistics from "./welcome/statistics";
import {
	holmesStatisticsStructure,
	specialOfferPropertyDetails,
} from "@/app/home.dto";
import SpecialOffer from "./welcome/special-offer";
import FeaturedListings from "./welcome/featured-listings";
import Testimonials from "./welcome/testimonials/testimonials";
import NewsAndBlogs from "./welcome/news-feed/news";
import Footer from "./welcome/footer/footer";
import MobileFilter from "./mobile-filter";
import GuestNavBar from "./guest/guest-navbar";
import { GuestSidebar } from "./guest/guest-sidebar";
import { isSignedIn } from "@/utils/auth";



const Container = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [showMobileFilters, setShowMobileFilters] = useState(false);
	const [guestActiveSection, setGuestActiveSection] = useState("home");
	const [activeSection, setActiveSection] = useState("home");

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const toggleFilter = () => {
		setShowMobileFilters(!showMobileFilters);
	};

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		// Cleanup when component is unmounted
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<section className="flex-1 h-screen overflow-y-auto">
			<div className="sticky top-0 z-[1000]">
				{isSignedIn ? (
					<NavBar
						
						toggleSidebar={toggleSidebar}
				
					/>
				) : (
					<GuestNavBar
						setActiveSection={setGuestActiveSection}
						toggleSidebar={toggleSidebar}
						activeSection={guestActiveSection}
					/>
				)}
			</div>
			<main className="relative">
				<div className="flex ">
					<MobileFilter show={showMobileFilters} remove={toggleFilter} />
					{isSignedIn ? (
						<Sidebar
							openMenu={isOpen}
							setOpenMenu={setIsOpen}
							activeSection={activeSection}
							setActiveSection={setActiveSection}
						/>
					) : (
						<GuestSidebar
							guestActiveSection={guestActiveSection}
							setGuestActiveSection={setGuestActiveSection}
							openMenu={isOpen}
							setOpenMenu={setIsOpen}
						/>
					)}

					<div className="flex-1 ">
						<BackgroundHeader toggleFilter={toggleFilter} />
						<div className=" DesktopScreen:px-10 MobileScreen:mt-1">
							<SortContainer />
						</div>
					</div>
				</div>
			</main>
			<AboutUs />
			<HolmesStatistics stats={holmesStatisticsStructure} />
			<SpecialOffer propertyDetails={specialOfferPropertyDetails} />
			<FeaturedListings />
			<Testimonials />
			<NewsAndBlogs />
			<Footer />
		</section>
	);
};

export default Container;

