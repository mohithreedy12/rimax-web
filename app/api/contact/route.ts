import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            company,
            email,
            phone,
            country,
            service,
            message,
        } = body;

        const { error } = await resend.emails.send({
            from: "RiMax Website <onboarding@resend.dev>",
            to: ["veeramohith01@gmail.com"],
            subject: `New Website Inquiry from ${name}`,
            html: `
                <h2>New Contact Form Submission</h2>

                <hr/>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Company:</strong> ${company}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Phone:</strong> ${phone}</p>

                <p><strong>Country:</strong> ${country}</p>

                <p><strong>Service:</strong> ${service}</p>

                <p><strong>Message:</strong></p>

                <p>${message}</p>
            `,
        });

        if (error) {
            console.error(error);

            return NextResponse.json(
                { success: false },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
        });

    } catch (error) {

        console.error(error);

        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }
}