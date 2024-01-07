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

  export const transformDateToString = (dateString: string): string => {
    // Создаем объект даты из строки
    const date = new Date(dateString);
    // Форматируем дату в формате 'дд.мм.гггг'
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Месяц начинается с 0
    const year = date.getFullYear();
  
    return `${day}.${month}.${year}`;
  }