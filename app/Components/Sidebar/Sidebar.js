"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import styled from "styled-components";
const Sidebar = () => {
  const { theme } = useGlobalState();
  console.log(theme);
  return <SidebarStyled theme={theme}>Sidebar</SidebarStyled>;
};

const SidebarStyled = styled.nav`
  width: ${(props) => props.theme.SidebarWidth};
`;

export default Sidebar;
