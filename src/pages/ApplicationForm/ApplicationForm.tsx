import { RootState } from '@/redux';
import { setApplicationForm } from '@/redux/ApplicationSlice';
import MainContainer from '@/shared/ui/MainContainer';
import { ApplicationFormType } from '@/types/ApplicationFormType';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { LeftSide } from './components/LeftSide';
import { RightSide } from './components/RightSide';
import CustomButton from '@/shared/ui/CustomButton';
import {
  useCreateApplicationsMutation,
  useEditApplicationMutation,
  useGetApplicationQuery,
} from '@/redux/ApplicationApi/ApplicationApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface ApplicationFormProps {
  isEdit?: boolean;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ isEdit }) => {
  const [isOnce, setIsOnce] = useState<boolean>(true);
  const { docId: idString } = useParams();
  const idNumber = idString ? parseInt(idString, 10) : undefined;
  const isValidId = idNumber !== undefined && !isNaN(idNumber);

  const [createApplication] = useCreateApplicationsMutation();
  const [editApplication] = useEditApplicationMutation();
  const { data, isLoading } = useGetApplicationQuery({ id: isValidId ? idNumber : -1 }, { skip: !isValidId });

  const applicationForm: ApplicationFormType = useSelector(
    (state: RootState) => state.applicationSlice.applicationFormState
  );
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(setApplicationForm(new ApplicationFormType()));
  };

  const handleSubmit = async () => {
    if (isEdit && idNumber) {
      try {
        await editApplication({ id: idNumber, body: applicationForm });
      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
      }
    } else {
      try {
        await createApplication({ body: applicationForm });
      } catch (error) {
        console.error('Ошибка при отправке формы:', error);
      }
    }
  };

  useEffect(() => {
    if (isEdit && data && !isLoading && isOnce) {
      dispatch(setApplicationForm(new ApplicationFormType({ ...data })));
      setIsOnce(false);
    }
  }, [data, isLoading, isEdit, dispatch]);

  return (
    <MainContainer>
      <Stack direction={'row'} sx={{ width: '100%' }} justifyContent={'space-between'} spacing={5}>
        <LeftSide />
        <RightSide />
      </Stack>

      <Stack direction={'row'} spacing={8} sx={{ pt: '50px' }}>
        <CustomButton variant="contained" title="Отправить" onClick={handleSubmit} />
        <CustomButton variant="text" title="Очистить" onClick={handleReset} />
      </Stack>
    </MainContainer>
  );
};
