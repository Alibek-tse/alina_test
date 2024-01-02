import { Box, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { useThemeColors } from '@/hooks/useThemeColors';
import { NavLink, useMatch } from 'react-router-dom';
import { useThemeFonts } from '@/hooks/useThemeFonts';
interface SidebarType {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  path: string;
}

interface CustomListItemProps {
  item: SidebarType;
  index: number;
}

/**
 * CustomListItem - компонент для отображения элемента бокового меню
 * @param {SidebarType} item - /Required/ элемент бокового меню
 * @param {number} index - /Required/ индекс элемента бокового меню
 * @param {boolean} isExpanded - /Required/ флаг, отображать ли подсказку
 * @returns {React.FC<CustomListItemProps>}
 * @example
 * const item = { icon: <LogoHome style={sidebarIconStyle} />, title: 'Главная', path: '/home' };
 * const index = 0;
 * const isExpanded = true;
 * */

export const SideBarListItem: React.FC<CustomListItemProps> = ({ item, index }) => {
  const { white, mainBackground, darkBlue, black } = useThemeColors();
  const { bodyL } = useThemeFonts();

  const match = useMatch(item.path);
  const isActive = match != null;

  return (
    <Box>
      <NavLink to={item?.path} style={{ textDecoration: 'none' }}>
        <ListItem
          key={index}
          sx={{
            '&:hover': { backgroundColor: isActive ? darkBlue : mainBackground },
            backgroundColor: isActive ? darkBlue : white,
            p: '14px',
            borderTopRightRadius: '30px',
            borderBottomRightRadius: '30px',
          }}
        >
          <ListItemIcon sx={{ minWidth: 0, m: 0 }}>
            <item.Icon style={{ stroke: isActive ? white : black, width: '32px', height: '32px' }} />
          </ListItemIcon>
          <ListItemText
            disableTypography
            primary={
              <Typography sx={{ ...bodyL, color: isActive ? white : black, textDecoration: 'none', ml: 2 }}>
                {item.title}
              </Typography>
            }
          />
        </ListItem>
      </NavLink>
    </Box>
  );
};
