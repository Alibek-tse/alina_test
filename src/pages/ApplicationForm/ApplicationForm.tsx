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
import { useNavigate, useParams } from 'react-router-dom';
import { applicationRequired } from './applicationUtils';

interface ApplicationFormProps {
  isEdit?: boolean;
}

export const ApplicationForm: React.FC<ApplicationFormProps> = ({ isEdit }) => {
  const [isOnce, setIsOnce] = useState<boolean>(true);
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const { docId: idString } = useParams();
  const idNumber = idString ? parseInt(idString, 10) : undefined;
  const isValidId = idNumber !== undefined && !isNaN(idNumber);

  const [createApplication] = useCreateApplicationsMutation();
  const [editApplication] = useEditApplicationMutation();
  const { data, isLoading } = useGetApplicationQuery({ id: isValidId ? idNumber : -1 }, { skip: !isValidId });
  const navigate = useNavigate();

  const applicationForm: ApplicationFormType = useSelector(
    (state: RootState) => state.applicationSlice.applicationFormState
  );
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(setApplicationForm(new ApplicationFormType()));
  };

  const handleSubmit = async () => {
    if (!applicationRequired(applicationForm)) {
      setShowWarning(true);
    } else {
      if (isEdit && idNumber) {
        try {
          await editApplication({ id: idNumber, body: applicationForm }).then(res => {
            navigate('/application');
          });
        } catch (error) {
          console.error('Ошибка при отправке формы:', error);
        }
      } else {
        try {
          await createApplication({ body: applicationForm }).then(res => {
            navigate('/application');
          });
        } catch (error) {
          console.error('Ошибка при отправке формы:', error);
        }
      }
    }
  };

  useEffect(() => {
    if (isEdit && data && !isLoading && isOnce) {
      dispatch(setApplicationForm(new ApplicationFormType({ ...data })));
      setIsOnce(false);
    } else {
      dispatch(setApplicationForm(new ApplicationFormType()));
    }
  }, [data, isLoading, isEdit, dispatch]);

  useEffect(() => {
    if (applicationRequired(applicationForm)) {
      setShowWarning(false);
    }
  }, [applicationForm]);

  return (
    <MainContainer>
      <Stack direction={'row'} sx={{ width: '100%' }} justifyContent={'space-between'} spacing={5}>
        <LeftSide showWarning={showWarning} />
        <RightSide showWarning={showWarning} />
      </Stack>

      <Stack direction={'row'} spacing={8} sx={{ pt: '50px' }}>
        <CustomButton variant="contained" title="Отправить" onClick={handleSubmit} />
        <CustomButton variant="text" title="Очистить" onClick={handleReset} />
      </Stack>
    </MainContainer>
  );
};
