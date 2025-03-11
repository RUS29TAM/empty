import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const data = await request.json();
    console.log('Received data:', data);

    // Здесь можно добавить логику для отправки email или сохранения в базу данных

    return NextResponse.json({ message: 'Сообщение успешно отправлено!' });
}
