import { gql, useQuery } from "@apollo/client";

const GET_BIRDS = gql`
  query GetBirds {
    birds {
      id
      english_name
      latin_name
      thumb_url
    }
  }
`;

export const Example = () => {
  const { loading, error, data } = useQuery(GET_BIRDS);

  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Data:", data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log("Response from server", data);
  return (
    <ul>
      {data.birds.map((bird: any) => (
        <li key={bird.id}>{bird.english_name}</li>
      ))}
    </ul>
  );
};

// ----------------------------------------
// import { gql } from "@apollo/client";
// import { useEffect } from "react";
// import { client } from "../lib/apollo";

// export const Example = () => {
//   useEffect(() => {
//     client
//       .query({
//         query: gql`
//           query Birds {
//             birds {
//               id
//               english_name
//             }
//           }
//         `,
//       })
//       .then((result) => console.log(result.data));
//   }, []);

//   return <div />;
// };
