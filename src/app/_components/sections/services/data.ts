import {
	Code2,
	Search,
	Database,
	Bot,
	Zap,
	Cloud,
	PenTool,
	BarChart3,
} from 'lucide-react'
import type { Service } from './types'

export const services: Service[] = [
	{
		id: 'web-dev',
		title: 'Web Development',
		description:
			'Building high-performance, scalable web applications using modern architectures.',
		fullDescription:
			"I don't just build websites; I engineer digital ecosystems. My web development approach leverages the latest frameworks like Next.js and React to deliver sub-second load times, impeccable SEO foundations, and seamless interactivity. Whether it's a complex SaaS dashboard or a high-traffic marketing site, my code is clean, maintainable, and built to scale with your business.",
		icon: Code2,
		color: '#3b82f6', // blue-500
		details: ['Next.js Architecture', 'PWA Ready', 'Headless CMS'],
		features: [
			'Server-Side Rendering (SSR) for speed',
			'Component-driven development',
			'Accessibility (WCAG) compliance',
			'Automated testing pipelines',
		],
		useCases: [
			'Enterprise SaaS Platforms',
			'E-commerce Marketplaces',
			'Real-time Dashboards',
		],
	},
	{
		id: 'seo',
		title: 'SEO Optimization',
		description:
			'Data-driven strategies to increase visibility and drive organic traffic.',
		fullDescription:
			'Visibility is the currency of the digital age. My SEO strategies go beyond basic keyword stuffing. I perform deep technical audits to ensure search engines can crawl your site effectively, optimize your content architecture for semantic relevance, and build authority through white-hat backlinking strategies. The result is sustainable, long-term organic growth.',
		icon: Search,
		color: '#a855f7', // purple-500
		details: ['Technical Audits', 'Keyword Strategy', 'Core Web Vitals'],
		features: [
			'Technical SEO & Schema Markup',
			'Content Gap Analysis',
			'Local SEO Optimization',
			'Backlink Profile Management',
		],
		useCases: [
			'Local Business visibility',
			'National Brand Expansion',
			'Content Marketing Hubs',
		],
	},
	{
		id: 'crm',
		title: 'Custom CRM Solutions',
		description:
			'Tailored CRM systems that fit your unique workflow and data needs.',
		fullDescription:
			'Off-the-shelf CRMs are often bloated or too rigid. I build custom Customer Relationship Management solutions that map 1:1 to your business processes. By centralizing your customer data and automating follow-ups, I help you close more deals and retain more clients without the manual administrative burden.',
		icon: Database,
		color: '#ec4899', // pink-500
		details: [
			'Workflow Automation',
			'Data Migration',
			'Custom Dashboards',
		],
		features: [
			'Custom Data Modeling',
			'Third-party API Integrations',
			'Role-based Access Control',
			'Automated Email Sequences',
		],
		useCases: [
			'Real Estate Agencies',
			'Boutique Consultancies',
			'Membership Organizations',
		],
	},
	{
		id: 'ai',
		title: 'AI Assistants',
		description:
			'Intelligent agents that automate support, analysis, and creative tasks.',
		fullDescription:
			'Unlock the power of Large Language Models (LLMs) for your business. I design and deploy custom AI agents capable of understanding context, querying your internal knowledge bases, and performing actions autonomously. From 24/7 customer support to automated document analysis, my AI solutions work tirelessly to scale your operations.',
		icon: Bot,
		color: '#14b8a6', // teal-500
		details: ['LLM Integration', 'Context-Aware', 'RAG Pipelines'],
		features: [
			'Retrieval-Augmented Generation (RAG)',
			'Fine-tuned Models',
			'Multi-modal processing (Text/Image)',
			'Secure Data Handling',
		],
		useCases: [
			'Customer Support Bots',
			'Internal Knowledge Search',
			'Automated Content Generation',
		],
	},
	{
		id: 'automation',
		title: 'Business Automations',
		description:
			'Streamlining operations by connecting your tools and eliminating busywork.',
		fullDescription:
			'Your tools should talk to each other. I build robust automation workflows using platforms like n8n, and custom webhooks. By bridging the gaps between your email, CRM, project management, and accounting software, I help you recover hundreds of hours of lost productivity every month.',
		icon: Zap,
		color: '#f59e0b', // amber-500
		details: ['n8n', 'API Integrations', 'Auto-Reporting'],
		features: [
			'Cross-platform synchronization',
			'Error handling & logging',
			'Scheduled background tasks',
			'Conditional logic workflows',
		],
		useCases: [
			'Lead Capture to CRM',
			'Invoice Generation',
			'Social Media Scheduling',
		],
	},
	{
		id: 'cloud',
		title: 'Cloud Infrastructure',
		description:
			'Secure, scalable cloud architectures that grow with your user base.',
		fullDescription:
			'Modern applications require modern infrastructure. I design and manage cloud environments on AWS, Google Cloud, and Azure using Infrastructure as Code (IaC). My setups prioritize security, auto-scaling capabilities, and cost-efficiency, ensuring your application remains resilient under any traffic load.',
		icon: Cloud,
		color: '#6366f1', // indigo-500
		details: ['AWS/GCP', 'Docker/K8s', 'CI/CD Pipelines'],
		features: [
			'Serverless Architecture',
			'Container Orchestration',
			'Database Replication',
			'DDoS Protection',
		],
		useCases: [
			'High-traffic Applications',
			'Global Content Delivery',
			'Microservices Deployment',
		],
	},
	{
		id: 'design',
		title: 'Product Design',
		description:
			'User-centric design that balances aesthetics with functionality.',
		fullDescription:
			'Great products solve problems beautifully. My design process starts with deep user research and evolves into high-fidelity prototypes and polished UI systems. I focus on creating intuitive flows that reduce friction and delight users, ensuring your product is not just usable, but loved.',
		icon: PenTool,
		color: '#f43f5e', // rose-500
		details: ['UI/UX Design', 'Design Systems', 'Prototyping'],
		features: [
			'User Journey Mapping',
			'Interactive Prototyping',
			'Component Library Creation',
			'Usability Testing',
		],
		useCases: [
			'Mobile App Redesigns',
			'SaaS Dashboard UX',
			'Conversion Rate Optimization',
		],
	},
	{
		id: 'analytics',
		title: 'Data Analytics',
		description:
			'Turning raw data into actionable business intelligence.',
		fullDescription:
			'Data is useless without interpretation. I build comprehensive analytics pipelines that aggregate data from multiple sources into clear, interactive dashboards. Track your KPIs in real-time and uncover hidden trends that drive smarter strategic decisions.',
		icon: BarChart3,
		color: '#84cc16', // lime-500
		details: ['BI Dashboards', 'User Tracking', 'Conversion Analysis'],
		features: [
			'Data Warehousing',
			'Custom Visualization',
			'Predictive Analytics',
			'Privacy-first tracking',
		],
		useCases: [
			'Marketing ROI Analysis',
			'User Behavior Tracking',
			'Financial Forecasting',
		],
	},
]
