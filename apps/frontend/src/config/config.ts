
/*
export const serverConfig = {
  cookieName: process.env.AUTH_COOKIE_NAME!,
  cookieSignatureKeys: [process.env.AUTH_COOKIE_SIGNATURE_KEY_CURRENT!, process.env.AUTH_COOKIE_SIGNATURE_KEY_PREVIOUS!],
  cookieSerializeOptions: {
    path: "/",
    httpOnly: true,
    secure: process.env.USE_SECURE_COOKIES === "true",
    sameSite: "lax" as const,
    maxAge: 12 * 60 * 60 * 24,
  },
  serviceAccount: {
    projectId: process.env.FIREBASE_PROJECT_ID!,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n")!,
  }
};


export const clientConfig = {
  apiKey: 'AIzaSyA2YFJviFzrFXTSNr3HCTYnTjBVk5_q0FM',
  authDomain: process.env.FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.FIREBASE_PROJECT_ID!,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.FIREBASE_APP_ID!,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID!
};
*/

export const serverConfig = {
  cookieName: 'AuthToken',
  cookieSignatureKeys: ['secret1', 'secret2'],
  cookieSerializeOptions: {
    path: "/",
    httpOnly: true,
    secure: false,
    sameSite: "lax" as const,
    maxAge: 12 * 60 * 60 * 24,
  },
  serviceAccount: {
    projectId: 'my-app-95444',
    clientEmail: 'firebase-adminsdk-d8wg1@my-app-95444.iam.gserviceaccount.com',
    privateKey: ('-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCsWpXUWgs+mPEW\nBz28lu243zi5bqL/5QyRVFDd+cvXVaKDoGWEy+fU+GxJKVvcadBKfYOq8LixSKTY\nuPe5QcfxWtj2fUUgsrZJsF9yReuLKfak9UyBzly5yztIAw9a2bpCuNPmrRzyZt6o\nWcNKl155YjKbX1iYpgut5i+JJ2gET0wu2z8ub9Z88rpANvHGPo8NhB2jTNmKoaqy\nAQRJY5yrTy8rvQhzu1C4WHB0pGVta0rntJMguY/XsyasoygDDSMeZGy3qXHJsyoF\nxAif311axGh/yik/+YvIo33+dTUVeSwkZmp9cxF2WfSfGP4fb+xT/d0lnLhvDwF1\nU+49KSO3AgMBAAECggEADszDuBv4HARbrDD4lvmKD3ZYYDclFz6YTHpzBaMHll9F\nUnKZhRFSJpi81uN1GE41xpyHvxjNcA71Qm7pRsBkgBzCK+UoSt1NurIpRmsra/D+\nIiTpaiDjfkjHUTDoedXfoQ8bkxLwCcvV+Gemb2dKg4Q9JQstuzeDu6EPTLW6wHPY\nxyQsyNplLR23YeYXLgBYQdxgY9VvoafDJUbwKDfy1RIl0OAjSmWDchEM/8O9WrCX\n+PLK+9AeMcncvI945QwYOTU9/fLYU+dGB1uTsSWs3LeL8+sK36O/nF5KNIO+U7bx\nKTmscHpMITMuF+p7gppXvuWgJJs3jQiYeXKhatSfcQKBgQDt2Endx0uxD87F+ppe\n2hCR7OLXW+OSGicmayyWizgSSRSwsGLVdup0GLR5FF/nHnqucBBGLajM3nnY+VFP\nG3VH9AOlTQBxIHq/+u9M5HzRV1eQtiOfqqqC/lJKbTBic9LO2k8v680yW2QXvJ0r\nKVQ83WJ9k1XNT6zdZGlRQ9mwowKBgQC5gopu1uJLHUYaiZkH/d6fxb+T5MdJMO3h\nKBMfHqipzFuWtXRSNLIZeNeYNchYdZKLQayHPX3iBS0R8ZO5OE1bu+qBN33BmI2A\ngP7rJ3+IZIl4oOs+/B/Zh6bE/W2rxWuNJ9N2vICiC0njS2A13K1Bigz6e1xmm5CL\ngjDrcQUt3QKBgQCHlQcujMBiM9+sThoXvfk6Ji59k50bmRr+NJQbUUtqaQyJWFNO\n2lX2Tmr6ppmw11gZ/jnYt4iFGMGe5SjrjnyBwuEdJtL8qgYvUC1/yLQ6Za6+CIYw\nK4q915ozYSD2zo26awo/CA1WCnD5cwSpKQsjExRk/0snGacyIV5D/AipPwKBgBIc\n8+VUp+3Lou+uZbnJCPayuTz4hpjX5TIp1owgUzmZEYxKlVv9dzJTgUGEZtZ0TGW6\neN0PnP33oWnyG4lnPO5rD7+kKmw/t/lHHxzY03P+1QlpNO8GcRmtTBRJ5m5yLUkw\nDU63oxuvXHyL/I3lySjwEMpYRzJhmCB3Cs3CUE4lAoGBANdUIlOV8/TkeS0jp2M/\nfIiVVOllCuArhKKWhUr4b/mkcb1hoHNL5k6VqzqM8EjQmQXyBBorBYEtA+jbRYfU\nVRwueAJU43XSFJCqBpTy6zMq0lIHO4zoQtxo7LbDrHA+u4RE2EHHiE9znesSiWF+\nmR14fjyutABAemVws5b7JgrK\n-----END PRIVATE KEY-----\n').replace(/\\n/g, "\n"),
  }
};


export const clientConfig = {
  apiKey: 'AIzaSyA2YFJviFzrFXTSNr3HCTYnTjBVk5_q0FM',
  authDomain: 'my-app-95444.firebaseapp.com',
  projectId: 'my-app-95444',
  storageBucket: 'my-app-95444.firebasestorage.app',
  messagingSenderId: '627163848473',
  appId: '1:627163848473:web:b62c1a20b1242840602f88',
  measurementId: 'G-6CL8N4SPXW'
};


