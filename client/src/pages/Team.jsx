import { useState } from 'react';
import './PageStyles.css';
import './Team.css';

const leadership = [
  {
    name: 'Arjun Patel',
    title: 'President',
    slug: 'arjun-patel',
    bio: `My name is Arjun Patel and I am the President and a proud board member of Saintly Supplements. Currently, I am a senior in high school and I will be attending Emory University in the fall of 2026 with the intent of majoring in biology on the pre-medicine track. In my free time, I like to go to the gym, listen to music, and play volleyball and basketball with my friends. Throughout my high school years, I have valued volunteering and community service. At Gigi's Playhouse, a non-profit committed to embracing and providing resources for individuals with Down syndrome, I helped organize amusing holiday events and tutored math to children with Down Syndrome. While doing this, I witnessed firsthand how these individuals thrived when given equal opportunities. From this experience, I learned the importance of equity so everyone can receive access to important resources.\n\nThis pushed me to not just serve, but help lead efforts in expanding care for underserved groups, specifically veterans. I am beyond proud to advocate for Saintly Supplements because veterans deserve access to essential vitamins and support for their health. Spreading awareness for this cause allows me to give back to those who dedicated their lives for our country. Being a person who possesses a strong passion for helping disadvantaged groups, I feel honored to strengthen this passion through the mission and goals of Saintly Supplements.`,
  },
  {
    name: 'Arav Patel',
    title: 'Vice President of Finance & Development',
    slug: 'arav-patel',
    bio: `Hello my name is Arav Patel and I am the Vice President of Finance and Development and a board member of Saintly Supplements. I am currently a sophomore in college at the University of Florida majoring in business administration. Some of my interests are watching sports, traveling, and spending time with friends and family. Volunteering and community service have always been important to me as it allows me to make a real difference in the lives of others while also helping me grow as a person. Giving my time and effort to support people in need has taught me empathy, patience, and gratitude. I strive to use my skills to make a positive impact and inspire others to contribute to their communities as well.\n\nThe reason why I wanted to be part of Saintly Supplements is because I believe all people deserve to have access to these essential vitamins in support of their health. Helping raise awareness for this cause allows me to give back to the community and make a positive impact. From always having a passion towards volunteering and giving back to the community, I am privileged to boost this passion through the mission of Saintly Supplements.`,
  },
  {
    name: 'Simmon Chauhan',
    title: 'Vice President of Technology',
    slug: 'simmon-chauhan',
    bio: `My name is Simmon Chauhan, and I am proud to serve as the Vice President of Technology and Information for Saintly Supplements. I am currently a senior in high school and will be attending New York University's Stern School of Business in the fall of 2026, where I plan to major in finance and accounting. In my free time, I enjoy playing soccer, dancing bhangra, and mixing music, which allows me to express my creativity and stay connected to my community.\n\nThroughout high school, I have focused on leadership, mentorship, and service. I coach and teach younger students bhangra, helping build confidence, discipline, and teamwork. I have also helped create a technology startup that makes travel more practical and accessible by simplifying planning with innovative tools. These experiences have shaped my belief in using leadership and innovation to create meaningful impact.\n\nI am beyond proud to represent Saintly Supplements because I strongly believe that veterans deserve access to essential vitamins, health support, and reliable resources. Advocating for this cause allows me to give back to those who dedicated their lives to serving our country. Saintly Supplements not only reflects my interest in business and technology, but also my deeper commitment to helping underserved communities and expanding my impact through purposeful service.`,
  },
  {
    name: 'Hailee Patel',
    title: 'Vice President of Marketing & Co-Founder',
    slug: 'hailee-patel',
    bio: `Hi! My name is Hailee Patel, and I am the Vice President of Marketing and an esteemed board member, and co-founder of Saintly Supplements. I am dedicated to Saintly Supplements' mission because I strongly believe that the men and women who have served us deserve only the best. Our mission at Saintly Supplements is to give them the best with the most exemplary vitamins to preserve their health. A little about me is that I am in my sophomore year of high school. I enjoy expressing my creativity through drawing, dancing, and baking. I am an honored member of the community, and I made my mark by helping out at Gigi's Playhouse Down Syndrome Achievement Center in Tampa. Gigi's is a nonprofit company that embraces individuals with Down syndrome and provides programs to help participants build confidence. I volunteer at Gigi's cooking program, help with events, and one-on-one tutoring, where I have met so many wonderful and new people.\n\nThrough my experiences, and with the start of Saintly Supplements, I have found my passion in Business. I am excited to explore how entrepreneurship can create solutions that directly support veterans in maintaining their health and well-being.`,
  },
];

