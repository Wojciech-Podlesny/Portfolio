import {EmailTemplate} from "@/utils/email-template";
import { Resend } from 'resend';

const resend = new Resend('123456543');

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Wojtek <wojtekwp@wp.pl>',
            to: ['wojtek@wp.pl'],
            subject: 'Hello world',
            react: EmailTemplate({ firstName: 'John' }),
        });

        if (error) {
            return Response.json({  }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}