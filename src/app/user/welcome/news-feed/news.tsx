import { dummyNewsList } from "@/app/home.dto";
import NewsItem from "./news-item";

const NewsAndBlogs = () => {
	return (
		<section className="mt-10 mb-20 flex flex-col justify-center items-center">
			<div className={"p-2 bg-[#FBF6F3] text-holmes-primary-dark-brown mb-3"}>
				News & Blogs
			</div>

			<h1 className="text-2xl font-bold my-4">Latest News Feeds</h1>

		
			<div className="flex gap-2 DesktopScreen:justify-center MobileScreen:w-[20rem] DesktopScreen:overflow-x-hidden overflow-x-scroll px-10 MobileScreen:px-0">
				{dummyNewsList.map((news, index) => {
					return <NewsItem item={news} key={index} />
				})}
				
			</div>
		</section>
	);
};

export default NewsAndBlogs;
