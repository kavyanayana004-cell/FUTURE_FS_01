import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [key, setKey] = useState("");

    return (
        <input
        placeholder="Search leads..."
        value={key}
        onChange={(e) => {
            setKey(e.target.value);
            onSearch(e.target.value);
        }}
        />
    );
}