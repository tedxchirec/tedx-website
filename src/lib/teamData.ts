export interface TeamMember {
  Name: string;
  Department: string;
  Description: string;
  DeptOrder: number;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    Name: "Aanya Jaidka",
    Department: "Co-Organizer",
    Description: `Aanya is a 12th grader at CHIREC International, hoping to pursue economics and policy making. Apart from being a national-level table tennis player, she is deeply passionate about MUNs — having attended her first conference in 2019 and currently serving as the Secretary General for CHIRECMUN 2025. An avid foodie, Aanya’s thoughts are often half on what she’s going to eat next and half on how good it’s going to be.

In her capacity as Co-Organiser, Aanya looks forward to bringing her experience in organising events to make this edition of TEDxCHIREC the best one yet — and is excited to see you all there.`,
    DeptOrder: 1,
    image: "1.png",
  },
  {
    Name: "Neha Thakkal",
    Department: "Co-Organizer",
    Description: `Growing up watching TEDx Talks with her family, Neha was always inspired by the vision behind the platform. Her dream of becoming a TEDx speaker came true in January 2025, and since then, she has been determined to bring that same sense of warmth, community, and storytelling to CHIREC. Passionate about organizing events and collaborating with teams, Neha hopes to create lasting memories for everyone involved. She’s excited to give her all to this event and make it a resounding success!`,
    DeptOrder: 1,
    image: "2.png",
  },
  {
    Name: "Nisha Sriram",
    Department: "Co-Organizer",
    Description: `Nisha Sriram is an IBDP Year 2 student studying Economics, English, Math AA, and Computer Science at higher level. She’s passionate about storytelling in all its forms, whether it’s through music, journalism, or thoughtful conversations.
As Editor-in-Chief of her school newspaper, she’s had a front-row seat to the originality and insight students bring to the table. At TEDx this year, she’s excited to keep amplifying those voices and creating space for ideas that deserve to be heard.`,
    DeptOrder: 1,
    image: "3.png",
  },
  {
    Name: "Aanya Bahri",
    Department: "Head Of Communications",
    Description: `Aanya Bahri is a Grade 12 CBSE student studying Business Studies, Economics, Accountancy, and Mathematics, with a keen interest in pursuing a career in Business.
Curious and people-oriented, she gravitates toward experiences that spark connection, creativity, and collaboration—whether it’s planning events, making memories with friends and family, or passionately dissecting every character arc in Grey’s Anatomy. When she’s not daydreaming about wanting to eat or sleep, you might find her rewatching her favorite shows for the millionth time.
Aanya is thrilled to be part of the 5th edition of TEDx and looks forward to bringing her energy and attention to detail to help craft an experience that leaves a lasting impression.`,
    DeptOrder: 2,
    image: "4.png",
  },
  {
    Name: "Lasya Penumalli",
    Department: "Head Of Communications",
    Description: `Lasya Penumalli is an IBDP Year 2 student studying Math, Physics, and Economics at the higher level. Whether she’s perfecting her dance compositions or spending time with friends and family, she brings creativity, warmth, and purpose to everything she does. As a TEDx speaker herself and a long-time admirer of TEDx’s mission, Lasya has always found inspiration in the power of ideas to spark connection and change. With her approachable nature and a passion for organizing meaningful events, she’s excited to help make this year’s event a truly unforgettable experience for everyone!`,
    DeptOrder: 2,
    image: "5.png",
  },
  {
    Name: "Mahima Shree Rao",
    Department: "Head Of Communications",
    Description: `Mahima is a Grade 12 CBSE student studying Math, Physics, Chemistry, and Economics, with a keen interest in the intersection of Engineering and Finance.
When she’s not busy stressing out over her schedule for the billionth time, you’ll find her rushing from one place to another, fueled by her never-ending love for ginger ale. The only thing more important to her than food is sleep—though that doesn’t stop her from staying up late rewatching Brooklyn-99.
As Head of Communication Mahima is eager to bring her energy, organisational skills, and passion to the event. She’s excited to contribute to making this year’s TEDx truly unforgettable!`,
    DeptOrder: 2,
    image: "6.png",
  },
  {
    Name: "Aakash Gupta",
    Department: "Head Of Logistics",
    Description: `Aakash Gupta is an IB DP2 student at CHIREC International School, taking Economics, Math AA and Business Management at higher level. He’s drawn to the world of business, especially where numbers meet strategy, and is keen on pursuing a career in finance.
He starts most days by reading the news and keeping up with politics and ends them either listening to Bollywood music or watching a few too many episodes of Modern Family. He enjoys overanalyzing headlines, debating hot takes, and pretending he’s in a panel discussion every time a political debate comes on. TEDx, for him, is a chance to be around ideas that actually make you think, and maybe even leave you speechless for once.`,
    DeptOrder: 3,
    image: "7.png",
  },
  {
    Name: "Hasini Gondi",
    Department: "Head Of Logistics",
    Description: `Hasini is an IBDP Year 2 student studying Computer Science, Math, and Biology at a higher level. If you know Hasini, you know that when she’s not dreaming about good food, she’s probably watching a movie, baking, or just catching up on sleep. Her name, inspired by the movie Bomarillu, mirrors her personality which is full of an upbeat and approachable attitude, she pours her heart into everything she does. As an avid TEDx watcher from a young age, Hasini is so excited to play a part in providing this platform for passionate speakers. She can’t wait to see this event come to life better than ever!`,
    DeptOrder: 3,
    image: "8.png",
  },
  {
    Name: "Kashvi Goud",
    Department: "Head Of Logistics",
    Description: `Kashvi Goud is a Grade 12 CBSE student at CHIREC International School, pursuing Economics, Business, and Math. Actively building a foundation for a future in law and business, she aspires to become a corporate lawyer.
When she’s not working on The Prosperity Initiative or her research paper, you’ll probably find her binge-watching legal dramas. As the Head of Logistics for this year’s TEDx, Kashvi aims to make the conference one to remember—ensuring that every detail is handled with precision and efficiency. She’s excited to be working with the team and looks forward to bringing this event to life!`,
    DeptOrder: 3,
    image: "9.png",
  },
  {
    Name: "Shrithika Kethireddy",
    Department: "Head Of Logistics",
    Description: `Shrithika is a Grade 12 CBSE student in the science stream, known for her optimism, spontaneity, and ability to interact with people. She has the smarts and the drive to not only make but execute an action plan as well. Her love for movies is endless. When she’s not at the theater catching the latest releases, she’s either discussing films with friends and family, listening to music, or just sleeping.`,
    DeptOrder: 3,
    image: "10.png",
  },
  {
    Name: "Eeshan Jami",
    Department: "Head Of Finance and Sponsorships",
    Description: `Eeshan Jami is a Grade 12 student at CHIREC International School with a strong passion for finance, marketing, business, and the stock market. He thrives at the intersection of strategy and creativity—whether it’s analyzing trends, building brands, or exploring new market opportunities.
Eeshan loves connecting with people and exchanging ideas that lead to growth. Through his venture, Jami and Corp, he’s worked with brands across industries, bringing data-driven impact to every project. For him, curiosity, conversation, and consistency are the keys to progress.`,
    DeptOrder: 4,
    image: "11.png",
  },
  {
    Name: "Kriti Rudraraju",
    Department: "Head Of Finance and Sponsorships",
    Description: `Kriti Rudraraju is a Grade 12 CBSE student studying Economics, Business, and Mathematics.
Fuelled by curiosity and a spirited approach, she dives into new experiences and conversations with ease, making sure she never misses a chance to try something out of the ordinary. When she’s not on the move—vibing to the latest mass songs on long drives or indulging her passion for traveling and discovering new cuisines—she’s fully immersed in the world of Telugu cinema, watching her favorite Telugu movie, SVSC, on repeat.
A longtime follower of TEDx, Kriti has been watching its evolution closely and now aims to combine her enthusiasm and precision to help shape an unforgettable edition that is impactful, inspiring, and executed to perfection.`,
    DeptOrder: 4,
    image: "12.png",
  },
  {
    Name: "Srikari Purushotham",
    Department: "Head Of Finance and Sponsorships",
    Description: `Srikari Purushotham is an IBDP Year 2 student studying Math, Physics, and Psychology at a higher level.
From being part of the Technology department of The Erudite, to sharing stories through home cooked meals, Srikari has a variety of interests and greatly values both diversity and community. She is passionate about creativity and learning and is excited to see these values culminate during the conference.`,
    DeptOrder: 4,
    image: "13.png",
  },
  {
    Name: "Mukti Bhatia",
    Department: "Head Of Marketing",
    Description: `Mukti Bhatia is an IBDP 2 student at CHIREC International School taking Business Management, English Language and Literature and Economics at Higher Level. Interested in learning about the ropes of engagement and algorithms, she wants to take up Marketing in the future.

Apart from her passion for making Canva cry and creating reels she hopes go viral, Mukti has also trained in western classical music for 2 years and started singing at the age of 5. From music to media, she believes in crafting memorable experiences whether be through performances or posts. A TEDx Speaker herself, she is ecstatic about being behind the scenes this time, to market those ideas that are truly worth spreading.`,
    DeptOrder: 5,
    image: "14.png",
  },
  {
    Name: "Shloka Choudhary",
    Department: "Head Of Marketing",
    Description: `Shloka Choudhary is a Grade 12 CBSE student studying Economics, Business Studies, and Accounting. She loves art and design, and proudly holds the title of a professional binge-watcher. A die-hard Sunrisers Hyderabad 🧡 fan, she never misses a match and brings that same energy and team spirit into everything she takes on. Whether she’s rewatching her favorite shows or coming up with fresh creative ideas, Shloka thrives on visual expression and storytelling.

As the Marketing Head for this year’s TEDx, she’s excited to bring bold ideas, vibrant energy, and her creative spark to help make the event truly unforgettable.`,
    DeptOrder: 5,
    image: "15.png",
  },
  {
    Name: "Aanya Reddy",
    Department: "Head Of Design",
    Description: `Aanya is a 12th grade CBSE student studying Applied Math, Economics, Business, and Accounts, with plans to pursue business in the future. When she’s not taking a nap, she’s probably trying out a new restaurant - feeding her love for food and all things aesthetic. You can also find her rewatching her favourite sitcoms like Modern Family for the millionth time, hitting the golf course, or listening to Frank Ocean. Aanya is looking forward to using her creativity and eye for detail as the Head of Design to help craft a vibrant and memorable experience for everyone at TEDxCHIREC.`,
    DeptOrder: 6,
    image: "16.png",
  },
  {
    Name: "Anwitha Srivastsa",
    Department: "Head Of Design",
    Description: `Anwitha Srivatsa is an IB DP2 student at CHIREC International School, taking Global Politics, Language & Literature, and Economics at higher level. Though still contemplating her future path, Anwitha has aspired to pursue a career in Law and Journalism since she was eight.
Passionate about history—especially the Vietnam War—she never misses an opportunity to discuss the intricacies of politics and diplomacy. When she’s not working on PadSeva, you’ll find her dancing, making to-do lists, pestering her favorite teachers, or drinking coffee. Above all, Anwi is the go-to person when you need someone to talk to—because she loves talking just as much.`,
    DeptOrder: 6,
    image: "17.png",
  },
  {
    Name: "Diva Srivastava",
    Department: "Head Of Design",
    Description: `Diva Srivastava is an aspiring architect and a Grade 12 student at CHIREC International School, Kondapur, pursuing the science stream. A passionate orator and debater, she is recognized for her wit, creative vision, and sharp eye for detail. Outside academics, you can catch her binging documentaries, sketching and designing.
Diva is thrilled to meet you all and is committed to making the 5th edition of TedxYouth at CHIREC the best one yet`,
    DeptOrder: 6,
    image: "18.png",
  },
  {
    Name: "Dhanya Prasad",
    Department: "Head Of Technology",
    Description: `Dhanya Prasad is an IBDP year 2 student studying Computer Science, Math, Physics and Economics at the higher level. She’s passionate about CS and involves herself in all activities related.
When she’s not breaking her body doing gymnastics, you can find her obsessing over the Ted Bundy Tapes or making horrible references to B99. She’s been involved with TEDxCHIREC since 2023 and understands the excitement, chaos, and creativity that go into making it all happen.
As an outgoing and kind-hearted person, Dhanya is dedicated to making you feel comfortable and can’t wait to help bring this year’s TEDxCHIREC vision to life, bigger, bolder, and better than ever before.`,
    DeptOrder: 7,
    image: "19.png",
  },
  {
    Name: "Shreya Kalluri",
    Department: "Head Of Technology",
    Description: `Shreya Kalluri is a Grade 12 CBSE student at CHIREC International School, studying Math, Physics, Chemistry, and Informatics Practices. A passionate coder, classical dancer, and runner, she’s the mind behind Ctrl+Sparks and a constant source of energy and ideas. Whether she’s leading a team brainstorm, debugging code, or casually binge-watching The Office, Shreya brings creativity, warmth, and drive to everything she does. This year, she’s all set to make TEDx the best one yet!`,
    DeptOrder: 7,
    image: "20.png",
  },
];

export default teamData;
