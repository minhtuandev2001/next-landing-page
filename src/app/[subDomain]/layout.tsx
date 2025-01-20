import { getLandingPageBySubDomain } from "@/apiRequests/landing-page";
import { Metadata, ResolvingMetadata } from "next";

type PropsParams = {
  params: Promise<{ subDomain: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata(
  props: PropsParams,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { subDomain } = await props.params;
  const landingPage: { name: string } = await getLandingPageBySubDomain(
    subDomain
  );
  return Promise.resolve({
    title: landingPage.name,
    description: "",
  });
}

export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
