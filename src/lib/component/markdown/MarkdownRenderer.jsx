import React from "react";
import ReactMarkdown from "react-markdown";

const components = {
    h1: ({ node, ...props }) => (
        <h1
            {...props}
            style={{
                fontSize: "2.5rem",
                fontWeight: "700",
                margin: "1.5em 0 0.5em",
                lineHeight: 1.2,
            }}
        />
    ),
    h2: ({ node, ...props }) => (
        <h2
            {...props}
            style={{
                fontSize: "2rem",
                fontWeight: "600",
                margin: "1.4em 0 0.5em",
                lineHeight: 1.3,
            }}
        />
    ),
    h3: ({ node, ...props }) => (
        <h3
            {...props}
            style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                margin: "1.3em 0 0.5em",
                lineHeight: 1.3,
            }}
        />
    ),
    p: ({ node, ...props }) => (
        <p
            {...props}
            style={{
                fontSize: "1rem",
                fontWeight: "400",
                margin: "1em 0",
                lineHeight: 1.5,
            }}
        />
    ),
    a: ({ node, href, ...props }) => (
        <a
            href={href}
            {...props}
            style={{
                color: "#1a0dab",
                textDecoration: "underline",
            }}
            target="_blank"
            rel="noopener noreferrer"
        />
    ),
    ul: ({ node, ...props }) => (
        <ul
            {...props}
            style={{
                margin: "1em 0",
                paddingLeft: "1.5em",
                listStyleType: "disc",
            }}
        />
    ),
    ol: ({ node, ...props }) => (
        <ol
            {...props}
            style={{
                margin: "1em 0",
                paddingLeft: "1.5em",
                listStyleType: "decimal",
            }}
        />
    ),
    blockquote: ({ node, ...props }) => (
        <blockquote
            {...props}
            style={{
                margin: "1em 0",
                paddingLeft: "1em",
                borderLeft: "4px solid #ccc",
                color: "#666",
                fontStyle: "italic",
            }}
        />
    ),
    code: ({ node, inline, className, children, ...props }) => {
        const style = inline
            ? {
                  padding: "0.2em 0.4em",
                  backgroundColor: "rgba(27,31,35,.05)",
                  borderRadius: "3px",
                  fontSize: "0.95em",
                  fontFamily: "monospace",
              }
            : {
                  display: "block",
                  backgroundColor: "#f6f8fa",
                  padding: "1em",
                  borderRadius: "5px",
                  fontSize: "0.9em",
                  fontFamily: "monospace",
                  overflowX: "auto",
                  margin: "1em 0",
              };

        return (
            <code {...props} style={style} className={className}>
                {children}
            </code>
        );
    },
    a: ({ node, ...props }) => (
        <a
            {...props}
            style={{
                color: "#1a0dab",
                textDecoration: "underline",
            }}
            target="_blank"
            rel="noopener noreferrer"
        />
    ),
};

export default function MarkdownRenderer({ content }) {
    return <ReactMarkdown components={components}>{content}</ReactMarkdown>;
}
