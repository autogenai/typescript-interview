import { FormEvent } from "react";

export function SummariseForm() {
    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        // TODO
        event.preventDefault();
    }

    return (          
        <form className="mr-4 w-1/2 bg-white rounded-md border border-neutral-200 p-4" onSubmit={handleSubmit}>
            <label className="block mb-4">
                <span className="block font-medium mb-4">Text to summarise</span>
                <textarea className="border border-neutral-400 p-4 w-full rounded-md h-[360px] resize-none"/>
            </label>
            <button type="submit" className="p-3 bg-neutral-800 rounded-md text-white font-medium hover:bg-neutral-900">Summarise</button>
        </form>
    )
}