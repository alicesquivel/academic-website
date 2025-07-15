import React from 'react';
import { Button, Icon } from 'atomize';

const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setIsDark(e.matches);
      updateTheme(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const updateTheme = (dark) => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    updateTheme(!isDark);
  };

  return (
    <Button
      h="2.5rem"
      p={{ x: "1rem" }}
      bg={isDark ? "gray800" : "white"}
      border="1px solid"
      borderColor={isDark ? "gray700" : "gray300"}
      rounded="lg"
      d="flex"
      align="center"
      shadow="2"
      hoverShadow="3"
      transition="all 0.3s"
      cursor="pointer"
      onClick={toggleTheme}
    >
      <Icon
        name={isDark ? "Sun" : "Moon"}
        color={isDark ? "yellow500" : "gray800"}
        size="1rem"
      />
      <Text
        textColor={isDark ? "gray300" : "gray800"}
        textSize="body"
        m={{ l: "0.5rem" }}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </Text>
    </Button>
  );
};

export default ThemeToggle;
