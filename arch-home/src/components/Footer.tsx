import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

export function Footer() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // mock submit
    console.log("Form submitted:", form);

    alert("Thank you! We will get back to you.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <footer className="mt-24 border-t border-gray-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* CONTACTS */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500">
              Contact
            </h3>

            <p className="mt-4 text-lg font-medium">
              Husband Architects
            </p>

            <p className="mt-2 text-gray-600">
              Toronto, Ontario<br />
              Canada
            </p>

            <p className="mt-6 text-gray-600">
              <a href="mailto:hello@husband-arch.com" className="hover:text-black">
                hello@husband-arch.com
              </a>
              <br />
              <a href="tel:+10000000000" className="hover:text-black">
                +1 (000) 000-0000
              </a>
            </p>
          </div>

          {/* FORM */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-gray-500">
              Get in touch
            </h3>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-black focus:outline-none"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-black focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 text-sm focus:border-black focus:outline-none"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-neutral-800"
              >
                Send message
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 md:flex-row">
          <span>© {new Date().getFullYear()} Husband Architects</span>
          <span>Architecture · Design · Planning</span>
        </div>
      </div>
    </footer>
  );
}
