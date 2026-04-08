export default function Page({ params }: { params: { slug?: string[] } }) {
  return <div>Date: {params.slug?.join("/")}</div>;
}