import PaginatedItems from "./components/PaginatedItems";

import { useQuery } from "react-query";

export default function App() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      <h1 className="text-center text-2xl font-bold py-8">
        Pagination Example
      </h1>
      <PaginatedItems items={data} itemsPerPage={10} />
    </div>
  );
}
