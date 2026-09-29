import { notFound } from "next/navigation";

/** Path apa pun di bawah /en atau /id yang tidak ada → tampilkan not-found berbahasa. */
export default function CatchAll() {
  notFound();
}
