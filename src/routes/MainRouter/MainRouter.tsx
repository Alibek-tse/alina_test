import Application from '@/pages/Application';
import ApplicationForm from '@/pages/ApplicationForm';
import Dashboard from '@/pages/Dashboard';
import MainPage from '@/pages/MainPage';
import { Route, Routes } from 'react-router-dom';

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route index element={<Dashboard />} />
        <Route path="/application" element={<Application />} />
        <Route path="/application-create" element={<ApplicationForm />} />
        <Route path="/application-edit/:docId" element={<ApplicationForm isEdit/>} />
      </Route>
    </Routes>
  );
};
