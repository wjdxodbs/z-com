import SearchForm from "../_component/SearchForm";
import Trend from "../_component/Trend";
import styles from "./explore.module.css";

export default function Home() {
  return (
    <main>
      <div>
        <SearchForm />
      </div>
      <div className={styles.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
}
