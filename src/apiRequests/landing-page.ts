import { notFound } from "next/navigation";
export async function getLandingPageBySubDomain(subDomain: string) {
  const res = await fetch(
    `${process.env.BACKEND_ENDPOINT}/landing-page/view/${subDomain}`,
    {
      cache: "force-cache",
    }
  );
  let data = await res.json();
  if (data?.message) {
    notFound();
  } else {
    return data;
  }
}
