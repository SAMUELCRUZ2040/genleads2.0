import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src//**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
			'display': ['var(--font-poppins)', 'ui-sans-serif', 'system-ui'],
		},
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(transparent, #c86dbd 30%, #c86dbd, transparent)',		
			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
			primary: "#C86DBD",    // principal (magenta / fucsia)
			secondary: "#9B59B6",  // un poco más claro
			tertiary: "#6C3483",   // mucho más claro
			accent: "#E8DAEF",     // un poco más oscuro
			highlight: "#F4F6F7",  // mucho más oscuro
			extraPrimary : "#c86dbd3d"
  		},
		animation: {
			scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
		},
		keyframes: {
			scroll: {
			to: {
				transform: 'translate(calc(-50% - 0.5rem))',
			},
			},
		},
	  	}
  }
};
export default config;
