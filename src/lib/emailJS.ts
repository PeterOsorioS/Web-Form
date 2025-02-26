import emailjs from "@emailjs/browser";
import { FormEvent, RefObject } from "react";
import { toast } from 'react-toastify';


export function sendEmail(e: FormEvent<HTMLFormElement>, formRef: RefObject<HTMLFormElement | null>) {

  e.preventDefault();

  const button = formRef.current?.boton
  button.disabled = true;


  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (!formRef.current) return;

  toast.promise(
    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey),
    {
      pending: 'Enviando correo...',
      success: '¡Correo enviado con éxito!',
      error: 'Error al enviar el correo, inténtelo más tarde.'
    }
  ).finally(() => {
    button.disabled = false
    formRef.current?.reset();
  });
}
