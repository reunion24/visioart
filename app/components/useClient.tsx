import { useEffect } from 'react';

export const useClient = () => {
  useEffect(() => {
    // Run the following code only on the client-side
    // This code will be executed when the component is mounted on the client

    // Example: Fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Example: Add event listeners
    const handleClick = () => {
      console.log('Button clicked!');
    };

    document.addEventListener('click', handleClick);

    // Clean up the event listeners when the component is unmounted
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount
};
