/**
 * Sky & Ocean Theme Configuration
 * 
 * Enhanced Sky & Ocean Palette:
 * 
 * Original Ocean Colors:
 * - BEE9E8: Very light blue (background)
 * - 62B6CB: Medium blue (primary)
 * - 1B4965: Dark blue (text)
 * - CAE9FF: Light blue (accent)
 * - 5FA8D3: Medium blue (secondary)
 * 
 * New Sky Colors:
 * - 87CEEB: Sky blue (sky accent)
 * - F0F8FF: Alice blue (cloud white)
 * - 4682B4: Steel blue (sky primary)
 * - B0E0E6: Powder blue (sky secondary)
 * - 1E90FF: Dodger blue (bright sky)
 * 
 * This file contains all the color values for the sky & ocean theme.
 * To customize the theme, simply modify the values below.
 * 
 * Color Format: oklch(lightness chroma hue)
 * - lightness: 0-1 (0 = black, 1 = white)
 * - chroma: 0-0.4 (0 = grayscale, higher = more saturated)
 * - hue: 0-360 (degrees around the color wheel)
 * 
 * Sky & Ocean Theme Color Guide:
 * - 180-220°: Blues and teals (ocean colors)
 * - 210-240°: Sky blues and atmospheric colors
 * - 140-180°: Sea greens
 * - 200-240°: Deep ocean blues
 */

