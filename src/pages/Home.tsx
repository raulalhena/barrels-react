import  * as components from '../components'

const Home = () => {
  return (
    <>
      <components.layouts.Navbar />
      <components.forms.SearchBar />
      <main>
        <h2>Contenido</h2>
        <components.forms.Login />
        <components.forms.Register />
      </main>
      <components.layouts.Footer />
      <components.modals.Choose />
      <components.modals.Info />
    </>
  )
}

export default Home;