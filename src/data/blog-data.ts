// data/blog-data.ts
import { IBlogDT } from "@/types/blog-d-t";

// Helper function to create slug from title
const createSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .trim();
};

// home 5
import blog_1 from "@/assets/img/home-05/blog/blog-1.jpg";
import blog_2 from "@/assets/img/home-05/blog/blog-2.jpg";
import blog_3 from "@/assets/img/home-05/blog/blog-3.jpg";
import blog_4 from "@/assets/img/home-05/blog/blog-4.jpg";

// blog modern 
import b_m_1 from "@/assets/img/inner-blog/blog-standard/blog-1.jpg";
import b_m_2 from "@/assets/img/inner-blog/blog-standard/dg1.png";
import b_m_3 from "@/assets/img/inner-blog/blog-standard/blog-3.jpg";
import b_m_4 from "@/assets/img/inner-blog/blog-standard/dg2.png";
import b_m_5 from "@/assets/img/inner-blog/blog-standard/dg3.png";
import b_m_6 from "@/assets/img/inner-blog/blog-standard/dg4.png";
import b_m_7 from "@/assets/img/inner-blog/blog-standard/dg5.png";

// avatar
import avatar from "@/assets/img/inner-blog/blog-sidebar/avatar/avata-1.jpg";

// blog postbox img
import blog_post_1 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-1.jpg';
import blog_post_2 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-2.jpg';
import blog_post_3 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-3.jpg';
import blog_post_4 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-4.jpg';

// blog list images
import blog_list_1 from '@/assets/img/inner-blog/blog-right-sidebar/blog-1.jpg';
import blog_list_2 from '@/assets/img/inner-blog/blog-right-sidebar/blog-2.jpg';
import blog_list_3 from '@/assets/img/inner-blog/blog-right-sidebar/blog-3.jpg';
import blog_list_4 from '@/assets/img/inner-blog/blog-right-sidebar/blog-4.jpg';
import blog_list_5 from '@/assets/img/inner-blog/blog-right-sidebar/blog-5.jpg';

// blog details images
import details_thumb_1 from "@/assets/img/inner-blog/blog-details/blog-details-2.jpg";
import details_thumb_2 from "@/assets/img/inner-blog/blog-details/blog-details-3.jpg";
import details_thumb_3 from "@/assets/img/inner-blog/blog-details/blog-details-4.jpg";

