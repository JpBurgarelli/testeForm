import "./globals.css";

import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "./components/ui/select";

import { useState } from "react";

import { z } from "zod";
import { CircleX } from "lucide-react";

import { IMaskInput } from "react-imask";

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

 const [emailError, setEmailError] = useState<boolean>(false);
 const [emailErrorMessage, setemailErrorMessage] = useState<string>();

 const [telefoneError, setTelefoneError] = useState<boolean>(false);
 const [telefoneErrorMessage, setTelefoneErrorMessage] = useState<string>();

 const [cepError, setCepError] = useState<boolean>(false);
 const [cepErrorMessage, setCepErrorMessage] = useState<string>();

 const emailValidationSchema = z.object({
  email: z
   .string()
   .min(1, { message: "Email obrigatório" })
   .email({ message: "Deve ser um email valido" }),
 });

 const cepValidationSchema = z.object({
  cep: z.coerce
   .number()
   .int({ message: "O numero nao deve ser decimal" })
   .nonnegative({ message: "O nummero deve ser postivo" })
   .min(1, { message: "CEP obrigatório" })
   .refine((i) => i.toString().length == 8, {
    message: "Deve haver 8 digitos",
   }),
 });

 const telefoneValidationSchema = z.object({
  telefone: z.coerce
   .number()
   .int({ message: "O numero nao deve ser decimal" })
   .nonnegative({ message: "O nummero deve ser postivo" })
   .min(1, { message: "Telefone obrigatório" })
   .refine((i) => i.toString().length > 9, {
    message: "Deve ter pelo menos 10 digitos",
   }),
 });

 const handleOnSubmit = (e: any) => {
  e.preventDefault();

  const emailValidationResult = emailValidationSchema.safeParse({
   email: email,
  });

  const cepValidationResult = cepValidationSchema.safeParse({ cep: cep });

  const telefoneValidationResult = telefoneValidationSchema.safeParse({
   telefone: telefone,
  });

  if (emailValidationResult.success) {
   setEmailError(false);
  } else {
   setEmailError(true);
   const firstErrorMessage = emailValidationResult.error.errors[0].message;
   setemailErrorMessage(firstErrorMessage);
  }

  if (telefoneValidationResult.success) {
   setTelefoneError(false);
  } else {
   setTelefoneError(true);
   const firstErrorMessage = telefoneValidationResult.error.errors[0].message;
   setTelefoneErrorMessage(firstErrorMessage);
  }

  if (cepValidationResult.success) {
   setCepError(false);
  } else {
   setCepError(true);
   const firstErrorMessage = cepValidationResult.error.errors[0].message;
   setCepErrorMessage(firstErrorMessage);
  }

  console.log(
   "name: ",
   name,
   "sobre nome: ",
   sobreNome,
   "email: ",
   email,
   "cpf: ",
   cpf,
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

  if (
   emailValidationResult.success &&
   telefoneValidationResult.success &&
   cepValidationResult.success
  ) {
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
  }
 };

 const handleChange = (event: any) => {
  const { value } = event.target;
  setCpf(value);
 };

 const [cpf, setCpf] = useState<HTMLInputElement>();
 console.log(cpf);

 return (
  <div className="bg-slate-700  w-full h-screen flex items-center justify-center">
   <Card className="p-4 flex flex-col gap-6 items-start">
    <h2 className="text-lg font-bold mb-2">Informações Pessoais</h2>
    <div>
     <div className="flex gap-2">
      <Input
       className="border-none "
       value={name}
       onChange={(e) => setName(e.target.value)}
       placeholder="Name"
      />

      <Input
       className="border-none"
       value={sobreNome}
       onChange={(e) => setSobreNome(e.target.value)}
       placeholder="Sobrenome"
      />
      <div className="w-full flex flex-col gap-2">
       <Input
        className="border-none  "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
       />
       <div className="h-[10px]">
        {emailError && (
         <div className={`flex gap-2 items-center`}>
          <CircleX size={20} className="text-red-600" />
          <p className="capitalize text-xs">{emailErrorMessage}</p>
         </div>
        )}
       </div>
      </div>
     </div>
     <div>
      <IMaskInput
       className="p-3 rounded-md text-sm leading-5  "
       mask="000.000.000-00"
       placeholder="Digite o seu CPF"
       onChange={handleChange}
      />
     </div>
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

     <div className="flex flex-col gap-2">
      <Input
       value={cep}
       onChange={(e) => setCep(e.target.value)}
       placeholder="CEP"
      />
      <div className="h-[10px]">
       {cepError && (
        <div className="flex gap-2 items-center">
         <CircleX size={20} className="text-red-600" />
         <p className="capitalize text-xs">{cepErrorMessage}</p>
        </div>
       )}
      </div>
     </div>
    </div>

    <hr className="w-full my-4" />

    <h2 className="text-lg font-bold mb-2">Outras Informações</h2>
    <div className="flex w-full gap-2">
     <div className="w-full flex flex-col gap-2">
      <Input
       value={telefone}
       onChange={(e) => setTelefone(e.target.value)}
       placeholder="Telefone"
      />
      <div className="h-[10px]">
       {telefoneError && (
        <div className="flex gap-2 items-center">
         <CircleX size={20} className="text-red-600" />
         <p className="capitalize text-xs">{telefoneErrorMessage}</p>
        </div>
       )}
      </div>
     </div>

     <Select>
      <SelectTrigger>
       <SelectValue placeholder="Profissao" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="Programador">Programador</SelectItem>
       <SelectItem value="Engenheiro">Engenheiro</SelectItem>
       <SelectItem value="Medico">Medico</SelectItem>
       <SelectItem value="Cozinheiro">Cozinheiro</SelectItem>
       <SelectItem value="Arquiteto">Arquiteto</SelectItem>
      </SelectContent>
     </Select>

     <Select>
      <SelectTrigger>
       <SelectValue placeholder="Estado Civil" />
      </SelectTrigger>
      <SelectContent>
       <SelectItem value="Solteiro">Solteiro</SelectItem>
       <SelectItem value="Casado">Casado</SelectItem>
       <SelectItem value="Separado">Separado</SelectItem>
       <SelectItem value="Divorciado">Divorciado</SelectItem>
       <SelectItem value="Viuvo">Viuvo</SelectItem>
      </SelectContent>
     </Select>
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
