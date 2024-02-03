import { z } from "zod";

export const todoSchema = z.object({
  todo: z.string(),
  todoState: z.enum(["better later", "important", "whenever"]),
});

export type TodoTypes = z.infer<typeof todoSchema>;
