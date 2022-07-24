import { useRouter } from "next/router";
import { useColorMode, Select } from "@chakra-ui/react";

const LanguageSwitch = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;

  const hoverBg = {
    light: "gray.100",
    dark: "gray.700",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.asPath, router.asPath, { locale });
  };

  return (
    <Select
      variant="ghost"
      aria-label="Language Switcher"
      defaultValue={locale}
      onChange={changeLanguage}
      color={color[colorMode]}
      maxWidth="200px"
    >
      {locales.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </Select>
  );
};

export default LanguageSwitch;