const directors = [
  {
    name: 'Ziva Tyagi',
    title: 'Social Media Director',
    slug: 'ziva-tyagi',
    bio: `Hi my name is Ziva, and I'm a high school student with a strong interest in science and art. I enjoy learning how things work and expressing myself creatively through art. I'm currently focused on my education and exploring career paths that allow me to help others and make a difference. In the future, I hope to pursue a career as a malpractice lawyer so I can stand up for others and help ensure fairness in the legal system.\n\nI'm especially proud to advocate for Saintly Supplements because my dad serves in the Army as a doctor, and I strongly believe veterans and service members deserve access to essential vitamins and support for their health and well-being. I'm passionate about learning, growing, and working toward a future where I can make a positive impact.`,
  },
  {
    name: 'Laila Patel',
    title: 'Content Director',
    slug: 'laila-patel',
    bio: `Hi, my name is Laila Patel, and I am a high school sophomore determined to make a positive impact on my community through volunteering. I am proud to be a member of Saintly Supplements, a non-profit organization dedicated to ensuring veterans receive the wellness support they deserve. In my free time, I enjoy drawing, playing volleyball, traveling, and volunteering. Through volunteering, I have been blessed to be able to learn from my experiences, while also giving my time and insight back into the community. As a part of an organization dedicated to working with students from multi-language backgrounds, helping them comprehend and master English has taught me the true value of giving back to my community. I am also proud to be a member of the National Charity League. Working alongside my mom while supporting and volunteering at local causes and philanthropies has taught me how rewarding it is to make a difference.\n\nAs I go through these valuable experiences, I hope to bring my passion for helping others and dedication to spreading awareness into my work with Saintly Supplements. I believe all of the veterans who bravely served our country deserve access to the crucial supplements and wellness support they need. Through this non-profit, I hope to pursue my interests in medicine, grow as a leader, and make an impact on the lives of veterans.`,
  },
  {
    name: 'Shivani Shah',
    title: 'Communications Director',
    slug: 'shivani-shah',
    bio: `Hi, my name is Shivani, and I'm a high school student who loves helping others and making a meaningful difference. Right now, I'm focused on maintaining good grades in school while staying actively involved in volunteering. I'm especially proud to advocate for Saintly Supplements because I believe everyone, including veterans, deserves access to essential supplements, vitamins, and resources that support their health and well-being. By spreading awareness for this cause, we can give back to the veterans who have supported and defended our country in times of need. They helped us, so it's important that we help them too.\n\nAt school, I've also joined clubs that allow me to volunteer more and support my local community. These experiences have helped me grow as an individual. In my spare time, I enjoy painting and photography, which allows me to express my creativity.`,
  },
  {
    name: 'Siya Shah',
    title: 'Brand Strategy Director',
    slug: 'siya-shah',
    bio: `My name is Siya Shah, and I am currently a junior in high school. Some of my favorite activities include Bollywood dance, going to the beach, and traveling. I have always been committed to helping others and participating in community service. Ever since I was young, my parents encouraged me to volunteer, whether it was assisting at a food pantry or cleaning up trash along the side of the road. Starting community service at an early age allowed me to understand why helping others is so important and taught me to never take anything for granted. Through serving my community year after year, I have learned the value of empathy, gratitude, and using my abilities to make a meaningful difference in the lives of others.\n\nThis understanding made me realize that even small acts of support for the less fortunate or for veterans can have a significant impact. Saintly Supplements provides essential vitamins to help veterans maintain their health, and having the opportunity to assist them is extremely meaningful to me. It is a way to honor and show gratitude to those who have served and protected our country. Being involved with Saintly Supplements will not only help others but also allow me to continue pursuing my passion for community service.`,
  },
];

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('');

const PREVIEW_WORDS = 60;

const MemberCard = ({ member }) => {
  const [expanded, setExpanded] = useState(false);
  const words = member.bio.split(' ');
  const truncated = words.length > PREVIEW_WORDS;

  return (
    <div className="member-card">
      <div className="member-photo-wrap">
        <img
          src={`/team/${member.slug}.jpeg`}
          alt={member.name}
          className="member-photo"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextSibling.style.display = 'flex';
          }}
        />
        <div className="member-initials" style={{ display: 'none' }}>
          {getInitials(member.name)}
        </div>
      </div>
      <div className="member-info">
        <div className="member-header">
          <h3>{member.name}</h3>
          <span className="member-title">{member.title}</span>
        </div>
        <div className="member-bio">
          <p>
            {expanded
              ? member.bio
              : truncated
                ? words.slice(0, PREVIEW_WORDS).join(' ') + '…'
                : member.bio}
            {truncated && (
              <button className="bio-toggle" onClick={() => setExpanded(!expanded)}>
                {expanded ? ' Read less' : ' Read more'}
              </button>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <main className="page team-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <div className="page-blob page-blob-1"></div>
          <div className="page-blob page-blob-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              Meet the Team
            </span>
            <h1>The People Behind the Mission</h1>
            <p>
              Saintly Supplements is powered by a passionate group of student leaders
              united by a single purpose — ensuring veterans have access to the health
              support they deserve.
            </p>
          </div>
        </div>
        <div className="page-wave">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C320,100 640,0 960,60 C1280,120 1440,40 1440,40 L1440,120 L0,120 Z" fill="var(--soft-white)"/>
          </svg>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Leadership</h2>
            <p>Our President and Vice Presidents guide the mission forward.</p>
          </div>
          <div className="team-grid team-grid-leadership">
            {leadership.map((member) => (
              <MemberCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Directors ── */}
      <section className="section bg-warm">
        <div className="container">
          <div className="section-header">
            <h2>Directors</h2>
            <p>The dedicated directors who drive our outreach, content, and communications.</p>
          </div>
          <div className="team-grid team-grid-directors">
            {directors.map((member) => (
              <MemberCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Full Team Photo ── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>The Full Team</h2>
          </div>
          <div className="full-team-photo">
            <img src="/team/full-team.jpeg" alt="Saintly Supplements full team" />
          </div>
        </div>
      </section>

    </main>
  );
};

export default Team;
