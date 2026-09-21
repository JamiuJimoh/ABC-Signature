/* All colors live here. Change one value, rebuild the CSS, and the whole site updates. */
module.exports = {
  content: ['./index.html', './js/main.js', './js/navigation.js'],
  theme: {
    extend: {
      colors: {
        ink: '#211A1C',      // text
        muted: '#736669',    // secondary text
        line: '#E7DEDA',     // thin borders
        blush: '#F7F1ED',    // soft neutral background
        peach: '#F2E9E1',    // warm neutral background
        rose: '#DCC6BE',     // soft accent
        berry: '#7A2340',    // main brand color
        wine: '#3D1220',     // deep brand color
        gold: '#B08D4F'      // muted metallic accent
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'Arial', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif']
      }
    }
  }
};
