import "./globals.css";

import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

import { useState } from "react";

function App() {
 const [name, setName] = useState("");
 const [sobreNome, setSobreNome] = useState("");
 const [email, setEmail] = useState("");
 const [cidade, setCidade] = useState("");
 const [rua, setRua] = useState("");
 const [bairro, setBairro] = useState("");
 const [cep, setCep] = useState("");
 const [telefone, setTelefone] = useState("");
 const [estadoCivil, setEstadoCivil] = useState("");
 const [profisao, setProfissao] = useState("");
 const [description, setDescription] = useState("");

 const handleOnSubmit = () => {
  console.log(
   "name: ",
   name,
   "sobre nome: ",
   sobreNome,
   "email: ",
   email,
   "cidade: ",
   cidade,
   "rua: ",
   rua,
   "bairro: ",
   bairro,
   "cep: ",
   cep,
   "telefone: ",
   telefone,
   "estado civil: ",
   estadoCivil,
   "profissão: ",
   profisao,
   "description: ",
   description
  );
  setName("");
  setSobreNome("");
  setEmail("");
  setCidade("");
  setRua("");
  setBairro("");
  setCep("");
  setTelefone("");
  setEstadoCivil("");
  setProfissao("");
  setDescription("");
 };

 return (
  <div className="bg-slate-700 w-full h-screen flex items-center justify-center">
   <Card className="p-4 flex flex-col gap-6 items-start">
    <h2 className="text-lg font-bold mb-2">Informações Pessoais</h2>
    <div className="flex gap-2">
     <Input
      value={name}
      placeholder="Name"
      onChange={(e) => setName(e.target.value)}
     />
     <Input
      value={sobreNome}
      placeholder="Sobrenome"
      onChange={(e) => setSobreNome(e.target.value)}
     />
     <Input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
     />
    </div>

    <hr className="w-full my-4" />

    <h2 className="text-lg font-bold mb-2">Endereço</h2>
    <div className="flex flex-col gap-2 items-start">
     <div className="flex gap-2">
      <Input
       value={cidade}
       onChange={(e) => setCidade(e.target.value)}
       placeholder="Cidade"
      />
      <Input
       value={rua}
       onChange={(e) => setRua(e.target.value)}
       placeholder="Rua"
      />
      <Input
       value={bairro}
       onChange={(e) => setBairro(e.target.value)}
       placeholder="Bairro"
      />
     </div>

     <div>
      <Input
       value={cep}
       onChange={(e) => setCep(e.target.value)}
       placeholder="CEP"
      />
     </div>
    </div>

    <hr className="w-full my-4" />

    <h2 className="text-lg font-bold mb-2">Outras Informações</h2>
    <div className="flex gap-2">
     <Input
      value={telefone}
      onChange={(e) => setTelefone(e.target.value)}
      placeholder="Telefone"
     />
     <Input
      value={estadoCivil}
      onChange={(e) => setEstadoCivil(e.target.value)}
      placeholder="Estado Civil"
     />
     <Input
      value={profisao}
      onChange={(e) => setProfissao(e.target.value)}
      placeholder="Profissão"
     />
    </div>

    <hr className="w-full my-4" />

    <h2 className="text-lg font-bold mb-2">Mensagem</h2>
    <div className=" rounded-lg w-full ">
     <Textarea onChange={(e) => setDescription(e.target.value)} />
    </div>
    <Button onClick={handleOnSubmit}>Enviar</Button>
   </Card>
  </div>
 );
}

export default App;
