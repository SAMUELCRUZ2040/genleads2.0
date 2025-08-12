import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src//**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(transparent, #928e8e 30%, #928e8e, transparent)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        	primary: '#66cead',
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
