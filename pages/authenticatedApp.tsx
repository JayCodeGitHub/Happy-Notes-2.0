import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "@/state";

export default function AuthenticatedApp() {
  const router = useRouter();

  function handleRedirect() {
    router.push("/notes");
  }
  const dispatch = useDispatch();
  const { clearstore } = bindActionCreators(actionCreators, dispatch);
  useEffect(() => {
    clearstore();
    handleRedirect();
  }, []);
  return <div></div>;
}
