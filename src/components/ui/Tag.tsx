export default function Tag({ tag }: { tag: string }) {
  return (
    <span className="block rounded-2xl border border-gray-600 px-3 py-1">
      {tag}
    </span>
  );
}
