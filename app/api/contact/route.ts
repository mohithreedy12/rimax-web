import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error("RESEND_API_KEY is missing");

            return NextResponse.json(
                { success: false, message: "Email service is not configured." },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        const body = await request.json();

        const {
            name,
            company,
            email,
            phone,
            country,
            service,
            otherService,
            message,
        } = body;

        // Validate required fields
        if (
            typeof name !== "string" ||
            typeof company !== "string" ||
            typeof email !== "string" ||
            typeof phone !== "string" ||
            typeof country !== "string" ||
            typeof service !== "string" ||
            typeof message !== "string" ||
            !name.trim() ||
            !company.trim() ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
            !phone.trim() ||
            !country.trim() ||
            !service.trim() ||
            message.trim().length < 20 ||
            (service === "Other" &&
                (typeof otherService !== "string" ||
                    !otherService.trim()))
        ) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please complete all required fields.",
                },
                { status: 400 }
            );
        }

        // Escape submitted values before inserting them into HTML
        const escapeHtml = (value: string) =>
            value
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#39;");

        const safe = {
            name: escapeHtml(name.trim()),
            company: escapeHtml(company.trim()),
            email: escapeHtml(email.trim()),
            phone: escapeHtml(phone.trim()),
            country: escapeHtml(country.trim()),
            service: escapeHtml(service.trim()),
            otherService:
                typeof otherService === "string"
                    ? escapeHtml(otherService.trim())
                    : "",
            message: escapeHtml(message.trim()).replace(/\n/g, "<br />"),
        };

        // Send enquiry to RiMax business email
        const { data, error } = await resend.emails.send({
            from: "RiMax Website <notifications@rimaxtech.com>",

            to: ["contact@rimaxtech.com"],

            replyTo: email.trim(),

            subject: `New Website Enquiry - ${company.trim()}`,

            html: `
                <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;color:#1e293b;">

                    <div style="background:#1d4ed8;padding:25px;text-align:center;">
                        <h1 style="color:white;margin:0;">
                            RiMax Technologies
                        </h1>
                        <p style="color:#dbeafe;margin-top:8px;">
                            New Website Enquiry
                        </p>
                    </div>

                    <div style="padding:30px;background:#f8fafc;">

                        <h2 style="color:#0f172a;">
                            New Contact Form Submission
                        </h2>

                        <p>
                            A potential client has submitted an enquiry
                            through the RiMax Technologies website.
                        </p>

                        <table style="width:100%;border-collapse:collapse;">

                            <tr>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    <strong>Full Name</strong>
                                </td>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    ${safe.name}
                                </td>
                            </tr>

                            <tr>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    <strong>Company</strong>
                                </td>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    ${safe.company}
                                </td>
                            </tr>

                            <tr>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    <strong>Work Email</strong>
                                </td>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    ${safe.email}
                                </td>
                            </tr>

                            <tr>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    <strong>Contact Number</strong>
                                </td>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    ${safe.phone}
                                </td>
                            </tr>

                            <tr>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    <strong>Country</strong>
                                </td>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    ${safe.country}
                                </td>
                            </tr>

                            <tr>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    <strong>Service Required</strong>
                                </td>
                                <td style="padding:12px;border-bottom:1px solid #ddd;">
                                    ${safe.service}
                                </td>
                            </tr>

                            ${
                service === "Other"
                    ? `
                                    <tr>
                                        <td style="padding:12px;border-bottom:1px solid #ddd;">
                                            <strong>Other Service</strong>
                                        </td>
                                        <td style="padding:12px;border-bottom:1px solid #ddd;">
                                            ${safe.otherService}
                                        </td>
                                    </tr>
                                    `
                    : ""
            }

                        </table>

                        <div style="margin-top:25px;padding:20px;background:white;border:1px solid #e2e8f0;border-radius:10px;">

                            <h3 style="margin-top:0;color:#1d4ed8;">
                                Project Description
                            </h3>

                            <p style="line-height:1.8;">
                                ${safe.message}
                            </p>

                        </div>

                        <p style="margin-top:25px;font-size:13px;color:#64748b;">
                            This enquiry was submitted through the
                            RiMax Technologies website contact form.
                        </p>

                    </div>

                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                {
                    success: false,
                    message: "Unable to send your enquiry.",
                },
                { status: 500 }
            );
        }

        console.log("RiMax enquiry accepted by Resend:", data?.id);

        return NextResponse.json({
            success: true,
            message: "Your enquiry has been submitted successfully.",
        });

    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong. Please try again.",
            },
            { status: 500 }
        );
    }
}