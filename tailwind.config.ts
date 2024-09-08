import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(accordion|divider).js',
    './node_modules/@nextui-org/theme/dist/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "heroAnim": "url('/animation.png')",
        
      // },
      colors: {
        primary: {
          DEFAULT: '#000033', // Replaced with the new primary color
          foreground: '#E0E0E0', // Light blue for secondary sections (used as foreground for primary)
        },
        secondary: {
          DEFAULT: 'hsl(209, 100%, 18%, 5%)', // Light blue for secondary sections
          foreground: '#050316', // White for text on dark background (used as foreground for secondary)
        },
        accent: {
          DEFAULT: '#1cd98e', // Bright accent color
          foreground: '#050316', // White for text on dark background (used as foreground for accent)
        },
        textPrimary: '#050316', // Dark text color
        textSecondary: '#4b5563', // Light grey for less contrast areas
        background: '#fbfbfe',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      screens: {
        fold: '280px',
        xs: '400px', // Custom breakpoint for extra small screens
        sm: '768px',
        md: '769px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        xlg: "1217px",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'custom-bg': "url('/background_images/result.svg')",
        'custom-bg1': "url('/background_images/result (1).svg')", // Custom background image
        'teamBg': "url('/background_images/teamBg.svg')"
      },
	  
    },
  },
  plugins: [require('tailwindcss-animate'), nextui],
};

export default config;