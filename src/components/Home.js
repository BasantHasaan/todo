import { useQuery } from '@apollo/client';
import TodosList from '../todo/TodosList';
import GraphCMSContent from '../db/graphcms';
import React  from 'react';


const Home = (res) => {
  const Client = new GraphCMSContent();
  const { error, data, loading } = useQuery(Client.fetchTodos(), {
    fetchPolicy: "cache-and-network"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    
  return (
    <div className="home">
      { data && <TodosList data={data} />}
    </div>
  );
}
 
export default Home;