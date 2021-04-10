import Link from "next/link";

export default function MenuItem({ url, title }) {
  return (
    <li className="ml-6 mr-6 first:text-white">
      <Link href={url}>
        <a>{title}</a>
      </Link>
    </li>
  );
}
