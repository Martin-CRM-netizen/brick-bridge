import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Logic to store in database (PostgreSQL) would go here
    // Logic to send email to 'Senior Advisor' (Admins) for vetting
    
    console.log('New B2B Application:', data);

    return NextResponse.json({ 
      success: true, 
      message: 'Application received for vetting',
      applicationId: `B2B-${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid data' }, { status: 400 });
  }
}
