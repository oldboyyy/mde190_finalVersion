import { Timeline } from './components/Timeline';
import { QuoteCard } from './components/QuoteCard';
import { StatCard } from './components/StatCard';
import { SectionHeader } from './components/SectionHeader';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { 
  User, 
  GraduationCap, 
  TrendingUp, 
  Award, 
  Heart, 
  Lightbulb, 
  Target, 
  Globe, 
  Users, 
  DollarSign, 
  Laptop,
  BookOpen,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const timelineEvents = [
    {
      year: "1984",
      title: "Birth",
      description: "Born in White Plains, New York"
    },
    {
      year: "2002",
      title: "Harvard University",
      description: "Enrolled as a computer science and psychology student"
    },
    {
      year: "2004",
      title: "Facebook Launch",
      description: "Launched 'TheFacebook' from his Harvard dorm room on February 4"
    },
    {
      year: "2004",
      title: "Dropped Out",
      description: "Left Harvard to focus on Facebook full-time"
    },
    {
      year: "2006",
      title: "Major Expansion",
      description: "Facebook opened to everyone over 13 years old"
    },
    {
      year: "2012",
      title: "IPO",
      description: "Facebook went public with one of the largest tech IPOs in history"
    },
    {
      year: "2021",
      title: "Meta Rebranding",
      description: "Facebook Inc. rebranded to Meta Platforms, Inc., focusing on the metaverse"
    }
  ];

  const qualities = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Visionary Thinking",
      description: "Sees beyond the present, envisioning how technology can connect humanity in revolutionary ways."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Risk-Taking",
      description: "Dropped out of Harvard and rejected billion-dollar offers to pursue his vision."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Focus & Determination",
      description: "Maintained unwavering focus on Facebook's mission to connect the world."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly evolves products and explores new technologies like VR, AI, and the metaverse."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric Approach",
      description: "Prioritizes user experience and building products people genuinely want to use."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Sets yearly challenges to learn new skills, languages, and perspectives."
    }
  ];

  const contributions = [
    {
      icon: <Globe className="w-8 h-8" />,
      value: "3+ Billion",
      label: "People Connected Worldwide",
      color: "blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "86,000+",
      label: "Meta Employees",
      color: "green"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: "$1+ Trillion",
      label: "Company Market Value",
      color: "purple"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      value: "Billions",
      label: "Small Businesses Supported",
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1496096265110-f83ad7f96608?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjQ4Mjk0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <p className="text-blue-100">The Person I Admire</p>
            </div>
            <h1 className="mb-6 text-white">Mark Zuckerberg</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Founder of Facebook and Meta | Technology Visionary | Philanthropist
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <p className="text-blue-100">Born: May 14, 1984</p>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <p className="text-blue-100">Age: 40 years old</p>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-lg">
                <p className="text-blue-100">CEO of Meta Platforms</p>
              </div>
            </div>
            <div className="mt-12 animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-blue-200" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Birth and Early Life */}
        <section className="mb-20">
          <SectionHeader 
            title="Early Life & Birth"
            subtitle="The beginnings of a future tech pioneer"
          />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-8 h-8 text-blue-600" />
                  <h3>Born to Lead</h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Full Name:</strong> Mark Elliot Zuckerberg
                  </p>
                  <p>
                    <strong>Born:</strong> May 14, 1984
                  </p>
                  <p>
                    <strong>Birthplace:</strong> White Plains, New York, USA
                  </p>
                  <p>
                    <strong>Family:</strong> Born to Edward Zuckerberg (dentist) and Karen Zuckerberg (psychiatrist). 
                    He grew up with three sisters: Randi, Donna, and Arielle.
                  </p>
                  <p>
                    <strong>Upbringing:</strong> Raised in Dobbs Ferry, New York, in an educated, middle-class Jewish household 
                    that valued learning and achievement.
                  </p>
                  <p className="text-gray-600 italic">
                    From a young age, Mark showed exceptional talent in mathematics and computer programming, 
                    beginning to code around age 12.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1648747067003-0e4660db791f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZW50cmVwcmVuZXVyfGVufDF8fHx8MTc2NDg1ODY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Technology Entrepreneur"
                className="w-full h-80 object-cover rounded-xl shadow-md"
              />
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <p className="text-gray-700">
                  <strong>Early Sign of Genius:</strong> At age 12, Mark created "ZuckNet," 
                  a messaging program for his father's dental office that functioned like an early version of instant messaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <SectionHeader 
            title="Education & Academic Achievements"
            subtitle="A brilliant student who excelled from an early age"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-green-600" />
                  <h3>Ardsley High School & Phillips Exeter Academy</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>Transferred to prestigious Phillips Exeter Academy, a boarding school in New Hampshire</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>Excelled in classical studies, winning prizes in mathematics, astronomy, and physics</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>Captain of the fencing team</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span>Could read and write in French, Hebrew, Latin, and ancient Greek</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                  <h3>Early Programming Success</h3>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Created <strong>Synapse Media Player</strong> - a music player with AI that learned user preferences</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Microsoft and AOL tried to recruit him and buy Synapse while still in high school</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span>Turned down offers to work for tech giants, choosing education instead</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1542843895-1b55d9f8ece8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIYXJ2YXJkJTIwVW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwxfHx8fDE3NjQ4NTgwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Harvard University"
                className="w-full h-64 object-cover rounded-xl shadow-md"
              />
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-100">
                <h3 className="mb-4 text-red-900">Harvard University (2002-2004)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span>Enrolled at Harvard University in 2002</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span>Studied Computer Science and Psychology</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span>Lived in Kirkland House dormitory</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span>Created CourseMatch - helped students choose classes based on peers' selections</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span>Created Facemash - a controversial site comparing student photos</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span><strong>Dropped out in 2004</strong> to focus on Facebook full-time</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-600">•</span>
                    <span>Received honorary degree from Harvard in 2017</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges and Obstacles */}
        <section className="mb-20 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
          <SectionHeader 
            title="Challenges & Obstacles"
            subtitle="The difficulties that shaped his character and resilience"
            centered
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-red-600 mb-3">Legal Battles</h4>
              <p className="text-gray-700">
                Faced multiple lawsuits, including from the Winklevoss twins who claimed he stole their idea. 
                Eventually settled for $65 million. This taught him about legal protection and fair business practices.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-red-600 mb-3">Privacy Controversies</h4>
              <p className="text-gray-700">
                Navigated numerous privacy scandals, including Cambridge Analytica. Testified before Congress and 
                had to rebuild public trust while implementing stronger data protection measures.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-red-600 mb-3">College Dropout Risk</h4>
              <p className="text-gray-700">
                Made the bold decision to drop out of Harvard at age 19, risking his education and disappointing 
                his parents. This decision required immense courage and belief in his vision.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-red-600 mb-3">Intense Competition</h4>
              <p className="text-gray-700">
                Competed against established social networks like MySpace and Friendster, as well as tech giants. 
                Had to innovate constantly and make strategic acquisitions (Instagram, WhatsApp) to stay ahead.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-red-600 mb-3">Public Scrutiny</h4>
              <p className="text-gray-700">
                Faced criticism for his leadership style, particularly as a young CEO managing thousands of employees. 
                Had to develop emotional intelligence and communication skills while under the public microscope.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="text-red-600 mb-3">Work-Life Balance</h4>
              <p className="text-gray-700">
                Struggled with maintaining personal relationships while building a billion-user platform. 
                Learning to balance being a CEO, husband, and father of three children.
              </p>
            </div>
          </div>
        </section>

        {/* Business and Career Journey */}
        <section className="mb-20">
          <SectionHeader 
            title="The Birth of Facebook & Meta"
            subtitle="How a college project became a global phenomenon"
          />
          
          <div className="mb-12">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNvZGluZ3xlbnwxfHx8fDE3NjQ4NTg2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Computer Coding"
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md mb-8">
            <h3 className="mb-6 text-blue-600">The Facebook Story</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>February 4, 2004:</strong> Mark Zuckerberg launched "TheFacebook" from his Harvard dorm room 
                (room H33 in Kirkland House). Initially, it was only available to Harvard students, requiring a 
                harvard.edu email address to register.
              </p>
              <p>
                <strong>The Original Team:</strong> Co-founded with roommates Eduardo Saverin (business), 
                Dustin Moskovitz (engineering), and Chris Hughes (communications), along with Andrew McCollum (design).
              </p>
              <p>
                <strong>Rapid Growth:</strong> Within 24 hours, 1,200 Harvard students had registered. 
                Within a month, over half of Harvard's undergraduate population had profiles.
              </p>
              <p>
                <strong>Expansion:</strong> Quickly expanded to other Ivy League schools (Columbia, Yale, Stanford), 
                then to all universities, high schools, and finally to everyone over age 13 in September 2006.
              </p>
              <p>
                <strong>Move to Silicon Valley:</strong> In summer 2004, the team moved to Palo Alto, California. 
                Mark dropped out of Harvard permanently to focus on Facebook.
              </p>
              <p>
                <strong>First Investment:</strong> Peter Thiel (PayPal co-founder) became Facebook's first major investor, 
                putting in $500,000 for 10.2% of the company.
              </p>
              <p>
                <strong>Turning Down Offers:</strong> Yahoo! offered $1 billion in 2006 - Mark refused. 
                He believed Facebook could be worth much more and wanted to maintain his vision.
              </p>
            </div>
          </div>

          <Timeline events={timelineEvents} />

          <div className="mt-12 bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-8 shadow-lg">
            <h3 className="mb-6">The Transformation to Meta (2021)</h3>
            <div className="space-y-4">
              <p>
                In October 2021, Facebook Inc. rebranded to <strong>Meta Platforms, Inc.</strong>, 
                signaling a major strategic shift toward building the "metaverse" - an immersive virtual reality space 
                where people can interact, work, play, and socialize.
              </p>
              <p>
                This bold move demonstrated Mark's willingness to evolve and invest in the next generation of 
                internet technology, including VR, AR, and AI. The company invested billions into Reality Labs, 
                developing products like Meta Quest VR headsets and exploring AI applications.
              </p>
              <p>
                <strong>Meta's Family of Apps:</strong> Facebook, Instagram, WhatsApp, and Messenger together 
                serve over 3 billion users worldwide, making Meta one of the most influential companies in human history.
              </p>
            </div>
          </div>
        </section>

        {/* Qualities I Admire */}
        <section className="mb-20">
          <SectionHeader 
            title="Qualities & Skills I Admire Most"
            subtitle="What makes Mark Zuckerberg an inspiring leader"
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((quality, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {quality.icon}
                </div>
                <h4 className="mb-2">{quality.title}</h4>
                <p className="text-gray-600">{quality.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <QuoteCard 
              quote="Move fast and break things. Unless you are breaking stuff, you are not moving fast enough."
              context="Mark Zuckerberg's famous motto for Facebook's early culture"
            />
            <QuoteCard 
              quote="Ideas don't come out fully formed. They only become clear as you work on them. You just have to get started."
              context="On the importance of execution over perfection"
            />
          </div>
        </section>

        {/* Personal Inspiration */}
        <section className="mb-20 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-10 h-10 text-purple-600" />
              <h2 className="text-purple-900 text-center">How He Inspires Me</h2>
            </div>
            <div className="space-y-6 text-gray-800">
              <p>
                Mark Zuckerberg's story inspires me because he proves that age is just a number when it comes to 
                making a global impact. At just 19 years old, he had the courage to pursue his vision despite the 
                risks. This teaches me that <strong>young people can create extraordinary value</strong> and shouldn't 
                wait for permission to start building their dreams.
              </p>
              <p>
                His ability to <strong>think big and stay focused</strong> is remarkable. While others might have 
                been satisfied with creating a successful campus social network, Mark envisioned connecting the entire 
                world. He turned down billion-dollar acquisition offers because he believed in something greater. 
                This inspires me to think beyond immediate gains and focus on long-term vision.
              </p>
              <p>
                What I find most motivating is his commitment to <strong>continuous learning and self-improvement</strong>. 
                Every year, Mark sets personal challenges - learning Mandarin Chinese, reading 25 books, running 365 miles, 
                building AI for his home, visiting all U.S. states. Despite his success, he never stops growing, which 
                shows that true excellence requires lifelong learning.
              </p>
              <p>
                His resilience in the face of criticism and setbacks is inspiring. He's faced lawsuits, congressional 
                hearings, and public backlash, yet he continues to innovate and push forward. This teaches me that 
                <strong>obstacles are opportunities for growth</strong>, and perseverance is essential for achievement.
              </p>
              <p className="italic text-purple-900 border-l-4 border-purple-600 pl-4">
                "Mark Zuckerberg shows me that with vision, determination, and continuous learning, 
                it's possible to create something that positively impacts billions of lives."
              </p>
            </div>
          </div>
        </section>

        {/* Lessons Learned */}
        <section className="mb-20">
          <SectionHeader 
            title="Lessons from His Leadership & Values"
            subtitle="Practical wisdom I can apply to my own life"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-600">
                <h4 className="mb-3 text-blue-900">1. Start Before You're Ready</h4>
                <p className="text-gray-700">
                  Mark didn't wait for the perfect moment or perfect product. He launched Facebook as a simple 
                  college directory and improved it over time. The lesson: <strong>action beats perfection</strong>.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-600">
                <h4 className="mb-3 text-green-900">2. Focus on Value Creation</h4>
                <p className="text-gray-700">
                  Facebook succeeded because it solved a real problem - helping people connect. Mark focused on 
                  creating something useful, not just making money. <strong>Value-driven work leads to success</strong>.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-600">
                <h4 className="mb-3 text-purple-900">3. Embrace Calculated Risks</h4>
                <p className="text-gray-700">
                  Dropping out of Harvard and rejecting billion-dollar offers were huge risks, but Mark calculated 
                  they were worth taking. <strong>Smart risk-taking is essential for extraordinary achievement</strong>.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-orange-600">
                <h4 className="mb-3 text-orange-900">4. Build Strong Teams</h4>
                <p className="text-gray-700">
                  Mark surrounded himself with talented co-founders and employees. He knew he couldn't do it alone. 
                  <strong>Collaboration and hiring great people multiply your impact</strong>.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-600">
                <h4 className="mb-3 text-red-900">5. Learn from Failures</h4>
                <p className="text-gray-700">
                  From the Facemash controversy to privacy scandals, Mark faced many setbacks. Instead of giving up, 
                  he learned, adapted, and improved. <strong>Failures are stepping stones to success</strong>.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-600">
                <h4 className="mb-3 text-indigo-900">6. Stay Humble and Keep Learning</h4>
                <p className="text-gray-700">
                  Despite his wealth and success, Mark maintains a modest lifestyle and continues learning new skills 
                  every year. <strong>Humility and curiosity fuel continuous growth</strong>.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-600">
                <h4 className="mb-3 text-pink-900">7. Think Long-Term</h4>
                <p className="text-gray-700">
                  Mark's decision to rebrand to Meta and invest in the metaverse shows long-term thinking. 
                  He's not afraid to invest in future technologies. <strong>Long-term vision creates lasting impact</strong>.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-teal-600">
                <h4 className="mb-3 text-teal-900">8. Give Back to Society</h4>
                <p className="text-gray-700">
                  Through the Chan Zuckerberg Initiative, Mark and his wife pledge to give away 99% of their wealth. 
                  <strong>True success includes helping others and making the world better</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Influence on My Goals */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Target className="w-12 h-12" />
                <h2>Influence on My Goals & Future Plans</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="mb-3">Academic Excellence</h4>
                  <p>
                    Mark's success at a young age motivates me to excel in my studies, particularly in STEM fields. 
                    I aim to develop strong technical skills in programming, mathematics, and problem-solving, 
                    just as he did in high school and college.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="mb-3">Entrepreneurial Mindset</h4>
                  <p>
                    Inspired by Mark, I want to develop an entrepreneurial mindset - looking for problems to solve 
                    and creating solutions. I plan to start small projects, learn from failures, and build skills 
                    in innovation and business.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="mb-3">Technology & Innovation</h4>
                  <p>
                    Mark's story has strengthened my interest in pursuing a career in technology. I'm considering 
                    studying computer science, software engineering, or related fields that will allow me to build 
                    products that help people.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="mb-3">Impact-Driven Career</h4>
                  <p>
                    Rather than just seeking financial success, I want to create value that improves people's lives. 
                    Mark's mission to "connect the world" inspires me to find my own mission that serves humanity.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="mb-3">Lifelong Learning Commitment</h4>
                  <p>
                    Following Mark's example of yearly challenges, I plan to set personal learning goals - whether it's 
                    mastering a new programming language, reading more books, learning a foreign language, or developing 
                    new skills outside my comfort zone.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="mb-3">Giving Back Philosophy</h4>
                  <p>
                    Mark's philanthropic work through the Chan Zuckerberg Initiative inspires me to think about how 
                    I can give back to society. Success should be measured not just by what you achieve, but by how 
                    you help others along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contributions to Society */}
        <section className="mb-20">
          <SectionHeader 
            title="Contributions to Society & Global Impact"
            subtitle="How Mark Zuckerberg has changed the world"
            centered
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contributions.map((stat, index) => (
              <StatCard 
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                color={stat.color}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="mb-4 text-blue-600">Social & Communication Impact</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span><strong>Connected the World:</strong> Over 3 billion people use Meta's platforms to stay in touch with family and friends</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span><strong>Democratized Communication:</strong> Made it free and easy for anyone to share their voice and story</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span><strong>Social Movements:</strong> Enabled movements like Arab Spring, #MeToo, and Black Lives Matter to organize and spread</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">✓</span>
                  <span><strong>Crisis Response:</strong> Safety Check feature helps people mark themselves safe during emergencies</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="mb-4 text-green-600">Economic Impact</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Job Creation:</strong> Meta employs 86,000+ people with competitive salaries and benefits</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Small Business Support:</strong> Over 200 million businesses use Meta's platforms to reach customers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Creator Economy:</strong> Billions paid to creators and small businesses through ads and features</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span><strong>Digital Marketing Revolution:</strong> Made advertising accessible to businesses of all sizes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="mb-4 text-purple-600">Technology Innovation</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-purple-600">✓</span>
                  <span><strong>Open Source Contributions:</strong> React, PyTorch, and other tools used by millions of developers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">✓</span>
                  <span><strong>AI Research:</strong> Meta AI advances in language models, computer vision, and machine learning</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">✓</span>
                  <span><strong>VR/AR Innovation:</strong> Meta Quest headsets making virtual reality accessible to consumers</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-purple-600">✓</span>
                  <span><strong>Infrastructure:</strong> Built massive data centers and improved internet infrastructure globally</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="mb-4 text-orange-600">Philanthropy</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <span className="text-orange-600">✓</span>
                  <span><strong>Chan Zuckerberg Initiative:</strong> Pledged 99% of Meta shares to charitable causes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600">✓</span>
                  <span><strong>Education:</strong> Billions invested in personalized learning and education technology</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600">✓</span>
                  <span><strong>Disease Research:</strong> Funding to cure, prevent, or manage all diseases by end of century</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-orange-600">✓</span>
                  <span><strong>Community Development:</strong> Investments in affordable housing, criminal justice reform</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border border-blue-100">
            <h3 className="mb-4 text-center text-blue-900">Internet.org / Free Basics Initiative</h3>
            <p className="text-gray-700 text-center max-w-3xl mx-auto">
              Mark launched Internet.org to bring free internet access to developing countries, helping billions 
              of people access education, health information, and economic opportunities. While controversial, 
              the initiative has connected millions who otherwise couldn't afford internet access.
            </p>
          </div>
        </section>

        {/* Sources & References */}
        <section className="mb-12">
          <SectionHeader 
            title="Sources & References"
            subtitle="This research is based on reliable and verified information"
          />
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-blue-900">Biography.com</h4>
                <p className="text-gray-600">Mark Zuckerberg Biography - Comprehensive life story and achievements</p>
                <a href="https://www.biography.com/business-leaders/mark-zuckerberg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  biography.com/business-leaders/mark-zuckerberg
                </a>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-blue-900">Britannica Encyclopedia</h4>
                <p className="text-gray-600">Mark Zuckerberg - Verified historical and biographical information</p>
                <a href="https://www.britannica.com/biography/Mark-Zuckerberg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  britannica.com/biography/Mark-Zuckerberg
                </a>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-blue-900">Meta Official Website</h4>
                <p className="text-gray-600">Official company information, mission, and impact statistics</p>
                <a href="https://about.meta.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  about.meta.com
                </a>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-blue-900">Chan Zuckerberg Initiative</h4>
                <p className="text-gray-600">Information about philanthropic efforts and social impact</p>
                <a href="https://chanzuckerberg.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  chanzuckerberg.com
                </a>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-blue-900">Forbes & Bloomberg</h4>
                <p className="text-gray-600">Business achievements, net worth, and company valuations</p>
                <p className="text-gray-600">Multiple articles and real-time billionaire tracking</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-gray-700">
                <strong>Note:</strong> All information in this presentation has been researched and verified using 
                multiple reliable sources. Facts about dates, achievements, and statistics are accurate as of December 2024.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBjb25uZWN0aW9ufGVufDF8fHx8MTc2NDg1ODY3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Global Connection"
              className="w-full h-48 object-cover rounded-lg opacity-50 mb-6"
            />
          </div>
          <h3 className="mb-4">Final Reflection</h3>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            Mark Zuckerberg's journey from a Harvard dorm room to building one of the world's most influential 
            companies teaches us that with vision, perseverance, and a willingness to take risks, we can achieve 
            the extraordinary. His story inspires me to think bigger, work harder, and use technology to make a 
            positive difference in the world.
          </p>
          <QuoteCard 
            quote="The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks."
            context="Mark Zuckerberg"
          />
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-gray-400">
              Research Presentation: "The Person I Admire" - Mark Zuckerberg
            </p>
            <p className="text-gray-500 mt-2">Created December 2024</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
