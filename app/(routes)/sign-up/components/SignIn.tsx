"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import GoogleIcon from "@/app/icons/Google";
import { Dispatch, SetStateAction } from "react";

import { zodResolver } from "@hookform/resolvers/zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5, {
    message: "Password must be at least 2 characters.",
  }),
});

type SchemaType = z.infer<typeof signInSchema>;

interface Props {
  onFormChange: Dispatch<SetStateAction<"signIn" | "signUp">>;
}

export default function SignIn({ onFormChange }: Props) {
  const form = useForm<SchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: SchemaType) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  className="w-[340px]"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  className="w-[340px]"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          className="w-full mt-2 h-10 bg-button_two hover:bg-button_hover"
          type="submit"
        >
          Sign In
        </Button>

        <Button
          variant="outline"
          className="w-full h-10 flex gap-4"
          type="submit"
        >
          <GoogleIcon />
          <div>Sign In with google</div>
        </Button>
      </form>
      <div className="text-xs m-auto w-fit mt-6">
        Do not have account?{" "}
        <span
          onClick={() => onFormChange("signUp")}
          className="underline ml-2 cursor-pointer"
        >
          Sign Up
        </span>
      </div>
    </Form>
  );
}