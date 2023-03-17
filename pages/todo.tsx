import Link from "next/link";

export default function ToDo() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/notes">Notes</Link>
          </li>
          <li>
            <Link href="/sites">Sites</Link>
          </li>
          <li>
            <Link href="/todo">ToDos</Link>
          </li>
        </ul>
      </nav>
      <header>
        <h1 className=" text-red-500">ToDo</h1>
      </header>
    </>
  );
}
