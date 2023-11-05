import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <body>

    <Header />

{/* <!-- Main content --> */}
<main className="main">

    <TodoList />
</main>

    <Footer />

</body>
    </div>
  )
}

export default App
