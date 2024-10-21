import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message, contact, organisation, messageType } = body;
    console.log(messageType);
    
    // Determine if it's a bug or a message
    const typeTitle = messageType==="Message" ?  'Message from User': 'Bug Report from User';
    const typeMessage = messageType==="Message" ? 'Message' : 'Message/Issue';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const htmlContent = `
      <div style="background-color:#f4f4f4;padding:20px;">
      <div style="max-width:600px;margin:auto;background-color:white;padding:20px;border-radius:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);">
          <p style="margin-top: 20px; font-size: 12px; color: #777;">
            This message was sent via the <strong>IIITV Coding Club Website</strong>.
          </p>
          <h1 style="background-color:#f88474;color:white;padding:10px;border-top-left-radius:10px;border-top-right-radius:10px;">${typeTitle}</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact No.:</strong> ${contact}</p>
          <p><strong>Organisation:</strong> ${organisation}</p>
          <div style="background-color:#f9f9f9;padding:10px;border-radius:8px;margin:10px 0;">
            <p><strong>${typeMessage}:</strong></p>
            <p>${message}</p>
          </div>
          <a href="mailto:${email}" style="display:inline-block;background-color:#f88474;color:white;padding:5px 20px;border-radius:8px;text-decoration:none;margin-top:20px;">Reply to User</a>
        </div>
      </div>
    `;

    const mailOptions = {
      from: email,
      to: 'codingclub@iiitvadodara.ac.in',
      subject: `${typeTitle}: ${name}`,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}
