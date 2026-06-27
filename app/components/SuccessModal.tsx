'use client';

import { useEffect } from 'react';

type SuccessModalProps = {
  message: string;
  onClose: () => void;
};

export default function SuccessModal({ message, onClose }: SuccessModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
    >
      <div
        className="glass-card rounded-2xl p-8 max-w-md w-full shadow-glow animate-scale-in relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-14 h-14 rounded-full bg-[#1157f2]/20 flex items-center justify-center mx-auto mb-5 text-2xl">
          ✓
        </div>
        <h3 id="success-modal-title" className="text-xl font-bold text-white text-center mb-4">
          You&apos;re Subscribed!
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line text-center mb-6">
          {message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-[#1157f2] text-white font-semibold hover:bg-[#0f4ad4] transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
