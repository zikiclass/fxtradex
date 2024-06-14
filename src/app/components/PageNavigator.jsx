import Link from "next/link";

const PageNavigator = ({ text }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        alignItems: "center",
        marginTop: "5rem",
        marginBottom: "1.5rem",
        fontSize: "14px",
      }}
    >
      <Link href="/" style={{ color: "#6648fe" }}>
        Home
      </Link>
      <span className="pageTitleColor">&gt; {text}</span>
    </div>
  );
};

export default PageNavigator;
