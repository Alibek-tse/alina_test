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
import { Stack } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';
import CustomButton from '@/shared/ui/CustomButton';

export const ApplicationForm = () => {
  const applicationForm: ApplicationFormType = useSelector(
    (state: RootState) => state.applicationSlice.applicationFormState
  );
  const dispatch = useDispatch();
  const [resetKey, setResetKey] = useState(0);
  console.log('applicationForm: ', applicationForm);

  const handleReset = () => {
    dispatch(setApplicationForm(new ApplicationFormType()));
  };

  return (
    <MainContainer>
      <Stack direction={'row'} sx={{ width: '100%' }} justifyContent={'space-between'} spacing={5}>
        <LeftSide />
        <RightSide />
      </Stack>

      <Stack direction={'row'} spacing={8} sx={{ pt: '50px' }}>
        <CustomButton variant="contained" title="Отправить" />
        <CustomButton
          variant="text"
          title="Очистить"
          onClick={handleReset}
        />
      </Stack>
    </MainContainer>
  );
};
