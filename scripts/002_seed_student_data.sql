-- Insert demo student user data into students table
-- Note: The user_id should match an actual Supabase auth user
-- For demo purposes, we'll insert sample data

INSERT INTO public.courses (course_code, course_name, credits, instructor, department, semester, description)
VALUES
  ('CS301', 'Data Structures', 4, 'Dr. Rajesh Kumar', 'CSE', 6, 'Study of various data structures and algorithms'),
  ('CS302', 'Database Management Systems', 4, 'Prof. Priya Singh', 'CSE', 6, 'Introduction to DBMS and SQL'),
  ('CS303', 'Web Development', 3, 'Mr. Vikram Patel', 'CSE', 6, 'Frontend and backend web development'),
  ('CS304', 'Software Engineering', 4, 'Dr. Amit Sharma', 'CSE', 6, 'Software development lifecycle and methodologies'),
  ('CS305', 'Machine Learning', 4, 'Prof. Neha Gupta', 'CSE', 6, 'Introduction to ML and AI concepts'),
  ('EC301', 'Digital Signal Processing', 4, 'Dr. Rohan Singh', 'ECE', 6, 'Signal processing and filtering techniques'),
  ('EC302', 'Microcontrollers', 3, 'Prof. Divya Sharma', 'ECE', 6, 'Microcontroller programming and embedded systems'),
  ('ME301', 'Thermodynamics II', 4, 'Dr. Suresh Kumar', 'ME', 6, 'Advanced thermodynamic concepts'),
  ('CE301', 'Structural Analysis', 4, 'Prof. Anil Verma', 'CE', 6, 'Analysis of structural systems'),
  ('EE301', 'Power Systems', 4, 'Dr. Pradeep Kumar', 'EE', 6, 'Electrical power generation and distribution');

INSERT INTO public.notices (title, content, category, department, posted_by, is_published)
VALUES
  ('Semester 6 Examination Schedule Released', 'The examination schedule for Semester 6 has been released. Exams will commence from March 1st, 2024. Students are requested to refer to the official website for detailed information.', 'academic', 'CSE', 'Academic Office', true),
  ('Placement Drive - TCS Hiring', 'TCS will be conducting a recruitment drive on February 15th, 2024. All eligible students are encouraged to participate. For registration, please visit the placement cell office.', 'placement', NULL, 'Placement Cell', true),
  ('Campus Maintenance Notice', 'The North Campus will undergo scheduled maintenance from February 10-12. Students are requested to make alternate arrangements if needed.', 'general', NULL, 'Administration', true),
  ('Winter Holiday Notification', 'Winter holidays have been extended till January 20th due to unforeseen circumstances. Classes will resume on January 22nd, 2024.', 'event', NULL, 'Academic Office', true),
  ('Anti-Ragging Cell Awareness', 'The Anti-Ragging Cell reminds all students about the zero-tolerance policy on ragging. Any complaints can be reported confidentially.', 'urgent', NULL, 'Anti-Ragging Cell', true),
  ('Library Extended Hours', 'The library will remain open till 10 PM during examination period to support student studies.', 'academic', NULL, 'Library', true);
