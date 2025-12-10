-- Create students table
create table if not exists public.students (
  id uuid primary key references auth.users(id) on delete cascade,
  student_id text unique not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  department text not null,
  year integer not null,
  semester integer not null,
  cgpa numeric(3,2) default 0.00,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create courses table
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  course_code text unique not null,
  course_name text not null,
  credits integer not null,
  instructor text not null,
  department text not null,
  semester integer not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create attendance table
create table if not exists public.attendance (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  date date not null,
  status text not null check (status in ('present', 'absent', 'late')),
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create results table
create table if not exists public.results (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  course_id uuid not null references public.courses(id) on delete cascade,
  semester integer not null,
  marks numeric(5,2) not null,
  grade text not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Create notices table
create table if not exists public.notices (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  category text not null check (category in ('academic', 'placement', 'event', 'urgent', 'general')),
  department text,
  posted_by text not null,
  is_published boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable Row Level Security
alter table public.students enable row level security;
alter table public.courses enable row level security;
alter table public.attendance enable row level security;
alter table public.results enable row level security;
alter table public.notices enable row level security;

-- RLS Policies for students table
create policy "Students can view their own data"
  on public.students for select
  using (auth.uid() = id);

create policy "Students can update their own data"
  on public.students for update
  using (auth.uid() = id);

-- RLS Policies for courses table (students can view all courses)
create policy "Students can view all courses"
  on public.courses for select
  using (true);

-- RLS Policies for attendance table
create policy "Students can view their own attendance"
  on public.attendance for select
  using (student_id = (select id from public.students where id = auth.uid()));

-- RLS Policies for results table
create policy "Students can view their own results"
  on public.results for select
  using (student_id = (select id from public.students where id = auth.uid()));

-- RLS Policies for notices table (all authenticated users can view published notices)
create policy "Students can view published notices"
  on public.notices for select
  using (is_published = true);
