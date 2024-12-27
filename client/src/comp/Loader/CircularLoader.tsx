import CircularProgress from "@mui/material/CircularProgress";

const CircularLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "34vh",
      }}
    >
      <CircularProgress size="3rem" />
    </div>
  );
};
export default CircularLoader;
