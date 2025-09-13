// import tailwindcss from '@tailwindcss/postcss';
// import autoprefixer from 'autoprefixer';

// export default {
//   plugins: [
//     tailwindcss,
//     autoprefixer,
//     // This plugin removes hover media query for all hover classes
//     {
//       postcssPlugin: 'force-hover',
//       Once(root) {
//         root.walkAtRules('media', atRule => {
//           if (atRule.params.includes('(hover: hover)')) {
//             // Move all children outside the media query
//             atRule.replaceWith(...atRule.nodes);
//           }
//         });
//       },
//     },
//   ],
// };
const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;