import React from 'react';
import { Stack, InputLabel, TextField, IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useThemeFonts } from '@/hooks/useThemeFonts';
import { ReactComponent as LogoFile } from '@/assets/icon/file.svg';
import { ReactComponent as LogoClose } from '@/assets/icon/close.svg';

const FileInput = styled('input')({
  display: 'none',
});

const StyledCustomTextField = styled(TextField)(() => {
  return {
    width: '100%',
    '& .MuiInputBase-root': {
      height: '40px',
      borderRadius: '8px',
      backgroundColor: 'white',
    },
    '& .MuiInputBase-input': {
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0px',
      fontWeight: 400,
      paddingLeft: '16px',
    },
    '& .MuiInputBase-input.Mui-disabled': {
      backgroundColor: '#ccc',
      WebkitTextFillColor: 'black',
      borderRadius: '8px',
      padding: '13px',
    },
    '& .MuiInputBase-input::placeholder': {
      fontSize: '12px',
      lineHeight: '18px',
      letterSpacing: '0px',
      color: 'black', // Здесь укажите нужный цвет
      // Добавьте другие стили для placeholder по вашему усмотрению
    },
  };
});

const FileChip = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5),
  paddingLeft: theme.spacing(1),
  margin: theme.spacing(0.5, 0),
  backgroundColor: '#E4EEFC',
  color: 'black',
  border: '1px solid #ADCBF5',
  // borderRadius: theme.shape.borderRadius,

  // Новые стили для предотвращения переноса текста
  whiteSpace: 'nowrap', // Запрещает перенос текста
  // overflow: 'hidden',          // Скрывает текст, выходящий за границы
  // textOverflow: 'ellipsis',    // Добавляет многоточие, если текст обрезается

  '&:hover': {
    backgroundColor: '#E4EEFC',
  },
  '& .MuiIconButton-root': {
    padding: theme.spacing(0.5),
    color: 'white',
  },
}));

interface TextFieldFileProps {
  title?: string;
  mt?: string;
  width?: string;
  placeholder?: string;
  onChange :(value: any) => void
  value: File | null
  uniqueKey: string
}

export const TextFieldFile: React.FC<TextFieldFileProps> = ({ title, mt, width, placeholder, onChange, value, uniqueKey }) => {
  const { bodyS } = useThemeFonts();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      onChange(files[0]);
    }
  };

  const handleClear = () => {
    onChange(null);
  };

  return (
    <Stack direction="column" spacing={'8px'} sx={{ mt: mt || '0px', width: width || '100%' }}>
      {title && <InputLabel sx={{ ...bodyS, fontWeight: 400, color: 'black' }}>{title}</InputLabel>}
      <Stack direction={'row'} alignItems={'center'} spacing={1}>
        <StyledCustomTextField
          fullWidth
          variant="outlined"
          placeholder={!value ? placeholder : ''}
          InputProps={{
            startAdornment: value && (
              <FileChip>
                <span>{value.name}</span>
                <IconButton size="small" onClick={handleClear}>
                  <LogoClose style={{ fill: 'black' }} />
                </IconButton>
              </FileChip>
            ),
          }}
        />
        <FileInput accept="*/*" id={`file-upload-button${uniqueKey}`} type="file" onChange={handleFileChange} />
        <Box>
          <InputLabel htmlFor={`file-upload-button${uniqueKey}`}>
            <IconButton
              sx={{ border: '1px solid rgba(0, 0, 0, 0.33)', borderRadius: '8px', padding: '7.5px' }}
              component="span"
            >
              <LogoFile style={{ fill: 'black' }} />
            </IconButton>
          </InputLabel>
        </Box>
      </Stack>
    </Stack>
  );
};
