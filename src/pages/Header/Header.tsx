import { useThemeColors } from '@/hooks/useThemeColors';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import { useLocation } from 'react-router-dom';
import { ReactComponent as NotificationLogo } from '@/assets/icon/notification.svg';
import avatar from '@/assets/images/avatar.png';

const HeadelLabel: { [key: string]: string } = {
  '/': 'Дашборд: Анализ заявок компании',
  '/application': 'Мои заявки',
  '/application-create': 'Новая заявка',

};

export const Header = () => {
  const { h4 } = useThemeFonts();
  const { darkBlue } = useThemeColors();
  const { bodyL } = useThemeFonts();

  const location = useLocation();

  return (
    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
      <Box component={'span'} sx={{ ...h4, display: 'block', color: darkBlue }}>
        {HeadelLabel[location.pathname] ?? ''}
      </Box>
      <Stack direction={'row'} alignItems={'center'} spacing={3}>
        <NotificationLogo />
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
          <Avatar src={avatar} alt="Аватар" />
          <Typography sx={{ ...bodyL, color: darkBlue }}>Иванов И.И.</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
