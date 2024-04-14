import { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  console.log({ url: req.url });
}

export const config = {
  matcher: ["/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)"],
};
