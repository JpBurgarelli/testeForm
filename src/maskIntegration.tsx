import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../src/components/ui/button";
import { Input } from "../src/components/ui/input";
import { z } from "zod";
import {
 Form,
 FormField,
 FormItem,
 FormControl,
 FormMessage,
} from "../src/components/ui/form";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "./components/ui/select";
import { validationSchema } from "./validationSchema";
import { formatCpfCnpj } from "./formatCpfCnpj";
import { formatCep } from "./formatCep";
import { formatPhoneNumber } from "./formatCelphone";

export const RegisterForm = () => {
 const form = useForm<z.infer<typeof validationSchema>>({
  resolver: zodResolver(validationSchema),
  defaultValues: {
   name: "",
   sobrenome: "",
   email: "",
   cpfCnpj: "",
   cidade: "",
   rua: "",
   bairro: "",
   cep: "",
   telefone: "",
  },
 });

 const onSubmit = (values: z.infer<typeof validationSchema>) => {
  console.log(values);
 };

 return (
  <Form {...form}>
   <form
    onSubmit={form.handleSubmit(onSubmit)}
    className="form bg-white flex flex-col items-start gap-4 p-6 rounded-sm"
   >
    <h2 className="text-lg font-bold mb-2">Com React Hook Form, Zod & Mask</h2>
    <h2 className="text-lg font-bold mb-2">Informações Pessoais</h2>

    <div className="flex flex-col items-start gap-4">
     <div className="flex gap-4">
      <FormField
       control={form.control}
       name="name"
       render={({ field: { onChange, ...props } }) => (
        <FormItem>
         <FormControl>
          <Input
           className="border-none"
           onChange={onChange}
           placeholder="Name"
           {...props}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="sobrenome"
       render={({ field: { onChange, ...props } }) => (
        <FormItem>
         <FormControl>
          <Input
           className="border-none"
           onChange={onChange}
           placeholder="Sobrenome"
           {...props}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="email"
       render={({ field: { onChange, ...props } }) => (
        <FormItem>
         <FormControl>
          <Input
           className="border-none"
           onChange={onChange}
           placeholder="Email"
           {...props}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
     </div>
     <FormField
      control={form.control}
      name="cpfCnpj"
      render={({ field: { onChange, ...props } }) => (
       <FormItem>
        <FormControl>
         <Input
          className="border-none"
          onChange={(e) => {
           const { value } = e.target;
           e.target.value = formatCpfCnpj(value);
           onChange(e);
          }}
          placeholder="CPF/CNPJ"
          {...props}
         />
        </FormControl>
        <FormMessage className="h-[20px] " />
       </FormItem>
      )}
     />
    </div>

    <hr className="w-full my-4" />

    <h2 className="text-lg font-bold mb-2">Endereco</h2>

    <div className="flex flex-col items-start gap-4">
     <div className="flex gap-4">
      <FormField
       control={form.control}
       name="cidade"
       render={({ field: { onChange, ...props } }) => (
        <FormItem>
         <FormControl>
          <Input
           className="border-none"
           onChange={onChange}
           placeholder="Cidade"
           {...props}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="rua"
       render={({ field: { onChange, ...props } }) => (
        <FormItem>
         <FormControl>
          <Input
           className="border-none"
           onChange={onChange}
           placeholder="Rua"
           {...props}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={form.control}
       name="bairro"
       render={({ field: { onChange, ...props } }) => (
        <FormItem>
         <FormControl>
          <Input
           className="border-none"
           onChange={onChange}
           placeholder="Bairro"
           {...props}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
     </div>
     <FormField
      control={form.control}
      name="cep"
      render={({ field: { onChange, ...props } }) => (
       <FormItem>
        <FormControl>
         <Input
          className="border-none"
          onChange={(e) => {
           const { value } = e.target;
           e.target.value = formatCep(value);
           onChange(e);
          }}
          placeholder="cep"
          {...props}
         />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />
    </div>

    <hr className="w-full my-4" />

    <h2 className="text-lg font-bold mb-2">Outras Informacoes</h2>

    <div className="flex w-full gap-2">
     <div className="w-full flex gap-2">
      <div className="w-full">
       <FormField
        control={form.control}
        name="telefone"
        render={({ field: { onChange, ...props } }) => (
         <FormItem>
          <FormControl>
           <Input
            className="border-none"
            onChange={(e) => {
             const { value } = e.target;
             e.target.value = formatPhoneNumber(value);
             onChange(e);
            }}
            placeholder="Telefone"
            {...props}
           />
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />
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
    </div>

    <Button className="mt-8" type="submit">
     Enviar
    </Button>
   </form>
  </Form>
 );
};
