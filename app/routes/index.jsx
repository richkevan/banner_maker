import { Link, useLoaderData } from "remix";
import styles from "~/styles/index.css";

export function links() {
  return [{rel:"stylesheet", href:styles}]
}

export default function Index() {

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <div className="aside">
      <h1>Banner Maker</h1>
      </div>
      <div className="main">
      <Link to="/github">
      <div className="banner-card">
        <div className="banner-card-image"></div>
      <h1>Github</h1>
      <h3>1280X640</h3>
      </div>
      </Link> 
      </div>
    </div>
  );
}
