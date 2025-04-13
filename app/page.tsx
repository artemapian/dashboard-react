import Header from '../shared/header';
import Dashboard from '@/shared/dashboard';
export default function Home() {
  return (
      <div className = 'flex flex-col gap-4 p-[24px]'>
        <Header />
        <Dashboard />
      </div> 
  );
}
