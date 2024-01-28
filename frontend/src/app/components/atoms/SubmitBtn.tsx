"use Client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="bg-zinc-500 disabled:bg-zinc-500 transition text-white rounded py-2 px-3"
        >
            Add new product
        </button>
    )
}