export const skyOceanThemeConfig = {
  // Light Mode Colors - Sky Theme (currently active)
  light: {
    // Background colors
    background: 'oklch(0.97 0.01 210)',      // F0F8FF - Alice blue background
    surface: 'oklch(0.94 0.01 210)',         // Slightly darker than bg
    
    // Primary brand colors
    primary: 'oklch(0.60 0.15 220)',         // 4682B4 - Steel blue primary
    secondary: 'oklch(0.85 0.05 210)',       // B0E0E6 - Powder blue secondary
    accent: 'oklch(0.65 0.20 230)',          // 1E90FF - Dodger blue accent
    
    // Text colors
    text: 'oklch(0.25 0.05 220)',            // 1B4965 - Dark blue text
    muted: 'oklch(0.55 0.05 220)',           // Medium blue-gray muted text
    
    // Border and input colors
    border: 'oklch(0.88 0.03 210)',          // Light sky blue borders
    
    // Chart colors (for data visualization)
    chart: {
      color1: 'oklch(0.60 0.15 220)',        // 4682B4 - Steel blue
      color2: 'oklch(0.65 0.20 230)',        // 1E90FF - Dodger blue
      color3: 'oklch(0.85 0.05 210)',        // B0E0E6 - Powder blue
      color4: 'oklch(0.70 0.12 200)',        // 62B6CB - Medium blue
      color5: 'oklch(0.75 0.10 210)',        // 5FA8D3 - Medium blue
    },
  },
  
  // Dark Mode Colors - Sky Theme
  dark: {
    // Background colors
    background: 'oklch(0.08 0.02 230)',      // Deep night sky background
    surface: 'oklch(0.12 0.02 230)',         // Dark card backgrounds
    
    // Primary brand colors
    primary: 'oklch(0.70 0.18 220)',         // Bright steel blue for dark mode
    secondary: 'oklch(0.65 0.10 210)',       // Bright powder blue for dark mode
    accent: 'oklch(0.75 0.25 230)',          // Bright dodger blue for dark mode
    
    // Text colors
    text: 'oklch(0.90 0.02 210)',            // Light text for dark mode
    muted: 'oklch(0.70 0.05 220)',           // Muted text for dark mode
    
    // Border and input colors
    border: 'oklch(0.25 0.03 230)',          // Dark borders
    
    // Chart colors (for data visualization)
    chart: {
      color1: 'oklch(0.70 0.18 220)',        // Bright steel blue
      color2: 'oklch(0.75 0.25 230)',        // Bright dodger blue
      color3: 'oklch(0.80 0.10 210)',        // Bright powder blue
      color4: 'oklch(0.75 0.15 200)',        // Bright medium blue
      color5: 'oklch(0.80 0.12 210)',        // Bright medium blue
    },
  },
  
  // Original Ocean Theme Colors (available for switching)
  ocean: {
    light: {
      background: 'oklch(0.95 0.02 200)',    // BEE9E8 - Very light blue background
      surface: 'oklch(0.92 0.02 200)',       // Slightly darker than bg
      primary: 'oklch(0.65 0.12 200)',       // 62B6CB - Medium blue primary
      secondary: 'oklch(0.70 0.10 210)',     // 5FA8D3 - Medium blue secondary
      accent: 'oklch(0.88 0.05 210)',        // CAE9FF - Light blue accent
      text: 'oklch(0.25 0.05 220)',          // 1B4965 - Dark blue text
      muted: 'oklch(0.55 0.05 220)',         // Medium blue-gray muted text
      border: 'oklch(0.85 0.03 200)',        // Light blue-gray borders
      chart: {
        color1: 'oklch(0.65 0.12 200)',      // 62B6CB - Medium blue
        color2: 'oklch(0.70 0.10 210)',      // 5FA8D3 - Medium blue
        color3: 'oklch(0.88 0.05 210)',      // CAE9FF - Light blue
        color4: 'oklch(0.25 0.05 220)',      // 1B4965 - Dark blue
        color5: 'oklch(0.95 0.02 200)',      // BEE9E8 - Very light blue
      },
    },
    dark: {
      background: 'oklch(0.10 0.03 220)',    // Darker version of 1B4965
      surface: 'oklch(0.15 0.03 220)',       // Dark card backgrounds
      primary: 'oklch(0.70 0.15 200)',       // Brighter version of 62B6CB
      secondary: 'oklch(0.60 0.12 210)',     // Brighter version of 5FA8D3
      accent: 'oklch(0.75 0.08 210)',        // Brighter version of CAE9FF
      text: 'oklch(0.90 0.02 200)',          // Light text for dark mode
      muted: 'oklch(0.70 0.05 220)',         // Muted text for dark mode
      border: 'oklch(0.25 0.03 220)',        // Dark borders
      chart: {
        color1: 'oklch(0.70 0.15 200)',      // Bright version of 62B6CB
        color2: 'oklch(0.75 0.12 210)',      // Bright version of 5FA8D3
        color3: 'oklch(0.80 0.08 210)',      // Bright version of CAE9FF
        color4: 'oklch(0.60 0.10 220)',      // Medium version of 1B4965
        color5: 'oklch(0.85 0.05 200)',      // Bright version of BEE9E8
      },
    },
  },
  
  // Other theme properties
  radius: '0.625rem',
  destructive: {
    light: 'oklch(0.65 0.25 15)',            // Red for light mode
    dark: 'oklch(0.75 0.20 15)',             // Red for dark mode
  },
} as const;

/**
 * Quick Theme Customization Examples:
 * 
 * To switch between Sky and Ocean themes:
 * - Edit src/app/globals.css and change the variable assignments
 * - Sky theme uses --sky-* variables
 * - Ocean theme uses --ocean-* variables
 * 
 * To make the sky theme more blue:
 * - Change primary hue from 220 to 240
 * - Increase chroma values slightly
 * 
 * To make the sky theme more atmospheric:
 * - Change primary hue from 220 to 210
 * - Adjust accent hue to 200
 * 
 * To make the theme lighter/darker:
 * - Adjust lightness values (0.97 → 0.99 for lighter, 0.97 → 0.95 for darker)
 * 
 * To make colors more/less saturated:
 * - Adjust chroma values (0.15 → 0.20 for more saturated, 0.15 → 0.10 for less)
 */

export type SkyOceanThemeConfig = typeof skyOceanThemeConfig; 