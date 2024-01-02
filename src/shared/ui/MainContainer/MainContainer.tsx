import { useThemeColors } from '@/hooks/useThemeColors';
import { Box } from '@mui/material';

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  const { white } = useThemeColors();
  return (
    <Box sx={{ borderRadius: '28px', background: white, p:5 }}>
      <>{children}</>
    </Box>
  );
};
