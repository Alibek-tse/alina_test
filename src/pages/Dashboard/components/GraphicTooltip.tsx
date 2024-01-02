import { useThemeColors } from '@/hooks/useThemeColors';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import { Stack, Typography } from '@mui/material';
import {
  TooltipProps,
} from 'recharts';

export const GraphicTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    const { bodyS } = useThemeFonts();
    const { white, darkBlue, red, green } = useThemeColors();
    if (active && payload && payload.length) {
      return (
        <Stack direction={'column'} sx={{ background: darkBlue, p: 2, borderRadius: '10px' }} spacing={2}>
          <Typography sx={{ ...bodyS, color: white }}>{`01.01.2023`}</Typography>
          <Stack direction={'row'} spacing={2}>
            <Stack direction={'column'}>
              <Typography sx={{ ...bodyS, color: green }}>покупка</Typography>
              <Typography sx={{ ...bodyS, color: white }}>{`${payload[0].value}`}</Typography>
            </Stack>
            <Typography sx={{ ...bodyS, color: white }}>$</Typography>
            <Stack direction={'column'}>
              <Typography sx={{ ...bodyS, color: red }}>продажа</Typography>
              <Typography sx={{ ...bodyS, color: white }}>{`${payload[1].value}`}</Typography>
            </Stack>
          </Stack>
        </Stack>
      );
    }
  
    return null;
  };