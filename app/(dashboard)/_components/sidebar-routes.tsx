"use client";

import {Compass, Layout} from "lucide-react";

const guestRoutes = [
	{
		icon: Layout,
		label: "Dashboard",
		path: "/",
	},
	{
		icon: Compass,
		label: "Browse",
		path: "/search",
	},
];
const SidebarRoutes = () => {
	const routes = guestRoutes;
	return <div className="flex flex-col w-full">{}</div>;
};

export default SidebarRoutes;
