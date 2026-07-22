"use client";

import * as React from "react";

import { submitEnquiry } from "@/lib/api";

const inputClass =
  "w-full rounded-md border border-[#e6e2d8] bg-white px-3 py-2 text-sm text-navy focus:border-gold focus:outline-none";

export function EnquiryForm({ propertyId, propertyName }: { propertyId: string; propertyName: string }) {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [company, setCompany] = React.useState(""); // honeypot — real visitors never fill this
  const [submitting, setSubmitting] = React.useState(false);
  const [result, setResult] = React.useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (intent: "Enquiry" | "Schedule Visit") => {
    if (company) return; // honeypot tripped, silently drop
    if (!name.trim() || !phone.trim()) {
      setResult("error");
      return;
    }
    setSubmitting(true);
    setResult("idle");
    try {
      await submitEnquiry({ name, phone, email: email || undefined, message: message || undefined, propertyId, propertyName, intent });
      setResult("success");
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch {
      setResult("error");
    } finally {
      setSubmitting(false);
    }
  };

  if (result === "success") {
    return (
      <div className="rounded-xl border border-[#e6e2d8] bg-white p-6 text-center">
        <p className="font-semibold text-navy">Thank you! We&apos;ve received your enquiry.</p>
        <p className="mt-1 text-sm text-gray">Our team will reach out to you shortly.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#e6e2d8] bg-white p-6">
      <h3 className="font-bold text-navy">Interested in this property?</h3>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
      <input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
      <input placeholder="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
      <textarea placeholder="Message (optional)" value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className={inputClass} />
      {result === "error" && (
        <p className="text-xs font-medium text-rose-600">
          {!name.trim() || !phone.trim() ? "Name and phone are required." : "Something went wrong — please try again."}
        </p>
      )}
      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          disabled={submitting}
          onClick={() => handleSubmit("Enquiry")}
          className="flex-1 rounded-md bg-gold px-4 py-2.5 text-sm font-bold text-navy-dark disabled:opacity-60"
        >
          Send Enquiry
        </button>
        <button
          type="button"
          disabled={submitting}
          onClick={() => handleSubmit("Schedule Visit")}
          className="flex-1 rounded-md bg-navy px-4 py-2.5 text-sm font-bold text-white disabled:opacity-60"
        >
          Schedule a Visit
        </button>
      </div>
    </div>
  );
}
