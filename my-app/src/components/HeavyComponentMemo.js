import React from "react";
import useLogger from "../hooks/useLogger";

function HeavyComponent({ count }) {
    useLogger("HeavyComponentMemo", { count });

    const now = performance.now();
    while (performance.now() - now < 100) { }

    return <div>Heavy Component render with count: {count}</div>;
}

export default React.memo(HeavyComponent);
