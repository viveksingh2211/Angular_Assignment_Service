import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ServiceDataService {
  person = [
    {
      id: '1',
      name: 'Alice Johnson',
      age: 28,
      image:
        'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais',
      location: 'Los Angeles, CA',
      technologies: ['Java', 'Spring Boot', 'Hibernate'],
      experience_years: 5,
      education: {
        degree: 'Master of Science in Computer Engineering',
        university: 'University of California, Los Angeles (UCLA)',
      },
      projects: [
        {
          name: 'E-commerce Platform',
          description:
            'Designed and implemented a scalable e-commerce platform using Java...',
          technologies_used: [
            'Java',
            'Spring Boot',
            'Hibernate',
            'MySQL',
            'Angular',
          ],
        },
      ],
      certifications: [
        {
          name: 'Certified Java Developer',
          authority: 'Java Certification Authority',
          date_earned: '2023-03-15',
        },
      ],
    },
    {
      id: '2',
      name: 'Michael Brown',
      age: 32,
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      location: 'Chicago, IL',
      technologies: ['C#', '.NET Core', 'ASP.NET MVC'],
      experience_years: 7,
      education: {
        degree: 'Bachelor of Science in Computer Engineering',
        university: 'University of Illinois at Urbana-Champaign',
      },
      projects: [
        {
          name: 'Inventory Management System',
          description:
            'Developed an inventory management system using C# and ASP.NET MVC...',
          technologies_used: ['C#', '.NET Core', 'ASP.NET MVC', 'SQL Server'],
        },
      ],
      certifications: [
        {
          name: 'Certified .NET Developer',
          authority: '.NET Certification Authority',
          date_earned: '2022-11-28',
        },
      ],
    },
    {
      id: '3',
      name: 'Emily Wilson',
      age: 27,
      image:
        'https://img.freepik.com/free-photo/smiley-handsome-man-posing_23-2148911841.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1712707200&semt=ais',
      location: 'Seattle, WA',
      technologies: ['Ruby', 'Ruby on Rails', 'JavaScript'],
      experience_years: 4,
      education: {
        degree: 'Bachelor of Science in Computer Science',
        university: 'University of Washington',
      },
      projects: [
        {
          name: 'Blog Platform',
          description: 'Built a blog platform using Ruby on Rails...',
          technologies_used: [
            'Ruby',
            'Ruby on Rails',
            'JavaScript',
            'PostgreSQL',
          ],
        },
      ],
      certifications: [
        {
          name: 'Certified Ruby Developer',
          authority: 'Ruby Certification Authority',
          date_earned: '2023-06-10',
        },
      ],
    },
    {
      id: '4',
      name: 'David Lee',
      age: 31,
      image:
        'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
      location: 'Austin, TX',
      technologies: ['Python', 'TensorFlow', 'Keras'],
      experience_years: 6,
      education: {
        degree: 'Master of Science in Artificial Intelligence',
        university: 'Carnegie Mellon University',
      },
      projects: [
        {
          name: 'Sentiment Analysis',
          description:
            'Implemented sentiment analysis using TensorFlow and Keras...',
          technologies_used: ['Python', 'TensorFlow', 'Keras'],
        },
      ],
      certifications: [
        {
          name: 'Certified TensorFlow Developer',
          authority: 'TensorFlow Certification Authority',
          date_earned: '2023-09-22',
        },
      ],
    },
    {
      id: '5',
      name: 'Sophia Martinez',
      age: 29,
      image:
        'https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.webp?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w=',
      location: 'Miami, FL',
      technologies: ['PHP', 'Laravel', 'Vue.js'],
      experience_years: 5,
      education: {
        degree: 'Bachelor of Science in Computer Science',
        university: 'Florida International University',
      },
      projects: [
        {
          name: 'Task Management App',
          description:
            'Developed a task management application using Laravel and Vue.js...',
          technologies_used: ['PHP', 'Laravel', 'Vue.js', 'MySQL'],
        },
      ],
      certifications: [
        {
          name: 'Certified PHP Developer',
          authority: 'PHP Certification Authority',
          date_earned: '2022-10-05',
        },
      ],
    },
  ];
  constructor(private router: Router) {}
  getOnePerson(id: string) {
    return this.person.find((s) => s.id === id);
  }
}
