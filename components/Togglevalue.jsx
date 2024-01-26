// themeUtils.js

const getToggleValue = () => {
    const theme = localStorage.getItem("theme");
    let isDarkMode = false;
  
    if (theme === 'dark') {
      isDarkMode = true;
    } else {
      // Check for dark mode class on the document element
      isDarkMode = document.documentElement.classList.contains('dark');
    }
  
    return {
      themeMode: isDarkMode ? 'dark' : 'light',
      isDarkMode: isDarkMode,
    };
  }
  
  export default getToggleValue;
  