// /data/projects.ts
export type Project = {
	slug: string
	title: string
	summary: string
	tags: string[]
	thumbnail?: string
	links?: { label: string; url: string }[]
	subworks?: { title: string; img?: string; note?: string }[]
}

export const projects: Project[] = [
	{
		slug: "tokyo-metro",
		title: "TokyoMetro UI（Vue/Nuxt移行）",
		summary: "旧5ページを1ページに統合。Nuxt 3 + Tailwindで再構成。",
		tags: ["Nuxt3", "Tailwind", "Vue"],
		// 画像がまだ無ければこの行は消してOK（自動でNo image表示）
		thumbnail: "/images/header_logo.png",
		subworks: [
			{ title: "路線図カード" },
			{ title: "駅詳細UI" },
			{ title: "乗換表示" },
			{ title: "アクセシビリティ" },
			{ title: "レスポンシブ最適化" },
		],
		links: [
			// { label: "GitHub", url: "https://..." },
			// { label: "Live Demo", url: "https://..." }
		],
	},
	{
		slug: "lofi-music-spa",
		title: "Lo-Fi Music SPA",
		summary: "トラック一覧→詳細/再生のミニアプリ。",
		tags: ["Nuxt3", "Audio", "SPA"],
		thumbnail: "/images/HERO.jpg",
	},
	{
		slug: "company-landing",
		title: "LP/コーポレートUI",
		summary: "Tailwindで素早く構築したLPテンプレ。",
		tags: ["Tailwind", "UI"],
		thumbnail: "/images/header_logo.png",
	},
	{
		slug: "tokyo-metro",
		title: "TokyoMetro UI（Vue/Nuxt移行）",
		summary: "旧5ページを1ページに統合。Nuxt 3 + Tailwindで再構成。",
		tags: ["Nuxt3", "Tailwind", "Vue"],
		// 画像がまだ無ければこの行は消してOK（自動でNo image表示）
		thumbnail: "/images/header_logo.png",
		subworks: [
			{ title: "路線図カード" },
			{ title: "駅詳細UI" },
			{ title: "乗換表示" },
			{ title: "アクセシビリティ" },
			{ title: "レスポンシブ最適化" },
		],
		links: [
			// { label: "GitHub", url: "https://..." },
			// { label: "Live Demo", url: "https://..." }
		],
	},
	{
		slug: "lofi-music-spa",
		title: "Lo-Fi Music SPA",
		summary: "トラック一覧→詳細/再生のミニアプリ。",
		tags: ["Nuxt3", "Audio", "SPA"],
		thumbnail: "/images/HERO.jpg",
	},
	{
		slug: "company-landing",
		title: "LP/コーポレートUI",
		summary: "Tailwindで素早く構築したLPテンプレ。",
		tags: ["Tailwind", "UI"],
		thumbnail: "/images/header_logo.png",
	},
]
