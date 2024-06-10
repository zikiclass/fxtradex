import Link from "next/link";

const DashboardPageNavigator = ({ text }) => {
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
      <Link href="dashboard" style={{ color: "#6648fe" }}>
        Dashboard
      </Link>
      <span style={{ color: "#777" }}>&gt; {text}</span>
    </div>
  );
};

export default DashboardPageNavigator;
