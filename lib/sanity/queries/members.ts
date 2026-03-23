import { safeFetch } from "../client";

/**
 * Fetches member documents from Sanity, ordered by `order` ascending.
 *
 * @returns The fetched member documents each containing `_id`, `name`, `role`, `bio`, `photo`, and `order`.
 */
export async function getMembersData() {
  return safeFetch(
    `*[_type == "member"] | order(order asc){ _id, name, role, bio, photo, order }`,
    {},
    { next: { revalidate: 3600, tags: ["member"] } }
  );
}