export const blog_home_five: IBlogDT[] = [
  {
    id: 1,
    img: blog_1,
    title: "Future Business Ideas.",
    slug: createSlug("Future Business Ideas."),
    date: '01. FEB. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
    content: `<p>The metaverse can be viewed as an evolution of today's internet, which in turn evolved from passive media that we simply consumed. In the age of radio and television, the consumer's only job was to listen and decide if they wanted to buy.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">What is Lorem Ipsum?</h4>
      <p class="mb-20">
        <span>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <p>
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="row">
        <div class="col-md-6">
          <div class="blog-details-thumb">
            <img class="w-100 mb-20" src="${details_thumb_1.src}" alt="details-thumb" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="blog-details-thumb">
            <img class="w-100 mb-20" src="${details_thumb_2.src}" alt="details-thumb" />
          </div>
        </div>
      </div>
    </div>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Relationship & Communication</h4>
      <p>
        But, like most politicians, he promised more than he could deliver. Why not indeed! Daylight and everything. And then the battle's not so bad? Hello, little man. I will destroy you! No, I'm Santa Claus! Kif might! Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. I found what I need. And it's not friends, it's things. Then we'll go with that data file!
      </p>
    </div>
    <div class="blog-details-blockquote">
      <blockquote>
        <p>Don't watch the clock; do what it does. keep going.</p>
        <span class="blockquote-info">Sam Levenson</span>
      </blockquote>
    </div>
    <div class="blog-details-left-content">
      <p>
        With any accomplished project, great time management is an essential component. We business owners hire product designers, they expect them to not only perform well, but also on time. At Stan Vision, we provide you with an experienced design team, led by an expert PM who knows how to prioritise your platform and product.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="row">
        <div class="col-xl-12">
          <div class="blog-details-thumb">
            <img src="${details_thumb_3.src}" alt="details-thumb" style="height: auto" />
          </div>
        </div>
      </div>
    </div>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">What is Lorem Ipsum?</h4>
      <p>
        <span>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <p>
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
      </p>
    </div>`
  },
  {
    id: 2,
    img: blog_2,
    title: "Start Unique Experience.",
    slug: createSlug("Start Unique Experience."),
    date: '09. MAY. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
    content: `<p>Creating a unique experience for your customers is essential in today's competitive market. The key is to understand your audience and deliver value that resonates with them.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Understanding Your Audience</h4>
      <p class="mb-20">
        The foundation of any successful business is understanding who your customers are and what they need. This involves deep market research and customer analysis.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_2.src}" alt="unique-experience" />
      </div>
    </div>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Creating Value</h4>
      <p>
        Value creation goes beyond just providing a product or service. It's about solving real problems and making your customers' lives better.
      </p>
    </div>
    <div class="blog-details-blockquote">
      <blockquote>
        <p>The best way to find out what's happening in the future is to create it.</p>
        <span class="blockquote-info">Peter Drucker</span>
      </blockquote>
    </div>`
  },
  {
    id: 3,
    img: blog_3,
    title: "Is It Time To Rebrand?",
    slug: createSlug("Is It Time To Rebrand?"),
    date: '30. AUG. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
    content: `<p>Rebranding is a significant decision that can transform your business. It's important to know when it's the right time to consider this major change.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Signs You Need to Rebrand</h4>
      <p class="mb-20">
        There are several indicators that suggest it might be time to rebrand your business, from market changes to evolving customer needs.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_3.src}" alt="rebrand" />
      </div>
    </div>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">The Rebranding Process</h4>
      <p>
        Successful rebranding requires careful planning, market research, and strategic execution to maintain customer loyalty while attracting new audiences.
      </p>
    </div>`
  },
  {
    id: 4,
    img: blog_4,
    title: "Setting up the creativity.",
    slug: createSlug("Setting up the creativity."),
    date: '11. JAN. 2023',
    category: 'Marketing / Strategy',
    author: 'John Doe',
    content: `<p>Creativity is the engine of innovation. Setting up the right environment and processes can significantly boost your team's creative output.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Fostering Creative Environments</h4>
      <p class="mb-20">
        Creating spaces and conditions that encourage innovation and creative thinking is crucial for any organization looking to stay ahead.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_4.src}" alt="creativity" />
      </div>
    </div>`
  }
];

