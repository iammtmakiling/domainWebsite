const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = 'https://www.whoisxmlapi.com/whoisserver/WhoisService';

export const getWhoisData = async (domainName) => {
  const url = `${baseURL}?apiKey=${apiKey}&domainName=${domainName}&outputFormat=JSON`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching WHOIS data:', error);
    throw error;
  }
};
