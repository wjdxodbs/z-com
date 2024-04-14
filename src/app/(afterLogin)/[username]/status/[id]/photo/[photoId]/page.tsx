import Home from "@/app/(afterLogin)/home/page";

interface Props {
  params: { username: string; id: string; photoId: string };
}

const Page = ({ params }: Props) => {
  return <Home />;
};

export default Page;
