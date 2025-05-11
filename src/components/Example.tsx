import { gql, useQuery } from "@apollo/client";

const GET_BIRDS = gql`
  query GetBirds {
    birds {
      id
      english_name
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

  return (
    <div>
      {data &&
        data.birds.map((bird: any) => (
          <div key={bird.id}>
            <h2>{bird.english_name}</h2>
          </div>
        ))}
    </div>
  );
};
