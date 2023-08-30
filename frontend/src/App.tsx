import { useState } from "react";
import { SummariseForm } from "./SummariseForm";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-neutral-100 min-h-screen">
            <main className="max-w-[1200px] m-auto pt-4">
                <h1 className="text-4xl font-light mb-6">AutogenAI Interview</h1>
                <div className="flex">
                    <SummariseForm />
                    <div>TODO</div>
                </div>
            </main>
        </div>
    );
}

export default App;
