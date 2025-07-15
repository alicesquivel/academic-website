/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      colors: {
        background: '#f9fafb',
        foreground: '#111827',
        accent: {
          DEFAULT: '#4f46e5',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#6b7280',
          foreground: '#9ca3af',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#111827',
        },
        'card-muted': {
          DEFAULT: '#f3f4f6',
          foreground: '#4b5563',
        },
        terminal: {
          DEFAULT: '#1e1e2e',
          header: '#181825',
          text: '#f8f8f2',
          muted: '#a6adc8',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#111827',
            a: {
              color: '#4f46e5',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
