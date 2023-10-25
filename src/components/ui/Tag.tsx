export default function Tag({ tag }: { tag: string }) {
  return (
    <span className="block rounded-2xl border border-gray-500 px-3 py-1 text-gray-500">
      {tag}
    </span>
  );
}
