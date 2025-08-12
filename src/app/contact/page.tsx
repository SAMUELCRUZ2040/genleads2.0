"use client";

import { useState, FormEvent } from "react";
import { Input } from "@/components/input";
import { HandleForm } from "@/utils/handleForm";
import SenEmails from "@/utils/senEmails";
import data from '@/json/data.json';
import {globalClass} from "@/components/globalClass";

type FormError = {
  [key: string]: {
    _errors?: string[];
  };
};

type FormState = {
  errors?: FormError;
  success?: boolean;
} | null;

type InputInfo = {
  type: string;
  name: string;
  placeholder: string;
  inputType?: string;
};

type FieldData = InputInfo[];

type InputGroup = {
  [key: string]: FieldData;
};

type ContactData = {
  titleForm: { text: string; color?: boolean; delay?: number }[];
  form: InputGroup[];
};

export default function Contact() {
  const [formState, setFormState] = useState<FormState>(null);

  async function handleSubmit(formData: FormData) {
    const result = await HandleForm(formData);
    setFormState(result);
  }

  // Convert delay from string to number to match ContactData type
  const rawContactData = data?.contact?.[0];
  const contactData: ContactData | undefined = rawContactData
    ? {
        ...rawContactData,
        titleForm: rawContactData.titleForm.map(
          ({ text, color, delay }: { text: string; color?: boolean; delay?: string }) => ({
            text,
            color,
            delay: delay !== undefined ? Number(delay) : undefined,
          })
        ),
        form: rawContactData.form.map((inputGroup: any) => {
          // Ensure all properties are arrays (FieldData)
          const fixedGroup: InputGroup = {};
          Object.entries(inputGroup).forEach(([key, value]) => {
            fixedGroup[key] = Array.isArray(value) ? value : [];
          });
          return fixedGroup;
        }),
      }
    : undefined;

  if (!contactData) return null;

  return (
    <div
      className="flex justify-center items-center my-56 py-56 max-lg:my-28 max-lg:py-28 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: "url(/figure.png)" }}
    >
      <div className="container flex justify-center items-center">
        <div className="grid grid-cols-1 w-full">
          {/* TITLE */}
          <div className="flex justify-center items-center">
            <h1 className={`${globalClass.h1} text-primary whitespace-nowrap  flex flex-col justify-center items-center gap-2 text-center `}>
              {contactData.titleForm.map(({ text, color}) => (
                  <span className={`${color ? "max-lg:!text-3xl !text-7xl" : ""}`} key={text}>
                    {text}
                  </span>
              ))}
            </h1>
          </div>

          {/* FORM */}
          <form
            className="flex flex-col gap-4 border-2 p-5 rounded-2xl m-9 px-8 py-5 backdrop-blur-[2px] bg-[#f3f3f317]"
            action={handleSubmit}
          >
            <span className={globalClass.smallP}>We are going to start a new business</span>

            {contactData.form.map((inputGroup, groupIndex) => (
              <div className="flex gap-5" key={groupIndex}>
                {Object.entries(inputGroup).map(([key, fieldData], fieldIndex) => {
                  const inputInfo = fieldData[0];
                  const error = formState?.errors?.[inputInfo.name]?._errors?.[0];

                  return (
                    <div className="flex flex-col w-full" key={key}>
                      <Input
                        type={inputInfo.type}
                        name={inputInfo.name}
                        placeholder={inputInfo.placeholder}
                        inputType={
                          inputInfo.inputType === "input" || inputInfo.inputType === "textarea"
                            ? inputInfo.inputType
                            : undefined
                        }
                      />
                      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                  );
                })}
              </div>
            ))}
            <button type="submit" className="border-2 p-2 rounded-lg hover:bg-[#0000000b]">
              Submit
            </button>
          </form>
        </div>
      </div>

      {formState?.success && <SenEmails />}
    </div>
  );
}