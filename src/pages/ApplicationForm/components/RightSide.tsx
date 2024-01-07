import { RootState } from '@/redux';
import { setApplicationForm } from '@/redux/ApplicationSlice';
import CustomCounter from '@/shared/ui/CustomCounter';
import CustomDatePicker from '@/shared/ui/CustomDatePicker';
import CustomSelect from '@/shared/ui/CustomSelect';
import CustomTextField from '@/shared/ui/CustomTextField';
import TextFieldMask from '@/shared/ui/TextFieldMask';
import { ApplicationFormType } from '@/types/ApplicationFormType';
import { Box, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

export const RightSide = ({showWarning}: {showWarning: boolean}) => {
  const applicationForm: ApplicationFormType = useSelector(
    (state: RootState) => state.applicationSlice.applicationFormState
  );
  const dispatch = useDispatch();

  return (
    <Stack direction={'column'} alignItems={'end'} sx={{ width: '100%' }}>
      <Stack direction={'row'} spacing={5}>
        <Stack direction={'column'} spacing={'27px'}>
          <CustomCounter
            count={applicationForm?.applicantsNumber}
            incrementCount={() =>
              dispatch(
                setApplicationForm(
                  new ApplicationFormType({
                    ...applicationForm,
                    applicantsNumber: applicationForm?.applicantsNumber + 1,
                  })
                )
              )
            }
            dicrementCount={() =>
              dispatch(
                setApplicationForm(
                  new ApplicationFormType({
                    ...applicationForm,
                    applicantsNumber: applicationForm?.applicantsNumber - 1,
                  })
                )
              )
            }
          />
          <CustomSelect
            title="Город"
            options={[
              { value: 'astana', name: 'Астана' },
              { value: 'almaty', name: 'Алмата' },
              { value: 'karaganda', name: 'Караганда' },
              { value: 'pavlodar', name: 'Павлодар' },
              { value: 'kostanay', name: 'Костанай' },
            ]}
            onChange={(value: string) =>
              dispatch(
                setApplicationForm(
                  new ApplicationFormType({
                    ...applicationForm,
                    city: value,
                  })
                )
              )
            }
            value={applicationForm?.city}
            applicationType
          />
        </Stack>

        <Stack direction={'column'} spacing={4}>
          <Box sx={{ pl: 3 }}>
            <TextFieldMask
              value={applicationForm?.number}
              onChange={value =>
                dispatch(setApplicationForm(new ApplicationFormType({ ...applicationForm, number: value })))
              }
              title="Номер телефона*"
              mask="+7 999 999-99-99"
              placeholder='+ 7 (___) ___-__-__'
              width="50%"
              showWarning={showWarning}
            />
          </Box>
          <CustomDatePicker
            value={applicationForm?.date}
            onChange={value =>
              dispatch(setApplicationForm(new ApplicationFormType({ ...applicationForm, date: value })))
            }
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
