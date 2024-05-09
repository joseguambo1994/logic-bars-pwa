import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#9333ea",
          "secondary": "#c026d3",
          "accent": "#22d3ee",
          "neutral": "#f472b6",
          "base-100": "#1f2937",
          "info": "#0000ff",
          "success": "#4ade80",
          "warning": "#facc15",
          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config