export const blog_modern: IBlogDT[] = [
  {
    id: 5,
    img: b_m_1,
    title: 'Insights, Ideas & Innovation  <br> for the Digital World.',
    slug: createSlug('Insights, Ideas & Innovation for the Digital World.'),
    date: '21. OCT. 2025',
    category: 'Marketing / Strategy',
    author: 'John Doe',
    content: `<p>In today's digital landscape, insights, ideas, and innovation are the key drivers of success. Organizations that embrace these elements thrive in the competitive market.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Digital Transformation</h4>
      <p class="mb-20">
        The digital world requires a fundamental shift in how we approach business, marketing, and customer engagement. Understanding this transformation is crucial.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${b_m_1.src}" alt="digital-insights" />
      </div>
    </div>`
  },
  {
    id: 6,
    img: b_m_2,
    title: 'Digital Marketing',
    slug: createSlug('Digital Marketing'),
    date: '01. FEB. 2025',
    category: 'Marketing',
    author: 'John Doe',
    content: `<p>Digital marketing has revolutionized how businesses connect with their audiences. The strategies and tools available today provide unprecedented opportunities for growth.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Modern Marketing Strategies</h4>
      <p class="mb-20">
        Understanding the latest trends in digital marketing is essential for businesses looking to maintain a competitive edge in the marketplace.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${b_m_2.src}" alt="digital-marketing" />
      </div>
    </div>`
  },
  {
    id: 7,
    img: b_m_3,
    title: 'Web Design Trends 2025',
    slug: createSlug('Web Design Trends 2025'),
    date: '09. MAY. 2025',
    category: 'Software Applications Development',
    author: 'John Doe',
    content: `<p>Web design continues to evolve at a rapid pace. Staying current with the latest trends ensures your website remains engaging and effective.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Emerging Design Trends</h4>
      <p class="mb-20">
        From minimalism to bold typography, 2025 brings new design approaches that prioritize user experience and visual appeal.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${b_m_3.src}" alt="web-design" />
      </div>
    </div>`
  },
  {
    id: 8,
    img: b_m_4,
    title: 'Modern SEO Techniques',
    slug: createSlug('Modern SEO Techniques'),
    date: '30. AUG. 2025',
    category: 'SEO Optimization',
    author: 'John Doe',
    content: `<p>Search Engine Optimization has evolved significantly. Modern techniques focus on user experience, content quality, and technical excellence.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">SEO Best Practices</h4>
      <p class="mb-20">
        Understanding the latest SEO strategies helps ensure your content ranks well and reaches your target audience effectively.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${b_m_4.src}" alt="seo-techniques" />
      </div>
    </div>`
  },
  {
    id: 9,
    img: b_m_5,
    title: 'Future Advertising Trends',
    slug: createSlug('Future Advertising Trends'),
    date: '11. JAN. 2025',
    category: 'Advertising',
    author: 'John Doe',
    content: `<p>The advertising landscape is constantly changing. New technologies and consumer behaviors are shaping the future of how brands connect with audiences.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Innovative Advertising Approaches</h4>
      <p class="mb-20">
        From AI-powered personalization to immersive experiences, the future of advertising promises exciting developments.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${b_m_5.src}" alt="advertising-trends" />
      </div>
    </div>`
  },
  {
    id: 10,
    img: b_m_6,
    title: 'Create Best eBooks',
    slug: createSlug('Create Best eBooks'),
    date: '15. OCT. 2025',
    category: 'e-book',
    author: 'John Doe',
    content: `<p>Creating compelling eBooks requires a blend of great content, engaging design, and strategic marketing. Here's how to create eBooks that stand out.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">eBook Creation Process</h4>
      <p class="mb-20">
        From planning to publishing, creating a successful eBook involves multiple steps and considerations for maximum impact.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${b_m_6.src}" alt="ebook-creation" />
      </div>
    </div>`
  },
  {
    id: 11,
    img: b_m_7,
    title: 'AI Innovation Trends',
    slug: createSlug('AI Innovation Trends'),
    date: '20. NOV. 2025',
    category: 'Artificial Inteligence',
    author: 'John Doe',
    content: `<p>Artificial Intelligence continues to transform industries and create new possibilities. Understanding current AI trends helps businesses stay competitive.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">AI Development Trends</h4>
      <p class="mb-20">
        From machine learning to natural language processing, AI innovations are reshaping how we interact with technology.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${b_m_7.src}" alt="ai-innovation" />
      </div>
    </div>`
  },
  {
    id: 12,
    img: b_m_2,
    title: 'Future Business Ideas.',
    slug: createSlug('Future Business Ideas.'),
    date: '01. FEB. 2022',
    category: 'Marketing / Strategy',
    author: 'John Doe',
    content: `<p>Exploring future business ideas requires creativity, market analysis, and a deep understanding of emerging trends and technologies.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Innovation in Business</h4>
      <p class="mb-20">
        The most successful businesses are those that anticipate market changes and adapt quickly to new opportunities.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${b_m_2.src}" alt="future-business" />
      </div>
    </div>`
  },
  {
    id: 13,
    img: b_m_5,
    title: 'Start Unique Experience.',
    slug: createSlug('Start Unique Experience.'),
    date: '09. MAY. 2022',
    category: 'Branding / Creative',
    author: 'John Doe',
    content: `<p>Creating unique experiences for customers sets your brand apart from competitors and builds lasting relationships.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Experience Design</h4>
      <p class="mb-20">
        Every touchpoint with your brand should contribute to a cohesive and memorable customer experience.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${b_m_5.src}" alt="unique-experience" />
      </div>
    </div>`
  },
  {
    id: 14,
    img: b_m_4,
    title: 'Is It Time To Rebrand?',
    slug: createSlug('Is It Time To Rebrand?'),
    date: '30. AUG. 2022',
    category: 'Marketing / Strategy',
    author: 'John Doe',
    content: `<p>Rebranding can be a powerful strategy when executed correctly. It's important to recognize the signs that indicate it's time for a change.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Rebranding Considerations</h4>
      <p class="mb-20">
        Before embarking on a rebranding journey, consider market conditions, customer perception, and business goals.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${b_m_4.src}" alt="rebranding" />
      </div>
    </div>`
  },
];

