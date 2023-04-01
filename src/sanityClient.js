import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


const client = createClient({
  projectId: "z03rf330",
  dataset: "production",
});

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}  


export const getEvents = async () => {
  const events = await client.fetch(
    "*[_type == 'events']{_id, dateTime,detail,'img':img.asset->url,price,name, price,eventType,link}"
  );
  return events;
};
