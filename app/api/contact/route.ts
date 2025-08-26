import { Resend } from 'resend';
import {NextRequest, NextResponse} from "next/server";
import EmailTemplate from "@/emails/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {email, name} = body

        const data = await resend.emails.send({
            from: `${process.env.EMAIL_FROM_NAME} <${process.env.RESEND_FROM_EMAIL}>`,
            to: [email],
            subject: `Hello ${name}`,
            react: EmailTemplate({ name, email }),
        });


        return NextResponse.json({message: "Email sent successfully", data: data.data?.id});
    } catch (error) {
        console.log("Resend error", error);
        return NextResponse.json({
            message: "Email not sent",
            error: error instanceof Error ? error.message : "Unknown error"},
        { status: 500 });
    }
}