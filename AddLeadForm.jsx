import { useState } from "react";

export default function AddLeadForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        source: "Website"
    });

    const submit = (e) => {
        e.preventDefault();
        onAdd(form);
        setForm({
        name: "",
        email: "",
        source: "Website"
        });
    };

    return (
        <form onSubmit={submit}>
        <input
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
            setForm({ ...form, name: e.target.value })
            }
        />

        <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
            setForm({ ...form, email: e.target.value })
            }
        />

        <button type="submit">Add Lead</button>
        </form>
    );
}