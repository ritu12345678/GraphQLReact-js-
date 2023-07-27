// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";
import Displaylocation from "./Displaylocation";
export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <p>m in app component.</p>
      <Displaylocation />
    </div>
  );
}
