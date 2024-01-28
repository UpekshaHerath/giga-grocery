'use client';
import Link from "next/link";
import Heading from "@/app/components/atoms/Heading";
import {Btn} from "@/app/components/atoms/Btn";

export default function Home() {
  return (
      <>
          <Heading headingText='Home'/>
          <span className="p-4 pl-0 pb-3.5">
              <span className={`pr-3.5`}>
                  <Link href="/dashboard" scroll={false}><Btn functionality={null} text="Dashboard" /></Link>
              </span>
              <span>
                  <Link href="/inventory" scroll={false}><Btn functionality={null} text="Inventory" /></Link>
              </span>
          </span>
          <p className={`m-4 ml-0 bg-gray-100 p-5 align-middle border-r-4 border-2 border-gray-250 justify-center`}>
              Introducing Giga Grocery, an innovative and user-centric mobile application meticulously crafted by a visionary developer with a passion for revolutionizing the way people shop for groceries. Giga Grocery aims to redefine the grocery shopping experience, seamlessly blending cutting-edge technology with the daily necessity of procuring essential items. This feature-rich application boasts an intuitive user interface, ensuring a hassle-free and enjoyable shopping journey for users of all ages and technological backgrounds. With a comprehensive product catalog that spans fresh produce, pantry staples, household essentials, and more, Giga Grocery caters to diverse preferences and dietary needs, becoming the go-to platform for all things grocery-related.
              The app's standout feature lies in its robust search and recommendation engine, employing advanced algorithms to understand user preferences and provide personalized product suggestions. Through a seamless integration of artificial intelligence, Giga Grocery learns from user behavior, offering tailor-made promotions, discounts, and curated shopping lists to enhance the overall convenience and affordability of the shopping experience. The application also incorporates an intelligent shopping cart system, allowing users to effortlessly add and manage items as they navigate the virtual aisles.
              Giga Grocery's commitment to sustainability is evident through its partnerships with local farmers and eco-friendly brands.
          </p>
          <p className={`m-4 ml-0 bg-gray-100 p-5 align-middle border-r-4 border-2 border-gray-250 justify-center`}>
              Users can easily access information about the sourcing and environmental impact of products, empowering them to make conscious and informed choices. The application also facilitates quick and secure transactions through multiple payment options, ensuring a smooth checkout process.
              Furthermore, Giga Grocery embraces a social aspect by incorporating a community-driven platform, enabling users to share reviews, recipes, and shopping tips. This fosters a sense of connection among the Giga Grocery community, turning the app into more than just a shopping destination.
              Security is paramount in Giga Grocery, with state-of-the-art encryption protocols safeguarding user data and transactions.
          </p>
          <p className={`m-4 ml-0 bg-gray-100 p-5 align-middle border-r-4 border-2 border-gray-250 justify-center`}>
              The application also provides real-time order tracking, ensuring users stay informed about the status of their deliveries. In summary, Giga Grocery is not merely an app; it's a lifestyle enhancer, simplifying and elevating the way people approach grocery shopping. Through a fusion of technology, sustainability, community, and security, Giga Grocery is poised to become the preferred choice for individuals seeking a modern and holistic grocery shopping experience.
          </p>
      </>
  )
}
