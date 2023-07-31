// Simulate fetching user data from an API
export default (req, res) => {
    // Replace the following line with your actual data fetching logic
    const data = { name: 'John Doe' };
    
    res.status(200).json(data);
  };
  