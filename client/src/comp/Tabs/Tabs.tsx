import Grid from "@mui/material/Grid";
import { FlexRowCenter } from "@/components/flex-box";
import { FilterButton } from "./styles";

const Tabs = ({ allClasses, activeClass, onChange }: any) => {
  // const filtered = data.filter((val) => val.class === filteredKey);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <FlexRowCenter gap={1} flexWrap="wrap">
          {allClasses.map((val: string, index: number) => (
            <FilterButton
              disableRipple
              key={index}
              onClick={() => onChange(val)}
              selected={activeClass === val ? 1 : 0}
            >
              {val}
            </FilterButton>
          ))}
        </FlexRowCenter>
      </Grid>
    </Grid>
  );
};

export default Tabs;

// Added all here

// import Grid from "@mui/material/Grid";
// import { FlexRowCenter } from "@/components/flex-box";
// import { FilterButton } from "./styles";

// const Tabs = async ({ allClasses, activeClass, setActiveClass }: any) => {
//   // const filtered = data.filter((val) => val.class === filteredKey);
//   if (!allClasses?.length) return null;
//   return (
//     <Grid container spacing={4}>
//       <Grid item xs={12}>
//         <FlexRowCenter gap={1} flexWrap="wrap">
//           <FilterButton
//             disableRipple
//             key={-1}
//             onClick={() => setActiveClass("All")}
//             selected={activeClass === "All" ? 1 : 0}
//           >
//             All
//           </FilterButton>
//           {data.map((val: string, index: number) => (
//             <FilterButton
//               disableRipple
//               key={index}
//               onClick={() => setActiveClass(val)}
//               selected={activeClass === val ? 1 : 0}
//             >
//               {val}
//             </FilterButton>
//           ))}
//         </FlexRowCenter>
//       </Grid>
//     </Grid>
//   );
// };

// export default Tabs;
