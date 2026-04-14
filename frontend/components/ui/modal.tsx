"use client";

import { ReactNode, useEffect } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ open, title, description, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-md"
      role="presentation"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="surface-card w-full max-w-2xl rounded-[28px] p-6 md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="grid gap-2">
            <h3
              id="modal-title"
              className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-white"
            >
              {title}
            </h3>
            {description ? <p className="text-slate-300">{description}</p> : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
            aria-label="Fechar modal"
          >
            ×
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
