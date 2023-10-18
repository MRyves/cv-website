import './App.css'
import AppLayout from "./components/ui/AppLayout.tsx";
import Header from "./components/ui/Header.tsx";
import Intro from "./components/sections/Intro.tsx";
import Template from "./components/sections/Template.tsx";


function App() {

  return (
    <AppLayout>
        <Header />
        <Intro />
        <Template title="ABOUT ME">
            <div className="h-[100px] bg-red-500">This is only a test</div>
        </Template>
        <Template title="SKILLS">
            <div className="h-[100px] bg-red-500">This is only a test</div>
        </Template>
        <Template title="WORK EXPERIENCE">
            <div className="h-[100px] bg-red-500">This is only a test</div>
        </Template>
        <Template title="PROJECTS">
            <div className="h-[100px] bg-red-500">This is only a test</div>
        </Template>
        <Template title="EDUCATION">
            <div className="h-[100px] bg-red-500">This is only a test</div>
        </Template>
        <Template title="REFFERENCES">
            <div className="h-[100px] bg-red-500">This is only a test</div>
        </Template>
    </AppLayout>
  )
}

export default App
