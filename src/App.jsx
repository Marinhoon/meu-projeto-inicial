import vitor from "../public/vitor.jpg";
import git from "../public/github.png";
import discord from "../public/discord.png";

export default function App() {
  return (
    <div className="app">
      <img src={vitor} alt="" />
      <h1>Hey 🌵 Oxente Vei, Colê de mermu ?</h1>
      <p>
        Meu nome é Vitor Marinho, Mais conhecido como Marinho e tenho 25 Anos!
      </p>
      <p>🧑‍💻 Estou aqui para fazer tudo que amoo !</p>
      <p>🌵Salvador-BA</p>
      <hr />
      <ul>
        <li>✨ Criando bugs desde HTML CSS e JavaScript...</li>
        <li>📚 Atualmente estou aprendendo React com TypeScript🧑🏼‍🔬 ... </li>
        <li>🎯 Metas: Conquistar o meu sonho.</li>
        <li>🎲 Curiosidade: ... </li>
      </ul>
      <hr />
      <h2>Onde pode me encontrar ?</h2>
      <ul>
        <button>
          {" "}
          <img src={git} alt="" />{" "}
        </button>
        <button>
          {" "}
          <img src={discord} alt="" />
        </button>
      </ul>
    </div>
  );
}
