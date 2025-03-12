import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, subject, message } = await request.json();

    // Настройка транспорта для Yandex
    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru', // SMTP-сервер Yandex
        port: 465, // Порт для SSL
        secure: true, // Использовать SSL
        auth: {
            user: process.env.EMAIL_USER, // Ваш email на Yandex
            pass: process.env.EMAIL_PASSWORD, // Пароль от email
        },
    });

    // Настройка письма
    const mailOptions = {
        from: process.env.EMAIL_USER, // От кого (ваш email на Yandex)
        to: 'friendsha@yandex.ru', // Кому (ваш email)
        subject: `Новое сообщение от ${name}: ${subject} с сайта Бизнес десант`,
        html: `
        <h1>Новое сообщение от ${name}</h1>
        <h2>Проект Бизнес десант</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Тема:</strong> ${subject}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
    `,
    };

    try {
        // Отправка письма
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Сообщение успешно отправлено!' });
    } catch (error) {
        console.error('Ошибка при отправке письма:', error);
        return NextResponse.json({ message: 'Ошибка при отправке сообщения.' }, { status: 500 });
    }
}
