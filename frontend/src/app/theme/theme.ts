import Nora from '@primeuix/themes/nora';
import { definePreset } from '@primeuix/themes';

export const Theme = definePreset(Nora, {
  semantic: {
    primary: {
      50: '#f8f9fa',
      100: '#e9ecef',
      200: '#dee2e6',
      300: '#ced4da',
      400: '#adb5bd',
      500: '#6c757d',
      600: '#5a6268',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
      950: '#1a1e21',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#6c757d',
          inverseColor: '#ffffff',
          hoverColor: '#5a6268',
          activeColor: '#495057',
        },
        highlight: {
          background: '#6c757d',
          focusBackground: '#5a6268',
          color: '#ffffff',
          focusColor: '#ffffff',
        },
        surface: {
          0: '#ffffff',
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#5a6268',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#1a1e21',
        },
      },
    },
  },
});
