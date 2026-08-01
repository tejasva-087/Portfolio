type HighlightedTextProp = {
  children: string;
  color: string;
};

function HighlightedText({ children, color }: HighlightedTextProp) {
  return (
    <span
      style={{
        background: `linear-gradient(transparent 60%, ${color} 60%)`,
        padding: "0 2px",
      }}
    >
      {children}
    </span>
  );
}

export default HighlightedText;
