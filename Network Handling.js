// Show a loading indicator while fetching data
const fetchData = async () => {
  try {
    setLoading(true);
    const response = await axios.get('/api/data');
    // Handle the response
  } catch (error) {
    // Handle errors
  } finally {
    setLoading(false);
  }
};
