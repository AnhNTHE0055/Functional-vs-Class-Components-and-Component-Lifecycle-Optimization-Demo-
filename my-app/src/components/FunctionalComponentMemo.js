import React from "react";
import useLogger from "../hooks/useLogger";

function FunctionalComponentMemo({ count, onAlert }) {
    useLogger("FunctionalComponentMemo", { count, onAlert });

    const now = performance.now();
    while (performance.now() - now < 500) { }

    return (
        <div>
            <div>Functional + Memo Component render with count: {count}</div>
            <button onClick={onAlert}>Call Parent Function</button>
        </div>
    );
}

export default React.memo(FunctionalComponentMemo);
