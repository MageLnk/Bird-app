import { gql, useQuery } from '@apollo/client';
// Components
import { BirdList } from './BirdList/BirdList';
import { HomeLoading } from './HomeLoading/HomeLoading';
import { SearchBirdBar } from './SearchBirdBar/SearchBirdBar';
// Styles
import styles from './Home.module.scss';
// GraphQL
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
// App
const Home = () => {
  const { loading, error, data } = useQuery(GET_BIRDS, {
    variables: { limit: 20 }
  });

  if (loading) return <HomeLoading />;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.birds) return <h1>No data found</h1>;

  return (
    <section className={styles.home}>
      <section className={styles.home__title}>
        <h1>Birds</h1>
      </section>

      <section className={styles.home__searchBirdBar}>
        <SearchBirdBar />
      </section>

      <section className={styles.home__birdList}>
        <BirdList birdsInformation={data} />
      </section>
    </section>
  );
};

export default Home;
