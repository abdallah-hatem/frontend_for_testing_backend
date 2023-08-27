"use client";
import LOGIN from "../../lib/LOGIN";
import GET_COOKIE from "../../lib/GetCookie";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Login() {
  const { push } = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const fomrData = new FormData(e.target);

    const data = Object.fromEntries(fomrData);

    const loginData = await LOGIN(data);

    if (loginData) {
      const cookieData = await GET_COOKIE();
      if (cookieData) {
        console.log(cookieData.cookie);
        Cookies.set("jwt", cookieData.cookie, { expires: 7 });
        push("/");
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} style={{ padding: 10 }}>
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <button name="button" type="submit">
        Submit
      </button>
    </form>
  );
}
