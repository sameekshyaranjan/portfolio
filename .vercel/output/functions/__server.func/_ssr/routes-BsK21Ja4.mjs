import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BsK21Ja4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var links = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const handler = () => setScrolled(window.scrollY > 20);
		handler();
		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0A0B]/80 backdrop-blur-md border-b border-[#1E1E22]" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto px-6 h-16 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex items-center gap-2 group",
					"aria-label": "Home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-8 h-8 rounded-lg border border-[#2A2A32] grid place-items-center font-display font-bold text-[#6E56CF] group-hover:border-[#6E56CF] transition",
						children: "S"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden md:flex items-center gap-8",
					children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-[#8A8A9A] hover:text-[#F1F1F3] transition-colors",
						children: l.label
					}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "text-sm px-3.5 py-1.5 rounded-md border border-[#2A2A32] text-[#F1F1F3] hover:border-[#6E56CF] hover:text-[#6E56CF] transition",
						children: "Resume ↗"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen((o) => !o),
					className: "md:hidden w-9 h-9 grid place-items-center rounded-md border border-[#2A2A32] text-[#F1F1F3]",
					"aria-label": "Menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block w-4 h-px bg-current relative before:content-[''] before:absolute before:w-4 before:h-px before:bg-current before:-top-1.5 after:content-[''] after:absolute after:w-4 after:h-px after:bg-current after:top-1.5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:hidden border-t border-[#1E1E22] bg-[#0A0A0B]/95 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 py-4 flex flex-col gap-4",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setOpen(false),
					className: "text-sm text-[#8A8A9A] hover:text-[#F1F1F3]",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "text-sm text-[#6E56CF]",
					children: "Resume ↗"
				})]
			})
		})]
	});
}
var personal = {
	name: "Sameekshya Ranjan Sahu",
	firstName: "Sameekshya",
	role: "Full Stack Developer & AI Engineer",
	location: "Bengaluru, India",
	email: "sameekshyaranjan.official@gmail.com",
	github: "https://github.com/sameekshyaranjan",
	linkedin: "https://linkedin.com/in/sameekshyaranjan",
	status: "Available for internships — Summer / Fall 2026"
};
var projects = [
	{
		id: "01",
		name: "UrbanPulse",
		status: "live",
		tagline: "Making cities safer through civic technology.",
		description: [
			"Built a full-stack civic platform for Pondicherry — citizens report hazards, tourists browse live nearby risks, volunteers resolve issues transparently.",
			"Engineered JWT auth with role-based access (Citizen / Volunteer / Admin) and MongoDB geospatial indexing to surface issues within a 10km radius.",
			"Designed a responsive dark UI with Tourist Mode, real-time filtering, grid/list toggle, and ImageKit-powered image uploads."
		],
		tech: [
			"Next.js",
			"Node.js",
			"MongoDB",
			"JWT",
			"ImageKit",
			"Tailwind CSS"
		],
		github: "https://github.com/sameekshyaranjan/urbanpulse",
		live: null,
		domain: "urbanpulse.vercel.app",
		visual: "map"
	},
	{
		id: "02",
		name: "KrishiSetu",
		status: "live",
		tagline: "Connecting farmers and traders through technology.",
		description: [
			"Built a full-stack agricultural marketplace with passwordless OTP login, JWT tokens, and role-based access for Farmers, Traders, and Admins.",
			"Developed RESTful APIs for crop listings, real-time bidding, geospatial queries, and in-app messaging with MongoDB TTL indexes.",
			"Integrated live Mandi price data via Agmarknet API, Redis caching, CRON-based price refresh, and multi-language SMS via Twilio."
		],
		tech: [
			"React.js",
			"Node.js",
			"MongoDB",
			"Redis",
			"Twilio",
			"Leaflet.js"
		],
		github: "https://github.com/sameekshyaranjan/KrishiSetu",
		live: null,
		domain: "krishisetu.vercel.app",
		visual: "marketplace"
	},
	{
		id: "03",
		name: "ReCircuit AI",
		status: "ongoing",
		tagline: "Using AI to reduce electronic waste.",
		description: [
			"Building a GenAI platform that analyzes images of discarded electronics to determine reusability, repairability, and safe recycling protocols using Gemini Vision AI.",
			"Engineered parallel processing — cloud CDN upload and Gemini AI analysis run simultaneously, cutting API latency by ~50%.",
			"Secure backend with JWT auth, centralized error handling, and MongoDB schemas for persisting AI scan histories."
		],
		tech: [
			"Node.js",
			"Gemini Vision AI",
			"MongoDB",
			"REST APIs"
		],
		github: "https://github.com/sameekshyaranjan/recircuitai",
		live: null,
		domain: "recircuit.ai",
		visual: "terminal"
	}
];
var skills = {
	Frontend: [
		"React.js",
		"Next.js",
		"Tailwind CSS"
	],
	Backend: [
		"Node.js",
		"Express.js",
		"REST APIs"
	],
	Database: [
		"MongoDB",
		"Mongoose",
		"Redis"
	],
	"AI & Cloud": [
		"Gemini Vision AI",
		"ImageKit CDN",
		"Twilio"
	],
	Languages: ["JavaScript", "C++"],
	Tools: [
		"Git / GitHub",
		"Postman",
		"VS Code"
	]
};
var community = [
	{
		role: "Core Team Member",
		org: "OS CODE Community",
		desc: "Open source community. Contributing to technical events, community initiatives, and peer learning."
	},
	{
		role: "Member",
		org: "GDSC BIT Bangalore",
		desc: "Google Developer Student Clubs. Workshops, study jams, and developer community events."
	},
	{
		role: "Hackathon Participant",
		org: "Multiple Hackathons",
		desc: "Building under pressure, shipping fast, learning faster."
	}
];
var profile_default = "/assets/profile-Dd3krpE6.jpg";
var fade = (delay = 0) => ({
	initial: {
		opacity: 0,
		y: 10
	},
	animate: {
		opacity: 1,
		y: 0
	},
	transition: {
		duration: .3,
		delay,
		ease: "easeOut"
	}
});
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative flex items-center pt-24 pb-16 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 dot-grid opacity-40 pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 beacon pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative max-w-5xl mx-auto px-6 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "order-2 md:order-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
								...fade(0),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1E1E22] bg-[#111113]/80 backdrop-blur text-xs text-[#8A8A9A]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "relative flex h-2 w-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full rounded-full bg-[#3DD68C] opacity-60 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-[#3DD68C]" })]
									}), personal.status]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
								...fade(.05),
								className: "mt-6 font-display tight text-[2.5rem] sm:text-5xl md:text-[3.5rem] font-bold text-[#F1F1F3] leading-[1.05]",
								children: [
									"Hi, I'm ",
									personal.firstName,
									"."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								...fade(.1),
								className: "mt-4 text-xl text-[#8A8A9A] font-medium",
								children: personal.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
								...fade(.15),
								className: "mt-5 text-base text-[#8A8A9A] max-w-lg leading-relaxed",
								children: "I build full-stack web applications, secure backend systems, and AI-powered products — things that actually work, ship, and scale."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								...fade(.2),
								className: "mt-8 flex flex-wrap items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#work",
										className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-[#6E56CF] hover:bg-[#7C66D9] text-white text-sm font-medium transition shadow-[0_0_24px_rgba(110,86,207,0.35)]",
										children: ["View Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											children: "↓"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-[#2A2A32] hover:border-[#6E56CF] text-[#F1F1F3] text-sm font-medium transition",
										children: ["Resume ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											"aria-hidden": true,
											children: "↗"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1 ml-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLink, {
											href: personal.github,
											label: "GitHub",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GithubIcon, {})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconLink, {
											href: personal.linkedin,
											label: "LinkedIn",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedinIcon, {})
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								...fade(.25),
								className: "mt-10 inline-flex items-center gap-2 text-xs font-mono text-[#4A4A5A]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										"aria-hidden": true,
										children: "📍"
									}),
									" ",
									personal.location
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scale: .96
						},
						animate: {
							opacity: 1,
							scale: 1
						},
						transition: {
							duration: .4,
							delay: .1,
							ease: "easeOut"
						},
						className: "order-1 md:order-2 justify-self-center md:justify-self-end",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-2 rounded-full bg-[#6E56CF]/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-br from-[#6E56CF] via-[#6E56CF]/40 to-transparent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: profile_default,
									alt: personal.name,
									className: "w-full h-full rounded-full object-cover object-center bg-[#111113]"
								})
							})]
						})
					})]
				})
			})
		]
	});
}
function IconLink({ href, label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": label,
		className: "w-9 h-9 grid place-items-center rounded-md text-[#8A8A9A] hover:text-[#F1F1F3] hover:bg-[#111113] border border-transparent hover:border-[#2A2A32] transition",
		children
	});
}
function GithubIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.13c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" })
	});
}
function LinkedinIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.22 8h4.55v14H.22V8Zm7.4 0h4.36v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.48 3.04 5.48 7v7.44h-4.56v-6.6c0-1.57-.03-3.6-2.19-3.6-2.2 0-2.54 1.72-2.54 3.49V22H7.62V8Z" })
	});
}
function SectionLabel({ text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-mono text-xs tracking-[0.2em] text-[#4A4A5A] uppercase mb-4",
		children: text
	});
}
function TechBadge({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-mono text-xs px-2.5 py-1 rounded-md bg-[#15151A] border border-[#262630] text-[#A8A8B8]",
		children: label
	});
}
function StatusDot({ status }) {
	const color = status === "live" ? "#3DD68C" : "#F5A623";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 text-xs font-mono text-[#8A8A9A]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				background: color,
				boxShadow: `0 0 8px ${color}`
			},
			className: "w-1.5 h-1.5 rounded-full"
		}), status.toUpperCase()]
	});
}
function Container({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `max-w-5xl mx-auto px-6 ${className}`,
		children
	});
}
function MockBrowser({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-[#1E1E22] overflow-hidden bg-[#0D0D10] shadow-2xl shadow-black/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 px-4 py-3 border-b border-[#1E1E22] bg-[#0A0A0B]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-[#FF5F57]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2.5 h-2.5 rounded-full bg-[#28CA41]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-4 font-mono text-[11px] text-[#4A4A5A] truncate",
					children: project.domain
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5 h-[260px] relative overflow-hidden",
			children: [
				project.visual === "map" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapVisual, {}),
				project.visual === "marketplace" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketVisual, {}),
				project.visual === "terminal" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalVisual, {})
			]
		})]
	});
}
function MapVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 dot-grid opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-[#6E56CF]/5 via-transparent to-[#3DD68C]/5" }),
			[
				{
					x: "20%",
					y: "30%",
					color: "#FF5F57"
				},
				{
					x: "55%",
					y: "45%",
					color: "#F5A623"
				},
				{
					x: "75%",
					y: "25%",
					color: "#FF5F57"
				},
				{
					x: "35%",
					y: "70%",
					color: "#3DD68C"
				}
			].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute -translate-x-1/2 -translate-y-1/2",
				style: {
					left: p.x,
					top: p.y
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-3 h-3 rounded-full",
					style: {
						background: p.color,
						boxShadow: `0 0 12px ${p.color}`
					}
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 rounded-full animate-ping opacity-60",
					style: { background: p.color }
				})]
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute bottom-4 left-4 right-4 backdrop-blur-md bg-[#111113]/85 border border-[#2A2A32] rounded-lg p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mb-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-[#FF5F57]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[10px] text-[#8A8A9A] uppercase tracking-wider",
							children: "Hazard · 0.8km"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-[#F1F1F3] font-medium",
						children: "Broken streetlight — MG Road"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] text-[#4A4A5A] mt-1 font-mono",
						children: "Reported 12m ago · 3 confirmations"
					})
				]
			})
		]
	});
}
function MarketVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 p-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 gap-3 h-full",
			children: [
				{
					name: "Basmati Rice",
					price: "₹4,200",
					trend: "+2.4%"
				},
				{
					name: "Wheat",
					price: "₹2,150",
					trend: "−0.8%"
				},
				{
					name: "Tomato",
					price: "₹1,800",
					trend: "+5.1%"
				},
				{
					name: "Onion",
					price: "₹2,400",
					trend: "+1.2%"
				}
			].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border border-[#1E1E22] rounded-lg p-3 bg-[#0A0A0B] flex flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] font-mono text-[#4A4A5A] uppercase tracking-wider",
					children: "Per Qtl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-[#F1F1F3] font-medium mt-1",
					children: c.name
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-base font-semibold text-[#F1F1F3]",
						children: c.price
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[10px] font-mono",
						style: { color: c.trend.startsWith("+") ? "#3DD68C" : "#FF5F57" },
						children: c.trend
					})]
				})]
			}, i))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute bottom-3 right-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-3 py-1.5 rounded-md bg-[#6E56CF] text-white text-[11px] font-medium",
				children: "Bid Now →"
			})
		})]
	});
}
function TerminalVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 p-4 font-mono text-[11px] leading-relaxed",
		children: [[
			{
				p: "$",
				t: "recircuit analyze ./capacitor.jpg",
				c: "text-[#F1F1F3]"
			},
			{
				p: ">",
				t: "uploading to CDN... done (220ms)",
				c: "text-[#4A4A5A]"
			},
			{
				p: ">",
				t: "gemini-vision: classifying...",
				c: "text-[#4A4A5A]"
			},
			{
				p: "✓",
				t: "component: aluminum electrolytic cap",
				c: "text-[#3DD68C]"
			},
			{
				p: "✓",
				t: "reusability: 0.72 / repair: feasible",
				c: "text-[#3DD68C]"
			},
			{
				p: "→",
				t: "action: desolder + reuse in audio rigs",
				c: "text-[#6E56CF]"
			}
		].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#4A4A5A] w-3",
				children: l.p
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: l.c,
				children: l.t
			})]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2 mt-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[#4A4A5A] w-3",
				children: "$"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-3.5 bg-[#6E56CF] animate-pulse" })]
		})]
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "pb-24 md:pb-32 pt-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { text: "Selected Work" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display tight text-3xl md:text-4xl font-semibold text-[#F1F1F3]",
				children: "Things I've Built"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-[#8A8A9A] max-w-xl",
				children: "Three projects. Different domains. Same standard of engineering."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 space-y-8",
				children: projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
					project: p,
					index: i
				}, p.id))
			})
		] })
	});
}
function ProjectCard({ project, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
		initial: {
			opacity: 0,
			y: 24
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			delay: index * .08,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className: "group relative rounded-2xl border border-[#1E1E22] bg-[#111113] p-6 md:p-8 hover:border-[#2E2E36] transition-all hover:shadow-[0_0_0_1px_#2E2E36,0_30px_60px_-30px_rgba(0,0,0,0.6)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 md:order-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-[#4A4A5A]",
								children: project.id
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 bg-[#1E1E22]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusDot, { status: project.status })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display tight text-2xl md:text-3xl font-semibold text-[#F1F1F3]",
						children: project.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[#8A8A9A]",
						children: project.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2.5",
						children: project.description.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 text-sm text-[#8A8A9A] leading-relaxed",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#6E56CF] mt-1.5 shrink-0",
								children: "→"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: d })]
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: project.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechBadge, { label: t }, t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.github,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-sm text-[#F1F1F3] hover:text-[#6E56CF] transition inline-flex items-center gap-1.5",
							children: ["GitHub ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "↗"
							})]
						}), project.live && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: project.live,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-sm text-[#F1F1F3] hover:text-[#6E56CF] transition inline-flex items-center gap-1.5",
							children: ["Live Demo ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								children: "↗"
							})]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-1 md:order-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MockBrowser, { project })
			})]
		})
	});
}
var reveal = {
	initial: {
		opacity: 0,
		y: 24
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		margin: "-80px"
	},
	transition: {
		duration: .5,
		ease: [
			.22,
			1,
			.36,
			1
		]
	}
};
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-24 md:py-32 border-t border-[#1E1E22]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { text: "About" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				...reveal,
				className: "font-display tight text-3xl md:text-4xl font-semibold",
				children: "A self-taught builder, shipping real products."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 grid md:grid-cols-[1.4fr_1fr] gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...reveal,
					className: "space-y-5 text-[#8A8A9A] leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I'm a final-year engineering student at Bangalore Institute of Technology with hands-on experience building full-stack products from the ground up. I pick up new technologies quickly and gravitate toward problems that have real stakes — the kind where good engineering makes a genuine difference." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "I work across the entire stack, from crafting responsive frontends to designing backend systems and integrating AI APIs. I care about how things are built, not just that they work." })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					...reveal,
					className: "grid grid-cols-2 gap-px bg-[#1E1E22] border border-[#1E1E22] rounded-xl overflow-hidden self-start",
					children: [
						{
							v: "3",
							l: "Projects shipped"
						},
						{
							v: "2026",
							l: "Year all projects built"
						},
						{
							v: "~50%",
							l: "API latency cut"
						},
						{
							v: "MERN+",
							l: "Stack fluency"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-[#111113] p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display tight text-3xl font-semibold text-[#6E56CF]",
							children: s.v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs font-mono text-[#8A8A9A] uppercase tracking-wider",
							children: s.l
						})]
					}, s.l))
				})]
			})
		] })
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "skills",
		className: "py-24 md:py-32 border-t border-[#1E1E22]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { text: "Toolbox" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				...reveal,
				className: "font-display tight text-3xl md:text-4xl font-semibold",
				children: "Technical Stack"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4",
				children: Object.entries(skills).map(([cat, list], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .5,
						delay: i * .05
					},
					className: "rounded-xl border border-[#1E1E22] bg-[#111113] p-6 hover:border-[#2E2E36] hover:-translate-y-0.5 transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[11px] uppercase tracking-widest text-[#4A4A5A]",
						children: cat
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: list.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm text-[#F1F1F3]",
							children: s
						}, s))
					})]
				}, cat))
			})
		] })
	});
}
function Community() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 border-t border-[#1E1E22]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { text: "Beyond Code" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				...reveal,
				className: "font-display tight text-3xl md:text-4xl font-semibold",
				children: "Community & Involvement"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 relative pl-8 border-l border-[#1E1E22] space-y-10",
				children: community.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						x: -10
					},
					whileInView: {
						opacity: 1,
						x: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#6E56CF]",
							style: { boxShadow: "0 0 0 4px #0A0A0B, 0 0 12px rgba(110,86,207,0.6)" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-mono text-[#4A4A5A] uppercase tracking-wider",
							children: c.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-lg font-medium text-[#F1F1F3]",
							children: c.org
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-[#8A8A9A] max-w-xl",
							children: c.desc
						})
					]
				}, c.org))
			})
		] })
	});
}
function Education() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 border-t border-[#1E1E22]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { text: "Education" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				...reveal,
				className: "font-display tight text-3xl md:text-4xl font-semibold",
				children: "Where I'm Studying"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...reveal,
				className: "mt-10 rounded-2xl border border-[#1E1E22] bg-[#111113] p-8 relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-20 -right-20 w-60 h-60 bg-[#6E56CF]/10 blur-3xl rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-start justify-between gap-6 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-10 h-10 rounded-lg bg-[#6E56CF]/10 border border-[#6E56CF]/30 grid place-items-center text-lg",
							children: "🎓"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold text-[#F1F1F3]",
							children: "Bangalore Institute of Technology"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-[#8A8A9A] mt-0.5",
							children: "Bachelor of Engineering · Electrical and Electronics Engineering"
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-[#8A8A9A] font-mono",
						children: "Bengaluru, Karnataka"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-sm text-[#8A8A9A]",
						children: "2023 — 2027"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...reveal,
				className: "mt-4 rounded-xl border border-[#1E1E22] bg-[#0D0D10] p-5 flex items-center justify-between gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-sm text-[#F1F1F3]",
					children: "Shree Krishna International School, Bhubaneswar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-[#4A4A5A] font-mono mt-1",
					children: "Class XII · CBSE · 82%"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs text-[#4A4A5A]",
					children: "2020 — 2022"
				})]
			})
		] })
	});
}
function Certifications() {
	const items = [{
		title: "The Complete Web Development Bootcamp",
		org: "Udemy"
	}, {
		title: "Introduction to AI and ChatGPT",
		org: "Udemy"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 border-t border-[#1E1E22]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { text: "Certifications" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				...reveal,
				className: "font-display tight text-3xl md:text-4xl font-semibold",
				children: "Continued Learning"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid md:grid-cols-2 gap-4",
				children: items.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .5,
						delay: i * .08
					},
					className: "rounded-xl border border-[#1E1E22] bg-[#111113] p-5 flex items-center gap-4 hover:border-[#2E2E36] transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-10 h-10 rounded-lg bg-[#15151A] border border-[#262630] grid place-items-center text-[#6E56CF]",
						children: "📜"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-medium text-[#F1F1F3]",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-[#4A4A5A] font-mono mt-0.5",
						children: c.org
					})] })]
				}, c.title))
			})
		] })
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-24 md:py-32 bg-[#0D0D10] border-t border-[#1E1E22]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { text: "Get In Touch" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				...reveal,
				className: "font-display tight text-3xl md:text-5xl font-semibold max-w-2xl",
				children: "Let's Build Something Meaningful."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				...reveal,
				className: "mt-4 text-[#8A8A9A] max-w-xl",
				children: "Open to internship opportunities — full-stack, AI engineering, or product-focused engineering roles. Available Summer / Fall 2026."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				...reveal,
				className: "mt-14 flex flex-wrap gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactLink, {
						icon: "✉",
						href: `mailto:${personal.email}`,
						label: personal.email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactLink, {
						icon: "⟶",
						href: personal.linkedin,
						label: "LinkedIn"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactLink, {
						icon: "⊙",
						href: personal.github,
						label: "GitHub"
					})
				]
			})
		] })
	});
}
function ContactLink({ icon, href, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: href.startsWith("http") ? "_blank" : void 0,
		rel: "noopener noreferrer",
		className: "group inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-[#1E1E22] bg-[#111113] text-[#F1F1F3] hover:border-[#6E56CF] hover:text-[#6E56CF] transition-all",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[#6E56CF] font-mono",
			children: icon
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm font-mono",
			children: label
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "py-8 border-t border-[#1E1E22]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#4A4A5A]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["© 2026 ", personal.name] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: "Built with React & Tailwind" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: personal.github,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-[#F1F1F3]",
						children: "GitHub"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: personal.linkedin,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-[#F1F1F3]",
						children: "LinkedIn"
					})]
				})
			]
		}) })
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#0A0A0B] text-[#F1F1F3] selection:bg-[#6E56CF]/40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Community, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Education, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Certifications, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
