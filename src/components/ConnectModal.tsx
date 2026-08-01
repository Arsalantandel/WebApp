import React, { useState, useEffect } from 'react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServices?: string[];
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose, initialServices = [] }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>(initialServices);
  const [budget, setBudget] = useState('$50k – $100k');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServices.length > 0) {
      setSelectedServices(initialServices);
    }
  }, [initialServices]);

  if (!isOpen) return null;

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    onClose();
  };

  const servicesList = ['Strategy', 'Craft', 'Spatial Architecture', 'Atmospheric Audio'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-2xl animate-fadeIn">
      <div className="liquid-glass-heavy w-full max-w-2xl rounded-3xl p-6 sm:p-10 border-white/20 relative max-h-[90vh] overflow-y-auto shadow-2xl text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <span className="text-xs font-semibold text-white/50 uppercase tracking-[0.2em] block mb-2">
                Initiate Dialogue
              </span>
              <h3 className="font-display text-4xl text-white mb-2">
                Connect with <em className="italic font-display font-normal">Studio Alpha</em>
              </h3>
              <p className="text-white/60 text-sm">
                Share your vision. We respond to inquiries within 24 operational hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-white/70 block mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g., Julian Vance"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-white/70 block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="julian@brand.com"
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-white/70 block mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="E.g., Monolith Dynamics"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-white/70 block mb-2">
                  Requested Capabilities
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((srv) => {
                    const isSel = selectedServices.includes(srv);
                    return (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => toggleService(srv)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          isSel
                            ? 'bg-white text-black font-semibold'
                            : 'bg-white/5 text-white/70 border border-white/10 hover:border-white/30'
                        }`}
                      >
                        {srv} {isSel ? '✓' : '+'}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-white/70 block mb-2">
                  Budget Expectation
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                >
                  <option value="$25k – $50k">$25k – $50k</option>
                  <option value="$50k – $100k">$50k – $100k</option>
                  <option value="$100k – $250k">$100k – $250k</option>
                  <option value="$250k+">$250k+</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-white/70 block mb-2">
                  Project Brief
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your objectives, timeline, and key vision..."
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-white/60 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-white text-black px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform cursor-pointer shadow-lg"
                >
                  Submit Brief →
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white text-black mx-auto flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">check</span>
            </div>
            <h3 className="font-display text-4xl text-white">Brief Received</h3>
            <p className="text-white/70 text-base max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Studio Alpha partners have been notified. We will review your briefing and reach out shortly.
            </p>
            <button
              onClick={resetForm}
              className="bg-white text-black px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-widest hover:scale-105 transition-transform cursor-pointer"
            >
              Return to Studio
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
