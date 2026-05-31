module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {

      /* ======================
         COLORS (FITPRO SYSTEM)
      ====================== */
      colors: {

        // BRAND (PRIMARY)
        maroon: '#7F1D1D',
        'maroon-dark': '#991B1B',

        // MAIN BACKGROUNDS (USED IN WEBSITE)
        background: '#0A0A0A',   // main dark bg
        surface: '#111111',      // sections/cards dark
        card: '#1A1A1A',         // elevated card

        // LIGHT MODE (OFF WHITE STYLE)
        light: '#F8F8F8',        // your gym light background
        white: '#FFFFFF',

        // TEXT COLORS
        text: {
          primary: '#FFFFFF',
          muted: '#9CA3AF',
          dark: '#111111',
        },

        // BORDER COLORS
        border: '#E5E7EB',
      },

      /* ======================
         TYPOGRAPHY
      ====================== */
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },

      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '18px',

        h1: ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['36px', { lineHeight: '1.3', fontWeight: '700' }],
        h3: ['28px', { lineHeight: '1.4', fontWeight: '600' }],
      },

      /* ======================
         SPACING SYSTEM
      ====================== */
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        8: '32px',
        10: '40px',
        12: '48px',
        16: '64px',
      },

      /* ======================
         LAYOUT
      ====================== */
      maxWidth: {
        container: '1200px',
      },

      /* ======================
         BREAKPOINTS
      ====================== */
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },

      /* ======================
         SHADOWS (MODERN LOOK)
      ====================== */
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
        dark: '0 10px 30px rgba(0,0,0,0.4)',
        glow: '0 0 20px rgba(127,29,29,0.35)',
      },

      /* ======================
         BORDER RADIUS
      ====================== */
      borderRadius: {
        xl: '12px',
        '2xl': '20px',
      },
    },
  },

  plugins: [],
};