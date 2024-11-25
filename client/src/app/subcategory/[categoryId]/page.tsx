import Card from "@/comp/card/subCategory";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useTheme from "@mui/material/styles/useTheme";
import data from "@/data/data/subcategories";
// import Card from "@/comp/card/subcategoty";

export default function Home() {
  if (!data || !data.subCategories?.length) return "No Data Found";
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {data.subCategories.map((val) => (
        <Link href={`/products/${val?.subcategory_id}`}>
          <Card
            title={val.name}
            description={val.description}
            imageUrl={val.imageUrl}
            additionalDetails={`₹ ${val.fixedPrice} ${val.priceDetails}`}
          />
        </Link>
      ))}
    </div>
  );
  // return (
  //   <div
  //     style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
  //   >
  //     <Card
  //       title="A Ceiling"
  //       description="Discover the most beautiful ceiling designs."
  //       imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
  //       link="/login"
  //     />
  //     <Card
  //       title="B Ceiling"
  //       description="Explore breathtaking mountain landscapes."
  //       imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJA32WU4rBpx7maglqeEtt3ot1tPIRWptxA&s"
  //       link="/signup"
  //     />
  //     <Card
  //       title="C Ceiling"
  //       description="The best urban exploration experiences."
  //       imageUrl="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
  //       link="#"
  //     />
  //   </div>
  // );
}

// import Link from "next/link";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
// import useTheme from "@mui/material/styles/useTheme";
// import data from "@/data/data/subcategories";
// import Card from "@/comp/card/subcategoty";

// export default function SubCategoryPage() {
//   console.log("data");
//   console.log(data);
//   if (!data || !data.subCategories?.length) return "No Data Found";
//   return (
//     <div
//       style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//     >
//       <div className="pt-2">
//         <Container>
//           <Grid container spacing={2}>
//             <Grid item>
//               {data.subCategories.map((val) => (
//                 <Link href={`/products/${val?.subcategory_id}`}>
//                   <Card
//                     name={val.name}
//                     description={val.description}
//                     imageUrl={val.imageUrl}
//                     fixedPrice={val.fixedPrice}
//                     minPrice={val.minPrice}
//                     maxPrice={val.maxPrice}
//                   />
//                 </Link>
//               ))}
//             </Grid>
//           </Grid>
//         </Container>
//       </div>
//     </div>
//   );
// }
