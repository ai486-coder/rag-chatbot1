// app/api/auth/[...nextauth]/route.ts

export const runtime = "nodejs"; // ✅ Prevents Edge Runtime build errors

export { GET, POST } from '@/app/(auth)/auth';
