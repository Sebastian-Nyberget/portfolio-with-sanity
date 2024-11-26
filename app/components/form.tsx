"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { postData } from "../actions";

export function Form() {
  return (
    <form 
      action={postData} 
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
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ): (
        <Button type="submit">Sign for free</Button>
      )}  
    </>
  )
}