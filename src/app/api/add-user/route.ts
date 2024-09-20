import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
const errors = {
    'usuarios_email_key': 'Email already in use',
    'usuarios_pkey': 'ID already in use',
    'usuarios_phone_key': 'Phone already in use'
};

export const dynamic = 'force-dynamic'
export async function POST(request: Request) {
    const { id, name, surname, id_type, email, phone} = await request.json();
    try {
        if (!name || !surname || !id_type || !id || !email || !phone) throw new Error('All fields are required');
        await sql`
                 INSERT INTO usuarios (id, name, surname, id_type, email, phone)
                 VALUES (${id}, ${name}, ${surname}, ${id_type}, ${email}, ${phone})
                 RETURNING *
             `
        return NextResponse.json({ message: 'User added successfully' });
    } catch (error) {
        if (error instanceof Error && 'constraint' in error) {
            const constraint = (error as { constraint: keyof typeof errors }).constraint;
            if (constraint && errors[constraint]) {
                return NextResponse.json({ error: errors[constraint] }, { status: 400 });
            }
        }
        return NextResponse.json({ error }, { status: 500 });
    }
}
export async function GET() {
    return NextResponse.json({ message: 'This is a GET request' });
}