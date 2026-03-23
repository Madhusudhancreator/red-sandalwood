import { safeFetch } from "../client";

export async function getMembersData() {
  return safeFetch(
    `*[_type == "member"] | order(order asc){ _id, name, role, bio, photo, order }`,
    {},
    { next: { revalidate: 3600, tags: ["member"] } }
  );
}
