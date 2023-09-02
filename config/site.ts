export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Ranking Board",
	description: "Team dashing board.",
	navItems: [
		{
			label: "Dashboard",
			href: "/",
		},
    {
      label: "Ranking",
      href: "/ranking",
    },
	],
	navMenuItems: [
		{
			label: "Dashboard",
			href: "/",
		},
    {
      label: "Ranking",
      href: "/ranking",
    },
	],
	links: {
		github: "https://github.com/Louis-7/ranking-board",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
