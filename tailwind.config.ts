import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {

			primary: {
				900: "#0A196F",
				800: "#102587",
				700: "#1A37A7",
				600: "#264BC8",
				500: "#3563E9", 
				400: "#658DF1",
				300: "##85A8F8",
				200: "#AEC8FC",
				100: "#D6E4FD",
			  },
			  success: {
				900: "#3B6506",
				800: "#4C7A0B",
				700: "#659711",
				600: "#7FB519",
				500: "#9CD323", 
				400: "#BCE455",
				300: "#D3F178",
				200: "#E8FAA6",
				100: "#F5FCD2",
			  },
			  error: {
				900: "#7A0619",
				800: "#930B16",
				700: "#B71112",
				600: "#DB2719",
				500: "#FF4423", 
				400: "#FF7F59",
				300: "#FFA37A",
				200: "#FFC8A6",
				100: "#FFE7D3",
			  },
			  warning: {
				900: "#7A4D0B",
				800: "#936312",
				700: "#B7821D",
				600: "#DBA32A",
				500: "#FFC73A", 
				400: "#FFD96B",
				300: "#FFE488",
				200: "#FFEFB0",
				100: "#FFF8D7",
			  },
			  information: {
				900: "#102E7A",
				800: "#1A4393",
				700: "#2A60B7",
				600: "#3D81DB",
				500: "#54A6FF", 
				400: "#7EC2FF",
				300: "#98D3FF",
				200: "#BAE5FF",
				100: "#DCF3FF",
			  },
			  secondary: {
		
				900: "#040815",
				800: "#080C19",
				700: "#0D121F",
				600: "#131825",
				500: "#1A202C", 
				400: "#596780",
				300: "#90A3BF",
				200: "#C3D4E9",
				100: "#DCF3FF",
			  },
			  
			  neutral: {
				900: "#111827",
				700: "#374151",
				500: "#6B7280",
			  },
			  accent: {
				100: "#F9A8D4",
				200: "#F472B6",
			  },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {

				
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  		
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
