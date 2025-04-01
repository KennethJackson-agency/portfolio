import React from "react";

function Frame({
    tag,
    frameContainerStyle,
    tagStyle,
    frameStyle,
    style = {},
    children,
}) {
    return (
        <div className={frameContainerStyle}>
            <span className={tagStyle} style={{ backgroundColor: style.frameColor }}>{tag}</span>
            <div className={frameStyle} style={{ borderColor: style.frameColor }}>{children}</div>
        </div>
    );
}

export default Frame;
