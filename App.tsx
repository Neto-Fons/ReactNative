import { StatusBar } from "expo-status-bar";
import { Account } from "./src/components/account";
import { Contador } from "./src/components/Contador";
export default function App(){
  return(
    <>
  <Account/>
  <StatusBar style="dark"/>
  </>
  );
}