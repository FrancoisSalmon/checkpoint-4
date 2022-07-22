import { Route, Routes } from "react-router-dom";
/* eslint-disable */
import Header from "@components/architecture/Header";
import Footer from "@components/architecture/Footer";
import Home from "@pages/Home";
import Hardware from "@pages/Hardware";
import Game from "@pages/Game";
import Gestion from "@pages/Gestion";
// import AddGame from "@pages/AddGame";
// import ModifOrDeleteGame from "@pages/ModifOrDeleteGame";
/* eslint-enable */

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/console/:id" element={<Hardware />} />
          <Route path="/jeux/:id" element={<Game />} />
          <Route path="/gestion" element={<Gestion />} />
          {/* <Route path="/ajout" element={<AddGame />} />
        <Route path="/modif-ou-supprime" element={<ModifOrDeleteGame />} /> */}
        </Routes>
      </main>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
