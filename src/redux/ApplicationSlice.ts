import { ApplicationFormType } from '@/types/ApplicationFormType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ApplicationType {
  applicationFormState: ApplicationFormType;
}

const initialState: ApplicationType = {
  applicationFormState: new ApplicationFormType(),
};

export const ApplicationSlice = createSlice({
  name: 'ApplicationSlice',
  initialState,
  reducers: {
    setApplicationForm: (state, action: PayloadAction<ApplicationFormType>) => {
      state.applicationFormState = action.payload;
    },
  },
});

export const { setApplicationForm } = ApplicationSlice.actions;

export default ApplicationSlice.reducer;
