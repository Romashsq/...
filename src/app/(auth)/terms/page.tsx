import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="w-full max-w-2xl">
      <div className="mb-6">
        <Link href="/register">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </Link>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
        <h1 className="font-syne text-3xl font-bold text-white">
          Terms of Service
        </h1>
        <p className="text-gray-400 text-sm">
          Last updated: March 2025
        </p>

        {[
          {
            title: "1. Acceptance of Terms",
            text: "By using VibeCode Academy, you agree to these terms. If you do not agree — please do not use the platform.",
          },
          {
            title: "2. Use of the Platform",
            text: "You agree to use the platform for lawful purposes only. Distributing, selling, or sharing access to course materials with third parties is prohibited.",
          },
          {
            title: "3. Intellectual Property",
            text: "All course materials — videos, texts, code, images — are the property of VibeCode Academy. Personal use for educational purposes is permitted.",
          },
          {
            title: "4. Personal Data",
            text: "We collect only the data required to operate the platform: email, name, and progress data. Data is not shared with third parties.",
          },
          {
            title: "5. Changes to Terms",
            text: "VibeCode Academy reserves the right to modify these terms. We will notify you of significant changes by email.",
          },
        ].map((section) => (
          <div key={section.title} className="space-y-2">
            <h2 className="font-syne font-semibold text-white text-lg">
              {section.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">{section.text}</p>
          </div>
        ))}

        <div className="pt-4 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            Questions? Contact us at{" "}
            <span className="text-emerald-400">support@vibecode.academy</span>
          </p>
        </div>
      </div>
    </div>
  );
}
