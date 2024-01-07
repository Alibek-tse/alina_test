import { ApplicationFormType } from "@/types/ApplicationFormType";

export const applicationRequired = (applicationForm: ApplicationFormType) => {
    return !!(
      applicationForm?.name &&
      applicationForm?.applicationType &&
      applicationForm?.number
    );
  };