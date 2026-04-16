/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/.vitepress/**/*.{vue,js}", "./docs/**/*.md"],
  theme: {
    extend: {
      colors: {
        VPLight: "#D97706",
        VPDark: "#F59E0B",
        claude: {
          cream: '#FAF9F6',
          beige: '#F5F0EB',
          peach: '#F5E6D3',
          terracotta: '#D97706',
          coral: '#DA7756',
          amber: '#F59E0B',
          charcoal: '#1A1A1A',
          warm: '#6B6358',
          muted: '#9C9488',
          border: '#E8E0D8',
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
