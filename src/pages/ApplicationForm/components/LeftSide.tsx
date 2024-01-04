import { useThemeFonts } from '@/hooks/useThemeFonts';
import { RootState } from '@/redux';
import { setApplicationForm } from '@/redux/ApplicationSlice';
import CustomCheckbox from '@/shared/ui/CustomCheckbox';
import CustomCounter from '@/shared/ui/CustomCounter';
import CustomDatePicker from '@/shared/ui/CustomDatePicker';
import CustomRadioGroup from '@/shared/ui/CustomRadioGroup';
import CustomSelect from '@/shared/ui/CustomSelect';
import CustomTextField from '@/shared/ui/CustomTextField';
import MainContainer from '@/shared/ui/MainContainer';
import { ApplicationFormType } from '@/types/ApplicationFormType';
import { Box, InputLabel, Stack } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const LeftSide = () => {
  const applicationForm: ApplicationFormType = useSelector(
    (state: RootState) => state.applicationSlice.applicationFormState
  );
  const dispatch = useDispatch();
  const { bodyM } = useThemeFonts();
  const [count, setCount] = useState(1);

  const optionsTypeApplication = [
    { value: 'classic', name: 'Класический' },
    { value: 'standart', name: 'Стандартный' },
  ];

  return (
    <Stack direction={'column'} sx={{ width: '80%' }}>
      <CustomTextField
        value={applicationForm?.name}
        onChange={value =>
          dispatch(setApplicationForm(new ApplicationFormType({ ...applicationForm, name: value })))
        }
        title="Название заявки*"
      />
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        sx={{ width: '100%', mt: '30px' }}
        spacing={5}
        alignItems={'center'}
      >
        <CustomTextField
          value={applicationForm?.amount}
          onChange={value =>
            dispatch(setApplicationForm(new ApplicationFormType({ ...applicationForm, amount: value })))
          }
          title="Сумма заявки"
          placeholder="Сумма"
          isNumber
        />
        <Box sx={{ width: '100%' }}>
          <CustomSelect
            title="Тип заявки*"
            options={optionsTypeApplication}
            onChange={value =>
              dispatch(
                setApplicationForm(new ApplicationFormType({ ...applicationForm, applicationType: value }))
              )
            }
            value={applicationForm?.applicationType}
            applicationType
          />
        </Box>
      </Stack>
      <CustomRadioGroup
        options={[
          { value: 'Yes', label: 'Да' },
          { value: 'No', label: 'Нет' },
        ]}
        value={applicationForm?.isCall}
        onChange={value =>
          dispatch(setApplicationForm(new ApplicationFormType({ ...applicationForm, isCall: value })))
        }
        isHorizontal
        title={`Позвонить для подтверждения`}
        margin="32px 0 0 0"
      />
      <Stack direction={'column'} spacing={2} sx={{ mt: '20px' }}>
        <InputLabel sx={{ ...bodyM, fontWeight: 400, color: 'black' }}>
          Получать дополнительную информацию
        </InputLabel>
        <CustomCheckbox
          checked={applicationForm?.isSendLetter}
          onChange={value =>
            dispatch(setApplicationForm(new ApplicationFormType({ ...applicationForm, isSendLetter: value })))
          }
          label={'Письма на почту'}
        />
        <CustomCheckbox
          checked={applicationForm?.isSendSms}
          onChange={value =>
            dispatch(setApplicationForm(new ApplicationFormType({ ...applicationForm, isSendSms: value })))
          }
          label={'СМС на телефон'}
        />
      </Stack>
      <InputLabel sx={{ ...bodyM, fontWeight: 400, color: 'black', mt: '40px' }}>
        * - обязательные поля
      </InputLabel>
    </Stack>
  );
};
