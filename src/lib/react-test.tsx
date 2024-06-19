import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleX } from "lucide-react";

const SignUpSchema = z.object({
 name: z.string(),
 sobrenome: z.string(),
 email: z
  .string()
  .min(1, { message: "Email obrigatório" })
  .email({ message: "Deve ser um email valido" }),
 cidade: z.string(),
 rua: z.string(),
 bairro: z.string(),
 cep: z.coerce
  .string()
  .min(1, { message: "CEP obrigatório" })
  .refine((i) => i.toString().length > 7, {
   message: "Deve haver 8 digitos",
  }),
 telefone: z.coerce
  .string()
  .min(1, { message: "Telefone obrigatório" })
  .refine((i) => i.toString().length > 9, {
   message: "Deve ter pelo menos 10 digitos",
  }),
 cpf: z.string(),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const Teste = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

 const onSubmit: SubmitHandler<SignUpSchemaType> = (data) =>
  console.log(data, "alow");

 return (
  <form
   onSubmit={handleSubmit(onSubmit)}
   className="form bg-white flex flex-col items-start gap-4 p-6 rounded-sm"
  >
   <h2 className="text-lg font-bold mb-2">Com React Hook Form</h2>

   <h2 className="text-lg font-bold mb-2">Informações Pessoais</h2>
   <div className="flex flex-col gap-4 items-start">
    <div className="flex gap-2">
     <div className="flex flex-col">
      <Input className="border-none" placeholder="Name" {...register("name")} />
      {errors.name && <p>{errors.name.message}</p>}
     </div>
     <div className="flex flex-col">
      <Input
       className="border-none"
       placeholder="Sobrenome"
       {...register("sobrenome")}
      />
      {errors.sobrenome && <p>{errors.sobrenome.message}</p>}
     </div>

     <div className="flex flex-col gap-2">
      <Input
       className="border-none"
       placeholder="Email"
       {...register("email")}
      />
      {errors.email && (
       <div className={`flex gap-1 items-center`}>
        <CircleX size={20} className="text-red-600" />
        <p>{errors.email.message}</p>{" "}
       </div>
      )}
     </div>
    </div>
    <div>
     <Input
      className="border-none"
      placeholder="Digite o seu CPF"
      {...register("cpf")}
     />
    </div>
   </div>

   <hr className="w-full my-4" />
   <h2 className="text-lg font-bold mb-2">Endereço</h2>

   <div className="flex flex-col items-start gap-4">
    <div className="flex gap-2">
     <div className="flex flex-col">
      <Input
       className="border-none"
       placeholder="Cidade"
       {...register("cidade")}
      />
      {errors.cidade && <p>{errors.cidade.message}</p>}
     </div>
     <div className="flex flex-col">
      <Input className="border-none" placeholder="Rua" {...register("rua")} />
      {errors.rua && <p>{errors.rua.message}</p>}
     </div>

     <div className="flex flex-col">
      <Input
       className="border-none"
       placeholder="Bairro"
       {...register("bairro")}
      />
      {errors.bairro && <p>{errors.bairro.message}</p>}
     </div>
    </div>

    <div className="flex flex-col ">
     <div>
      <Input
       className="border-none"
       placeholder="Digite o seu CEP"
       {...register("cep")}
      />
      {errors.cep && (
       <div className="flex gap-2 items-center mt-2">
        <CircleX size={20} className="text-red-600" />
        <p className="capitalize text-xs">{errors.cep.message}</p>
       </div>
      )}
     </div>
    </div>
   </div>

   <hr className="w-full my-4 " />
   <h2 className="text-lg font-bold mb-2">Outras Informações</h2>

   <div className="flex w-full gap-2">
    <div className="w-full flex flex-col gap-2">
     <div>
      <Input
       className="border-none"
       placeholder="Digite o seu Telefone"
       {...register("telefone")}
      />
      {errors.telefone && (
       <div className="flex gap-2 items-center mt-2">
        <CircleX size={20} className="text-red-600" />
        <p className="capitalize text-xs">{errors.telefone.message}</p>
       </div>
      )}
     </div>
    </div>

    <Select>
     <SelectTrigger>
      <SelectValue placeholder="Selecione a profissão" />
     </SelectTrigger>
     <SelectContent>
      <SelectItem value="Programador">Programador</SelectItem>
      <SelectItem value="Engenheiro">Engenheiro</SelectItem>
      <SelectItem value="Medico">Médico</SelectItem>
      <SelectItem value="Cozinheiro">Cozinheiro</SelectItem>
      <SelectItem value="Arquiteto">Arquiteto</SelectItem>
      <SelectItem value="nenhum">Nenhuma das opções</SelectItem>
     </SelectContent>
    </Select>

    <Select>
     <SelectTrigger>
      <SelectValue placeholder="Selecione o estado civil" />
     </SelectTrigger>
     <SelectContent>
      <SelectItem value="Solteiro">Solteiro</SelectItem>
      <SelectItem value="Casado">Casado</SelectItem>
      <SelectItem value="Separado">Separado</SelectItem>
      <SelectItem value="Divorciado">Divorciado</SelectItem>
      <SelectItem value="Viuvo">Viuvo</SelectItem>
      <SelectItem value="nenhum">Nenhuma das opcoes</SelectItem>
     </SelectContent>
    </Select>
   </div>

   <hr className="w-full my-4" />

   <h2 className="text-lg font-bold mb-2">Mensagem</h2>
   <div className=" rounded-lg w-full ">
    <Textarea />
   </div>

   <Button type="submit">submit!</Button>
  </form>
 );
};
