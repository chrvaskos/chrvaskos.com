const { spacing } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        width: `width`,
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        hide: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        grayScale: {
          '0%': { filter: 'grayscale(100%)' },
          '100%': { filter: 'grayscale(50%)' },
        },
        popUpDown: {
          '0%': { transform: 'translateY(-4px)' },
          '100%': { transform: 'translateY(0)' },
        },
        poof: {
          '0%': {
            transform: 'scale(1)',
          },
          '25%': {
            transform: 'scale(1.05)',
            boxShadow: '0px 0px 10px 3px rgba(0,0,0,0.5)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        hide: 'hide 2s ease-in-out 1',
        grayScale: 'grayScale 2s ease-in-out 1',
        popUpDown: 'popUpDown 300ms linear 1',
        poof: 'poof 300ms linear 1',
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.blue.500'),
              'text-decoration': 'none',
              'box-shadow': '0px 0px 0px #3b82f6',
              transition: 'box-shadow 200ms ease 0s',
              '&:hover': {
                'box-shadow': '0px 2px 0px #3b82f6',
              },
            },
            'h1,h2,h3,h4': {
              'scroll-margin-top': spacing[32],
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            code: { color: theme('colors.gray.300') },
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800'),
              'margin-top': '0',
            },
            thead: {
              borderBottomColor: theme('colors.gray.200'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.500'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.200'),
            'h1,h2,h3': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32],
            },
            'h4,p': {
              color: theme('colors.gray.200'),
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.800'),
              color: theme('colors.gray.500'),
            },
            hr: { borderColor: theme('colors.gray.800') },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.300') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.200') },
              },
            },
            strong: { color: theme('colors.gray.200') },
            thead: {
              color: theme('colors.gray.200'),
              borderBottomColor: theme('colors.gray.800'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.800'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class',
}
