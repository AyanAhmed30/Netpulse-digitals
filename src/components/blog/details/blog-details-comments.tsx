import React from "react";
import Image from "next/image";
import { Reply } from "@/components/svg";
import avatar_1 from "@/assets/img/inner-blog/blog-details/avatar/avatar-3.jpg";
import avatar_2 from "@/assets/img/inner-blog/blog-details/avatar/avatar-4.jpg";
import Link from "next/link";

// comment data
const comment_data = [
  {
    id: 1,
    name: "Alex Morgan",
    avatar: avatar_1,
    date: "November 15, 2025 at 10:22 am",
    comment:
      "Great insights on AI automation — especially the part about balancing efficiency with ethical oversight. We’ve seen similar results implementing predictive analytics for e-commerce clients in Australia. Would love to see a follow-up on ROI benchmarks across industries.",
  },
  {
    id: 2,
    children: true,
    avatar: avatar_2,
    name: "Priya Sharma",
    date: "November 16, 2025 at 2:45 pm",
    comment:
      "Spot on about the shift from ‘digital presence’ to ‘digital experience’. At our SaaS startup in Toronto, conversion jumped 34% after reworking our onboarding flow using these principles. Thanks for the actionable takeaways!",
  },
  {
    id: 3,
    avatar: avatar_1,
    name: "James Wilson",
    date: "November 1, 2025 at 9:11 am",
    comment:
      "As a marketing director in Manchester, I appreciate how this cuts through the buzzwords. Would you consider covering B2B lead-nurturing in a future piece? The Web Dev ↔ SEO ↔ Paid Ads handoff is still a pain point for many teams.",
  },
];

export default function BlogDetailsComments() {
  return (
    <ul>
      {comment_data.map((item) => (
        <li key={item.id} className={item.children ? "children" : ""}>
          <div className="postbox__comment-box d-flex">
            <div className="postbox__comment-info ">
              <div className="postbox__comment-avater mr-20">
                <Image src={item.avatar} alt="avatar" />
              </div>
            </div>
            <div className="postbox__comment-text">
              <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                <h5>{item.name}</h5>
                <span className="post-meta">{item.date}</span>
              </div>
              <p>{item.comment}</p>
             
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
