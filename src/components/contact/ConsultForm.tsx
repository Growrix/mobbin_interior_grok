"use client";

import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

export function ConsultForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>(
    {}
  );

  const isDisabled = status === "submitting" || status === "success";

  const summary = useMemo(() => {
    if (status === "success") {
      return "Thank you — we received your enquiry (demo success state).";
    }
    if (status === "error") {
      return "Something went wrong while sending. Please try again.";
    }
    return null;
  }, [status]);

  function validate(next: FormValues) {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};
    if (!next.name.trim()) {
      nextErrors.name = "Please add your name.";
    }
    if (!next.email.trim()) {
      nextErrors.email = "Email helps us reply.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!next.message.trim()) {
      nextErrors.message = "Tell us a little about your space.";
    }
    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      if (values.email.toLowerCase().includes("fail")) {
        throw new Error("Simulated failure");
      }
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="an-consult-form" onSubmit={handleSubmit} noValidate>
      {summary ? (
        <p
          className={`an-form-banner ${status === "success" ? "is-success" : "is-error"}`}
          role="status"
          aria-live="polite"
        >
          {summary}
        </p>
      ) : null}

      <div className="an-consult-form__grid">
        <TextField
          id="consult-name"
          name="name"
          label="Name"
          autoComplete="name"
          value={values.name}
          disabled={isDisabled}
          state={errors.name ? "error" : "idle"}
          error={errors.name}
          onChange={(event) =>
            setValues((current) => ({ ...current, name: event.target.value }))
          }
        />
        <TextField
          id="consult-email"
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          value={values.email}
          disabled={isDisabled}
          state={errors.email ? "error" : "idle"}
          error={errors.email}
          hint="Use an address containing “fail” to preview the error state."
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
        />
        <TextField
          id="consult-phone"
          name="phone"
          type="tel"
          label="Phone (optional)"
          autoComplete="tel"
          value={values.phone}
          disabled={isDisabled}
          onChange={(event) =>
            setValues((current) => ({ ...current, phone: event.target.value }))
          }
        />
        <TextField
          id="consult-type"
          name="projectType"
          label="Project type"
          placeholder="Residential refresh, full home, commercial…"
          value={values.projectType}
          disabled={isDisabled}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              projectType: event.target.value,
            }))
          }
        />
      </div>

      <TextField
        id="consult-message"
        name="message"
        label="Tell us about the space"
        multiline
        value={values.message}
        disabled={isDisabled}
        state={errors.message ? "error" : "idle"}
        error={errors.message}
        onChange={(event) =>
          setValues((current) => ({ ...current, message: event.target.value }))
        }
      />

      <div className="an-consult-form__actions">
        <Button type="submit" loading={status === "submitting"} disabled={isDisabled}>
          Send enquiry
        </Button>
        <Button
          type="button"
          variant="ghost"
          disabled={status === "submitting"}
          onClick={() => {
            setValues(initialValues);
            setErrors({});
            setStatus("idle");
          }}
        >
          Reset form
        </Button>
      </div>
    </form>
  );
}
