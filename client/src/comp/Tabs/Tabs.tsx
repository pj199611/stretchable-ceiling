import Grid from "@mui/material/Grid";
import { FlexRowCenter } from "@/components/flex-box";
import { FilterButton } from "./styles";

const Tabs = ({ allClasses, activeClass, setActiveClass }: any) => {
  // const filtered = data.filter((val) => val.class === filteredKey);
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <FlexRowCenter gap={1} flexWrap="wrap">
          {allClasses.map((val: string, index: number) => (
            <FilterButton
              disableRipple
              key={index}
              onClick={() => setActiveClass(val)}
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
