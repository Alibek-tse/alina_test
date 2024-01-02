import { useThemeColors } from '@/hooks/useThemeColors';
import { Box, List, Stack } from '@mui/material';
import { SideBarListItem } from './components/SidebarListItem';
import { ReactComponent as DashboardLogo } from '@/assets/icon/dashboard.svg';
import { ReactComponent as CardLogo } from '@/assets/icon/card.svg';
import { ReactComponent as AddCardLogo } from '@/assets/icon/addCard.svg';
import { ReactComponent as CardTickLogo } from '@/assets/icon/cardTick.svg';
import { ReactComponent as CardRemoveLogo } from '@/assets/icon/cardRemove.svg';
import { ReactComponent as LogoCompany } from '@/assets/images/logo.svg';

/**
 * Sidebar - компонент для отображения бокового меню
 * @param {boolean} isExpanded - /Required/ флаг, открыто ли боковое меню
 * @param {() => void} toggleDrawer - /Required/ функция для открытия/закрытия бокового меню
 * @returns {React.FC<SidebarProps>}
 * @example
 * const isExpanded = true;
 * const toggleDrawer = () => {};
 * <Sidebar isExpanded={isExpanded} toggleDrawer={toggleDrawer} />
 * */

export const Sidebar = () => {
  const { white } = useThemeColors();

  const listItemData = [
    { Icon: DashboardLogo, title: 'Дашборд', path: '/' },
    { Icon: CardLogo, title: 'Мои заявки', path: '/application' },
    { Icon: AddCardLogo, title: 'Новая заявка', path: '/application-create' },
    { Icon: CardTickLogo, title: 'Согласованные заявки', path: '#' },
    { Icon: CardRemoveLogo, title: 'Отклоненные заявки', path: '#' },
  ];

  return (
    <Stack
      direction={'column'}
      sx={{
        width: '16%',
        background: white,
        borderTopRightRadius: '26px',
        borderBottomRightRadius: '26px',
      }}
    >
      <Stack direction={'column'} justifyContent={'space-between'} sx={{ width: '100%' }}>
        <Box>
          <LogoCompany />
        </Box>
        <List sx={{ width: '100%', pt: 1 }}>
          {listItemData.map((item, index) => {
            return <SideBarListItem key={index} item={item} index={index} />;
          })}
        </List>
      </Stack>
    </Stack>
  );
};
