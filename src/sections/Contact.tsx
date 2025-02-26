"use client"

import React, {useEffect, useState} from 'react';
import {cn} from "@/lib/utils";
import {Element} from "react-scroll";
import {z} from "zod";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {FaArrowRight} from "react-icons/fa6";

interface ContactProps {
    id: string;
    className?: string;
}

const contactFormSchema = z.object({
    name: z.string().min(3, "Must be at least 3 characters"),
    email: z.string().email("Must be an email address"),
    message: z.string().min(10, "Must be at least 10 characters"),
});

type FormData = z.infer<typeof contactFormSchema>;

const Contact: React.FC<ContactProps> = ({id, className}) => {
    const [result, setResult] = useState("");

    const form = useForm<FormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    useEffect(() => {
        if (result) {
            const timer = setTimeout(() => {
                setResult("");
            }, 3000);

            return () => clearTimeout(timer); // Cleanup function to prevent memory leaks
        }
    }, [result]);

    const onSubmit = async (data: FormData) => {
        setResult("Sending ...");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    name: data.name,
                    email: data.email,
                    message: data.message,
                }),
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            setResult("Message sent successfully.");
            form.reset();
        } catch (error) {
            setResult("Failed to send message");
        }
    }

    return (
        <Element name={id} className={cn('flex flex-col items-center justify-center my-24 md:my-12 xl:my-0', className)}>
            <h3 className={'text-xl'}>Connect with me</h3>
            <h2 className={'text-5xl mt-2'}>Get in Touch</h2>
            <p className={'text-center mt-6 max-w-[90vw] sm:max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw] xl:max-w-[50vw]'}>
                I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </p>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={'p-6 rounded-3xl font-outfit w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 mt-8'}>
                    <div className={'grid grid-cols-1 lg:grid-cols-2 gap-6'}>
                        <FormField
                            control={form.control}
                            name={"name"}
                            render={({field}) => (
                                <FormItem className={'grow'}>
                                    <FormControl className={'h-14'}>
                                        <Input placeholder={"Enter you name"} {...field} />
                                    </FormControl>
                                    <FormMessage className={'text-xs text-gray-500'} />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name={"email"}
                            render={({field}) => (
                                <FormItem className={'grow'}>
                                    <FormControl className={'h-14'}>
                                        <Input placeholder={"Enter you email"} {...field} />
                                    </FormControl>
                                    <FormMessage className={'text-xs text-gray-500'} />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name={"message"}
                            render={({field}) => (
                                <FormItem className={'lg:col-span-2'}>
                                    <FormControl className={'h-56 lg:h-64'}>
                                        <Textarea placeholder={'Type your message here...'} {...field} />
                                    </FormControl>
                                    <FormMessage className={'text-xs text-gray-500'} />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className={'relative mt-12 text-center'}>
                        {result && <div className={'absolute -top-8 left-1/2 -translate-x-1/2'}>{result}</div>}
                        <Button type={'submit'} className={'bg-primary hover:bg-primary/80 px-8 py-6 rounded-full'}>
                            Send Message
                            <FaArrowRight />
                        </Button>
                    </div>
                </form>
            </Form>
        </Element>
    );
}

export default Contact;