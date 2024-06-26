import axios from 'axios';

const logActivity = async (Activity, Username) => {
  try {
    await axios.post("http://localhost:5000/api/activitylogs", {
      Activity,
      timestamp: new Date().toISOString(),
      Username,
    });
    console.log('Activity logged successfully');
  } catch (error) {
    console.error('Error logging activity:', error);
    throw error; // Optionally re-throw the error to handle it where it's called
  }
};

export default logActivity;
