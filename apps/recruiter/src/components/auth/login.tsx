"use client";

import React from "react";
import { Input } from "@repo/ui/ui/input";
import { Button } from "@repo/ui/ui/button";
import { Separator } from "@repo/ui/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginValidations } from "@repo/validations/src/index";
import { LoginValidationsType } from "@repo/validations/src/index";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Login() {
  const form = useForm<LoginValidationsType>({
    resolver: zodResolver(loginValidations),
  });

  async function onSubmit(values: LoginValidationsType) {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
  }

  return (
    <div className="max-w-[500px] w-full">
      <p className="my-5 font-bold text-2xl text-center">Sign in</p>
      <p className="mb-5 text-center">Enter your credentials to signin</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
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
                  <Input placeholder="Enter your Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>

      <Separator className="my-5"/>

      <form action="" className="flex flex-col gap-y-5">
        <Input placeholder="Enter your Email" />
        <Button>Login with Email</Button>
      </form>

      <div className="mt-5 flex justify-center items-center">
        <p>Don't have an Account ?</p>
            <Link href={"/signup"}>
              <Button variant={"link"} className="text-blue-500">Create an Account</Button>
            </Link>
      </div>
    </div>
  );
}
