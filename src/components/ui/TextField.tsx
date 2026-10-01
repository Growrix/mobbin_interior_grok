"use client";

import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type FieldState = "idle" | "error";

type SharedProps = {
  label: string;
  hint?: string;
  error?: string;
  state?: FieldState;
  id: string;
};

export type TextInputProps = SharedProps &
  InputHTMLAttributes<HTMLInputElement> & {
    multiline?: false;
  };

export type TextAreaProps = SharedProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    multiline: true;
  };

export type TextFieldProps = TextInputProps | TextAreaProps;

export function TextField(props: TextFieldProps) {
  const {
    label,
    hint,
    error,
    state = "idle",
    id,
    className = "",
    multiline,
    ...controlProps
  } = props as TextFieldProps & { multiline?: boolean };
  const describedBy = [hint ? `${id}-hint` : null, error ? `${id}-error` : null]
    .filter(Boolean)
    .join(" ");

  const fieldClass = `an-field__control ${state === "error" ? "an-field__control--error" : ""} ${className}`.trim();

  return (
    <div className="an-field">
      <label className="an-field__label" htmlFor={id}>
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          className={fieldClass}
          aria-invalid={state === "error" || undefined}
          aria-describedby={describedBy || undefined}
          {...(controlProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          className={fieldClass}
          aria-invalid={state === "error" || undefined}
          aria-describedby={describedBy || undefined}
          {...(controlProps as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {hint ? (
        <p className="an-field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="an-field__error" id={`${id}-error`} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
