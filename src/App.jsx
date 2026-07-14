import ProfileCard from "./ProfileCard";
import './App.css'


function App() {
  const profile ={
    initials:"BM",
    name:"Brendon Maia de Figueiredo",
    role:"Estudante de Análise e Desenvolvimento de Sistemas",
    location:"São Paulo-SP",
    bio:"Sempre buscando aprendizado.",
    experience:"Buscando a primeira experiencia no mercado de tecnologia",
    projects:"+ 1",
    skills:["Figma","HTML5","css3","JavaScript","BootStrap","ReactJS","NodeJS","MySQL"],
    links:{gitHub:"https://github.com/Brendonmaia"}

  }

  return(
    <>
    <main className="app">
      <section className="page-intro">
        <span className="tag">Projeto ReactJS</span>
        <h1>Cartão de perfil profissional</h1>
        <p>um projeto simples,bonito e ideal para apendermos componentes,props, listas e estilização com ReactJS</p>
      </section>
        <ProfileCard profile={profile}/>
    </main>
    </>
  )
}

export default App