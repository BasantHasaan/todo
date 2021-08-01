import { useQuery } from '@apollo/client';
import TodosList from '../todo/TodosList';
import GraphCMSContent from '../db/graphcms';
import React  from 'react';


const Home = (res) => {
  const Client = new GraphCMSContent();
  const { error, data, loading, fetchMore } = useQuery(Client.fetchTodos(), {
    fetchPolicy: "cache-and-network"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
  return (
    <div className="home">
      { data && <TodosList data={data} />}
      <input
        type="button"
        value="load more"
        onClick={() => fetchMore({
          variables: {
            first: 10,
            last:2,
            // afterCursor: data.search.pageInfo.endCursor,
          }
          // No need for an updateQuery function, since the
          // field policy handles all Query.search updates.
        })}
      />
    </div>
  );
}
 
export default Home;