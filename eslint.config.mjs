import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';


export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      // Menonaktifkan aturan no-console
      'no-console': 'off',

      // Menonaktifkan aturan lainnya jika diperlukan
      // Contoh: 'no-unused-vars': 'off',
    }
  }
];