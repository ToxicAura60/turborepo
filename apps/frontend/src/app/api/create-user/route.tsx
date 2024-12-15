import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { clientConfig, serverConfig } from "../../../config/config";
import { getTokens } from "next-firebase-auth-edge";

export async function POST(request: NextRequest, response: NextResponse) {
  const tokens = await getTokens(await cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  const { email, password } = await request.json();

  if(!email || !password) {
    return NextResponse.json({ message: 'Email and password are required'}, { status: 400 });
  }

  try {
  const response = await fetch('http://localhost:4000/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokens?.token}`,
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  const data = await response.json()
  if(response.ok) {
    return NextResponse.json({data}, { status: 200})
  }
  return NextResponse.json({data}, { status: 500})
} catch(e) {
  return NextResponse.json({message: (e as Error).message}, { status: 401})
}





}