export const blog_classic: IBlogDT[] = [
  {
    id: 15,
    title: "Relax while learning design and Be Connected",
    slug: createSlug("Relax while learning design and Be Connected"),
    date: '27 JULY, 2022',
    category: 'BRANDING',
    author: 'Mark Hopkins',
    avatar: avatar,
    blogHeroSlider: true,
    content: `<p>Learning design should be an enjoyable experience that connects you with the creative process and helps you develop your unique style.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Design Fundamentals</h4>
      <p class="mb-20">
        Understanding the basics of design helps you create more effective and appealing visual communications.
      </p>
    </div>`
  },
  {
    id: 16,
    title: "Relax while learning design and Be Connected",
    slug: createSlug("Relax while learning design and Be Connected"),
    date: '15 JUN, 2023',
    category: 'DESIGN',
    author: 'John Vincent',
    avatar: avatar,
    blogHeroSlider: true,
    content: `<p>Design is both an art and a science. Finding the right balance helps you create work that is both beautiful and functional.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Design Principles</h4>
      <p class="mb-20">
        Mastering design principles allows you to create consistent and impactful visual experiences.
      </p>
    </div>`
  },
  {
    id: 17,
    img: blog_post_1,
    title: "Design To Remember",
    slug: createSlug("Design To Remember"),
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '01 DEC, 2022',
    category: 'WORK',
    author: 'Mark Hopkins',
    content: `<p>Creating memorable designs requires understanding what makes certain visuals stick in people's minds and hearts.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Memorable Design Elements</h4>
      <p class="mb-20">
        The most effective designs combine aesthetic appeal with functional purpose to create lasting impressions.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_post_1.src}" alt="design-to-remember" />
      </div>
    </div>`
  },
  {
    id: 18,
    img: blog_post_2,
    title: "Desert Treasure Hunt",
    slug: createSlug("Desert Treasure Hunt"),
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '12 OCT, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
    video: true,
    videoId: 'rVHxkxJM3rY',
    content: `<p>Adventure and exploration lead to unexpected discoveries. This treasure hunt through the desert was an incredible journey.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Adventure and Discovery</h4>
      <p class="mb-20">
        Every adventure teaches us something new about ourselves and the world around us.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_post_2.src}" alt="desert-treasure" />
      </div>
    </div>`
  },
  {
    id: 19,
    blogQuoteTwo: true,
    title: "MERGE DIFFERENT TO CREATE A PERFECT <br/> PLAYLIST FOR EACH.",
    slug: createSlug("MERGE DIFFERENT TO CREATE A PERFECT PLAYLIST FOR EACH."),
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '01 DEC, 2022',
    category: 'WORK',
    author: 'Mark Hopkins',
    content: `<p>Creating the perfect playlist involves understanding the unique preferences and moods of each listener.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Personalized Music Curation</h4>
      <p class="mb-20">
        The art of playlist creation combines music theory, mood analysis, and personal taste.
      </p>
    </div>`
  },
  {
    id: 20,
    imgSlider: true,
    images: [blog_post_1, blog_post_2, blog_post_3],
    title: "Future Business Ideas.",
    slug: createSlug("Future Business Ideas."),
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '08 NOV, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
    content: `<p>Exploring innovative business concepts that could shape the future of commerce and industry.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Innovation and Entrepreneurship</h4>
      <p class="mb-20">
        The future belongs to those who dare to imagine and create new possibilities.
      </p>
    </div>`
  },
  {
    id: 21,
    blogQuote: true,
    title: "SEM SMITH, CREATIVE DIRECTOR",
    slug: createSlug("SEM SMITH, CREATIVE DIRECTOR"),
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,uyam erat.!',
    date: '12 OCT, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
    content: `<p>Insights from a creative director on the evolving landscape of design and creativity.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Creative Leadership</h4>
      <p class="mb-20">
        Leading creative teams requires both artistic vision and strategic thinking.
      </p>
    </div>`
  },
  {
    id: 22,
    img: blog_post_4,
    title: "Simplistic photo setup",
    slug: createSlug("Simplistic photo setup"),
    desc: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.!',
    date: '18 DEC, 2023',
    category: 'WORK',
    author: 'Mark Hopkins',
    content: `<p>Creating stunning photographs doesn't always require complex equipment. Sometimes simplicity is the key to powerful imagery.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Minimalist Photography</h4>
      <p class="mb-20">
        The art of taking great photos with minimal equipment and setup.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_post_4.src}" alt="photo-setup" />
      </div>
    </div>`
  },
];

