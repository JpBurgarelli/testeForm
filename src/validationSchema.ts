import { z } from "zod";

export const validationSchema = z.strictObject({
  name: z.string().optional(),

  sobrenome: z.string().optional(),

  email: z

    .string()
    .min(1, { message: "Email obrigatório" })
    .email({ message: "Deve ser um email valido" }),

  cpfCnpj: z
    .string({
      required_error: "CPF/CNPJ é obrigatório.",
    })
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return replacedDoc.length >= 11;
    }, "CPF/CNPJ deve conter no mínimo 11 caracteres.")
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return replacedDoc.length <= 14;
    }, "CPF/CNPJ deve conter no máximo 14 caracteres.")
    .refine((doc) => {
      const replacedDoc = doc.replace(/\D/g, "");
      return !!Number(replacedDoc);
    }, "CPF/CNPJ deve conter apenas números."),

  cidade: z.string().optional(),

  rua: z.string().optional(),

  bairro: z.string().optional(),



  cep: z.coerce
    .string()
    .min(1, { message: "CEP obrigatório" })
    .refine((i) => i.toString().length > 7, {
      message:
        "Deve haver 8 digitos",
    }),

  telefone: z.coerce
    .string()
    .min(1, { message: "Telefone obrigatório" })
    .refine((i) => i.toString().length > 9, {
      message: "Deve ter pelo menos 10 digitos",
    }),


});
