// Assuming you have a state like this
const [currentPage, setCurrentPage] = useState(1);

// Fetch data based on the current page
const fetchData = async () => {
  const response = await axios.get(`/api/data?page=${currentPage}`);
  // Handle the response
};

// Implement a function to load more data
const loadMore = () => {
  setCurrentPage((prevPage) => prevPage + 1);
  fetchData();
};

// Render a button or trigger to load more
<button onClick={loadMore}>Load More</button>