export const blog_lists: IBlogDT[] = [
  {
    id: 23,
    img: blog_list_1,
    title: "Design To Remember",
    slug: createSlug("Design To Remember"),
    date: '01 DEC, 2023',
    category: 'Marketing',
    author: 'John Doe',
    content: `<p>Effective design creates lasting impressions and memorable experiences for your audience.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Design Impact</h4>
      <p class="mb-20">
        The most successful designs are those that people remember and associate with positive experiences.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_list_1.src}" alt="design-remember" />
      </div>
    </div>`
  },
  {
    id: 24,
    img: blog_list_2,
    title: "Simplistic photo setup",
    slug: createSlug("Simplistic photo setup"),
    date: '09. MAY. 2023',
    category: 'Branding',
    author: 'John Doe',
    content: `<p>Creating professional-quality photos with simple equipment and techniques.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Simple Photography</h4>
      <p class="mb-20">
        You don't need expensive equipment to create stunning photographs.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_list_2.src}" alt="simple-photo" />
      </div>
    </div>`
  },
  {
    id: 25,
    img: blog_list_3,
    title: "Future Business Ideas.",
    slug: createSlug("Future Business Ideas."),
    date: '20. NOV. 2023',
    category: 'Branding',
    author: 'John Doe',
    content: `<p>Exploring innovative business concepts for the future market.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Business Innovation</h4>
      <p class="mb-20">
        The future of business lies in creative and sustainable solutions.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_list_3.src}" alt="business-ideas" />
      </div>
    </div>`
  },
  {
    id: 26,
    img: blog_list_4,
    title: "Is It Time To Rebrand?",
    slug: createSlug("Is It Time To Rebrand?"),
    date: '30. AUG. 2023',
    category: 'Branding',
    author: 'John Doe',
    content: `<p>Recognizing when your brand needs a refresh and how to execute it effectively.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Rebranding Strategy</h4>
      <p class="mb-20">
        Strategic rebranding can revitalize your business and attract new customers.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_list_4.src}" alt="rebrand" />
      </div>
    </div>`
  },
  {
    id: 27,
    img: blog_list_5,
    title: "Desert Treasure Hunt",
    slug: createSlug("Desert Treasure Hunt"),
    date: '09. MAY. 2023',
    category: 'Branding',
    author: 'John Doe',
    content: `<p>An adventurous journey through the desert with unexpected discoveries.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Adventure Branding</h4>
      <p class="mb-20">
        Creating brands that connect with adventure and exploration.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_list_5.src}" alt="treasure-hunt" />
      </div>
    </div>`
  },
  {
    id: 28,
    img: blog_list_2,
    title: "Visualizing Your Brand",
    slug: createSlug("Visualizing Your Brand"),
    date: '12. JAN. 2023',
    category: 'Branding',
    author: 'John Doe',
    content: `<p>Creating a visual identity that represents your brand's values and mission.</p>
    <div class="blog-details-left-content">
      <h4 class="blog-details-left-title">Brand Visualization</h4>
      <p class="mb-20">
        Visual elements are crucial for brand recognition and customer connection.
      </p>
    </div>
    <div class="blog-details-thumb-box">
      <div class="blog-details-thumb">
        <img class="w-100" src="${blog_list_2.src}" alt="brand-visualizing" />
      </div>
    </div>`
  },
];

export const blog_data: IBlogDT[] = [
  ...blog_lists,
  ...blog_home_five,
  ...blog_modern,
  ...blog_classic,
];