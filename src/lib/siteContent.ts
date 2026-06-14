export const siteContent = {
  meta: {
    title: "Piano School Kanagawa",
    description: "Learn piano at your own pace, at any age. Personalized instruction in a warm, encouraging environment in Kanagawa. From beginners to advanced students, everyone is welcome.",
  },
  
  header: {
    brandName: "Piano School Kanagawa",
    nav: [
      { label: "About", href: "#about" },
      { label: "Courses", href: "#courses" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    cta: {
      text: "Book Trial",
      href: "#contact",
    },
  },

  hero: {
    badge: "Welcome to Piano School Kanagawa",
    headline: {
      main: "Learn piano at your own pace,",
      emphasis: "at any age",
    },
    subtext: "From five-year-olds taking their first lesson to adults rediscovering the joy of music — everyone is welcome here. Personalized instruction in a warm, encouraging environment.",
    cta: {
      primary: {
        text: "Book your trial lesson →",
        href: "#contact",
      },
      secondary: {
        text: "Learn more ↓",
        href: "#about",
      },
    },
    image: {
      src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=1600&q=80",
      alt: "Piano teacher and student in a welcoming studio in Kanagawa",
    },
  },

  about: {
    overline: "About the School",
    headline: "A place where mistakes are part of the process",
    paragraphs: [
      "Piano School Kanagawa was founded on a simple belief: anyone can learn to play piano with the right guidance and encouragement. Whether you're a parent looking for your child's first music teacher or an adult who's always wanted to try, you'll find a supportive space here.",
      "Our teaching style is patient, personalized, and focused on building confidence alongside technique. Every student progresses at their own pace, and every small victory is celebrated. We're not about pressure or perfection — we're about the joy of making music.",
    ],
    features: [
      "Personalized lesson plans for every student",
      "Flexible scheduling around your life",
      "Supportive recital opportunities twice a year",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80",
      alt: "Piano instructor at Piano School Kanagawa",
    },
  },

  courses: {
    headline: "Courses for every level",
    subtext: "Whether you're just starting out or refining your skills, we have a program that fits your goals and schedule.",
    items: [
      {
        icon: "Baby",
        title: "Children's Piano (Ages 5–12)",
        description: "A gentle introduction to music that builds confidence and foundational skills. Lessons are playful, patient, and designed to spark a lifelong love of piano.",
        highlights: [
          "30-minute lessons",
          "Fun repertoire and games",
          "Performance opportunities",
        ],
      },
      {
        icon: "GraduationCap",
        title: "Teen & Adult Piano",
        description: "It's never too late to start. Whether you're a complete beginner or picking up where you left off, lessons are tailored to your goals and learning style.",
        highlights: [
          "45 or 60-minute lessons",
          "Flexible repertoire choice",
          "No pressure, just progress",
        ],
      },
      {
        icon: "Music",
        title: "Advanced & Exam Prep",
        description: "For students working toward ABRSM, Trinity, or other music exams, or simply looking to deepen their technical and artistic skills.",
        highlights: [
          "60-minute intensive lessons",
          "Exam technique coaching",
          "Performance preparation",
        ],
      },
    ],
  },

  testimonials: {
    headline: "What our students say",
    subtext: "Hear from the people who make our studio a joyful place to learn.",
    items: [
      {
        quote: "My daughter started with no musical experience and was nervous at first. Within a few weeks, she was playing simple songs and asking to practice every day. The teacher's patience and encouragement made all the difference.",
        author: "Yuki M.",
        role: "Parent of a 7-year-old student",
      },
      {
        quote: "I always thought I was too old to learn piano. Starting at 42 felt intimidating, but the lessons are so personalized and judgment-free. I'm finally playing the pieces I've always loved, and it brings me so much joy.",
        author: "Takeshi H.",
        role: "Adult student, 1 year",
      },
      {
        quote: "The recitals are a highlight for our family. It's such a warm, supportive environment — even the youngest students feel celebrated. Our son has grown so much in confidence.",
        author: "Aiko S.",
        role: "Parent of a 9-year-old student",
      },
    ],
  },

  contact: {
    headline: "Ready to start?",
    subtext: "Book your trial lesson and discover the joy of learning piano in a supportive, welcoming space. We can't wait to meet you.",
    form: {
      fields: [
        {
          id: "name",
          label: "Your Name",
          type: "text",
          placeholder: "Yuki Tanaka",
          required: true,
        },
        {
          id: "email",
          label: "Email Address",
          type: "email",
          placeholder: "yuki@example.com",
          required: true,
        },
        {
          id: "phone",
          label: "Phone Number",
          type: "tel",
          placeholder: "+81 90-1234-5678",
          required: false,
        },
        {
          id: "age",
          label: "Student Age / Level",
          type: "text",
          placeholder: "e.g., 7 years old, beginner / Adult, returning player",
          required: true,
        },
        {
          id: "message",
          label: "Message (optional)",
          type: "textarea",
          placeholder: "Tell us a bit about your goals or any questions you have...",
          required: false,
        },
      ],
      submitText: "Request trial lesson →",
    },
    info: {
      email: "hello@pianoschoolkanagawa.jp",
      phone: "+81 (0)45-123-4567",
      address: "Yokohama, Kanagawa",
    },
  },

  footer: {
    brandName: "Piano School Kanagawa",
    tagline: "A welcoming place to learn piano, at any age.",
    sections: [
      {
        title: "Quick Links",
        links: [
          { label: "About", href: "#about" },
          { label: "Courses", href: "#courses" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "hello@pianoschoolkanagawa.jp", href: "mailto:hello@pianoschoolkanagawa.jp" },
          { label: "+81 (0)45-123-4567", href: "tel:+810451234567" },
          { label: "Yokohama, Kanagawa", href: "#" },
        ],
      },
    ],
    social: [
      { platform: "Instagram", href: "#", icon: "Instagram" },
      { platform: "Facebook", href: "#", icon: "Facebook" },
    ],
    copyright: `© ${new Date().getFullYear()} Piano School Kanagawa. All rights reserved.`,
  },
} as const;

export type SiteContent = typeof siteContent;
