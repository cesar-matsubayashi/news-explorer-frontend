import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCard from "../NewsCard/NewsCard";
import SavedNewsCardHeader from "../SavedNewsCardHeader/SavedNewsCardHeader";

export default function SavedNewsPage() {
  const savedNews = [
    {
      source: {
        id: "wired",
        name: "Wired",
      },
      author: "Carlton Reid",
      title: "Elon Musk’s Toxicity Could Spell Disaster for Tesla",
      description:
        "Staggering sales drops, swastika-daubed EVs, companies culling fleet models, and fan-forum owners selling their cars—Elon Musk's alt-right antics are seriously impacting his electric car business in Europe.",
      url: "https://www.wired.com/story/elon-musks-toxicity-could-spell-disaster-for-tesla/",
      urlToImage:
        "https://media.wired.com/photos/67acf558c2b232c29a0a5bf0/191:100/w_1280,c_limit/tesla-toxic-gear.jpg",
      publishedAt: "2025-02-14T10:22:21Z",
      content:
        "Ive defended you guys so much over the years, and you make great products, but even I cant stick up for you anymore, she stated.\r\nRóbertsdóttir, now a software developer for Icelandic air traffic con… [+3861 chars]",
      keyword: "Tesla",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Andrew J. Hawkins",
      title: "More Tesla showroom protests planned for this weekend",
      description:
        "Protestors are planning more demonstrations outside Tesla showrooms nationwide this weekend, as Elon Musk’s polarizing behavior and political activities within the Trump administration continue to have negative side effects on his electric car business. The p…",
      url: "https://www.theverge.com/news/612912/tesla-protest-showroom-vandalism-elon-musk-doge",
      urlToImage:
        "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/STK086_TeslaB.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      publishedAt: "2025-02-14T15:04:22Z",
      content:
        "Activists are calling for demonstrations at Tesla showrooms.\r\n\n\nProtestors are planning more demonstrations outside Tesla showrooms nationwide this weekend, as Elon Musk’s polarizing behavior and pol… [+2857 chars]",
      keyword: "Tesla",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "James Whitbrook",
      title: "Madame Web‘s Love Language Is Hitting People With Cars",
      description:
        "One year on, and there's still two things I love about Madame Web as much as it loves itself: stolen vehicles, and hitting people with those stolen vehicles.",
      url: "https://gizmodo.com/madame-web-1-year-anniversary-cars-marvel-sony-spider-man-2000564180",
      urlToImage: "https://gizmodo.com/app/uploads/2025/02/Madame-Web-Car.jpg",
      publishedAt: "2025-02-14T20:00:17Z",
      content:
        "The season of love is in the air once more, but a different anniversary is joining it this year: it’s been one year to the day since Madame Web‘s web dared to connect us all, often in spite of itself… [+5343 chars]",
      keyword: "Car",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "AJ Dellinger",
      title: "Meta Is Looking to Get Into the AI Humanoid Robot Business",
      description:
        "Maybe Mark Zuckerberg has just been a prototype for this project this whole time.",
      url: "https://gizmodo.com/meta-is-getting-into-the-ai-humanoid-robot-business-2000564137",
      urlToImage:
        "https://gizmodo.com/app/uploads/2025/01/GettyImages-2164637635.jpg",
      publishedAt: "2025-02-14T18:45:36Z",
      content:
        "Facebook’s parent company Meta Platforms has moved beyond trying to connect humans and is ready to focus on building robotic ones. According to a report from Bloomberg, Meta is planning to pour money… [+2494 chars]",
      keyword: "Facebook",
    },
  ];

  return (
    <>
      <SavedNewsHeader />
      <section className="saved-news">
        {savedNews.map((news) => (
          <NewsCard key={news.url} news={news}>
            <SavedNewsCardHeader keyword={news.keyword} />
          </NewsCard>
        ))}
      </section>
    </>
  );
}
