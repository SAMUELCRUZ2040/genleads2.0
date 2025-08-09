import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src//**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'custom-gradient': 'linear-gradient(transparent, #66cead 30%, #66cead, transparent)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
        	primary: '#66cead',
  		},
	  	}
  }
};
export default config;
