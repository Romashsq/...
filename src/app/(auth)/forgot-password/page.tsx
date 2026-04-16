"use client";

import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md">
      <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-2xl font-syne">Reset password</CardTitle>
          <CardDescription className="text-gray-400">
            Enter your email and we&apos;ll send you instructions
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-3 text-emerald-400 text-sm text-center">
            🚧 Password reset will be available soon
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gray-300 font-medium">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input
                type="email"
                placeholder="you@example.com"
                className="pl-10"
                disabled
              />
            </div>
          </div>

          <Button className="w-full" disabled size="lg">
            Send instructions
          </Button>

          <Link
            href="/login"
            className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
