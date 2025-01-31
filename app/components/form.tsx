"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { postData } from "../actions";
import { useRef } from "react";

export function Form() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) =>  {
        await postData(formData);
        formRef.current?.reset();
      }} 
      className="flex justify-between gap-4 flex-col md:flex-row"
    >
      <Input 
        type="text" 
        name="message" 
        maxLength={80} 
        minLength={1} 
        placeholder="Write Message..."
        required
      />
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="w-full">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ): (
        <Button className="w-full" type="submit">Sign for free</Button>
      )}  
    </>
  )
}