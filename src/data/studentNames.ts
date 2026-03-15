// 50 unique Indian names for student profiles
const studentNames: string[] = [
  "Ravi Kumar", "Sai Priya", "Aditya Reddy", "Kavya Sharma", "Harsha Vardhan",
  "Deepika Rao", "Venkat Sai", "Anjali Gupta", "Suresh Babu", "Meghana Reddy",
  "Rahul Verma", "Priya Lakshmi", "Karthik Naidu", "Swathi Devi", "Arjun Prasad",
  "Lavanya Kumari", "Nikhil Reddy", "Divya Sree", "Manoj Kumar", "Bhavani Shankar",
  "Srinivas Rao", "Pooja Reddy", "Vikram Singh", "Rekha Kumari", "Santosh Kumar",
  "Anusha Reddy", "Pavan Kalyan", "Sirisha Devi", "Rajesh Babu", "Mounika Sree",
  "Varun Teja", "Madhavi Latha", "Chandra Sekhar", "Padma Priya", "Gopal Krishna",
  "Jyothi Sree", "Naga Raju", "Sarada Devi", "Prasanth Kumar", "Keerthi Reddy",
  "Santhosh Reddy", "Ramya Sree", "Mahesh Babu", "Suma Latha", "Kishore Kumar",
  "Lakshmi Priya", "Dinesh Reddy", "Anitha Kumari", "Praveen Sai", "Tanuja Reddy",
];

export const getStudentName = (index: number): string => {
  return studentNames[(index - 1) % studentNames.length];
};

export const branchFullNames: Record<string, string> = {
  cd: "Computer Science & Data Science",
  cs: "Computer Science & Engineering",
  io: "Internet of Things",
  ai: "Artificial Intelligence & Machine Learning",
  ec: "Electronics & Communication Engineering",
  ee: "Electrical & Electronics Engineering",
  me: "Mechanical Engineering",
  ce: "Civil Engineering",
  it: "Information Technology",
};

export const getStudentYear = (joinYear: string): string => {
  const currentYear = new Date().getFullYear();
  const joined = 2000 + parseInt(joinYear);
  const year = currentYear - joined + 1;
  if (year <= 0 || year > 4) return "Alumni";
  const suffix = year === 1 ? "st" : year === 2 ? "nd" : year === 3 ? "rd" : "th";
  return `${year}${suffix} Year`;
};

export default studentNames;
