import UseFetch from ".";

const UseFetchHookTest = () => {
  const { data, error, pending } = UseFetch(
    `https://dummyjson.com/products`,
    {}
  );
  //   console.log(data, error, pending);
  return (
    <>
      <div>
        <h1>Use Fetch Hook Test</h1>
        {pending ? <h3>Pending! Please wait</h3> : null}
        {error ? <h3>Error! Please wait</h3> : null}
        {data && data.products && data.products.length
          ? data.products.map((productItem) => (
              <p key={productItem.key}>{productItem.title}</p>
            ))
          : null}
      </div>
    </>
  );
};

export default UseFetchHookTest;
