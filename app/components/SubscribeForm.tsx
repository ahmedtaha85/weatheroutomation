'use client';

import { useState } from 'react';
import { subscribe } from '../actions/subscribe';

export default function SubscribeForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);

    const result = await subscribe(formData);

    if (result.success) {
      setSuccess(true);
      setName('');
      setEmail('');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-center">
        <p className="text-green-700 font-bold">Waad ku mahadsan tahay!</p>
        <p className="text-green-600 text-sm">Fadlan hubi email-kaaga si aad u xaqiijiso diiwaangelinta.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
        required
        disabled={loading}
        className="w-full p-3 border rounded-xl"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
        disabled={loading}
        className="w-full p-3 border rounded-xl"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full p-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition"
      >
        {loading ? 'Processing...' : 'Subscribe'}
      </button>
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </form>
  );
}