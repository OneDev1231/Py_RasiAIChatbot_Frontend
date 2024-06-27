import { getDictionary } from "@/lib/get-dictionary";
import SignInForm from "./sign-in-form";

export default async function SignIn({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return <SignInForm dictionary={dictionary?.auth?.sign_in} />;
}
