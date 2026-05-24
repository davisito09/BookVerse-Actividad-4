import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/usuarios")
      .then(res => setUsuarios(res.data));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {usuarios.map((u, i) => (
        <p key={i}>{u.nombre}</p>
      ))}
    </div>
  );
}

export default App;
