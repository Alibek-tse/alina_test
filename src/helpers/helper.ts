import { ApplicationFormType } from "@/types/ApplicationFormType";

export const transformApplicationsToTableData = (applications: ApplicationFormType[], pageSize = 10, currentPage = 1) => {
    const totalApplications = applications.length;
    const totalPages = Math.ceil(totalApplications / pageSize);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const content = applications.slice(startIndex, endIndex);
  
    return {
      totalApplications,
      totalPages,
      isFirstPage,
      isLastPage,
      currentPage,
      content
    };
  }