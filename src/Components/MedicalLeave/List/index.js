import React  from 'react';
import { getEntries } from '../sdk';
import { useQuery } from 'react-query';
import { ListGroup } from 'react-bootstrap';
const List = () => {
      const { data, isFetching, error, isLoading } = useQuery(
    'contentfulFetchUsers',
    function () {
      return getEntries();
    }
  );

  if (isLoading) {
    return (
      <div>
        <h2>
            Loading...
        </h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>
            An error has occurred...
        </h2>
      </div>
    );
  }
    return (
      <div>
        {isFetching && (
                <h2>Fetching data...</h2>
        )}
        <ListGroup users={data} />
      </div>
    )

}

export default List;