import React from "react";
import HeroSection from "../(Service Sectinons)/HeroSection";
import { AccordionDemo } from "@/app/App_Chunks/faq";
import TechStackIcon from "../(Service Sectinons)/TechStackIcon";
import CTO from "@/app/About-us/(sections)/CTO";
import Services from "../(Service Sectinons)/services";
const Page = () => {
  const icons = [
    "/App-development/kotlin.svg",
    "/App-development/flutter.svg",
    "/App-development/appwrite.svg",
    "/App-development/supabase.svg",
    "/App-development/swift.svg",
    "/App-development/gatsby.svg",
  ];
  const desc =
    "Search Engine Optimization (SEO) is more than just keywords—it's about building a strong foundation for your online presence. We help businesses improve their visibility on Google and other major search engines by using proven strategies that drive real, long-term growth. From optimizing the structure of your website to creating valuable content and building high-quality backlinks, we cover every aspect of SEO to boost your rankings and bring in the right audience. \n  Our approach is data-driven, tailored to your industry, and focused on attracting users who are ready to engage, convert, and become loyal customers. Whether you're a local business trying to dominate your area or an international brand looking to grow organically, our SEO services are designed to increase your online reach, improve your website’s performance, and deliver measurable results month after month.";
  const seoServices = [
    {
      title: "On-Page SEO",
      description:
        "  We optimize your website’s content, structure, and keywords to improve search engine rankings. ",
      img: "https://images.unsplash.com/photo-1657727534668-4104c475b292?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      class: "col-span-1 lg:col-span-2",
    },
    {
      title: " Technical SEO ",
      description:
        " We fix backend issues—like site speed, mobile-friendliness, and crawlability—to boost your site's performance. ",
      img: "https://vitaldesign.com/wp-content/uploads/2021/06/vital-design-image-optimization-seo-818x596.jpg",
      class: "col-span-1 lg:col-span-1",
    },
    {
      title: "Keyword Research & Strategy",
      description:
        " We find the best keywords your audience is searching for and create a strategy to rank for them.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnhxnwfMJXgxVrkzOTRKyZfY5H7KQvFvt_9w&s",
      class: "col-span-1 lg:",
    },
    {
      title: "Content Optimization",
      description:
        "  We refine existing content and create new SEO-friendly pages to help you rank and convert. ",
      img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFD6DPLoJCfB5X6rEL88_FhU98aUVsFHARaQ&s",
      class: "col-span-1 lg:",
    },
    {
      title: " Local SEO ",
      description:
        "   We help local businesses appear in local search results and Google Maps with accurate listings and reviews. ",
      img: "https://d317jr06u12xtj.cloudfront.net/2022/05/benefits-of-local-seo-Twitter.png",
      class: "col-span-1 lg:",
    },
    {
      title: " Link Building ",
      description:
        "  We build high-quality backlinks that improve your domain authority and search engine trust. ",
      img: "https://static.semrush.com/blog/uploads/media/d1/d2/d1d2c74edfb2e8d33ef3085a1bc25950/link-building.svg",
      class: "col-span-1 lg:",
    },
    {
      title: " SEO Audits & Reporting ",
      description:
        "  We provide in-depth SEO audits and clear monthly reports so you can track progress and results. ",
      img: "https://cdn.prod.website-files.com/60ef088dd8fef99352abb434/6514960f756f68f7c6f8ea9d_How%20To%20Perform%20a%20Complete%20SEO%20Audit%20-100.webp",
      class: "col-span-1 lg:col-span-2",
    },
  ];
  const accordionData = [
    {
      title: "How long does it take to see results from SEO?",
      description:
        "SEO is a long-term investment. While some improvements can be seen within the first few months, significant results often take 6-12 months, depending on your industry, competition, and strategy.",
    },
    {
      title: "What is the difference between on-page and off-page SEO?",
      description:
        "On-page SEO involves optimizing elements on your website, such as content, meta tags, and internal links. Off-page SEO focuses on external factors like backlinks and social signals that influence your site’s authority.",
    },
    {
      title: "What are keywords and why are they important?",
      description:
        "Keywords are terms people search for online. Targeting the right keywords ensures your website attracts relevant traffic and meets the needs of your audience.",
    },
    {
      title: "How do you measure the success of an SEO campaign?",
      description:
        "Success is measured through key performance indicators (KPIs) such as organic traffic, keyword rankings, conversion rates, and ROI. We provide detailed reports to track your progress.",
    },
    {
      title: "What is SEO and why is it important?",
      description:
        "SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results. It drives organic traffic, increases visibility, and enhances user experience, ultimately boosting conversions and revenue.",
    },
  ];
  return (
    <>
      <HeroSection
        colorText={"Smart SEO Strategies"}
        title={"Get Found Online with Smart SEO Strategies"}
        description={desc}
        img={
          "https://www.creativefuture.org/wp-content/uploads/2017/02/image002-1-e1487855274510.jpg"
        }
      />
      <Services
        arr={seoServices}
        highlightText={"Visibility with SEO"}
        heading={"Grow Your Visibility with SEO Services"}
      />
      <AccordionDemo accData={accordionData} />
      <CTO
        heading="Ready to Launch Your App?"
        description="Whether you’re building from scratch or upgrading an existing app, we’re here to help you create something powerful, user-friendly, and built for growth. Let’s bring your idea to life."
      />
    </>
  );
};

export default Page;
