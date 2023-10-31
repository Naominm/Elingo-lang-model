import Sidebar from './components/Sidebar/sidebar';
import MainSection from './components/Main/mainsection';
import Navbar from './components/Nav/navbar';

export default function Home() {
  return (
    <main className=" ml-0 ">
      <div className='md:h-screen'>
        <Navbar/>
        <Sidebar/>
        <MainSection/>
      </div>
    </main>
  )
}
