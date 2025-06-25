
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// VS 2022 Theme Colors
				'vs-bg-primary': 'hsl(var(--vs-bg-primary))',
				'vs-bg-secondary': 'hsl(var(--vs-bg-secondary))',
				'vs-bg-tertiary': 'hsl(var(--vs-bg-tertiary))',
				'vs-sidebar': 'hsl(var(--vs-sidebar))',
				'vs-blue': 'hsl(var(--vs-blue))',
				'vs-purple': 'hsl(var(--vs-purple))',
				'vs-green': 'hsl(var(--vs-green))',
				'vs-orange': 'hsl(var(--vs-orange))',
				'vs-yellow': 'hsl(var(--vs-yellow))',
				'vs-cyan': 'hsl(var(--vs-cyan))',
				'vs-text-primary': 'hsl(var(--vs-text-primary))',
				'vs-text-secondary': 'hsl(var(--vs-text-secondary))',
				'vs-text-muted': 'hsl(var(--vs-text-muted))',
				'vs-border': 'hsl(var(--vs-border))',
				'vs-accent': 'hsl(var(--vs-accent))',
				
				// Shadcn colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'mono': ['Cascadia Code', 'Fira Code', 'JetBrains Mono', 'monospace'],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'glow': {
					'0%, 100%': {
						'box-shadow': '0 0 5px hsl(var(--vs-accent) / 0.3)'
					},
					'50%': {
						'box-shadow': '0 0 20px hsl(var(--vs-accent) / 0.6)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'glow': 'glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
