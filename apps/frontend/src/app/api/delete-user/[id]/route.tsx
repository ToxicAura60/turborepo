import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { clientConfig, serverConfig } from "../../../../config/config";
import { getTokens } from "next-firebase-auth-edge";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {

  const { id } = params; 

  const tokens = await getTokens(await cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  try {
  const response = await fetch(`http://localhost:4000/api/users/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${tokens?.token}`,
    },
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